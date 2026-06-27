import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { AboutView } from "./about-view";

export const metadata: Metadata = genMeta({
  title: "About Us",
  description:
    "Learn about Rozx — our mission to simplify booking, billing, and customer management for salons, spas, and clinics across India.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutView />;
}
