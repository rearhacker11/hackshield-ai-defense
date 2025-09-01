import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  CreditCard, 
  Zap, 
  Star, 
  RefreshCw,
  Calendar,
  Shield
} from "lucide-react";

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "",
  import.meta.env.VITE_SUPABASE_ANON_KEY || ""
);

interface UserProfileProps {
  user: { email: string; name?: string };
  onOpenPayment: () => void;
}

interface UserData {
  credits: number;
  subscription: {
    plan: string;
    status: string;
    endDate: string | null;
  };
}

export const UserProfile = ({ user, onOpenPayment }: UserProfileProps) => {
  const [userData, setUserData] = useState<UserData>({
    credits: 0,
    subscription: {
      plan: "free",
      status: "inactive",
      endDate: null
    }
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUserData = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session) {
        console.error("No session found");
        return;
      }

      // Fetch user credits
      const { data: creditsData, error: creditsError } = await supabase
        .from("user_credits")
        .select("scan_credits")
        .eq("user_id", session.user.id)
        .single();

      // Fetch user subscription
      const { data: subData, error: subError } = await supabase
        .from("user_subscriptions")
        .select("plan_type, status, current_period_end")
        .eq("user_id", session.user.id)
        .single();

      setUserData({
        credits: creditsData?.scan_credits || 0,
        subscription: {
          plan: subData?.plan_type || "free",
          status: subData?.status || "inactive",
          endDate: subData?.current_period_end || null
        }
      });

    } catch (error) {
      console.error("Error fetching user data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch user data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const refreshData = () => {
    setLoading(true);
    fetchUserData();
  };

  const isPremium = userData.subscription.status === "active" && userData.subscription.plan === "premium";
  const subscriptionEndDate = userData.subscription.endDate 
    ? new Date(userData.subscription.endDate).toLocaleDateString()
    : null;

  if (loading) {
    return (
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green">
            <User className="w-5 h-5" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="w-6 h-6 animate-spin text-cyber-green" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/80 border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyber-green">
          <User className="w-5 h-5" />
          Profile
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Subscription Status */}
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border">
          <div className="flex items-center gap-2">
            <Star className={`w-4 h-4 ${isPremium ? 'text-cyber-green' : 'text-muted-foreground'}`} />
            <span className="text-sm font-medium">
              {isPremium ? "Premium Plan" : "Free Plan"}
            </span>
          </div>
          <Badge 
            variant={isPremium ? "default" : "outline"}
            className={isPremium ? "bg-cyber-green text-background" : ""}
          >
            {userData.subscription.status}
          </Badge>
        </div>

        {/* Subscription Details */}
        {isPremium && subscriptionEndDate && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground p-2 bg-background/30 rounded">
            <Calendar className="w-3 h-3" />
            Expires on {subscriptionEndDate}
          </div>
        )}

        {/* Scan Credits */}
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg border">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyber-green" />
            <span className="text-sm font-medium">Scan Credits</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono">
              {isPremium ? "∞" : userData.credits}
            </Badge>
            {!isPremium && userData.credits === 0 && (
              <span className="text-xs text-danger-red">No credits</span>
            )}
          </div>
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
          
          <Button 
            onClick={refreshData} 
            variant="cyber-outline" 
            size="sm" 
            className="w-full"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Status
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