import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { createHmac } from "https://deno.land/std@0.190.0/crypto/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[VERIFY-RAZORPAY-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const razorpayKeySecret = Deno.env.get("RAZORPAY_KEY_SECRET");
    if (!razorpayKeySecret) {
      throw new Error("Razorpay secret key is not configured");
    }

    // Use the service role key to perform writes in Supabase
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header provided");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) {
      throw new Error(`Authentication error: ${userError.message}`);
    }
    
    const user = userData.user;
    if (!user?.email) {
      throw new Error("User not authenticated or email not available");
    }
    logStep("User authenticated", { userId: user.id, email: user.email });

    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      throw new Error("Missing required payment verification parameters");
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const key = new TextEncoder().encode(razorpayKeySecret);
    const data = new TextEncoder().encode(text);
    
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      key,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    
    const signature = await crypto.subtle.sign("HMAC", cryptoKey, data);
    const expectedSignature = Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (expectedSignature !== razorpay_signature) {
      throw new Error("Payment signature verification failed");
    }

    logStep("Payment signature verified", { orderId: razorpay_order_id, paymentId: razorpay_payment_id });

    // Update payment order status
    const { data: orderData, error: fetchError } = await supabaseClient
      .from("payment_orders")
      .select("*")
      .eq("razorpay_order_id", razorpay_order_id)
      .eq("user_id", user.id)
      .single();

    if (fetchError || !orderData) {
      throw new Error("Payment order not found");
    }

    const { error: updateError } = await supabaseClient
      .from("payment_orders")
      .update({
        razorpay_payment_id,
        status: "completed",
        verified_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", razorpay_order_id);

    if (updateError) {
      logStep("Database update error", { error: updateError.message });
    }

    // Update user credits/subscription based on payment type
    if (orderData.payment_type === "scan") {
      // Add scan credits
      const { error: creditError } = await supabaseClient
        .from("user_credits")
        .upsert({
          user_id: user.id,
          scan_credits: 1,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id",
          ignoreDuplicates: false,
        });

      if (creditError) {
        logStep("Credit update error", { error: creditError.message });
      }
    } else if (orderData.payment_type === "subscription") {
      // Update subscription
      const subscriptionEnd = new Date();
      subscriptionEnd.setMonth(subscriptionEnd.getMonth() + 1);

      const { error: subError } = await supabaseClient
        .from("user_subscriptions")
        .upsert({
          user_id: user.id,
          plan_type: "premium",
          status: "active",
          current_period_end: subscriptionEnd.toISOString(),
          updated_at: new Date().toISOString(),
        }, {
          onConflict: "user_id",
          ignoreDuplicates: false,
        });

      if (subError) {
        logStep("Subscription update error", { error: subError.message });
      }
    }

    logStep("Payment verification completed successfully");

    return new Response(JSON.stringify({
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paymentType: orderData.payment_type,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in verify-razorpay-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});