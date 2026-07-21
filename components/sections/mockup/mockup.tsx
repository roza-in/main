"use client";

import React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  Megaphone,
  Globe,
  Settings,
  HelpCircle,
  RefreshCw,
  Download,
  Bell,
  TrendingUp,
  Scissors
} from "lucide-react";

export function Mockup() {
  return (
    <section id="mockup" className="py-20 bg-background relative overflow-hidden border-b border-border/40">
      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-surface-1)_1px,transparent_1px)] bg-size-[100%_48px] opacity-15" />

      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Console Preview
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            Clean, modern business interface.
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Take a look at the actual Rozx dashboard. Monitor daily branch bookings, process invoice checkouts, track net earnings, and customize your customer web page from a unified platform.
          </p>
        </div>

        {/* Full-width Mockup Browser Container */}
        <div className="w-full rounded-2xl border border-border bg-card shadow-xl overflow-hidden flex flex-col relative dark:shadow-[0_0_50px_rgba(43,140,105,0.03)] min-h-125">
          {/* Mockup Frame Header */}
          <div className="flex items-center justify-between border-b border-border bg-surface-1 py-3 px-4 select-none shrink-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-warning/80" />
              <span className="h-3 w-3 rounded-full bg-success/80" />
            </div>
            <div className="rounded bg-surface-2 border border-border px-8 md:px-24 py-1 text-[10px] text-muted-foreground font-mono select-all truncate max-w-70 sm:max-w-md">
              https://app.rozx.in
            </div>
            <div className="w-12 flex justify-end">
              <RefreshCw className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>

          {/* App Layout Container */}
          <div className="flex flex-1 min-h-110 text-xs font-sans overflow-hidden">
            {/* Sidebar Mock */}
            <div className="w-40 shrink-0 border-r border-border bg-surface-1 hidden sm:flex flex-col justify-between py-4 select-none">
              <div className="space-y-4">
                {/* Brand Header */}
                <div className="flex items-center font-bold text-foreground text-sm px-4">
                  <Image
                    src="/logos/logo.png"
                    alt="Rozx Logo"
                    width={32}
                    height={32}
                    className="h-12 w-12 rounded object-contain dark:brightness-110"
                  />
                </div>

                {/* Navigation List */}
                <div className="space-y-0.5 px-2">
                  <SidebarItem icon={LayoutDashboard} label="Dashboard" active={true} />
                  <SidebarItem icon={Calendar} label="Appointments" active={false} />
                  <SidebarItem icon={Users} label="Customers" active={false} />
                  <SidebarItem icon={Scissors} label="Services" active={false} />
                  <SidebarItem icon={Users} label="Staff" active={false} />
                  <SidebarItem icon={CreditCard} label="Payments" active={false} />
                  <SidebarItem icon={Megaphone} label="Marketing" active={false} />
                  <SidebarItem icon={Globe} label="Website" active={false} />
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="space-y-0.5 px-2">
                <SidebarItem icon={Settings} label="Settings" active={false} />
                <SidebarItem icon={HelpCircle} label="Support" active={false} />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-surface-2/40 flex flex-col min-h-110 text-left">
              {/* Top Nav Strip */}
              <div className="h-12 border-b border-border bg-card px-4 flex items-center justify-between select-none shrink-0">
                <h4 className="font-bold text-foreground tracking-tight text-xs uppercase">
                  Dashboard
                </h4>
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary font-mono select-none">
                    PS
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-4 overflow-y-auto relative min-h-0 space-y-4">
                {/* Welcome Block */}
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-foreground">Good morning</h3>
                  <p className="text-[10px] text-muted-foreground">
                    Here&apos;s your operational overview for <strong className="text-foreground font-semibold">Kapils Salon</strong>.
                  </p>
                </div>

                {/* Filters Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap items-center gap-1">
                    <FilterButton label="Today" active={false} />
                    <FilterButton label="Yesterday" active={false} />
                    <FilterButton label="Last 7 Days" active={false} />
                    <FilterButton label="Last 30 Days" active={true} />
                    <FilterButton label="Custom Range" active={false} />
                  </div>
                  <div className="flex items-center gap-2 shrink-0 select-none">
                    <button className="flex items-center gap-1.5 border border-border bg-card text-foreground px-3 py-1 rounded-lg text-[10px] font-bold shadow-xs hover:bg-surface-2 transition-colors">
                      <RefreshCw className="h-3 w-3" />
                      <span>Refresh</span>
                    </button>
                    <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm hover:opacity-95 transition-all">
                      <Download className="h-3 w-3" />
                      <span>Export Reports</span>
                    </button>
                  </div>
                </div>

                {/* Analytics Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
                  <MetricCard
                    label="Today's Revenue"
                    value="₹24,850"
                    subtitle="Tracked POS & online"
                    trendGreen={true}
                    iconBg="bg-primary/10"
                    iconColor="text-primary"
                    valueIcon="₹"
                  />
                  <MetricCard
                    label="Today's Appointments"
                    value="14 / 18"
                    subtitle="77% capacity fill"
                    trendGreen={true}
                    iconBg="bg-primary/10"
                    iconColor="text-primary"
                    icon={Calendar}
                  />
                  <MetricCard
                    label="New Customers"
                    value="5"
                    subtitle="Registered in CRM"
                    trendGreen={true}
                    iconBg="bg-primary/10"
                    iconColor="text-primary"
                    icon={Users}
                  />
                  <MetricCard
                    label="30-Day Net Revenue"
                    value="₹4,18,500"
                    subtitle="GST & POS total"
                    trendGreen={true}
                    iconBg="bg-primary/10"
                    iconColor="text-primary"
                    icon={TrendingUp}
                  />
                </div>

                {/* Bottom Leaderboard / Graph Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch select-none">
                  {/* Revenue Trend (Last 7 Days) widget */}
                  <div className="md:col-span-8 rounded-xl border border-border bg-card p-4 flex flex-col justify-between min-h-45">
                    <div className="flex items-center justify-between pb-2 border-b border-border/30">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="h-3.5 w-3.5 text-primary" />
                        <h4 className="text-[10px] sm:text-xs font-bold text-foreground">Revenue Trend <span className="text-muted-foreground font-normal">(Last 7 Days)</span></h4>
                      </div>
                      <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Live Overview</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-between pt-3">
                      <div className="relative h-28 w-full">
                        <svg viewBox="0 0 500 100" className="w-full h-full overflow-visible" fill="none">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.15} />
                              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          {/* Grid Lines */}
                          <line x1="15" y1="15" x2="485" y2="15" stroke="currentColor" className="text-border/10" strokeWidth="0.75" strokeDasharray="3 3" />
                          <line x1="15" y1="45" x2="485" y2="45" stroke="currentColor" className="text-border/10" strokeWidth="0.75" strokeDasharray="3 3" />
                          <line x1="15" y1="75" x2="485" y2="75" stroke="currentColor" className="text-border/10" strokeWidth="0.75" strokeDasharray="3 3" />
                          <line x1="15" y1="100" x2="485" y2="100" stroke="currentColor" className="text-border/10" strokeWidth="0.75" />

                          {/* Gradient Area */}
                          <path
                            d="M 15 80 C 41.1 80, 67.2 65, 93.3 65 C 119.4 65, 145.6 75, 171.7 75 C 197.8 75, 223.9 45, 250 45 C 276.1 45, 302.2 55, 328.3 55 C 354.4 55, 380.6 15, 406.7 15 C 432.8 15, 458.9 25, 485 25 L 485 100 L 15 100 Z"
                            fill="url(#chartGradient)"
                          />

                          {/* Main Line */}
                          <path
                            d="M 15 80 C 41.1 80, 67.2 65, 93.3 65 C 119.4 65, 145.6 75, 171.7 75 C 197.8 75, 223.9 45, 250 45 C 276.1 45, 302.2 55, 328.3 55 C 354.4 55, 380.6 15, 406.7 15 C 432.8 15, 458.9 25, 485 25"
                            stroke="var(--primary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Data Dots */}
                          <circle cx="15" cy="80" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                          <circle cx="93.3" cy="65" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                          <circle cx="171.7" cy="75" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                          <circle cx="250" cy="45" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                          <circle cx="328.3" cy="55" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />
                          <circle cx="406.7" cy="15" r="3.5" fill="var(--card)" stroke="var(--primary)" strokeWidth="1.5" />

                          {/* Today Highlighted Pulse Dot */}
                          <circle cx="485" cy="25" r="4.5" fill="var(--primary)" />
                          <circle cx="485" cy="25" r="8" fill="var(--primary)" fillOpacity="0.25" className="animate-pulse" />
                        </svg>
                      </div>

                      {/* X Axis Labels */}
                      <div className="flex justify-between text-[9px] text-muted-foreground font-semibold px-2 pt-2 border-t border-border/20">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>

                  {/* Staff Performance widget */}
                  <div className="md:col-span-4 rounded-xl border border-border bg-card p-4 flex flex-col justify-between min-h-45">
                    <div className="flex items-center justify-between pb-2 border-b border-border/30 mb-2">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        <h4 className="text-[10px] sm:text-xs font-bold text-foreground">Staff Performance</h4>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between gap-2.5">
                      <StaffRow name="Priya S." role="Hair Specialist" booked="88%" revenue="₹8,450" progress={88} />
                      <StaffRow name="Vikram M." role="Senior Stylist" booked="75%" revenue="₹7,800" progress={75} />
                      <StaffRow name="Amit K." role="Barber Specialist" booked="70%" revenue="₹4,600" progress={70} />
                      <StaffRow name="Sunita R." role="Nail Artist" booked="65%" revenue="₹4,000" progress={65} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sidebar Navigation Item Helper */
function SidebarItem({ icon: Icon, label, active }: { icon: React.ComponentType<{ className?: string }>; label: string; active: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-2 px-3 py-2 text-[11px] font-semibold transition-colors ${active
        ? "text-primary font-bold border-r-4 border-primary -mr-2"
        : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
        }`}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5" />
        <span>{label}</span>
      </div>
    </div>
  );
}

/* Metric Card Helper */
interface MetricCardProps {
  label: string;
  value: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  icon?: React.ComponentType<{ className?: string }>;
  valueIcon?: string;
  trendGreen?: boolean;
}

function MetricCard({ label, value, subtitle, iconBg, iconColor, icon: Icon, valueIcon }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-3 shadow-xs flex justify-between items-start">
      <div className="space-y-1">
        <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-muted-foreground block truncate max-w-21.25 sm:max-w-23.75">
          {label}
        </span>
        <div className="text-sm sm:text-base font-extrabold text-foreground tracking-tight leading-none">
          {value}
        </div>
        <span className="text-[7px] sm:text-[8px] block text-muted-foreground font-medium">{subtitle}</span>
      </div>
      <div className={`h-6 w-6 sm:h-7 sm:w-7 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
        {Icon ? (
          <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${iconColor}`} />
        ) : (
          <span className={`text-[10px] sm:text-[11px] font-bold ${iconColor}`}>{valueIcon}</span>
        )}
      </div>
    </div>
  );
}

function FilterButton({ label, active }: { label: string; active: boolean }) {
  return (
    <button
      className={`px-2 py-0.5 rounded-md text-[8px] sm:text-[9px] font-bold transition-all border ${active
        ? "border-primary/25 bg-primary/10 text-primary"
        : "border-border/60 text-muted-foreground hover:text-foreground hover:bg-surface-2"
        }`}
    >
      {label}
    </button>
  );
}

function StaffRow({
  name,
  role,
  booked,
  revenue,
  progress
}: {
  name: string;
  role: string;
  booked: string;
  revenue: string;
  progress: number;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[10px]">
        <span className="font-semibold text-foreground">
          {name} <span className="text-[9px] text-muted-foreground font-normal">({role})</span>
        </span>
        <span className="font-bold text-foreground">
          {booked} <span className="text-[9px] text-muted-foreground font-normal">booked</span>
        </span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-[8px] text-muted-foreground/80 font-medium">
        Today&apos;s Revenue: <span className="text-foreground font-semibold">{revenue}</span>
      </div>
    </div>
  );
}
