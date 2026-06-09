import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2026-06-08";
const useCdn = process.env.NODE_ENV === "production";

export interface SanityClientType {
  fetch<T>(query: string, params?: Record<string, any>): Promise<T>;
}

// If projectId is defined, configure live client. Otherwise, use mock fallback.
export const sanityClient: SanityClientType = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : {
      fetch: async <T>(query: string, params?: Record<string, any>): Promise<T> => {
        console.warn("Sanity NEXT_PUBLIC_SANITY_PROJECT_ID is not defined in env variables. Mock data fallback.");
        return [] as unknown as T;
      },
    };

export type SanityClient = typeof sanityClient;
