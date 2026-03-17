import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  CreditCard, 
  Zap, 
  Star, 
  Shield,
  Crown
} from "lucide-react";

interface UserProfileProps {
  user: { email: string; name?: string };
  credits: number;
  isPremium: boolean;
  onOpenPayment: () => void;
}

export const UserProfile = ({ user, credits, isPremium, onOpenPayment }: UserProfileProps) => {
  return (
    <Card className="bg-card/80 border-border mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyber-green">
          <User className="w-5 h-5" />
          Profile
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Subscription Status */}
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            {isPremium ? <Crown className="w-4 h-4 text-cyber-green" /> : <Star className="w-4 h-4 text-muted-foreground" />}
            <span className="text-sm font-medium text-foreground">
              {isPremium ? "Premium Plan" : "Free Plan"}
            </span>
          </div>
          <Badge 
            variant={isPremium ? "default" : "outline"}
            className={isPremium ? "bg-cyber-green text-background" : ""}
          >
            active
          </Badge>
        </div>

        {/* Scan Credits */}
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyber-green" />
            <span className="text-sm font-medium text-foreground">Scan Credits</span>
          </div>
          <Badge variant="outline" className="font-mono">
            {isPremium ? "∞" : credits}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button 
            onClick={onOpenPayment} 
            variant="cyber" 
            size="sm" 
            className="w-full"
          >
            <CreditCard className="w-4 h-4 mr-2" />
            {isPremium ? "Extend Subscription" : "Buy Credits / Subscribe"}
          </Button>
        </div>

        {/* Security Notice */}
        <div className="mt-4 p-3 bg-cyber-green/10 border border-cyber-green/20 rounded-lg">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-cyber-green mt-0.5 flex-shrink-0" />
            <div className="text-xs text-muted-foreground">
              <p className="font-medium text-cyber-green mb-1">Secure Payments</p>
              <p>All transactions are processed securely through Razorpay with bank-level encryption.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
