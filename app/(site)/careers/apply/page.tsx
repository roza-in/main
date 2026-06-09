import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { ApplyView } from "./apply-view";

export const metadata: Metadata = generateMetadata({
  title: "Apply to Join the Team - Careers",
  description:
    "Submit your application to join the team at Rozx. Help us build the operating system for local commerce.",
  path: "/careers/apply",
});

export default function ApplyPage() {
  return <ApplyView />;
}
