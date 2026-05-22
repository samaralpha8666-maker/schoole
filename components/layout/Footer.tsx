import Link from 'next/link';
import { GraduationCap, Mail, Phone, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'School Admission', href: '/school-admission' },
      { label: 'College Management', href: '/college-management' },
      { label: 'All Features', href: '/#features' },
      { label: 'Pricing Plans', href: '/#pricing' },
    ],
  },
  {
    title: 'Security & Info',
    links: [
      { label: 'Contact Support', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'FAQs', href: '/#faq' },
    ],
  },
  {
    title: 'Quick Contact',
    links: [
      { label: '+91 98765 43210', href: 'tel:+919876543210' },
      { label: 'hello@apanacampus.com', href: 'mailto:hello@apanacampus.com' },
      { label: 'Google Play Store', href: 'https://play.google.com', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200 border-t border-indigo-900/60 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="ApnaCampus Home">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-base font-bold tracking-[1.5px] text-white leading-none uppercase">
                  Apana Campus
                </span>
                <span className="text-[7px] tracking-[1.2px] uppercase text-emerald-400 font-bold mt-0.5">
                  Schema-Isolated ERP
                </span>
              </div>
            </Link>
            <p className="text-indigo-300/80 text-xs sm:text-sm leading-relaxed font-light">
              The #1 premium multi-tenant school and college ERP management platform in India. Engineered for schema security, connection reliability, and rapid scaling.
            </p>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6">{section.title}</h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noopener noreferrer' : undefined}
                      className="text-indigo-200/70 hover:text-white transition-colors flex items-center gap-1 font-medium"
                    >
                      {l.label}
                      {l.external && <ExternalLink className="w-3 h-3 text-indigo-400" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-indigo-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-indigo-350 font-medium">
          <p>&copy; {new Date().getFullYear()} Apana Campus. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Secure Multi-Tenant PostgreSQL Schema Isolation
          </p>
        </div>
      </div>
    </footer>
  );
}
