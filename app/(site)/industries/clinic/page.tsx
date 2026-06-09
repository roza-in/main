import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { INDUSTRY_DETAILS } from "@/lib/constants/industries";
import { IndustryDetailView } from "@/components/shared/industry-detail-view";

const industryKey = "clinic";
const industry = INDUSTRY_DETAILS[industryKey];

export const metadata: Metadata = generateMetadata({
  title: `Rozx for ${industry.name}`,
  description: industry.tagline,
  path: `/industries/${industryKey}`,
});

export default function ClinicIndustryPage() {
  return <IndustryDetailView industry={industry} />;
}
