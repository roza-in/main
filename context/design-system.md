# Design System

Unified styling guidelines, Tailwind v4 theme variables, Motion animation rules, and responsive layout standards for the Rozx Marketing Website (`rozx.in`).

---

## 1. Tailwind CSS v4 Theme Tokens (`globals.css`)

All design tokens are defined in `app/globals.css` using the `@theme` directive. Tailwind v4 automatically maps these CSS variables to utilities (e.g. `--color-brand` $\rightarrow$ `bg-brand`, `text-brand`, `border-brand`).

```css
@theme {
  /* Font */
  --font-sans: "Inter", sans-serif;

  /* === Page backgrounds === */
  --color-background: #F8FAFC;          /* Clean slate background */
  --color-surface: #FFFFFF;             /* Cards, panels */
  --color-surface-secondary: #F1F5F9;   /* Nested cards, input backgrounds */
  --color-surface-tertiary: #E2E8F0;    /* Hover states, subtle fills */
  --color-surface-muted: #F8FAFC;       /* Disabled areas */

  /* === Borders === */
  --color-border: #E2E8F0;              /* Default border */
  --color-border-light: #F1F5F9;        /* Light separator */
  --color-border-muted: #CBD5E1;        /* Input borders */

  /* === Text === */
  --color-text-primary: #0F172A;        /* Headings, primary content */
  --color-text-secondary: #64748B;      /* Labels, secondary info */
  --color-text-muted: #94A3B8;          /* Placeholders, disabled text */
  --color-text-dark: #020617;           /* Very dark labels */
  --color-text-inverse: #FFFFFF;        /* Text on dark backgrounds */

  /* === Brand - Emerald Green === */
  --color-brand: #10B981;               /* Primary brand action */
  --color-brand-dark: #059669;          /* Hover on brand */
  --color-brand-light: #D1FAE5;         /* Light brand tint */
  --color-brand-muted: #ECFDF5;         /* Subtle brand fill */
  --color-brand-foreground: #FFFFFF;    /* Text on brand bg */

  /* === Accent - Indigo === */
  --color-accent: #6366F1;              /* Links, secondary active states */
  --color-accent-dark: #4F46E5;         /* Hover on accent */
  --color-accent-light: #E0E7FF;        /* Light accent tint */
  --color-accent-foreground: #FFFFFF;   /* Text on accent bg */

  /* === Success === */
  --color-success: #22C55E;
  --color-success-dark: #16A34A;
  --color-success-light: #DCFCE7;
  --color-success-foreground: #14532D;

  /* === Warning === */
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-warning-foreground: #92400E;

  /* === Error === */
  --color-error: #EF4444;
  --color-error-light: #FEE2E2;
  --color-error-foreground: #991B1B;

  /* === Border Radii === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

---

## 2. Layout & Typography Guidelines

### Font Configuration
- `Inter` font imported via `next/font/google` in `app/layout.tsx` and assigned to `--font-sans`. Never use system default serif/sans fonts.

### Layout Container & Grid
- **Max Width**: `max-w-7xl` (1280px), centered with `mx-auto px-4 sm:px-6 lg:px-8`.
- **Section Spacing**: `py-16 md:py-24` between major marketing sections.
- **Grid Patterns**: Responsive column transitions (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).

### Typography Scale
- **Display Heading (`<h1>`)**: 40px–56px, tracking tight (`tracking-tight`), bold, text `#0F172A`.
- **Section Title (`<h2>`)**: 32px–40px, bold, text `#0F172A`.
- **Section Subtitle (`<p>`)**: 18px, text `#64748B`, max width `max-w-3xl`.
- **Card Title (`<h3>`)**: 20px, semibold, text `#0F172A`.
- **Body Text**: 16px, regular, line-height 24px, text `#64748B`.

---

## 3. Motion & Animation Standards (Framer Motion v12)

- **Scroll Reveal**: Animate sections on viewport entry (`initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1.0] }}`).
- **Hover Transitions**: Apply smooth 0.2s cubic-bezier ease transitions to cards, CTA buttons, and interactive industry tabs (`transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md`).
- **Pulsing Badges**: Subtle pulse animations on highlight badges (`animate-pulse bg-brand-light text-brand`).

---

## 4. UI Component Specifications

### Primary CTA Buttons
- `bg-brand hover:bg-brand-dark text-brand-foreground font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200`

### Secondary / Outline Buttons
- `bg-surface hover:bg-surface-secondary border border-border text-text-primary font-semibold px-6 py-3 rounded-lg transition-all duration-200`

### Feature & Industry Cards
- Container: White fill (`bg-surface`), border `border-border`, border-radius `rounded-xl` (12px), padding `p-6`, subtle shadow `shadow-sm hover:shadow-md transition-shadow`.
- Icons: 48x48px container, radius `rounded-lg`, fill `bg-brand-light`, icon color `text-brand`.

### Image & Media Performance (Zero CLS)
- All remote Sanity images fetched from `cdn.sanity.io` must use Next.js `Image` components with explicit `width`, `height`, `alt`, and `sizes` attributes to prevent Cumulative Layout Shift (CLS).
