import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: GenerateMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: { absolute: fullTitle },
    description: fullDescription,
    keywords: siteConfig.keywords as unknown as string[],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    icons: {
      icon: "/favicon/favicon-32x32.png",
      shortcut: "/favicon/favicon.ico",
      apple: "/favicon/apple-touch-icon.png",
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
