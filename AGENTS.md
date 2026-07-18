<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## About This Project

**Rozx Marketing Website** (`rozx.in`) — public-facing marketing website for the Rozx SaaS platform. CMS-driven content, SEO-optimized, no auth required.

- **CMS**: Sanity v5 — all content (blog, pages, features) managed via `/studio` route
- **Analytics**: PostHog (product analytics, feature flags)
- **Error Tracking**: Sentry v10
- **Animations**: Motion (Framer Motion v12)
- **Forms**: react-hook-form + zod validation
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Linting**: ESLint + Husky pre-commit hooks

## Context Files

Read based on what you need:

| File | When to Read |
|---|---|
| `context/project-overview.md` | First time working on this project or managing CMS/SEO parameters |
| `context/design-system.md` | Tailwind v4 tokens, design guidelines, and Framer Motion rules |

## Rules That Never Change

- **No business logic** — this is a marketing website, not a dashboard
- **No auth** — no user login, no JWT, no API client
- **No database** — all dynamic content comes from Sanity CMS
- **CMS content first** — prefer Sanity-managed content over hardcoded text
- **SEO is critical** — every page needs proper meta, Open Graph, structured data
- **Performance matters** — this is a public-facing site indexed by search engines

## Architecture

```
main/
├── AGENTS.md
├── app/
│   ├── layout.tsx                    → Root layout, fonts, Sentry/PostHog providers
│   ├── globals.css                   → Design tokens, Tailwind v4
│   ├── sitemap.ts                    → Dynamic XML sitemap
│   ├── robots.ts                     → Robots.txt config
│   ├── manifest.ts                   → PWA manifest
│   ├── (site)/                       → Marketing pages (home, features, pricing)
│   ├── (legal)/                      → Legal pages (privacy, terms)
│   ├── (resources)/                  → Blog, guides
│   ├── api/                          → API routes (email subscribe)
│   └── studio/                       → Sanity CMS Studio (/studio)
├── components/
│   ├── sections/                     → Landing page sections (Hero, Features, etc.)
│   ├── layout/                       → Header, Footer, Navigation
│   ├── blog/                         → Blog components
│   ├── shared/                       → Reusable components
│   └── ui/                           → Base UI primitives
├── sanity/
│   ├── client/                       → Sanity client configuration
│   ├── config/                       → Schema config
│   ├── queries/                      → GROQ queries
│   ├── schema-types/                 → Content type definitions
│   └── structure/                    → Studio desk structure
├── config/                           → Site config (nav, footer, SEO, routes)
├── lib/
│   ├── analytics/                    → PostHog integration
│   ├── security/                     → CSP, security headers
│   ├── seo/                          → SEO utilities
│   ├── constants/                    → Site-wide constants
│   └── utils.ts                      → Shared utilities
└── proxy.ts                          → Rate limiting, CSRF protection
```

## Security

The site has strict security headers configured in `next.config.ts`:
- **CSP**: Restrictive Content-Security-Policy with Sanity CDN, PostHog, Google Analytics whitelisted
- **HSTS**: Strict Transport Security with preload
- **X-Frame-Options**: DENY
- **Rate limiting**: Sliding-window on `/api/subscribe` (5 req/min per IP)
- **CSRF**: Origin validation on POST requests

## CMS (Sanity)

- **Studio route**: `/studio` (requires Sanity account access)
- **Project ID**: `NEXT_PUBLIC_SANITY_PROJECT_ID` env var
- **Dataset**: `production` (default)
- **Images**: Served via `cdn.sanity.io`, configured in `next.config.ts` remote patterns

## Environment

```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_POSTHOG_KEY=...
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
SENTRY_AUTH_TOKEN=...
```

## Testing

```bash
npm run test          # Vitest unit tests
npm run test:watch    # Vitest watch mode
npm run test:e2e      # Playwright E2E tests
npm run test:all      # Both
```
