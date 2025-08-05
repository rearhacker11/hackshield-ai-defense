import { Button } from "@/components/ui/button";
import { HackShieldLogo } from "./HackShieldLogo";
import { ArrowRight, Shield, Scan, FileCheck } from "lucide-react";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Logo and Title */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <HackShieldLogo size="lg" />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-terminal-green">
              Advanced AI-Powered Cybersecurity Defense
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Protect your digital assets with cutting-edge machine learning technology. 
              Upload files and get instant malware analysis with confidence scores and detailed reports.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-cyber-green transition-colors duration-300">
            <Shield className="w-12 h-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Protection</h3>
            <p className="text-muted-foreground text-sm">
              Instant file analysis using advanced AI algorithms for maximum security
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:border-cyber-green transition-colors duration-300">
            <Scan className="w-12 h-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Multi-format Support</h3>
            <p className="text-muted-foreground text-sm">
              Supports .exe, .pdf, .txt, .docx, .py files with comprehensive analysis
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:border-cyber-green transition-colors duration-300">
            <FileCheck className="w-12 h-12 text-cyber-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Detailed Reports</h3>
            <p className="text-muted-foreground text-sm">
              Generate comprehensive PDF reports with confidence scores and metadata
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <div className="bg-card/50 border border-border rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyber-green mb-4">Ready to Secure Your Files?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users protecting their digital assets with HackShield
            </p>
            <Button 
              variant="cyber" 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-3"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Powered by advanced machine learning • Zero-knowledge architecture • Enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};