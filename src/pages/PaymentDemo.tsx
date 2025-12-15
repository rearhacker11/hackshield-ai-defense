import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Zap, Shield, Star, ArrowLeft, X, Lock, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

// Razorpay Checkout Mockup Component
const RazorpayCheckoutMockup = ({ 
  isOpen, 
  onClose, 
  planName, 
  amount 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  planName: string; 
  amount: number; 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-2xl overflow-hidden">
        {/* Razorpay Header */}
        <div className="bg-[#072654] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-[#072654] font-bold text-lg">R</span>
            </div>
            <div>
              <p className="text-white font-semibold">HackShield</p>
              <p className="text-blue-200 text-sm">{planName}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Amount Section */}
        <div className="bg-[#0b3d91] p-4 text-center">
          <p className="text-blue-200 text-sm">Amount Payable</p>
          <p className="text-white text-3xl font-bold">₹{amount.toFixed(2)}</p>
        </div>

        {/* Payment Methods */}
        <div className="p-4 space-y-3">
          <p className="text-gray-600 text-sm font-medium mb-3">Choose Payment Method</p>
          
          {/* UPI */}
          <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors bg-blue-50 border-blue-500">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">UPI</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">UPI</p>
                  <p className="text-gray-500 text-xs">Pay with any UPI app</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Card</p>
                  <p className="text-gray-500 text-xs">Visa, Mastercard, Rupay</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>

          {/* Net Banking */}
          <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">NB</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Netbanking</p>
                  <p className="text-gray-500 text-xs">All Indian banks</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>

          {/* Wallet */}
          <div className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Wallet</p>
                  <p className="text-gray-500 text-xs">Paytm, PhonePe, Amazon Pay</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="p-4 pt-0">
          <button className="w-full bg-[#072654] hover:bg-[#0b3d91] text-white py-3 rounded-lg font-semibold transition-colors">
            Pay ₹{amount.toFixed(2)}
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-3 flex items-center justify-center gap-2 border-t">
          <Lock className="w-3 h-3 text-gray-500" />
          <p className="text-gray-500 text-xs">Secured by <span className="font-semibold text-[#072654]">Razorpay</span></p>
        </div>
      </div>
    </div>
  );
};

export const PaymentDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState<"scan" | "subscription" | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState({ name: "", amount: 0 });

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

  const handlePayClick = (planTitle: string, price: number) => {
    setCheckoutPlan({ name: planTitle, amount: price });
    setShowCheckout(true);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        {/* Payment Modal Content */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CreditCard className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-primary">Choose Your Plan</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Unlock advanced malware scanning capabilities
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan === plan.id;

              return (
                <Card 
                  key={plan.id} 
                  className={`relative bg-card/80 border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                    isSelected ? 'ring-2 ring-primary border-primary' : ''
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.badge && (
                    <Badge 
                      className={`absolute -top-3 left-4 ${
                        plan.id === "subscription" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-foreground border border-border"
                      }`}
                    >
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pt-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full ${
                        plan.id === "subscription" 
                          ? "bg-primary/20" 
                          : "bg-secondary"
                      }`}>
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-foreground">{plan.title}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-5xl font-bold text-primary">₹{plan.price}</span>
                      <span className="text-muted-foreground text-lg">
                        {plan.id === "subscription" ? "/month" : "/scan"}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-8">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full text-lg py-6"
                      variant={plan.id === "subscription" ? "cyber" : "cyber-outline"}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePayClick(plan.title, plan.price);
                      }}
                    >
                      Pay ₹{plan.price}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Security Notice */}
          <div className="p-6 bg-secondary/50 rounded-xl border border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium">Secure Payment</p>
                <p className="text-sm text-muted-foreground">
                  Powered by Razorpay. Your data is protected with bank-level encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Razorpay Logo */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Payment Gateway: <span className="text-primary font-semibold">Razorpay</span> | 
              SSL Encrypted | PCI DSS Compliant
            </p>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 text-center">
          <Badge variant="outline" className="text-muted-foreground">
            Demo Mode - Click "Pay" to see Razorpay Checkout
          </Badge>
        </div>
      </div>

      {/* Razorpay Checkout Mockup */}
      <RazorpayCheckoutMockup
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        planName={checkoutPlan.name}
        amount={checkoutPlan.amount}
      />
    </div>
  );
};

export default PaymentDemo;
