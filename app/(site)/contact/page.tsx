import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Rozx team for enterprise inquiries, partnership proposals, or technical support. We typically respond within 4 hours on business days.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
