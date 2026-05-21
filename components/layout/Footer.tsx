import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'School Admission', href: '/school-admission' },
      { label: 'College Management', href: '/college-management' },
      { label: 'All Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/#contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'FAQs', href: '/#faqs' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { label: '+91 98765 43210', href: 'tel:+919876543210' },
      { label: 'hello@apanacampus.com', href: 'mailto:hello@apanacampus.com' },
      { label: 'Google Play Store', href: 'https://play.google.com', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1b4b] text-indigo-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3" aria-label="ApnaCampus Home">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg">
                <i className="fa-solid fa-graduation-cap text-white text-base" />
              </div>
              <span className="font-[family-name:var(--font-outfit)] font-bold text-xl text-white">
                Apna<span className="text-indigo-400">Campus</span>
              </span>
            </Link>
            <p className="text-indigo-300/70 text-sm leading-relaxed max-w-xs">
              The #1 multi-tenant school and college ERP management system in India. Available on Google Play Store.
            </p>
            <div className="flex gap-4 text-indigo-400 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin" /></a>
              <a href="https://play.google.com" aria-label="Google Play" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-google-play" /></a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target={(l as any).external ? '_blank' : undefined}
                      rel={(l as any).external ? 'noopener noreferrer' : undefined}
                      className="text-indigo-300/70 text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-indigo-400/50">
          <p>&copy; {new Date().getFullYear()} ApnaCampus. All Rights Reserved.</p>
          <p>Secure multi-tenant ERP built for Indian education.</p>
        </div>
      </div>
    </footer>
  );
}
