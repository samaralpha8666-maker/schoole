'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, ShieldAlert, Sparkles, Scale, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-sans antialiased">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 text-left">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#2D5A27] bg-[#E2EBD5] border border-[#2D5A27]/20 px-3.5 py-1.5 rounded-full">
            <Scale className="w-3.5 h-3.5 text-[#2D5A27]" />
            B2B SaaS Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] tracking-tight font-bold">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-[#2B2927]/60 font-medium">
            Effective Date: May 23, 2026 &nbsp;|&nbsp; Last Updated: May 23, 2026
          </p>
        </div>

        {/* Intro Banner */}
        <div className="bg-[#E2EBD5]/40 border border-[#2D5A27]/10 rounded-[24px] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2D5A27] text-white rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1C] m-0">
              Contractual Terms for Institutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
            Welcome to <strong>Apana Campus</strong>. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our multi-tenant school and college management ERP application (the &quot;App&quot;), website, and associated support portals.
          </p>
          <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
            By registering your institution or logging in as a Teacher, Parent, or Student, you agree to be bound by these Terms. If you are entering into these Terms on behalf of a school, college, or trust, you represent that you have the authority to bind that educational institution.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">1. Platform Delivery and Account Provisioning</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                Apana Campus provides a multi-tenant Software-as-a-Service (SaaS) platform. Upon registration and subscription confirmation:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>Dedicated Schema Vault:</strong> We provision a dedicated logical database schema vault isolating your institution&apos;s records from other educational institutions.</li>
                <li><strong>Account Types:</strong> Authorized administrators receive master access keys and are solely responsible for creating and regulating sub-credentials for Teachers, Students, and Parents.</li>
                <li><strong>Security Credentials:</strong> You are responsible for safeguarding all administrative credentials. Any activity logged under your school master key is deemed your institution&apos;s direct administrative action.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">2. Intellectual Property and SaaS Licensing</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                <strong>License Grant:</strong> We grant your institution a limited, non-exclusive, non-transferable, revocable SaaS subscription license to use the Apana Campus App for your educational operations during the active billing term.
              </p>
              <p>
                <strong>Our Ownership:</strong> All copyrights, source code, database structures, UI templates, graphics, and visual layouts in the App belong solely to the Apana Campus Team. You may not reverse-engineer, decompile, resell, or white-label any portion of our software without written consent.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">3. Acceptable Use and Platform Safety</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p>You agree that your institution and registered users will NOT:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li>Upload false student profiles, invalid roll numbers, or spam notices.</li>
                <li>Attempt to bypass schema-isolation policies or access other schools&apos; connection pools.</li>
                <li>Run bulk automated scrapers or penetration testing suites against our high-availability database cluster without pre-authorization.</li>
                <li>Post abusive, defamatory, or inappropriate messages in classroom boards or teacher-parent chat logs.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">4. Fee Collection and Payment Gateways</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                If your school utilizes Apana Campus fee invoicing and online UPI/Netbanking gateways:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>Third-Party Integrations:</strong> Payments are processed via secure PCI-DSS compliant third-party payment aggregates. We are not a bank or payment facilitator.</li>
                <li><strong>Refunds and Chargebacks:</strong> All tuition dispute negotiations, failed transaction claims, and parent refund requests must be handled directly between the School Administration and the Parent.</li>
                <li><strong>Surcharges:</strong> Any applicable banking transaction fees or MDR charges are displayed before payment submission and are regulated under standard merchant banking rules.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">5. Data Ownership and Compliance</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                <strong>Data Ownership:</strong> Your institution retains absolute ownership of all academic data, student files, grades, and parent lists uploaded to the isolated schema.
              </p>
              <p>
                <strong>GDPR / DPDP Compliance:</strong> The School is responsible for obtaining verifiable parental consent before uploading minor student profiles on our platform. In compliance with data regulations, parents possess the right to query, edit, or request data deletion via our public request portal at{' '}
                <Link href="/delete-account" className="text-[#2D5A27] hover:underline font-bold">
                  https://apanacampus.com/delete-account
                </Link>.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">6. Service Availability and Backups</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                <strong>Platform SLA:</strong> We strive to maintain a 99.9% uptime SLA for database connections and API endpoints, excluding scheduled maintenance windows (announced in advance on the dashboard).
              </p>
              <p>
                <strong>Backups:</strong> Auto-encrypted logical backups of school records are scheduled daily. Administrators can download complete roster and financial databases as Excel/CSV sheets at any time directly from the master dashboard panel.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">7. Subscription Term, Renewal, and Data Purging</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                <strong>Active Subscriptions:</strong> ERP license renewals are billed monthly or annually according to your selected package tier.
              </p>
              <p>
                <strong>Cancellation:</strong> If you cancel your subscription or default on renewal invoices, your administrative master keys will be suspended.
              </p>
              <p>
                <strong>Data Portability & Purge:</strong> Suspending a subscription does not instantly delete data. We retain your schema vaults for 60 days to allow roster exports. On day 61, the isolated schema and backup archives are permanently purged from our high-availability cluster.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8 bg-[#FF5F57]/5 p-5 rounded-[20px] border border-[#FF5F57]/15 flex gap-3 text-left">
            <ShieldAlert className="w-5 h-5 text-[#FF5F57] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-[#FF5F57] m-0">8. Limitation of Liability</h3>
              <p className="text-xs text-[#2B2927]/90 leading-relaxed font-light">
                To the maximum extent permitted by law, the Apana Campus Team shall not be liable for any indirect, incidental, special, or consequential damages, including loss of school revenue, student records, academic grading errors, or connectivity delays resulting from payment gateway server chokes.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">9. Dispute Resolution and Governing Law</h3>
            <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of the SaaS platform operations shall be subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra, India</strong>.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 bg-white border border-[#2D5A27]/10 p-6 sm:p-8 rounded-[24px]">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1C1C] m-0">10. Contacting ERP Support</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#2B2927]/70 font-light">
              If your educational institution requires legal clarifications regarding connection SLAs, contract adjustments, or multi-tenant database policies, please reach out to our legal compliance helpdesk:
            </p>
            <div className="pt-2 text-xs sm:text-sm font-semibold text-[#2B2927]">
              Legal Compliance Team: <span className="text-[#2D5A27] font-bold">info@apanacampus.com</span>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
