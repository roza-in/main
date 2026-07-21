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
  iconName: "appointments" | "crm" | "payments" | "website-builder" | "marketing" | "loyalty" | "analytics";
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
      { title: "Walk-in & Queue Management", desc: "Seamlessly integrate walk-in clients into the live calendar grid without disrupting pre-booked appointments.", tag: "Front Desk POS" },
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
    name: "Customer CRM & Intake Notes",
    tagline: "Build lasting client loyalty with complete visit histories, preferences, and digital intake waivers.",
    fullDesc: "Turn first-time visitors into lifelong regular clients. Rozx CRM centralizes customer profiles, visit records, total lifetime spend, preferred staff, birthday dates, and digital intake forms or SOAP treatment progress notes in one secure workspace.",
    capabilities: [
      { title: "Visit History & Formula Notes", desc: "Record past service details, color formula notes, skin sensitivity records, and client preferences after every visit.", tag: "Service Continuity" },
      { title: "Digital Intake Forms & Waivers", desc: "Deploy custom consent form templates and SOAP notes triggered before or after booking, with digital client signatures.", tag: "Paperless POS" },
      { title: "Customer Spend Tracking", desc: "Track total client lifetime spend, visit frequency, and last visit dates to identify top VIP patrons and re-engage inactive clients.", tag: "VIP Analytics" },
      { title: "Automated Birthday & Anniversary Triggers", desc: "Automatically send personalized greeting messages and special discount vouchers on birthdays and anniversaries.", tag: "Retention Engine" },
      { title: "Client Preference Tagging", desc: "Tag clients with specific preferences (e.g. Preferred Stylist, Quiet Appointment, Allergy Alerts) visible to staff during check-in.", tag: "Personalization" },
      { title: "CSV Import & Export", desc: "Easily import existing client lists from Excel/CSV or export full customer records for accounting and marketing campaigns.", tag: "Data Ownership" },
    ],
    faqs: [
      { q: "Can I import existing customer databases into Rozx?", a: "Yes. You can upload customer CSV files directly through the dashboard or request our onboarding team to assist with data migration." },
      { q: "Are customer intake forms customizable?", a: "Yes. You can create custom fields, checkbox waivers, health questions, and digital signature blocks tailored to your business." },
      { q: "How is client data kept secure?", a: "All client records are isolated by tenant boundaries, protected with role-based access controls, and encrypted in transit and at rest." },
    ],
    highlightMetric: "100%",
    highlightLabel: "Centralized Client Profile",
    iconName: "crm",
    preview: {
      badge: "Customer Profile Context",
      title: "Ananya Sharma (VIP Client)",
      subtitle: "14 Visits • ₹18,400 Lifetime Spend",
      stats: [
        { label: "Total Visits", value: "14 Sessions" },
        { label: "Avg Spend / Visit", value: "₹1,314" },
        { label: "Intake Waiver", value: "Signed ✓" },
      ],
      snippetTitle: "Client Profile & Past Service Notes",
      snippetItems: [
        { title: "Last Visit: Hair Coloring & Spa", meta: "July 12, 2026 • Formula #7B Golden Blonde", status: "Completed", statusColor: "emerald" },
        { title: "Client Preferences", meta: "Prefers Stylist Rahul • Sensitive Scalp (Organics)", status: "Active Tag", statusColor: "indigo" },
        { title: "Digital Consultation Waiver", meta: "Form #SK-892 Signed on iPad POS", status: "Verified", statusColor: "emerald" },
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
    name: "WhatsApp & SMS Campaigns",
    tagline: "Drive repeat visits with official Meta WhatsApp broadcasts and automated SMS campaign alerts.",
    fullDesc: "Keep your appointment schedule consistently full. Deploy broadcast campaigns via official Meta WhatsApp Cloud API and transactional SMS channels to share seasonal packages, holiday offers, and automated review requests.",
    capabilities: [
      { title: "Official Meta WhatsApp Cloud API", desc: "Dispatch official verified WhatsApp template messages with rich media banners and interactive quick-reply buttons.", tag: "Meta Verified" },
      { title: "Targeted Audience Segmentation", desc: "Filter recipient segments by visit history (e.g. Inactive for 60 Days, VIP Members, Last Service Type) for high conversion.", tag: "Smart Targeting" },
      { title: "Automated Review Boosters", desc: "Trigger automated follow-up messages after completed checkouts inviting happy clients to leave Google Business reviews.", tag: "Reputation Engine" },
      { title: "Campaign ROI Tracking", desc: "Track delivered message counts, link click-throughs, and attributed booking revenue for every broadcast campaign.", tag: "Real-Time ROI" },
      { title: "SMS Gateway Fallback", desc: "Ensure message delivery with automatic SMS fallback for clients who do not use WhatsApp.", tag: "High Deliverability" },
      { title: "Consent & Opt-Out Management", desc: "Automatically manage customer opt-in consent and opt-out requests in strict compliance with communications standards.", tag: "Compliance" },
    ],
    faqs: [
      { q: "How does the Meta WhatsApp integration work?", a: "Rozx connects to your official Meta WhatsApp Business Account so broadcasts use your verified business number and approved templates." },
      { q: "Can we track how many bookings came from a WhatsApp campaign?", a: "Yes. Campaign analytics track clicks and measure exact appointment revenue generated from every broadcast." },
      { q: "Are customer opt-outs respected automatically?", a: "Yes. If a client opts out of marketing communications, the platform automatically updates their contact record." },
    ],
    highlightMetric: "Official",
    highlightLabel: "WhatsApp Cloud API Integration",
    iconName: "marketing",
    preview: {
      badge: "WhatsApp Business API",
      title: "Festive Season WhatsApp Campaign",
      subtitle: "Segment: 450 Clients (Inactive 45+ Days)",
      stats: [
        { label: "Messages Sent", value: "450 Delivery" },
        { label: "Open Rate", value: "98.2%" },
        { label: "Bookings Generated", value: "34 Bookings" },
      ],
      snippetTitle: "WhatsApp Template Preview (Meta Approved)",
      snippetItems: [
        { title: "Broadcast Message Header", meta: "✨ Special Festival Spa Offer at Glow Studio!", status: "Approved ✓", statusColor: "emerald" },
        { title: "Interactive CTA Button", meta: "[ Book Special Slot ] -> Instant Web Portal", status: "Live Link", statusColor: "indigo" },
        { title: "Attributed Revenue", meta: "₹42,500 Generated from 34 Client Bookings", status: "+312% ROI", statusColor: "emerald" },
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
};
