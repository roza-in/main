import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ---------------------------------------------------------------------------
// Sliding-window rate limiter
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitEntry>();
let lastCleanup = Date.now();

function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup < 60_000) return; // Clean up at most once per minute
  lastCleanup = now;
  for (const [key, entry] of rateLimitMap) {
    entry.timestamps = entry.timestamps.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW_MS
    );
    if (entry.timestamps.length === 0) {
      rateLimitMap.delete(key);
    }
  }
}

function isRateLimited(identifier: string): boolean {
  cleanupStaleEntries();
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry) {
    rateLimitMap.set(identifier, { timestamps: [now] });
    return false;
  }

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (entry.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.timestamps.push(now);
  return false;
}

// ---------------------------------------------------------------------------
// CSRF Protection (Allowed Origins)
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = new Set([
  "https://rozx.in",
  "https://www.rozx.in",
]);

function isOriginAllowed(origin: string): boolean {
  if (ALLOWED_ORIGINS.has(origin)) return true;
  
  // Allow localhost in development
  if (process.env.NODE_ENV === "development") {
    if (origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:")) {
      return true;
    }
  }
  
  // Allow Vercel preview/deployment domains
  if (origin.endsWith(".vercel.app")) {
    return true;
  }
  
  return false;
}

// ---------------------------------------------------------------------------
// Proxy Entrypoint (replaces middleware in Next.js 16)
// ---------------------------------------------------------------------------
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- CSRF: Validate Origin on POST requests to API routes ---
  if (request.method === "POST" && pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin");

    if (origin && !isOriginAllowed(origin)) {
      return NextResponse.json(
        { error: "Forbidden: Invalid origin" },
        { status: 403 }
      );
    }
  }

  // --- Rate limiting on public API endpoints ---
  if (
    request.method === "POST" &&
    pathname === "/api/subscribe"
  ) {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const rateLimitKey = `${ip}:${pathname}`;

    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        {
          error: "Too many requests. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/subscribe", "/studio/:path*"],
};
