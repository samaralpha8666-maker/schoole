"use client";

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export function RoiCalculator() {
  const [students, setStudents] = useState<number>(800);
  const [hoursSpent, setHoursSpent] = useState<number>(15);

  // Calculations
  // 1. Admin Hours Saved per month: 85% of weekly hours converted to monthly
  const monthlyHoursSaved = Math.round(hoursSpent * 4.33 * 0.85);
  
  // 2. Revenue Leaks Stopped per month: 
  // Let's assume an average fee leak of ₹120 per student annually from manual follow-ups, alerts, and pending trace, 
  // scaled by how many hours they spent struggling with billing manually.
  const billingLeakageStopped = Math.round(students * 15 * (hoursSpent / 10) * 0.7);

  // Formatting currency helper (INR Indian Rupees representation)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAF9F6] border-b border-shade-dark/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-accent-lime border border-accent-green/20 rounded-full text-accent-green text-xs font-semibold uppercase tracking-wider">
            ROI & Efficiency Tool
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-dark tracking-wide font-normal">
            Calculate Your Time & Financial Savings
          </h2>
          <p className="text-text-body text-base sm:text-lg font-light leading-relaxed">
            Drag the sliders below based on your school&apos;s current operations to see how Apana Campus immediately pays for itself.
          </p>
        </div>

        {/* Calculator Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Sliders Control Panel */}
          <div className="lg:col-span-7 bg-white border border-shade-dark/10 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-none">
            <div className="space-y-8">
              
              {/* Slider 1: Students */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-base-dark flex items-center gap-2">
                    <span className="w-5 h-5 bg-accent-lime text-accent-green rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                    Number of Students
                  </label>
                  <span className="px-3 py-1 bg-[#F5F2EB] border border-shade-dark/10 text-base-dark font-bold tracking-wider uppercase text-[10px] rounded-full">
                    {students} Students
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50"
                  value={students}
                  onChange={(e) => setStudents(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F5F2EB] rounded-lg appearance-none cursor-pointer accent-accent-green focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-text-body/60 font-semibold px-1 uppercase tracking-wider">
                  <span>100 Academy</span>
                  <span>1,500 Medium School</span>
                  <span>5,000 Large Campus</span>
                </div>
              </div>

              {/* Slider 2: Manual hours spent */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-base-dark flex items-center gap-2">
                    <span className="w-5 h-5 bg-accent-lime text-accent-green rounded-full flex items-center justify-center text-[10px] font-bold">2</span>
                    Hours Spent Weekly on Manual Tasks
                  </label>
                  <span className="px-3 py-1 bg-[#F5F2EB] border border-shade-dark/10 text-base-dark font-bold tracking-wider uppercase text-[10px] rounded-full">
                    {hoursSpent} Hours/Week
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="40" 
                  step="1"
                  value={hoursSpent}
                  onChange={(e) => setHoursSpent(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#F5F2EB] rounded-lg appearance-none cursor-pointer accent-accent-green focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-text-body/60 font-semibold px-1 uppercase tracking-wider">
                  <span>2 hrs (Basic scheduling)</span>
                  <span>20 hrs (Manual bills & follow-ups)</span>
                  <span>40 hrs (Full-time manual admin stress)</span>
                </div>
              </div>

            </div>

            {/* Explainer badge */}
            <div className="p-4 bg-[#F5F2EB] border border-shade-dark/10 rounded-2xl flex items-start gap-3 mt-4">
              <CheckCircle className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <p className="text-[11px] sm:text-xs text-text-body leading-relaxed font-light">
                Apana Campus automates database scheduling, seeds reports, executes automated WhatsApp alerts for dues, and enables isolated self-service portals to cut administrative friction.
              </p>
            </div>
          </div>

          {/* ROI Results Panel */}
          <div className="lg:col-span-5 bg-accent-green text-base-cream rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-none relative overflow-hidden">
            {/* Background Sage/Lime light aura */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-lime/10 blur-3xl rounded-full -z-0" />
            
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest text-accent-lime bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Sparkles className="w-3 h-3 text-accent-lime animate-pulse" />
                ESTIMATED MONTHLY ROI
              </span>

              {/* Hours Saved Display */}
              <div className="space-y-1">
                <span className="text-xs text-base-cream/80 font-bold block uppercase tracking-widest">ADMIN WORKTIME SAVED</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-serif font-normal text-white tracking-wide">
                    {monthlyHoursSaved}
                  </span>
                  <span className="text-lg font-serif font-light text-accent-lime">hours / mo</span>
                </div>
                <span className="text-[10px] text-base-cream/70 block leading-relaxed font-light">equivalent to recovering {Math.round(monthlyHoursSaved / 8)} full admin workdays every single month.</span>
              </div>

              <div className="h-px bg-white/10" />

              {/* Revenue Leakage Stopped Display */}
              <div className="space-y-1">
                <span className="text-xs text-base-cream/80 font-bold block uppercase tracking-widest">REVENUE LEAKS PLUGGED</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-serif font-normal text-accent-sand tracking-wide">
                    {formatCurrency(billingLeakageStopped)}
                  </span>
                  <span className="text-xs font-bold text-base-cream/80 uppercase tracking-widest ml-1">/ month</span>
                </div>
                <span className="text-[10px] text-base-cream/70 block leading-relaxed font-light">through automated alerts, parent reminders, and credit leak closures.</span>
              </div>

            </div>

            {/* Primary CTA */}
            <div className="space-y-4 pt-4 relative z-10">
              <Link 
                href="/contact?action=demo" 
                className="w-full py-4 bg-[#FAF9F6] text-accent-green hover:bg-[#FAF9F6]/90 hover:text-base-dark font-bold text-xs rounded-full tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all hover:translate-y-[-1px] group font-sans shadow-none"
              >
                Claim Your Free Sandbox Trial
                <ArrowRight className="w-4 h-4 text-accent-green group-hover:text-base-dark transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex justify-center items-center gap-1.5 text-[9px] text-[#FAF9F6]/75 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-lime" />
                No Credit Card Required • Instant Sandbox Provisioning
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

