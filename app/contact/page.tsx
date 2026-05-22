"use client";

import React, { useState } from "react";
import { Sparkle, Check, ShieldCheck, PhoneCall, Building2, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    phone: "",
    students: "growth",
    sandbox: true,
    demo: false,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API lead submission
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="bg-[#FAF9F6] text-indigo-950 min-h-screen py-32 md:py-40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            <Sparkle className="w-3 h-3 text-indigo-600" />
            CONNECT WITH ENGINEERS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-indigo-950 font-bold tracking-tight">
            Schedule a Secure Sandbox Demo
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-light">
            Fill your details below to spin up a private logical schema partition or speak directly with our senior developers.
          </p>
        </section>

        {/* Form and info sidebar split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="space-y-6 py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200/50 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-indigo-950">Registration Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                    Our database engine is currently spinning up your private testing schema partition. Check your email inbox in 2 minutes for login credentials and subdomain instructions.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Mrs. Ritu Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 block">WhatsApp/Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                    />
                  </div>

                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">Official Institution Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. principal@dpsnoida.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                  />
                </div>

                {/* Institution name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">School or College Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Delhi Public School, Noida"
                    value={formData.school}
                    onChange={(e) => setFormData({...formData, school: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                  />
                </div>

                {/* Headcount dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">Total Active Student Headcount</label>
                  <select 
                    value={formData.students}
                    onChange={(e) => setFormData({...formData, students: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
                  >
                    <option value="starter">Up to 200 Students (Coaching / Academy)</option>
                    <option value="growth">200 to 1,000 Students (Single Campus School)</option>
                    <option value="enterprise">1,000+ Students (College / University Network)</option>
                  </select>
                </div>

                {/* Checkbox choices */}
                <div className="space-y-3.5 pt-2 text-xs font-semibold text-slate-700">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.sandbox}
                      onChange={(e) => setFormData({...formData, sandbox: e.target.checked})}
                      className="w-4 h-4 rounded text-indigo-600 accent-indigo-600 border-slate-200 focus:ring-indigo-500"
                    />
                    <span>Yes! Instantly provision a free 14-day isolated sandbox schema.</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.demo}
                      onChange={(e) => setFormData({...formData, demo: e.target.checked})}
                      className="w-4 h-4 rounded text-indigo-600 accent-indigo-600 border-slate-200 focus:ring-indigo-500"
                    />
                    <span>Request a live 30-minute Zoom walkthrough with deployment engineers.</span>
                  </label>
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-bold text-xs rounded-xl shadow-[0_4px_12px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
                >
                  Confirm Sandbox Provisioning
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details sidebar */}
          <div className="lg:col-span-5 bg-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-8 relative overflow-hidden text-left shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full" />
            
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                CUSTOMER DESK
              </span>

              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold">Deploy Sandbox in 2 Minutes</h3>
                <p className="text-[11px] sm:text-xs text-indigo-200 leading-relaxed font-light">
                  Our provisioning automation spawns a PostgreSQL schema space namespace within seconds, sending Super-Admin log credentials straight to your inbox.
                </p>
              </div>

              <div className="h-px bg-indigo-800/80" />

              <div className="space-y-4 text-xs font-semibold text-indigo-150">
                <div className="flex gap-3 items-center">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[9px] text-indigo-300 block uppercase tracking-wider">Direct Hotline Support</span>
                    <a href="tel:+919876543210" className="text-white hover:text-emerald-400 transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[9px] text-indigo-300 block uppercase tracking-wider">Engineering HQ</span>
                    <span className="text-white block font-light">Sector 62, Noida, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-emerald-350/90 font-bold bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl relative z-10 leading-relaxed">
              🔒 Uptime Protocol: Sandbox servers run on ISO-27001 secure clusters with active, automated hour-interval S3 backups.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
