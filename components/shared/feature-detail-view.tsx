import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Check, ArrowLeft, ArrowRight, Zap, Calendar, Users, CreditCard, Globe, Megaphone, Gift, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type FeatureDetail } from "@/lib/constants/features";

interface FeatureDetailViewProps {
  feature: FeatureDetail;
}

export function FeatureDetailView({ feature }: FeatureDetailViewProps) {
  const getIcon = () => {
    switch (feature.iconName) {
      case "appointments": return <Calendar className="h-10 w-10" />;
      case "crm": return <Users className="h-10 w-10" />;
      case "payments": return <CreditCard className="h-10 w-10" />;
      case "website-builder": return <Globe className="h-10 w-10" />;
      case "marketing": return <Megaphone className="h-10 w-10" />;
      case "loyalty": return <Gift className="h-10 w-10" />;
      case "analytics": return <BarChart3 className="h-10 w-10" />;
      case "ai-assistant": return <Sparkles className="h-10 w-10" />;
      default: return <Zap className="h-10 w-10" />;
    }
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Back Link */}
        <Link
          href="/platform"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Platform
        </Link>

        {/* Feature Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 text-left">
          <div className="md:col-span-8 space-y-4">
            <div className="text-primary rounded-xl bg-primary/10 p-3.5 w-fit">
              {getIcon()}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {feature.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed">
              {feature.tagline}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {feature.fullDesc}
            </p>
          </div>

          {/* Highlight Metric Card */}
          <div className="md:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-primary">
              {feature.highlightMetric}
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {feature.highlightLabel}
            </p>
            <div className="pt-4">
              <Link href={ROUTES.app.register}>
                <Button variant="premium" className="w-full font-bold text-xs h-10 shadow-sm">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="border-t border-border/60 pt-16 mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-left mb-10">Capabilities Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feature.capabilities.map((c, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 shadow-sm text-left hover:border-primary/40 transition-colors"
              >
                <div className="rounded-full bg-emerald-500/10 p-1.5 text-primary w-fit mb-4">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="border-t border-border/60 pt-16 mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground text-left mb-10">Feature FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {feature.faqs.map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold text-foreground text-sm sm:text-base flex items-start gap-2">
                  <span className="text-primary font-black">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Nav Link to Next Feature */}
        <div className="rounded-2xl border border-border bg-muted/10 p-6 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Ready to explore more?</span>
          <Link
            href="/platform"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm"
          >
            Explore other features
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
