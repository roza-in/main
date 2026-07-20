export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

interface GAWindow extends Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}

// Initialize standard queue if not present (prevents lost pageviews before script loads)
const ensureGtag = () => {
  if (typeof window !== "undefined") {
    const win = window as unknown as GAWindow;
    if (!win.gtag) {
      win.dataLayer = win.dataLayer || [];
      win.gtag = function (...args: unknown[]) {
        win.dataLayer?.push(args);
      };
    }
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    ensureGtag();
    const win = window as unknown as GAWindow;
    win.gtag?.("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined") {
    ensureGtag();
    const win = window as unknown as GAWindow;
    win.gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
