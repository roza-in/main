import { Calendar, Users, CreditCard, Globe, Megaphone, Gift, BarChart3, Sparkles, type LucideIcon } from "lucide-react";

export interface FeatureDetail {
  slug: string;
  name: string;
  tagline: string;
  fullDesc: string;
  capabilities: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  highlightMetric: string;
  highlightLabel: string;
  iconName: "appointments" | "crm" | "payments" | "website-builder" | "marketing" | "loyalty" | "analytics" | "ai-assistant";
}

export const FEATURE_DETAILS: Record<string, FeatureDetail> = {
  appointments: {
    slug: "appointments",
    name: "Smart Appointments & Scheduling",
    tagline: "Reduce admin workload and eliminate double-bookings with our intelligent calendar system.",
    fullDesc: "Rozx Smart Appointments provides a client-facing booking experience that works on autopilot. Clients see real-time staff availability, choose slots, and pay deposits. Staff receive instant updates on their devices with calendar sync, and automated SMS/WhatsApp alerts keep no-shows under 1%.",
    capabilities: [
      { title: "Intelligent Queue Management", desc: "Allows salons and clinics to easily check in walk-in clients, manage virtual queues, and notify waiting clients via WhatsApp when their provider is ready." },
      { title: "Multi-Staff Schedules", desc: "Visual color-coded grid sheets that help managers schedule shifts, assign client blocks, block breaks, and compute daily provider utilization." },
      { title: "No-Show Prevention Deposits", desc: "Charge partial deposits or full pre-payments at booking for high-value slots, reducing cancellations and securing cash flow." }
    ],
    faqs: [
      { q: "Can my staff view their schedules on their own phones?", a: "Yes. Staff members can be invited with custom role privileges, allowing them to view their personal calendars, block off time, and view client history without accessing general billing reports." },
      { q: "Does the system send automated booking confirmations?", a: "Yes, Rozx automatically dispatches confirmations, rescheduling updates, and automated reminders via email, SMS, and WhatsApp." }
    ],
    highlightMetric: "99%",
    highlightLabel: "Reduction in Booking Friction",
    iconName: "appointments",
  },
  crm: {
    slug: "crm",
    name: "Customer CRM & History",
    tagline: "Build deeper customer relationships and increase repeat bookings with comprehensive client files.",
    fullDesc: "Keep your clients coming back. Every customer profile gathers service logs, purchase receipts, past stylist preferences, allergy notifications, and loyalty metrics. Your staff starts every session with complete client context.",
    capabilities: [
      { title: "Session Notes & Style Logs", desc: "Style, color formulation, and treatment logs are updated after every check-out, ensuring consistent service delivery across visits." },
      { title: "Automated Segment Target", desc: "Group clients by metrics (e.g. VIPs, inactive clients, high-spenders) and target them with personalized loyalty campaigns." },
      { title: "Lifetime Metrics Tracker", desc: "Track average ticket size, visit frequency, and lifetime expenditures per customer to optimize your marketing spend." }
    ],
    faqs: [
      { q: "Can I import my customer data from another CRM?", a: "Yes. We offer free data migration services. Simply send your list in Excel/CSV, or our onboarding team will export it directly from your old software." },
      { q: "Are customer records secure and compliant?", a: "All client records are encrypted, backed up daily, and stored on secure enterprise cloud servers, ensuring compliance and data privacy." }
    ],
    highlightMetric: "35%",
    highlightLabel: "Increase in Customer Lifetime Value",
    iconName: "crm",
  },
  payments: {
    slug: "payments",
    name: "Billing, POS & Invoicing",
    tagline: "Fast, secure billing and instant digital receipts for a seamless checkout experience.",
    fullDesc: "Checkout clients in seconds. Rozx POS integrates with UPI, cards, and digital wallets, automatically calculating applicable taxes (GST), tracking inventory reductions, and issuing digital receipts via WhatsApp and email.",
    capabilities: [
      { title: "Unified Split Payments", desc: "Process payments using multiple methods (e.g., partial cash + remaining on UPI) for a single checkout ticket." },
      { title: "Integrated GST & Invoices", desc: "Automate tax rate calculations, structure GST-compliant invoice templates, and send copies directly to clients." },
      { title: "Daily Close Summaries", desc: "At the end of the day, managers receive automated close reports detailing register cash, online receipts, and card logs." }
    ],
    faqs: [
      { q: "Do you charge extra transaction commissions?", a: "No. Rozx charges flat subscription rates. All card and UPI fees are charged directly by your payment processor (e.g. Stripe, Razorpay) with no markup from us." },
      { q: "Can I use Rozx on my existing desktop or tablet?", a: "Yes. Rozx POS is web-optimized and operates perfectly on iPads, Android tablets, laptops, and desktop computers." }
    ],
    highlightMetric: "0%",
    highlightLabel: "Extra Checkout Commissions",
    iconName: "payments",
  },
  "website-builder": {
    slug: "website-builder",
    name: "Custom Booking Website",
    tagline: "A premium, SEO-optimized booking portal and custom-domain website for your brand.",
    fullDesc: "Ditch basic landing pages. Rozx launches an elegant, custom website that integrates directly with your schedule. Bring your own domain, pick visual layouts, showcase services, and allow clients to schedule appointments directly.",
    capabilities: [
      { title: "Custom Domain Mapping", desc: "Connect your custom web domain name (e.g. yourbrand.com) with automatic CDN caching and SSL certificates." },
      { title: "SEO-Optimized Layouts", desc: "Fast page load times, custom meta titles, structured JSON-LD schemas, and Google-friendly tags to help you rank locally." },
      { title: "Brand Customization", desc: "Upload logos, choose typography scales, adjust color accents, and present your services list in a premium layout." }
    ],
    faqs: [
      { q: "Do you provide hosting and SSL?", a: "Yes. High-speed global hosting and automated SSL certificates are included for all websites, ensuring fast load times and secure browsing." },
      { q: "Can clients book directly from this website?", a: "Yes, the booking flow is natively built-in, so visitors don't have to leave your site to secure their slots." }
    ],
    highlightMetric: "4.8s",
    highlightLabel: "Average Page Load Speed Boost",
    iconName: "website-builder",
  },
  marketing: {
    slug: "marketing",
    name: "Automated Marketing & Campaigns",
    tagline: "Reach your audience with official WhatsApp campaigns, SMS alerts, and targeted emails.",
    fullDesc: "Keep your chairs and appointment slots full. Run win-back campaigns, announce seasonal discounts, send birthday coupons, and request reviews automatically. With official WhatsApp Cloud API support, your messages deliver with maximum engagement.",
    capabilities: [
      { title: "Official WhatsApp Cloud API", desc: "Send verified brand messages via WhatsApp without risking account bans, using rich media and call-to-action buttons." },
      { title: "Win-back Campaigns", desc: "Automatically identify clients who haven't visited in 60 days and trigger a discount voucher to invite them back." },
      { title: "Review Booster Engine", desc: "Send automated feedback prompts 2 hours after checkout, directing satisfied clients to post reviews on Google." }
    ],
    faqs: [
      { q: "Do I need my own WhatsApp API account?", a: "We assist with setting up your Facebook Business Manager and official Meta API credentials so you have direct control over your message volume." },
      { q: "Are SMS and WhatsApp messages included in my plan?", a: "Certain plans include monthly credits, with additional messages charged at cost pricing." }
    ],
    highlightMetric: "82%",
    highlightLabel: "Average WhatsApp Read Rates",
    iconName: "marketing",
  },
  loyalty: {
    slug: "loyalty",
    name: "Loyalty & Memberships",
    tagline: "Turn occasional visitors into lifetime patrons with structured reward programs.",
    fullDesc: "Build brand loyalty. Rozx lets you design point tiers, referral programs, subscription clubs, and digital gift cards. Rewards calculate automatically during POS checkouts and reflect instantly on client profiles.",
    capabilities: [
      { title: "Tiered Points Accumulation", desc: "Set rewards ratios (e.g., earn 1 point for every ₹100 spent) and customize redemption thresholds for future bookings." },
      { title: "Recurring Membership Clubs", desc: "Offer monthly subscription packages (e.g., 2 hair trims per month) with automated recurring credit card billings." },
      { title: "Gift Card Management", desc: "Sell digital gift cards that customers can purchase online, email to friends, and redeem during checkout." }
    ],
    faqs: [
      { q: "How do customers track their points?", a: "Points are displayed on client receipts and can be checked inside the client profile during check-in or booking." },
      { q: "Can I run referral promotions?", a: "Yes, clients can share referral links, earning bonus points when their friends book and complete their first sessions." }
    ],
    highlightMetric: "45%",
    highlightLabel: "Increase in Repeat Visit Frequency",
    iconName: "loyalty",
  },
  analytics: {
    slug: "analytics",
    name: "Business Analytics & Insights",
    tagline: "Detailed visual reports on cash flow, client retention, and staff performance.",
    fullDesc: "Make decisions based on metrics, not guesses. Rozx compiles your appointments, checkouts, and staff shifts into simple, interactive reports. Track key indicators, export tax registries, and forecast weekly sales.",
    capabilities: [
      { title: "Staff Performance & Commission", desc: "Monitor staff booking rates, retail cross-sales, client ratings, and calculate commission payouts instantly." },
      { title: "Retention Rate Analytics", desc: "Understand client loyalty by tracking how many clients return for a second visit within 90 days." },
      { title: "Tax & Financial Export", desc: "Generate GST, POS cash logs, and revenue breakdowns for quick sharing with your accountants." }
    ],
    faqs: [
      { q: "Can I export reports to Excel?", a: "Yes, all data tables, commission sheets, tax summaries, and client lists can be exported as CSV/Excel files." },
      { q: "Can I manage multiple locations in one report?", a: "Yes. Franchise operators can toggle between individual branch reports or view consolidated company metrics." }
    ],
    highlightMetric: "12 hrs",
    highlightLabel: "Saved per Month in Accounting Reports",
    iconName: "analytics",
  },
  "ai-assistant": {
    slug: "ai-assistant",
    name: "Rozx AI Copilot",
    tagline: "An intelligent operations assistant to automate campaigns, scheduling, and metrics.",
    fullDesc: "Meet your digital chief of staff. Rozx AI analyzes booking patterns to suggest optimal schedules, writes custom campaign templates, flags inventory restocks, and responds to natural language queries about your business performance.",
    capabilities: [
      { title: "Auto Campaign Copywriting", desc: "Draft high-converting WhatsApp campaigns and review follow-ups in seconds with our integrated business copy generator." },
      { title: "Inventory Restock Alert", desc: "Predicts when products will run low based on past service rates and sends alerts to restock before you run out." },
      { title: "Natural Language Analytics", desc: "Type queries like 'Which staff member had the highest repeat client rate last month?' and receive instant reports." }
    ],
    faqs: [
      { q: "Is my customer data shared with AI models?", a: "No. All AI calculations are run locally and securely. Client data remains encrypted and is never used to train public models." },
      { q: "Is the AI assistant easy to use?", a: "It is built directly into your dashboard as a simple chat assistant, making it accessible to team members of all technical levels." }
    ],
    highlightMetric: "15%",
    highlightLabel: "Average Efficiency Boost in Operations",
    iconName: "ai-assistant",
  }
};
