import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: siteConfig.title,
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  defaultKeywords: [...siteConfig.keywords],
  creator: siteConfig.creator,
  url: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rozxhq",
    site: "@rozxhq",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export type SeoConfig = typeof seoConfig;
