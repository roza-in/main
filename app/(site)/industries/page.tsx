import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo/metadata";
import {
  Scissors,
  Droplets,
  Paintbrush,
  Heart,
  Pen,
  Hand,
  Briefcase,
  Dumbbell,
  Camera,
  Dog,
  Car,
  Wrench,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata({
  title: "Industry Solutions: Custom Software for Salons, Spas, Clinics & Studios",
  description:
    "Rozx provides tailored appointment scheduling, GST billing, custom domain website builder, and CRM across 15 service verticals including salons, spas, clinics, tattoo studios, pet services, and fitness.",
  path: "/industries",
});

const verticals = [
  {
    name: "Salon",
    slug: "salon",
    icon: Scissors,
    tagline: "Hair salons & beauty parlours",
    description: "Manage multi-stylist calendars, hair color formula logs, service packages, and thermal GST billing.",
    highlight: "Multi-staff calendar & formula history",
  },
  {
    name: "Spa & Massage",
    slug: "spa",
    icon: Droplets,
    tagline: "Day spas & wellness retreats",
    description: "Room & therapist allocation, quiet slot management, package memberships, and herbal product inventory.",
    highlight: "Room & therapist scheduling",
  },
  {
    name: "Barbershop",
    slug: "barbershop",
    icon: Scissors,
    tagline: "Men's grooming & barbershops",
    description: "Rapid walk-in queue management, barber commission splits, and automated WhatsApp appointment reminders.",
    highlight: "Walk-in queue & barber commissions",
  },
  {
    name: "Nail Studio",
    slug: "nail-studio",
    icon: Paintbrush,
    tagline: "Nail art & manicure studios",
    description: "Nail artist portfolios, duration tracking, retail polish inventory, and online booking website.",
    highlight: "Artist portfolio & duration tracking",
  },
  {
    name: "Makeup Studio",
    slug: "makeup-studio",
    icon: Paintbrush,
    tagline: "Bridal & professional makeup studios",
    description: "Advance deposit booking, multi-service bridal packages, client intake forms, and event scheduling.",
    highlight: "Advance deposit & bridal booking",
  },
  {
    name: "Wellness Center",
    slug: "wellness-center",
    icon: Heart,
    tagline: "Holistic wellness & therapy centers",
    description: "Practitioner rosters, consultation notes, intake waivers, and recurring monthly wellness memberships.",
    highlight: "Intake waivers & memberships",
  },
  {
    name: "Tattoo Studio",
    slug: "tattoo-studio",
    icon: Pen,
    tagline: "Tattoo & body art studios",
    description: "Digital consent disclaimers, artist hourly rates, deposit billing, and aftercare WhatsApp automation.",
    highlight: "Digital consent forms & deposits",
  },
  {
    name: "Aesthetic Clinic",
    slug: "clinic",
    icon: Hand,
    tagline: "Medical & skin clinics",
    description: "Practitioner NMC/DCI verification, EMR progress notes, medical disclaimers, and GST invoices.",
    highlight: "EMR notes & NMC compliance",
  },
  {
    name: "Consulting",
    slug: "consulting",
    icon: Briefcase,
    tagline: "1-on-1 mentorship & consulting",
    description: "Time-slot booking, Google Meet / video link automation, calendar sync, and online payment checkout.",
    highlight: "Time-slot booking & video sync",
  },
  {
    name: "Coaching & Fitness",
    slug: "coaching-training",
    icon: Dumbbell,
    tagline: "Personal trainers & fitness coaches",
    description: "Personal training session passes, client progress logs, renewal alerts, and UPI payment links.",
    highlight: "Session passes & progress logs",
  },
  {
    name: "Photo & Creative Studio",
    slug: "photography-creative",
    icon: Camera,
    tagline: "Photo & creative art studios",
    description: "Equipment & studio bay booking, deposit collection, custom project contracts, and shoot schedules.",
    highlight: "Studio bay booking & contracts",
  },
  {
    name: "Pet Services",
    slug: "pet-services",
    icon: Dog,
    tagline: "Pet grooming & veterinary care",
    description: "Pet profile cards (breed/vaccinations), grooming package billing, and vet visit medical notes.",
    highlight: "Pet profiles & grooming passes",
  },
  {
    name: "Auto Services",
    slug: "auto-services",
    icon: Car,
    tagline: "Car wash & auto detailing",
    description: "Vehicle history logs, bay allocation, service package subscriptions, and thermal GST receipts.",
    highlight: "Vehicle history & bay management",
  },
  {
    name: "Device Repair",
    slug: "repair-service",
    icon: Wrench,
    tagline: "Phone & appliance repairs",
    description: "Job sheet tracking, barcode spare parts inventory, repair status WhatsApp updates, and GST bills.",
    highlight: "Job sheet tracking & spare parts",
  },
  {
    name: "Classes & Events",
    slug: "classes-events",
    icon: GraduationCap,
    tagline: "Group classes & workshops",
    description: "Capacity seat capping, weekly timetable grids, group ticketing, and workshop attendance logs.",
    highlight: "Seat capping & weekly timetables",
  },
];

export default function IndustriesHubPage() {
  return (
    <div className="py-20 md:py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary-100)_0%,transparent_60%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Vertical Solutions Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Tailored Booking, Billing &amp; Website Software for 15 Industry Domain Verticals
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you run a salon, spa, aesthetic clinic, tattoo studio, pet grooming center, or auto service bay, Rozx provides specialized workflows engineered for your exact business model.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.slug}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {v.highlight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors">
                      Rozx for {v.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{v.tagline}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <Link href={`/industries/${v.slug}`}>
                    <Button variant="outline" className="w-full justify-between text-xs font-bold h-10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      View Vertical Solution
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Build Your Custom Business Website &amp; Booking Software Today
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Select your industry domain and launch your live custom domain website with 0% booking commission.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href={ROUTES.app.register}>
              <Button size="lg" variant="premium" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="font-semibold text-sm px-6 h-12">
                Explore Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
