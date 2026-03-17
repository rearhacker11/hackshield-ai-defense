import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Crown, 
  CreditCard, 
  CheckCircle, 
  Calendar,
  IndianRupee
} from "lucide-react";

const paymentUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    plan: "Premium Monthly",
    amount: 799,
    date: "2026-03-17",
    txnId: "TXN_RS2603171045",
    status: "active"
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@yahoo.com",
    plan: "5 Scan Pack",
    amount: 799,
    date: "2026-03-16",
    txnId: "TXN_PP2603160932",
    status: "completed"
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@outlook.com",
    plan: "Premium Monthly",
    amount: 799,
    date: "2026-03-15",
    txnId: "TXN_AK2603151520",
    status: "active"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@gmail.com",
    plan: "Single Scan",
    amount: 199,
    date: "2026-03-15",
    txnId: "TXN_SG2603151200",
    status: "completed"
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@hotmail.com",
    plan: "Premium Monthly",
    amount: 799,
    date: "2026-03-14",
    txnId: "TXN_VS2603141830",
    status: "active"
  },
  {
    id: 6,
    name: "Neha Verma",
    email: "neha.verma@gmail.com",
    plan: "5 Scan Pack",
    amount: 799,
    date: "2026-03-13",
    txnId: "TXN_NV2603131100",
    status: "completed"
  },
  {
    id: 7,
    name: "Arjun Reddy",
    email: "arjun.reddy@gmail.com",
    plan: "Single Scan",
    amount: 199,
    date: "2026-03-12",
    txnId: "TXN_AR2603121400",
    status: "completed"
  },
  {
    id: 8,
    name: "Kavita Joshi",
    email: "kavita.joshi@yahoo.com",
    plan: "Premium Monthly",
    amount: 799,
    date: "2026-03-11",
    txnId: "TXN_KJ2603111600",
    status: "active"
  }
];

export const PaymentUsers = () => {
  const totalRevenue = paymentUsers.reduce((sum, u) => sum + u.amount, 0);
  const premiumUsers = paymentUsers.filter(u => u.plan === "Premium Monthly").length;
  const totalTransactions = paymentUsers.length;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green">
            <CreditCard className="w-5 h-5" />
            Payment & Subscription Overview
          </CardTitle>
          <CardDescription>Users who have purchased subscriptions or scan credits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <Users className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">{totalTransactions}</p>
              <p className="text-xs text-muted-foreground mt-1">Total Payments</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <Crown className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">{premiumUsers}</p>
              <p className="text-xs text-muted-foreground mt-1">Premium Subscribers</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <IndianRupee className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Total Revenue</p>
            </div>
            <div className="bg-background/50 p-5 rounded-lg border border-border text-center">
              <CheckCircle className="w-8 h-8 text-cyber-green mx-auto mb-2" />
              <p className="text-3xl font-bold font-mono text-cyber-green">100%</p>
              <p className="text-xs text-muted-foreground mt-1">Success Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Users Table */}
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green text-base">
            <Users className="w-5 h-5" />
            Paid Users List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentUsers.map((user) => (
              <div key={user.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background/50 rounded-lg border border-border gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyber-green/20 flex items-center justify-center text-cyber-green font-bold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Badge className={
                    user.plan === "Premium Monthly" 
                      ? "bg-cyber-green text-background" 
                      : user.plan === "5 Scan Pack" 
                        ? "bg-cyber-green/70 text-background" 
                        : ""
                  }>
                    {user.plan}
                  </Badge>
                  <span className="font-mono text-cyber-green font-bold text-sm">₹{user.amount}</span>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-mono">{user.txnId}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {user.date}
                    </p>
                  </div>
                  <Badge variant={user.status === "active" ? "default" : "secondary"} className={user.status === "active" ? "bg-cyber-green/20 text-cyber-green border-cyber-green/30" : ""}>
                    {user.status === "active" ? "ACTIVE" : "COMPLETED"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
