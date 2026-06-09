export const ROUTES = {
  home: "/",
  about: "/about",
  pricing: "/pricing",
  platform: "/platform",
  contact: "/contact",
  bookDemo: "/book-demo",
  startTrial: "/start-trial",
  integrations: "/integrations",
  customers: "/customers",
  blog: "/blog",
  guides: "/guides",
  docs: "/docs",
  help: "/help",
  
  features: {
    appointments: "/features/appointments",
    crm: "/features/crm",
    payments: "/features/payments",
    websiteBuilder: "/features/website-builder",
    marketing: "/features/marketing",
    loyalty: "/features/loyalty",
    analytics: "/features/analytics",
    aiAssistant: "/features/ai-assistant",
  },
  
  industries: {
    salon: "/industries/salon",
    spa: "/industries/spa",
    barbershop: "/industries/barbershop",
    nailStudio: "/industries/nail-studio",
    makeupStudio: "/industries/makeup-studio",
    wellnessCenter: "/industries/wellness-center",
    tattooStudio: "/industries/tattoo-studio",
    clinic: "/industries/clinic",
  },
  
  compare: {
    fresha: "/compare/fresha",
    vagaro: "/compare/vagaro",
    booksy: "/compare/booksy",
    mindbody: "/compare/mindbody",
  },
  
  legal: {
    privacy: "/privacy",
    terms: "/terms",
    refundPolicy: "/refund-policy",
    cookies: "/cookies",
  },
} as const;

export type Routes = typeof ROUTES;
