"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export function PortalTabs() {
  const [activeTab, setActiveTab] = useState<'admin' | 'teacher' | 'parent'>('admin');

  const portals = {
    admin: {
      role: "🏢 For School Owners & Directors",
      badge: "Super-Admin Control",
      tagline: "Get a bird's-eye view of your campus's financial health and administrative operations.",
      features: [
        "Dynamic Fee Tracking: Automated monthly collections and fee status tracking.",
        "Schema Security: Completely isolated PostgreSQL schema ensures school records are completely confidential.",
        "Resource Optimization: Track real-time absentees and manage substitute teachers instantly.",
        "Comprehensive Reports: Generate custom academic ledgers and HR payroll statements in one click."
      ],
      color: "bg-accent-green text-accent-green border-accent-green",
      mockup: (
        <div className="w-full bg-white border border-shade-dark/10 rounded-[32px] overflow-hidden shadow-none p-1.5 animate-fade-in font-sans text-[11px] sm:text-xs text-text-body">
          {/* Dashboard Header Bar */}
          <div className="bg-[#F5F2EB] px-4 py-3 border-b border-shade-dark/10 flex items-center justify-between rounded-t-[26px]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/10" />
              <span className="font-bold text-base-dark ml-2">DPS Noida Campus — Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-accent-lime text-accent-green border border-accent-green/20 rounded-full text-[9px] font-bold tracking-wider uppercase">100% SECURE SCHEMA</span>
            </div>
          </div>

          {/* Dashboard Grid Container */}
          <div className="p-4 space-y-4">
            
            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#FAF9F6] border border-shade-dark/10 p-3 rounded-2xl">
                <span className="text-[10px] text-accent-green font-bold tracking-wider uppercase">Total Students</span>
                <div className="text-xl font-bold text-base-dark mt-1 font-serif">9</div>
                <span className="text-[9px] text-text-body/75 font-medium">9 Active</span>
              </div>
              <div className="bg-[#F5F2EB] border border-shade-dark/10 p-3 rounded-2xl">
                <span className="text-[10px] text-text-body font-bold tracking-wider uppercase font-sans">Staff / Teachers</span>
                <div className="text-xl font-bold text-base-dark mt-1 font-serif">6</div>
                <span className="text-[9px] text-text-body/75 font-medium">Teaching Staff</span>
              </div>
              <div className="bg-[#FAF9F6] border border-shade-dark/10 p-3 rounded-2xl">
                <span className="text-[10px] text-accent-green font-bold tracking-wider uppercase">Today&apos;s Attendance</span>
                <div className="text-xl font-bold text-base-dark mt-1 font-serif">95.4%</div>
                <span className="text-[9px] text-text-body/75 font-medium">Student Presence</span>
              </div>
              <div className="bg-[#F5F2EB] border border-shade-dark/10 p-3 rounded-2xl">
                <span className="text-[10px] text-text-body font-bold tracking-wider uppercase font-sans">Unpaid Invoices</span>
                <div className="text-xl font-bold text-base-dark mt-1 font-serif">108</div>
                <span className="text-[9px] text-text-body/75 font-medium">Dues Count</span>
              </div>
            </div>

            {/* Financial Ledger Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-base-dark text-base-cream p-3 rounded-2xl">
                <span className="text-[9px] text-base-cream/70 uppercase tracking-widest font-bold">Total Expected Fee</span>
                <div className="text-base font-bold text-white mt-1 font-serif">₹10,80,000</div>
              </div>
              <div className="bg-accent-green text-white p-3 rounded-2xl">
                <span className="text-[9px] text-white/70 uppercase tracking-widest font-bold">Total Collected</span>
                <div className="text-base font-bold text-white mt-1 font-serif">₹0</div>
              </div>
              <div className="bg-accent-sand text-base-dark p-3 rounded-2xl">
                <span className="text-[9px] text-base-dark/70 uppercase tracking-widest font-bold">Total Dues Pending</span>
                <div className="text-base font-bold text-base-dark mt-1 font-serif">₹10,80,000</div>
              </div>
            </div>

            {/* Attendance Curve Mock chart */}
            <div className="bg-[#FAF9F6] border border-shade-dark/10 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-base-dark font-sans">Student Attendance Trend (Last 7 Days)</span>
                <span className="text-[10px] text-accent-green font-bold tracking-widest uppercase">Goal: &gt;95%</span>
              </div>
              <div className="h-28 flex items-end justify-between gap-1 pt-2 border-b border-shade-dark/10">
                {[75, 80, 72, 85, 92, 94, 95.4].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div 
                      className="w-full bg-accent-green rounded-t-lg transition-all duration-500 group-hover:bg-accent-sand"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[8px] text-text-body/60 uppercase font-bold tracking-wider">Day {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      )
    },
    teacher: {
      role: "👩‍🏫 For Teachers & Academic Staff",
      badge: "Classroom Orchestrator",
      tagline: "Mark attendance, log student grades, and message parents with zero administrative noise.",
      features: [
        "One-Tap Roster Attendance: Fill daily rosters in under 10 seconds via mobile.",
        "Interactive Marks Portal: Enter grades directly into the centralized academic sheets.",
        "Auto Timetable Sync: Instant daily schedules, class bundles, and replacement allocations.",
        "Parent Broadcaster: Push homework tasks and notifications to specific class rooms."
      ],
      color: "bg-accent-green text-accent-green border-accent-green",
      mockup: (
        <div className="w-full bg-white border border-shade-dark/10 rounded-[32px] overflow-hidden shadow-none p-1.5 animate-fade-in font-sans text-[11px] sm:text-xs text-text-body">
          {/* Dashboard Header Bar */}
          <div className="bg-[#F5F2EB] px-4 py-3 border-b border-shade-dark/10 flex items-center justify-between rounded-t-[26px]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-shade-dark/10" />
              <span className="font-bold text-base-dark ml-2">Class 10-A Portal — Mrs. Sharma</span>
            </div>
            <span className="px-2.5 py-0.5 bg-accent-lime text-accent-green border border-accent-green/20 rounded-full text-[9px] font-bold tracking-wider uppercase">TEACHER MODE</span>
          </div>

          {/* Dashboard Grid Container */}
          <div className="p-4 space-y-4">
            
            {/* Quick action actions */}
            <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
              <span className="px-3 py-1 bg-accent-green text-white rounded-full font-bold text-[9px] tracking-widest uppercase whitespace-nowrap">Mark Attendance</span>
              <span className="px-3 py-1 bg-white border border-shade-dark/10 text-text-body rounded-full font-bold text-[9px] tracking-widest uppercase whitespace-nowrap">Publish Homework</span>
              <span className="px-3 py-1 bg-white border border-shade-dark/10 text-text-body rounded-full font-bold text-[9px] tracking-widest uppercase whitespace-nowrap">Enter Marks</span>
            </div>

            {/* Attendance Roster Checklist */}
            <div className="bg-white border border-shade-dark/10 rounded-2xl p-4 space-y-3">
              <span className="font-bold text-base-dark">Daily Attendance Roll — Class 10-A</span>
              <div className="space-y-2">
                {[
                  { roll: "Roll #1", name: "Aarav Sharma", status: "Present" },
                  { roll: "Roll #2", name: "Ananya Goel", status: "Present" },
                  { roll: "Roll #3", name: "Kabir Mehta", status: "Absent" },
                  { roll: "Roll #4", name: "Riya Verma", status: "Present" },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-[#FAF9F6] border border-shade-dark/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-text-body/50 font-bold uppercase tracking-wider text-[9px]">{s.roll}</span>
                      <span className="font-bold text-base-dark font-sans">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase ${s.status === 'Present' ? 'bg-accent-lime text-accent-green' : 'bg-[#F5F2EB] text-text-body/60'}`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet notices */}
            <div className="bg-accent-sand/20 border border-accent-sand/50 p-3 rounded-2xl flex gap-2">
              <Sparkles className="w-5 h-5 text-accent-green shrink-0" />
              <div>
                <span className="font-bold text-base-dark block">Instant Parent Notifications Enabled</span>
                <span className="text-[10px] text-text-body">Submitting attendance immediately triggers SMS/email alerts to parent mobile phones.</span>
              </div>
            </div>
            
          </div>
        </div>
      )
    },
    parent: {
      role: "👪 For Parents & Students",
      badge: "Real-time Connectivity",
      tagline: "Pay school fees online, track bus routes, and view report cards directly on your smartphone.",
      features: [
        "Unified Payment Gateway: Pay semester fees online via UPI or Credit Card in one tap.",
        "Live Bus Geo-Tracking: Know exactly when the school bus will reach your stop.",
        "Instant Notices & Circulars: View digital circulars, exam dates, and teacher announcements.",
        "Digital Library Log: See which library books are issued and due return dates."
      ],
      color: "bg-accent-green text-accent-green border-accent-green",
      mockup: (
        <div className="w-full bg-white border border-shade-dark/10 rounded-[32px] overflow-hidden shadow-none p-1.5 animate-fade-in font-sans text-[11px] sm:text-xs text-text-body">
          {/* Mobile Shell Bar */}
          <div className="bg-base-dark px-4 py-3 text-white flex items-center justify-between rounded-t-[26px]">
            <span className="font-bold text-base-cream uppercase tracking-widest text-[9px]">Apana Campus — Parent Portal</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              <span className="text-[9px] text-[#FAF9F6]/80 font-bold uppercase tracking-wider">Rahul&apos;s Profile</span>
            </div>
          </div>

          {/* Portal Body */}
          <div className="p-4 space-y-4">
            
            {/* Quick student details widget */}
            <div className="bg-[#FAF9F6] border border-shade-dark/10 rounded-2xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-lime text-accent-green flex items-center justify-center font-bold font-serif text-sm">
                R
              </div>
              <div>
                <span className="font-bold text-base-dark">Rahul Verma</span>
                <span className="text-[10px] text-text-body/60 block">Class 10-A • Roll #4</span>
              </div>
            </div>

            {/* Fee Due Payment Box */}
            <div className="bg-[#F5F2EB] border border-shade-dark/10 p-4 rounded-2xl space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-accent-green text-[9px] font-bold tracking-widest uppercase">DUE BILLING</span>
                  <span className="font-serif text-lg font-bold text-base-dark block mt-0.5">₹15,400</span>
                  <span className="text-[9px] text-text-body/80">Term 2 Examination & Library Fees</span>
                </div>
                <span className="px-2 py-0.5 bg-accent-sand text-base-dark rounded-full text-[9px] font-bold tracking-widest uppercase">DUE MAY 30</span>
              </div>
              <button className="w-full py-2.5 bg-accent-green hover:bg-base-dark text-white font-bold rounded-full text-[9px] tracking-widest uppercase transition-all shadow-none">
                Pay School Fees Online
              </button>
            </div>

            {/* GPS Transport bus widget */}
            <div className="bg-accent-lime/40 border border-accent-lime text-base-dark p-3 rounded-2xl flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-bold text-base-dark block">School Bus Route #4</span>
                <span className="text-[10px] text-text-body">Bus is 1.2 km away from your pick-up spot.</span>
              </div>
              <span className="px-2 py-0.5 bg-accent-lime text-accent-green border border-accent-green/20 rounded-full text-[9px] font-bold uppercase tracking-wider animate-pulse">ACTIVE GPS</span>
            </div>
            
          </div>
        </div>
      )
    }
  };

  return (
    <section id="features" className="py-24 bg-base-cream border-y border-shade-dark/10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-accent-lime border border-accent-green/20 rounded-full text-accent-green text-xs font-semibold uppercase tracking-wider">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-dark tracking-wide font-normal">
            One Core Database. Four Dedicated Login Portals.
          </h2>
          <p className="text-text-body text-base sm:text-lg font-light leading-relaxed">
            Apana Campus partitions interfaces based on who is logging in, keeping your workflows completely clutter-free and highly optimized.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex justify-center border-b border-shade-dark/10 max-w-xl mx-auto">
          <div className="flex gap-2 sm:gap-6">
            {(Object.keys(portals) as Array<keyof typeof portals>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-4 px-2 sm:px-6 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all border-b-2 ${
                  activeTab === key
                    ? "border-accent-green text-accent-green"
                    : "border-transparent text-[#2B2927]/60 hover:text-accent-green"
                }`}
              >
                {key === 'admin' && "🏢 School Management"}
                {key === 'teacher' && "👩‍🏫 Teachers & Staff"}
                {key === 'parent' && "👪 Parents & Students"}
              </button>
            ))}
          </div>
        </div>

        {/* Split Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portal Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-accent-lime border border-accent-green/20 rounded-full text-[10px] font-bold tracking-widest text-accent-green uppercase">
              {portals[activeTab].badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-base-dark leading-tight tracking-wide font-normal">
              {portals[activeTab].role}
            </h3>
            <p className="text-text-body text-sm leading-relaxed font-light">
              {portals[activeTab].tagline}
            </p>
            
            <div className="space-y-4 pt-2">
              {portals[activeTab].features.map((feat, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                  <span className="text-xs text-text-body leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/contact?action=demo" 
                className="btn-primary inline-flex items-center gap-2 shadow-none"
              >
                Request a Portal Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Mockup Showcase */}
          <div className="lg:col-span-7 relative">
            {/* Soft Organic Sand Glow Background */}
            <div className="absolute inset-0 bg-accent-sand/15 blur-3xl rounded-full scale-75 -z-10" />
            
            {portals[activeTab].mockup}
          </div>

        </div>

      </div>
    </section>
  );
}
