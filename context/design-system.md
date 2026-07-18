# Design System

Styling parameters, animation guidelines, and theme tokens for the Rozx Marketing Website (`rozx.in`).

---

## 1. Tailwind CSS v4 Integration

The website utilizes Tailwind CSS v4. Design tokens are defined via the `@theme` directive in `app/globals.css`.

Key variables in use:
- **Primary Brand Color**: Emerald (`--color-brand` mapped to `#10B981`)
- **Accent Details**: Indigo (`--color-accent` mapped to `#6366F1`)
- **Neutral Colors**: Clean slate layout (`#F8FAFC`), white card structures, dark text (`#0F172A`)
- **Fonts**: Inter (`--font-sans`) initialized globally in layouts.

---

## 2. Animation Guidelines (Motion)

For visually rich, dynamic landing segments, use Framer Motion features safely:

- **Scroll-Triggered Reveals**: Reveal sections as users scroll down using viewport bounds.
- **Hover Transitions**: Apply subtle transition delays (0.2s cubic-bezier ease) to CTA buttons, cards, and navigation links.
- **Pulsing Accents**: Use slow opacity pulse animations on badges or spotlight banners.

---

## 3. SEO-Focused Styling Patterns

- **Heading Contrast**: Headings must utilize dark typography tags (`text-text-primary`) on light slate backgrounds for high accessibility ratios.
- **Dynamic Images**: All remote Sanity images fetched from `cdn.sanity.io` must use Next.js `Image` optimized components, utilizing AVIF/WebP formats with explicit widths/heights to avoid layout shifting (CLS).
- **Responsive Layout**: Elements stack on small screens (`flex-col md:flex-row`), and grids transition from single to triple columns (`grid-cols-1 md:grid-cols-3`).
