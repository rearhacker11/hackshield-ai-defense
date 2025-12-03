import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { AuthForm } from "@/components/AuthForm";
import { Dashboard } from "@/components/Dashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentView, setCurrentView] = useState<"welcome" | "auth" | "dashboard">("welcome");
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const { toast } = useToast();

  const handleGetStarted = () => {
    setCurrentView("auth");
    setAuthMode("register");
  };

  const handleAuth = async (data: { email: string; password: string; name?: string }) => {
    setAuthLoading(true);
    
    // Simulate authentication process
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate user creation/login
      const userData = {
        email: data.email,
        name: data.name || data.email.split('@')[0]
      };
      
      setUser(userData);
      setCurrentView("dashboard");
      
      toast({
        title: authMode === "login" ? "Login Successful" : "Account Created",
        description: `Welcome to HackShield, ${userData.name}!`,
      });
    } catch (error) {
      toast({
        title: "Authentication Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("welcome");
    toast({
      title: "Logged Out",
      description: "You have been securely logged out of HackShield.",
    });
  };

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === "login" ? "register" : "login");
  };

  if (currentView === "welcome") {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  if (currentView === "auth") {
    return (
      <AuthForm
        mode={authMode}
        onSubmit={handleAuth}
        onToggleMode={toggleAuthMode}
        loading={authLoading}
      />
    );
  }

  if (currentView === "dashboard" && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return null;
};

export default Index;
