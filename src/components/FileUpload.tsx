import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const ALLOWED_TYPES = {
  'application/pdf': 'PDF Document',
  'text/plain': 'Text File', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
  'application/x-executable': 'Executable File',
  'text/x-python': 'Python Script'
};

const ALLOWED_EXTENSIONS = ['.pdf', '.txt', '.docx', '.exe', '.py'];

export const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File) => {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const maxSize = 50 * 1024 * 1024; // 50MB

    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      return "File type not supported. Please upload .exe, .pdf, .txt, .docx, or .py files.";
    }

    if (file.size > maxSize) {
      return "File size too large. Maximum size is 50MB.";
    }

    return null;
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-cyber-green">
            <Upload className="w-5 h-5" />
            File Upload & Analysis
          </CardTitle>
          <CardDescription>
            Upload files for AI-powered malware detection. Supported formats: .exe, .pdf, .txt, .docx, .py
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-cyber-green bg-cyber-green/5 scale-105' 
                : 'border-border hover:border-cyber-green/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className={`w-16 h-16 ${dragActive ? 'text-cyber-green' : 'text-muted-foreground'}`} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Drop your file here or click to browse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Maximum file size: 50MB
                </p>
              </div>

              <Button 
                variant="cyber-outline" 
                onClick={() => fileInputRef.current?.click()}
                className="mt-4"
              >
                Choose File
              </Button>

              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".exe,.pdf,.txt,.docx,.py"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-danger-red/10 border border-danger-red rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-danger-red" />
              <p className="text-sm text-danger-red">{error}</p>
            </div>
          )}

          {selectedFile && (
            <div className="mt-6">
              <Card className="bg-background/50 border-cyber-green/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-cyber-green" />
                      <div>
                        <p className="font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatFileSize(selectedFile.size)} • {selectedFile.type || 'Unknown type'}
                        </p>
                      </div>
                    </div>
                    <Button variant="scan" onClick={handleUpload} className="ml-4">
                      Start Scan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Supported File Types */}
      <Card className="bg-card/80 border-border">
        <CardHeader>
          <CardTitle className="text-sm text-terminal-green">Supported File Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ALLOWED_EXTENSIONS.map((ext) => (
              <div key={ext} className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-cyber-green" />
                <span className="text-foreground font-mono">{ext}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};