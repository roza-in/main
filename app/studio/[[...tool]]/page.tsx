"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

// Metadata is exported from the parent layout/page level for the studio route.
// See the layout.tsx alongside this file for noindex config.
export default function StudioPage() {
  return <NextStudio config={config} />;
}
