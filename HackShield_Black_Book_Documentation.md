# HackShield - AI Malware Scanner
## Black Book Documentation

---

**COLLEGE NAME: [Your College Name]**

**SHIVAJI UNIVERSITY, KOLHAPUR**

---

# Chapter 1
# Introduction to Project

- Introduction
- Working of System
- Needs & Scope of System

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 1

---

## 1. Introduction

HackShield is an AI-powered web application designed for real-time malware detection and file security analysis. The platform allows users to upload files and scan them for potential threats using advanced detection algorithms integrated with the VirusTotal API.

Our platform provides:

- **AI-Powered Scanning**: Real-time malware detection using VirusTotal API integration for accurate threat identification.
- **Multi-Format Support**: Support for multiple file formats including .exe, .pdf, .txt, .docx, and .py files.
- **User-Friendly Interface**: Modern cybersecurity-themed dark UI with neon green accents for an immersive experience.
- **Detailed Reports**: Comprehensive scan results with confidence scores, threat classification, and downloadable PDF reports.
- **Secure Authentication**: User registration and login system to manage personal scan history and credits.
- **Payment Integration**: Razorpay payment gateway for purchasing scan credits and premium subscriptions.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 2

---

## 2. Working of System

- **User Registration and Login**
  Users can create an account using their email. After logging in, they can access their dashboard, scan history, credits, and profile settings.

- **File Upload**
  Customers can upload files through a drag-and-drop interface or file browser. Each file is validated for type, size, and extension before processing.

- **AI Malware Scanning**
  The uploaded file is sent to the VirusTotal API for comprehensive malware analysis. The system checks the file against 70+ antivirus engines.

- **Real-Time Results**
  Users receive detailed scan results showing threat detection status, confidence scores, malware classification, and security recommendations.

- **Scan History**
  All scans are stored in the user's account with timestamps, file names, and detection results for future reference.

- **Report Generation**
  Users can download detailed PDF reports containing complete scan analysis, threat indicators, and security recommendations.

- **Credit Management**
  Users can purchase scan credits (₹199/scan) or subscribe to monthly unlimited plans (₹799/month) through Razorpay.

- **Payment Processing**
  Secure payment integration with Razorpay for UPI, cards, and net banking. All transactions are verified and logged.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 3

---

## 3. Need and Scope

### Need

- It helps users quickly identify malicious files before they can harm their systems.
- It saves time by providing instant automated security analysis instead of manual inspection.
- It provides a simple and user-friendly interface so anyone can use the platform without technical knowledge.
- It supports digital security awareness by educating users about different types of malware threats.
- It helps organizations protect their digital assets from cyber threats.
- It reduces the risk of data breaches, ransomware attacks, and system compromises.

### Scope

- **File Analysis Platform**:
  A comprehensive solution for scanning multiple file types including executables, documents, and scripts. Each scan provides detailed threat assessment.

- **Security Dashboard**:
  Real-time monitoring features including scan statistics, threat trends, and security insights for both individual users and administrators.

- **User-Friendly Interface**:
  Clean and intuitive navigation with a cybersecurity-themed design. Fully responsive layout that works on mobiles, tablets, and desktops.

- **Monetization Features**:
  Credit-based scanning system with individual scan purchases and monthly subscription options through integrated payment gateway.

- **Educational Value**:
  Detailed explanations of detected threats to help users understand cybersecurity risks and prevention measures.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 4

---

# Chapter 2
# Proposed System

- Objectives
- Software Requirement System

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 5

---

## 1. Objectives

- **Provide Secure File Scanning**: Offer a reliable platform where users can easily upload and scan files for malware threats.

- **Improve Cybersecurity Awareness**: Help users understand different types of malware and their potential impact through detailed scan reports.

- **Deliver Accurate Detection**: Integrate with VirusTotal API to leverage 70+ antivirus engines for comprehensive threat analysis.

- **Support Secure Payments**: Include safe and trusted payment options through Razorpay for purchasing credits and subscriptions.

- **Enable Easy Management**: Provide users with a dashboard to view scan history, manage credits, and download reports.

- **Ensure Data Privacy**: Implement secure authentication, encrypted data storage, and safe file handling protocols.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 6

---

## 2. Software Requirement Specifications

### Functional Requirements:

- **User Registration and Login**:
  Users can create an account, log in securely using email/password, and manage their profile settings.

- **File Upload System**:
  Support for drag-and-drop and click-to-upload file selection with validation for supported formats (.exe, .pdf, .txt, .docx, .py).

- **Malware Scanning**:
  Real-time file analysis through VirusTotal API with progress indicators and status updates.

- **Scan Results Display**:
  Detailed results showing threat status, confidence score, malware type, affected engines, and security recommendations.

- **Scan History**:
  Complete log of all user scans with file names, dates, results, and quick access to previous reports.

- **PDF Report Generation**:
  Downloadable security reports with complete scan details, threat analysis, and recommendations.

- **Credit System**:
  Track user scan credits, display balance, and prompt for purchase when credits are low.

- **Payment Processing**:
  Razorpay integration for purchasing individual scan credits (₹199) or monthly subscriptions (₹799).

- **User Dashboard**:
  Centralized view of scan statistics, recent scans, credit balance, and quick actions.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 7

---

### Non-Functional Requirements:

- **Scalability**:
  The system should handle increasing users and scan requests without performance degradation. Built on cloud infrastructure for automatic scaling.

- **Performance**:
  Pages should load quickly (under 3 seconds). File uploads and scan initiation should be responsive even with larger files.

- **Reliability**:
  The platform should maintain 99% uptime. API integrations should have fallback mechanisms for service interruptions.

- **Security**:
  All user data must be encrypted. File uploads are handled securely and deleted after scanning. Authentication uses industry-standard protocols.

- **User-Friendly Design**:
  The interface should be intuitive with clear navigation, helpful tooltips, and accessible to users of all technical levels.

- **Compatibility**:
  The platform should work across all modern browsers (Chrome, Firefox, Safari, Edge) and be fully responsive on all devices.

- **Maintainability**:
  Code should follow React best practices with modular components, TypeScript for type safety, and comprehensive documentation.

- **Availability**:
  The service should be available 24/7 with minimal scheduled maintenance windows.

- **Data Backup & Recovery**:
  User data, scan history, and payment records should be automatically backed up with disaster recovery capabilities.

- **Compliance**:
  The system should follow data protection best practices and provide clear privacy policies to users.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 8

---

# Chapter 3
# System Diagrams

- DFD
- ERD

### System Requirements:
- Hardware
- Software

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 9

---

## 1. Data Flow Diagram

### 0th Level (Context Diagram):

```
┌─────────┐                                              ┌─────────┐
│         │   Do Registration      Manage Users          │         │
│         │   Do Login             Manage Scans          │         │
│  USER   │───────────────────►  ┌──────────────┐  ◄─────│  ADMIN  │
│         │   Upload File         │              │       │         │
│         │   View Results        │  HACKSHIELD  │       │         │
│         │◄───────────────────  │              │       │         │
│         │   Get Scan Results    │   SYSTEM    │       │         │
│         │   Download Reports    └──────────────┘       │         │
│         │   Make Payment                               │         │
└─────────┘                                              └─────────┘
```

### 1st Level - User Registration:

```
┌─────────┐    Fill Form      ┌────────────────┐    Stores Data    ┌─────────┐
│  USER   │─────────────────►│  1.0           │─────────────────►│  UDB    │
│         │                   │  Registration  │                   │ (Users) │
│         │◄─────────────────│                │                   └─────────┘
└─────────┘  Get Confirmation └────────────────┘
```

### 2nd Level - User Login:

```
┌─────────┐    Enter Credentials   ┌────────────────┐    Verify Data    ┌─────────┐
│  USER   │──────────────────────►│  2.0           │◄─────────────────►│  UDB    │
│         │                        │  Login         │                   │ (Users) │
│         │◄──────────────────────│                │                   └─────────┘
└─────────┘  Get Access Token      └────────────────┘
```

### 3rd Level - File Upload & Scan:

```
┌─────────┐    Upload File     ┌────────────────┐    Store File Info   ┌─────────┐
│  USER   │──────────────────►│  3.0           │─────────────────────►│  SDB    │
│         │                    │  File Scan     │                      │(Scans)  │
│         │◄──────────────────│                │◄─────────────────────└─────────┘
└─────────┘  Get Scan Results  └────────────────┘    Retrieve History
                                      │
                                      │ Send File Hash
                                      ▼
                               ┌────────────────┐
                               │  VirusTotal    │
                               │  API           │
                               └────────────────┘
```

### 4th Level - Payment Processing:

```
┌─────────┐    Select Plan     ┌────────────────┐    Create Order     ┌─────────┐
│  USER   │──────────────────►│  4.0           │─────────────────────►│  PDB    │
│         │                    │  Payment       │                      │(Payments)│
│         │◄──────────────────│  Processing    │◄─────────────────────└─────────┘
└─────────┘  Get Confirmation  └────────────────┘    Update Status
                                      │
                                      │ Process Payment
                                      ▼
                               ┌────────────────┐
                               │  Razorpay      │
                               │  Gateway       │
                               └────────────────┘
```

### 5th Level - Report Generation:

```
┌─────────┐    Request Report   ┌────────────────┐    Fetch Data      ┌─────────┐
│  USER   │───────────────────►│  5.0           │◄───────────────────►│  SDB    │
│         │                     │  Report        │                     │(Scans)  │
│         │◄───────────────────│  Generation    │                     └─────────┘
└─────────┘  Download PDF       └────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 10-11

---

## 2. Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    ┌──────────────┐                              ┌──────────────┐           │
│    │    USERS     │                              │    SCANS     │           │
│    ├──────────────┤                              ├──────────────┤           │
│    │ user_id (PK) │                              │ scan_id (PK) │           │
│    │ email        │         1           M        │ user_id (FK) │           │
│    │ password     │─────────────────────────────►│ file_name    │           │
│    │ created_at   │        Performs              │ file_type    │           │
│    └──────────────┘                              │ file_size    │           │
│           │                                      │ scan_result  │           │
│           │                                      │ threat_type  │           │
│           │ 1                                    │ confidence   │           │
│           │                                      │ scanned_at   │           │
│           │                                      └──────────────┘           │
│           │                                                                 │
│           │        ┌──────────────────┐                                     │
│           │        │  PAYMENT_ORDERS  │                                     │
│           │   M    ├──────────────────┤                                     │
│           └───────►│ id (PK)          │                                     │
│           Makes    │ user_id (FK)     │                                     │
│                    │ razorpay_order_id│                                     │
│                    │ amount           │                                     │
│                    │ currency         │                                     │
│                    │ payment_type     │                                     │
│                    │ status           │                                     │
│                    │ created_at       │                                     │
│                    └──────────────────┘                                     │
│                                                                             │
│    ┌──────────────┐                              ┌────────────────────┐     │
│    │ USER_CREDITS │                              │ USER_SUBSCRIPTIONS │     │
│    ├──────────────┤                              ├────────────────────┤     │
│    │ id (PK)      │                              │ id (PK)            │     │
│    │ user_id (FK) │         1           1        │ user_id (FK)       │     │
│    │ scan_credits │◄────────────────────────────►│ plan_type          │     │
│    │ updated_at   │        Has                   │ status             │     │
│    └──────────────┘                              │ current_period_end │     │
│                                                  │ created_at         │     │
│                                                  └────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 12

---

## A. System Requirements

### 1. Hardware

#### Server Side

| Component | Requirement |
|-----------|-------------|
| Processor | Intel Core i5 / Ryzen 5 and above |
| RAM | 8 GB RAM & above |
| Storage | 256 GB SSD (minimum) |
| Network | High-speed internet connection |

#### Client Side

| Component | Requirement |
|-----------|-------------|
| Processor | Intel Dual Core i3 and above |
| RAM | 4 GB RAM & above |
| Storage | 128 GB (minimum) |
| Network | Stable internet connection |

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 13

---

### 2. Software

#### Server Side

| Component | Technology |
|-----------|------------|
| Operating System | Linux (Ubuntu 20.04+) / Windows Server |
| Runtime | Node.js 18.x+, Deno (Edge Functions) |
| Database | PostgreSQL (Supabase) |
| Backend | Supabase Edge Functions |
| API Integration | VirusTotal API, Razorpay API |

#### Client Side

| Component | Technology |
|-----------|------------|
| Operating System | Windows 10 & above / macOS / Linux |
| Browser | Google Chrome v100+, Firefox v100+, Safari 15+, Microsoft Edge v100+ |

#### Development Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | React 18 with TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui, Radix UI |
| State Management | React Query (TanStack) |
| Routing | React Router DOM |
| Icons | Lucide React |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Payments | Razorpay |

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 14

---

# Chapter 4
# System Design

- Database Design
- Input Design
- Output Design

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 15

---

## Database Design

### Users Table (Managed by Supabase Auth)

| Field | Data Type | Length | Description | Key |
|-------|-----------|--------|-------------|-----|
| id | UUID | - | User unique identifier | Primary Key |
| email | VARCHAR | 255 | User email address | Unique |
| encrypted_password | VARCHAR | 255 | Encrypted password | - |
| created_at | TIMESTAMP | - | Account creation time | - |
| updated_at | TIMESTAMP | - | Last update time | - |

### Payment Orders Table

| Field | Data Type | Length | Description | Key |
|-------|-----------|--------|-------------|-----|
| id | UUID | - | Order unique identifier | Primary Key |
| user_id | UUID | - | Reference to user | Foreign Key |
| razorpay_order_id | VARCHAR | 100 | Razorpay order ID | Unique |
| razorpay_payment_id | VARCHAR | 100 | Razorpay payment ID | - |
| amount | INTEGER | - | Payment amount in paise | - |
| currency | VARCHAR | 10 | Currency code (INR) | - |
| payment_type | VARCHAR | 50 | 'single_scan' or 'subscription' | - |
| status | VARCHAR | 20 | Payment status | - |
| created_at | TIMESTAMP | - | Order creation time | - |
| updated_at | TIMESTAMP | - | Last update time | - |

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 16

---

### User Credits Table

| Field | Data Type | Length | Description | Key |
|-------|-----------|--------|-------------|-----|
| id | UUID | - | Credits record ID | Primary Key |
| user_id | UUID | - | Reference to user | Foreign Key (Unique) |
| scan_credits | INTEGER | - | Available scan credits | - |
| created_at | TIMESTAMP | - | Record creation time | - |
| updated_at | TIMESTAMP | - | Last update time | - |

### User Subscriptions Table

| Field | Data Type | Length | Description | Key |
|-------|-----------|--------|-------------|-----|
| id | UUID | - | Subscription ID | Primary Key |
| user_id | UUID | - | Reference to user | Foreign Key (Unique) |
| plan_type | VARCHAR | 20 | 'free' or 'premium' | - |
| status | VARCHAR | 20 | 'active', 'cancelled', 'expired' | - |
| current_period_end | TIMESTAMP | - | Subscription end date | - |
| created_at | TIMESTAMP | - | Record creation time | - |
| updated_at | TIMESTAMP | - | Last update time | - |

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 17

---

## 1. Input Design

### Registration Page:

```
┌────────────────────────────────────────────────────────┐
│                    🛡️ HackShield                       │
│                                                        │
│              Create Your Account                       │
│         Join HackShield for secure file scanning       │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Email                                            │  │
│  │ your.email@example.com                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Password                                         │  │
│  │ ••••••••••••                                     │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Confirm Password                                 │  │
│  │ ••••••••••••                                     │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│              ┌─────────────────────┐                   │
│              │   Create Account    │                   │
│              └─────────────────────┘                   │
│                                                        │
│        Already have an account? Login                  │
└────────────────────────────────────────────────────────┘
```

### Login Page:

```
┌────────────────────────────────────────────────────────┐
│                    🛡️ HackShield                       │
│                                                        │
│                   Welcome Back                         │
│            Login to your secure dashboard              │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Email                                            │  │
│  │ your.email@example.com                           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Password                                         │  │
│  │ ••••••••••••                                     │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│              ┌─────────────────────┐                   │
│              │       Login         │                   │
│              └─────────────────────┘                   │
│                                                        │
│          Don't have an account? Sign up                │
└────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 18

---

### File Upload Page:

```
┌────────────────────────────────────────────────────────────────────┐
│  🛡️ HackShield              Dashboard    History    Profile        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                        Upload File for Scanning                    │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │                                                            │  │
│    │                    ┌──────────────┐                        │  │
│    │                    │    📁        │                        │  │
│    │                    └──────────────┘                        │  │
│    │                                                            │  │
│    │           Drag & drop your file here                       │  │
│    │                   or click to browse                       │  │
│    │                                                            │  │
│    │        Supported: .exe, .pdf, .txt, .docx, .py            │  │
│    │                   Max size: 32 MB                          │  │
│    │                                                            │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│              ┌─────────────────────────────────┐                   │
│              │        Start Scan 🔍           │                   │
│              └─────────────────────────────────┘                   │
│                                                                    │
│    Credits Available: 5        [Buy More Credits]                  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Payment Selection Page:

```
┌────────────────────────────────────────────────────────────────────┐
│                      Choose Your Plan                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────────────────────┐    ┌─────────────────────────┐       │
│  │     SINGLE SCAN         │    │    PREMIUM MONTHLY      │       │
│  │                         │    │                         │       │
│  │       ₹199              │    │        ₹799             │       │
│  │      per scan           │    │       per month         │       │
│  │                         │    │                         │       │
│  │  ✓ 1 File Scan          │    │  ✓ Unlimited Scans      │       │
│  │  ✓ Detailed Report      │    │  ✓ Priority Support     │       │
│  │  ✓ PDF Download         │    │  ✓ Advanced Reports     │       │
│  │                         │    │  ✓ Batch Processing     │       │
│  │                         │    │  ✓ API Access           │       │
│  │                         │    │                         │       │
│  │  ┌─────────────────┐    │    │  ┌─────────────────┐    │       │
│  │  │   Pay ₹199      │    │    │  │   Pay ₹799      │    │       │
│  │  └─────────────────┘    │    │  └─────────────────┘    │       │
│  └─────────────────────────┘    └─────────────────────────┘       │
│                                                                    │
│              🔒 Secure Payment via Razorpay                        │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 19

---

### Razorpay Payment Page:

```
┌────────────────────────────────────────────────────────────────────┐
│                    ┌─────────────────────────────┐                 │
│                    │        Razorpay            │                 │
│                    └─────────────────────────────┘                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│    Pay ₹199.00 to HackShield                                       │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │  UPI                                                       │  │
│    │                                                            │  │
│    │  Enter UPI ID:  ____________________@upi                   │  │
│    │                                                            │  │
│    │  Or Pay Using:                                             │  │
│    │                                                            │  │
│    │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐         │  │
│    │  │GPay  │  │PhonePe│  │Paytm │  │BHIM  │  │ Any  │         │  │
│    │  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘         │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │  Cards                                                     │  │
│    │  Debit Card / Credit Card                                  │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │  Net Banking                                               │  │
│    │  Select Your Bank                                          │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│              ┌─────────────────────────────────┐                   │
│              │          Pay ₹199.00            │                   │
│              └─────────────────────────────────┘                   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 20

---

## 2. Output Design

### Dashboard (Home):

```
┌────────────────────────────────────────────────────────────────────┐
│  🛡️ HackShield              Dashboard    History    Profile        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│    Welcome back, User!                                             │
│                                                                    │
│    ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐  │
│    │  Total Scans     │  │  Threats Found   │  │  Credits Left  │  │
│    │       24         │  │        3         │  │       5        │  │
│    │     📊           │  │     ⚠️            │  │     💳         │  │
│    └──────────────────┘  └──────────────────┘  └────────────────┘  │
│                                                                    │
│    Recent Scans:                                                   │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │ File Name        │ Date       │ Status    │ Confidence     │  │
│    ├────────────────────────────────────────────────────────────┤  │
│    │ setup.exe        │ 17/12/2025 │ ⚠️ Threat │ 87%           │  │
│    │ document.pdf     │ 16/12/2025 │ ✅ Clean  │ 99%           │  │
│    │ script.py        │ 15/12/2025 │ ✅ Clean  │ 100%          │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│              ┌─────────────────────────────────┐                   │
│              │      Start New Scan 🔍         │                   │
│              └─────────────────────────────────┘                   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 21

---

### Scan Results - Clean File:

```
┌────────────────────────────────────────────────────────────────────┐
│  🛡️ HackShield              Dashboard    History    Profile        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                    ✅ SCAN COMPLETE - FILE SAFE                    │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │                                                            │  │
│    │  File: document.pdf                                        │  │
│    │  Size: 2.4 MB                                              │  │
│    │  Type: PDF Document                                        │  │
│    │  Scanned: 17/12/2025 11:30 AM                              │  │
│    │                                                            │  │
│    │  ═══════════════════════════════════════════               │  │
│    │                                                            │  │
│    │  Status:         ✅ CLEAN                                  │  │
│    │  Confidence:     99.8%                                     │  │
│    │  Engines Used:   72                                        │  │
│    │  Detections:     0                                         │  │
│    │                                                            │  │
│    │  ═══════════════════════════════════════════               │  │
│    │                                                            │  │
│    │  Summary: No threats detected. This file appears           │  │
│    │  to be safe for use.                                       │  │
│    │                                                            │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│    ┌─────────────────┐    ┌─────────────────┐                      │
│    │ Download Report │    │   Scan Another  │                      │
│    └─────────────────┘    └─────────────────┘                      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 22

---

### Scan Results - Threat Detected:

```
┌────────────────────────────────────────────────────────────────────┐
│  🛡️ HackShield              Dashboard    History    Profile        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                 ⚠️ THREAT DETECTED - FILE INFECTED                 │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │                                                            │  │
│    │  File: suspicious_setup.exe                                │  │
│    │  Size: 4.8 MB                                              │  │
│    │  Type: Windows Executable                                  │  │
│    │  Scanned: 17/12/2025 02:45 PM                              │  │
│    │                                                            │  │
│    │  ═══════════════════════════════════════════               │  │
│    │                                                            │  │
│    │  Status:         ⚠️ THREAT DETECTED                        │  │
│    │  Confidence:     87.5%                                     │  │
│    │  Engines Used:   72                                        │  │
│    │  Detections:     14                                        │  │
│    │                                                            │  │
│    │  ═══════════════════════════════════════════               │  │
│    │                                                            │  │
│    │  Threat Type: Trojan.GenericKD.46542891                    │  │
│    │                                                            │  │
│    │  Detected By:                                              │  │
│    │  • Kaspersky    - Trojan.Win32.Agent                       │  │
│    │  • Avast        - Win32:Malware-gen                        │  │
│    │  • BitDefender  - Trojan.GenericKD                         │  │
│    │  • Norton       - Suspicious.Cloud                         │  │
│    │  • ESET-NOD32   - A Variant Of Win32/Agent                 │  │
│    │                                                            │  │
│    │  Recommendation: DELETE this file immediately.             │  │
│    │  Do NOT execute or open this file.                         │  │
│    │                                                            │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│    ┌─────────────────┐    ┌─────────────────┐                      │
│    │ Download Report │    │   Scan Another  │                      │
│    └─────────────────┘    └─────────────────┘                      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 23

---

### Scan History Page:

```
┌────────────────────────────────────────────────────────────────────┐
│  🛡️ HackShield              Dashboard    History    Profile        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│                        Scan History                                │
│                                                                    │
│    ┌────────────────────────────────────────────────────────────┐  │
│    │ # │ File Name           │ Type │ Date       │ Status       │  │
│    ├────────────────────────────────────────────────────────────┤  │
│    │ 1 │ suspicious_setup.exe│ .exe │ 17/12/2025 │ ⚠️ Infected  │  │
│    │ 2 │ document.pdf        │ .pdf │ 17/12/2025 │ ✅ Clean     │  │
│    │ 3 │ report.docx         │ .docx│ 16/12/2025 │ ✅ Clean     │  │
│    │ 4 │ script.py           │ .py  │ 16/12/2025 │ ✅ Clean     │  │
│    │ 5 │ notes.txt           │ .txt │ 15/12/2025 │ ✅ Clean     │  │
│    │ 6 │ installer.exe       │ .exe │ 14/12/2025 │ ⚠️ Infected  │  │
│    │ 7 │ presentation.pdf    │ .pdf │ 14/12/2025 │ ✅ Clean     │  │
│    │ 8 │ data_backup.exe     │ .exe │ 13/12/2025 │ ⚠️ Infected  │  │
│    └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│                    ◀ Previous    Page 1 of 3    Next ▶             │
│                                                                    │
│    Summary: 24 Total Scans | 21 Clean | 3 Threats Detected         │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 24

---

# Chapter 5
# Reports

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 25

---

## Reports

### Sample Scan Report (PDF Format):

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│    🛡️ HACKSHIELD                         Date: 17/12/2025          │
│    AI Malware Scanner                     Time: 02:45 PM           │
│                                                                    │
│    ═══════════════════════════════════════════════════════════    │
│                      SECURITY SCAN REPORT                          │
│    ═══════════════════════════════════════════════════════════    │
│                                                                    │
│    FILE INFORMATION:                                               │
│    ─────────────────                                               │
│    File Name:     suspicious_setup.exe                             │
│    File Size:     4.8 MB                                           │
│    File Type:     Windows Executable (PE32)                        │
│    MD5 Hash:      a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6                 │
│    SHA256:        abc123def456...                                  │
│                                                                    │
│    SCAN RESULTS:                                                   │
│    ─────────────                                                   │
│    Status:        ⚠️ THREAT DETECTED                               │
│    Confidence:    87.5%                                            │
│    Threat Type:   Trojan.GenericKD.46542891                        │
│    Risk Level:    HIGH                                             │
│                                                                    │
│    DETECTION DETAILS:                                              │
│    ──────────────────                                              │
│    Total Engines: 72                                               │
│    Detections:    14 (19.4%)                                       │
│                                                                    │
│    Engine             │ Detection                                  │
│    ───────────────────┼─────────────────────                       │
│    Kaspersky          │ Trojan.Win32.Agent                         │
│    Avast              │ Win32:Malware-gen                          │
│    BitDefender        │ Trojan.GenericKD                           │
│    Norton             │ Suspicious.Cloud                           │
│    ESET-NOD32         │ A Variant Of Win32/Agent                   │
│    McAfee             │ GenericRXAA-AA                             │
│    AVG                │ Win32:Malware-gen                          │
│                                                                    │
│    RECOMMENDATIONS:                                                │
│    ────────────────                                                │
│    1. DELETE this file immediately                                 │
│    2. Do NOT execute or open this file                             │
│    3. Scan your system with updated antivirus                      │
│    4. Check for other suspicious files                             │
│                                                                    │
│    ═══════════════════════════════════════════════════════════    │
│    Report Generated by HackShield AI Malware Scanner               │
│    © 2025 HackShield - Secure Your Digital World                   │
│    ═══════════════════════════════════════════════════════════    │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 26

---

### User Activity Report:

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│    🛡️ HACKSHIELD                         Date: 17/12/2025          │
│    User Activity Report                   Time: 11:30 PM           │
│                                                                    │
│    ═══════════════════════════════════════════════════════════    │
│                                                                    │
│    User: satyammore2020@gmail.com                                  │
│    Account Created: 15/11/2025                                     │
│    Subscription: Premium Monthly                                   │
│                                                                    │
│    ─────────────────────────────────────────────────────────────   │
│                                                                    │
│    SCAN STATISTICS:                                                │
│                                                                    │
│    │ Metric              │ Value                                   │
│    ├─────────────────────┼────────────────────                     │
│    │ Total Scans         │ 45                                      │
│    │ Clean Files         │ 41                                      │
│    │ Threats Detected    │ 4                                       │
│    │ Detection Rate      │ 8.9%                                    │
│    │ Average Confidence  │ 94.2%                                   │
│                                                                    │
│    FILE TYPES SCANNED:                                             │
│                                                                    │
│    │ Type  │ Count │ Percentage                                    │
│    ├───────┼───────┼────────────                                   │
│    │ .exe  │ 15    │ 33%                                           │
│    │ .pdf  │ 12    │ 27%                                           │
│    │ .docx │ 10    │ 22%                                           │
│    │ .py   │ 5     │ 11%                                           │
│    │ .txt  │ 3     │ 7%                                            │
│                                                                    │
│    RECENT ACTIVITY:                                                │
│                                                                    │
│    │ Date       │ Action                   │ Details               │
│    ├────────────┼──────────────────────────┼─────────────────────  │
│    │ 17/12/2025 │ File Scanned             │ setup.exe - Infected  │
│    │ 17/12/2025 │ File Scanned             │ document.pdf - Clean  │
│    │ 16/12/2025 │ Subscription Renewed     │ ₹799.00               │
│    │ 16/12/2025 │ Report Downloaded        │ scan_report.pdf       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 27

---

### Payment Transaction Report:

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│    🛡️ HACKSHIELD                         Date: 17/12/2025          │
│    Payment Transactions Report            Time: 11:30 PM           │
│                                                                    │
│    ═══════════════════════════════════════════════════════════    │
│                                                                    │
│    │ Order ID            │ User Email        │ Amount │ Type       │ Status    │ Date       │
│    ├─────────────────────┼───────────────────┼────────┼────────────┼───────────┼────────────│
│    │ order_PxYz123456    │ user1@email.com   │ ₹799   │ Subscription│ PAID      │ 17/12/2025 │
│    │ order_AbCd789012    │ user2@email.com   │ ₹199   │ Single Scan │ PAID      │ 17/12/2025 │
│    │ order_EfGh345678    │ user3@email.com   │ ₹199   │ Single Scan │ PENDING   │ 16/12/2025 │
│    │ order_IjKl901234    │ user4@email.com   │ ₹799   │ Subscription│ PAID      │ 16/12/2025 │
│    │ order_MnOp567890    │ user5@email.com   │ ₹199   │ Single Scan │ PAID      │ 15/12/2025 │
│    │ order_QrSt123456    │ user6@email.com   │ ₹799   │ Subscription│ PAID      │ 15/12/2025 │
│    │ order_UvWx789012    │ user7@email.com   │ ₹199   │ Single Scan │ FAILED    │ 14/12/2025 │
│    │ order_YzAb345678    │ user8@email.com   │ ₹799   │ Subscription│ PAID      │ 14/12/2025 │
│                                                                    │
│    ─────────────────────────────────────────────────────────────   │
│                                                                    │
│    SUMMARY:                                                        │
│    Total Transactions: 8                                           │
│    Successful: 6 (₹3,194)                                          │
│    Pending: 1 (₹199)                                               │
│    Failed: 1 (₹199)                                                │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 28

---

### Threat Analysis Report:

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│    🛡️ HACKSHIELD                         Date: 17/12/2025          │
│    Threat Analysis Report                 Time: 11:30 PM           │
│                                                                    │
│    ═══════════════════════════════════════════════════════════    │
│                        MONTHLY THREAT ANALYSIS                     │
│    ═══════════════════════════════════════════════════════════    │
│                                                                    │
│    Period: December 2025                                           │
│    Total Scans Analyzed: 156                                       │
│                                                                    │
│    THREAT DISTRIBUTION:                                            │
│    ────────────────────                                            │
│                                                                    │
│    │ Threat Type        │ Count │ Percentage                       │
│    ├────────────────────┼───────┼────────────                      │
│    │ Trojan             │ 8     │ 42%                              │
│    │ Adware             │ 5     │ 26%                              │
│    │ Ransomware         │ 3     │ 16%                              │
│    │ Spyware            │ 2     │ 11%                              │
│    │ Worm               │ 1     │ 5%                               │
│    ├────────────────────┼───────┼────────────                      │
│    │ TOTAL THREATS      │ 19    │ 100%                             │
│                                                                    │
│    FILE TYPES MOST AFFECTED:                                       │
│    ─────────────────────────                                       │
│                                                                    │
│    │ File Type │ Threats │ Clean │ Detection Rate                  │
│    ├───────────┼─────────┼───────┼───────────────                  │
│    │ .exe      │ 15      │ 35    │ 30%                             │
│    │ .pdf      │ 2       │ 48    │ 4%                              │
│    │ .docx     │ 1       │ 29    │ 3.3%                            │
│    │ .py       │ 1       │ 14    │ 6.7%                            │
│    │ .txt      │ 0       │ 11    │ 0%                              │
│                                                                    │
│    TOP DETECTED MALWARE:                                           │
│    ─────────────────────                                           │
│                                                                    │
│    1. Trojan.GenericKD.46542891      - 4 detections                │
│    2. Win32:Malware-gen              - 3 detections                │
│    3. Adware.BrowserModifier         - 3 detections                │
│    4. Ransom.WannaCry                - 2 detections                │
│    5. Trojan.Win32.Agent             - 2 detections                │
│                                                                    │
│    RECOMMENDATIONS:                                                │
│    ────────────────                                                │
│    • Be cautious with .exe files from unknown sources              │
│    • Keep antivirus software updated                               │
│    • Avoid downloading software from untrusted websites            │
│    • Regularly backup important data                               │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 29

---

# Chapter 6
# Conclusion and Suggestion

- Conclusion
- Suggestion
- Future Enhancement

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 30

---

## 1. Conclusion & Suggestion

To stay strong in the competitive cybersecurity market, it is important to focus on user trust and accurate threat detection. Features like real-time scanning, detailed reports, and secure payment processing help users feel confident while using the platform. Providing accurate results, educational content about threats, and reliable customer support can increase user retention and encourage premium subscriptions.

Maintaining high detection accuracy, clear threat explanations, and responsive customer service builds trust and strengthens the brand. Regular updates to detection algorithms, responsive design, and secure data handling also help improve the overall user experience.

On the business side, the admin dashboard should be used to monitor user activity, scan statistics, payment transactions, and threat trends to ensure smooth operations. Effective digital marketing, such as promoting security awareness on social media, can help reach a larger audience and improve user acquisition.

By focusing on user satisfaction, strong detection capabilities, and continuous improvement, HackShield can grow steadily and build a loyal user base in the cybersecurity market.

### Suggestions for Users:
- Regularly scan downloaded files before opening them
- Keep subscription active for unlimited protection
- Download PDF reports for important scans for record-keeping
- Report any suspicious findings for community benefit

### Suggestions for Developers:
- Implement batch file scanning for enterprise users
- Add more file format support progressively
- Integrate with cloud storage services (Google Drive, Dropbox)
- Develop browser extension for automatic download scanning

## 2. Future Enhancement

- **Advanced AI Integration**: Implement machine learning models for behavioral analysis and zero-day threat detection beyond signature-based scanning.

- **Mobile Application**: Develop Android and iOS applications with push notifications for scan results, threat alerts, and subscription reminders.

- **Enterprise Features**: Add team management, bulk file scanning, API access for integration with enterprise security tools, and detailed admin dashboards.

- **Real-Time Protection**: Browser extension for automatic scanning of downloads and email attachments before they reach the user's system.

- **Threat Intelligence**: Build a threat database with community contributions, allow users to report new threats, and provide threat trend analytics.

- **Multi-Language Support**: Expand to regional Indian languages and other international languages to serve a wider user base.

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 31

---

# Chapter 7
# References

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 32

---

## References

### 1. Books:

- "Web Development with Node and Express" by Ethan Brown
- "Learning React: Modern Patterns for Developing React Apps" by Alex Banks and Eve Porcello
- "TypeScript Quickly" by Yakov Fain and Anton Moiseev
- "Cybersecurity Essentials" by Charles J. Brooks
- "Malware Analysis: Concepts and Techniques" by Abhishek Singh

### 2. Websites:

1. https://www.virustotal.com/ - VirusTotal API Documentation
2. https://reactjs.org/ - React Official Documentation
3. https://www.typescriptlang.org/ - TypeScript Documentation
4. https://tailwindcss.com/ - Tailwind CSS Framework
5. https://supabase.com/docs - Supabase Documentation
6. https://razorpay.com/docs/ - Razorpay Integration Guide
7. https://ui.shadcn.com/ - shadcn/ui Components
8. https://developer.mozilla.org/ - MDN Web Docs
9. https://stackoverflow.com/ - Developer Community
10. https://github.com/ - Code Repository & References

### 3. Online Resources:

- React Router Documentation: https://reactrouter.com/
- TanStack Query: https://tanstack.com/query/latest
- Lucide Icons: https://lucide.dev/
- Radix UI: https://www.radix-ui.com/

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 33

---

## Project Team

| Role | Name |
|------|------|
| Developer | [Your Name] |
| Guide | [Guide Name] |
| College | [Your College Name] |
| University | Shivaji University, Kolhapur |

---

## Live Demo

**Website URL**: https://hackshield-ai-defense.lovable.app/

---

**© 2025 HackShield - AI Malware Scanner**
**All Rights Reserved**

---

**SHIVAJI UNIVERSITY, KOLHAPUR** &nbsp;&nbsp;&nbsp;&nbsp; 34
