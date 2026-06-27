/**
 * Lightweight in-memory sliding-window rate limiter.
 *
 * Uses an IP-keyed Map to track request counts within a fixed window.
 * Resets per IP after WINDOW_MS milliseconds.
 *
 * Note: This is a single-instance limiter suitable for serverless environments
 * where each function invocation is short-lived. For multi-instance production
 * deployments, replace the Map with a Redis-backed solution (e.g. Upstash).
 */

interface RateLimitRecord {
  count: number;
  windowStart: number;
}

const store = new Map<string, RateLimitRecord>();

/** Duration of each rate limit window in milliseconds. */
const WINDOW_MS = 60_000; // 1 minute

/** Maximum number of requests allowed per IP per window. */
const MAX_REQUESTS = 5;

/**
 * Checks whether a given IP is within the rate limit.
 * Returns `true` if the request is allowed, `false` if it should be blocked.
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Clean up if store size grows past threshold
  if (store.size >= 1000) {
    for (const [storedIp, record] of store.entries()) {
      if (now - record.windowStart > WINDOW_MS) {
        store.delete(storedIp);
      }
    }
  }

  // Enforce absolute memory cap to prevent OOM DOS exploits
  if (store.size >= 2000 && !store.has(ip)) {
    console.warn(`[Rate Limit] Cache size limit reached. Evicting new request from: ${ip}`);
    return false;
  }

  const record = store.get(ip);

  if (!record || now - record.windowStart > WINDOW_MS) {
    // New IP or expired window — start fresh
    store.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    // Window still active and limit exceeded
    return false;
  }

  // Increment count within the current window
  record.count++;
  return true;
}

/**
 * Extracts the best available IP address from a Next.js request.
 * Falls back to "unknown" if no IP header is present.
 */
export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}
