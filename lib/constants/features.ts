export interface Capability {
  title: string;
  desc: string;
  tag?: string;
}

export interface FeaturePreviewData {
  badge: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  snippetTitle: string;
  snippetItems: { title: string; meta: string; status?: string; statusColor?: string }[];
}

export interface FeatureDetail {
  slug: string;
  name: string;
  tagline: string;
  fullDesc: string;
  capabilities: Capability[];
  faqs: { q: string; a: string }[];
  highlightMetric: string;
  highlightLabel: string;
  iconName: "appointments" | "crm" | "payments" | "website-builder" | "marketing" | "loyalty" | "analytics" | "inventory";
  preview: FeaturePreviewData;
}

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  appointments: {
    slug: "appointments",
    name: "Smart Appointments & Scheduling",
    tagline: "Eliminate double-bookings, automate staff buffer times, and allow clients to book online 24/7.",
    fullDesc: "Rozx Smart Appointments provides an automated calendar and scheduling engine built specifically for Indian salons, spas, clinics, and studios. Manage multi-staff shifts, room allocations, break slots, and buffer times effortlessly while giving clients a smooth 24/7 online booking experience.",
    capabilities: [
      { title: "Real-Time Availability Engine", desc: "Calculates staff working shifts, break times, existing bookings, and custom buffers to present exact available slots to clients.", tag: "Zero Conflicts" },
      { title: "Multi-Staff & Shift Roster", desc: "Visual color-coded grid sheet calendar helping branch managers schedule staff shifts, assign client blocks, and track working hours.", tag: "Multi-Branch" },
      { title: "Resource & Room Allocation", desc: "Assign specific treatment rooms, styling chairs, or specialized equipment to services to prevent physical resource double-allocations.", tag: "Smart Routing" },
      { title: "Automated Buffer Times", desc: "Set automatic cleanup or prep buffers (5 to 30 mins) between appointments so staff never feel rushed.", tag: "Automation" },
      { title: "Walk-in & Instant Booking", desc: "Add walk-in clients directly into the live calendar as instant appointments without disrupting pre-booked slots.", tag: "Front Desk" },
      { title: "Automated WhatsApp Alerts", desc: "Send automated booking confirmations, 24-hour reminders, and instant rescheduling alerts via official WhatsApp.", tag: "Instant Notifications" },
    ],
    faqs: [
      { q: "Can my staff view their schedules on their own mobile devices?", a: "Yes. Staff members can log into the Rozx dashboard with role-based permissions, viewing their personal calendars and assigned client check-ins on mobile or tablet." },
      { q: "How does the system prevent double-bookings?", a: "The calendar engine checks staff shift availability, room allocations, and active booking slots in real time. If a slot is booked online or at the desk, it is immediately locked." },
      { q: "Can we set custom buffer times between specific services?", a: "Yes. You can define buffer durations per service (e.g. 15 minutes for sanitization after hair coloring or skin treatments)." },
    ],
    highlightMetric: "0 Conflict",
    highlightLabel: "Automated Calendar Engine",
    iconName: "appointments",
    preview: {
      badge: "Real-Time Scheduling Grid",
      title: "Today's Appointment Roster",
      subtitle: "Live calendar sync across mobile and desk POS",
      stats: [
        { label: "Bookings Today", value: "28 Slots" },
        { label: "Calendar Conflict Rate", value: "0.0%" },
        { label: "Avg Booking Time", value: "45 Seconds" },
      ],
      snippetTitle: "Live Calendar Grid (Branch: South Delhi Outlet)",
      snippetItems: [
        { title: "Hair Styling & Spa Cut", meta: "10:00 AM – 11:00 AM • Stylist: Rahul M.", status: "Confirmed", statusColor: "emerald" },
        { title: "Sanitization & Prep Buffer", meta: "11:00 AM – 11:15 AM • Auto Buffer", status: "Buffer Lock", statusColor: "slate" },
        { title: "Keratin Treatment (Room 2)", meta: "11:30 AM – 01:30 PM • Stylist: Neha K.", status: "In Progress", statusColor: "amber" },
      ],
    },
  },

  crm: {
    slug: "crm",
    name: "Customer CRM & Rebooking Tools",
    tagline: "Build lasting client loyalty with complete visit histories, preferences, and smart rebooking suggestions.",
    fullDesc: "Turn first-time visitors into lifelong regular clients. Rozx CRM centralizes customer profiles, visit records, total lifetime spend, preferred staff, and smart rebooking candidate suggestions in one secure workspace.",
    capabilities: [
      { title: "Smart Rebooking Candidate Detection", desc: "Instantly see up to 5 regular clients who haven't visited in 30+ days, with 1-click prefilled WhatsApp messaging to invite them back.", tag: "Rebooking Tool" },
      { title: "Visit History & Formula Notes", desc: "Record past service details, color formula notes, skin sensitivity records, and client preferences after every visit.", tag: "Service Continuity" },
      { title: "Customer Spend Tracking", desc: "Track total client lifetime spend, visit frequency, and last visit dates to identify top VIP patrons and re-engage inactive clients.", tag: "VIP Analytics" },
      { title: "Consent & WhatsApp Preference Control", desc: "Respect customer communication preferences automatically by excluding clients who have opted out of WhatsApp marketing.", tag: "Compliance" },
      { title: "Client Preference Tagging", desc: "Tag clients with specific preferences (e.g. Preferred Stylist, Quiet Appointment, Allergy Alerts) visible to staff during check-in.", tag: "Personalization" },
      { title: "CSV Import & Export", desc: "Easily import existing client lists from Excel/CSV or export full customer records for accounting and marketing campaigns.", tag: "Data Ownership" },
    ],
    faqs: [
      { q: "How does the Customer Rebooking feature work?", a: "Rozx identifies clients who have at least one completed visit but haven't returned in 30+ days (and don't have an active future appointment). It prepares a prefilled WhatsApp message with your booking link so you can reach out in one click." },
      { q: "Can I import existing customer databases into Rozx?", a: "Yes. You can upload customer CSV files directly through the dashboard or request our onboarding team to assist with data migration." },
      { q: "How is client data kept secure?", a: "All client records are isolated by tenant boundaries, protected with role-based access controls, and encrypted in transit and at rest." },
    ],
    highlightMetric: "100%",
    highlightLabel: "Centralized Client Profile",
    iconName: "crm",
    preview: {
      badge: "Customer CRM & Rebooking",
      title: "Ananya Sharma (VIP Client)",
      subtitle: "14 Visits • ₹18,400 Lifetime Spend",
      stats: [
        { label: "Total Visits", value: "14 Sessions" },
        { label: "Avg Spend / Visit", value: "₹1,314" },
        { label: "Last Visit", value: "37 Days Ago" },
      ],
      snippetTitle: "Customers to Reconnect With",
      snippetItems: [
        { title: "Ananya Sharma — Hair Spa & Trim", meta: "Last visited 37 days ago • No future booking", status: "Message on WA", statusColor: "emerald" },
        { title: "Priya Patel — Keratin Treatment", meta: "Last visited 42 days ago • Preferred Stylist: Rahul", status: "Message on WA", statusColor: "emerald" },
        { title: "Formula #7B Golden Blonde", meta: "Saved service formula & allergy notes", status: "Active Tag", statusColor: "indigo" },
      ],
    },
  },

  payments: {
    slug: "payments",
    name: "POS, Invoicing & GST Billing",
    tagline: "Fast desktop checkout, GST-compliant thermal printing, and zero-commission payment collection.",
    fullDesc: "Process checkouts in seconds and maintain audit-proof financial records. Rozx POS handles cash, card, and UPI payments via Razorpay integration, generating compliant GST invoices in standard A4 or 80mm/58mm thermal print formats.",
    capabilities: [
      { title: "GST-Compliant Invoicing", desc: "Automates CGST/SGST calculations, SAC code itemization, sequential invoice numbering, and merchant GSTIN records.", tag: "Audit-Ready" },
      { title: "Thermal & A4 Print Formats", desc: "Generate clean A4 PDF invoices or print directly to 80mm and 58mm POS thermal receipt printers with one click.", tag: "POS Hardware" },
      { title: "Razorpay Gateway Integration", desc: "Accept online booking prepayments and instant QR checkouts directly into your Razorpay business account.", tag: "0% Rozx Commission" },
      { title: "Multi-Payment Mode Logs", desc: "Record split payments combining cash, UPI, card terminals, and customer gift voucher balances in a single transaction.", tag: "Split Billing" },
      { title: "Staff Commission Tracking", desc: "Automatically calculate staff commission percentages on service revenue and product sales per checkout ticket.", tag: "Payroll POS" },
      { title: "Daily Cash Register Closing", desc: "Perform end-of-day register reconciliation with cash drawer tallying, digital sales summaries, and shift reports.", tag: "Financial Control" },
    ],
    faqs: [
      { q: "Does Rozx charge commissions on booking payments?", a: "No. Rozx operates on fixed subscription plans with 0% booking commission markup. Transaction fees are charged directly by your payment gateway (e.g. Razorpay)." },
      { q: "Can I use thermal receipt printers with Rozx?", a: "Yes. Rozx POS supports standard 80mm and 58mm USB/Bluetooth thermal printers as well as standard A4 printers." },
      { q: "Does the system handle GST tax rates automatically?", a: "Yes. You can assign GST tax rates (e.g. 18% or 5%) to specific service categories or retail products for automatic invoice calculation." },
    ],
    highlightMetric: "0%",
    highlightLabel: "Rozx Gateway Markup Fees",
    iconName: "payments",
    preview: {
      badge: "GST Checkout & POS Terminal",
      title: "Invoice #INV-2026-0892",
      subtitle: "Customer: Priya Verma • Payment: UPI (Razorpay)",
      stats: [
        { label: "Subtotal", value: "₹2,500.00" },
        { label: "GST (18%)", value: "₹450.00" },
        { label: "Grand Total", value: "₹2,950.00" },
      ],
      snippetTitle: "Thermal Receipt Preview (80mm Format)",
      snippetItems: [
        { title: "Hair Spa & Scalp Therapy", meta: "1 x ₹1,800 • SAC 999721", status: "GST 18%", statusColor: "indigo" },
        { title: "Argan Oil Hair Serum (100ml)", meta: "1 x ₹700 • HSN 330590", status: "GST 18%", statusColor: "indigo" },
        { title: "Payment Receipt Verified", meta: "Razorpay Transaction ID #rzp_tx_8892", status: "Paid ✓", statusColor: "emerald" },
      ],
    },
  },

  "website-builder": {
    slug: "website-builder",
    name: "Custom Website Builder",
    tagline: "A dedicated branded booking website with custom domain support and instant publishing.",
    fullDesc: "Give your business a high-converting web presence. Rozx includes a complete website builder with customizable themes, service catalog pages, custom domain mapping with free SSL certificates, and direct calendar integration.",
    capabilities: [
      { title: "Custom Domain Mapping", desc: "Connect your custom domain (e.g. www.yourbrand.com) with automated DNS check and free SSL certificate provisioning.", tag: "Custom Branding" },
      { title: "Theme & Layout Customization", desc: "Configure color palettes, typography, hero banners, and button styles tailored to your brand identity.", tag: "No-Code Builder" },
      { title: "Direct Booking Integration", desc: "Your website connects directly to your live service catalog and calendar grid, allowing instant online client bookings.", tag: "24/7 Conversions" },
      { title: "Mobile-First Responsive Design", desc: "Optimized for seamless performance across iPhones, Android devices, tablets, and desktop browsers.", tag: "Mobile Optimized" },
      { title: "Live Version Publishing", desc: "Draft edits, preview layout updates, and publish changes to your live site with single-click publishing.", tag: "Instant Deploy" },
      { title: "Built-In SEO Optimization", desc: "Automatically generates meta titles, open-graph image previews, XML sitemaps, and Schema markup for Google local search.", tag: "Local SEO" },
    ],
    faqs: [
      { q: "Is hosting and SSL included with the website builder?", a: "Yes. High-speed hosting, subdomain availability, and automated SSL security certificates are included with your Rozx plan." },
      { q: "Can I connect an existing domain I already own?", a: "Yes. You can map any custom domain purchased from GoDaddy, Namecheap, Google Domains, or Hostinger in just a few clicks." },
      { q: "Do updates on the website update booking availability immediately?", a: "Yes. Service price changes, new offerings, or staff roster updates immediately reflect on your public booking site." },
    ],
    highlightMetric: "100%",
    highlightLabel: "Custom Domain & SSL Included",
    iconName: "website-builder",
    preview: {
      badge: "Branded Web Portal",
      title: "www.luminaryspa.in",
      subtitle: "Custom domain connected • Live SSL Provisioned",
      stats: [
        { label: "SSL Status", value: "Active 🔒" },
        { label: "Page Load Speed", value: "0.8 Seconds" },
        { label: "Mobile Score", value: "98/100" },
      ],
      snippetTitle: "Live Site Configuration Status",
      snippetItems: [
        { title: "Custom Domain Mapping", meta: "www.luminaryspa.in -> Rozx Cloud Node", status: "Connected ✓", statusColor: "emerald" },
        { title: "Online Booking Portal", meta: "Direct sync with staff calendar grid", status: "Live", statusColor: "emerald" },
        { title: "Theme Customization", meta: "Custom Slate & Emerald Theme Tokens Applied", status: "Published", statusColor: "indigo" },
      ],
    },
  },

  marketing: {
    slug: "marketing",
    name: "WhatsApp Client Communications",
    tagline: "Keep your appointment schedule full with automated booking notifications and 1-click WhatsApp rebooking links.",
    fullDesc: "Stay connected with your clients. Send automated booking confirmations, 24-hour appointment reminders, and open prefilled WhatsApp conversations with lapsed clients directly from your dashboard.",
    capabilities: [
      { title: "Automated Booking Confirmations", desc: "Instantly notify clients via WhatsApp when an appointment is booked online or at the front desk.", tag: "Instant Alerts" },
      { title: "1-Click WhatsApp Rebooking", desc: "Reach out to lapsed customers who haven't visited in 30+ days with prefilled WhatsApp messages containing your booking link.", tag: "Client Retention" },
      { title: "24-Hour Appointment Reminders", desc: "Reduce no-shows with timely automated reminder notifications before scheduled appointments.", tag: "Zero No-Shows" },
      { title: "SMS Gateway Fallback", desc: "Ensure message delivery with automatic SMS fallback for clients who do not use WhatsApp.", tag: "High Deliverability" },
      { title: "Consent & Opt-Out Management", desc: "Automatically respect customer WhatsApp marketing consent preferences and opt-out records.", tag: "Compliance" },
    ],
    faqs: [
      { q: "How do WhatsApp rebooking messages work?", a: "Rozx identifies customers due for a revisit and prepares a WhatsApp chat with a personalized message and your public booking URL. You simply review and click to open WhatsApp." },
      { q: "Does Rozx send automated promotional messages without my approval?", a: "No. All promotional and rebooking outreach is merchant-initiated to ensure full control over customer relationships." },
      { q: "Are customer opt-outs respected automatically?", a: "Yes. If a client opts out of marketing communications, Rozx excludes them from rebooking suggestions automatically." },
    ],
    highlightMetric: "Direct",
    highlightLabel: "WhatsApp Client Connectivity",
    iconName: "marketing",
    preview: {
      badge: "WhatsApp Client Outreach",
      title: "Rebook Candidate Outreach",
      subtitle: "Target: Customers lapsed > 30 Days",
      stats: [
        { label: "WhatsApp Link", value: "Prefilled 1-Click" },
        { label: "Booking Commission", value: "0%" },
        { label: "Opt-Out Protection", value: "Active ✓" },
      ],
      snippetTitle: "Prefilled WhatsApp Message Preview",
      snippetItems: [
        { title: "Personalized Greeting", meta: "Hi Ananya, it's been a while since your last visit...", status: "Ready to Send", statusColor: "emerald" },
        { title: "Direct Booking Link", meta: "app.rozx.in/booking/groom-studio", status: "Live Link", statusColor: "indigo" },
        { title: "Consent Status", meta: "MARKETING_WHATSAPP granted", status: "Verified ✓", statusColor: "emerald" },
      ],
    },
  },

  loyalty: {
    slug: "loyalty",
    name: "Memberships & Service Packages",
    tagline: "Build predictable recurring revenue with monthly memberships and prepaid session bundles.",
    fullDesc: "Transform occasional visitors into committed recurring subscribers. Rozx enables service businesses to launch monthly membership tiers and multi-session prepaid packages that clients purchase and redeem effortlessly at checkout.",
    capabilities: [
      { title: "Recurring Membership Tiers", desc: "Structure monthly or annual membership plans with defined service allowances, discount perks, and recurring renewal cycles.", tag: "Predictable Income" },
      { title: "Prepaid Session Bundles", desc: "Sell multi-session package bundles (e.g. 5 Hair Trims or 3 Skin Therapy Sessions) at package pricing paid up front.", tag: "Upfront Cashflow" },
      { title: "POS Automatic Redemption", desc: "Active customer memberships and package session balances automatically reflect during POS checkout ticket creation.", tag: "One-Click POS" },
      { title: "Expiration & Validity Controls", desc: "Set custom validity terms (e.g. valid for 90 days) and automated reminders before unused sessions expire.", tag: "Session Management" },
      { title: "Member Discount Rules", desc: "Apply automatic percentage or flat discounts on retail products and add-on services for active plan members.", tag: "Automated Perks" },
      { title: "Member Usage Reports", desc: "Track total active members, monthly recurring revenue (MRR), package redemptions, and unredeemed liability balances.", tag: "Financial Clarity" },
    ],
    faqs: [
      { q: "How are package sessions redeemed at checkout?", a: "When a customer visits, the POS ticket automatically detects their active package balance. Front desk staff simply select 'Redeem Package Session'." },
      { q: "Can we set package expiration dates?", a: "Yes. You can define package validity periods (e.g. 30 days, 60 days, or 1 year) with automated expiration notifications." },
      { q: "Can members bring friends using their package sessions?", a: "You can configure package rules to allow or restrict session sharing based on your business policy." },
    ],
    highlightMetric: "Prepaid",
    highlightLabel: "Recurring Revenue Models",
    iconName: "loyalty",
    preview: {
      badge: "Recurring Revenue Hub",
      title: "Gold Wellness Membership",
      subtitle: "Customer: Vikram Singh • Plan: ₹1,999/mo Tier",
      stats: [
        { label: "Active Members", value: "128 Subscribers" },
        { label: "Package Balances", value: "3/5 Remaining" },
        { label: "Renewal Date", value: "Aug 01, 2026" },
      ],
      snippetTitle: "Customer Package Balance (POS Check)",
      snippetItems: [
        { title: "5-Session Haircut & Styling Pass", meta: "3 Sessions Remaining (Exp: Sept 30, 2026)", status: "Active Balance", statusColor: "emerald" },
        { title: "Member Perk: 10% Off Retail Products", meta: "Auto-applied at checkout for active Gold members", status: "Rule Active", statusColor: "indigo" },
        { title: "Last Session Redeemed", meta: "July 15, 2026 • Ticket #INV-0842", status: "Redeemed ✓", statusColor: "slate" },
      ],
    },
  },

  analytics: {
    slug: "analytics",
    name: "Analytics & Business Reporting",
    tagline: "Clear operational dashboards for business owners, branch managers, and reception staff.",
    fullDesc: "Make informed business decisions with role-based performance dashboards. Monitor daily revenue, sales trends, staff commission logs, popular service metrics, and export tax summaries for accounting.",
    capabilities: [
      { title: "Role-Based Dashboards", desc: "Dedicated metrics views tailored for Business Owners, Branch Managers, Front Desk Reception, and Service Professionals.", tag: "Role Scoped" },
      { title: "Staff Utilization & Commission", desc: "Track individual staff booking utilization percentages, ticket totals, and automated commission calculations.", tag: "Staff Insights" },
      { title: "Financial & Tax Data Exports", desc: "Export billing registers, tax breakdowns (CGST/SGST), and customer transaction logs to CSV, Excel, or PDF.", tag: "One-Click Export" },
      { title: "Multi-Branch Comparison", desc: "Compare appointment volume, average ticket size, and total revenue across multiple business branch locations.", tag: "Multi-Outlet" },
      { title: "Service Revenue Breakdown", desc: "Analyze top-performing services, peak booking hours, and retail product sales trends to optimize pricing.", tag: "Service Matrix" },
      { title: "Real-Time Sales Overview", desc: "Live dashboard monitoring daily checkout totals, cash drawer balances, and pending online booking prepayments.", tag: "Live Telemetry" },
    ],
    faqs: [
      { q: "Can I export data for accounting software like Tally or Zoho Books?", a: "Yes. All sales ledgers, GST tax reports, and transaction logs export directly to CSV or Excel for accounting imports." },
      { q: "Can staff members see total business revenue?", a: "No. Role-based access controls ensure staff members see only their personal schedule and performance metrics, keeping business finances private." },
      { q: "How frequently does analytics data update?", a: "Analytics update in real time as checkouts and online bookings are processed across your workspace." },
    ],
    highlightMetric: "Role-Based",
    highlightLabel: "Operational Telemetry",
    iconName: "analytics",
    preview: {
      badge: "Real-Time Business Telemetry",
      title: "Today's Performance Dashboard",
      subtitle: "Branch: All Outlets Combined • Date: July 21, 2026",
      stats: [
        { label: "Today's Revenue", value: "₹24,850.00" },
        { label: "Staff Utilization", value: "88.4%" },
        { label: "GST Collected", value: "₹3,789.00" },
      ],
      snippetTitle: "Executive Telemetry & Financial Logs",
      snippetItems: [
        { title: "Daily Sales Register", meta: "32 Tickets Processed (Cash: ₹8.2k • UPI: ₹16.6k)", status: "Reconciled ✓", statusColor: "emerald" },
        { title: "Staff Revenue Matrix", meta: "Rahul M: ₹9.4k • Neha K: ₹8.8k • Priya S: ₹6.6k", status: "Updated", statusColor: "indigo" },
        { title: "Accounting Export Package", meta: "Monthly GST & Sales Register ready for download", status: "Download CSV", statusColor: "emerald" },
      ],
    },
  },
  inventory: {
    slug: "inventory",
    name: "Inventory & Retail POS",
    tagline: "Track product stock, scan barcodes, auto-calculate HSN/GST rates, and sell retail products effortlessly.",
    fullDesc: "Rozx Inventory & Retail POS gives salons, spas, and clinics complete control over retail product stock, consumption tracking, barcode scanning, and multi-category management. Audit stock movements (IN/OUT/ADJUST), set low-stock reorder thresholds, and issue GST-compliant retail invoices in seconds.",
    capabilities: [
      { title: "Barcode Scanner Integration", desc: "Scan product barcodes directly at front desk POS for instant checkout and rapid stock lookup.", tag: "Instant POS" },
      { title: "Stock Audit Logs (IN/OUT/ADJUST)", desc: "Maintain strict audit trails for stock additions, professional consumption, damage write-offs, and sale deductions.", tag: "Full Audit Trail" },
      { title: "HSN & Custom GST Rates", desc: "Assign 5%, 12%, 18%, or 28% GST rates with HSN code categorization for 100% tax compliance.", tag: "GST Compliant" },
      { title: "Low-Stock Reorder Alerts", desc: "Automated alerts when product quantities drop below reorder thresholds so you never run out of inventory.", tag: "Automated Alerts" },
      { title: "Retail Product POS Checkout", desc: "Combine client service appointments and retail product sales into a single itemized GST invoice.", tag: "Unified Billing" },
      { title: "Category & Brand Hierarchy", desc: "Organize inventory by product categories, suppliers, batch numbers, and expiry dates.", tag: "Multi-Brand" },
    ],
    faqs: [
      { q: "Can we sell retail products and services on the same invoice?", a: "Yes. Rozx allows front desk staff to add retail products and salon/spa services into a single itemized invoice with automatic HSN/SAC GST splits." },
      { q: "Does the system support handheld barcode scanners?", a: "Yes. Rozx works seamlessly with standard USB or Bluetooth handheld barcode scanners." },
      { q: "How are stock adjustments tracked for internal salon consumption?", a: "Staff can log product consumption (e.g. shampoo or hair color used during a treatment) as an internal usage log, automatically deducting stock and recording the responsible staff member." },
    ],
    highlightMetric: "Real-Time",
    highlightLabel: "Stock Audit & POS",
    iconName: "inventory",
    preview: {
      badge: "Real-Time Stock & Barcode POS",
      title: "Inventory Control & Audit Register",
      subtitle: "Branch: Central Outlet • Live Product Status",
      stats: [
        { label: "Products Tracked", value: "142 Items" },
        { label: "Low-Stock Alerts", value: "3 Items" },
        { label: "GST Tax Rate", value: "18% HSN 3305" },
      ],
      snippetTitle: "Recent Stock Movement & Retail Register",
      snippetItems: [
        { title: "L'Oréal Professionnel Hair Spa 500ml", meta: "Barcode: 8901234567890 • Quantity: 24 Units (Min: 5)", status: "In Stock ✓", statusColor: "emerald" },
        { title: "O3+ Radiant Oxygen Facial Kit", meta: "Stock Audit LOG-IN: +10 Units received from Distributor", status: "Stock Added", statusColor: "indigo" },
        { title: "Schwarzkopf Hair Color Shade 4.0", meta: "Quantity: 2 Units remaining (Reorder Alert Triggered)", status: "Reorder Low", statusColor: "indigo" },
      ],
    },
  },
};
