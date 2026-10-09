import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'School Admission', href: '/school-admission' },
      { label: 'College Management', href: '/college-management' },
      { label: 'All Features', href: '/#features' },
      { label: 'Pricing Plans', href: '/#pricing' },
      { label: 'ERP Comparison', href: '/compare' },
    ],
  },
  {
    title: 'Security & Info',
    links: [
      { label: 'Contact Support', href: '/contact' },
      { label: 'Blog & Insights', href: '/blog' },
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
      { label: 'info@apanacampus.com', href: 'mailto:info@apanacampus.com' },
      { label: 'hr@apanatime.in', href: 'mailto:hr@apanatime.in' },
      { label: 'Official Facebook', href: 'https://www.facebook.com/share/1J1SubyqkL/', external: true },
      { label: 'Official Instagram', href: 'https://www.instagram.com/apanacampus.erp/', external: true },
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.apanacampus.erp', external: true },
      { label: 'Campus LinkedIn', href: 'https://www.linkedin.com/company/apana-campus/about/?viewAsMember=true', external: true },
      { label: 'ApanaTime LinkedIn', href: 'https://www.linkedin.com/company/apana-time', external: true },
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
            <Link href="/" className="flex items-center gap-3 group" aria-label="ApnaCampus Home">
              <Logo className="w-[50px] h-[38px]" braceColor="text-white" />
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
            <p className="text-base-cream/50 text-xs leading-relaxed font-light text-left mt-2 pt-2 border-t border-base-cream/10">
              From the creators of <a href="https://www.apanatime.in/" target="_blank" rel="noopener noreferrer" className="text-accent-lime hover:underline font-medium">ApanaTime</a>.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/share/1J1SubyqkL/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Facebook"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/apanacampus.erp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Instagram"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/apana-campus/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Google Play Store Badge */}
            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.apanacampus.erp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10 group shadow-xs"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M5.25 2.1c-.26 0-.5.1-.68.28l10.97 10.97 3.51-3.51L5.93 2.38c-.18-.18-.42-.28-.68-.28zM3.48 3.84c-.1.21-.15.46-.15.73v14.86c0 .27.05.52.15.73l9.64-9.64L3.48 3.84zm12.33 7.82l-3.51 3.51 10.97 10.97c.18-.18.28-.42.28-.68 0-.26-.1-.5-.28-.68l-7.46-13.12zM13.62 12l-9.64 9.64c.21.1.46.15.73.15.26 0 .5-.1.68-.28l13.12-7.46-4.89-2.05z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider opacity-70">GET IT ON</div>
                  <div className="text-[12px] font-black">Google Play</div>
                </div>
              </a>
            </div>
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
