# HackShield - AI Malware Scanner
## Project Documentation
### Shivaji University, Kolhapur Format

---

# CHAPTER 1: INTRODUCTION TO PROJECT

## 1.1 Working of System

HackShield is an advanced AI-powered malware detection system that provides real-time file analysis and threat detection capabilities. The system operates through the following workflow:

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐│
│  │  Login   │  │ Register │  │Dashboard │  │   File Upload    ││
│  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYER                           │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────────────────┐  │
│  │ Auth Module  │  │ Scan Engine   │  │  Payment Gateway    │  │
│  └──────────────┘  └───────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND SERVICES                           │
│  ┌──────────────┐  ┌───────────────┐  ┌─────────────────────┐  │
│  │  Supabase    │  │ VirusTotal    │  │    Razorpay         │  │
│  │  Database    │  │ API           │  │    Integration      │  │
│  └──────────────┘  └───────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Working Process

**Step 1: User Authentication**
- User registers with email and password
- System creates user profile in database
- User receives authentication token for session management

**Step 2: File Upload**
- User uploads file through drag-and-drop or file browser
- System validates file type (.exe, .pdf, .txt, .docx, .py)
- File size validation (maximum 20MB)
- File is prepared for scanning

**Step 3: Malware Scanning**
- File hash is calculated using SHA-256 algorithm
- Hash is sent to VirusTotal API for analysis
- Multiple antivirus engines scan the file
- Results are aggregated and analyzed

**Step 4: Result Generation**
- Threat level is calculated based on detection ratio
- Detailed report is generated with:
  - Confidence score (0-100%)
  - Threat classification (Clean/Suspicious/Malicious)
  - Detection details from multiple engines
  - Recommendations for user

**Step 5: Report Storage & Download**
- Scan results are stored in user's scan history
- PDF report can be downloaded
- Statistics are updated on dashboard

---

## 1.2 Need and Scope of System

### Need of the System

In today's digital era, cybersecurity threats are increasing exponentially. The need for HackShield arises from:

| Problem | Impact | HackShield Solution |
|---------|--------|---------------------|
| Rising Malware Attacks | 560,000 new malware detected daily | Real-time file scanning |
| Lack of Awareness | Users unknowingly download malicious files | Clear threat indicators |
| Expensive Security Solutions | Enterprise tools cost ₹50,000+ annually | Affordable pricing (₹199/scan) |
| Complex Security Tools | Technical knowledge required | User-friendly interface |
| No Cross-Platform Support | Platform-specific solutions | Web-based, works everywhere |

### Market Statistics

- **10+ million** new malware samples discovered monthly
- **71%** of organizations experienced successful cyberattacks in 2023
- **$6 trillion** estimated global cybercrime damages by 2025
- **43%** of cyberattacks target small businesses

### Scope of the System

**Current Scope:**
1. File-based malware detection for common file types
2. Real-time scanning using VirusTotal API
3. User authentication and profile management
4. Scan history and report generation
5. Payment integration for premium features
6. Dashboard with security statistics

**Future Scope:**
1. URL/Website scanning for phishing detection
2. Email attachment scanning integration
3. Browser extension for real-time protection
4. Mobile application development
5. Enterprise bulk scanning features
6. API access for third-party integration

### Target Users

| User Category | Use Case |
|---------------|----------|
| Students | Scan downloaded study materials |
| Professionals | Verify files before opening |
| Small Businesses | Affordable security solution |
| IT Administrators | Quick file verification tool |
| General Users | Peace of mind while downloading |

---

## 1.3 Organization Profile

### Developer Information

| Field | Details |
|-------|---------|
| Project Name | HackShield - AI Malware Scanner |
| Developer | [Your Name] |
| Institution | [Your College Name], Shivaji University, Kolhapur |
| Department | Computer Science / Information Technology |
| Academic Year | 2024-2025 |
| Guide | [Guide Name] |

### Project Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Phase 1: Planning | 2 weeks | Requirement gathering, feasibility study |
| Phase 2: Design | 3 weeks | System design, database design, UI mockups |
| Phase 3: Development | 8 weeks | Frontend, backend, API integration |
| Phase 4: Testing | 2 weeks | Unit testing, integration testing, UAT |
| Phase 5: Deployment | 1 week | Production deployment, documentation |

### Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18, TypeScript, Tailwind CSS |
| Backend | Supabase (PostgreSQL), Edge Functions |
| API Integration | VirusTotal API |
| Payment Gateway | Razorpay |
| Hosting | Lovable Platform |
| Version Control | Git |

---

# CHAPTER 2: PROPOSED SYSTEM

## 2.1 Objectives

### Primary Objectives

1. **Real-Time Malware Detection**
   - Implement file scanning using VirusTotal API
   - Provide instant results within 30 seconds
   - Support multiple file formats

2. **User-Friendly Interface**
   - Create intuitive drag-and-drop file upload
   - Design responsive dashboard for all devices
   - Implement clear threat visualization

3. **Secure Authentication System**
   - Implement email/password authentication
   - Secure session management
   - Password encryption using bcrypt

4. **Comprehensive Reporting**
   - Generate detailed scan reports
   - Provide PDF download functionality
   - Maintain scan history for users

5. **Affordable Pricing Model**
   - Offer per-scan pricing (₹199)
   - Provide subscription plans (₹799/month)
   - Enable credit-based scanning system

### Secondary Objectives

1. **Educational Value**
   - Teach cybersecurity awareness
   - Demonstrate real-world threat detection
   - Provide actionable security recommendations

2. **Scalability**
   - Design for future feature additions
   - Support increasing user base
   - Enable enterprise-level features

3. **Performance Optimization**
   - Minimize scan time
   - Optimize file upload process
   - Ensure fast page load times

---

## 2.2 Software Requirement Specifications (SRS)

### 2.2.1 Functional Requirements

| ID | Requirement | Priority | Description |
|----|-------------|----------|-------------|
| FR-01 | User Registration | High | Users can create account with email/password |
| FR-02 | User Login | High | Registered users can login to system |
| FR-03 | File Upload | High | Users can upload files for scanning |
| FR-04 | File Validation | High | System validates file type and size |
| FR-05 | Malware Scanning | High | System scans files using VirusTotal API |
| FR-06 | Result Display | High | Show scan results with threat level |
| FR-07 | Report Generation | Medium | Generate PDF reports of scan results |
| FR-08 | Scan History | Medium | Store and display user's scan history |
| FR-09 | Payment Processing | Medium | Process payments via Razorpay |
| FR-10 | Credit Management | Medium | Track and manage user scan credits |
| FR-11 | Dashboard Statistics | Low | Display security statistics |
| FR-12 | Profile Management | Low | Users can view/edit profile |

### 2.2.2 Non-Functional Requirements

| ID | Requirement | Specification |
|----|-------------|---------------|
| NFR-01 | Performance | Page load time < 3 seconds |
| NFR-02 | Scalability | Support 1000+ concurrent users |
| NFR-03 | Availability | 99.5% uptime guarantee |
| NFR-04 | Security | HTTPS encryption, secure API calls |
| NFR-05 | Usability | Mobile-responsive design |
| NFR-06 | Compatibility | Chrome, Firefox, Safari, Edge support |
| NFR-07 | Response Time | Scan results within 30 seconds |
| NFR-08 | Data Retention | Scan history stored for 1 year |

### 2.2.3 Use Case Diagram

```
                    ┌─────────────────────────────────────┐
                    │           HackShield System         │
                    │                                     │
    ┌───────┐       │  ┌─────────────────────────────┐   │
    │       │       │  │         Register            │   │
    │       │───────┼──►                             │   │
    │       │       │  └─────────────────────────────┘   │
    │       │       │                                     │
    │       │       │  ┌─────────────────────────────┐   │
    │ USER  │───────┼──►          Login              │   │
    │       │       │  └─────────────────────────────┘   │
    │       │       │                                     │
    │       │       │  ┌─────────────────────────────┐   │
    │       │───────┼──►       Upload File           │   │
    │       │       │  └──────────────┬──────────────┘   │
    │       │       │                 │                   │
    │       │       │                 ▼                   │
    │       │       │  ┌─────────────────────────────┐   │
    │       │◄──────┼──│       View Results          │   │
    │       │       │  └─────────────────────────────┘   │
    │       │       │                                     │
    │       │       │  ┌─────────────────────────────┐   │
    │       │───────┼──►     Download Report         │   │
    │       │       │  └─────────────────────────────┘   │
    │       │       │                                     │
    │       │       │  ┌─────────────────────────────┐   │
    │       │───────┼──►      Make Payment           │   │
    └───────┘       │  └─────────────────────────────┘   │
                    │                                     │
                    │                 │                   │
    ┌───────┐       │                 ▼                   │
    │       │       │  ┌─────────────────────────────┐   │
    │VIRUS  │◄──────┼──│      Scan File              │   │
    │TOTAL  │       │  └─────────────────────────────┘   │
    │ API   │       │                                     │
    └───────┘       │                                     │
                    │                 │                   │
    ┌───────┐       │                 ▼                   │
    │       │       │  ┌─────────────────────────────┐   │
    │RAZOR  │◄──────┼──│   Process Payment           │   │
    │ PAY   │       │  └─────────────────────────────┘   │
    └───────┘       │                                     │
                    └─────────────────────────────────────┘
```

### 2.2.4 Activity Diagram - File Scanning Process

```
        ┌─────────────┐
        │    Start    │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │   Login     │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐     No    ┌─────────────┐
        │Has Credits? ├───────────►Buy Credits  │
        └──────┬──────┘           └──────┬──────┘
               │ Yes                     │
               ▼                         │
        ┌─────────────┐◄─────────────────┘
        │Upload File  │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐     No    ┌─────────────┐
        │Valid File?  ├───────────►Show Error   │
        └──────┬──────┘           └─────────────┘
               │ Yes
               ▼
        ┌─────────────┐
        │Scan File    │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │Deduct Credit│
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │Show Results │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │Save History │
        └──────┬──────┘
               │
               ▼
        ┌─────────────┐
        │    End      │
        └─────────────┘
```

---

# CHAPTER 3: SYSTEM DIAGRAMS

## 3.1 Data Flow Diagram (DFD)

### Level 0 - Context Diagram (0th Level)

```
                                    ┌─────────────────────────────────────┐
                                    │                                     │
    ┌──────────┐                    │                                     │                    ┌──────────┐
    │          │   File Upload      │                                     │   Scan Results     │          │
    │          │ ─────────────────► │                                     │ ─────────────────► │          │
    │   USER   │   Login Request    │           HACKSHIELD                │   Payment Status   │  ADMIN   │
    │          │ ─────────────────► │         AI MALWARE SCANNER          │ ─────────────────► │          │
    │          │   Payment Details  │                                     │   User Reports     │          │
    │          │ ─────────────────► │                                     │ ─────────────────► │          │
    │          │ ◄───────────────── │                                     │                    │          │
    └──────────┘   Auth Response    │                                     │                    └──────────┘
                   Scan Report      └─────────────────────────────────────┘
                   Payment Receipt
```

---

### Level 1 DFD (1st Level)

```
                                           ┌─────────────────┐
                                           │   USER_CREDITS  │
                                           │      (D3)       │
                                           └────────┬────────┘
                                                    │
                                                    │ Credits Info
                                                    ▼
    ┌──────────┐      Registration       ┌──────────────────────┐
    │          │ ──────────────────────► │                      │
    │          │      Login Details      │                      │
    │   USER   │ ──────────────────────► │    1.0               │
    │          │                         │  REGISTRATION        │ ────────────────► ┌─────────────┐
    │          │ ◄────────────────────── │                      │   User Data       │   USERS     │
    │          │      Auth Token         └──────────────────────┘                   │    (D1)     │
    └──────────┘                                                                    └─────────────┘
```

---

### Level 2 DFD (2nd Level)

```
    ┌──────────┐      Username/Password    ┌──────────────────────┐
    │          │ ────────────────────────► │                      │
    │          │                           │    2.0               │                  ┌─────────────┐
    │   USER   │                           │    LOGIN             │ ───────────────► │   USERS     │
    │          │ ◄──────────────────────── │                      │  Validate User   │    (D1)     │
    │          │      Session Token        └──────────────────────┘                  └─────────────┘
    └──────────┘
```

---

### Level 3 DFD (3rd Level)

```
    ┌──────────┐      File Data            ┌──────────────────────┐
    │          │ ────────────────────────► │                      │
    │          │                           │    3.0               │                  ┌─────────────┐
    │   USER   │                           │  FILE UPLOAD         │ ───────────────► │  SCAN_LOGS  │
    │          │ ◄──────────────────────── │  & SCAN              │  Store Results   │    (D2)     │
    │          │      Scan Results         └──────────────────────┘                  └─────────────┘
    └──────────┘
```

---

### Level 4 DFD (4th Level)

```
    ┌──────────┐      Payment Request      ┌──────────────────────┐
    │          │ ────────────────────────► │                      │
    │          │                           │    4.0               │                  ┌─────────────────┐
    │   USER   │                           │  PAYMENT             │ ───────────────► │ PAYMENT_ORDERS  │
    │          │ ◄──────────────────────── │  PROCESSING          │  Store Order     │      (D4)       │
    │          │      Payment Status       └──────────────────────┘                  └─────────────────┘
    └──────────┘                                    │
                                                    │ Update Credits
                                                    ▼
                                           ┌─────────────────┐
                                           │   USER_CREDITS  │
                                           │      (D3)       │
                                           └─────────────────┘
```

---

### Level 5 DFD - Complete System Flow

```
                                    ┌───────────────────────────────────────────────────────────────┐
                                    │                        HACKSHIELD SYSTEM                      │
                                    │                                                               │
    ┌──────────┐                    │   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
    │          │   Registration     │   │   1.0   │    │   2.0   │    │   3.0   │    │   4.0   │   │
    │          │ ─────────────────► │   │ REGISTER│───►│  LOGIN  │───►│  SCAN   │───►│ PAYMENT │   │
    │          │                    │   └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘   │
    │   USER   │                    │        │              │              │              │        │
    │          │                    │        ▼              ▼              ▼              ▼        │
    │          │ ◄───────────────── │   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
    │          │   System Response  │   │  USERS  │    │ SESSION │    │  LOGS   │    │ ORDERS  │   │
    │          │                    │   │   D1    │    │   D5    │    │   D2    │    │   D4    │   │
    └──────────┘                    │   └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
                                    │                                                               │
                                    └───────────────────────────────────────────────────────────────┘
```

---

## 3.2 Entity Relationship Diagram (ERD)

### Main ERD Structure

```
                                        ┌─────────────────────────────────────┐
                                        │                                     │
                                        │              auth.users             │
                                        │                                     │
                                        └──────────────────┬──────────────────┘
                                                           │
                           ┌───────────────────────────────┼───────────────────────────────┐
                           │                               │                               │
                           ▼                               ▼                               ▼
              ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
              │                        │      │                        │      │                        │
              │     user_credits       │      │   user_subscriptions   │      │     payment_orders     │
              │                        │      │                        │      │                        │
              └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

---

### Detailed ERD with Attributes (College Format)

```
                                    ┌─────────────────────────────────────────────┐
                                    │                  auth.users                  │
                                    ├─────────────────────────────────────────────┤
                                    │                                             │
            ┌───────────┐           │  ┌────────┐    ┌─────────┐    ┌──────────┐  │
            │    id     │───────────┼──│   PK   │    │  email  │    │ password │  │
            │   (PK)    │           │  └────────┘    └─────────┘    └──────────┘  │
            └───────────┘           │                                             │
                                    │  ┌────────────┐    ┌────────────────────┐   │
                                    │  │ created_at │    │ email_confirmed_at │   │
                                    │  └────────────┘    └────────────────────┘   │
                                    │                                             │
                                    └──────────────────────┬──────────────────────┘
                                                           │
                                                           │ 1
                                                           │
                           ┌───────────────────────────────┼───────────────────────────────┐
                           │                               │                               │
                           │ N                             │ 1                             │ N
                           ▼                               ▼                               ▼
        ┌──────────────────────────────────┐  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐
        │          user_credits            │  │       user_subscriptions         │  │         payment_orders           │
        ├──────────────────────────────────┤  ├──────────────────────────────────┤  ├──────────────────────────────────┤
        │                                  │  │                                  │  │                                  │
        │  ┌────────┐      ┌───────────┐   │  │  ┌────────┐      ┌───────────┐   │  │  ┌────────┐      ┌───────────┐   │
        │  │   id   │      │  user_id  │   │  │  │   id   │      │  user_id  │   │  │  │   id   │      │  user_id  │   │
        │  │  (PK)  │      │   (FK)    │   │  │  │  (PK)  │      │   (FK)    │   │  │  │  (PK)  │      │   (FK)    │   │
        │  └────────┘      └───────────┘   │  │  └────────┘      └───────────┘   │  │  └────────┘      └───────────┘   │
        │                                  │  │                                  │  │                                  │
        │  ┌──────────────┐                │  │  ┌───────────┐   ┌───────────┐   │  │  ┌─────────────────────┐         │
        │  │ scan_credits │                │  │  │ plan_type │   │   status  │   │  │  │ razorpay_order_id   │         │
        │  └──────────────┘                │  │  └───────────┘   └───────────┘   │  │  └─────────────────────┘         │
        │                                  │  │                                  │  │                                  │
        │  ┌────────────┐  ┌────────────┐  │  │  ┌─────────────────────────┐     │  │  ┌──────────┐     ┌──────────┐   │
        │  │ created_at │  │ updated_at │  │  │  │   current_period_end   │     │  │  │  amount  │     │  status  │   │
        │  └────────────┘  └────────────┘  │  │  └─────────────────────────┘     │  │  └──────────┘     └──────────┘   │
        │                                  │  │                                  │  │                                  │
        └──────────────────────────────────┘  │  ┌────────────┐  ┌────────────┐  │  │  ┌──────────────┐                │
                                              │  │ created_at │  │ updated_at │  │  │  │ payment_type │                │
                                              │  └────────────┘  └────────────┘  │  │  └──────────────┘                │
                                              │                                  │  │                                  │
                                              └──────────────────────────────────┘  │  ┌────────────┐  ┌────────────┐  │
                                                                                    │  │ created_at │  │ updated_at │  │
                                                                                    │  └────────────┘  └────────────┘  │
                                                                                    │                                  │
                                                                                    └──────────────────────────────────┘
```

---

### ERD Notation Legend

```
    ┌─────────────────────────────────────────────────────────────────────┐
    │                         NOTATION LEGEND                             │
    ├─────────────────────────────────────────────────────────────────────┤
    │                                                                     │
    │   ┌──────────┐                                                      │
    │   │  TABLE   │  = Entity (Database Table)                           │
    │   └──────────┘                                                      │
    │                                                                     │
    │   ┌──────────┐                                                      │
    │   │   (PK)   │  = Primary Key                                       │
    │   └──────────┘                                                      │
    │                                                                     │
    │   ┌──────────┐                                                      │
    │   │   (FK)   │  = Foreign Key                                       │
    │   └──────────┘                                                      │
    │                                                                     │
    │   ────────────  = Relationship Line                                 │
    │                                                                     │
    │   1 ─────── N   = One-to-Many Relationship                          │
    │                                                                     │
    │   1 ─────── 1   = One-to-One Relationship                           │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘
```

---

### Entity Description Table

| Entity Name | Description | Primary Key | Foreign Key |
|-------------|-------------|-------------|-------------|
| auth.users | Stores user authentication details | id (UUID) | - |
| user_credits | Tracks scan credits for users | id (UUID) | user_id → auth.users(id) |
| user_subscriptions | Manages subscription plans | id (UUID) | user_id → auth.users(id) |
| payment_orders | Records payment transactions | id (UUID) | user_id → auth.users(id) |

---

### Attribute Details

#### auth.users Entity
| Attribute | Data Type | Constraint | Description |
|-----------|-----------|------------|-------------|
| id | UUID | PRIMARY KEY | Unique user identifier |
| email | VARCHAR(255) | NOT NULL, UNIQUE | User email address |
| password | VARCHAR(255) | NOT NULL | Encrypted password |
| created_at | TIMESTAMP | DEFAULT NOW() | Account creation time |
| email_confirmed_at | TIMESTAMP | NULL | Email verification time |

#### user_credits Entity
| Attribute | Data Type | Constraint | Description |
|-----------|-----------|------------|-------------|
| id | UUID | PRIMARY KEY | Unique record identifier |
| user_id | UUID | FOREIGN KEY | Reference to auth.users |
| scan_credits | INTEGER | DEFAULT 0 | Available scan credits |
| created_at | TIMESTAMP | DEFAULT NOW() | Record creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

#### user_subscriptions Entity
| Attribute | Data Type | Constraint | Description |
|-----------|-----------|------------|-------------|
| id | UUID | PRIMARY KEY | Unique record identifier |
| user_id | UUID | FOREIGN KEY | Reference to auth.users |
| plan_type | VARCHAR(50) | DEFAULT 'free' | Subscription type |
| status | VARCHAR(50) | DEFAULT 'active' | Subscription status |
| current_period_end | TIMESTAMP | NULL | Subscription end date |
| created_at | TIMESTAMP | DEFAULT NOW() | Record creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

#### payment_orders Entity
| Attribute | Data Type | Constraint | Description |
|-----------|-----------|------------|-------------|
| id | UUID | PRIMARY KEY | Unique record identifier |
| user_id | UUID | FOREIGN KEY | Reference to auth.users |
| razorpay_order_id | VARCHAR(255) | NOT NULL | Razorpay order reference |
| amount | DECIMAL(10,2) | NOT NULL | Payment amount in INR |
| payment_type | VARCHAR(50) | NOT NULL | 'single_scan' or 'premium' |
| status | VARCHAR(50) | DEFAULT 'created' | Payment status |
| created_at | TIMESTAMP | DEFAULT NOW() | Order creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

---

### Relationships Summary

| Relationship | Type | Description |
|--------------|------|-------------|
| auth.users → user_credits | 1:1 | Each user has one credits record |
| auth.users → user_subscriptions | 1:1 | Each user has one subscription record |
| auth.users → payment_orders | 1:N | User can have multiple payment orders |

---

## 3.3 DFD Process Description

| Process | Process Name | Input | Output | Description |
|---------|--------------|-------|--------|-------------|
| 1.0 | Registration | User Details | Auth Token | New user registration with email/password |
| 2.0 | Login | Username/Password | Session Token | User authentication process |
| 3.0 | File Upload & Scan | File Data | Scan Results | AI-powered malware detection |
| 4.0 | Payment Processing | Payment Request | Payment Status | Razorpay payment integration |

---

## 3.4 Data Store Description

| Data Store | Store Name | Description |
|------------|------------|-------------|
| D1 | USERS | Stores user authentication data |
| D2 | SCAN_LOGS | Stores file scan history and results |
| D3 | USER_CREDITS | Stores user scan credit balance |
| D4 | PAYMENT_ORDERS | Stores Razorpay payment records |
| D5 | SESSION | Stores active user sessions |

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Project:** HackShield - AI Malware Scanner  
**University:** Shivaji University, Kolhapur

---
│   │          │◄──────────────────────────────── │                   │   │
│   └──────────┘         PDF Report              └───────────────────┘   │
│                                                         │               │
│                                                         │               │
│                              ┌───────────────────────────┤               │
│                              │                          │               │
│                              ▼                          ▼               │
│                    ┌──────────────────┐      ┌──────────────────┐      │
│                    │   VirusTotal     │      │    Razorpay      │      │
│                    │      API         │      │    Gateway       │      │
│                    └──────────────────┘      └──────────────────┘      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Level 1 - Main Processes

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│  ┌────────┐                                                                   │
│  │        │                                                                   │
│  │  USER  │                                                                   │
│  │        │                                                                   │
│  └───┬────┘                                                                   │
│      │                                                                        │
│      │ Login Credentials                                                      │
│      ▼                                                                        │
│  ┌────────────────┐     User Data      ┌────────────────────────┐            │
│  │                │ ──────────────────► │                        │            │
│  │  1.0           │                     │    D1: User Database   │            │
│  │  User          │ ◄────────────────── │                        │            │
│  │  Authentication│   Auth Token        └────────────────────────┘            │
│  │                │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Authenticated User                                                 │
│          ▼                                                                    │
│  ┌────────────────┐     File Data      ┌────────────────────────┐            │
│  │                │ ──────────────────► │                        │            │
│  │  2.0           │                     │   D2: File Storage     │            │
│  │  File          │                     │                        │            │
│  │  Management    │                     └────────────────────────┘            │
│  │                │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ File Hash                                                          │
│          ▼                                                                    │
│  ┌────────────────┐     API Request    ┌────────────────────────┐            │
│  │                │ ──────────────────► │                        │            │
│  │  3.0           │                     │   VirusTotal API       │            │
│  │  Malware       │ ◄────────────────── │                        │            │
│  │  Scanning      │   Scan Results      └────────────────────────┘            │
│  │                │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Scan Data                                                          │
│          ▼                                                                    │
│  ┌────────────────┐     History Data   ┌────────────────────────┐            │
│  │                │ ──────────────────► │                        │            │
│  │  4.0           │                     │  D3: Scan History DB   │            │
│  │  Report        │                     │                        │            │
│  │  Generation    │                     └────────────────────────┘            │
│  │                │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ PDF Report                                                         │
│          ▼                                                                    │
│  ┌────────┐                                                                   │
│  │  USER  │                                                                   │
│  └────────┘                                                                   │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Level 2 - Payment Process

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                              PAYMENT PROCESS                                  │
│                                                                               │
│  ┌────────┐                                                                   │
│  │  USER  │                                                                   │
│  └───┬────┘                                                                   │
│      │                                                                        │
│      │ Payment Request                                                        │
│      ▼                                                                        │
│  ┌────────────────┐                                                           │
│  │  5.1           │                                                           │
│  │  Select        │                                                           │
│  │  Payment Plan  │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Plan Details (₹199/scan or ₹799/month)                            │
│          ▼                                                                    │
│  ┌────────────────┐    Order Request    ┌────────────────────────┐           │
│  │  5.2           │ ───────────────────► │                        │           │
│  │  Create        │                      │  Supabase Edge         │           │
│  │  Order         │ ◄─────────────────── │  Function              │           │
│  └───────┬────────┘    Order ID          └───────────┬────────────┘           │
│          │                                           │                        │
│          │                                           │ Order Details          │
│          │                                           ▼                        │
│          │                               ┌────────────────────────┐           │
│          │                               │  D4: Payment Orders    │           │
│          │                               │      Database          │           │
│          │                               └────────────────────────┘           │
│          ▼                                                                    │
│  ┌────────────────┐    Payment Request  ┌────────────────────────┐           │
│  │  5.3           │ ───────────────────► │                        │           │
│  │  Process       │                      │    Razorpay            │           │
│  │  Payment       │ ◄─────────────────── │    Gateway             │           │
│  └───────┬────────┘    Payment Status    └────────────────────────┘           │
│          │                                                                    │
│          │ Payment Verified                                                   │
│          ▼                                                                    │
│  ┌────────────────┐    Update Credits   ┌────────────────────────┐           │
│  │  5.4           │ ───────────────────► │                        │           │
│  │  Update        │                      │  D5: User Credits      │           │
│  │  User Credits  │                      │      Database          │           │
│  └───────┬────────┘                      └────────────────────────┘           │
│          │                                                                    │
│          │ Confirmation                                                       │
│          ▼                                                                    │
│  ┌────────┐                                                                   │
│  │  USER  │                                                                   │
│  └────────┘                                                                   │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Level 2 - File Scanning Process

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                           FILE SCANNING PROCESS                               │
│                                                                               │
│  ┌────────┐                                                                   │
│  │  USER  │                                                                   │
│  └───┬────┘                                                                   │
│      │                                                                        │
│      │ Upload File                                                            │
│      ▼                                                                        │
│  ┌────────────────┐                                                           │
│  │  3.1           │                                                           │
│  │  Validate      │                                                           │
│  │  File Type     │                                                           │
│  │  (.exe,.pdf,   │                                                           │
│  │  .txt,.docx,   │                                                           │
│  │  .py)          │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Valid File                                                         │
│          ▼                                                                    │
│  ┌────────────────┐                                                           │
│  │  3.2           │                                                           │
│  │  Calculate     │                                                           │
│  │  File Hash     │                                                           │
│  │  (SHA-256)     │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ File Hash                                                          │
│          ▼                                                                    │
│  ┌────────────────┐     API Call       ┌────────────────────────┐            │
│  │  3.3           │ ──────────────────► │                        │            │
│  │  Query         │                     │   VirusTotal API       │            │
│  │  VirusTotal    │ ◄────────────────── │                        │            │
│  │  API           │    Detection Data   └────────────────────────┘            │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Raw Results                                                        │
│          ▼                                                                    │
│  ┌────────────────┐                                                           │
│  │  3.4           │                                                           │
│  │  Calculate     │                                                           │
│  │  Threat Level  │                                                           │
│  │  & Confidence  │                                                           │
│  └───────┬────────┘                                                           │
│          │                                                                    │
│          │ Processed Results                                                  │
│          ▼                                                                    │
│  ┌────────────────┐    Save History    ┌────────────────────────┐            │
│  │  3.5           │ ──────────────────► │                        │            │
│  │  Store Scan    │                     │  D3: Scan History DB   │            │
│  │  Results       │                     │                        │            │
│  └───────┬────────┘                     └────────────────────────┘            │
│          │                                                                    │
│          │ Display Results                                                    │
│          ▼                                                                    │
│  ┌────────┐                                                                   │
│  │  USER  │                                                                   │
│  └────────┘                                                                   │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 3.2 Entity Relationship Diagram (ERD)

### Complete ERD with Chen Notation

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         HACKSHIELD DATABASE ERD                                 │
│                                                                                 │
│                                                                                 │
│    ┌─────────────────┐                              ┌─────────────────┐        │
│    │                 │                              │                 │        │
│    │      USERS      │                              │   USER_CREDITS  │        │
│    │                 │                              │                 │        │
│    │  ◯ id (PK)      │         has                  │  ◯ id (PK)      │        │
│    │  ○ email        │◄────────────────────────────►│  ◯ user_id (FK) │        │
│    │  ○ created_at   │           1:1                │  ○ scan_credits │        │
│    │  ○ password     │                              │  ○ updated_at   │        │
│    │                 │                              │                 │        │
│    └────────┬────────┘                              └─────────────────┘        │
│             │                                                                   │
│             │                                                                   │
│             │ has                                                               │
│             │ 1:N                                                               │
│             │                                                                   │
│             ▼                                                                   │
│    ┌─────────────────┐                                                         │
│    │                 │                                                         │
│    │ USER_SUBSCRIP-  │                                                         │
│    │     TIONS       │                                                         │
│    │                 │                                                         │
│    │  ◯ id (PK)      │                                                         │
│    │  ◯ user_id (FK) │                                                         │
│    │  ○ plan_type    │                                                         │
│    │  ○ status       │                                                         │
│    │  ○ current_     │                                                         │
│    │    period_end   │                                                         │
│    │  ○ created_at   │                                                         │
│    │                 │                                                         │
│    └─────────────────┘                                                         │
│                                                                                 │
│                                                                                 │
│    ┌─────────────────┐                              ┌─────────────────┐        │
│    │                 │                              │                 │        │
│    │      USERS      │         places               │ PAYMENT_ORDERS  │        │
│    │                 │◄────────────────────────────►│                 │        │
│    │                 │           1:N                │  ◯ id (PK)      │        │
│    │                 │                              │  ◯ user_id (FK) │        │
│    └─────────────────┘                              │  ○ razorpay_    │        │
│                                                     │    order_id     │        │
│                                                     │  ○ amount       │        │
│                                                     │  ○ currency     │        │
│                                                     │  ○ payment_type │        │
│                                                     │  ○ status       │        │
│                                                     │  ○ created_at   │        │
│                                                     │                 │        │
│                                                     └─────────────────┘        │
│                                                                                 │
│                                                                                 │
│  LEGEND:                                                                        │
│  ──────                                                                         │
│  ◯ = Primary Key / Foreign Key                                                 │
│  ○ = Regular Attribute                                                          │
│  ◄───► = Relationship                                                           │
│  1:1 = One-to-One                                                              │
│  1:N = One-to-Many                                                             │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Table Relationships Summary

| Parent Table | Child Table | Relationship | Foreign Key |
|--------------|-------------|--------------|-------------|
| auth.users | user_credits | 1:1 | user_id |
| auth.users | user_subscriptions | 1:N | user_id |
| auth.users | payment_orders | 1:N | user_id |

---

## 3.3 System Requirements

### Hardware Requirements

#### Minimum Requirements (Development)

| Component | Specification |
|-----------|---------------|
| Processor | Intel Core i3 / AMD Ryzen 3 or equivalent |
| RAM | 4 GB |
| Storage | 256 GB SSD |
| Display | 1366 x 768 resolution |
| Network | Broadband Internet (10 Mbps) |

#### Recommended Requirements (Development)

| Component | Specification |
|-----------|---------------|
| Processor | Intel Core i5 / AMD Ryzen 5 or higher |
| RAM | 8 GB or more |
| Storage | 512 GB SSD |
| Display | 1920 x 1080 Full HD |
| Network | High-speed Internet (50 Mbps+) |

#### Server Requirements (Production)

| Component | Specification |
|-----------|---------------|
| Hosting | Cloud-based (Lovable Platform) |
| Database | Supabase PostgreSQL |
| CDN | Automatic via Lovable |
| SSL | Included |
| Backup | Automatic daily backups |

### Software Requirements

#### Development Environment

| Software | Version | Purpose |
|----------|---------|---------|
| Node.js | 18.x or higher | JavaScript runtime |
| npm | 9.x or higher | Package manager |
| VS Code | Latest | Code editor |
| Git | 2.x | Version control |
| Chrome | Latest | Primary testing browser |
| Firefox | Latest | Secondary testing browser |

#### Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | Frontend framework |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 3.x | Styling framework |
| Vite | 5.x | Build tool |
| Supabase | Latest | Backend services |
| React Router | 6.30.1 | Routing |

#### External Services

| Service | Purpose | Status |
|---------|---------|--------|
| VirusTotal API | Malware scanning | Required |
| Razorpay | Payment processing | Required |
| Supabase | Database & Auth | Required |
| Lovable | Hosting platform | Required |

---

# CHAPTER 4: SYSTEM DESIGN

## 4.1 Database Design

### Database Schema

#### Table 1: payment_orders

```sql
CREATE TABLE payment_orders (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    razorpay_order_id TEXT NOT NULL,
    amount          INTEGER NOT NULL,
    currency        TEXT DEFAULT 'INR',
    payment_type    TEXT NOT NULL,  -- 'single_scan' or 'subscription'
    status          TEXT DEFAULT 'pending',
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

| Column | Data Type | Constraints | Description |
|--------|-----------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| user_id | UUID | FOREIGN KEY, NOT NULL | Reference to auth.users |
| razorpay_order_id | TEXT | NOT NULL | Razorpay order reference |
| amount | INTEGER | NOT NULL | Amount in paise (₹199 = 19900) |
| currency | TEXT | DEFAULT 'INR' | Currency code |
| payment_type | TEXT | NOT NULL | 'single_scan' or 'subscription' |
| status | TEXT | DEFAULT 'pending' | pending/completed/failed |
| created_at | TIMESTAMP | DEFAULT NOW() | Record creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

#### Table 2: user_credits

```sql
CREATE TABLE user_credits (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    scan_credits    INTEGER DEFAULT 0,
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

| Column | Data Type | Constraints | Description |
|--------|-----------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| user_id | UUID | UNIQUE, FOREIGN KEY | Reference to auth.users |
| scan_credits | INTEGER | DEFAULT 0 | Available scan credits |
| created_at | TIMESTAMP | DEFAULT NOW() | Record creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

#### Table 3: user_subscriptions

```sql
CREATE TABLE user_subscriptions (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_type           TEXT DEFAULT 'free',
    status              TEXT DEFAULT 'inactive',
    current_period_end  TIMESTAMP WITH TIME ZONE,
    created_at          TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at          TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

| Column | Data Type | Constraints | Description |
|--------|-----------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| user_id | UUID | UNIQUE, FOREIGN KEY | Reference to auth.users |
| plan_type | TEXT | DEFAULT 'free' | 'free' or 'premium' |
| status | TEXT | DEFAULT 'inactive' | active/inactive/expired |
| current_period_end | TIMESTAMP | NULLABLE | Subscription expiry date |
| created_at | TIMESTAMP | DEFAULT NOW() | Record creation time |
| updated_at | TIMESTAMP | DEFAULT NOW() | Last update time |

### Row Level Security (RLS) Policies

```sql
-- payment_orders policies
CREATE POLICY "Users can view own orders" ON payment_orders
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON payment_orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- user_credits policies
CREATE POLICY "Users can view own credits" ON user_credits
    FOR SELECT USING (auth.uid() = user_id);

-- user_subscriptions policies
CREATE POLICY "Users can view own subscription" ON user_subscriptions
    FOR SELECT USING (auth.uid() = user_id);
```

---

## 4.2 Input Design

### Input Forms

#### 1. Registration Form

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| Email | email | Valid email format | Yes |
| Password | password | Min 8 characters, 1 uppercase, 1 number | Yes |
| Confirm Password | password | Must match password | Yes |

```
┌────────────────────────────────────────────┐
│           CREATE ACCOUNT                    │
├────────────────────────────────────────────┤
│                                            │
│  Email Address                             │
│  ┌──────────────────────────────────────┐  │
│  │ your.email@example.com               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Password                                  │
│  ┌──────────────────────────────────────┐  │
│  │ ••••••••••••                         │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Confirm Password                          │
│  ┌──────────────────────────────────────┐  │
│  │ ••••••••••••                         │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │         CREATE ACCOUNT               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Already have an account? Login            │
│                                            │
└────────────────────────────────────────────┘
```

#### 2. Login Form

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| Email | email | Valid email format | Yes |
| Password | password | Non-empty | Yes |

```
┌────────────────────────────────────────────┐
│              LOGIN                          │
├────────────────────────────────────────────┤
│                                            │
│  Email Address                             │
│  ┌──────────────────────────────────────┐  │
│  │ your.email@example.com               │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Password                                  │
│  ┌──────────────────────────────────────┐  │
│  │ ••••••••••••                         │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌──────────────────────────────────────┐  │
│  │              LOGIN                   │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  Don't have an account? Register           │
│                                            │
└────────────────────────────────────────────┘
```

#### 3. File Upload Interface

| Field | Type | Validation | Required |
|-------|------|------------|----------|
| File | file | .exe, .pdf, .txt, .docx, .py only | Yes |
| File Size | - | Max 20MB | Automatic |

```
┌────────────────────────────────────────────────────────────┐
│                    UPLOAD FILE FOR SCANNING                 │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                      │  │
│  │                   ╔═══════════╗                      │  │
│  │                   ║     📁    ║                      │  │
│  │                   ╚═══════════╝                      │  │
│  │                                                      │  │
│  │          Drag and drop your file here               │  │
│  │                      or                              │  │
│  │              [Browse Files]                          │  │
│  │                                                      │  │
│  │  Supported: .exe, .pdf, .txt, .docx, .py            │  │
│  │  Maximum size: 20MB                                  │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 4.3 Output Design

### Output Screens

#### 1. Scan Results Display

```
┌────────────────────────────────────────────────────────────────────┐
│                         SCAN RESULTS                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  File: suspicious_file.exe                                         │
│  Size: 2.4 MB                                                      │
│  Scanned: December 09, 2024, 10:30 AM                             │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │   ⚠️  THREAT DETECTED                                        │  │
│  │                                                              │  │
│  │   Confidence Score: 87%                                      │  │
│  │   ████████████████████░░░░                                   │  │
│  │                                                              │  │
│  │   Threat Type: Trojan.GenericKD                             │  │
│  │   Severity: HIGH                                             │  │
│  │                                                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  Detection Details:                                                │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ Engine              │ Result                                │  │
│  │─────────────────────┼─────────────────────────────────────── │  │
│  │ Avast               │ Win32:Trojan-gen                      │  │
│  │ Kaspersky           │ Trojan.Win32.Generic                  │  │
│  │ McAfee              │ Artemis!ABC123                        │  │
│  │ Norton              │ Trojan.Gen.2                          │  │
│  │ Windows Defender    │ Trojan:Win32/Generic                  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌────────────────────┐  ┌────────────────────┐                   │
│  │  Download Report   │  │   Scan Another     │                   │
│  └────────────────────┘  └────────────────────┘                   │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

#### 2. Dashboard Statistics

```
┌────────────────────────────────────────────────────────────────────┐
│                     SECURITY DASHBOARD                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐    │
│  │                 │  │                 │  │                 │    │
│  │   Total Scans   │  │  Threats Found  │  │   Clean Files   │    │
│  │                 │  │                 │  │                 │    │
│  │      156        │  │       23        │  │      133        │    │
│  │                 │  │                 │  │                 │    │
│  │     📊 +12%     │  │     ⚠️ +5%      │  │     ✅ +15%     │    │
│  │                 │  │                 │  │                 │    │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘    │
│                                                                    │
│  Recent Scans:                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ File Name          │ Date       │ Status    │ Action        │  │
│  │────────────────────┼────────────┼───────────┼───────────────│  │
│  │ document.pdf       │ 09 Dec     │ ✅ Clean   │ View Report   │  │
│  │ setup.exe          │ 09 Dec     │ ⚠️ Threat │ View Report   │  │
│  │ script.py          │ 08 Dec     │ ✅ Clean   │ View Report   │  │
│  │ report.docx        │ 08 Dec     │ ✅ Clean   │ View Report   │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

#### 3. PDF Report Layout

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│                         ╔═══════════════╗                          │
│                         ║  HACKSHIELD   ║                          │
│                         ╚═══════════════╝                          │
│                     AI MALWARE SCANNER REPORT                      │
│                                                                    │
│ ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│  SCAN SUMMARY                                                      │
│  ─────────────                                                     │
│  Report ID:      RPT-2024120901                                   │
│  Scan Date:      December 09, 2024                                │
│  Scan Time:      10:30:45 AM IST                                  │
│                                                                    │
│  FILE INFORMATION                                                  │
│  ────────────────                                                  │
│  File Name:      suspicious_file.exe                              │
│  File Size:      2.4 MB (2,516,582 bytes)                         │
│  File Type:      Windows Executable                               │
│  SHA-256:        a1b2c3d4e5f6...                                  │
│                                                                    │
│  THREAT ANALYSIS                                                   │
│  ────────────────                                                  │
│  Status:         ⚠️ THREAT DETECTED                                │
│  Confidence:     87%                                               │
│  Threat Type:    Trojan.GenericKD                                 │
│  Severity:       HIGH                                              │
│                                                                    │
│  DETECTION BREAKDOWN                                               │
│  ────────────────────                                              │
│  Total Engines:  70                                                │
│  Detections:     45                                                │
│  Clean:          25                                                │
│                                                                    │
│  RECOMMENDATIONS                                                   │
│  ───────────────                                                   │
│  1. Do not execute this file                                      │
│  2. Quarantine or delete the file immediately                     │
│  3. Run a full system antivirus scan                              │
│  4. Check system for other suspicious files                       │
│                                                                    │
│ ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│  Generated by HackShield AI Malware Scanner                       │
│  https://hackshield-ai-defense.lovable.app                        │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

# CHAPTER 5: USER MANUAL

## 5.1 Getting Started

### System Requirements for Users

| Requirement | Minimum Specification |
|-------------|----------------------|
| Browser | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| Internet | Stable broadband connection |
| Screen | 1024 x 768 minimum resolution |
| JavaScript | Must be enabled |

### Accessing the Application

1. Open your web browser
2. Navigate to: **https://hackshield-ai-defense.lovable.app**
3. The welcome screen will be displayed

---

## 5.2 User Registration

### Step 1: Click "Get Started"
From the welcome screen, click the "Get Started" button.

### Step 2: Select "Create Account"
Choose the registration option.

### Step 3: Fill Registration Form
- Enter your email address
- Create a strong password (minimum 8 characters)
- Confirm your password
- Click "Create Account"

### Step 4: Verify Email (if required)
Check your email inbox for a verification link and click it.

---

## 5.3 User Login

### Step 1: Click "Login"
From the welcome screen, click the "Login" button.

### Step 2: Enter Credentials
- Enter your registered email address
- Enter your password
- Click "Login"

### Step 3: Access Dashboard
Upon successful login, you will be redirected to the main dashboard.

---

## 5.4 Scanning Files

### Step 1: Navigate to Upload Section
From the dashboard, locate the file upload area.

### Step 2: Select File
**Option A: Drag and Drop**
- Drag your file from your computer
- Drop it into the upload area

**Option B: Browse Files**
- Click "Browse Files" button
- Select the file from your computer
- Click "Open"

### Step 3: Verify File
- Check that the correct file is selected
- Verify file type is supported (.exe, .pdf, .txt, .docx, .py)
- Ensure file size is under 20MB

### Step 4: Initiate Scan
- Click "Scan File" button
- Wait for the scanning process (usually 10-30 seconds)

### Step 5: View Results
- Review the threat level indicator
- Check the confidence score
- Read detection details from various engines

---

## 5.5 Understanding Scan Results

### Threat Level Indicators

| Indicator | Color | Meaning | Action Required |
|-----------|-------|---------|-----------------|
| CLEAN | Green | No threats detected | Safe to use |
| SUSPICIOUS | Yellow | Potential risk found | Use with caution |
| MALICIOUS | Red | Confirmed threat | Delete immediately |

### Confidence Score

| Score Range | Interpretation |
|-------------|----------------|
| 0-30% | Low confidence - may be false positive |
| 31-60% | Medium confidence - investigate further |
| 61-100% | High confidence - likely genuine detection |

---

## 5.6 Downloading Reports

### Step 1: Complete Scan
Wait for the scan to complete successfully.

### Step 2: Locate Download Button
Find the "Download Report" button on the results page.

### Step 3: Generate PDF
Click the button to generate a PDF report.

### Step 4: Save File
Choose a location on your computer to save the PDF.

---

## 5.7 Managing Credits and Subscription

### Viewing Credit Balance
- Your current credit balance is displayed on the dashboard
- Premium subscribers have unlimited scans

### Purchasing Credits
1. Click "Buy Credits" button
2. Select payment plan:
   - Single Scan: ₹199
   - Monthly Subscription: ₹799
3. Complete payment via Razorpay
4. Credits are added instantly

### Subscription Benefits
- Unlimited file scans
- Priority scanning queue
- Advanced threat reports
- Email notifications

---

## 5.8 Troubleshooting

### Common Issues and Solutions

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| File not uploading | File too large | Reduce file size or compress |
| Scan taking too long | Server busy | Wait or try again later |
| Login failed | Wrong credentials | Reset password |
| Payment failed | Card declined | Try different payment method |
| No results shown | Network error | Refresh page and retry |

### Contact Support
For additional help, please contact:
- Email: [support@hackshield.com]
- Website: [Help Section]

---

# CHAPTER 6: REPORTS

## 6.1 System Reports

### Report 1: User Activity Report

| Metric | Value | Period |
|--------|-------|--------|
| Total Registered Users | XXX | Monthly |
| Active Users | XXX | Daily |
| New Registrations | XXX | Weekly |
| User Retention Rate | XX% | Monthly |

### Report 2: Scanning Statistics

| Metric | Value | Trend |
|--------|-------|-------|
| Total Scans Performed | XXXX | ↑ 15% |
| Average Scans per User | X.X | ↑ 8% |
| Threats Detected | XXX | ↓ 5% |
| Clean Files | XXXX | ↑ 12% |

### Report 3: Threat Analysis Report

| Threat Type | Count | Percentage |
|-------------|-------|------------|
| Trojan | XXX | 45% |
| Adware | XX | 20% |
| Ransomware | XX | 15% |
| Spyware | XX | 10% |
| Other | XX | 10% |

### Report 4: Revenue Report

| Category | Amount (₹) | Period |
|----------|------------|--------|
| Single Scan Sales | XXXXX | Monthly |
| Subscription Revenue | XXXXX | Monthly |
| Total Revenue | XXXXX | Monthly |
| Growth Rate | XX% | Monthly |

---

## 6.2 Sample Output Reports

### Sample Scan Report - Clean File

```
═══════════════════════════════════════════════════════
                    HACKSHIELD SCAN REPORT
═══════════════════════════════════════════════════════

Report ID: RPT-20241209-001
Generated: December 09, 2024 at 10:30:00 AM

FILE DETAILS
─────────────────────────────────────────────────────────
File Name:     important_document.pdf
File Size:     1.2 MB
File Type:     PDF Document
SHA-256:       abc123def456...

SCAN RESULTS
─────────────────────────────────────────────────────────
Status:        ✅ CLEAN
Confidence:    98%
Engines Used:  70
Detections:    0

VERDICT
─────────────────────────────────────────────────────────
This file appears to be safe. No malicious content was
detected by any of the 70 antivirus engines used in
the scan.

═══════════════════════════════════════════════════════
              Powered by HackShield AI
═══════════════════════════════════════════════════════
```

### Sample Scan Report - Infected File

```
═══════════════════════════════════════════════════════
                    HACKSHIELD SCAN REPORT
═══════════════════════════════════════════════════════

Report ID: RPT-20241209-002
Generated: December 09, 2024 at 11:45:00 AM

FILE DETAILS
─────────────────────────────────────────────────────────
File Name:     free_software_setup.exe
File Size:     5.8 MB
File Type:     Windows Executable
SHA-256:       xyz789abc123...

SCAN RESULTS
─────────────────────────────────────────────────────────
Status:        ⚠️ MALICIOUS
Confidence:    92%
Engines Used:  70
Detections:    58

THREAT INFORMATION
─────────────────────────────────────────────────────────
Primary Threat:  Trojan.GenericKD.46521234
Category:        Trojan
Severity:        CRITICAL

DETECTION BREAKDOWN
─────────────────────────────────────────────────────────
| Antivirus Engine    | Detection Name           |
|---------------------|--------------------------|
| Kaspersky           | Trojan.Win32.Generic     |
| Avast               | Win32:Trojan-gen         |
| Norton              | Trojan.Gen.2             |
| McAfee              | Artemis!ABC123DEF        |
| Bitdefender         | Gen:Variant.Trojan       |
| [+53 more engines]  | ...                      |

RECOMMENDATIONS
─────────────────────────────────────────────────────────
1. DO NOT execute this file under any circumstances
2. Delete the file immediately from your system
3. Run a full system scan with your antivirus
4. Check recent downloads for similar threats
5. Update your antivirus definitions

═══════════════════════════════════════════════════════
         ⚠️ CRITICAL THREAT - IMMEDIATE ACTION REQUIRED
═══════════════════════════════════════════════════════
              Powered by HackShield AI
═══════════════════════════════════════════════════════
```

---

# CHAPTER 7: CONCLUSION AND SUGGESTIONS

## 7.1 Conclusion

HackShield - AI Malware Scanner has been successfully developed as a comprehensive cybersecurity solution that addresses the growing need for accessible and effective malware detection tools. The project demonstrates the practical application of modern web technologies combined with industry-standard security APIs.

### Key Achievements

1. **Successful Implementation of Core Features**
   - Real-time file scanning using VirusTotal API
   - Secure user authentication system
   - Intuitive drag-and-drop file upload
   - Comprehensive threat detection and reporting

2. **User-Centric Design**
   - Modern, responsive interface
   - Clear threat indicators and confidence scores
   - Easy-to-understand scan results
   - Downloadable PDF reports

3. **Business Model Integration**
   - Razorpay payment gateway integration
   - Credit-based scanning system
   - Subscription plans for power users
   - Scalable pricing structure

4. **Technical Excellence**
   - React-based frontend with TypeScript
   - Supabase backend with PostgreSQL
   - Edge functions for secure API handling
   - Row-level security for data protection

### Learning Outcomes

Through this project, the following skills and knowledge were gained:

| Area | Skills Developed |
|------|------------------|
| Frontend Development | React, TypeScript, Tailwind CSS, Component Design |
| Backend Development | Supabase, PostgreSQL, Edge Functions, API Integration |
| Security | Authentication, RLS Policies, Secure Payment Processing |
| UI/UX Design | Responsive Design, User Experience, Accessibility |
| Project Management | Planning, Documentation, Testing, Deployment |

---

## 7.2 Suggestions

### For Users

1. **Always scan downloaded files** before opening, especially executables
2. **Keep the application bookmarked** for quick access
3. **Consider premium subscription** for unlimited scanning
4. **Report false positives** to help improve detection accuracy
5. **Update browsers regularly** for best performance

### For Administrators

1. **Monitor system usage** to plan capacity
2. **Implement rate limiting** to prevent API abuse
3. **Regular security audits** of the codebase
4. **Backup database** regularly
5. **Update dependencies** to patch vulnerabilities

### For Developers

1. **Follow coding standards** established in the project
2. **Write unit tests** for new features
3. **Document API changes** thoroughly
4. **Use TypeScript strictly** for type safety
5. **Review pull requests** carefully

---

## 7.3 Future Enhancements

### Phase 1: Near-term (1-3 months)

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| URL Scanning | Scan websites for phishing and malware | High |
| Email Integration | Scan email attachments directly | High |
| Bulk Scanning | Upload and scan multiple files at once | Medium |
| API Access | Provide REST API for developers | Medium |

### Phase 2: Mid-term (3-6 months)

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| Browser Extension | Real-time download protection | High |
| Mobile App | iOS and Android applications | High |
| Machine Learning | Custom ML model for detection | Medium |
| Sandbox Analysis | Execute files in isolated environment | Medium |

### Phase 3: Long-term (6-12 months)

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| Enterprise Features | Admin dashboard, team management | High |
| Cloud Storage Integration | Scan Google Drive, Dropbox files | Medium |
| Threat Intelligence Feed | Real-time threat data updates | Medium |
| Compliance Reports | GDPR, HIPAA compliance features | Low |

### Technical Improvements

```
┌─────────────────────────────────────────────────────────────────┐
│                    FUTURE ARCHITECTURE                          │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    FRONTEND LAYER                         │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │ │
│  │  │   Web    │  │  Mobile  │  │ Browser  │  │   API    │  │ │
│  │  │   App    │  │   Apps   │  │Extension │  │  Clients │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              │                                  │
│                              ▼                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    API GATEWAY                            │ │
│  │         Load Balancing • Rate Limiting • Auth             │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              │                                  │
│                              ▼                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                  MICROSERVICES LAYER                      │ │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐          │ │
│  │  │ Scan   │  │ Auth   │  │Payment │  │Report  │          │ │
│  │  │Service │  │Service │  │Service │  │Service │          │ │
│  │  └────────┘  └────────┘  └────────┘  └────────┘          │ │
│  └───────────────────────────────────────────────────────────┘ │
│                              │                                  │
│                              ▼                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    DATA LAYER                             │ │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐          │ │
│  │  │ PostgreSQL │  │   Redis    │  │   S3/CDN   │          │ │
│  │  │  Database  │  │   Cache    │  │  Storage   │          │ │
│  │  └────────────┘  └────────────┘  └────────────┘          │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

# CHAPTER 8: BIBLIOGRAPHY/REFERENCES

## 8.1 References

### Books

| S.No | Book Title | Author | Publisher | Year |
|------|------------|--------|-----------|------|
| 1 | Learning React | Alex Banks, Eve Porcello | O'Reilly Media | 2020 |
| 2 | TypeScript Programming | Boris Cherny | O'Reilly Media | 2019 |
| 3 | Web Security for Developers | Malcolm McDonald | No Starch Press | 2020 |
| 4 | Database Design | Toby J. Teorey | Morgan Kaufmann | 2011 |

### Online Resources

| S.No | Resource | URL | Access Date |
|------|----------|-----|-------------|
| 1 | React Documentation | https://react.dev | Dec 2024 |
| 2 | TypeScript Documentation | https://www.typescriptlang.org/docs | Dec 2024 |
| 3 | Tailwind CSS Documentation | https://tailwindcss.com/docs | Dec 2024 |
| 4 | Supabase Documentation | https://supabase.com/docs | Dec 2024 |
| 5 | VirusTotal API Documentation | https://developers.virustotal.com | Dec 2024 |
| 6 | Razorpay Documentation | https://razorpay.com/docs | Dec 2024 |
| 7 | Lovable Platform Documentation | https://docs.lovable.dev | Dec 2024 |

### Research Papers

| S.No | Title | Authors | Publication | Year |
|------|-------|---------|-------------|------|
| 1 | Machine Learning for Malware Detection | XYZ et al. | IEEE Security | 2023 |
| 2 | Modern Web Application Security | ABC et al. | ACM Computing | 2022 |
| 3 | Static Analysis of Malicious Files | DEF et al. | Elsevier | 2021 |

### Websites

| S.No | Website | Purpose | URL |
|------|---------|---------|-----|
| 1 | GitHub | Version Control | https://github.com |
| 2 | Stack Overflow | Technical Solutions | https://stackoverflow.com |
| 3 | MDN Web Docs | Web Standards | https://developer.mozilla.org |
| 4 | shadcn/ui | UI Components | https://ui.shadcn.com |

---

## 8.2 Progress Report

### Project Timeline

| Week | Dates | Activities Completed | Status |
|------|-------|---------------------|--------|
| 1 | Week 1 | Project proposal, requirements gathering | ✅ Completed |
| 2 | Week 2 | Feasibility study, technology selection | ✅ Completed |
| 3 | Week 3 | System design, database design | ✅ Completed |
| 4 | Week 4 | UI/UX mockups, wireframes | ✅ Completed |
| 5 | Week 5 | Frontend setup, component structure | ✅ Completed |
| 6 | Week 6 | Authentication system implementation | ✅ Completed |
| 7 | Week 7 | File upload functionality | ✅ Completed |
| 8 | Week 8 | VirusTotal API integration | ✅ Completed |
| 9 | Week 9 | Scan results display, reporting | ✅ Completed |
| 10 | Week 10 | Payment gateway integration | ✅ Completed |
| 11 | Week 11 | Testing and bug fixes | ✅ Completed |
| 12 | Week 12 | Documentation, deployment | ✅ Completed |

### Milestones Achieved

| Milestone | Target Date | Actual Date | Status |
|-----------|-------------|-------------|--------|
| Project Kickoff | Week 1 | Week 1 | ✅ On Time |
| Design Approval | Week 4 | Week 4 | ✅ On Time |
| MVP Release | Week 8 | Week 8 | ✅ On Time |
| Payment Integration | Week 10 | Week 10 | ✅ On Time |
| Final Deployment | Week 12 | Week 12 | ✅ On Time |

### Challenges Faced and Solutions

| Challenge | Solution Applied |
|-----------|------------------|
| API Rate Limiting | Implemented caching and request queuing |
| Secure Payment Processing | Used Razorpay's tested payment flow |
| File Size Handling | Added client-side validation and compression |
| Cross-browser Compatibility | Used modern CSS with fallbacks |
| Database Security | Implemented RLS policies in Supabase |

---

## Appendices

### Appendix A: Glossary

| Term | Definition |
|------|------------|
| API | Application Programming Interface |
| DFD | Data Flow Diagram |
| ERD | Entity Relationship Diagram |
| GUI | Graphical User Interface |
| HTTPS | Hypertext Transfer Protocol Secure |
| JWT | JSON Web Token |
| RLS | Row Level Security |
| SHA-256 | Secure Hash Algorithm 256-bit |
| SQL | Structured Query Language |
| UI/UX | User Interface/User Experience |
| UUID | Universally Unique Identifier |

### Appendix B: Abbreviations

| Abbreviation | Full Form |
|--------------|-----------|
| AI | Artificial Intelligence |
| CSS | Cascading Style Sheets |
| DB | Database |
| FK | Foreign Key |
| HTML | HyperText Markup Language |
| INR | Indian Rupee |
| JS | JavaScript |
| ML | Machine Learning |
| PK | Primary Key |
| PDF | Portable Document Format |
| TS | TypeScript |

---

**Document Information**

| Field | Value |
|-------|-------|
| Document Title | HackShield - AI Malware Scanner Project Documentation |
| Version | 1.0 |
| Last Updated | December 09, 2024 |
| Author | [Your Name] |
| Institution | [Your College], Shivaji University, Kolhapur |
| Guide | [Guide Name] |
| Academic Year | 2024-2025 |

---

*This documentation was prepared following the guidelines and format prescribed by Shivaji University, Kolhapur for final year project submissions.*
