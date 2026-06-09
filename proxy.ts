import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── In-Memory Rate Limiter ───────────────────────────────────
// For production with multiple instances, replace with @upstash/ratelimit + Redis.
// This implementation is safe for single-instance Vercel deployments (serverless edge).
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(
  ip: string,
  route: string,
  maxRequests: number,
  windowMs: number
): boolean {
  const key = `${ip}:${route}`;
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  entry.count++;
  return entry.count > maxRequests;
}

// Periodic cleanup to prevent memory leaks (runs on each request, O(n) amortized)
let lastCleanup = Date.now();
function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup < 60_000) return; // Cleanup at most once per minute
  lastCleanup = now;
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// ─── Rate Limit Config ────────────────────────────────────────
const RATE_LIMITS: Record<string, { max: number; windowMs: number }> = {
  "/api/subscribe": { max: 5, windowMs: 60_000 },   // 5 per minute
  "/api/trial":     { max: 3, windowMs: 60_000 },   // 3 per minute
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Rate-limit API routes ──
  const rateConfig = RATE_LIMITS[pathname];
  if (rateConfig) {
    cleanupStaleEntries();

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip, pathname, rateConfig.max, rateConfig.windowMs)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/subscribe", "/api/trial"],
};
