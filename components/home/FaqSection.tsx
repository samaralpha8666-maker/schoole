'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'How does ApnaCampus isolate database schemas for security?',
    a: 'Each school is assigned its own PostgreSQL schema in our secure multi-tenant infrastructure. This guarantees your data is completely isolated from other institutions — preventing any cross-tenant leaks or contamination.',
  },
  {
    q: 'Is the ApnaCampus mobile app included in the standard subscription?',
    a: 'Yes! The ApnaCampus mobile application live on the Google Play Store is fully accessible to all active teachers and staff members under every standard subscription plan at no extra charge.',
  },
  {
    q: 'Can we migrate our existing student data to ApnaCampus?',
    a: 'Absolutely! Our onboarding team assists in migrating your existing rosters, student academic histories, fee structures, and registration data securely within 48 hours.',
  },
  {
    q: 'Does ApnaCampus support college-specific features like hostel and programs?',
    a: 'Yes. ApnaCampus includes specialized modules for higher-education institutions: Programs & Courses, Hostel Room Allocation, Transport Routes, Library System, and Online Exam Portals.',
  },
  {
    q: 'How secure is the student and fee data stored on the platform?',
    a: 'We use SSL encryption in transit, AES-256 at rest, and daily automated backups per school schema, hosted on enterprise-grade servers with a 99.9% uptime SLA.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        <div className="text-center space-y-3 mb-14">
          <span className="section-label">Got Questions?</span>
          <h2 id="faq-heading" className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1e1b4b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#daeaea] rounded-xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-[#1e1b4b] hover:text-[#4f46e5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4f46e5] focus:ring-inset rounded-xl"
              >
                <span className="pr-4 text-sm sm:text-base">{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? 'bg-[#4f46e5] text-white' : 'bg-[#eef2ff] text-[#4f46e5]'}`}>
                  <i className={`fa-solid ${open === i ? 'fa-minus' : 'fa-plus'} text-xs`} aria-hidden="true" />
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-[#6b8a8a] leading-relaxed border-t border-[#f0f5f5] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
