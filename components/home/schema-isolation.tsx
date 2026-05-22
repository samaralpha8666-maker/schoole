"use client";

import React from 'react';
import { 
  Lock, 
  ShieldAlert, 
  ShieldCheck, 
  Database, 
  Building,
  Server,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function SchemaIsolation() {
  return (
    <section id="security" className="py-24 bg-indigo-950 text-white relative overflow-hidden font-sans">
      {/* Dynamic Background Auras */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            ENTERPRISE SECURITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight">
            Why Schema-Level Isolation Matters
          </h2>
          <p className="text-indigo-200 text-base sm:text-lg font-light leading-relaxed">
            Most school management software packages place all institutional data in one giant table. We spent extra engineering hours to build separate, private vaults for every campus.
          </p>
        </div>

        {/* Visual Architecture Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Side A: Traditional Shared Database (The Vulnerable Way) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-8 relative">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-rose-500/10 text-rose-400 rounded-2xl w-fit">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  HIGH VULNERABILITY
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                  Traditional Shared Databases
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Standard competitors store records (admissions, grades, credit balances) of thousands of schools in **one single database table**.
                </p>
              </div>

              {/* Shared Table Mockup Graphic */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2 text-[10px] sm:text-[11px] font-mono text-slate-500">
                <div className="flex justify-between pb-1.5 border-b border-slate-800 text-slate-400 font-semibold">
                  <span>school_id</span>
                  <span>student_name</span>
                  <span>pending_fees</span>
                </div>
                <div className="flex justify-between text-rose-400/80">
                  <span>school_01</span>
                  <span>Aarav Sharma</span>
                  <span>₹12,400</span>
                </div>
                <div className="flex justify-between text-indigo-400/80">
                  <span>school_02</span>
                  <span>Rohan Singh</span>
                  <span>₹24,000</span>
                </div>
                <div className="flex justify-between text-amber-400/80">
                  <span>school_03</span>
                  <span>Ananya Sen</span>
                  <span>₹18,500</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-semibold">Risk of Leaks:</strong> A single missing `WHERE` filter clause in a query can instantly display one school's financial ledgers to a competing school.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-semibold">Index Degradation:</strong> As total records across India grow, query speeds choke due to massive shared indexing overheads.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-rose-400/90 font-bold bg-rose-500/5 border border-rose-500/10 p-3.5 rounded-xl">
              ⚠️ Vulnerable: One software developer error can leak your student, fee, or staff files to external domains.
            </div>
          </div>

          {/* Side B: Apana Campus Schema Isolation (The Secure Way) */}
          <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900/80 border border-indigo-700/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-8 relative shadow-lg">
            {/* emerald accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-xl rounded-full" />
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl w-fit shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  ENTERPRISE ISOLATION
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                  Apana Campus Schema Vaults
                </h3>
                <p className="text-xs text-indigo-200 leading-relaxed font-light">
                  We use **PostgreSQL Schema Isolation**. Each institution receives its own private database vault namespace within the system.
                </p>
              </div>

              {/* Schema isolated mock visual */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-slate-950 border border-indigo-500/20 p-2.5 rounded-xl space-y-1.5 shadow-sm">
                  <Building className="w-4 h-4 text-indigo-400 mx-auto" />
                  <span className="font-bold text-slate-300 block leading-none">dps_schema</span>
                  <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 rounded text-[8px] font-mono leading-none inline-block">Vault 1</span>
                </div>
                <div className="bg-slate-950 border border-emerald-500/20 p-2.5 rounded-xl space-y-1.5 shadow-sm">
                  <Building className="w-4 h-4 text-emerald-400 mx-auto" />
                  <span className="font-bold text-slate-300 block leading-none">dav_schema</span>
                  <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[8px] font-mono leading-none inline-block">Vault 2</span>
                </div>
                <div className="bg-slate-950 border border-indigo-500/20 p-2.5 rounded-xl space-y-1.5 shadow-sm opacity-60">
                  <Building className="w-4 h-4 text-indigo-400 mx-auto" />
                  <span className="font-bold text-slate-300 block leading-none">tagore_sch</span>
                  <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 rounded text-[8px] font-mono leading-none inline-block">Vault 3</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-indigo-200">
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-semibold">Zero Cross-Access:</strong> Separate connection policies mean one school's database queries can physically never touch another school's records.</p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-light"><strong className="text-white font-semibold">Blazing Speed:</strong> Connection pooling is isolated per tenant subdomain, maintaining sub-500ms API query runtimes.</p>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-emerald-300/90 font-bold bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl">
              🛡️ Private Vault: It is like having a fully key-locked private safe inside an enterprise bank vault.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
