export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

export const captureEvent = (name: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).posthog && POSTHOG_KEY) {
    (window as any).posthog.capture(name, properties);
  }
};

export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).posthog && POSTHOG_KEY) {
    (window as any).posthog.identify(userId, traits);
  }
};
