import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HackShieldLogo } from "./HackShieldLogo";
import { FileUpload } from "./FileUpload";
import { ScanResults } from "./ScanResults";
import { 
  Upload, 
  History, 
  Shield, 
  Activity, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  LogOut,
  Download
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
  const [currentView, setCurrentView] = useState<"upload" | "results" | "history">("upload");
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

    try {
      // Real VirusTotal API integration
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:5000/scan-file', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.error) {
        // Handle API errors
        const errorScan: ScanResult = {
          ...newScan,
          status: "safe", // Default to safe on error
          confidence: 0,
          threats: [`API Error: ${result.error}`]
        };
        setCurrentScan(errorScan);
        setScanResults(prev => [errorScan, ...prev]);
        setIsScanning(false);
        return;
      }

      // Process VirusTotal response
      const isMalware = result.status === "Malicious";
      const detectionCount = result.detections || 0;
      const confidence = isMalware ? 
        Math.min(95, 70 + (detectionCount * 5)) : // Higher confidence with more detections
        Math.max(85, 99 - (detectionCount * 2)); // Lower confidence if some engines detect but overall harmless

      const completedScan: ScanResult = {
        ...newScan,
        status: isMalware ? "malware" : "safe",
        confidence: Math.round(confidence * 10) / 10,
        threats: isMalware ? [`${detectionCount} engines detected threats`, "VirusTotal Analysis"] : []
      };

      setCurrentScan(completedScan);
      setScanResults(prev => [completedScan, ...prev]);
      setIsScanning(false);

    } catch (error) {
      // Handle network errors
      const errorScan: ScanResult = {
        ...newScan,
        status: "safe",
        confidence: 0,
        threats: [`Network Error: ${error instanceof Error ? error.message : 'Unable to connect to scanning service'}`]
      };
      setCurrentScan(errorScan);
      setScanResults(prev => [errorScan, ...prev]);
      setIsScanning(false);
    }
  };

  const stats = {
    totalScans: scanResults.length,
    threatsDetected: scanResults.filter(r => r.status === "malware").length,
    safeFiles: scanResults.filter(r => r.status === "safe").length,
    avgConfidence: Math.round(scanResults.reduce((acc, r) => acc + r.confidence, 0) / scanResults.length)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <HackShieldLogo size="sm" />
          <div className="flex items-center gap-4">
            <div className="text-right">
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

      <div className="container mx-auto px-6 py-8">
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
              </CardContent>
            </Card>

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
                          <Button variant="cyber-outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Report
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};