import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import { PlatformView } from "./platform-view";

export const metadata: Metadata = genMeta({
  title: "Platform Capabilities",
  description:
    "Explore all Rozx platform modules — smart appointment booking, CRM, GST billing POS, marketing automation, loyalty programs, AI analytics, and multi-branch management.",
  path: "/platform",
});

export default function PlatformPage() {
  return <PlatformView />;
}
