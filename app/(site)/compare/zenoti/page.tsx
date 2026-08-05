import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Zenoti: Feature & Pricing Comparison",
  description: "Compare Rozx and Zenoti for salons, spas, and clinics in India. Affordable flat subscription pricing and 2-minute instant setup.",
  path: "/compare/zenoti",
});

const features = [
  {
    name: "Affordable SaaS Subscription Pricing",
    desc: "Transparent flat subscription plan starting at ₹999/mo instead of expensive multi-hundred dollar enterprise contracts.",
    rozx: true,
    competitor: "$200–$500+/mo per location",
  },
  {
    name: "Instant 2-Minute Self-Serve Setup",
    desc: "Get your booking website, calendar, and billing active in 2 minutes without mandatory enterprise onboarding delays.",
    rozx: true,
    competitor: "Weeks/Months Onboarding",
  },
  {
    name: "Custom Website Builder & Domain Mapping",
    desc: "Publish your booking site directly on your own custom domain (e.g. www.yourbrand.com) with SSL included.",
    rozx: true,
    competitor: "Complex Web Portals",
  },
  {
    name: "Official Meta WhatsApp Cloud API Campaigns",
    desc: "Send broadcast campaigns, booking confirmations, and 5-star Google review prompts directly via WhatsApp.",
    rozx: true,
    competitor: "3rd Party Extensions",
  },
  {
    name: "Indian GST Invoicing & Thermal Printing",
    desc: "Itemize CGST/SGST/IGST and SAC codes for 80mm/58mm thermal POS printers and A4 PDF downloads.",
    rozx: true,
    competitor: true,
  },
  {
    name: "Digital Intake Forms & Consultation Notes",
    desc: "Collect signed consent disclaimers, SOAP progress notes, and pet/EMR records.",
    rozx: true,
    competitor: true,
  },
];

export default function ZenotiComparePage() {
  return (
    <Comparison
      competitorName="Zenoti"
      tagline="Fast, affordable operations designed for Indian service & wellness businesses."
      description="Compare how Rozx delivers enterprise-grade multi-staff scheduling, GST billing, and custom domain booking without heavy multi-month onboarding or thousands of dollars in enterprise lock-in."
      features={features}
      whoRozxSuits="Salons, spas, clinics, and studios looking for rapid setup, affordable flat pricing, custom domain website publishing, and native WhatsApp automation."
      whoCompetitorSuits="Large enterprise chains with 50+ locations requiring multi-entity global consolidation and dedicated enterprise account managers."
    />
  );
}
