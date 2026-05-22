"use client";

import React from "react";
import Link from "next/link";
import { Sparkle, ArrowRight, Database, Compass, UserCheck, Flame } from "lucide-react";

export default function ServicesPage() {
  const steps = [
    {
      day: "Day 01 - 02",
      title: "🔎 Custom Roster Audits",
      desc: "Our senior implementation engineers review your legacy student records, pending tuition books, and current staff registers to ensure clean Excel formatting.",
      icon: <Compass className="w-5 h-5" />
    },
    {
      day: "Day 03 - 04",
      title: "⚡ Automated Schema Provisioning",
      desc: "The system allocates a dedicated, private logical schema vault inside our secure high-availability database cluster, claiming your unique subdomain mapping.",
      icon: <Database className="w-5 h-5" />
    },
    {
      day: "Day 05 - 07",
      title: "🏫 Staff Training Sandbox",
      desc: "We generate separate sandbox logins for your coordinators and classroom teachers, providing video tutorials and live Q&A training webinars.",
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      day: "Day 08 - 10",
      title: "🚀 Live Launch & Priority Support",
      desc: "We run a final check on bulk Excel imports, configure online UPI fee gateways, and establish a direct WhatsApp Support Group with developers.",
      icon: <Flame className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-base-dark min-h-screen py-32 md:py-40 font-sans">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest text-accent-green bg-accent-lime border border-accent-green/20 px-3 py-1 rounded-full">
            <Sparkle className="w-3 h-3 text-accent-green" />
            ONBOARDING PROCESS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-base-dark tracking-wide font-normal">
            Our 10-Day Structured Deployment
          </h1>
          <p className="text-sm md:text-base text-text-body max-w-xl mx-auto font-light leading-relaxed">
            We guide you step-by-step from audit sheets to a live, secure database environment with 24/7 senior engineer support.
          </p>
        </section>

        {/* Timeline Grid */}
        <section className="space-y-12 max-w-3xl mx-auto text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-[32px] p-6 sm:p-8 border border-shade-dark/10 shadow-none flex flex-col sm:flex-row gap-6 items-start hover:border-accent-green/30 transition-all duration-200 relative">
              <div className="p-3 bg-accent-lime text-accent-green rounded-full shrink-0">
                {step.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[9px] uppercase font-bold tracking-widest text-accent-green bg-accent-lime px-2.5 py-1 rounded-full border border-accent-green/15 inline-block w-fit">
                  {step.day}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-normal text-base-dark mt-2 tracking-wide leading-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Call to action */}
        <section className="bg-accent-green text-base-cream rounded-[32px] p-8 max-w-3xl mx-auto space-y-6 text-center relative overflow-hidden shadow-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/10 blur-2xl rounded-full" />
          <h2 className="font-serif text-2xl font-normal tracking-wide">Ready to digitize your campus operations?</h2>
          <p className="text-xs sm:text-sm text-base-cream/80 max-w-xl mx-auto font-light leading-relaxed">
            Claims are processed automatically with instant subdomain provisioning. Start your free Sandbox trial now.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?action=demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF9F6] text-accent-green hover:bg-[#FAF9F6]/90 hover:text-base-dark text-[10px] tracking-widest uppercase font-bold rounded-full transition-all shadow-none group"
            >
              Start Free Setup Verification
              <ArrowRight className="w-4 h-4 text-accent-green group-hover:text-base-dark group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

