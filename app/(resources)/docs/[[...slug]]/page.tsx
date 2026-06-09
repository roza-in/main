"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Terminal, Shield, Key, ArrowRight, Layers, Code, Cpu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocContent {
  slug: string;
  title: string;
  description: string;
  codeBlock: string;
  sections: { name: string; text: string }[];
}

const docsContentList: Record<string, DocContent> = {
  "api-reference": {
    slug: "api-reference",
    title: "Developer API Reference",
    description: "Integrate customer appointment bookings and CRM profiles using standard HTTP protocols and JSON payloads.",
    codeBlock: `// Fetch Client Profile
curl -X GET "https://api.rozx.in/v1/customers/cust_92a817b" \\
  -H "Authorization: Bearer rzx_live_key_xyz" \\
  -H "Accept: application/json"`,
    sections: [
      { name: "Authentication API Keys", text: "Every request must pass your secret API key in the Authorization header. Test keys are prefixed with rzx_test_ and live keys with rzx_live_." },
      { name: "Rate Limits", text: "Standard endpoints are limited to 100 requests per minute on Professional plans. Custom limits apply to Enterprise accounts." }
    ]
  },
  "webhooks": {
    slug: "webhooks",
    title: "Webhook Integrations",
    description: "Deploy secure real-time notification endpoints for calendar and payment events.",
    codeBlock: `// Webhook Notification Payload
{
  "event": "appointment.created",
  "created_at": "2026-06-08T15:00:00Z",
  "data": {
    "appointment_id": "apt_01h8a",
    "customer_name": "Rahul Sharma",
    "service": "Classic Hair Styling",
    "amount": 1999.00
  }
}`,
    sections: [
      { name: "Configuring Endpoints", text: "Add your server URLs inside settings. Choose event triggers (e.g. appointment.created, invoice.paid) to send JSON payloads." },
      { name: "Signature Verification", text: "We sign every webhook request payload. Verify the X-Rozx-Signature header using your webhook signing secret key." }
    ]
  },
  "security": {
    slug: "security",
    title: "Security & Encryption Protocols",
    description: "Understand data compliance standards, sandbox details, and client data protection.",
    codeBlock: `// API Headers Response
HTTP/1.1 200 OK
Strict-Transport-Security: max-age=63072000; includeSubDomains
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY`,
    sections: [
      { name: "Bank-Grade Encryption", text: "All connection data payloads are encrypted using HTTPS TLS 1.3 standards. Client data records are protected with secure database keys." },
      { name: "Regulatory Compliance", text: "Rozx is compliant with standard client data security procedures, ensuring that no credit card credentials are stored locally." }
    ]
  }
};

const docCategories = [
  {
    title: "Developer API Guide",
    icon: Terminal,
    desc: "Authentication guidelines, base URLs, standard headers, and query parameters.",
    link: "/docs/api-reference"
  },
  {
    title: "Webhook Integrations",
    icon: Layers,
    desc: "Configure events and triggers (e.g. appointment.created, payment.completed).",
    link: "/docs/webhooks"
  },
  {
    title: "Security & Sandbox",
    icon: Shield,
    desc: "Data payload structures, request signatures, and test keys environment.",
    link: "/docs/security"
  }
];

export default function DocPage() {
  const { slug } = useParams();
  const slugArray = Array.isArray(slug) ? slug : [];
  const slugStr = slugArray.join("/");

  // Render Docs Index if slug is empty
  if (slugArray.length === 0 || !slugStr) {
    return (
      <div className="pt-24 pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
        <div className="container max-w-5xl">
          <div className="text-left max-w-3xl space-y-4 mb-16">
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
              API Docs
            </span>
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Developer Documentation.
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed">
              Integrate Rozx live booking systems, POS checkouts, and customer profiles directly inside your custom web software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            {docCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/45 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="text-primary bg-primary/10 rounded-lg p-2 w-fit">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="text-heading-3 text-base font-bold text-foreground leading-none">{cat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cat.desc}</p>
                  </div>
                  <div className="mt-6 pt-3.5 border-t border-border/60">
                    <Link
                      href={cat.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      Read reference
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border bg-surface-1 p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <Key className="h-4.5 w-4.5 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground text-xs sm:text-sm">Require sandbox API credentials?</h4>
                <p className="text-[11px] text-muted-foreground">Sandbox triggers and test API keys are available in your Rozx billing console on Professional tiers.</p>
              </div>
            </div>
            <Link href="/start-trial" className="w-full md:w-auto shrink-0">
              <Button variant="premium" className="w-full md:w-auto font-bold text-xs h-8 px-4">
                Generate Keys
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const doc = docsContentList[slugStr];

  if (!doc) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
      <div className="container max-w-4xl text-left">
        <Link
          href="/docs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Docs
        </Link>

        <div className="space-y-4 mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-wide w-fit">
            <Terminal className="h-3.5 w-3.5" />
            Developer Reference
          </span>
          <h1 className="text-display text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {doc.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {doc.description}
          </p>
          <hr className="border-border/60" />
        </div>

        {/* Styled Code Block container */}
        <div className="rounded-xl border border-border bg-[#0a0a0c] p-5 overflow-x-auto shadow-sm mb-10 text-white font-mono text-[11px] sm:text-xs">
          <div className="flex items-center justify-between border-b border-[#242427] pb-3 mb-4 text-[#71717a] text-[10px] select-none font-sans font-bold">
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Code className="h-3.5 w-3.5 text-primary" /> Request Console
            </span>
            <span className="uppercase tracking-wider">Payload</span>
          </div>
          <pre className="text-left font-mono leading-relaxed whitespace-pre text-[#e4e4e7]">{doc.codeBlock}</pre>
        </div>

        <div className="space-y-8 mb-16 font-sans">
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-heading-3 text-sm sm:text-base flex items-center gap-2">
                <Cpu className="h-4.5 w-4.5 text-primary shrink-0" />
                {sec.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6 max-measure">
                {sec.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
