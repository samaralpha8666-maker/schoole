'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#FAF9F6] pt-32  px-4 md:px-6 min-h-[80vh] flex flex-col lg:flex-row items-center justify-center  lg:gap-16 overflow-hidden "
      aria-labelledby="hero-heading"
    >
      {/* ── BACKGROUND ACCENT DECORATIONS ── */}
      {/* Soft Greenish-Cream blur elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#E2EBD5]/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-50px] w-[350px] h-[350px] rounded-full bg-[#EBDCB9]/20 blur-3xl -z-10 pointer-events-none" />

      {/* ── LEFT MARGIN DECORATIVE BINDINGS (Matching screenshot edge outlines) ── */}
      {/* Left Top Ring Outline - Themed in primary green */}
      <div className="absolute left-[-25px] top-[5%] w-[64px] h-[64px] rounded-full border-[6px] border-[#2D5A27]/25 pointer-events-none hidden md:block" />

      {/* Left Bottom Ring Outline - Themed in primary green */}
      <div className="absolute left-[-20px] bottom-[12%] w-[48px] h-[48px] rounded-full border-[5px] border-[#2D5A27]/20 pointer-events-none hidden md:block" />

      {/* Left Margin Vertical Dot Indicator Slider (Matches the vertical bullet scrollbar in screenshot) */}
      <div className="absolute left-4 top-[35%] h-[160px] flex flex-col justify-between items-center opacity-70 pointer-events-none hidden xl:flex z-25">
        {/* Active thick vertical line pill */}
        <div className="w-1.5 h-7 bg-[#2D5A27] rounded-full transition-all duration-300" />
        {/* Inactive small dots */}
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
        <div className="w-1.5 h-1.5 bg-[#2D5A27]/20 rounded-full" />
      </div>


      {/* ── LEFT COLUMN: High-Fidelity Mockup Frame (Dashboard, Student Card, Mobile App) ── */}
      <div className="w-full lg:w-[56%] xl:w-[60%] relative flex items-center justify-center min-h-[460px] md:min-h-[520px] lg:min-h-[560px] z-10">

        {/* Large Rounded Mockup Outer Panel - Light Soft Blue Tint in original, here light green-cream tint */}
        <div className="relative w-full max-w-[720px] aspect-[1.38] rounded-[36px] bg-[#E2EBD5]/45 border border-[#2D5A27]/10 p-4 sm:p-5 flex items-center justify-start shadow-sm overflow-visible">

          {/* 1. Desktop Browser Dashboard Mockup */}
          <div className="w-[96%] aspect-[1.68] rounded-[18px] bg-white border border-[#2D5A27]/15 shadow-[0_20px_50px_rgba(45,90,39,0.08)] overflow-hidden relative flex flex-col transition-transform duration-500 hover:scale-[1.01] z-0">
            {/* Sleek Browser Tab/Header Bar */}
            <div className="bg-[#F5F4F0] border-b border-[#2D5A27]/10 px-3.5 py-2 flex items-center gap-1.5 shrink-0 select-none">
              {/* macOS Style Window Controls */}
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB2F]" />
              </div>
              {/* Address/Search Bar */}
              <div className="h-5 bg-white border border-[#2D5A27]/8 rounded-md flex-1 max-w-[240px] mx-auto flex items-center justify-center text-[7.5px] font-bold text-[#2D5A27]/60 tracking-wider font-sans select-all select-none">
                🔒 demo.apanacampus.com
              </div>
            </div>

            {/* Dashboard Widescreen Viewport */}
            <div className="relative flex-1 bg-[#FAF9F6] overflow-hidden">
              <Image
                src="/admin-dashboard.png"
                alt="Apana Campus Admin Dashboard"
                fill
                priority
                unoptimized={true}
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* ── 2. SINGLE STRAIGHT IPHONE 16 PRO MOCKUP (Clean, High-Fidelity & Responsive) ── */}
          <div className="absolute right-[-15px] sm:right-[-25px] bottom-[-30px] w-[130px] sm:w-[180px] aspect-[393/852] rounded-[36px] bg-[#0c0c0d] p-[4px] sm:p-[5px] ring-1 ring-white/10 ring-inset shadow-[0_30px_60px_rgba(0,0,0,0.45)] border-[1.5px] border-[#2b2b2c] z-20 transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.02] group">
            {/* Ultra-thin Screen Frame */}
            <div className="relative w-full h-full rounded-[31px] overflow-hidden bg-white">
              {/* Dynamic Island */}
              <div className="absolute top-[8px] sm:top-[10px] left-1/2 -translate-x-1/2 w-[52px] sm:w-[72px] h-[11px] sm:h-[14px] bg-black rounded-[6px] sm:rounded-[8px] z-30" />

              {/* Screen Content - Dashboard */}
              <Image
                src="/mobile-dashboard.jpg"
                alt="Teacher ERP Attendance & Overview Dashboard"
                fill
                priority
                unoptimized
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>


          {/* 3. Floating Student Profile Badge (Overlaps the top-left of browser mockup exactly as seen in screenshot) */}
          <div className="absolute left-[-15px] sm:left-[-25px] top-[20px] bg-white border border-[#2D5A27]/15 rounded-[16px] p-2.5 sm:p-3 shadow-[0_12px_35px_rgba(45,90,39,0.08)] w-[140px] flex items-center gap-2.5 z-15 transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_45px_rgba(45,90,39,0.12)]">

            {/* Student Photo Avatar placeholder */}
            <div className="w-8.5 h-8.5 rounded-full bg-[#E2EBD5] flex items-center justify-center border border-[#2D5A27]/20 overflow-hidden shrink-0">
              <svg className="w-5.5 h-5.5 text-[#2D5A27]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* Student Details */}
            <div className="flex-1 min-w-0 leading-tight">
              <h4 className="text-[8.5px] font-black text-[#1C1C1C] truncate">Anoop Awasthi</h4>
              <p className="text-[5.5px] text-black/40 font-bold mt-0.5 truncate">Adm No: 310198295</p>

              {/* School Tag Badge */}
              <div className="mt-1 inline-block px-1.5 py-0.5 rounded-full bg-[#E2EBD5] text-[#2D5A27] text-[4.5px] font-black tracking-wider uppercase truncate max-w-full">
                Delhi Public School, Prayagraj
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* ── RIGHT COLUMN: Content Copy, Bullets, CTA & Partners (Strictly layout from screenshot) ── */}
      <div className="w-full lg:w-[44%] xl:w-[40%] space-y-7 max-w-[540px] z-10 lg:pl-4">

        {/* Brand Name & Headline */}
        <div className="space-y-2">
          <h1 className="font-serif text-[2.5rem] md:text-[3.2rem] font-bold leading-none text-[#1C1C1C] tracking-tight" id="hero-heading">
            APANACAMPUS <span className="text-[#2D5A27] font-serif">10X</span>
          </h1>
          <p className="text-[13.5px] tracking-[1.8px] uppercase font-black text-[#2D5A27]">
            Premium School & College Management ERP
          </p>
        </div>

        {/* Bullets List (Exactly matches the bullet items in user screenshot) */}
        <ul className="space-y-4 text-[14.5px] md:text-[16px] text-[#1C1C1C]/90 font-semibold font-sans">
          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-[#2D5A27] text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
              ✔
            </span>
            <span>
              <span className="text-[#2D5A27] font-bold">3 Months Free Trial</span> with full access to all premium features for Schools & Colleges.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-[#2D5A27] text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
              ✔
            </span>
            <span>
              Our expert team will <span className="text-[#2D5A27] font-bold">fill and manage all school & college data</span> properly in the system.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-[#2D5A27] text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
              ✔
            </span>
            <span>
              Complete management solution for <span className="text-[#2D5A27] font-bold">Schools and Colleges</span> with smooth and organized workflow.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-[#2D5A27] text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
              ✔
            </span>
            <span>
              <span className="text-[#2D5A27] font-bold">24×7 Support Team</span> available anytime for help, guidance, and solving doubts.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-[#2D5A27] text-white flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">
              ✔
            </span>
            <span>
              We provide <span className="text-[#2D5A27] font-bold">complete training</span> to staff and management for easy system usage.
            </span>
          </li>
        </ul>

        {/* Solid CTA button - strictly primary green (#2D5A27) with high hover states */}
        <div className="pt-2">
          <Link
            href="/#contact"
            className="
              inline-flex items-center justify-center
              bg-[#2D5A27] text-[#FAF9F6]
              px-12 py-4.5 rounded-md
              text-[13px] font-black tracking-[2.5px] uppercase
              hover:bg-[#1C1C1C] hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200 shadow-md shadow-[#2D5A27]/10
            "
          >
            Click Here
          </Link>
        </div>



      </div>


      {/* ── FLOATING CHAT WIDGETS (WhatsApp float button and system chat) ── */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3.5 z-40 pointer-events-auto">
        {/* WhatsApp Icon - Traditional green layout */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12.5 h-12.5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-115 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.598-1.005-5.039-2.83-6.867-1.82-1.826-4.244-2.83-6.837-2.83-5.44 0-9.865 4.37-9.869 9.738-.001 1.77.476 3.499 1.379 5.016L1.87 21.085l4.777-1.93z" />
          </svg>
        </a>

        {/* System Chatbot Icon - Stylized in brand primary green (#2D5A27) */}
        <Link
          href="/#contact"
          className="w-12.5 h-12.5 rounded-full bg-[#2D5A27] text-white flex items-center justify-center shadow-lg hover:scale-115 active:scale-95 hover:bg-[#1C1A19] transition-all duration-200"
          aria-label="Request a Demo Chat"
        >
          <svg className="w-6.5 h-6.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </div>

    </section>
  );
}