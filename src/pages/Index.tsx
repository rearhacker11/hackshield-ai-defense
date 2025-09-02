import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { AuthForm } from "@/components/AuthForm";
import { Dashboard } from "@/components/Dashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  // Temporary simple render for debugging
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🛡️ HACKSHIELD</h1>
        <p className="text-xl">AI Malware Scanner</p>
        <p className="text-sm mt-4">App is working! Loading components...</p>
      </div>
    </div>
  );
};

export default Index;
