<!-- BEGIN:nextjs-agent-rules -->

# Next.js 16 Agent Rules

This project uses Next.js 16 with Turbopack. Always check conventions in `node_modules/next/dist/docs/` before implementing core routing or layout changes.

<!-- END:nextjs-agent-rules -->

# Rozx Marketing Website (`rozx.in`)

Public-facing, SEO-optimized marketing website for the Rozx SaaS platform showcasing capabilities across **15 industry domain verticals** (salons, spas, barbershops, nail studios, makeup studios, wellness centers, tattoo studios, aesthetic clinics, consulting, fitness coaching, photo studios, pet services, auto detailing, device repair, group classes).

---

## ⚠️ MANDATORY UI DIRECTIVE

**Before writing, modifying, or styling ANY marketing section, page, or component, you MUST read `context/design-system.md`.**

### Bespoke UI & Design Token Rules:
- **Zero Generic AI Styling**: Never output generic placeholder UI, unstyled blocks, or ad-hoc Tailwind classes. The website must look clean, bespoke, state-of-the-art, and visually engaging.
- **Strict Theme Tokens**: **NEVER** use raw hex codes or standard built-in Tailwind colors (e.g. `bg-blue-600`, `bg-emerald-500`, `text-slate-700`). **ALWAYS** use `@theme` tokens mapped in `app/globals.css` (`bg-brand`, `bg-surface`, `bg-surface-secondary`, `text-text-primary`, `text-text-secondary`, `border-border`, etc.).
- **Motion & Animations**: Use Motion (Framer Motion v12) for smooth scroll-triggered section reveals (`opacity: 0, y: 20` $\rightarrow$ `opacity: 1, y: 0`), subtle hover transitions (0.2s cubic-bezier ease), and interactive industry tab previews.
- **Zero CLS Image Optimization**: All Sanity CMS images (`cdn.sanity.io`) must be rendered using Next.js `Image` components with explicit dimensions and proper `sizes` attributes.

---

## Architecture & Principles

- **No Business Logic or Auth**: This is a marketing website, not a dashboard. User login, JWTs, or private API client integrations belong strictly in `app/` or `admin/`.
- **No Database**: All dynamic content (blog posts, landing pages, feature lists) is managed via Sanity CMS (`/studio`).
- **CMS Content First**: Prefer Sanity-managed content over hardcoded text strings.
- **SEO Priority**: Every page must implement descriptive Title tags, Meta descriptions, Open Graph cards, canonical URLs, and structured JSON-LD data.

---

## Code Quality & Performance Directives

- **Clean Structure**: Page routes (`app/(site)/`, `app/(legal)/`, `app/(resources)/`), landing sections (`components/sections/`), reusable UI primitives (`components/ui/`), Sanity queries (`sanity/queries/`).
- **TypeScript Strict Mode**: Zero `any` types permitted.
- **Security & Headers**: Respect CSP, HSTS, rate limiting (5 req/min on `/api/subscribe`), and CSRF protection configured in `next.config.ts` and `proxy.ts`.

---

## Context Files

Read relevant context files based on your task:

| File | Purpose |
|---|---|
| `context/design-system.md` | **Mandatory** theme tokens, layout scale, Motion animation rules, button/card specs |
| `context/project-overview.md` | Marketing website goals, CMS structure, SEO & PostHog setup |

---

## Environment & Testing

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_POSTHOG_KEY=...
```

```bash
npm run test          # Vitest unit tests
npm run test:e2e      # Playwright E2E tests
npm run test:all      # Both
```
