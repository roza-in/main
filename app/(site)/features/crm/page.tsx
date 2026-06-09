import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { FEATURE_DETAILS } from "@/lib/constants/features";
import { FeatureDetailView } from "@/components/shared/feature-detail-view";

const featureKey = "crm";
const feature = FEATURE_DETAILS[featureKey];

export const metadata: Metadata = generateMetadata({
  title: feature.name,
  description: feature.tagline,
  path: `/features/${featureKey}`,
});

export default function CRMFeaturePage() {
  return <FeatureDetailView feature={feature} />;
}
