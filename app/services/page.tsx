"use client";

import React from "react";
import Link from "next/link";
import { Sparkle, ArrowRight, ShieldCheck, Database, CalendarClock, Compass, UserCheck, Flame } from "lucide-react";

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
    <div className="bg-[#FAF9F6] text-indigo-950 min-h-screen py-32 md:py-40 font-sans">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkle className="w-3 h-3 text-indigo-600" />
            ONBOARDING PROCESS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
            Our 10-Day Structured Deployment
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-light">
            We guide you step-by-step from audit sheets to a live, secure database environment with 24/7 senior engineer support.
          </p>
        </section>

        {/* Timeline Grid */}
        <section className="space-y-12 max-w-3xl mx-auto text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow relative">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shrink-0">
                {step.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {step.day}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-indigo-950 mt-1">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Call to action */}
        <section className="bg-indigo-950 text-white rounded-3xl p-8 max-w-3xl mx-auto space-y-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full" />
          <h2 className="font-serif text-2xl font-bold">Ready to digitize your campus operations?</h2>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-xl mx-auto font-light leading-relaxed">
            Claims are processed automatically with instant subdomain provisioning. Start your 14-day free trial now.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?action=demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-600 hover:to-emerald-600 text-white text-xs font-bold rounded-xl shadow-md transition-all hover:translate-y-[-1px] group"
            >
              Start Free Setup Verification
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
