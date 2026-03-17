import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HackShieldLogo } from "./HackShieldLogo";
import { FileUpload } from "./FileUpload";
import { ScanResults } from "./ScanResults";
import { PaymentModal } from "./PaymentModal";
import { UserProfile } from "./UserProfile";
import { UserCredits } from "./UserCredits";
import { Reports } from "./Reports";
import { PaymentUsers } from "./PaymentUsers";
import { 
  Upload, 
  History, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  LogOut,
  BarChart3,
  Zap,
  CreditCard
} from "lucide-react";

interface ScanResult {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  status: "safe" | "malware" | "scanning";
  confidence: number;
  scanDate: Date;
  threats?: string[];
}

interface DashboardProps {
  user: { email: string; name?: string };
  onLogout: () => void;
}

export const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const [currentView, setCurrentView] = useState<"upload" | "results" | "history" | "reports" | "credits" | "payments">("upload");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [credits, setCredits] = useState(5);
  const [isPremium, setIsPremium] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([
    {
      id: "1",
      fileName: "document.pdf",
      fileSize: 1024576,
      fileType: "pdf",
      status: "safe",
      confidence: 98.5,
      scanDate: new Date(Date.now() - 3600000),
      threats: []
    },
    {
      id: "2", 
      fileName: "suspicious_file.exe",
      fileSize: 2048000,
      fileType: "exe",
      status: "malware",
      confidence: 94.7,
      scanDate: new Date(Date.now() - 7200000),
      threats: ["Trojan.Generic", "Adware.Downloader"]
    }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const [currentScan, setCurrentScan] = useState<ScanResult | null>(null);

  const handleFileUpload = async (file: File) => {
    const newScan: ScanResult = {
      id: Date.now().toString(),
      fileName: file.name,
      fileSize: file.size,
      fileType: file.name.split('.').pop() || 'unknown',
      status: "scanning",
      confidence: 0,
      scanDate: new Date(),
      threats: []
    };

    setCurrentScan(newScan);
    setIsScanning(true);
    setCurrentView("results");

    await new Promise(resolve => setTimeout(resolve, 3000));

    const isMalware = file.name.includes('.exe') && Math.random() > 0.5;
    const confidence = isMalware ? 
      Math.round((70 + Math.random() * 25) * 10) / 10 :
      Math.round((85 + Math.random() * 14) * 10) / 10;

    const completedScan: ScanResult = {
      ...newScan,
      status: isMalware ? "malware" : "safe",
      confidence,
      threats: isMalware ? ["Trojan.Generic", "VirusTotal Analysis"] : []
    };

    setCurrentScan(completedScan);
    setScanResults(prev => [completedScan, ...prev]);
    setIsScanning(false);
    if (!isPremium) setCredits(prev => Math.max(0, prev - 1));
  };

  const handlePaymentSuccess = (planType: "scan" | "subscription") => {
    if (planType === "subscription") {
      setIsPremium(true);
    } else {
      setCredits(prev => prev + 1);
    }
  };

  const stats = {
    totalScans: scanResults.length,
    threatsDetected: scanResults.filter(r => r.status === "malware").length,
    safeFiles: scanResults.filter(r => r.status === "safe").length,
    avgConfidence: scanResults.length > 0 ? Math.round(scanResults.reduce((acc, r) => acc + r.confidence, 0) / scanResults.length) : 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <HackShieldLogo size="sm" />
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-foreground">{user.name || "User"}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Button variant="cyber-outline" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-card/80 border-border">
              <CardHeader>
                <CardTitle className="text-cyber-green">Control Panel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant={currentView === "upload" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("upload")}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload & Scan
                </Button>
                <Button 
                  variant={currentView === "results" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("results")}
                  disabled={!currentScan}
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Scan Results
                </Button>
                <Button 
                  variant={currentView === "history" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("history")}
                >
                  <History className="w-4 h-4 mr-2" />
                  Scan History
                </Button>
                <Button 
                  variant={currentView === "credits" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("credits")}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Credits & Plan
                </Button>
                <Button 
                  variant={currentView === "reports" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("reports")}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Reports
                </Button>
                <Button 
                  variant={currentView === "payments" ? "cyber" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentView("payments")}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Paid Users
                </Button>
              </CardContent>
            </Card>

            {/* User Profile & Payment */}
            <UserProfile 
              user={user}
              credits={credits}
              isPremium={isPremium}
              onOpenPayment={() => setIsPaymentModalOpen(true)}
            />

            {/* Quick Stats */}
            <Card className="bg-card/80 border-border mt-6">
              <CardHeader>
                <CardTitle className="text-sm text-terminal-green">Security Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Total Scans</span>
                  <span className="font-mono text-cyber-green">{stats.totalScans}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Threats Found</span>
                  <span className="font-mono text-danger-red">{stats.threatsDetected}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Safe Files</span>
                  <span className="font-mono text-cyber-green">{stats.safeFiles}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Avg Confidence</span>
                  <span className="font-mono text-cyber-green">{stats.avgConfidence}%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentView === "upload" && (
              <FileUpload onFileUpload={handleFileUpload} />
            )}

            {currentView === "results" && currentScan && (
              <ScanResults 
                scanResult={currentScan} 
                isScanning={isScanning}
                onNewScan={() => setCurrentView("upload")}
              />
            )}

            {currentView === "history" && (
              <Card className="bg-card/80 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyber-green">
                    <History className="w-5 h-5" />
                    Scan History
                  </CardTitle>
                  <CardDescription>Review all your previous file scans</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scanResults.map((result) => (
                      <div key={result.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background/50">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {result.status === "safe" ? (
                              <CheckCircle className="w-5 h-5 text-cyber-green" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-danger-red" />
                            )}
                            <div>
                              <p className="font-medium text-foreground">{result.fileName}</p>
                              <p className="text-xs text-muted-foreground">
                                {(result.fileSize / 1024 / 1024).toFixed(2)} MB • {result.fileType.toUpperCase()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <Badge 
                              variant={result.status === "safe" ? "default" : "destructive"}
                              className={result.status === "safe" ? "bg-cyber-green text-background" : ""}
                            >
                              {result.status === "safe" ? "SAFE" : "MALWARE"}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {result.confidence}% confidence
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {currentView === "credits" && (
              <UserCredits 
                user={user}
                credits={credits}
                isPremium={isPremium}
                totalScans={stats.totalScans}
                onOpenPayment={() => setIsPaymentModalOpen(true)}
              />
            )}

            {currentView === "reports" && (
              <Reports user={user} />
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
        user={user}
      />
    </div>
  );
};
