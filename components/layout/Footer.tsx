import Link from 'next/link';
import { GraduationCap, ExternalLink } from 'lucide-react';

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
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Account Deletion', href: '/delete-account' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'FAQs', href: '/#faq' },
    ],
  },
  {
    title: 'Quick Contact',
    links: [
      { label: '+91 89285 67312', href: 'tel:+918928567312' },
      { label: 'hello@apanacampus.com', href: 'mailto:hello@apanacampus.com' },
      { label: 'Google Play Store', href: 'https://play.google.com', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-base-dark text-base-cream/80 border-t border-[#2B2927]/10 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="ApnaCampus Home">
              <div className="w-9 h-9 rounded-full bg-accent-green flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-base font-bold tracking-[1.5px] text-white leading-none uppercase">
                  Apana Campus
                </span>
                <span className="text-[7.5px] tracking-[1.2px] uppercase text-accent-lime font-bold mt-0.5">
                  Schema-Isolated ERP
                </span>
              </div>
            </Link>
            <p className="text-base-cream/60 text-xs sm:text-sm leading-relaxed font-light text-left">
              The #1 premium multi-tenant school and college ERP management platform in India. Engineered for schema security, connection reliability, and rapid scaling.
            </p>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">{section.title}</h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noopener noreferrer' : undefined}
                      className="text-base-cream/60 hover:text-white transition-colors flex items-center gap-1 font-medium"
                    >
                      {l.label}
                      {l.external && <ExternalLink className="w-3 h-3 text-accent-lime" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-base-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-base-cream/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Apana Campus. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
            Secure Multi-Tenant PostgreSQL Schema Isolation
          </p>
        </div>
      </div>
    </footer>
  );
}
