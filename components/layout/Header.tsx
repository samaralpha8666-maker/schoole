'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Why Security?', href: '/#security' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQs', href: '/#faq' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with Styled Graduation Cap & Tech Node Icon */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="ApnaCampus Home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-[1.03] transition-transform duration-300">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-[1.5px] text-indigo-950 leading-none uppercase">
                Apana Campus
              </span>
              <span className="text-[8px] tracking-[1.2px] uppercase text-emerald-600 font-bold mt-0.5">
                Schema-Isolated ERP
              </span>
            </div>
          </Link>

          {/* Navigation links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-semibold tracking-wide relative py-1 transition-all duration-300 hover:text-indigo-600 ${
                    isActive 
                      ? 'text-indigo-600' 
                      : 'text-slate-700'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Client Login - redirects to Tenant URL */}
            <Link 
              href="/contact?action=login"
              className="px-5 py-2.5 border border-slate-200 bg-white/40 backdrop-blur-md rounded-xl text-xs font-bold tracking-wide text-slate-800 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-300"
            >
              Client Login
            </Link>

            {/* Request a Demo - Vibrant Electric Indigo Button with hover glow */}
            <Link 
              href="/contact?action=demo"
              className="relative px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold tracking-wide shadow-[0_4px_14px_rgba(79,70,229,0.35)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.55)] hover:translate-y-[-1px] active:translate-y-[0px] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Request a Demo
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              {/* Sliding shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            </Link>
          </div>

          {/* Right Mobile Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-850 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-serif text-base font-bold tracking-[1.5px] text-indigo-950">
                  APANA CAMPUS
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-500 hover:text-indigo-600 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-slate-700 hover:text-indigo-600 py-1.5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/contact?action=login"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 border border-slate-300 text-center text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                Client Login
              </Link>
              <Link
                href="/contact?action=demo"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-indigo-600 text-center text-white rounded-xl text-xs font-bold hover:bg-indigo-700 shadow-md transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
