"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building, 
  Users, 
  BookOpen, 
  Lock, 
  TrendingUp, 
  CheckCircle, 
  FileText, 
  Calendar,
  AlertCircle,
  GraduationCap,
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
      color: "bg-indigo-600 text-indigo-600 border-indigo-600",
      mockup: (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl animate-fade-in font-sans text-[11px] sm:text-xs text-slate-800">
          {/* Dashboard Header Bar */}
          <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="font-semibold text-slate-700 ml-2">DPS Noida Campus — Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[9px] font-bold">100% SECURE SCHEMA</span>
            </div>
          </div>

          {/* Dashboard Grid Container */}
          <div className="p-4 space-y-4">
            
            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
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
                <span className="text-[10px] text-emerald-700 font-medium">Today's Attendance</span>
                <div className="text-xl font-bold text-emerald-950 mt-1">95.4%</div>
                <span className="text-[9px] text-emerald-500 font-medium">Student Presence</span>
              </div>
              <div className="bg-rose-50 border border-rose-100 p-3 rounded-2xl">
                <span className="text-[10px] text-rose-700 font-medium">Unpaid Invoices</span>
                <div className="text-xl font-bold text-rose-950 mt-1">108</div>
                <span className="text-[9px] text-rose-500 font-medium">Dues Count</span>
              </div>
            </div>

            {/* Financial Ledger Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-indigo-950 text-white p-3 rounded-2xl">
                <span className="text-[9px] text-indigo-200">Total Expected Fee</span>
                <div className="text-lg font-bold text-white mt-1">₹10,80,000</div>
              </div>
              <div className="bg-emerald-600 text-white p-3 rounded-2xl">
                <span className="text-[9px] text-emerald-100">Total Collected</span>
                <div className="text-lg font-bold text-white mt-1">₹0</div>
              </div>
              <div className="bg-rose-500 text-white p-3 rounded-2xl">
                <span className="text-[9px] text-rose-100 font-medium">Total Dues Pending</span>
                <div className="text-lg font-bold text-white mt-1">₹10,80,000</div>
              </div>
            </div>

            {/* Attendance Curve Mock chart */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-800">Student Attendance Trend (Last 7 Days)</span>
                <span className="text-[10px] text-indigo-600 font-medium">Goal: &gt;95%</span>
              </div>
              <div className="h-28 flex items-end justify-between gap-1 pt-2 border-b border-slate-100">
                {[75, 80, 72, 85, 92, 94, 95.4].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                    <div 
                      className="w-full bg-gradient-to-t from-indigo-500 to-emerald-400 rounded-t-lg transition-all duration-500 group-hover:opacity-85"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[8px] text-slate-400">Day {i+1}</span>
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
      color: "bg-emerald-600 text-emerald-600 border-emerald-600",
      mockup: (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl animate-fade-in font-sans text-[11px] sm:text-xs text-slate-800">
          {/* Dashboard Header Bar */}
          <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="font-semibold text-slate-700 ml-2">Class 10-A Portal — Mrs. Sharma</span>
            </div>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-[9px] font-bold">TEACHER MODE</span>
          </div>

          {/* Dashboard Grid Container */}
          <div className="p-4 space-y-4">
            
            {/* Quick action actions */}
            <div className="flex items-center gap-2 pb-2 overflow-x-auto no-scrollbar">
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full font-bold shadow-sm whitespace-nowrap">Mark Attendance</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-semibold whitespace-nowrap">Publish Homework</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-semibold whitespace-nowrap">Enter Marks</span>
            </div>

            {/* Attendance Roster Checklist */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
              <span className="font-semibold text-slate-800">Daily Attendance Roll — Class 10-A</span>
              <div className="space-y-2">
                {[
                  { roll: "Roll #1", name: "Aarav Sharma", status: "Present" },
                  { roll: "Roll #2", name: "Ananya Goel", status: "Present" },
                  { roll: "Roll #3", name: "Kabir Mehta", status: "Absent" },
                  { roll: "Roll #4", name: "Riya Verma", status: "Present" },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 font-medium">{s.roll}</span>
                      <span className="font-bold text-slate-800">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold ${s.status === 'Present' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet notices */}
            <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-2xl flex gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <span className="font-bold text-indigo-950 block">Instant Parent Notifications Enabled</span>
                <span className="text-[10px] text-indigo-700">Submitting attendance immediately triggers alerts to Kabir Mehta's parents.</span>
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
      color: "bg-amber-600 text-amber-600 border-amber-600",
      mockup: (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl animate-fade-in font-sans text-[11px] sm:text-xs text-slate-800">
          {/* Mobile Shell Bar */}
          <div className="bg-slate-900 px-4 py-3 text-white flex items-center justify-between">
            <span className="font-semibold text-slate-100">Apana Campus — Parent Portal</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">Rahul's Profile</span>
            </div>
          </div>

          {/* Portal Body */}
          <div className="p-4 space-y-4">
            
            {/* Quick student details widget */}
            <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold font-serif text-sm">
                R
              </div>
              <div>
                <span className="font-bold text-slate-800">Rahul Verma</span>
                <span className="text-[10px] text-slate-400 block">Class 10-A • Roll #4</span>
              </div>
            </div>

            {/* Fee Due Payment Box */}
            <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-rose-700 text-[10px] font-semibold tracking-wide uppercase">DUE BILLING</span>
                  <span className="font-serif text-lg font-bold text-rose-950 block mt-0.5">₹15,400</span>
                  <span className="text-[9px] text-rose-500">Term 2 Examination & Library Fees</span>
                </div>
                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[9px] font-bold">DUE MAY 30</span>
              </div>
              <button className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow-[0_2px_8px_rgba(225,29,72,0.3)] transition-all">
                Pay School Fees Online
              </button>
            </div>

            {/* GPS Transport bus widget */}
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-bold text-emerald-950 block">School Bus Route #4</span>
                <span className="text-[10px] text-emerald-700">Bus is 1.2 km away from your pick-up spot.</span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[9px] font-bold uppercase tracking-wider animate-pulse">ACTIVE GPS</span>
            </div>
            
          </div>
        </div>
      )
    }
  };

  return (
    <section id="features" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-200/50 rounded-full text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
            One Core Database. Four Dedicated Login Portals.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Apana Campus partitions interfaces based on who is logging in, keeping your workflows completely clutter-free and highly optimized.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex justify-center border-b border-slate-200 max-w-xl mx-auto">
          <div className="flex gap-2 sm:gap-6">
            {(Object.keys(portals) as Array<keyof typeof portals>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`pb-4 px-2 sm:px-6 text-sm font-bold tracking-wide transition-all border-b-2 ${
                  activeTab === key
                    ? "border-indigo-600 text-indigo-600 font-extrabold"
                    : "border-transparent text-slate-500 hover:text-indigo-600"
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
            <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-xl text-[11px] font-bold tracking-wide text-indigo-600 uppercase">
              {portals[activeTab].badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-indigo-950 font-bold leading-tight">
              {portals[activeTab].role}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              {portals[activeTab].tagline}
            </p>
            
            <div className="space-y-4 pt-2">
              {portals[activeTab].features.map((feat, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/contact?action=demo" 
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition-all hover:translate-y-[-1px]"
              >
                Request a Portal Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Mockup Showcase */}
          <div className="lg:col-span-7 relative">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-indigo-200/20 blur-3xl rounded-full scale-75 -z-10" />
            
            {portals[activeTab].mockup}
          </div>

        </div>

      </div>
    </section>
  );
}
