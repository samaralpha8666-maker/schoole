"use client";

import React from "react";
import Link from "next/link";
import { Check, Sparkle, ArrowRight, ShieldCheck, Database, Landmark, HeartHandshake, PhoneCall } from "lucide-react";

export default function CategoriesPage() {
  const modules = [
    {
      title: "🏢 Academic & Admissions Hub",
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      desc: "Complete digitalization of student life cycles from registrations to certificate printing.",
      features: [
        "Interactive Admission Invoices",
        "Configurable Credit Registrars",
        "Student Profiling Databases",
        "Daily Timetable Matrix schedulers",
        "Automated Promotion Algorithms",
        "Digital Certificate Generation"
      ]
    },
    {
      title: "💰 Administrative & Fees Ledgers",
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      desc: "Streamline monthly tuition bills, collections tracking, and WhatsApp follow-up circulars.",
      features: [
        "UPI & Credit Card Online Fee Gateways",
        "Automated WhatsApp Circulars for Dues",
        "Detailed Fee Account Ledgers",
        "Role-Based Audit Records",
        "Automated Payroll Calculations",
        "Staff Attendance Trackers"
      ]
    },
    {
      title: "🔒 Schema Isolation Databases",
      icon: <Database className="w-5 h-5 text-indigo-600" />,
      desc: "High-performance connection namespaces with custom database partitions.",
      features: [
        "100% Schema-Isolated SQL Vaults",
        "Hourly Automated S3 Database Snapshots",
        "Free Custom Domain Mapping (SSL)",
        "Zero Multi-Tenant cross leaks",
        "Sub-500ms API Connection Pools",
        "Complete Roster JSON Portability"
      ]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-indigo-950 min-h-screen py-32 md:py-40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkle className="w-3 h-3 text-indigo-600" />
            MODULE FEATURES
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
            Comprehensive ERP Modules
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-light">
            We partition our databases at schema-levels to maintain blazing fast index runtimes and zero cross leaks.
          </p>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl">
                    {mod.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-indigo-950 leading-tight">{mod.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{mod.desc}</p>
                
                <div className="h-px bg-slate-100" />

                <ul className="space-y-3 text-xs text-slate-700 font-medium">
                  {mod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-2.5 items-center">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact?action=demo"
                className="w-full py-3 bg-slate-50 hover:bg-indigo-50 text-indigo-950 border border-slate-200 hover:border-indigo-200 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 transition-all"
              >
                Request a Portal Demo
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
              </Link>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
