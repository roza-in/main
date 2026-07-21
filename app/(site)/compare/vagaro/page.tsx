import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Vagaro: Feature & Pricing Comparison",
  description: "Compare Rozx and Vagaro for aesthetic clinics, salons, and wellness retreats in India. Local GST invoicing and custom domain booking.",
  path: "/compare/vagaro",
});

const features = [
  {
    name: "Flat Subscription Pricing",
    desc: "Single clear subscription plan (₹999/month) with no hidden add-on costs.",
    rozx: true,
    competitor: "Per-Feature Add-Ons",
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Map your custom website domain (e.g. www.yourbrand.com) with SSL included.",
    rozx: true,
    competitor: false,
  },
  {
    name: "WhatsApp Cloud API Integration",
    desc: "Dispatch official broadcast campaigns and appointment reminders via WhatsApp.",
    rozx: true,
    competitor: false,
  },
  {
    name: "GST Invoicing & Thermal Printing",
    desc: "Generate A4 PDF invoices or thermal receipts with itemized CGST, SGST, and SAC codes.",
    rozx: true,
    competitor: "US-Centric Billing",
  },
  {
    name: "Digital Intake Forms & Disclaimers",
    desc: "Collect signed disclaimers and progress notes with timestamped audit trails.",
    rozx: true,
    competitor: true,
  }
];

export default function VagaroComparePage() {
  return (
    <Comparison
      competitorName="Vagaro"
      tagline="Custom domain booking, GST billing, and transparent pricing."
      description="Compare how Rozx provides an all-in-one booking, billing, and custom domain website platform tailored specifically for Indian service businesses."
      features={features}
    />
  );
}
