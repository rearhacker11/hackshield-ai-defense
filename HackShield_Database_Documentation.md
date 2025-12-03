# 🛡️ HackShield AI Malware Scanner
## Database Documentation

---

## 📋 Project Overview

**Project Name:** HackShield AI Malware Scanner  
**Database:** PostgreSQL (via Supabase/Lovable Cloud)  
**Authentication:** Supabase Auth (Email/Password)  
**Payment Gateway:** Razorpay

---

## 📊 Database Schema Overview

HackShield uses **3 main database tables** to manage user data, payments, and subscriptions:

| Table Name | Purpose |
|------------|---------|
| `payment_orders` | Stores all Razorpay payment orders |
| `user_credits` | Tracks scan credits for each user |
| `user_subscriptions` | Manages premium subscription status |

---

## 📁 TABLE 1: payment_orders

### Description
Stores all payment orders created through Razorpay gateway. Records payment attempts, completions, and transaction details.

### Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier for each order |
| `user_id` | UUID | NOT NULL, FOREIGN KEY → auth.users(id) | Reference to authenticated user |
| `razorpay_order_id` | TEXT | NOT NULL, UNIQUE | Razorpay order ID |
| `razorpay_payment_id` | TEXT | NULLABLE | Razorpay payment ID (after completion) |
| `amount` | INTEGER | NOT NULL | Payment amount in INR |
| `currency` | TEXT | DEFAULT 'INR' | Currency code |
| `payment_type` | TEXT | NOT NULL | Type: 'scan' or 'subscription' |
| `status` | TEXT | DEFAULT 'created' | Order status: created/completed/failed |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Order creation timestamp |
| `verified_at` | TIMESTAMP | NULLABLE | Payment verification timestamp |

### SQL Schema
```sql
CREATE TABLE public.payment_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    razorpay_order_id TEXT NOT NULL UNIQUE,
    razorpay_payment_id TEXT,
    amount INTEGER NOT NULL,
    currency TEXT DEFAULT 'INR',
    payment_type TEXT NOT NULL CHECK (payment_type IN ('scan', 'subscription')),
    status TEXT DEFAULT 'created' CHECK (status IN ('created', 'completed', 'failed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    verified_at TIMESTAMP WITH TIME ZONE
);

-- Row Level Security
ALTER TABLE public.payment_orders ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only view their own orders
CREATE POLICY "Users can view own orders" ON public.payment_orders
    FOR SELECT USING (auth.uid() = user_id);
```

### Sample Data
| id | user_id | razorpay_order_id | amount | payment_type | status |
|----|---------|-------------------|--------|--------------|--------|
| abc-123 | user-456 | order_MxYz123 | 49 | scan | completed |
| def-789 | user-456 | order_AbCd456 | 199 | subscription | completed |

---

## 📁 TABLE 2: user_credits

### Description
Tracks the number of scan credits available for each user. Credits are consumed when performing malware scans.

### Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `user_id` | UUID | NOT NULL, UNIQUE, FOREIGN KEY → auth.users(id) | Reference to user (one record per user) |
| `scan_credits` | INTEGER | DEFAULT 0, NOT NULL | Available scan credits |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | Last update timestamp |

### SQL Schema
```sql
CREATE TABLE public.user_credits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    scan_credits INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE public.user_credits ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only view their own credits
CREATE POLICY "Users can view own credits" ON public.user_credits
    FOR SELECT USING (auth.uid() = user_id);

-- RLS Policy: Users can update their own credits
CREATE POLICY "Users can update own credits" ON public.user_credits
    FOR UPDATE USING (auth.uid() = user_id);
```

### Sample Data
| id | user_id | scan_credits | updated_at |
|----|---------|--------------|------------|
| credit-001 | user-456 | 5 | 2024-01-15 10:30:00 |
| credit-002 | user-789 | 0 | 2024-01-14 08:00:00 |

---

## 📁 TABLE 3: user_subscriptions

### Description
Manages premium subscription status for users. Premium users get unlimited scans during their subscription period.

### Table Structure

| Column Name | Data Type | Constraints | Description |
|-------------|-----------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `user_id` | UUID | NOT NULL, UNIQUE, FOREIGN KEY → auth.users(id) | Reference to user |
| `plan_type` | TEXT | DEFAULT 'free' | Plan: 'free' or 'premium' |
| `status` | TEXT | DEFAULT 'inactive' | Status: 'active' or 'inactive' |
| `current_period_end` | TIMESTAMP | NULLABLE | Subscription expiry date |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation timestamp |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | Last update timestamp |

### SQL Schema
```sql
CREATE TABLE public.user_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_type TEXT DEFAULT 'free' CHECK (plan_type IN ('free', 'premium')),
    status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'inactive')),
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only view their own subscription
CREATE POLICY "Users can view own subscription" ON public.user_subscriptions
    FOR SELECT USING (auth.uid() = user_id);
```

### Sample Data
| id | user_id | plan_type | status | current_period_end |
|----|---------|-----------|--------|-------------------|
| sub-001 | user-456 | premium | active | 2024-02-15 00:00:00 |
| sub-002 | user-789 | free | inactive | NULL |

---

## 🔐 Authentication Table (Supabase Built-in)

### auth.users (System Table)
This is a built-in Supabase table that manages user authentication.

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| `id` | UUID | Unique user identifier |
| `email` | TEXT | User's email address |
| `encrypted_password` | TEXT | Hashed password |
| `created_at` | TIMESTAMP | Account creation time |
| `last_sign_in_at` | TIMESTAMP | Last login time |
| `raw_user_meta_data` | JSONB | Additional user metadata |

---

## 🔗 Entity Relationship Diagram (ERD)

```
┌─────────────────────┐
│     auth.users      │
│─────────────────────│
│ id (PK)             │
│ email               │
│ encrypted_password  │
│ created_at          │
└──────────┬──────────┘
           │
           │ 1:1
           │
    ┌──────┴──────┬────────────────┐
    │             │                │
    ▼             ▼                ▼
┌───────────┐ ┌──────────────┐ ┌──────────────────┐
│user_credits│ │user_subscriptions│ │ payment_orders │
│───────────│ │──────────────│ │──────────────────│
│id (PK)    │ │id (PK)       │ │id (PK)           │
│user_id(FK)│ │user_id (FK)  │ │user_id (FK)      │
│scan_credits│ │plan_type    │ │razorpay_order_id │
│updated_at │ │status        │ │amount            │
└───────────┘ │current_period│ │payment_type      │
              │_end          │ │status            │
              └──────────────┘ └──────────────────┘
```

---

## 🔄 Data Flow Diagram

```
User Registration/Login
        │
        ▼
┌─────────────────────┐
│    auth.users       │ ◄── Supabase Auth handles this
└─────────────────────┘
        │
        ├─── Creates record in user_credits (0 credits)
        │
        └─── Creates record in user_subscriptions (free plan)
        
Payment Flow:
        │
        ▼
┌─────────────────────┐
│  Create Razorpay    │
│      Order          │
└─────────────────────┘
        │
        ▼
┌─────────────────────┐
│  payment_orders     │ ◄── status: 'created'
└─────────────────────┘
        │
        ▼ (After payment success)
        │
┌─────────────────────┐
│  Verify Payment     │
└─────────────────────┘
        │
        ├─── Update payment_orders (status: 'completed')
        │
        └─── If payment_type = 'scan':
             │   └── Update user_credits (+1 credit)
             │
             └── If payment_type = 'subscription':
                 └── Update user_subscriptions (premium, active)
```

---

## 💰 Pricing Structure

| Plan Type | Price (INR) | Credits | Validity |
|-----------|-------------|---------|----------|
| Single Scan | ₹49 | 1 credit | One-time use |
| Premium Monthly | ₹199 | Unlimited | 30 days |

---

## 🛡️ Security Features

### Row Level Security (RLS)
- All tables have RLS enabled
- Users can only access their own data
- Service role key used for backend operations

### API Security
- JWT token authentication
- Razorpay signature verification
- CORS headers configured

---

## 📱 Edge Functions

### 1. create-razorpay-order
- **Purpose:** Creates a new payment order in Razorpay
- **Endpoint:** `/functions/v1/create-razorpay-order`
- **Method:** POST
- **Authentication:** Required (JWT)

### 2. verify-razorpay-payment
- **Purpose:** Verifies payment signature and updates database
- **Endpoint:** `/functions/v1/verify-razorpay-payment`
- **Method:** POST
- **Authentication:** Required (JWT)

---

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Public anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (backend only) |
| `RAZORPAY_KEY_ID` | Razorpay public key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key |

---

## 👨‍💻 Developer Information

**Project:** HackShield AI Malware Scanner  
**Technology Stack:** React, TypeScript, Tailwind CSS, Supabase, Razorpay  
**Database:** PostgreSQL  
**Hosting:** Lovable Cloud

---

*Document Version: 1.0*  
*Last Updated: December 2024*
