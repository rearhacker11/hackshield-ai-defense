import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Zap, Shield, Star, CheckCircle, IndianRupee } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (planType: "scan" | "subscription") => void;
  user: { email: string; name?: string };
}

export const PaymentModal = ({ isOpen, onClose, onPaymentSuccess, user }: PaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"scan" | "subscription" | null>(null);
  const [paymentStep, setPaymentStep] = useState<"plans" | "processing" | "success">("plans");
  const { toast } = useToast();

  const plans = [
    {
      id: "scan" as const,
      title: "Single Scan",
      price: 199,
      description: "Perfect for one-time file analysis",
      features: [
        "1 File Scan Credit",
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
    setPaymentStep("processing");

    // Simulate Razorpay payment processing
    await new Promise(resolve => setTimeout(resolve, 2500));

    setPaymentStep("success");
    setLoading(false);

    // Auto close after showing success
    setTimeout(() => {
      const plan = plans.find(p => p.id === planType);
      toast({
        title: "Payment Successful! 🎉",
        description: planType === "scan" 
          ? `₹${plan?.price} paid - 1 Scan Credit added to your account` 
          : `₹${plan?.price} paid - Welcome to HackShield Premium!`,
      });
      onPaymentSuccess(planType);
      setPaymentStep("plans");
      setSelectedPlan(null);
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    if (!loading) {
      setPaymentStep("plans");
      setSelectedPlan(null);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
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

        {paymentStep === "plans" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.id} 
                    className="relative bg-card/80 border-border hover:border-cyber-green/50 transition-all duration-300"
                  >
                    {plan.badge && (
                      <Badge className="absolute -top-2 left-4 bg-cyber-green text-background">
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
                        Pay ₹{plan.price}
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
          </>
        )}

        {paymentStep === "processing" && (
          <div className="py-12 text-center space-y-6">
            <div className="relative mx-auto w-20 h-20">
              <div className="w-20 h-20 border-4 border-cyber-green/30 border-t-cyber-green rounded-full animate-spin" />
              <IndianRupee className="w-8 h-8 text-cyber-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyber-green">Processing Payment...</h3>
              <p className="text-muted-foreground mt-2">
                Razorpay Gateway • ₹{plans.find(p => p.id === selectedPlan)?.price}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {user.email} • UPI / Card / Netbanking
              </p>
            </div>
            <div className="max-w-xs mx-auto bg-background/50 rounded-lg p-4 border border-border">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-mono text-foreground">ORD_{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment Method</span>
                <span className="text-foreground">Razorpay</span>
              </div>
            </div>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="py-12 text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-cyber-green/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-cyber-green" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyber-green">Payment Successful! 🎉</h3>
              <p className="text-muted-foreground mt-2">
                {selectedPlan === "subscription" 
                  ? "Welcome to HackShield Premium! Unlimited scans activated." 
                  : "1 Scan Credit has been added to your account."}
              </p>
            </div>
            <div className="max-w-xs mx-auto bg-cyber-green/10 rounded-lg p-4 border border-cyber-green/30">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-bold text-cyber-green">₹{plans.find(p => p.id === selectedPlan)?.price}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-mono text-foreground">TXN{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <Badge className="bg-cyber-green text-background">SUCCESS</Badge>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
