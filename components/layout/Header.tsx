'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'School Admission', href: '/school-admission' },
  { label: 'College Management', href: '/college-management' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQs', href: '/#faqs' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e1b4b] shadow-lg shadow-indigo-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="ApnaCampus Home">
          <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-800/50">
            <i className="fa-solid fa-graduation-cap text-white text-base" />
          </div>
          <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-white">
            Apna<span className="text-indigo-400">Campus</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-indigo-200" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/#contact" className="btn-primary text-sm py-2.5 px-5">
            Book Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-indigo-200 hover:text-white p-2"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#312e81] border-t border-white/10 px-6 py-4 space-y-3" aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-indigo-200 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="block btn-primary text-center mt-2">
            Book Demo
          </Link>
        </nav>
      )}
    </header>
  );
}
