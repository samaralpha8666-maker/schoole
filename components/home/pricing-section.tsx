'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingSection() {
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
    <section id="pricing" className="py-24 bg-base-cream border-y border-[#2B2927]/10 font-sans scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* title */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-4 py-1.5 bg-accent-lime/40 border border-accent-green/20 rounded-full text-accent-green text-[10px] font-bold uppercase tracking-widest">
            Pricing Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-dark font-normal tracking-tight">
            Flexible Tiered Licensing Plans
          </h2>
          <p className="text-shade-dark/80 text-base sm:text-lg font-light leading-relaxed">
            Choose the licensing model that fits your institutional scale. Upgrade or downgrade schemas at any time.
          </p>

          {/* Monthly/Yearly toggle switch */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${!isYearly ? 'text-accent-green' : 'text-slate-400'}`}>Monthly Billing</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 bg-[#E2EBD5] border border-[#2D5A27]/20 rounded-full relative p-1 transition-colors flex items-center"
              aria-label="Toggle Monthly/Yearly pricing"
            >
              <div className={`w-4.5 h-4.5 bg-accent-green rounded-full transition-transform transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isYearly ? 'text-accent-green' : 'text-slate-400'} flex items-center gap-1.5`}>
              Yearly Billing
              <span className="px-2 py-0.5 bg-accent-lime text-accent-green border border-accent-green/20 rounded text-[9px] font-extrabold uppercase tracking-wide">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`bg-[#F5F2EB] rounded-3xl p-8 border flex flex-col justify-between gap-8 text-left relative transition-all duration-300 ${
                plan.isPopular 
                  ? "border-accent-green bg-white shadow-sm scale-[1.02]" 
                  : "border-[#2B2927]/10 hover:shadow-sm"
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <span className="absolute top-[-14px] left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-green text-white rounded-full text-[9px] font-extrabold uppercase tracking-widest">
                  RECOMMENDED PLAN
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-base-dark">{plan.name}</h3>
                  <p className="text-xs text-shade-dark/70 leading-relaxed font-light">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="py-2 border-y border-[#2B2927]/10">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-extrabold text-base-dark">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-[10px] text-[#C7B198] font-bold uppercase tracking-wider">/ student / mo</span>
                    </div>
                  ) : (
                    <span className="font-serif text-3xl font-extrabold text-base-dark block">Custom Pricing</span>
                  )}
                </div>

                {/* Feature Lists */}
                <div className="space-y-3.5 text-xs text-shade-dark/80 font-medium">
                  <div className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{plan.students}</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{plan.schema}</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{plan.staff}</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    <span>{plan.support}</span>
                  </div>
                </div>
              </div>

              {/* Plan Primary CTA Button */}
              <Link 
                href={plan.trialLink}
                className={`w-full py-3.5 rounded-full text-[10px] font-bold text-center uppercase tracking-widest transition-all ${
                  plan.isPopular 
                    ? "bg-accent-green hover:bg-base-dark text-white" 
                    : "border border-base-dark text-base-dark hover:bg-base-dark hover:text-white"
                }`}
              >
                {plan.monthlyPrice === 'Custom' ? "Contact Sales Desk" : "Start Free Trial"}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
