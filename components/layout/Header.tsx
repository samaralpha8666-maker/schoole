'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronRight, ChevronDown,
  Phone, Mail, MapPin,
  GraduationCap, Users, BookOpen, Coins, Calendar,
  CalendarDays, ClipboardList, BarChart3, Settings,
} from 'lucide-react';

const erpFeatures = [
  { title: "Students", icon: GraduationCap, bg: "#E2EBD5", color: "#2D5A27", desc: "Complete lifecycle & documents" },
  { title: "Staff", icon: Users, bg: "#E2EBD5", color: "#2D5A27", desc: "HR, leaves & attendance" },
  { title: "Academic", icon: BookOpen, bg: "#E2EBD5", color: "#2D5A27", desc: "Classes, syllabus & scheduling" },
  { title: "Fees", icon: Coins, bg: "#E2EBD5", color: "#2D5A27", desc: "Collection, invoices & tracking" },
  { title: "Timetable", icon: Calendar, bg: "#E2EBD5", color: "#2D5A27", desc: "Automated conflict-free grids" },
  { title: "Calendar", icon: CalendarDays, bg: "#E2EBD5", color: "#2D5A27", desc: "School-wide events & reminders" },
  { title: "Examination", icon: ClipboardList, bg: "#E2EBD5", color: "#2D5A27", desc: "Marks, report cards & results" },
  { title: "Reports", icon: BarChart3, bg: "#E2EBD5", color: "#2D5A27", desc: "Actionable custom data exports" },
  { title: "Settings", icon: Settings, bg: "#E2EBD5", color: "#2D5A27", desc: "Preferences, years & roles" },
];

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Why Security', href: '/security' },
  { label: 'Mobile App', href: '/mobile' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const pathname = usePathname();

  const handleFeatureClick = (e: React.MouseEvent, featureTitle: string, index: number) => {
    if (pathname === '/' || pathname === '/#features' || pathname === '' || pathname === '/features') {
      e.preventDefault();
      window.dispatchEvent(
        new CustomEvent('select-erp-feature', { detail: { index } })
      );
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* lock body when drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);



  return (
    <>
      {/* ─────────────────────────── HEADER ─────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 w-full z-40
          bg-[#FAF9F6]/95 backdrop-blur-xl
          border-b border-black/[0.06]
          transition-shadow duration-300
          ${scrolled ? 'shadow-[0_1px_24px_rgba(0,0,0,0.07)]' : ''}
        `}
      >

        {/* ── ROW 1 : social left · contact+utils right ── */}
        <div className="hidden md:block bg-white/70 border-b border-black/[0.04]">
          <div className="mx-auto px-4 md:px-6 py-[7px] flex items-center justify-between">

            {/* Social icons — thin + minimal, exactly like Swakaash */}
            <div className="flex items-center gap-3.5 text-[#1C1C1C]">
              {[
                { label: 'Facebook', d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z' },
                { label: 'LinkedIn', d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { label: 'Instagram', svg: true },
                { label: 'Twitter/X', x: true },
              ].map((s, i, arr) => (
                <React.Fragment key={s.label}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center hover:text-[#2D5A27] transition-colors duration-200"
                  >
                    {s.x ? (
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : s.svg ? (
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ) : (
                      <svg className="w-[13px] h-[13px]" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                    )}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="inline-flex items-center justify-center text-[#1C1C1C]/20 text-[13px] select-none font-light">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right: contact + search/heart + login */}
            <div className="flex items-center gap-5 text-[12px] font-semibold tracking-wide text-[#1C1C1C]">
              <a href="tel:+918928567312"
                className="inline-flex items-center gap-1.5 hover:text-[#2D5A27] transition-colors">
                <Phone className="w-[13px] h-[13px] text-[#2D5A27]" strokeWidth={2.2} />
                +91 89285 67312
              </a>
              <a href="mailto:info@apanacampus.com"
                className="inline-flex items-center gap-1.5 hover:text-[#2D5A27] transition-colors">
                <Mail className="w-[13px] h-[13px] text-[#2D5A27]" strokeWidth={2.2} />
                info@apanacampus.com
              </a>
              <span className="inline-flex items-center gap-1.5 text-[#1C1C1C]">
                <MapPin className="w-[13px] h-[13px] text-[#2D5A27]" strokeWidth={2.2} />
                Mumbai, West
              </span>




            </div>

          </div>
        </div>

        {/* ── ROW 2 : logo · nav · CTAs ── */}
        <div className="max-w-[1390px] mx-auto px-4 md:px-6 py-[14px] flex items-center justify-between gap-8">

          {/* Logo — square icon block like Swakaash "S" */}
          <Link href="/"
            className="flex items-center gap-3.5 group flex-shrink-0"
            aria-label="ApnaCampus Home">
            <div className="
              w-[38px] h-[38px] rounded-[10px]
              bg-[#1C1C1C] text-[#FAF9F6]
              flex items-center justify-center
              font-serif text-[18px] font-bold tracking-tight
              group-hover:scale-[1.03] transition-transform duration-300
            ">
              A
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="
                font-serif text-[16px] md:text-[17px] font-bold
                tracking-[3px] uppercase
              ">
                Apana <span className="font-bold text-accent-green">Campus</span>
              </span>
              <span className="
                text-[9.5px] tracking-[1.2px] uppercase
                text-[#2D5A27] font-bold mt-[3px]
              ">
                School & Collage Management ERP
              </span>
            </div>
          </Link>

          {/* Desktop nav — Swakaash style: flat uppercase, bottom underline on active/hover */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center"
            aria-label="Main navigation">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || pathname === href.replace('/#', '/#');
              
              if (label === 'Features') {
                return (
                  <div key={label} className="relative group py-4">
                    {/* Header trigger button */}
                    <button
                      className={`
                        flex items-center gap-1
                        relative text-[13.5px] font-bold tracking-[1.5px] uppercase
                        transition-colors duration-200
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                        after:w-full after:h-[2px] after:bg-[#2D5A27]
                        after:scale-x-0 after:origin-left
                        after:transition-transform after:duration-300
                        group-hover:text-[#2D5A27] group-hover:after:scale-x-100
                        ${isActive
                          ? 'text-[#2D5A27] after:scale-x-100'
                          : 'text-[#1C1C1C]'
                        }
                      `}
                    >
                      {label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Premium Dropdown Card */}
                    <div className="
                      absolute top-[100%] left-1/2 -translate-x-1/2 mt-1
                      w-[760px] bg-[#FAF9F6]/98 backdrop-blur-xl
                      border border-black/[0.06] rounded-2xl
                      shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                      opacity-0 translate-y-2 pointer-events-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      transition-all duration-300 ease-out z-50
                      p-5 grid grid-cols-3 gap-3.5
                    ">
                      {erpFeatures.map((feat, index) => {
                        const IconComponent = feat.icon;
                        return (
                          <Link
                            key={feat.title}
                            href={`/features?feature=${feat.title.toLowerCase()}`}
                            onClick={(e) => handleFeatureClick(e, feat.title, index)}
                            className="
                              flex items-start gap-3 p-3 rounded-xl
                              hover:bg-[#2D5A27]/5 border border-transparent hover:border-[#2D5A27]/10
                              transition-all duration-200 group/item
                            "
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                              style={{ backgroundColor: `${feat.color}15`, color: feat.color }}
                            >
                              <IconComponent className="w-5 h-5 group-hover/item:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col text-left">
                              <span className="text-[13px] font-bold text-[#1C1C1C] group-hover/item:text-[#2D5A27] transition-colors">
                                {feat.title}
                              </span>
                              <span className="text-[10.5px] text-[#2B2927]/60 mt-0.5 leading-snug">
                                {feat.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative text-[13.5px] font-bold tracking-[1.5px] uppercase
                    py-1.5 transition-colors duration-200
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-full after:h-[2px] after:bg-[#2D5A27]
                    after:scale-x-0 after:origin-left
                    after:transition-transform after:duration-300
                    hover:text-[#2D5A27] hover:after:scale-x-100
                    ${isActive
                      ? 'text-[#2D5A27] after:scale-x-100'
                      : 'text-[#1C1C1C]'
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">

            <Link
              href="/contact?action=demo"
              className="
                inline-flex items-center justify-center gap-1.5
                px-5 py-[11px] rounded-full
                bg-[#2D5A27] text-white
                text-[12px] font-bold tracking-[1.5px] uppercase
                hover:bg-[#1C1C1C]
                transition-all duration-250
              "
            >
              Request a Demo
              <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-full text-[#1C1C1C] hover:text-[#2D5A27] hover:bg-black/5 transition-all"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-5 h-5" strokeWidth={2} />
          </button>

        </div>
      </header>


      {/* ─────────────────── MOBILE DRAWER (outside header) ─────────────────── */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-50 bg-black/50 backdrop-blur-[3px]
          transition-opacity duration-300 lg:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 z-50
          h-full w-[85%] max-w-[340px]
          bg-[#FAF9F6] shadow-2xl
          flex flex-col
          transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-black/[0.07]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] bg-[#1C1C1C] text-[#FAF9F6] flex items-center justify-center font-serif text-base font-bold">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[14px] tracking-[2px] uppercase text-[#1C1C1C]">
                ApanaCampus
              </span>
              <span className="text-[9px] tracking-[1px] uppercase text-[#2D5A27] font-bold mt-0.5">
                Schema-Isolated ERP
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-black/40 hover:text-[#2D5A27] rounded-full hover:bg-black/5 transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-7 py-6 gap-0.5 flex-1 overflow-y-auto"
          aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            
            if (label === 'Features') {
              return (
                <div key={label} className="flex flex-col">
                  <button
                    onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                    className="
                      flex items-center justify-between py-3 px-3 rounded-lg
                      text-[13px] font-bold uppercase tracking-[1.5px]
                      text-[#1C1C1C] hover:text-[#2D5A27] hover:bg-black/5
                      transition-all duration-150
                    "
                  >
                    <span>{label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileFeaturesOpen ? 'rotate-180 text-[#2D5A27]' : 'text-black/40'}`} />
                  </button>
                  
                  {/* Collapsible list of individual features */}
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out pl-4
                    ${mobileFeaturesOpen ? 'max-h-[500px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0 pointer-events-none'}
                  `}>
                    <div className="grid grid-cols-2 gap-2 p-1.5 bg-black/[0.02] rounded-xl border border-black/[0.04]">
                      {erpFeatures.map((feat, index) => {
                        const IconComponent = feat.icon;
                        return (
                          <Link
                            key={feat.title}
                            href={`/features?feature=${feat.title.toLowerCase()}`}
                            onClick={(e) => handleFeatureClick(e, feat.title, index)}
                            className="
                              flex items-center gap-2 p-2.5 rounded-lg
                              hover:bg-[#2D5A27]/5 text-left transition-all duration-150
                            "
                          >
                            <div
                              className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${feat.color}15`, color: feat.color }}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-bold text-[#1C1C1C] tracking-[0.5px]">
                              {feat.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center py-3 px-3 rounded-lg
                  text-[13px] font-bold uppercase tracking-[1.5px]
                  transition-all duration-150
                  ${isActive
                    ? 'text-[#2D5A27] bg-[#2D5A27]/10 font-bold'
                    : 'text-[#1C1C1C] hover:text-[#2D5A27] hover:bg-black/5 font-semibold'
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Panel footer */}
        <div className="px-7 pb-8 pt-6 border-t border-black/[0.07] space-y-3">
          <Link
            href="/contact?action=login"
            onClick={() => setIsOpen(false)}
            className="
              w-full py-3.5 flex items-center justify-center
              border border-[#1C1C1C] rounded-full
              text-[12px] font-bold tracking-[1.5px] uppercase text-[#1C1C1C]
              hover:bg-[#1C1C1C] hover:text-white transition-all
            "
          >
            Client Login
          </Link>
          <Link
            href="/contact?action=demo"
            onClick={() => setIsOpen(false)}
            className="
              w-full py-3.5 flex items-center justify-center gap-1.5
              bg-[#2D5A27] rounded-full text-white
              text-[12px] font-bold tracking-[1.5px] uppercase
              hover:bg-[#1C1C1C] transition-all
            "
          >
            Request a Demo
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>

          <div className="pt-3 flex flex-col gap-2 text-[12px] text-[#1C1C1C] font-semibold">
            <a href="tel:+918928567312"
              className="flex items-center gap-2 hover:text-[#2D5A27] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#2D5A27]" strokeWidth={2} />
              +91 89285 67312
            </a>
            <a href="mailto:info@apanacampus.com"
              className="flex items-center gap-2 hover:text-[#2D5A27] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#2D5A27]" strokeWidth={2} />
              info@apanacampus.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}