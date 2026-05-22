"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkle, ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const [isYearly, setIsYearly] = useState<boolean>(true);

  const pricingPlans = [
    {
      name: "🌿 Starter Plan",
      desc: "Perfect for small academies, coaching classes, or play schools starting their digital transformation.",
      monthlyPrice: 29,
      yearlyPrice: 23,
      students: "Up to 200 Students",
      schema: "Shared Database Schema",
      staff: "Up to 15 Staff members",
      support: "Email Support",
      trialLink: "/contact?plan=starter",
      isPopular: false
    },
    {
      name: "🚀 Growth Plan",
      desc: "Ideal for a single large school or college seeking complete data security and high-speed database cores.",
      monthlyPrice: 79,
      yearlyPrice: 63,
      students: "Unlimited Students",
      schema: "Dedicated Private PostgreSQL Schema",
      staff: "Unlimited Staff & Teachers",
      support: "24/7 Priority Support",
      trialLink: "/contact?plan=growth",
      isPopular: true
    },
    {
      name: "💎 Enterprise Plan",
      desc: "Best for school networks, college chains, or franchise universities needing multi-campus ledgers.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      students: "Unlimited Students",
      schema: "Private Schema + Custom Domain Mapping",
      staff: "Unlimited Staff & Teachers",
      support: "Dedicated Account Manager",
      trialLink: "/contact?plan=enterprise",
      isPopular: false
    }
  ];

  const agreements = [
    "Absolute Database Isolation: Your institution's data is housed in a dedicated schema, isolated from other tenants with enterprise-grade encryption.",
    "Uptime Guarantee: We guarantee 99.9% application uptime, backed by multi-region high-availability server clusters on secure cloud networks.",
    "Free Data Portability: You always own your database. You can export complete student rosters and academic transcripts in standard formats anytime.",
    "Priority Human Support: No generic bots. Get direct phone support and dedicated WhatsApp group access with senior engineers.",
    "Continuous Seamless Updates: New security patches and feature releases are deployed automatically without interrupting campus hours.",
    "Role-Based Audit Logs: Track every fee transaction, database edit, and grade change with automated, unmodifiable administrative audit logs."
  ];

  return (
    <div className="bg-[#FAF9F6] text-indigo-950 min-h-screen py-32 md:py-40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkle className="w-3 h-3 text-indigo-600" />
            LICENSING PRICING
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
            Flexible Tiered Pricing
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-light">
            Select the plan that fits your campus scale. All plans feature robust databases, visual dashboard aesthetics, and secure backups.
          </p>

          {/* Monthly/Yearly toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
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
        </section>

        {/* Pricing Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch text-left">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between gap-8 relative transition-all duration-300 ${
                plan.isPopular 
                  ? "border-indigo-600 shadow-xl shadow-indigo-600/5 scale-[1.02]" 
                  : "border-slate-200/80 hover:shadow-md"
              }`}
            >
              {/* Recommended badge */}
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
                <div className="py-3 border-y border-slate-100">
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

                {/* Feature List */}
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

              <Link 
                href={plan.trialLink}
                className={`w-full py-4 rounded-xl text-xs font-bold text-center transition-all ${
                  plan.isPopular 
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20" 
                    : "bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800"
                }`}
              >
                {plan.monthlyPrice === 'Custom' ? "Contact Sales Desk" : "Claim 14-Day Sandbox Trial"}
              </Link>
            </div>
          ))}
        </section>

        {/* SLA Assurances */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-8 max-w-4xl mx-auto space-y-8 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-indigo-950">Apana Campus Service Level Assurances</h2>
              <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Enterprise Reliability Protocols</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-650 leading-relaxed font-light">
            {agreements.map((val, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
