import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = generateMetadata({
  title: "Pricing Plans & Packages",
  description:
    "Explore transparent subscription options for Rozx - the ultimate service business operating system. Compare Starter, Growth, Professional, and Enterprise plans. Start a free 14-day trial today.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingView />;
}
