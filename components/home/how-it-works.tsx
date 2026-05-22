'use client';

import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-base-cream font-sans border-t border-[#2B2927]/10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-accent-lime/40 border border-accent-green/20 rounded-full text-accent-green text-[10px] font-bold uppercase tracking-widest">
            Onboarding Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-dark font-normal tracking-tight">
            Get Up & Running In 3 Simple Steps
          </h2>
          <p className="text-shade-dark/80 text-base sm:text-lg font-light leading-relaxed">
            We spent months streamlining school onboarding. No complex server installations or manual query databases required.
          </p>
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto text-left">
          
          {/* Step 1 */}
          <div className="bg-[#F5F2EB] border border-[#2B2927]/10 p-8 rounded-3xl space-y-4 relative hover:shadow-sm transition-shadow">
            <span className="w-10 h-10 rounded-full bg-accent-lime text-accent-green flex items-center justify-center font-bold font-serif text-base">
              1
            </span>
            <h3 className="font-serif text-lg font-bold text-base-dark">
              Claim Subdomain
            </h3>
            <p className="text-xs text-shade-dark/70 leading-relaxed font-light">
              Fill basic administrative profiles, declare student capacities, and instantly claim your sub-domain (e.g. `dps.apanacampus.com`).
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F5F2EB] border border-[#2B2927]/10 p-8 rounded-3xl space-y-4 relative hover:shadow-sm transition-shadow">
            <span className="w-10 h-10 rounded-full bg-accent-lime text-accent-green flex items-center justify-center font-bold font-serif text-base">
              2
            </span>
            <h3 className="font-serif text-lg font-bold text-base-dark">
              Automated Sandbox
            </h3>
            <p className="text-xs text-shade-dark/70 leading-relaxed font-light">
              Our backend automatically spawns a dedicated database schema namespace, seeds default professions, and creates your Super-Admin secure credentials.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F5F2EB] border border-[#2B2927]/10 p-8 rounded-3xl space-y-4 relative hover:shadow-sm transition-shadow">
            <span className="w-10 h-10 rounded-full bg-accent-lime text-accent-green flex items-center justify-center font-bold font-serif text-base">
              3
            </span>
            <h3 className="font-serif text-lg font-bold text-base-dark">
              Invite & Run
            </h3>
            <p className="text-xs text-shade-dark/70 leading-relaxed font-light">
              Import teachers, students, and parent directories via our robust bulk Excel uploader, and begin tracking fees and timetables instantly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
