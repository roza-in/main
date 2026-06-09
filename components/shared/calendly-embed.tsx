"use client";

import React from "react";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <iframe
      src={`${url}?embed_domain=rozx.in&embed_type=inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="Calendly Booking Scheduler"
      className="w-full h-full"
    ></iframe>
  );
}
