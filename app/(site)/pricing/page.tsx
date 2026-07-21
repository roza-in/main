import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = generateMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent subscription pricing for Rozx - booking, billing, and website platform for salons, spas, and clinics in India.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingView />;
}
