import {
  Calendar,
  Users,
  CreditCard,
  Globe,
  Megaphone,
  Gift,
  BarChart3,
  Sparkles,
  Scissors,
  Droplets,
  Paintbrush,
  Hand,
  Heart,
  Pen,
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
    description: "Calendar, online booking, waitlists & walk-ins",
    icon: Calendar,
  },
  {
    label: "Customer CRM",
    href: "/features/crm",
    description: "Profiles, history, preferences & lifetime value",
    icon: Users,
  },
  {
    label: "Payments & Billing",
    href: "/features/payments",
    description: "POS, invoices, GST & multi-gateway support",
    icon: CreditCard,
  },
  {
    label: "Website Builder",
    href: "/features/website-builder",
    description: "Templates, booking portal & custom domains",
    icon: Globe,
  },
  {
    label: "Marketing",
    href: "/features/marketing",
    description: "Campaigns, automation, WhatsApp & email",
    icon: Megaphone,
  },
  {
    label: "Loyalty & Memberships",
    href: "/features/loyalty",
    description: "Points, tiers, gift cards & referrals",
    icon: Gift,
  },
  {
    label: "Analytics",
    href: "/features/analytics",
    description: "Revenue, retention, growth & forecasting",
    icon: BarChart3,
  },
  {
    label: "AI Assistant",
    href: "/features/ai-assistant",
    description: "Business copilot for operations & insights",
    icon: Sparkles,
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
];

export const mainNavItems: NavGroup[] = [
  { label: "Features", children: featureItems },
  { label: "Industries", children: industryItems },
  { label: "Pricing", href: "/pricing" },
  { label: "Platform", href: "/platform" },
];

export const ctaNavItems: NavItem[] = [
  { label: "Book a Demo", href: "/book-demo" },
  { label: "Start Free Trial", href: "/start-trial" },
];

export const footerNavItems = {
  product: {
    title: "Product",
    items: [
      { label: "Features", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Customers", href: "/customers" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { label: "Salon", href: "/industries/salon" },
      { label: "Spa", href: "/industries/spa" },
      { label: "Barbershop", href: "/industries/barbershop" },
      { label: "Wellness Center", href: "/industries/wellness-center" },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
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
