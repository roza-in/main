import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Vagaro: SaaS Feature Comparison",
  description: "Discover why aesthetic clinics and day spas select Rozx over Vagaro for unified POS checkouts and advanced marketing campaigns.",
  path: "/compare/vagaro",
});

const features = [
  {
    name: "Sleek Modern UX & Speed",
    desc: "Vagaro's administration interface is built on older legacy layouts. Rozx offers a premium, Stripe-like, high-speed UX.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Consolidated Multi-Location Controls",
    desc: "Franchise operator consoles that synchronize services, permissions, and dashboards across 100+ branches instantly.",
    rozx: true,
    competitor: "Lacks Centralization",
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Map your own website domain (e.g. yourbusiness.com) with automatic CDN and SSL.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Official WhatsApp Cloud API Campaigning",
    desc: "Integrate verified WhatsApp marketing campaigns. Vagaro relies primarily on standard SMS and emails.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Flat Subscription Pricing",
    desc: "Predictable pricing plans. Vagaro adds extra charges for additional features and staff accounts.",
    rozx: true,
    competitor: false,
  }
];

export default function VagaroComparePage() {
  return (
    <Comparison
      competitorName="Vagaro"
      tagline="A modern operating system. Built for speed."
      description="Vagaro is feature-rich but contains a dated, complex administration menu that slows down checkouts. Rozx is built from the ground up for speed, offering aesthetic clinics and wellness retreats a unified portal with flat pricing."
      features={features}
    />
  );
}
