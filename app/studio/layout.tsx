import type { Metadata } from "next";

/**
 * Prevent the Sanity Studio from appearing in search engine results.
 * The /studio route is an internal CMS tool and must never be indexed.
 */
export const metadata: Metadata = {
  title: "Rozx Content Studio",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
