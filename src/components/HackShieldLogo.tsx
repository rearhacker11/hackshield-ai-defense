import { Shield, Zap } from "lucide-react";

interface HackShieldLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const HackShieldLogo = ({ size = "md", showText = true }: HackShieldLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} relative cyber-pulse`}>
        <Shield className="w-full h-full text-cyber-green" fill="currentColor" />
        <Zap className="w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background" />
      </div>
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[size]} font-bold text-cyber-green tracking-wider`}>
            HACKSHIELD
          </h1>
          <p className="text-xs text-terminal-green tracking-widest">AI MALWARE SCANNER</p>
        </div>
      )}
    </div>
  );
};