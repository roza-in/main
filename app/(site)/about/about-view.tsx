import Link from "next/link";
import { Compass, Eye, Heart, Shield, Sparkles, Code, Globe, TrendingUp, ArrowRight, Linkedin, ShieldCheck, Layers, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const upcomingTeams = [
  {
    title: "Engineering & Infrastructure",
    desc: "Expanding our development force to scale real-time calendar syncing, slot calculation, and custom domain systems.",
    icon: Code,
    badge: "Introducing Soon"
  },
  {
    title: "Design & Experience",
    desc: "Crafting modern checkout layouts, custom site builders, and premium aesthetics for service business storefronts.",
    icon: Sparkles,
    badge: "Introducing Soon"
  },
  {
    title: "Customer Support & Success",
    desc: "Focusing on priority data migration, onboarding guides, and dedicated support for active shop managers.",
    icon: Globe,
    badge: "Introducing Soon"
  }
];

const pressItems = [
  {
    logoText: "Product Hunt",
    quote: "The #1 scheduling and client billing toolkit built for modern service teams. High-performance design meets ultimate simplicity.",
    badge: "800+ Upvotes",
    linkText: "View launch profile",
    linkUrl: "https://www.producthunt.com/"
  },
  {
    logoText: "Indie Hackers",
    quote: "Bootstrapping a real-time calendar and billing platform to 1.0. A masterclass in running lean, high-speed SaaS.",
    badge: "Featured Story",
    linkText: "Read interview",
    linkUrl: "https://www.indiehackers.com/"
  },
  {
    logoText: "TechSparks",
    quote: "Rozx is helping small business owners skip heavy commission cuts and set up fast, custom booking links in under 5 minutes.",
    badge: "Top Showcase",
    linkText: "Read coverage",
    linkUrl: "https://techsparks.yourstory.com/"
  }
];

export function AboutView() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        {/* Background ambient spots & grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
        <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Our company story
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Redefining Booking & Invoicing for the <span className="text-primary font-bold">Modern Service Business</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every detail in our software is designed to save service teams administrative hours and delight their end clients. High performance, bootstrapped, and built with craft.
          </p>
          
          <div className="pt-4">
            <Link href="#journey" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
              See Rozx journey
              <ArrowRight className="h-3.5 w-3.5 rotate-90" />
            </Link>
          </div>
        </div>
      </div>

      {/* Visual Timeline Section */}
      <div id="journey" className="py-24 border-y border-border/40 relative bg-surface-1/40 scroll-mt-20">
        <div className="container max-w-5xl space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-heading-2 text-foreground">See Rozx journey</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">How we bootstrapped from a simple spark to an active scheduling platform in 2026.</p>
          </div>

          <div className="space-y-16 relative">
            {/* Vertical line indicator */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/80 -translate-x-1/2 hidden md:block" />

            {/* Event 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="space-y-4 md:pr-12 md:text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                  January 2026
                </span>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">The Spark</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Noticed that salon, spa, and clinic booking software is slow, bloated, and charges hefty transaction cuts. We decided to bootstrap a clean, lightning-fast platform that keeps business owners in absolute control with predictable subscriptions and zero commission cuts.
                </p>
              </div>
              <div className="flex justify-center md:justify-start md:pl-12">
                <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs w-full max-w-[280px] h-[180px] flex items-center justify-center hover:border-primary/45 transition-colors">
                  <svg viewBox="0 0 200 150" className="w-full h-full text-primary" fill="none" stroke="currentColor">
                    <circle cx="100" cy="70" r="30" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <path d="M100 35 V45 M100 95 V105 M65 70 H75 M125 70 H135" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="85" y="55" width="30" height="30" rx="6" strokeWidth="2" fill="var(--card)" />
                    <path d="M92 65 L97 70 L108 59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M80 115 H120 M90 123 H110" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="flex justify-center md:justify-end md:pr-12 order-last md:order-first">
                <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs w-full max-w-[280px] h-[180px] flex items-center justify-center hover:border-primary/45 transition-colors">
                  <svg viewBox="0 0 200 150" className="w-full h-full text-primary" fill="none" stroke="currentColor">
                    <rect x="30" y="30" width="140" height="90" rx="8" strokeWidth="2" fill="var(--card)" />
                    <line x1="30" y1="52" x2="170" y2="52" strokeWidth="1.5" />
                    <circle cx="45" cy="41" r="2.5" fill="currentColor" />
                    <circle cx="55" cy="41" r="2.5" fill="currentColor" />
                    <circle cx="65" cy="41" r="2.5" fill="currentColor" />
                    <path d="M48 68 L58 78 L48 88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="68" y1="88" x2="88" y2="88" strokeWidth="2" strokeLinecap="round" />
                    <rect x="110" y="65" width="40" height="40" rx="4" strokeWidth="1.5" strokeDasharray="2 2" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 md:pl-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                  February 2026
                </span>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">Building the MVP</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Developed the core real-time calendar and slot synchronization logic. Onboarded our first local pilot branch (Kapils Salon) as a beta partner to test booking flows, speeds, and live client reminders in a real shop environment.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="space-y-4 md:pr-12 md:text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                  April 2026
                </span>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">Expanding Capabilities</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Built the unified POS checkout, GST invoicing structures, and client profiles databases. Launched our visual custom website builder (with support for custom subdomains) and WhatsApp alert automations to eliminate no-shows.
                </p>
              </div>
              <div className="flex justify-center md:justify-start md:pl-12">
                <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs w-full max-w-[280px] h-[180px] flex items-center justify-center hover:border-primary/45 transition-colors">
                  <svg viewBox="0 0 200 150" className="w-full h-full text-primary" fill="none" stroke="currentColor">
                    <circle cx="100" cy="75" r="40" strokeWidth="2" />
                    <ellipse cx="100" cy="75" rx="40" ry="15" strokeWidth="1.5" opacity="0.7" />
                    <ellipse cx="100" cy="75" rx="15" ry="40" strokeWidth="1.5" opacity="0.7" />
                    <line x1="60" y1="75" x2="140" y2="75" strokeWidth="1.5" />
                    <line x1="100" y1="35" x2="100" y2="115" strokeWidth="1.5" />
                    <circle cx="60" cy="75" r="5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                    <circle cx="140" cy="75" r="5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                    <circle cx="100" cy="35" r="5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                    <circle cx="100" cy="115" r="5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Event 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="flex justify-center md:justify-end md:pr-12 order-last md:order-first">
                <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-xs w-full max-w-[280px] h-[180px] flex items-center justify-center hover:border-primary/45 transition-colors">
                  <svg viewBox="0 0 200 150" className="w-full h-full text-primary" fill="none" stroke="currentColor">
                    <path d="M 30 110 L 30 30 M 30 110 L 170 110" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                    <line x1="30" y1="80" x2="170" y2="80" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
                    <line x1="30" y1="50" x2="170" y2="50" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
                    <path d="M 30 100 C 60 90, 80 50, 100 60 C 120 70, 140 25, 170 30" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="170" cy="30" r="4.5" fill="var(--primary)" />
                    <circle cx="170" cy="30" r="9" fill="var(--primary)" fillOpacity="0.25" className="animate-pulse" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 md:pl-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
                  June 2026
                </span>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">Rozx 1.0 Release</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Officially launched Rozx 1.0 to the public. Processing appointments daily, providing free manual data migrations for legacy platforms, and maintaining our core focus: high-performance operations for modern service teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-24 border-b border-border/40 relative bg-background">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Our Team
            </span>
            <h2 className="text-heading-2 text-foreground">
              Adding Flow to Rozx
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              We are assembling a crew of passionate engineers, designers, and customer success champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-6">
            {upcomingTeams.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div key={idx} className="space-y-4 text-left border-t border-border/60 pt-8 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground/80 font-bold uppercase tracking-wider">
                      0{idx + 1} / {team.badge}
                    </span>
                    <div className="text-primary/70 group-hover:text-primary transition-colors">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-base font-extrabold text-foreground tracking-tight">{team.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{team.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Our Backing Section */}
      <div className="py-24 border-b border-border/40 bg-surface-1/10">
        <div className="container max-w-5xl space-y-16 text-center">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Our Backing
            </span>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight">Independent & 100% Customer-Backed</h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              We operate as a fully self-sustained platform. We answer only to our users - not venture capitalists or institutional boards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border/60 pt-4 max-w-4xl mx-auto text-left">
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">100% Self-Funded</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">Sustainable growth driven entirely by customer subscriptions.</p>
            </div>
            
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Layers className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">Zero VC Targets</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">No artificial milestones or pressure to compromise product values.</p>
            </div>
            
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">User-Led Roadmap</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">Every feature is built directly in response to actual team feedback.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Media & Press Section */}
      <div className="py-24 bg-background">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Media & Community
            </span>
            <h2 className="text-heading-2 text-foreground">Rozx in the Press</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">What builders and reviewers in the startup ecosystem are saying about our platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-4">
            {pressItems.map((p, idx) => (
              <a 
                key={idx} 
                href={p.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-5 text-left block border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-foreground tracking-tight uppercase tracking-wider">{p.logoText}</h4>
                    <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.badge}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic font-light">
                    "{p.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
                  <span>{p.linkText}</span>
                  <ArrowRight className="h-3 w-3 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="py-24 relative bg-background">
        <div className="container max-w-5xl text-center space-y-8">
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl mx-auto leading-none">
            Ready to simplify bookings and <span className="text-primary font-bold">grow your revenue?</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Setup in 5 minutes. Onboard your branch details, sync your staff calendars, and launch your booking webpage with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={ROUTES.app.register} className="w-full sm:w-auto">
              <Button variant="premium" className="font-bold text-xs h-10 w-full sm:w-auto px-6">
                Start 14-Day Free Trial
              </Button>
            </Link>
            <Link href="/book-demo" className="w-full sm:w-auto">
              <Button variant="outline" className="font-bold text-xs h-10 w-full sm:w-auto px-6 border-border/80 hover:bg-surface-2 transition-colors">
                Book a live demo
              </Button>
            </Link>
          </div>
          <p className="text-[10px] text-muted-foreground leading-none">No credit card details required during registration.</p>
        </div>
      </div>
    </div>
  );
}
