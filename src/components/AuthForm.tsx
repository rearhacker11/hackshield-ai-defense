import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HackShieldLogo } from "./HackShieldLogo";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface AuthFormProps {
  mode: "login" | "register";
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
  onToggleMode: () => void;
  loading?: boolean;
}

export const AuthForm = ({ mode, onSubmit, onToggleMode, loading = false }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (mode === "register" && !formData.name) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const isLogin = mode === "login";

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-secondary">
      <Card className="w-full max-w-md bg-card/95 border-cyber-green/30 backdrop-blur-sm">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <HackShieldLogo size="md" />
          </div>
          <div>
            <CardTitle className="text-2xl text-cyber-green">
              {isLogin ? "Access Terminal" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-terminal-green">
              {isLogin 
                ? "Enter your credentials to access the secure dashboard" 
                : "Join the HackShield security network"}
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`bg-input border-border focus:border-cyber-green ${errors.name ? 'border-danger-red' : ''}`}
                />
                {errors.name && <p className="text-xs text-danger-red">{errors.name}</p>}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className={`bg-input border-border focus:border-cyber-green ${errors.email ? 'border-danger-red' : ''}`}
              />
              {errors.email && <p className="text-xs text-danger-red">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className={`bg-input border-border focus:border-cyber-green pr-12 ${errors.password ? 'border-danger-red' : ''}`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              {errors.password && <p className="text-xs text-danger-red">{errors.password}</p>}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              variant="cyber" 
              className="w-full"
              disabled={loading}
            >
              {loading ? "Processing..." : (isLogin ? "Access Dashboard" : "Create Account")}
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "New to HackShield?" : "Already have an account?"}
              </p>
              <Button
                type="button"
                variant="link"
                onClick={onToggleMode}
                className="text-cyber-green hover:text-cyber-green-glow p-0 h-auto"
              >
                {isLogin ? "Create an account" : "Sign in here"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};