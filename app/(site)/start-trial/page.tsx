import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { TrialForm } from "./trial-form";

export const metadata: Metadata = generateMetadata({
  title: "Start Your Free 14-Day Trial",
  description:
    "Sign up for a free 14-day trial of Rozx. No credit card required. Get instant access to scheduling, CRM, billing, and marketing tools for your service business.",
  path: "/start-trial",
});

export default function StartTrialPage() {
  return <TrialForm />;
}
