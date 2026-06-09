export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Initialize standard queue if not present (prevents lost pageviews before script loads)
const ensureGtag = () => {
  if (typeof window !== "undefined") {
    const win = window as any;
    if (!win.gtag) {
      win.dataLayer = win.dataLayer || [];
      win.gtag = function () {
        win.dataLayer.push(arguments);
      };
    }
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    ensureGtag();
    (window as any).gtag("config", GA_TRACKING_ID, {
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
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
