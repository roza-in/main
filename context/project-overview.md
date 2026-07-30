# Project Overview — Rozx Marketing Website (`rozx.in`)

## About the Project

**Rozx Main** (`rozx.in`) is the public-facing marketing website built with Next.js 16 (Turbopack) showcasing the Rozx SaaS platform across **15 industry domain verticals** (salons, spas, barbershops, nail studios, makeup studios, wellness centers, tattoo studios, aesthetic clinics, consulting, fitness coaching, photo studios, pet services, auto detailing, device repair, group classes).

---

## Technical Stack & Integrations

- **CMS**: Sanity v5 (`/studio`) — manages dynamic content, landing pages, blog posts, and feature announcements.
- **Analytics**: PostHog product analytics and feature flag evaluation.
- **Error Tracking**: Sentry v10.
- **Animations**: Motion (Framer Motion v12) for smooth scroll reveals, 0.2s cubic-bezier ease transitions, and interactive industry previews.
- **Forms & Validation**: `react-hook-form` + `zod` for email subscription and contact forms.

---

## Mandatory Design System & SEO Directives

- **Design System Tokens**: Strictly adhere to `context/design-system.md` using Tailwind v4 `@theme` design tokens (`bg-brand`, `bg-surface`, `text-text-primary`). Raw hex codes or un-themed Tailwind color classes are strictly forbidden.
- **Motion Standards**: Scroll-triggered reveals (`opacity: 0, y: 20` $\rightarrow$ `opacity: 1, y: 0`), subtle hover transitions, and responsive tab previews.
- **Zero CLS Image Optimization**: Render Sanity images (`cdn.sanity.io`) using Next.js `Image` components with explicit width/height dimensions.
- **SEO Accessibility**: High contrast typography, descriptive Title tags, Open Graph meta tags, canonical URLs, and structured JSON-LD data on all marketing pages.
