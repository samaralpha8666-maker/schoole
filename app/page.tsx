"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Database,
  Smartphone,
  BookOpen,
  Heart,
  HelpCircle,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Lock,
  Play,
  Check,
  Sparkle
} from 'lucide-react';
import { PortalTabs } from '@/components/home/portal-tabs';
import { RoiCalculator } from '@/components/home/roi-calculator';
import { SchemaIsolation } from '@/components/home/schema-isolation';
import { FaqAccordion } from '@/components/home/faq-accordion';

export default function HomePage() {
  const [isYearly, setIsYearly] = useState<boolean>(true);

  // Pricing plans with Monthly/Yearly support (Yearly gets 20% discount)
  const pricingPlans = [
    {
      name: "🌿 Starter Plan",
      desc: "Perfect for small academies, play schools, or coaching institutes starting digitization.",
      monthlyPrice: 29,
      yearlyPrice: 23,
      students: "Up to 200 Students",
      schema: "Shared Schema Isolation",
      staff: "Up to 15 Staff members",
      support: "Standard Email Support",
      trialLink: "/contact?plan=starter",
      isPopular: false
    },
    {
      name: "🚀 Growth Plan",
      desc: "Ideal for a single large school or college seeking complete data security and priority speeds.",
      monthlyPrice: 79,
      yearlyPrice: 63,
      students: "Unlimited Students",
      schema: "Dedicated Private PostgreSQL Schema",
      staff: "Unlimited Staff & Teachers",
      support: "24/7 Priority Developer Support",
      trialLink: "/contact?plan=growth",
      isPopular: true
    },
    {
      name: "💎 Enterprise Plan",
      desc: "Best for school chains, college franchises, or multi-campus universities needing fully custom integrations.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      students: "Unlimited Students",
      schema: "Private Schema + Custom Domain Mapping",
      staff: "Unlimited Staff & Teachers",
      support: "Dedicated Enterprise Account Manager",
      trialLink: "/contact?plan=enterprise",
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-indigo-950 antialiased selection:bg-emerald-100 selection:text-emerald-800">
      
      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-24 md:py-40 px-4 md:px-8 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
        {/* Glow Aura Backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Impact Copy */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Superbadge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-xl shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-wider">
              <Sparkle className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
              <span>Multi-Tenant School & College ERP</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-indigo-950 font-bold leading-[1.08] tracking-tight">
              Supercharge School Operations with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Ultimate ERP</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Apana Campus brings enterprise-grade data isolation, dynamic staff management, and powerful analytics under a single, beautifully simple dashboard. Designed for schools that value security, speed, and efficiency.
            </p>

            {/* CTA Group Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary CTA with light shine effect */}
              <Link 
                href="/contact?action=demo" 
                className="relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white rounded-xl text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(79,70,229,0.35)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(79,70,229,0.5)] hover:translate-y-[-1px] group overflow-hidden"
              >
                <span className="relative z-10">Launch Your Campus (Free 14-Day Trial)</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                {/* Sliding shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
              </Link>

              {/* Secondary Walkthrough Trigger */}
              <Link 
                href="/testimonials" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/60 border border-slate-200 backdrop-blur-md text-slate-800 rounded-xl text-sm font-bold tracking-wide transition-all hover:bg-white hover:shadow-md"
              >
                <Play className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                <span>Watch 2-Min Walkthrough</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Recreated Metronic Dashboard Screenshot Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-indigo-200/20 blur-3xl rounded-full scale-75 -z-10" />

            {/* Interactive Mockup wrapper */}
            <div className="w-full bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-2xl font-sans text-[11px] sm:text-xs text-slate-800 transition-transform duration-500 hover:scale-[1.01]">
              
              {/* Dashboard Meta Bar */}
              <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="font-semibold text-slate-700 ml-2">DPS Noida Campus — Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Metronic Mode</span>
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-4 space-y-4 text-left">
                
                {/* 4 Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-2xl">
                    <span className="text-[10px] text-indigo-700 font-medium">Total Students</span>
                    <div className="text-xl font-bold text-indigo-950 mt-1">9</div>
                    <span className="text-[9px] text-indigo-500 font-medium">9 Active</span>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 p-3 rounded-2xl">
                    <span className="text-[10px] text-purple-700 font-medium">Staff / Teachers</span>
                    <div className="text-xl font-bold text-purple-950 mt-1">6</div>
                    <span className="text-[9px] text-purple-500 font-medium">Teaching Staff</span>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl">
                    <span className="text-[10px] text-emerald-700 font-medium">Attendance</span>
                    <div className="text-xl font-bold text-emerald-950 mt-1">95.4%</div>
                    <span className="text-[9px] text-emerald-500 font-medium">Today's Presence</span>
                  </div>
                  <div className="bg-rose-50 border border-rose-100 p-3 rounded-2xl">
                    <span className="text-[10px] text-rose-700 font-medium">Dues</span>
                    <div className="text-xl font-bold text-rose-950 mt-1">108</div>
                    <span className="text-[9px] text-rose-500 font-medium font-bold">Unpaid Invoices</span>
                  </div>
                </div>

                {/* Ledgers metrics matching user stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-indigo-950 text-white p-3.5 rounded-2xl">
                    <span className="text-[9px] text-indigo-200 block uppercase font-bold tracking-wider">Total Expected Fee</span>
                    <span className="text-lg font-bold text-white block mt-1">₹10,80,000</span>
                  </div>
                  <div className="bg-emerald-600 text-white p-3.5 rounded-2xl">
                    <span className="text-[9px] text-emerald-100 block uppercase font-bold tracking-wider">Total Collected</span>
                    <span className="text-lg font-bold text-white block mt-1">₹0</span>
                  </div>
                  <div className="bg-rose-500 text-white p-3.5 rounded-2xl">
                    <span className="text-[9px] text-rose-100 block uppercase font-bold tracking-wider">Total Dues Pending</span>
                    <span className="text-lg font-bold text-white block mt-1">₹10,80,000</span>
                  </div>
                </div>

                {/* Quick actions row */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-4 space-y-3">
                  <span className="font-semibold text-slate-800 block text-xs">Quick Action Workflows</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: "👤", label: "Admit Student" },
                      { icon: "📅", label: "Staff Attendance" },
                      { icon: "🏫", label: "Add Teacher" },
                      { icon: "📝", label: "Collect Fee" }
                    ].map((act, i) => (
                      <div key={i} className="p-2.5 bg-slate-50 hover:bg-indigo-50 border border-slate-100 rounded-xl text-center space-y-1.5 transition-all cursor-pointer">
                        <span className="text-sm block">{act.icon}</span>
                        <span className="text-[8px] font-bold text-slate-700 block truncate">{act.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SOCIAL PROOF KEY METRICS TICKER */}
      <section className="bg-indigo-950 py-8 border-y border-indigo-900 overflow-hidden relative">
        {/* Infinite looping metrics */}
        <div className="w-full flex">
          <div className="flex gap-16 shrink-0 animate-infinite-scroll min-w-full justify-around items-center text-xs font-semibold tracking-wider text-indigo-200 uppercase">
            <span className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              100% Schema Isolation Safeguards
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Sub-500ms Database Query Speeds
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              99.99% Live Application Uptime
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              Instant Subdomain Provisioning
            </span>
          </div>
          {/* Loop twin */}
          <div className="flex gap-16 shrink-0 animate-infinite-scroll min-w-full justify-around items-center text-xs font-semibold tracking-wider text-indigo-200 uppercase">
            <span className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              100% Schema Isolation Safeguards
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Sub-500ms Database Query Speeds
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              99.99% Live Application Uptime
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              Instant Subdomain Provisioning
            </span>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PORTAL TABS SHOWCASE */}
      <PortalTabs />

      {/* 5. HOW IT WORKS (3-Step Simple Provisioning) */}
      <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#FAF9F6] to-white font-sans border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* Title */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              Onboarding Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
              Get Up & Running In 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              We spent months streamlining school onboarding. No complex server installations or manual query databases required.
            </p>
          </div>

          {/* 3 Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto text-left">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 relative hover:shadow-md transition-shadow">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-serif text-lg">
                1
              </span>
              <h3 className="font-serif text-lg font-bold text-indigo-950">
                Claim Subdomain
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Fill basic administrative profiles, declare student capacities, and instantly claim your sub-domain (e.g. `dps.apanacampus.com`).
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 relative hover:shadow-md transition-shadow">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-serif text-lg">
                2
              </span>
              <h3 className="font-serif text-lg font-bold text-indigo-950">
                Automated Sandbox
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Our backend automatically spawns a dedicated database schema namespace, seeds default professions, and creates your Super-Admin secure credentials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 relative hover:shadow-md transition-shadow">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold font-serif text-lg">
                3
              </span>
              <h3 className="font-serif text-lg font-bold text-indigo-950">
                Invite & Run
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Import teachers, students, and parent directories via our robust bulk Excel uploader, and begin tracking fees and timetables instantly.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TECH HIGHLIGHT: DATABASE ISOLATION COMPONENT */}
      <SchemaIsolation />

      {/* 7. INTERACTIVE ROI CALCULATOR COMPONENT */}
      <RoiCalculator />

      {/* 8. TIERED PRICING PLANS */}
      <section id="pricing" className="py-24 bg-white border-y border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* title */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              Pricing Options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
              Flexible Tiered Licensing Plans
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              Choose the licensing model that fits your institutional scale. Upgrade or downgrade schemas at any time.
            </p>

            {/* Monthly/Yearly toggle switch */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <span className={`text-xs font-bold transition-colors ${!isYearly ? 'text-indigo-600' : 'text-slate-400'}`}>Monthly Billing</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 bg-slate-200 hover:bg-slate-300 rounded-full relative p-1 transition-colors flex items-center"
              >
                <div className={`w-4.5 h-4.5 bg-indigo-600 rounded-full transition-transform transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-xs font-bold transition-colors ${isYearly ? 'text-indigo-600' : 'text-slate-400'} flex items-center gap-1.5`}>
                Yearly Billing
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[9px] font-extrabold uppercase">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between gap-8 text-left relative transition-all duration-300 ${
                  plan.isPopular 
                    ? "border-indigo-600 shadow-xl shadow-indigo-600/5 scale-[1.02]" 
                    : "border-slate-200/80 hover:shadow-md"
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <span className="absolute top-[-14px] left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white rounded-full text-[9px] font-extrabold uppercase tracking-widest">
                    RECOMMENDED PLAN
                  </span>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-indigo-950">{plan.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{plan.desc}</p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-slate-100">
                    {typeof plan.monthlyPrice === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-4xl font-extrabold text-indigo-950">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">/ student / mo</span>
                      </div>
                    ) : (
                      <span className="font-serif text-3xl font-extrabold text-indigo-950 block">Custom Pricing</span>
                    )}
                  </div>

                  {/* Feature Lists */}
                  <div className="space-y-3.5 text-xs text-slate-700 font-medium">
                    <div className="flex gap-2.5 items-center">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.students}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.schema}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.staff}</span>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.support}</span>
                    </div>
                  </div>
                </div>

                {/* Plan Primary CTA Button */}
                <Link 
                  href={plan.trialLink}
                  className={`w-full py-4 rounded-xl text-xs font-bold text-center transition-all ${
                    plan.isPopular 
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20" 
                      : "bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800"
                  }`}
                >
                  {plan.monthlyPrice === 'Custom' ? "Contact Sales Desk" : "Start Free Trial"}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (Searchable Categorized Accordion) */}
      <section id="faq" className="py-24 bg-[#FAF9F6] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          
          {/* title */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
              Support Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              Everything you need to know about our isolated school ERP database schema, bulk excel imports, and licensing.
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

    </div>
  );
}
