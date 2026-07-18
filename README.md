# Rozx Marketing Website

The public marketing portal for the Rozx platform. Driven by Sanity CMS, incorporating high-fidelity Framer Motion animations, user analytics tracking, and automated Playwright E2E verification. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file at the root of the project:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### 3. Run Development Server
```bash
npm run dev
```
Access the local site at `http://localhost:3000`.

---

## Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles the application for production.
- `npm run start`: Runs the built Next.js server.
- `npm run lint`: Audits the files for ESLint rules.
- `npm run test`: Runs local unit tests via Vitest.
- `npm run test:e2e`: Runs integration test cases via Playwright.
- `npm run test:all`: Run both Vitest and Playwright tests in sequence.

---

## Technical Standards

- **Core Font**: Inter (assigned to `--font-sans` via Tailwind CSS v4 variables).
- **CMS Model Schema**: Sanity collection definitions and queries are detailed in [project-overview.md](file:///c:/Users/shiva/OneDrive/Desktop/Rozx/main/context/project-overview.md).
- **Theme Variables**: Visual motion designs and theme tokens are documented in [design-system.md](file:///c:/Users/shiva/OneDrive/Desktop/Rozx/main/context/design-system.md).
