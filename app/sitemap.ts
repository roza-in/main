import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/client/sanity";

export const revalidate = 86400; // Revalidate sitemap daily

const BASE_URL = "https://rozx.in";

// Queries to fetch active slugs from Sanity
const blogSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;
const caseStudySlugsQuery = `*[_type == "case-study" && defined(slug.current)].slug.current`;

// Lists of static slugs matching our static pages configs
const staticGuides = [
  "migration-zenoti-to-rozx",
  "setting-up-whatsapp-business-api",
  "configuring-gst-taxes"
];

const staticDocs = [
  "api-reference",
  "webhooks",
  "security"
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/pricing",
    "/platform",
    "/about",
    "/contact",
    "/book-demo",
    "/integrations",
    "/customers",
    "/careers",
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

  // Initialize all routes array with static base routes
  const routes = [...staticRoutes];

  // 1. Add static guides sub-routes
  staticGuides.forEach((slug) => {
    routes.push(`/guides/${slug}`);
  });

  // 2. Add static docs sub-routes
  staticDocs.forEach((slug) => {
    routes.push(`/docs/${slug}`);
  });

  // 3. Fetch dynamic blog post slugs
  try {
    const blogSlugs = await sanityClient.fetch<string[]>(blogSlugsQuery);
    if (blogSlugs && blogSlugs.length > 0) {
      blogSlugs.forEach((slug) => {
        routes.push(`/blog/${slug}`);
      });
    }
  } catch (error) {
    console.error("Failed to fetch blog slugs for sitemap:", error);
  }

  // 4. Fetch dynamic case study slugs
  try {
    const caseStudySlugs = await sanityClient.fetch<string[]>(caseStudySlugsQuery);
    if (caseStudySlugs && caseStudySlugs.length > 0) {
      caseStudySlugs.forEach((slug) => {
        routes.push(`/customers/${slug}`);
      });
    }
  } catch (error) {
    console.error("Failed to fetch case study slugs for sitemap:", error);
  }

  const lastModified = new Date("2026-06-08");

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/features") ? 0.8 : 0.7,
  }));
}
