export interface IndustryPreviewData {
  badge: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  snippetTitle: string;
  snippetItems: { title: string; meta: string; status?: string; statusColor?: string }[];
}

export interface IndustryDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  workflows: string[];
  featuresList: { title: string; desc: string }[];
  metric: string;
  metricLabel: string;
  iconName:
    | "salon"
    | "spa"
    | "barbershop"
    | "nail-studio"
    | "makeup-studio"
    | "wellness-center"
    | "tattoo-studio"
    | "clinic"
    | "consulting"
    | "coaching-training"
    | "photography-creative"
    | "pet-services"
    | "auto-services"
    | "repair-service"
    | "classes-events";
  preview: IndustryPreviewData;
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  salon: {
    slug: "salon",
    name: "Salons & Parlours",
    tagline: "Manage stylist rosters, split-time color processing, and instant walk-in appointments.",
    description: "Running a busy hair or beauty salon requires coordinating multiple stylists, split-time color processing, and keeping chairs filled. Rozx provides a live Multi-Staff Calendar, instant walk-in booking, split-time dye-setting windows, and GST thermal billing.",
    workflows: [
      "Track stylist shift schedules, break slots, and multi-professional calendar columns.",
      "Schedule split-time services with idle dye-processing windows for double-booking efficiency.",
      "Add walk-in clients instantly into the live calendar with automated WhatsApp confirmations."
    ],
    featuresList: [
      { title: "Instant Walk-in Booking", desc: "Add walk-in clients directly to available calendar slots with one tap from the reception dashboard." },
      { title: "Split-Time Hair Processing", desc: "Configure dye-setting idle windows so stylists can accept short appointments during processing times." },
      { title: "GST POS & Thermal Billing", desc: "Print 80mm/58mm thermal receipts or send A4 PDF invoices with itemized GST." }
    ],
    metric: "Live Calendar",
    metricLabel: "Multi-Staff & Split-Time POS",
    iconName: "salon",
    preview: {
      badge: "Salon Calendar & POS Grid",
      title: "Glow Hair Salon (Main Outlet)",
      subtitle: "8 Stylists On Duty • Live Calendar Active",
      stats: [
        { label: "Bookings Today", value: "24 Slots" },
        { label: "Walk-ins Today", value: "6 Added" },
        { label: "GST Thermal POS", value: "Ready ✓" }
      ],
      snippetTitle: "Live Salon Schedule & Processing Log",
      snippetItems: [
        { title: "Global Hair Color & Highlights", meta: "Stylist: Neha K. • 45m Processing Idle Window Active", status: "Idle Dye", statusColor: "indigo" },
        { title: "Walk-in → Barber Alex", meta: "Instant appointment created at 2:15 PM", status: "Now Serving", statusColor: "emerald" },
        { title: "Thermal Receipt #INV-0892", meta: "₹2,850.00 • GST 18% Included", status: "Paid ✓", statusColor: "emerald" }
      ]
    }
  },
  spa: {
    slug: "spa",
    name: "Day Spas & Wellness Retreats",
    tagline: "Coordinate treatment rooms, therapist assignments, and spa membership packages.",
    description: "Create a serene experience for your guests. Rozx manages therapist schedules, locks treatment rooms during bookings, handles prepaid spa packages, and processes recurring membership tiers.",
    workflows: [
      "Lock treatment rooms and therapist schedules simultaneously upon client booking.",
      "Sell multi-session spa bundles with automated POS redemption tracking.",
      "Process monthly membership subscriptions for regular guests."
    ],
    featuresList: [
      { title: "Room & Station Locking", desc: "Automatically assign massage tables or specialized rooms to prevent physical double-allocations." },
      { title: "Therapist Availability Engine", desc: "Schedule therapist working hours, break times, and gender preferences seamlessly." },
      { title: "Prepaid Spa Packages", desc: "Combine multiple services into prepaid bundles with tracked session balances." }
    ],
    metric: "Resource Lock",
    metricLabel: "Therapist & Room Assignment",
    iconName: "spa",
    preview: {
      badge: "Spa Resource Control",
      title: "Aura Luxury Spa & Wellness",
      subtitle: "6 Treatment Rooms • 12 Therapists Roster",
      stats: [
        { label: "Room Lock Rate", value: "100%" },
        { label: "Active Members", value: "64 Clients" },
        { label: "Session Balance", value: "Tracked ✓" }
      ],
      snippetTitle: "Live Spa Session Dispatch",
      snippetItems: [
        { title: "Deep Tissue Therapy (Room 3)", meta: "Therapist: Maya S. • 60 Mins", status: "Occupied", statusColor: "amber" },
        { title: "Aromatherapy Detox Pass", meta: "Prepaid Bundle Redemption (2/5 Left)", status: "Redeemed", statusColor: "indigo" },
        { title: "Sanitization & Prep Buffer", meta: "Room 3 Sanitization Protocol", status: "Auto Lock", statusColor: "slate" }
      ]
    }
  },
  barbershop: {
    slug: "barbershop",
    name: "Barbershops & Male Grooming",
    tagline: "Instant walk-in appointments, smart staff assignment, and automated client notifications.",
    description: "Keep your barber chairs full and eliminate waiting frustration. Rozx provides instant walk-in booking into the live calendar, smart auto-assignment to available barbers, and automated WhatsApp appointment confirmations.",
    workflows: [
      "Manage pre-booked slots and walk-in clients with smart staff routing (Requested vs. First Available).",
      "Add walk-in clients to the calendar instantly from the reception dashboard.",
      "Send WhatsApp appointment confirmations and reminders automatically."
    ],
    featuresList: [
      { title: "Instant Walk-in Booking", desc: "Add walk-in clients to the next available slot with one tap, auto-assigned to the first free barber." },
      { title: "Smart Staff Assignment", desc: "Automatically assign walk-in clients to the barber with the earliest available slot." },
      { title: "Barber Commission Logs", desc: "Track daily sales and calculate commission payouts per barber automatically." }
    ],
    metric: "Smart Scheduling",
    metricLabel: "Walk-in & Appointment Calendar",
    iconName: "barbershop",
    preview: {
      badge: "Barbershop Calendar View",
      title: "The Heritage Barbershop",
      subtitle: "5 Barber Chairs • Live Calendar & Walk-ins",
      stats: [
        { label: "Appointments", value: "38 Today" },
        { label: "Avg Wait Time", value: "12 Mins" },
        { label: "Walk-ins", value: "14 Added" }
      ],
      snippetTitle: "Live Barber Schedule",
      snippetItems: [
        { title: "Beard Trim & Cut — Vikram", meta: "Barber: Vikram • Chair 2 • 2:30 PM", status: "Now Serving", statusColor: "emerald" },
        { title: "Walk-in → Barber Sam", meta: "Auto-assigned to next available slot at 2:45 PM", status: "Up Next", statusColor: "amber" },
        { title: "Appointment Confirmed", meta: "WhatsApp sent to Client Rahul for 3:15 PM", status: "Confirmed", statusColor: "indigo" }
      ]
    }
  },
  "nail-studio": {
    slug: "nail-studio",
    name: "Nail Studios & Art Bars",
    tagline: "Custom service add-on pricing, technician scheduling, and photo portfolios.",
    description: "Manage complex nail art appointments, gel extensions, and removal add-ons. Rozx handles multi-service durations, technician assignments, and recurring maintenance visit reminders.",
    workflows: [
      "Structure multi-tier service pricing (extensions, art levels, removals).",
      "Assign specialist technicians based on art skills and availability.",
      "Send automatic 3-week refill reminders via WhatsApp to retain clients."
    ],
    featuresList: [
      { title: "Add-On Service Tiering", desc: "Allow clients to select art levels, nail lengths, and removals during online booking." },
      { title: "Technician Skill Matching", desc: "Assign specific nail technicians based on specialty (e.g. Acrylics, Gel Art, Extensions)." },
      { title: "Refill Reminder Triggers", desc: "Automatically schedule 3-week refill prompts to maximize repeat visit frequency." }
    ],
    metric: "Add-On Builder",
    metricLabel: "Art Level & Refill Reminders",
    iconName: "nail-studio",
    preview: {
      badge: "Nail Studio POS Engine",
      title: "Polished Nail Bar & Studio",
      subtitle: "4 Tech Stations • Custom Add-ons Active",
      stats: [
        { label: "Refill Rate", value: "84%" },
        { label: "Avg Add-On", value: "+₹650" },
        { label: "Tech Roster", value: "4 Active" }
      ],
      snippetTitle: "Live Nail Station Dispatch",
      snippetItems: [
        { title: "Gel Extensions + Chrome Art", meta: "Tech: Sneha • Add-on: Removal", status: "In Progress", statusColor: "amber" },
        { title: "WhatsApp Refill Reminder", meta: "Triggered for Client: Riya M. (21 Days)", status: "Sent ✓", statusColor: "emerald" },
        { title: "Nail Care Oil Add-on", meta: "Retail Product Sale at POS", status: "Paid", statusColor: "indigo" }
      ]
    }
  },
  "makeup-studio": {
    slug: "makeup-studio",
    name: "Makeup Studios & Bridal Artists",
    tagline: "Bridal booking packages, advance deposit management, and artist rosters.",
    description: "Handle high-value bridal and event makeup bookings effortlessly. Rozx manages advance deposit requirements, multi-artist team assignments, travel logs, and consultation notes.",
    workflows: [
      "Collect advance booking prepayments to secure peak bridal dates.",
      "Assign senior and assistant artists to multi-person bridal parties.",
      "Store trial makeup notes, skin preferences, and reference images in client CRM profiles."
    ],
    featuresList: [
      { title: "Advance Deposit Engine", desc: "Require partial or full prepayments online via Razorpay to lock event bookings." },
      { title: "Bridal Party Scheduler", desc: "Coordinate time slots and artist rosters for large wedding parties seamlessly." },
      { title: "Trial Notes & CRM History", desc: "Log product shades, skin undertones, and trial notes for perfection on wedding day." }
    ],
    metric: "Deposit Lock",
    metricLabel: "Bridal & Event Reservations",
    iconName: "makeup-studio",
    preview: {
      badge: "Bridal Booking Engine",
      title: "Glamour Glow Bridal Studio",
      subtitle: "3 Lead Artists • Advance Deposits Active",
      stats: [
        { label: "Bridal Parties", value: "14 Booked" },
        { label: "Deposit Lock", value: "100%" },
        { label: "Trial Records", value: "Saved ✓" }
      ],
      snippetTitle: "Bridal Event Dispatch Log",
      snippetItems: [
        { title: "Bridal Makeup + 4 Bridesmaids", meta: "Lead Artist: Simran • Venue Location", status: "Deposit Paid", statusColor: "emerald" },
        { title: "Pre-Bridal Trial Session", meta: "Shade Notes: MAC NC25 • Airbrush", status: "Recorded", statusColor: "indigo" },
        { title: "Advance Receipt #INV-902", meta: "₹15,000.00 Advance Deposit Collected", status: "Verified ✓", statusColor: "emerald" }
      ]
    }
  },
  "wellness-center": {
    slug: "wellness-center",
    name: "Wellness Centers & Holistic Care",
    tagline: "Multi-practitioner scheduling, consultation notes, and recurring care plans.",
    description: "Integrate holistic wellness services into one smooth management system. Rozx handles multi-specialist calendars, digital consultation notes, recurring package subscriptions, and client visit tracking.",
    workflows: [
      "Schedule appointments across naturopaths, nutritionists, and therapy specialists.",
      "Store detailed consultation records and progress notes in secure client CRM files.",
      "Sell multi-week wellness care packages with automated visit tracking."
    ],
    featuresList: [
      { title: "Multi-Practitioner Grid", desc: "Manage distinct calendars for various wellness disciplines under a single workspace." },
      { title: "Consultation Notes & Records", desc: "Document treatment plans, dietary recommendations, and progress notes." },
      { title: "Wellness Subscription Packages", desc: "Create recurring care plans and multi-session therapy packages effortlessly." }
    ],
    metric: "Care Plans",
    metricLabel: "Multi-Specialist Coordination",
    iconName: "wellness-center",
    preview: {
      badge: "Wellness Practice System",
      title: "Prana Holistic Wellness",
      subtitle: "5 Specialists • Care Plan Subscriptions",
      stats: [
        { label: "Care Plans", value: "42 Active" },
        { label: "Practitioners", value: "5 Roster" },
        { label: "Client Records", value: "Secure 🔒" }
      ],
      snippetTitle: "Live Practitioner Schedule",
      snippetItems: [
        { title: "Ayurvedic Consultation & Therapy", meta: "Practitioner: Dr. Ananya • Room 1", status: "In Session", statusColor: "amber" },
        { title: "6-Week Detox Care Package", meta: "Session 4/6 Redeemed at Check-in", status: "Redeemed", statusColor: "indigo" },
        { title: "Digital Health Note #904", meta: "Consultation Summary & Diet Plan", status: "Saved ✓", statusColor: "emerald" }
      ]
    }
  },
  "tattoo-studio": {
    slug: "tattoo-studio",
    name: "Tattoo Studios & Piercing Parlours",
    tagline: "Consultation deposit collection, digital consent waivers, and artist rosters.",
    description: "Protect your studio and keep artists focused on ink. Rozx collects consultation deposits, manages digital consent waivers with signatures, tracks hourly rates, and logs artist commissions.",
    workflows: [
      "Collect advance booking deposits for custom tattoo design consultations.",
      "Capture digital consent waivers and ID verification on tablet devices prior to sessions.",
      "Track artist hourly rates, session durations, and material add-ons during POS checkout."
    ],
    featuresList: [
      { title: "Digital Consent Waivers", desc: "Deploy digital consent forms with age verification, health checklists, and touch signatures." },
      { title: "Deposit & Session Booking", desc: "Require advance deposits via Razorpay to lock in custom design and tattooing hours." },
      { title: "Artist Split Calculation", desc: "Automatically calculate studio vs artist revenue splits based on custom percentage rules." }
    ],
    metric: "Paperless Waivers",
    metricLabel: "Digital Consent & Artist Splits",
    iconName: "tattoo-studio",
    preview: {
      badge: "Tattoo Studio Control",
      title: "Ink & Art Tattoo Collective",
      subtitle: "4 Resident Artists • Digital Waivers Active",
      stats: [
        { label: "Waiver Status", value: "Signed ✓" },
        { label: "Deposits Locked", value: "100%" },
        { label: "Artist Split POS", value: "Automated" }
      ],
      snippetTitle: "Studio Session & Waiver Logs",
      snippetItems: [
        { title: "Custom Sleeve Session (3 Hrs)", meta: "Artist: Kabir • Touch Consent Signed", status: "In Ink", statusColor: "emerald" },
        { title: "Consultation Deposit Received", meta: "₹2,000 Deposit locked via Razorpay", status: "Verified ✓", statusColor: "indigo" },
        { title: "Aftercare Kit Sale", meta: "Retail Product Add-on at Checkout", status: "Paid", statusColor: "emerald" }
      ]
    }
  },
  clinic: {
    slug: "clinic",
    name: "Aesthetic Clinics & Dermatology",
    tagline: "Clinical EMR workspace, SOAP notes, ICD-10 codes, and printable Doctor Prescriptions.",
    description: "Operate a compliant, high-end dermatology or dental clinic. Rozx provides an EMR workspace with SOAP medical encounter notes, ICD-10 diagnosis codes, multi-step treatment plans with cost estimates, and NMC/DCI doctor registration prescriptions.",
    workflows: [
      "Record structured SOAP clinical notes (Subjective, Objective, Assessment, Plan) with ICD-10 diagnosis codes.",
      "Build multi-step procedure treatment plans with estimated session costs and progress tracking.",
      "Generate and print digital prescriptions with NMC/DCI registration numbers, dosage schedules, and PDF sharing."
    ],
    featuresList: [
      { title: "Clinical SOAP Notes & ICD-10", desc: "Document chief complaints, vitals, assessment notes, and ICD-10 diagnostic codes seamlessly." },
      { title: "Multi-Step Treatment Plans", desc: "Sequence multi-visit procedures with estimated cost breakdowns and completion tracking." },
      { title: "Doctor Prescription (Rx) Engine", desc: "Issue official Rx slips with doctor registration numbers, dosage instructions, and follow-up dates." }
    ],
    metric: "Clinical EMR",
    metricLabel: "SOAP Notes & Doctor Prescriptions",
    iconName: "clinic",
    preview: {
      badge: "Clinical EMR & Rx Engine",
      title: "DermaGlow Aesthetic Clinic",
      subtitle: "Dr. Meera Vasudevan • NMC Reg #2026/04/10928",
      stats: [
        { label: "EMR Notes", value: "16 Encounter" },
        { label: "ICD-10 Sync", value: "Verified 🔒" },
        { label: "Rx Generator", value: "Print PDF ℞" }
      ],
      snippetTitle: "Live Clinical Patient Workspace",
      snippetItems: [
        { title: "SOAP Note: Acne Vulgaris (ICD-10 L70.0)", meta: "Dr. Meera • Subjective/Objective Assessment Recorded", status: "Saved 🩺", statusColor: "emerald" },
        { title: "Prescription ℞ Generated", meta: "Tab Doxycycline 100mg (1-0-1) • NMC #2026/04/10928", status: "Issued Rx", statusColor: "indigo" },
        { title: "3-Step Chemical Peel Plan", meta: "Session 2/3 Completed • Est. ₹12,500 Total", status: "In Progress", statusColor: "amber" }
      ]
    }
  },
  consulting: {
    slug: "consulting",
    name: "Consulting & Professional Advisory",
    tagline: "1-on-1 consultation scheduling, prepayment lock, and calendar sync.",
    description: "Streamline your advisory practice. Rozx allows clients to book paid 1-on-1 advice sessions online, pay consultation fees upfront via Razorpay, and sync schedules directly to Google or Outlook calendars.",
    workflows: [
      "Accept paid online consultation bookings with mandatory prepayment.",
      "Sync advisor availability in real time with personal Google or Outlook calendars.",
      "Automate consultation reminders and video meeting link distribution."
    ],
    featuresList: [
      { title: "Paid Online Bookings", desc: "Require client fee prepayments to prevent no-shows and secure advisory time slots." },
      { title: "2-Way Calendar Synchronization", desc: "Sync advisory slots automatically with Google Calendar and Microsoft Outlook." },
      { title: "Automated Meeting Alerts", desc: "Dispatch meeting links, agendas, and reminders via email and WhatsApp automatically." }
    ],
    metric: "Upfront Pay",
    metricLabel: "Prepaid Consultation Slots",
    iconName: "consulting",
    preview: {
      badge: "Advisory Calendar Engine",
      title: "Apex Business Advisory",
      subtitle: "3 Senior Consultants • Calendar Sync Active",
      stats: [
        { label: "Paid Sessions", value: "18 Booked" },
        { label: "Calendar Sync", value: "Google / Outlook" },
        { label: "Prepayment Lock", value: "100%" }
      ],
      snippetTitle: "Live Advisory Session Log",
      snippetItems: [
        { title: "60-Min Strategy Consultation", meta: "Advisor: Rajesh K. • Fee: ₹5,000 Prepaid", status: "Confirmed", statusColor: "emerald" },
        { title: "Google Calendar Sync", meta: "Auto-added to rajesh@apexadvisory.in", status: "Synced ✓", statusColor: "indigo" },
        { title: "Automated WhatsApp Meeting Link", meta: "Sent to Client 2 Hours Prior", status: "Dispatched", statusColor: "emerald" }
      ]
    }
  },
  "coaching-training": {
    slug: "coaching-training",
    name: "Personal Training & Fitness Coaching",
    tagline: "Trainer rosters, gym session package tracking, and membership renewals.",
    description: "Keep your training clients accountable and engaged. Rozx tracks personal trainer schedules, multi-session gym workout packages, automated renewal alerts, and attendance check-ins.",
    workflows: [
      "Manage personal trainer schedules and client time slots across gym floors.",
      "Sell 10-session or 20-session training bundles with instant POS session deduction.",
      "Automate membership expiration notifications via WhatsApp."
    ],
    featuresList: [
      { title: "Session Package Deduction", desc: "Deduct personal training sessions at check-in with live balance tracking." },
      { title: "Trainer Roster Management", desc: "Schedule trainer shifts, client allocations, and specialized gym zone bookings." },
      { title: "Automated Renewal Alerts", desc: "Notify clients when package balances drop below 2 remaining sessions." }
    ],
    metric: "Pass Tracking",
    metricLabel: "Session Deductions & Renewals",
    iconName: "coaching-training",
    preview: {
      badge: "Fitness POS & Session Hub",
      title: "IronPulse Fitness & Performance",
      subtitle: "4 Lead Personal Trainers • Package Tracking",
      stats: [
        { label: "Active Passes", value: "85 Gym Passes" },
        { label: "Today's Workouts", value: "22 Sessions" },
        { label: "Session Balance", value: "Live POS Sync" }
      ],
      snippetTitle: "Live Gym Check-In Log",
      snippetItems: [
        { title: "1-on-1 Hypertrophy Training", meta: "Trainer: Dev S. • Client: Amit P.", status: "In Gym", statusColor: "emerald" },
        { title: "12-Session PT Pass Deduction", meta: "Pass Balance: 8/12 Sessions Remaining", status: "Deducted ✓", statusColor: "indigo" },
        { title: "Renewal Warning Trigger", meta: "Client: Sara T. (1 Session Left) -> WhatsApp", status: "Alert Sent", statusColor: "amber" }
      ]
    }
  },
  "photography-creative": {
    slug: "photography-creative",
    name: "Photography Studios & Creatives",
    tagline: "Studio space booking, equipment reservation, and advance shoot deposits.",
    description: "Run an organized creative studio. Rozx handles photography session bookings, studio space or equipment locking, advance deposit collection, and client shoot scheduling.",
    workflows: [
      "Lock studio bays, lighting gear, and photographer schedules upon booking.",
      "Collect advance booking deposits to lock shoot dates and prevent cancellations.",
      "Store client shoot briefs, Moodboards, and deliverable notes in CRM files."
    ],
    featuresList: [
      { title: "Studio & Gear Locking", desc: "Reserve photo bays, camera gear, and studio props to prevent physical conflicts." },
      { title: "Advance Shoot Deposits", desc: "Collect online prepayments via Razorpay to confirm high-demand weekend shoots." },
      { title: "Creative Brief Storage", desc: "Attach shoot requirements, reference links, and deliverable dates to client records." }
    ],
    metric: "Bay Locking",
    metricLabel: "Studio Space & Deposit Engine",
    iconName: "photography-creative",
    preview: {
      badge: "Creative Studio Reservations",
      title: "Lumina Creative & Photo Studio",
      subtitle: "2 Studio Bays • Advance Deposits Active",
      stats: [
        { label: "Studio Bays", value: "2 Reserved" },
        { label: "Shoot Prepayments", value: "100% Locked" },
        { label: "Gear Inventory", value: "Sync ✓" }
      ],
      snippetTitle: "Live Studio Shoot Reservations",
      snippetItems: [
        { title: "Fashion Lookbook Shoot (Bay A)", meta: "Photographer: Rohan • 4 Hrs", status: "In Shoot", statusColor: "emerald" },
        { title: "Lighting Gear Lock", meta: "Godox Flash Set #2 Allocated to Bay A", status: "Locked 🔒", statusColor: "indigo" },
        { title: "Advance Prepayment #INV-772", meta: "₹8,000 Shoot Deposit Collected", status: "Paid ✓", statusColor: "emerald" }
      ]
    }
  },
  "pet-services": {
    slug: "pet-services",
    name: "Pet Grooming & Veterinary Care",
    tagline: "Pet parent CRM profiles, breed & weight tracking, and aggression alert flags.",
    description: "Deliver loving care to furry companions while keeping your studio safe and organized. Rozx tracks pet profiles, species, breeds, weight, medical notes, vaccination dates, and aggression red alert warning banners.",
    workflows: [
      "Maintain pet CRM profiles (species, breed, weight, medical history, vaccination dates).",
      "Display aggression red alert banners on appointment cards to ensure groomer safety.",
      "Send WhatsApp reminders for upcoming grooming sessions and annual vaccination boosters."
    ],
    featuresList: [
      { title: "Pet CRM & Breed Profiles", desc: "Store pet name, species, breed, weight, medical history, and vaccination status." },
      { title: "Aggression Warning Alerts", desc: "Flag aggressive temperaments with prominent red warning banners on booking cards." },
      { title: "Vaccine & Refill Alerts", desc: "Dispatch automated WhatsApp reminders for recurring grooming and booster shots." }
    ],
    metric: "Pet CRM",
    metricLabel: "Breed Profiles & Aggression Alerts",
    iconName: "pet-services",
    preview: {
      badge: "Pet Care & Grooming Hub",
      title: "Paws & Whiskers Pet Spa",
      subtitle: "3 Grooming Stations • Pet CRM & Aggression Flags Active",
      stats: [
        { label: "Pets Registered", value: "142 Profiles" },
        { label: "Vaccine Verified", value: "100%" },
        { label: "Safety Alert", value: "Active ⚠️" }
      ],
      snippetTitle: "Live Grooming Station Log",
      snippetItems: [
        { title: "Golden Retriever Full Grooming", meta: "Pet: Bruno (32kg) • Owner: Ankit S. • Vaccinated", status: "In Grooming", statusColor: "emerald" },
        { title: "German Shepherd Bath & Nail Clip", meta: "Pet: Rocky • Aggression Flag: Requires Muzzle", status: "Alert ⚠️", statusColor: "amber" },
        { title: "WhatsApp Vaccine Reminder", meta: "Sent to Owner for Annual Booster", status: "Dispatched", statusColor: "indigo" }
      ]
    }
  },
  "auto-services": {
    slug: "auto-services",
    name: "Auto Detailing & Service Centers",
    tagline: "Vehicle service bays, job card tracking, and GST auto-invoicing.",
    description: "Manage auto detailing, ceramic coating, and repair workflows efficiently. Rozx handles service bay allocations, digital job cards, vehicle registration tracking, and GST invoices.",
    workflows: [
      "Assign vehicle service bays and detailing technicians based on job scope.",
      "Generate digital job cards detailing service items, parts used, and estimated delivery times.",
      "Send WhatsApp updates to vehicle owners when detailing or servicing is completed."
    ],
    featuresList: [
      { title: "Detailing Bay Allocation", desc: "Manage workshop bays and technician assignments to prevent shop floor bottlenecks." },
      { title: "Digital Job Cards & POS", desc: "Create digital service tickets with vehicle registration numbers and itemized parts." },
      { title: "Completion Notification Triggers", desc: "Notify vehicle owners via automated WhatsApp as soon as their car is ready for pickup." }
    ],
    metric: "Job Cards",
    metricLabel: "Vehicle Detailing & Bay Allocations",
    iconName: "auto-services",
    preview: {
      badge: "Auto Workshop POS",
      title: "Apex Ceramic Detailing & Studio",
      subtitle: "4 Detailing Bays • Job Cards Active",
      stats: [
        { label: "Vehicles Detailing", value: "8 Cars" },
        { label: "Bay Efficiency", value: "95%" },
        { label: "GST Auto Invoice", value: "Ready ✓" }
      ],
      snippetTitle: "Live Workshop Bay Status",
      snippetItems: [
        { title: "Ceramic Coating (DL-01-AB-1234)", meta: "Bay 2 • Tech: Sunita • Delivery: 5 PM", status: "In Detailing", statusColor: "amber" },
        { title: "Digital Job Card #JC-882", meta: "Paint Correction + Interior Spa", status: "Approved", statusColor: "indigo" },
        { title: "Completion WhatsApp Alert", meta: "Triggered to Owner for Vehicle Pickup", status: "Sent ✓", statusColor: "emerald" }
      ]
    }
  },
  "repair-service": {
    slug: "repair-service",
    name: "Electronics & Device Repair",
    tagline: "Device intake tickets, repair status tracking, and spare parts billing.",
    description: "Streamline device repair intake and customer status updates. Rozx tracks serial numbers, repair job statuses, diagnostic notes, spare parts billing, and customer pickup alerts.",
    workflows: [
      "Log device intake with IMEI/serial numbers, physical condition notes, and fault descriptions.",
      "Update repair job statuses (Diagnosed, In Repair, Ready for Pickup, Delivered).",
      "Issue GST invoices itemizing repair labor charges and replaced spare parts."
    ],
    featuresList: [
      { title: "Device Intake Tickets", desc: "Capture serial numbers, passcode locks, condition photos, and reported issues." },
      { title: "Status Tracking Engine", desc: "Update repair stages so customers receive automated WhatsApp progress alerts." },
      { title: "Parts & Labor POS Billing", desc: "Bill labor charges and spare parts separately with itemized GST codes." }
    ],
    metric: "Intake POS",
    metricLabel: "Device IMEI & Status Tracking",
    iconName: "repair-service",
    preview: {
      badge: "Device Repair Management",
      title: "TechFix Electronics & Mobile Repair",
      subtitle: "3 Technician Desks • IMEI Intake Active",
      stats: [
        { label: "Repairs In Hand", value: "14 Devices" },
        { label: "Avg Turnaround", value: "3.2 Hours" },
        { label: "Parts Billing", value: "Itemized ✓" }
      ],
      snippetTitle: "Live Repair Ticket Pipeline",
      snippetItems: [
        { title: "iPhone 15 Screen Replacement", meta: "IMEI #358912... • Tech: Rajesh", status: "In Repair", statusColor: "amber" },
        { title: "Pickup WhatsApp Notification", meta: "Device Repair Completed -> Alert Sent", status: "Ready Pickup", statusColor: "emerald" },
        { title: "GST Invoice #INV-502", meta: "Screen Part (₹4,500) + Labor (₹800)", status: "Paid ✓", statusColor: "indigo" }
      ]
    }
  },
  "classes-events": {
    slug: "classes-events",
    name: "Group Classes & Workshops",
    tagline: "Class roster management, seat booking, and attendance tracking.",
    description: "Organize group fitness sessions, dance workshops, or cooking masterclasses easily. Rozx handles seat capacity limits, online ticket sales, check-in rosters, and class pass redemptions.",
    workflows: [
      "Set class seat capacities (e.g. 15 spots per yoga or dance workshop) to prevent overcrowding.",
      "Sell single class passes or multi-class monthly packs online.",
      "Track attendance on tablet POS during class check-in."
    ],
    featuresList: [
      { title: "Seat Capacity Limits", desc: "Set maximum spots per session with automated online booking lock when sold out." },
      { title: "Class Pass Redemptions", desc: "Allow attendees to redeem active multi-session class passes upon arrival." },
      { title: "Attendance Check-In Roster", desc: "Check in participants quickly via mobile or desk POS." }
    ],
    metric: "Seat Control",
    metricLabel: "Workshop Roster & Class Passes",
    iconName: "classes-events",
    preview: {
      badge: "Group Class Management",
      title: "Pulse Dance & Movement Studio",
      subtitle: "2 Studio Halls • Group Workshops",
      stats: [
        { label: "Class Capacity", value: "15 Spots/Class" },
        { label: "Attendance POS", value: "Quick Check-in" },
        { label: "Pass Balances", value: "Live Sync ✓" }
      ],
      snippetTitle: "Live Workshop Class Roster",
      snippetItems: [
        { title: "Salsa Masterclass (Hall 1)", meta: "Instructor: Alex • 14/15 Spots Booked", status: "Almost Full", statusColor: "amber" },
        { title: "10-Class Pass Deduction", meta: "Attendee: Neha S. • Pass Balance: 6/10 Left", status: "Checked In", statusColor: "emerald" },
        { title: "Single Session Pass Purchase", meta: "₹600 Ticket Purchased via UPI", status: "Paid ✓", statusColor: "indigo" }
      ]
    }
  }
};
