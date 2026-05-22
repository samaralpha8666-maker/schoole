"use client";

import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Building, 
  Sparkles
} from 'lucide-react';

export function SchemaIsolation() {
  return (
    <section id="security" className="py-24 bg-base-dark text-base-cream relative overflow-hidden font-sans border-b border-shade-dark/10 scroll-mt-28">
      {/* Dynamic Background Auras */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-sand/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-lime/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest text-accent-lime bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <Sparkles className="w-3 h-3 text-accent-lime" />
            ENTERPRISE SECURITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-cream tracking-wide font-normal">
            Why Schema-Level Isolation Matters
          </h2>
          <p className="text-base-cream/80 text-base sm:text-lg font-light leading-relaxed">
            Most school management software packages place all institutional data in one giant table. We spent extra engineering hours to build separate, private vaults for every campus.
          </p>
        </div>

        {/* Visual Architecture Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Side A: Traditional Shared Database (The Vulnerable Way) */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-8 relative">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-accent-sand/15 text-accent-sand rounded-full w-fit">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-accent-sand/15 text-accent-sand border border-accent-sand/20 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  HIGH VULNERABILITY
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-base-cream font-normal tracking-wide">
                  Traditional Shared Databases
                </h3>
                <p className="text-xs text-[#FAF9F6]/60 leading-relaxed font-light font-sans">
                  Standard competitors store records (admissions, grades, credit balances) of thousands of schools in **one single database table**.
                </p>
              </div>

              {/* Shared Table Mockup Graphic */}
              <div className="bg-[#1C1A19] border border-white/10 rounded-2xl p-4 space-y-2 text-[10px] sm:text-[11px] font-mono text-[#FAF9F6]/40">
                <div className="flex justify-between pb-1.5 border-b border-white/10 text-[#FAF9F6]/60 font-bold uppercase tracking-wider">
                  <span>school_id</span>
                  <span>student_name</span>
                  <span>pending_fees</span>
                </div>
                <div className="flex justify-between text-accent-sand/80">
                  <span>school_01</span>
                  <span>Aarav Sharma</span>
                  <span>₹12,400</span>
                </div>
                <div className="flex justify-between text-[#FAF9F6]/60">
                  <span>school_02</span>
                  <span>Rohan Singh</span>
                  <span>₹24,000</span>
                </div>
                <div className="flex justify-between text-[#FAF9F6]/60">
                  <span>school_03</span>
                  <span>Ananya Sen</span>
                  <span>₹18,500</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-[#FAF9F6]/80 font-sans">
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sand mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-bold">Risk of Leaks:</strong> A single missing `WHERE` filter clause in a query can instantly display one school&apos;s financial ledgers to a competing school.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-sand mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-bold">Index Degradation:</strong> As total records across India grow, query speeds choke due to massive shared indexing overheads.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-accent-sand/90 font-bold bg-accent-sand/5 border border-accent-sand/10 p-3.5 rounded-xl">
              ⚠️ Vulnerable: One software developer error can leak your student, fee, or staff files to external domains.
            </div>
          </div>

          {/* Side B: Apana Campus Schema Isolation (The Secure Way) */}
          <div className="bg-accent-green/80 border border-accent-green/30 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-8 relative shadow-none">
            {/* emerald accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-lime/10 blur-xl rounded-full" />
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 text-accent-lime border border-white/10 rounded-full w-fit shadow-none">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-accent-lime text-accent-green border border-accent-green/20 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  ENTERPRISE ISOLATION
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-base-cream font-normal tracking-wide">
                  Apana Campus Schema Vaults
                </h3>
                <p className="text-xs text-base-cream/80 leading-relaxed font-light font-sans">
                  We use **PostgreSQL Schema Isolation**. Each institution receives its own private database vault namespace within the system.
                </p>
              </div>

              {/* Schema isolated mock visual */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-base-dark border border-white/10 p-2.5 rounded-xl space-y-1.5 shadow-none">
                  <Building className="w-4 h-4 text-accent-lime mx-auto" />
                  <span className="font-bold text-base-cream block leading-none">dps_schema</span>
                  <span className="px-1.5 py-0.5 bg-accent-green text-accent-lime rounded text-[8px] font-mono leading-none inline-block">Vault 1</span>
                </div>
                <div className="bg-base-dark border border-white/10 p-2.5 rounded-xl space-y-1.5 shadow-none">
                  <Building className="w-4 h-4 text-accent-sand mx-auto" />
                  <span className="font-bold text-base-cream block leading-none">dav_schema</span>
                  <span className="px-1.5 py-0.5 bg-accent-green text-accent-sand rounded text-[8px] font-mono leading-none inline-block">Vault 2</span>
                </div>
                <div className="bg-base-dark border border-white/10 p-2.5 rounded-xl space-y-1.5 shadow-none opacity-60">
                  <Building className="w-4 h-4 text-base-cream/40 mx-auto" />
                  <span className="font-bold text-base-cream/60 block leading-none">tagore_sch</span>
                  <span className="px-1.5 py-0.5 bg-accent-green text-[#FAF9F6]/40 rounded text-[8px] font-mono leading-none inline-block">Vault 3</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-base-cream/80 font-sans">
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-bold">Zero Cross-Access:</strong> Separate connection policies mean one school&apos;s database queries can physically never touch another school&apos;s records.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-bold">Blazing Speed:</strong> Connection pooling is isolated per tenant subdomain, maintaining sub-500ms API query runtimes.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-accent-lime/90 font-bold bg-white/10 border border-white/10 p-3.5 rounded-xl">
              🛡️ Private Vault: It is like having a fully key-locked private safe inside an enterprise bank vault.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

