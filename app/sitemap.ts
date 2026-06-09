import type { MetadataRoute } from "next";

const BASE_URL = "https://rozx.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/pricing",
    "/platform",
    "/about",
    "/contact",
    "/book-demo",
    "/start-trial",
    "/integrations",
    "/customers",
    "/blog",
    "/guides",
    "/docs",
    "/help",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/cookies",
    // Feature pages
    "/features/appointments",
    "/features/crm",
    "/features/payments",
    "/features/website-builder",
    "/features/marketing",
    "/features/loyalty",
    "/features/analytics",
    "/features/ai-assistant",
    // Industry pages
    "/industries/salon",
    "/industries/spa",
    "/industries/barbershop",
    "/industries/nail-studio",
    "/industries/makeup-studio",
    "/industries/wellness-center",
    "/industries/tattoo-studio",
    "/industries/clinic",
    // Comparison pages
    "/compare/fresha",
    "/compare/vagaro",
    "/compare/booksy",
    "/compare/mindbody",
  ];

  const lastModified = new Date("2026-06-08");

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/features") ? 0.8 : 0.7,
  }));
}
