# Project Overview

## About the Project

**Rozx Marketing Website** (`rozx.in`) is the public marketing site for the Rozx platform. It introduces the product, features, integrations, and pricing packages to potential merchant signups.

- **Stack**: Next.js 16 (App Router), Tailwind CSS v4, Motion (Framer Motion v12), and Lucide React.
- **Content Management**: Powered by Sanity CMS (Studio accessible under `/studio` route segment).
- **Analytics & Telemetry**: Integrates PostHog for site traffic audit trails and Sentry for error tracking.
- **Form Actions**: Employs client-side forms validated via React Hook Form and Zod schema validation, submitting emails to a localized backend route for newsletter registrations.

---

## Site Segment Structure

```
/                             → Landing page (Hero, Features, Testimonials, CTA)
/features                     → Multi-tab product capability breakdown
/pricing                      → Pricing options with starter/growth highlights
/pricing/starter-monthly      → Plan intent registration bridge redirections
/blog                         → List of CMS-driven articles
/blog/[slug]                  → Blog detail pages
/about                        → Foundational rules, company mission, team
/contact                      → Customer support request form
/studio                       → Sanity Studio editing suite (auth restricted)
```

---

## Dynamic CMS Schema Configurations

The site utilizes Sanity CMS to manage the following document definitions:

- **Post (`post`)**: Title, slug, author ref, mainImage, categories, publishedAt, body rich text.
- **Feature (`feature`)**: Title, description, icon identifier, displayOrder, category link.
- **Plan pricing mappings**: Starter, Growth, Enterprise. Prices represent Rupee integers mapped against Razorpay subscription plans.
- **Legal texts**: Privacy policy, merchant terms and conditions.

---

## SEO Guidelines

- **Metadata generation**: Utilizes standard App Router metadata formats with Open Graph dynamic image rendering.
- **Sitemap & Robots**: Standardized sitemap generation routing via `sitemap.ts` and crawler indexing definitions in `robots.ts`.
- **Semantic structure**: Every page must enforce a single `<h1>` tag with structured `<h2>` to `<h4>` headings.
- **Alt tags**: Enforced on all image objects fetched from Sanity CDN.
