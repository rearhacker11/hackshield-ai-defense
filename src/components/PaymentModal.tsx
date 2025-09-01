import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Zap, Shield, Star, X } from "lucide-react";

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "",
  import.meta.env.VITE_SUPABASE_ANON_KEY || ""
);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  user: { email: string; name?: string };
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentModal = ({ isOpen, onClose, onPaymentSuccess, user }: PaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"scan" | "subscription" | null>(null);
  const { toast } = useToast();

  const plans = [
    {
      id: "scan" as const,
      title: "Single Scan",
      price: 199,
      description: "Perfect for one-time file analysis",
      features: [
        "1 File Scan",
        "Detailed Security Report",
        "24/7 Support",
        "Instant Results"
      ],
      icon: Shield,
      badge: "Pay per scan"
    },
    {
      id: "subscription" as const,
      title: "Premium Monthly",
      price: 799,
      description: "Unlimited scanning for professionals",
      features: [
        "Unlimited File Scans",
        "Priority Processing",
        "Advanced Analytics",
        "API Access",
        "Priority Support"
      ],
      icon: Star,
      badge: "Best Value"
    }
  ];

  const handlePayment = async (planType: "scan" | "subscription") => {
    setLoading(true);
    setSelectedPlan(planType);

    try {
      const plan = plans.find(p => p.id === planType);
      if (!plan) throw new Error("Invalid plan selected");

      // Get current session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session) {
        throw new Error("Please login to continue with payment");
      }

      // Create Razorpay order
      const { data: orderData, error: orderError } = await supabase.functions.invoke(
        'create-razorpay-order',
        {
          body: {
            amount: plan.price,
            currency: 'INR',
            type: planType
          },
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );

      if (orderError) throw orderError;
      if (!orderData || orderData.error) {
        throw new Error(orderData?.error || "Failed to create order");
      }

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
      }

      // Configure Razorpay options
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: 'INR',
        name: 'HackShield',
        description: plan.title,
        order_id: orderData.orderId,
        prefill: {
          name: user.name || user.email.split('@')[0],
          email: user.email,
        },
        theme: {
          color: '#00ff00'
        },
        handler: async (response: RazorpayResponse) => {
          try {
            // Verify payment
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
              'verify-razorpay-payment',
              {
                body: {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                },
                headers: {
                  Authorization: `Bearer ${session.access_token}`,
                },
              }
            );

            if (verifyError) throw verifyError;
            if (!verifyData || verifyData.error) {
              throw new Error(verifyData?.error || "Payment verification failed");
            }

            toast({
              title: "Payment Successful! 🎉",
              description: planType === "scan" 
                ? "Your scan credit has been added to your account" 
                : "Welcome to HackShield Premium!",
            });

            onPaymentSuccess();
            onClose();
          } catch (error) {
            console.error('Payment verification error:', error);
            toast({
              title: "Payment Verification Failed",
              description: "Please contact support if amount was deducted",
              variant: "destructive",
            });
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setSelectedPlan(null);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setSelectedPlan(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-cyber-green">
            <CreditCard className="w-5 h-5" />
            Choose Your Plan
          </DialogTitle>
          <DialogDescription>
            Unlock advanced malware scanning capabilities
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            const isLoading = loading && isSelected;

            return (
              <Card 
                key={plan.id} 
                className={`relative bg-card/80 border-border hover:border-cyber-green/50 transition-all duration-300 ${
                  isSelected ? 'ring-2 ring-cyber-green' : ''
                }`}
              >
                {plan.badge && (
                  <Badge 
                    className="absolute -top-2 left-4 bg-cyber-green text-background"
                  >
                    {plan.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-8 h-8 text-cyber-green" />
                  </div>
                  <CardTitle className="text-foreground">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-cyber-green">₹{plan.price}</span>
                    <span className="text-muted-foreground">
                      {plan.id === "subscription" ? "/month" : "/scan"}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-cyber-green flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePayment(plan.id)}
                    disabled={loading}
                    className="w-full"
                    variant={plan.id === "subscription" ? "cyber" : "cyber-outline"}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      `Pay ₹${plan.price}`
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            Secure payment powered by Razorpay. Your data is protected with bank-level security.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};