import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { sanityClient } from "@/sanity/client/sanity";
import { CareersView } from "@/app/(site)/careers/careers-view";

export const metadata: Metadata = generateMetadata({
  title: "Careers - Join the Rozx Team",
  description:
    "Explore open positions and career opportunities at Rozx. Join us in building the booking and billing software that empowers salons, spas, and clinics globally.",
  path: "/careers",
});

export default async function CareersPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let jobs: any[] = [];
  try {
    jobs = await sanityClient.fetch(
      `*[_type == "job" && isActive == true] | order(_createdAt desc) {
        _id,
        title,
        slug,
        department,
        location,
        type,
        description
      }`
    );
  } catch (error) {
    console.error("Failed to fetch jobs from Sanity:", error);
  }

  return <CareersView initialJobs={jobs} />;
}

