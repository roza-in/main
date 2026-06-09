import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = generateMetadata({
  title: "Pricing Plans & Packages",
  description:
    "Explore transparent subscription options for Rozx - booking and billing software for salons, spas, and clinics. Compare Starter, Growth, Professional, and Enterprise plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingView />;
}
