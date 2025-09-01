import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-RAZORPAY-ORDER] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const razorpayKeyId = Deno.env.get("RAZORPAY_KEY_ID");
    const razorpayKeySecret = Deno.env.get("RAZORPAY_KEY_SECRET");
    
    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error("Razorpay keys are not configured");
    }
    logStep("Razorpay keys verified");

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

    const { amount, currency = "INR", type = "scan" } = await req.json();
    
    if (!amount) {
      throw new Error("Amount is required");
    }

    // Create Razorpay order
    const orderData = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: currency,
      receipt: `${type}_${user.id}_${Date.now()}`,
      notes: {
        user_id: user.id,
        user_email: user.email,
        payment_type: type
      }
    };

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${btoa(`${razorpayKeyId}:${razorpayKeySecret}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Razorpay API error: ${error}`);
    }

    const order = await response.json();
    logStep("Razorpay order created", { orderId: order.id, amount: order.amount });

    // Store order in database
    const { error: dbError } = await supabaseClient
      .from("payment_orders")
      .insert({
        user_id: user.id,
        razorpay_order_id: order.id,
        amount: amount,
        currency: currency,
        payment_type: type,
        status: "created",
        created_at: new Date().toISOString(),
      });

    if (dbError) {
      logStep("Database error", { error: dbError.message });
      // Continue even if DB insert fails
    }

    return new Response(JSON.stringify({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: razorpayKeyId,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-razorpay-order", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});