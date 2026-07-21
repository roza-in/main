import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { sanityClient } from "@/sanity/client/sanity";
import { CareersView } from "@/app/(site)/careers/careers-view";

export const metadata: Metadata = {
  ...generateMetadata({
    title: "Careers - Rozx",
    description: "Explore opportunities at Rozx.",
    path: "/careers",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

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
