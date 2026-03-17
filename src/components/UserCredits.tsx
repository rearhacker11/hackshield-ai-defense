import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Zap,
  Star,
  Shield,
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle,
  Calendar,
  Crown,
  Gift
} from "lucide-react";

interface UserCreditsProps {
  user: { email: string; name?: string };
  credits: number;
  isPremium: boolean;
  totalScans: number;
  onOpenPayment: () => void;
}

export const UserCredits = ({ user, credits, isPremium, totalScans, onOpenPayment }: UserCreditsProps) => {
  const usedCredits = totalScans;
  const maxFreeCredits = 10;
  const creditsPercentage = isPremium ? 100 : Math.min((credits / maxFreeCredits) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Credit Overview Header */}
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green">
            <Zap className="w-5 h-5" />
            User Credits & Subscription
          </CardTitle>
          <CardDescription>Manage your scan credits and subscription plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <Zap className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">
                {isPremium ? "∞" : credits}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Available Credits</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <TrendingUp className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">{totalScans}</p>
              <p className="text-xs text-muted-foreground mt-1">Total Scans Used</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <Star className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">
                {isPremium ? "Premium" : "Free"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Current Plan</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <Shield className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">Active</p>
              <p className="text-xs text-muted-foreground mt-1">Account Status</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Plan Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={`border-2 ${isPremium ? 'border-cyber-green/50 bg-cyber-green/5' : 'border-border bg-card/80'}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyber-green">
              {isPremium ? <Crown className="w-5 h-5" /> : <Star className="w-5 h-5" />}
              {isPremium ? "Premium Plan" : "Free Plan"}
            </CardTitle>
            <CardDescription>
              {isPremium ? "Unlimited scanning with priority access" : "Basic scanning with limited credits"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Plan Type</span>
                <Badge className={isPremium ? "bg-cyber-green text-background" : ""}>
                  {isPremium ? "PREMIUM" : "FREE"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Scan Limit</span>
                <span className="font-mono text-foreground">{isPremium ? "Unlimited" : `${credits}/${maxFreeCredits}`}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Report Downloads</span>
                <span className="font-mono text-foreground">{isPremium ? "Unlimited" : "Limited"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Priority Support</span>
                <span className="font-mono text-foreground">{isPremium ? "Yes" : "No"}</span>
              </div>
              {isPremium && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Valid Until</span>
                  <span className="font-mono text-cyber-green">2026-04-17</span>
                </div>
              )}
            </div>

            {!isPremium && (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Credits Used</span>
                    <span>{usedCredits}/{maxFreeCredits}</span>
                  </div>
                  <Progress value={creditsPercentage} className="h-2" />
                </div>
                <Button variant="cyber" className="w-full" onClick={onOpenPayment}>
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Premium - ₹799/month
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {/* Credit History */}
        <Card className="bg-card/80 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyber-green text-base">
              <Clock className="w-5 h-5" />
              Credit Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "Account Created", credits: "+5", date: "2026-03-10", type: "bonus" },
                { action: "File Scan - document.pdf", credits: "-1", date: "2026-03-12", type: "used" },
                { action: "File Scan - setup.exe", credits: "-1", date: "2026-03-13", type: "used" },
                { action: "Purchased Credits", credits: "+3", date: "2026-03-14", type: "purchased" },
                { action: "File Scan - notes.txt", credits: "-1", date: "2026-03-15", type: "used" },
                ...(isPremium ? [{ action: "Premium Activated", credits: "∞", date: "2026-03-17", type: "premium" as const }] : []),
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === "bonus" ? "bg-cyber-green/20" :
                      item.type === "purchased" ? "bg-cyber-green/20" :
                      item.type === "premium" ? "bg-cyber-green/30" :
                      "bg-muted"
                    }`}>
                      {item.type === "used" ? (
                        <Zap className="w-4 h-4 text-muted-foreground" />
                      ) : item.type === "premium" ? (
                        <Crown className="w-4 h-4 text-cyber-green" />
                      ) : (
                        <Gift className="w-4 h-4 text-cyber-green" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <span className={`font-mono font-bold text-sm ${
                    item.credits.startsWith("+") || item.credits === "∞" ? "text-cyber-green" : "text-danger-red"
                  }`}>
                    {item.credits}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Buy Credits Section */}
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green">
            <CreditCard className="w-5 h-5" />
            Purchase Options
          </CardTitle>
          <CardDescription>Add more scan credits or upgrade your plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center space-y-3">
              <Shield className="w-8 h-8 text-cyber-green mx-auto" />
              <h4 className="font-bold text-foreground">Single Scan</h4>
              <p className="text-2xl font-bold text-cyber-green">₹199</p>
              <p className="text-xs text-muted-foreground">1 scan credit</p>
              <Button variant="cyber-outline" size="sm" className="w-full" onClick={onOpenPayment}>
                Buy Now
              </Button>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border-2 border-cyber-green/50 text-center space-y-3 relative">
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-cyber-green text-background">
                POPULAR
              </Badge>
              <Star className="w-8 h-8 text-cyber-green mx-auto" />
              <h4 className="font-bold text-foreground">5 Scan Pack</h4>
              <p className="text-2xl font-bold text-cyber-green">₹799</p>
              <p className="text-xs text-muted-foreground">5 scan credits</p>
              <Button variant="cyber" size="sm" className="w-full" onClick={onOpenPayment}>
                Buy Now
              </Button>
            </div>
            <div className="bg-cyber-green/5 p-5 rounded-lg border-2 border-cyber-green/30 text-center space-y-3">
              <Crown className="w-8 h-8 text-cyber-green mx-auto" />
              <h4 className="font-bold text-foreground">Premium Monthly</h4>
              <p className="text-2xl font-bold text-cyber-green">₹799</p>
              <p className="text-xs text-muted-foreground">Unlimited scans/month</p>
              <Button variant="cyber" size="sm" className="w-full" onClick={onOpenPayment}>
                Subscribe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <div className="p-4 bg-cyber-green/10 border border-cyber-green/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-cyber-green mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-cyber-green mb-1">Secure Payment Gateway</p>
            <p>All transactions are processed through Razorpay with 256-bit SSL encryption. Your financial data is never stored on our servers. Refund policy: Full refund within 24 hours of purchase.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
