export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  workflows: string[];
  featuresList: { title: string; desc: string }[];
  metric: string;
  metricLabel: string;
  iconName: "salon" | "spa" | "barbershop" | "nail-studio" | "makeup-studio" | "wellness-center" | "tattoo-studio" | "clinic";
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  salon: {
    slug: "salon",
    name: "Salons & Parlours",
    tagline: "Streamline booth rentals, stylist schedules, and walk-in queues.",
    description: "Running a busy salon requires coordinating multiple stylists, processing retail products, and keeping appointment chairs filled. Rozx provides a live grid sheet calendar, automated WhatsApp client updates, product inventory tracking, and split-payment checkout POS designed for modern salons.",
    workflows: [
      "Manage stylist commission calculations automatically at checkout.",
      "Enable visual service menus showing stylist tiers (Junior, Senior, Master).",
      "Auto-dispatch SMS color formula records to client CRM profiles."
    ],
    featuresList: [
      { title: "Stylist Tiers & Pricing", desc: "Vary price points dynamically depending on the selected provider's experience level." },
      { title: "Chair & Booth Allocator", desc: "Block equipment and chair bookings automatically to avoid physical booth conflicts." },
      { title: "Product Retail POS", desc: "Cross-sell retail shampoos, hair oils, or serums with automated barcodes during service checkout." }
    ],
    metric: "32%",
    metricLabel: "Average Retail Sales Increase",
    iconName: "salon",
  },
  spa: {
    slug: "spa",
    name: "Day Spas & Retreats",
    tagline: "Manage room capacities, therapist shifts, and membership packages.",
    description: "Create a calm experience for your guests. Rozx manages therapist assignments, locks treatment rooms automatically during bookings, schedules packages (e.g. massage + sauna), and processes recurring membership checkouts.",
    workflows: [
      "Auto-allocate therapist and room inventory simultaneously on booking.",
      "Charge non-refundable deposits for premium wellness sessions.",
      "Activate recurring monthly membership packages with POS credits."
    ],
    featuresList: [
      { title: "Room & Equipment Lock", desc: "Automatically assign massage tables, saunas, or pools to check-outs, preventing double allocations." },
      { title: "Therapist Shift Planner", desc: "Schedule therapist slots, breaks, and vacations with simple drag-and-drop actions." },
      { title: "Package Deals", desc: "Combine multiple services (massage, facials, herbal baths) into single-purchase packages." }
    ],
    metric: "45%",
    metricLabel: "Increase in Recurring Memberships",
    iconName: "spa",
  },
  barbershop: {
    slug: "barbershop",
    name: "Classic Barbershops",
    tagline: "Walk-in queues, digital waitlists, and instant checkouts.",
    description: "Barbershops move fast. Rozx streamlines both online appointment bookings and walk-in queues. Clients check in on a tablet at the door, view estimated wait times, and receive WhatsApp notifications when their barber's chair is ready.",
    workflows: [
      "Support both pre-scheduled sessions and door walk-in check-ins.",
      "Send WhatsApp alerts to clients when they are next in queue.",
      "Run targeted SMS marketing campaigns for hair and beard products."
    ],
    featuresList: [
      { title: "Door Tablet Check-In", desc: "Set up a customer-facing tablet screen at the entry gate for instant walk-in registration." },
      { title: "Live Estimated Waits", desc: "Display waiting queues and times on shop monitors to manage client expectations." },
      { title: "Tip checkout POS", desc: "Offer pre-set tip percentages (10%, 15%, 20%) to client checkout card terminals." }
    ],
    metric: "15 min",
    metricLabel: "Average Check-In Wait Reduction",
    iconName: "barbershop",
  },
  "nail-studio": {
    slug: "nail-studio",
    name: "Nail Studios & Bars",
    tagline: "Manage nail art slots, technician tools, and group packages.",
    description: "Coordinate intricate nail art sessions. Rozx schedules detailed service slots, ensures technician assignments, manages group booking slots for bridal groups, and updates client logs with preferred colors.",
    workflows: [
      "Track lacquer numbers and acrylic models inside customer profiles.",
      "Coordinate multiple technician schedules for group parties.",
      "Distribute review links immediately via SMS following checkout."
    ],
    featuresList: [
      { title: "Group Booking Shell", desc: "Allow clients to book slots for groups, assigning separate technicians to each visitor." },
      { title: "Technician Commissions", desc: "Compute commission splits based on service levels or upsold charms." },
      { title: "Material Inventories", desc: "Track levels of base coats, colors, gel lights, and files, with automated restock alerts." }
    ],
    metric: "28%",
    metricLabel: "Growth in Multi-Client Bookings",
    iconName: "nail-studio",
  },
  "makeup-studio": {
    slug: "makeup-studio",
    name: "Makeup & Bridal Studios",
    tagline: "Coordinate off-site bridal bookings and advanced cosmetics.",
    description: "Manage high-value event bookings. Rozx handles off-site travel coordinates, computes travel fees, processes milestone contract deposits, and organizes team schedules for event mornings.",
    workflows: [
      "Generate custom contract files for bridal bookings.",
      "Receive partial milestone payments leading up to the main event date.",
      "Add off-site travel fees to billing invoices automatically."
    ],
    featuresList: [
      { title: "Milestone POS Invoices", desc: "Split large contracts into automated payment blocks (booking fee, trial fee, final payment)." },
      { title: "Travel Coordinates Map", desc: "Record off-site event addresses, coordinates, and times on staff calendars." },
      { title: "Visual Style Portfolios", desc: "Upload trial pictures and product lists directly to the client CRM file." }
    ],
    metric: "98%",
    metricLabel: "On-Time Event Completion Rates",
    iconName: "makeup-studio",
  },
  "wellness-center": {
    slug: "wellness-center",
    name: "Wellness & Therapy Centers",
    tagline: "Support patient consultations, secure records, and packages.",
    description: "For holistic therapy, chiropractic, or massage clinics. Rozx offers consultation calendars, secure client histories, class schedules, and automated invoice records.",
    workflows: [
      "Manage client session packages with trackable usage balances.",
      "Ensure secure history logs containing intake files.",
      "Distribute custom reminder details for session preparation."
    ],
    featuresList: [
      { title: "Session Balance POS", desc: "Sell bundles of 10 therapy sessions and decrement remaining balances automatically at checkout." },
      { title: "Secure History Files", desc: "Document client progress, medical disclaimers, and intake files with security encryption." },
      { title: "Class Schedules", desc: "Coordinate group sessions or workshops, allowing multiple clients to book slots." }
    ],
    metric: "40%",
    metricLabel: "Reduction in No-Shows with Reminders",
    iconName: "wellness-center",
  },
  "tattoo-studio": {
    slug: "tattoo-studio",
    name: "Tattoo & Art Studios",
    tagline: "Organize custom sketches, artist sessions, and consent forms.",
    description: "Tattooing requires detailed consultation and consent. Rozx compiles consultation requests, schedules artist time blocks, links sketches to client records, and handles digital waiver forms.",
    workflows: [
      "Capture digital consent waivers and store them inside client profiles.",
      "Book artist consultation sessions and collect sketch deposits.",
      "Attach image files of custom artwork to booking records."
    ],
    featuresList: [
      { title: "Digital Consent Waivers", desc: "Have clients sign disclaimers and consent forms directly on an iPad at checkout." },
      { title: "Sketch Deposits POS", desc: "Collect custom sketch fees that can be adjusted on final pricing totals." },
      { title: "Artist Calendars", desc: "Configure custom artist hours, commission structures, and bench allocations." }
    ],
    metric: "85%",
    metricLabel: "Time Saved on Waiver Auditing",
    iconName: "tattoo-studio",
  },
  clinic: {
    slug: "clinic",
    name: "Aesthetic & Medical Clinics",
    tagline: "Secure client records, doctor schedules, and treatment billing.",
    description: "Manage medical aesthetics, skin consultations, and dental bookings. Rozx ensures secure health records, helps schedule medical staff, supports package billing, and generates tax-compliant receipt invoices.",
    workflows: [
      "Document aesthetic treatment history and clinical consent records.",
      "Schedule doctor consultations and room assignments simultaneously.",
      "Manage medical retail inventory and skincare prescriptions."
    ],
    featuresList: [
      { title: "Doctor Scheduling", desc: "Coordinate specialized medical practitioners with standard client appointments." },
      { title: "Clinical Records CRM", desc: "Document treatment parameters, settings, and allergy files with security protection." },
      { title: "Skincare POS Billing", desc: "Sell clinical serums and prescription products directly from the check-out menu." }
    ],
    metric: "50%",
    metricLabel: "Efficiency Gains in Record Retrieval",
    iconName: "clinic",
  }
};
