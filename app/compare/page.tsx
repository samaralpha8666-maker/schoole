import React from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, ShieldCheck, DollarSign, HelpCircle, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'ApanaCampus vs Competitors | Best Budget School ERP Software',
  description: 'See how ApanaCampus compares against traditional school ERP systems like Fedena, Eduma, and others. Discover why we offer the cheapest, most secure PostgreSQL isolated ERP.',
  path: '/compare',
  keywords: [
    'ApanaCampus vs Fedena',
    'ApanaCampus vs Eduma',
    'cheapest school ERP comparison',
    'affordable school management software India',
    'low cost school ERP price comparison',
    'best budget educational ERP system',
  ],
});

export default function ComparePage() {
  const comparisonData = [
    {
      feature: 'Annual Subscription Price',
      apana: 'Starts at ₹4,000 / year',
      others: 'Starts at ₹18,000 - ₹30,000 / year',
      apanaWin: true,
      description: 'ApanaCampus is designed to be affordable for small & medium schools, with no high-tier markups.',
    },
    {
      feature: 'Database Architecture',
      apana: 'PostgreSQL Schema Isolation (Individual Vault)',
      others: 'Shared Single Database (Vulnerable to cross-leaks)',
      apanaWin: true,
      description: 'We physically isolate your school data so no other school or hacker can access your records.',
    },
    {
      feature: 'Face ID / Biometric Attendance',
      apana: 'Built-in (Zero extra hardware, uses mobile app)',
      others: 'Requires expensive biometric scanners & setups',
      apanaWin: true,
      description: 'Register and mark teacher attendance securely via device camera inside our mobile app.',
    },
    {
      feature: 'Setup & Installation Fees',
      apana: '₹0 Setup Fee (Free onboarding & data import)',
      others: '₹10,000 - ₹15,000 upfront setup fees',
      apanaWin: true,
      description: 'We upload your student/staff list from Excel or CSV files completely free of charge.',
    },
    {
      feature: 'Free Trial Period',
      apana: '3 Months Free Trial',
      others: 'Usually 7 to 14 days maximum',
      apanaWin: true,
      description: 'Test the software extensively for a full quarter to ensure it meets your expectations.',
    },
    {
      feature: 'Unified Mobile Apps',
      apana: 'Unified Admin, Teacher, Student & Parent Apps',
      others: 'Charged separately or complex setups',
      apanaWin: true,
      description: 'One single, premium app partition for all stakeholders included in the basic package.',
    },
    {
      feature: 'UPI & Online Fee Integration',
      apana: 'Included (Zero setup cost, direct transfers)',
      others: 'Extra integration fee or high commission cuts',
      apanaWin: true,
      description: 'Collect school fees directly into your bank account with major national gateways.',
    },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#2D5A27] bg-[#E2EBD5] border border-[#2D5A27]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#2D5A27]" />
            Smart Decision Maker
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] tracking-tight font-bold leading-tight">
            ApanaCampus vs Traditional ERPs
          </h1>
          <p className="text-sm sm:text-base text-[#2B2927]/70 leading-relaxed font-light">
            Compare features, database security, and annual costs. See why modern educational institutions in India are switching to ApanaCampus to save over 80% on annual IT expenses.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/[0.04] p-6 rounded-[24px] shadow-sm space-y-3">
            <div className="p-2 w-fit bg-[#E2EBD5] text-[#2D5A27] rounded-lg">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold">Unbeatable Pricing</h3>
            <p className="text-xs text-[#2B2927]/75 font-light leading-relaxed">
              We charge only <strong>₹4,000/year</strong>. No hidden hosting charges, server costs, or setup fees. Transparent software for transparent institutions.
            </p>
          </div>

          <div className="bg-white border border-black/[0.04] p-6 rounded-[24px] shadow-sm space-y-3">
            <div className="p-2 w-fit bg-[#2D5A27]/10 text-[#2D5A27] rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold">Enterprise Security</h3>
            <p className="text-xs text-[#2B2927]/75 font-light leading-relaxed">
              Native PostgreSQL Schema Isolation ensures your school records are stored in a dedicated database container. Absolute data ownership and protection.
            </p>
          </div>

          <div className="bg-white border border-black/[0.04] p-6 rounded-[24px] shadow-sm space-y-3">
            <div className="p-2 w-fit bg-yellow-100 text-yellow-700 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold">No Special Hardware</h3>
            <p className="text-xs text-[#2B2927]/75 font-light leading-relaxed">
              Implement Face ID attendance checking for teachers and staff without purchasing biometric thumb scanners. Uses the device camera securely.
            </p>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="bg-white border border-black/[0.06] rounded-[28px] overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 bg-[#E2EBD5]/30 border-b border-black/[0.06]">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1C]">Detailed Feature Comparison</h2>
            <p className="text-xs text-[#2B2927]/65">Direct specs analysis of ApanaCampus against average traditional school management systems.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-black/[0.05] text-[11px] font-bold uppercase tracking-wider text-[#2B2927]/60">
                  <th className="py-4 px-6">Feature / Capability</th>
                  <th className="py-4 px-6 text-[#2D5A27] bg-[#E2EBD5]/20">ApanaCampus ERP</th>
                  <th className="py-4 px-6">Traditional ERP Systems</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.05] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-5 px-6 space-y-1">
                      <div className="font-bold text-[#1C1C1C]">{row.feature}</div>
                      <div className="text-[10px] text-[#2B2927]/65 font-light leading-relaxed max-w-[320px]">
                        {row.description}
                      </div>
                    </td>
                    <td className="py-5 px-6 bg-[#E2EBD5]/15 font-semibold text-[#2D5A27]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                        <span>{row.apana}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-[#2B2927]/80">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Call to Action */}
        <div className="bg-[#E2EBD5]/40 border border-[#2D5A27]/15 rounded-[32px] p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
            Ready to upgrade your campus ERP?
          </h2>
          <p className="text-sm text-[#2B2927]/80 max-w-xl mx-auto font-light leading-relaxed">
            Stop overpaying for outdated databases and complicated setups. Start your risk-free 3-month free trial on ApanaCampus today and digitize your school or college within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D5A27] text-white rounded-full font-bold hover:bg-[#20421C] transition-all shadow-md text-sm"
            >
              View Pricing Plans
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#2D5A27]/25 text-[#2D5A27] rounded-full font-bold hover:bg-[#2D5A27]/10 transition-all text-sm bg-white"
            >
              Request Free Demo
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
