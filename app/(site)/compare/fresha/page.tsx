import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Fresha: Feature & Pricing Comparison",
  description: "Compare Rozx and Fresha for Indian salons, spas, and clinics. Flat subscription pricing, custom domain website, and GST invoicing.",
  path: "/compare/fresha",
});

const features = [
  {
    name: "0% Booking Commission Model",
    desc: "Rozx operates strictly as a subscription platform with ₹0 booking commission fees.",
    rozx: true,
    competitor: "Marketplace Cut / Fees",
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Map your custom website domain (e.g. www.yourbrand.com) with automated SSL.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Official WhatsApp Cloud API Integration",
    desc: "Dispatch official broadcast campaigns and appointment reminders via Meta WhatsApp API.",
    rozx: true,
    competitor: false,
  },
  {
    name: "GST-Compliant PDF & Thermal Invoicing",
    desc: "Generate A4 PDF invoices or 80mm/58mm thermal receipts with itemized CGST/SGST.",
    rozx: true,
    competitor: "Basic Tax Features",
  },
  {
    name: "Intake Forms & SOAP Notes",
    desc: "Create custom intake disclaimers and SOAP progress notes with digital signatures.",
    rozx: true,
    competitor: "Basic Notes",
  }
];

export default function FreshaComparePage() {
  return (
    <Comparison
      competitorName="Fresha"
      tagline="Flat subscription pricing and custom domain booking for your brand."
      description="Compare how Rozx helps Indian service businesses maintain complete ownership of their client relationships, booking website domain, and billing without per-booking commission structures."
      features={features}
    />
  );
}
