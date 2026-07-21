import type { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/client/sanity";

export const revalidate = 86400; // Revalidate sitemap daily

const BASE_URL = "https://rozx.in";

// Queries to fetch active slugs from Sanity
const blogSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/pricing",
    "/platform",
    "/about",
    "/contact",
    "/book-demo",
    "/blog",
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
    // Industry pages
    "/industries/salon",
    "/industries/spa",
    "/industries/barbershop",
    "/industries/nail-studio",
    "/industries/makeup-studio",
    "/industries/wellness-center",
    "/industries/tattoo-studio",
    "/industries/clinic",
    "/industries/consulting",
    "/industries/coaching-training",
    "/industries/photography-creative",
    "/industries/pet-services",
    "/industries/auto-services",
    "/industries/repair-service",
    "/industries/classes-events",
    // Comparison pages
    "/compare/fresha",
    "/compare/vagaro",
    "/compare/booksy",
    "/compare/mindbody",
  ];

  const routes = [...staticRoutes];

  // Fetch dynamic blog post slugs
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

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/features") ? 0.8 : 0.7,
  }));
}
