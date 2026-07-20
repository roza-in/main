export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

interface PostHogWindow extends Window {
  posthog?: {
    capture: (name: string, properties?: Record<string, unknown>) => void;
    identify: (userId: string, traits?: Record<string, unknown>) => void;
  };
}

export const captureEvent = (name: string, properties?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && POSTHOG_KEY) {
    const win = window as unknown as PostHogWindow;
    win.posthog?.capture(name, properties);
  }
};

export const identifyUser = (userId: string, traits?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && POSTHOG_KEY) {
    const win = window as unknown as PostHogWindow;
    win.posthog?.identify(userId, traits);
  }
};
