import {
  Calendar,
  Users,
  CreditCard,
  Globe,
  Megaphone,
  Gift,
  BarChart3,
  Scissors,
  Droplets,
  Paintbrush,
  Hand,
  Heart,
  Pen,
  Briefcase,
  Dumbbell,
  Camera,
  Dog,
  Car,
  Wrench,
  Package,
  Star,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const featureItems: NavItem[] = [
  {
    label: "Appointments",
    href: "/features/appointments",
    description: "Calendar, online booking, availability & walk-ins",
    icon: Calendar,
  },
  {
    label: "Customer CRM",
    href: "/features/crm",
    description: "Profiles, visit history, notes & preferences",
    icon: Users,
  },
  {
    label: "Payments & Billing",
    href: "/features/payments",
    description: "GST POS, thermal receipt printing & online checkout",
    icon: CreditCard,
  },
  {
    label: "Website Builder",
    href: "/features/website-builder",
    description: "Custom domain, themes, booking portal & live publishing",
    icon: Globe,
  },
  {
    label: "Marketing",
    href: "/features/marketing",
    description: "WhatsApp Cloud API & SMS promotional campaigns",
    icon: Megaphone,
  },
  {
    label: "Inventory & Retail POS",
    href: "/features/inventory",
    description: "Barcode scanning, stock audit logs, HSN/GST rates & low-stock alerts",
    icon: Package,
  },
  {
    label: "5-Star Review Booster",
    href: "/features/appointments",
    description: "Automated post-appointment feedback & 5-star Google Review booster",
    icon: Star,
  },
  {
    label: "Memberships & Packages",
    href: "/features/loyalty",
    description: "Recurring memberships & bundled service packages",
    icon: Gift,
  },
  {
    label: "Analytics & Reporting",
    href: "/features/analytics",
    description: "Revenue trends, staff reports & financial exports",
    icon: BarChart3,
  },
];

export const industryItems: NavItem[] = [
  {
    label: "Salon",
    href: "/industries/salon",
    description: "Hair salons & beauty parlours",
    icon: Scissors,
  },
  {
    label: "Spa",
    href: "/industries/spa",
    description: "Day spas & wellness retreats",
    icon: Droplets,
  },
  {
    label: "Barbershop",
    href: "/industries/barbershop",
    description: "Men's grooming & barbershops",
    icon: Scissors,
  },
  {
    label: "Nail Studio",
    href: "/industries/nail-studio",
    description: "Nail art & manicure studios",
    icon: Paintbrush,
  },
  {
    label: "Makeup Studio",
    href: "/industries/makeup-studio",
    description: "Professional makeup & bridal studios",
    icon: Paintbrush,
  },
  {
    label: "Wellness Center",
    href: "/industries/wellness-center",
    description: "Holistic wellness & therapy centers",
    icon: Heart,
  },
  {
    label: "Tattoo Studio",
    href: "/industries/tattoo-studio",
    description: "Tattoo & body art studios",
    icon: Pen,
  },
  {
    label: "Clinic",
    href: "/industries/clinic",
    description: "Medical & aesthetic clinics",
    icon: Hand,
  },
  {
    label: "Consulting",
    href: "/industries/consulting",
    description: "1-on-1 mentorship & consulting",
    icon: Briefcase,
  },
  {
    label: "Coaching & Training",
    href: "/industries/coaching-training",
    description: "Personal training & tutors",
    icon: Dumbbell,
  },
  {
    label: "Creative Studio",
    href: "/industries/photography-creative",
    description: "Photo & creative art studios",
    icon: Camera,
  },
  {
    label: "Pet Services",
    href: "/industries/pet-services",
    description: "Pet grooming & veterinary",
    icon: Dog,
  },
  {
    label: "Auto Services",
    href: "/industries/auto-services",
    description: "Car wash & garage repairs",
    icon: Car,
  },
  {
    label: "Repair Service",
    href: "/industries/repair-service",
    description: "Phone & appliance repairs",
    icon: Wrench,
  },
  {
    label: "Classes & Events",
    href: "/industries/classes-events",
    description: "Group classes & workshops",
    icon: GraduationCap,
  },
];

export const mainNavItems: NavGroup[] = [
  { label: "Features", children: featureItems },
  { label: "Industries", children: industryItems },
  { label: "Pricing", href: "/pricing" },
  { label: "Platform", href: "/platform" },
];

export const ctaNavItems: NavItem[] = [
  { label: "Book a Demo", href: "/book-demo" },
  { label: "Get Started", href: "https://app.rozx.in/register" },
];

export const footerNavItems = {
  compare: {
    title: "Compare",
    items: [
      { label: "vs Fresha", href: "/compare/fresha" },
      { label: "vs Mindbody", href: "/compare/mindbody" },
      { label: "vs Booksy", href: "/compare/booksy" },
      { label: "vs Vagaro", href: "/compare/vagaro" },
    ],
  },
  solutions: {
    title: "Industries",
    items: [
      { label: "Salon", href: "/industries/salon" },
      { label: "Spa", href: "/industries/spa" },
      { label: "Barbershop", href: "/industries/barbershop" },
      { label: "Clinic", href: "/industries/clinic" },
      { label: "Tattoo Studio", href: "/industries/tattoo-studio" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
} as const;
