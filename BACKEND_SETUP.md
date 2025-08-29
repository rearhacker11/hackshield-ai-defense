# HackShield Backend Setup - VirusTotal Integration

## Prerequisites

1. **Python 3.7+** installed on your system
2. **VirusTotal API Key** (already included in your Flask code)

## Backend Setup Instructions

### 1. Install Python Dependencies

```bash
pip install flask flask-cors requests
```

### 2. Save Your Flask Backend Code

Create a file named `app.py` with your Flask backend code:

```python
import requests
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) 

# Your VirusTotal API key
API_KEY = "4eaa9780f545c6bbf4b6a9b6982db353bb4fefeb2ad3d7b1ec1fd7cd98680af1"
UPLOAD_URL = "https://www.virustotal.com/api/v3/files"
ANALYSIS_URL = "https://www.virustotal.com/api/v3/analyses/"

def scan_file_with_virustotal(file_path):
    headers = {"x-apikey": API_KEY}
    
    try:
        with open(file_path, "rb") as f:
            files = {"file": f}
            response = requests.post(UPLOAD_URL, headers=headers, files=files)
            response.raise_for_status()
        
        data = response.json()
        analysis_id = data['data']['id']
        
        # Wait for analysis
        time.sleep(10)
        
        analysis_response = requests.get(f"{ANALYSIS_URL}{analysis_id}", headers=headers)
        analysis_response.raise_for_status()
        
        result = analysis_response.json()
        stats = result['data']['attributes']['stats']
        malicious = stats.get('malicious', 0)
        
        if malicious > 0:
            return {"status": "Malicious", "detections": malicious}
        else:
            return {"status": "Harmless", "detections": 0}
            
    except requests.exceptions.HTTPError as err:
        return {"error": f"HTTP Error: {err}"}
    except Exception as e:
        return {"error": f"An error occurred: {e}"}

@app.route('/scan-file', methods=['POST'])
def scan_file_route():
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    temp_path = os.path.join(os.getcwd(), file.filename)
    file.save(temp_path)
    
    scan_result = scan_file_with_virustotal(temp_path)
    
    os.remove(temp_path)
    
    return jsonify(scan_result)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

### 3. Start the Backend Server

```bash
python app.py
```

The backend will run on `http://localhost:5000`

### 4. Start the Frontend (in a new terminal)

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## How It Works

1. **File Upload**: User uploads a file through the React frontend
2. **API Call**: Frontend sends the file to Flask backend at `/scan-file`
3. **VirusTotal Scan**: Backend uploads file to VirusTotal API
4. **Results**: Real malware detection results are returned and displayed

## Features

- ✅ **Real VirusTotal Integration**: Uses actual VirusTotal API for malware detection
- ✅ **Multiple File Types**: Supports .exe, .pdf, .txt, .docx, .py files
- ✅ **Error Handling**: Proper error handling for API failures
- ✅ **Real-time Results**: Shows actual threat detection from 70+ antivirus engines
- ✅ **Confidence Scoring**: Dynamic confidence based on detection count

## API Response Format

```json
{
  "status": "Malicious" | "Harmless",
  "detections": 0,
  "error": "Error message (if any)"
}
```

## Troubleshooting

1. **CORS Error**: Make sure Flask-CORS is installed and CORS is enabled
2. **API Key Issues**: Verify your VirusTotal API key is valid
3. **Port Conflicts**: Change port if 5000 is already in use
4. **File Size Limits**: VirusTotal has file size limits (usually 32MB for free accounts)

## Security Note

⚠️ **Important**: The API key is hardcoded for demo purposes. For production, use environment variables or secure key management.

## College Project Benefits

- 🎓 **Real AI Integration**: Shows actual industry-standard malware detection
- 🔒 **Cybersecurity Skills**: Demonstrates understanding of threat analysis
- 💻 **Full-Stack Development**: Backend API integration with React frontend
- 📊 **Data Processing**: Real-time API data handling and visualization