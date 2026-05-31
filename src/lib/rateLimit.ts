// In-memory IP rate limiter for /api/leads.
//
// Enforces two simultaneous windows per IP:
//   - 5 requests per 10 minutes  (catches burst spam)
//   - 30 requests per hour       (catches sustained spam)
//
// Notes:
//   - In-memory storage works for a single-instance deployment (Replit Reserved VM).
//     If we ever scale to multiple instances, swap this for Upstash/Redis with the
//     same windowed-bucket logic.
//   - State is reset on server restart — that's acceptable for an MVP brute-force/spam
//     deterrent. An attacker who restarts you with a flood has worse problems.
//   - IP is taken from x-forwarded-for in the route handler.

interface Bucket {
  timestamps: number[];
}

const LIMITS: Array<{ windowMs: number; max: number }> = [
  { windowMs: 10 * 60 * 1000, max: 5 }, // 5 per 10 minutes
  { windowMs: 60 * 60 * 1000, max: 30 }, // 30 per hour
];

const LARGEST_WINDOW = LIMITS.reduce((m, l) => Math.max(m, l.windowMs), 0);

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  retryAfterSec?: number;
}

export function rateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(ip) ?? { timestamps: [] };

  // Prune entries older than the largest window — anything older can't trip any limit.
  bucket.timestamps = bucket.timestamps.filter((t) => now - t < LARGEST_WINDOW);

  // Check each limit. If any is exceeded, reject and tell the client when to retry.
  for (const { windowMs, max } of LIMITS) {
    const inWindow = bucket.timestamps.filter((t) => now - t < windowMs);
    if (inWindow.length >= max) {
      const oldestInWindow = Math.min(...inWindow);
      const retryAfterSec = Math.max(1, Math.ceil((oldestInWindow + windowMs - now) / 1000));
      return { ok: false, retryAfterSec };
    }
  }

  bucket.timestamps.push(now);
  buckets.set(ip, bucket);
  return { ok: true };
}
