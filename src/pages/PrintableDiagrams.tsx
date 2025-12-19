import { useEffect } from "react";

const PrintableDiagrams = () => {
  useEffect(() => {
    document.title = "HackShield - ERD & DFD Diagrams";
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-8 print:p-4" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-black pb-4 mb-8">
        <h1 className="text-2xl font-bold uppercase tracking-wide">KBPIMSR, Satara</h1>
        <p className="text-lg mt-2">Shivaji University, Kolhapur</p>
      </div>

      {/* Page 1: Data Flow Diagrams */}
      <div className="mb-8 print:break-after-page">
        <h2 className="text-xl font-bold mb-6 border-b border-black pb-2">1. Data Flow Diagram</h2>
        
        {/* 0th Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">0<sup>th</sup> Level (Context Diagram)</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`                                         ┌─────────────────────────────────────┐
                                         │                                     │
     ┌──────────┐                        │                                     │                    ┌──────────┐
     │          │    File Upload         │                                     │   Scan Results     │          │
     │          │  ─────────────────►    │                                     │ ─────────────────► │          │
     │   USER   │    Login Request       │           HACKSHIELD                │   Payment Status   │  ADMIN   │
     │          │  ─────────────────►    │         AI MALWARE SCANNER          │ ─────────────────► │          │
     │          │    Payment Details     │                                     │   User Reports     │          │
     │          │  ─────────────────►    │                                     │ ─────────────────► │          │
     │          │  ◄─────────────────    │                                     │                    │          │
     └──────────┘    Auth Response       │                                     │                    └──────────┘
                     Scan Report         └─────────────────────────────────────┘
                     Payment Receipt`}
            </pre>
          </div>
        </div>

        {/* 1st Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">1<sup>st</sup> Level</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`                                                ┌─────────────────┐
                                                │   USER_CREDITS  │
                                                │      (D3)       │
                                                └────────┬────────┘
                                                         │
                                                         │ Credits Info
                                                         ▼
     ┌──────────┐       Registration       ┌──────────────────────┐
     │          │  ──────────────────────► │                      │
     │          │       Login Details      │                      │
     │   USER   │  ──────────────────────► │    1.0               │
     │          │                          │  REGISTRATION        │ ────────────────► ┌─────────────┐
     │          │  ◄────────────────────── │                      │   User Data       │   USERS     │
     │          │       Auth Token         └──────────────────────┘                   │    (D1)     │
     └──────────┘                                                                     └─────────────┘`}
            </pre>
          </div>
        </div>

        {/* 2nd Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">2<sup>nd</sup> Level</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`     ┌──────────┐       Username/Password    ┌──────────────────────┐
     │          │  ────────────────────────► │                      │
     │          │                            │    2.0               │                  ┌─────────────┐
     │   USER   │                            │    LOGIN             │ ───────────────► │   USERS     │
     │          │  ◄──────────────────────── │                      │  Validate User   │    (D1)     │
     │          │       Session Token        └──────────────────────┘                  └─────────────┘
     └──────────┘`}
            </pre>
          </div>
        </div>

        {/* 3rd Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">3<sup>rd</sup> Level</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`     ┌──────────┐       File Data            ┌──────────────────────┐
     │          │  ────────────────────────► │                      │
     │          │                            │    3.0               │                  ┌─────────────┐
     │   USER   │                            │  FILE UPLOAD         │ ───────────────► │  SCAN_LOGS  │
     │          │  ◄──────────────────────── │  & SCAN              │  Store Results   │    (D2)     │
     │          │       Scan Results         └──────────────────────┘                  └─────────────┘
     └──────────┘`}
            </pre>
          </div>
        </div>
      </div>

      {/* Page 2: More DFD Levels */}
      <div className="mb-8 print:break-after-page">
        {/* 4th Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">4<sup>th</sup> Level</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`     ┌──────────┐       Payment Request      ┌──────────────────────┐
     │          │  ────────────────────────► │                      │
     │          │                            │    4.0               │                  ┌─────────────────┐
     │   USER   │                            │  PAYMENT             │ ───────────────► │ PAYMENT_ORDERS  │
     │          │  ◄──────────────────────── │  PROCESSING          │  Store Order     │      (D4)       │
     │          │       Payment Status       └──────────────────────┘                  └─────────────────┘
     └──────────┘                                     │
                                                      │ Update Credits
                                                      ▼
                                             ┌─────────────────┐
                                             │   USER_CREDITS  │
                                             │      (D3)       │
                                             └─────────────────┘`}
            </pre>
          </div>
        </div>

        {/* 5th Level */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">5<sup>th</sup> Level - Complete System Flow</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`                                     ┌───────────────────────────────────────────────────────────────┐
                                     │                        HACKSHIELD SYSTEM                      │
                                     │                                                               │
     ┌──────────┐                    │   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
     │          │    Registration    │   │   1.0   │    │   2.0   │    │   3.0   │    │   4.0   │   │
     │          │  ─────────────►    │   │ REGISTER│───►│  LOGIN  │───►│  SCAN   │───►│ PAYMENT │   │
     │          │                    │   └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘   │
     │   USER   │                    │        │              │              │              │        │
     │          │                    │        ▼              ▼              ▼              ▼        │
     │          │  ◄─────────────    │   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐   │
     │          │  System Response   │   │  USERS  │    │ SESSION │    │  LOGS   │    │ ORDERS  │   │
     │          │                    │   │   D1    │    │   D5    │    │   D2    │    │   D4    │   │
     └──────────┘                    │   └─────────┘    └─────────┘    └─────────┘    └─────────┘   │
                                     │                                                               │
                                     └───────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Process Description Table */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">DFD Process Description</h3>
          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">Process</th>
                <th className="border border-black p-2">Process Name</th>
                <th className="border border-black p-2">Input</th>
                <th className="border border-black p-2">Output</th>
                <th className="border border-black p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2 text-center">1.0</td>
                <td className="border border-black p-2">Registration</td>
                <td className="border border-black p-2">User Details</td>
                <td className="border border-black p-2">Auth Token</td>
                <td className="border border-black p-2">New user registration</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">2.0</td>
                <td className="border border-black p-2">Login</td>
                <td className="border border-black p-2">Username/Password</td>
                <td className="border border-black p-2">Session Token</td>
                <td className="border border-black p-2">User authentication</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">3.0</td>
                <td className="border border-black p-2">File Upload & Scan</td>
                <td className="border border-black p-2">File Data</td>
                <td className="border border-black p-2">Scan Results</td>
                <td className="border border-black p-2">AI malware detection</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">4.0</td>
                <td className="border border-black p-2">Payment Processing</td>
                <td className="border border-black p-2">Payment Request</td>
                <td className="border border-black p-2">Payment Status</td>
                <td className="border border-black p-2">Razorpay integration</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Data Store Description Table */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Data Store Description</h3>
          <table className="w-full border-collapse border border-black text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2">Data Store</th>
                <th className="border border-black p-2">Store Name</th>
                <th className="border border-black p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-2 text-center">D1</td>
                <td className="border border-black p-2">USERS</td>
                <td className="border border-black p-2">Stores user authentication data</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">D2</td>
                <td className="border border-black p-2">SCAN_LOGS</td>
                <td className="border border-black p-2">Stores file scan history and results</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">D3</td>
                <td className="border border-black p-2">USER_CREDITS</td>
                <td className="border border-black p-2">Stores user scan credit balance</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">D4</td>
                <td className="border border-black p-2">PAYMENT_ORDERS</td>
                <td className="border border-black p-2">Stores Razorpay payment records</td>
              </tr>
              <tr>
                <td className="border border-black p-2 text-center">D5</td>
                <td className="border border-black p-2">SESSION</td>
                <td className="border border-black p-2">Stores active user sessions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Page 3: Entity Relationship Diagram */}
      <div className="mb-8 print:break-after-page">
        <h2 className="text-xl font-bold mb-6 border-b border-black pb-2">2. Entity Relationship Diagram</h2>
        
        {/* Main ERD */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Main ERD Structure</h3>
          <div className="border border-black p-4 bg-gray-50">
            <pre className="text-xs leading-relaxed overflow-x-auto whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`                                         ┌─────────────────────────────────────┐
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
               └────────────────────────┘      └────────────────────────┘      └────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* Detailed ERD */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Detailed ERD with Attributes</h3>
          <div className="border border-black p-4 bg-gray-50 overflow-x-auto">
            <pre className="text-[10px] leading-relaxed whitespace-pre" style={{ fontFamily: 'Courier New, monospace' }}>
{`                                     ┌─────────────────────────────────────────────┐
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
                                                                                     └──────────────────────────────────┘`}
            </pre>
          </div>
        </div>

        {/* ERD Legend */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Notation Legend</h3>
          <div className="border border-black p-4 bg-gray-50">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="border border-black px-2 py-1 bg-white">TABLE</span>
                <span>= Entity (Database Table)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="border border-black px-2 py-1 bg-white">(PK)</span>
                <span>= Primary Key</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="border border-black px-2 py-1 bg-white">(FK)</span>
                <span>= Foreign Key</span>
              </div>
              <div className="flex items-center gap-2">
                <span>────────</span>
                <span>= Relationship Line</span>
              </div>
              <div className="flex items-center gap-2">
                <span>1 ─── N</span>
                <span>= One-to-Many Relationship</span>
              </div>
              <div className="flex items-center gap-2">
                <span>1 ─── 1</span>
                <span>= One-to-One Relationship</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: Entity Tables */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Entity Description</h3>
        <table className="w-full border-collapse border border-black text-sm mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2">Entity Name</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Primary Key</th>
              <th className="border border-black p-2">Foreign Key</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">auth.users</td>
              <td className="border border-black p-2">Stores user authentication details</td>
              <td className="border border-black p-2">id (UUID)</td>
              <td className="border border-black p-2">-</td>
            </tr>
            <tr>
              <td className="border border-black p-2">user_credits</td>
              <td className="border border-black p-2">Tracks scan credits for users</td>
              <td className="border border-black p-2">id (UUID)</td>
              <td className="border border-black p-2">user_id → auth.users(id)</td>
            </tr>
            <tr>
              <td className="border border-black p-2">user_subscriptions</td>
              <td className="border border-black p-2">Manages subscription plans</td>
              <td className="border border-black p-2">id (UUID)</td>
              <td className="border border-black p-2">user_id → auth.users(id)</td>
            </tr>
            <tr>
              <td className="border border-black p-2">payment_orders</td>
              <td className="border border-black p-2">Records payment transactions</td>
              <td className="border border-black p-2">id (UUID)</td>
              <td className="border border-black p-2">user_id → auth.users(id)</td>
            </tr>
          </tbody>
        </table>

        {/* Attribute Tables */}
        <h3 className="text-lg font-semibold mb-4">Attribute Details</h3>
        
        <h4 className="font-semibold mb-2">auth.users Entity</h4>
        <table className="w-full border-collapse border border-black text-xs mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-1">Attribute</th>
              <th className="border border-black p-1">Data Type</th>
              <th className="border border-black p-1">Constraint</th>
              <th className="border border-black p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-black p-1">id</td><td className="border border-black p-1">UUID</td><td className="border border-black p-1">PRIMARY KEY</td><td className="border border-black p-1">Unique user identifier</td></tr>
            <tr><td className="border border-black p-1">email</td><td className="border border-black p-1">VARCHAR(255)</td><td className="border border-black p-1">NOT NULL, UNIQUE</td><td className="border border-black p-1">User email address</td></tr>
            <tr><td className="border border-black p-1">password</td><td className="border border-black p-1">VARCHAR(255)</td><td className="border border-black p-1">NOT NULL</td><td className="border border-black p-1">Encrypted password</td></tr>
            <tr><td className="border border-black p-1">created_at</td><td className="border border-black p-1">TIMESTAMP</td><td className="border border-black p-1">DEFAULT NOW()</td><td className="border border-black p-1">Account creation time</td></tr>
          </tbody>
        </table>

        <h4 className="font-semibold mb-2">user_credits Entity</h4>
        <table className="w-full border-collapse border border-black text-xs mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-1">Attribute</th>
              <th className="border border-black p-1">Data Type</th>
              <th className="border border-black p-1">Constraint</th>
              <th className="border border-black p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-black p-1">id</td><td className="border border-black p-1">UUID</td><td className="border border-black p-1">PRIMARY KEY</td><td className="border border-black p-1">Unique record identifier</td></tr>
            <tr><td className="border border-black p-1">user_id</td><td className="border border-black p-1">UUID</td><td className="border border-black p-1">FOREIGN KEY</td><td className="border border-black p-1">Reference to auth.users</td></tr>
            <tr><td className="border border-black p-1">scan_credits</td><td className="border border-black p-1">INTEGER</td><td className="border border-black p-1">DEFAULT 0</td><td className="border border-black p-1">Available scan credits</td></tr>
            <tr><td className="border border-black p-1">created_at</td><td className="border border-black p-1">TIMESTAMP</td><td className="border border-black p-1">DEFAULT NOW()</td><td className="border border-black p-1">Record creation time</td></tr>
          </tbody>
        </table>

        <h4 className="font-semibold mb-2">payment_orders Entity</h4>
        <table className="w-full border-collapse border border-black text-xs mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-1">Attribute</th>
              <th className="border border-black p-1">Data Type</th>
              <th className="border border-black p-1">Constraint</th>
              <th className="border border-black p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-black p-1">id</td><td className="border border-black p-1">UUID</td><td className="border border-black p-1">PRIMARY KEY</td><td className="border border-black p-1">Unique record identifier</td></tr>
            <tr><td className="border border-black p-1">user_id</td><td className="border border-black p-1">UUID</td><td className="border border-black p-1">FOREIGN KEY</td><td className="border border-black p-1">Reference to auth.users</td></tr>
            <tr><td className="border border-black p-1">razorpay_order_id</td><td className="border border-black p-1">VARCHAR(255)</td><td className="border border-black p-1">NOT NULL</td><td className="border border-black p-1">Razorpay order reference</td></tr>
            <tr><td className="border border-black p-1">amount</td><td className="border border-black p-1">DECIMAL(10,2)</td><td className="border border-black p-1">NOT NULL</td><td className="border border-black p-1">Payment amount in INR</td></tr>
            <tr><td className="border border-black p-1">payment_type</td><td className="border border-black p-1">VARCHAR(50)</td><td className="border border-black p-1">NOT NULL</td><td className="border border-black p-1">'single_scan' or 'premium'</td></tr>
            <tr><td className="border border-black p-1">status</td><td className="border border-black p-1">VARCHAR(50)</td><td className="border border-black p-1">DEFAULT 'created'</td><td className="border border-black p-1">Payment status</td></tr>
          </tbody>
        </table>

        {/* Relationships */}
        <h3 className="text-lg font-semibold mb-4">Relationships Summary</h3>
        <table className="w-full border-collapse border border-black text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2">Relationship</th>
              <th className="border border-black p-2">Type</th>
              <th className="border border-black p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">auth.users → user_credits</td>
              <td className="border border-black p-2">1:1</td>
              <td className="border border-black p-2">Each user has one credits record</td>
            </tr>
            <tr>
              <td className="border border-black p-2">auth.users → user_subscriptions</td>
              <td className="border border-black p-2">1:1</td>
              <td className="border border-black p-2">Each user has one subscription record</td>
            </tr>
            <tr>
              <td className="border border-black p-2">auth.users → payment_orders</td>
              <td className="border border-black p-2">1:N</td>
              <td className="border border-black p-2">User can have multiple payment orders</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-center border-t-2 border-black pt-4 mt-8 text-sm">
        <p><strong>Project:</strong> HackShield - AI Malware Scanner</p>
        <p><strong>Document Version:</strong> 1.0 | <strong>Last Updated:</strong> December 2024</p>
        <p className="mt-2">Shivaji University, Kolhapur</p>
      </div>

      {/* Print Button - Hidden when printing */}
      <div className="fixed bottom-4 right-4 print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 font-semibold"
        >
          🖨️ Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

export default PrintableDiagrams;
