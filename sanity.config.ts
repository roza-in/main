import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/config/schema";
import { deskStructure } from "./sanity/structure/desk";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Rozx Content Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schema.types,
  },
});
