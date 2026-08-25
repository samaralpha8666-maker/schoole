import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Globe, MapPin, Sparkles, Building2, UserCircle2, Camera } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Privacy Policy | ApanaCampus School & College ERP',
  description: 'Understand how ApanaCampus collects, processes, and secures student, teacher, and parent records inside our schema-isolated database systems. Compliant with Play Store policies.',
  path: '/privacy-policy',
  keywords: ['school ERP privacy policy', 'COPPA compliance student data', 'DPDP act school records security'],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-sans antialiased">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 text-left">
        
        {/* Decorative Badge & Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#2D5A27] bg-[#E2EBD5] border border-[#2D5A27]/20 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D5A27]" />
            Play Store Compliant
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] tracking-tight font-bold">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#2B2927]/60 font-medium">
            Effective Date: May 23, 2026 &nbsp;|&nbsp; Last Updated: June 18, 2026
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-[#E2EBD5]/40 border border-[#2D5A27]/10 rounded-[24px] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2D5A27] text-white rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1C] m-0">
              Your Privacy Matters
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
            This Privacy Policy explains how <strong>Apana Campus Team</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and safeguards personal information when you use our school and college management mobile application, <strong>Apana Campus</strong> (the &quot;App&quot;), and the associated services.
          </p>
          <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
            The App is designed as a secure multi-tenant platform for schools and colleges to facilitate communication, learning, and administrative tracking between <strong>Administrators, Teachers, Parents, and Students</strong>.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">1. The School as the Data Controller</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                Apana Campus acts as a <strong>Data Processor</strong> under the instruction of the respective school or educational institution (&quot;School&quot;). The School is the <strong>Data Controller</strong> responsible for managing the registration and authorization of Student, Parent, and Teacher accounts.
              </p>
              <p>
                Any personal data uploaded, stored, or processed in the App is managed under the School&apos;s authority, instruction, and policy.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <div className="flex items-center gap-2.5">
              <UserCircle2 className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">2. Information We Collect</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-4">
              <p>We collect information directly from users, automatically from devices, and from the School administrative dashboard.</p>
              
              <div className="space-y-2.5 pl-2 border-l-2 border-[#2D5A27]/20">
                <p><strong>A. Personal Information Provided by the School or Users:</strong></p>
                <ul className="list-disc list-inside space-y-1.5 pl-3">
                  <li><strong>For Teachers & Admins:</strong> Name, email address, phone number, employee/staff ID, category/profession, profile photo, and security credentials.</li>
                  <li><strong>For Parents:</strong> Name, email address, phone number, relationship to the student, and login credentials.</li>
                  <li><strong>For Students:</strong> Name, school/college roll number, class/section, attendance history, homework/assignments, grades, marks, and profile photo (if permitted).</li>
                </ul>
              </div>

              <div className="space-y-2.5 pl-2 border-l-2 border-[#2D5A27]/20">
                <p><strong>B. Financial Information:</strong></p>
                <p>
                  If your school supports fee collection through the App, billing details, payment transaction IDs, and invoice details are processed. <em>We do not store complete credit card or net banking credentials; these are processed securely by PCI-DSS compliant third-party payment gateways.</em>
                </p>
              </div>

              <div className="space-y-2.5 pl-2 border-l-2 border-[#2D5A27]/20">
                <p><strong>C. Automatically Collected Information (Device & Usage Details):</strong></p>
                <ul className="list-disc list-inside space-y-1.5 pl-3">
                  <li><strong>Device Identifiers:</strong> Push notification tokens (for sending notices, attendance alerts, and messages).</li>
                  <li><strong>Log Data:</strong> IP addresses, operating system version, app crash logs, and usage diagnostics to help keep the App secure and bug-free.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Biometric Data */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8 bg-[#E2EBD5]/10 p-5 rounded-[20px] border border-[#2D5A27]/5">
            <div className="flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#2D5A27] m-0">3. Biometric & Face Recognition Data</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                To support institutional security, automated check-ins, and secure user verification, our App includes optional <strong>Face ID Registration and Face Attendance</strong> features for authorized teachers, staff members, and students.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-3">
                <li>
                  <strong>Data Collection (Camera Permission):</strong> With your explicit consent, we request access to your device&apos;s camera to capture real-time photographs during the Face ID registration and verification processes.
                </li>
                <li>
                  <strong>Data Processing & Storage (Facial Encodings):</strong> Captured photos are securely processed to compute a mathematical, numerical representation of your facial geometry (known as a &quot;face encoding&quot; or &quot;facial vector&quot;). We only store these mathematical encodings (<code>DOUBLE PRECISION[]</code>) in our secure, schema-isolated database. The raw photos are processed solely to generate the face encoding and are not permanently stored on our databases or shared.
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> Your face encoding is used exclusively to verify your identity when you clock in or clock out via the App, verifying that you are the registered user and preventing proxy attendance.
                </li>
                <li>
                  <strong>Third-Party Sharing:</strong> We do not sell, rent, lease, or share your biometric data or facial encodings with any third parties. Access is strictly restricted to your educational institution&apos;s administrators.
                </li>
                <li>
                  <strong>Consent, Retention & Deletion:</strong> Participation in Face Attendance is completely optional. You can withdraw your consent and delete your biometric data at any time. To purge your face registration and encodings, you can contact your school administrator or request deletion by emailing us at <strong>info@apanacampus.com</strong>.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3.1 - Location Data & Background Tracking */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8 bg-[#E2EBD5]/10 p-5 rounded-[20px] border border-[#2D5A27]/5">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="font-serif text-xl font-bold text-[#2D5A27] m-0">3.1 Location Data & Background Tracking</h3>
            </div>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>
                To maintain institutional boundary security, verify geofenced attendance, and enable live bus route monitoring, our App accesses device location data (GPS) under the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-3">
                <li>
                  <strong>School Geofence Attendance Verification:</strong> When teachers or students mark attendance, we collect precise location data to verify that the user is physically present within the authorized school boundary radius.
                </li>
                <li>
                  <strong>School Bus Live Fleet Tracking (Foreground & Background Location):</strong> In driver mode, location data is collected continuously—including in the background when the app is minimized or the screen is turned off—during an active bus trip initiated by the driver. This enables real-time bus route tracking on the parent dashboard and sends automated proximity alerts when the bus approaches a student&apos;s stop for child safety.
                </li>
                <li>
                  <strong>Data Sharing & Confidentiality:</strong> Location data is never sold, rented, or shared with third-party advertisers. It is strictly shared in real time only with authorized parents and school administrators during active school bus trips.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">4. How We Use Your Information</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p>We use the collected information solely to provide, run, and improve the educational and administrative services:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>App Functionality:</strong> To display student attendance, timetables, fee statuses, homework assignments, and academic reports.</li>
                <li><strong>Communication:</strong> To send instant push notifications to parents about student attendance, school announcements, and emergency notices.</li>
                <li><strong>Multi-Tenancy Security:</strong> To isolate and protect school records so that no unauthorized school or user can access another school&apos;s database.</li>
                <li><strong>Security & Diagnostics:</strong> To detect, prevent, and debug technical issues or potential security breaches.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8 bg-[#E2EBD5]/20 p-5 rounded-[20px] border border-[#2D5A27]/5">
            <h3 className="font-serif text-xl font-bold text-[#2D5A27] m-0">5. Children&apos;s Privacy (COPPA & DPDP Compliance)</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>Because Apana Campus is used by Students who may be minors (under the age of 18):</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>School Consent:</strong> We rely on the School to obtain verified parental/guardian consent before registering minor students on our platform.</li>
                <li><strong>Minimal Data Collection:</strong> We do not collect more information from minor students than is reasonably necessary to participate in school activities listed in the App.</li>
                <li><strong>Parental Rights:</strong> Parents can review, edit, or request the deletion of their child&apos;s information by contacting their school administrator or our support team directly.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">6. Data Sharing and Disclosure</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p>We respect your privacy. <strong>We do not sell, rent, or trade your personal data.</strong> Data is only shared under the following conditions:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>With the School:</strong> All data relating to students, teachers, and parents is fully accessible by authorized School administrators.</li>
                <li><strong>Service Providers:</strong> We may share minimum required data (e.g., push tokens) with trusted cloud providers (like Firebase Cloud Messaging) and database hosts to keep the app functional.</li>
                <li><strong>Legal Requirements:</strong> If required to do so by law, court order, or governmental authorities.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">7. Data Security and Isolation</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p>We protect school records with high-grade security infrastructures:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li><strong>Multi-Tenant Isolation:</strong> We employ dedicated schema-level or database-level isolation. Each School&apos;s data is partitioned into separate secure containers inside our database.</li>
                <li><strong>Encryption:</strong> All data in transit between the App, backend APIs, and database is encrypted using industry-standard SSL/TLS (HTTPS) protocols.</li>
                <li><strong>Access Control:</strong> Strict role-based permissions (RBAC) ensure that teachers, parents, and students can only access their authorized endpoints and data.</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">8. Data Retention and Account Deletion</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-3">
              <p>We retain your personal data for as long as your School maintains an active subscription or as required for educational auditing purposes.</p>
              <p><strong>Account & Data Deletion:</strong></p>
              <p>Users can request the deletion of their accounts and associated data at any time:</p>
              <ol className="list-decimal list-inside space-y-1.5 pl-3">
                <li><strong>In-App:</strong> Navigate to the Account/Profile Settings and tap &quot;Delete My Account&quot;.</li>
                <li>
                  <strong>Web Request:</strong> Visit our public deletion request portal at:{' '}
                  <Link href="/delete-account" className="text-[#2D5A27] hover:underline font-bold">
                    https://apanacampus.com/delete-account
                  </Link>
                </li>
              </ol>
              <p>
                Upon verification of the request (and coordination with your School administration), your personal records will be permanently deleted or anonymized within 30 days.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">9. Your Rights</h3>
            <div className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p>Depending on your jurisdiction (e.g., Digital Personal Data Protection Act - DPDP in India, or GDPR), you have the right to:</p>
              <ul className="list-disc list-inside space-y-1.5 pl-3">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or outdated information.</li>
                <li>Withdraw consent for optional data processing.</li>
                <li>Request deletion of your personal account.</li>
              </ul>
              <p>To exercise these rights, please contact your school administrator or email us at <strong>info@apanacampus.com</strong>.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 border-b border-black/[0.05] pb-8">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">10. Changes to this Privacy Policy</h3>
            <p className="text-xs sm:text-sm text-[#2B2927]/80 leading-relaxed font-light">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy in the App and updating the &quot;Effective Date&quot; at the top.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 bg-white border border-[#2D5A27]/10 p-6 sm:p-8 rounded-[24px]">
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C] m-0">11. Contact Us</h3>
            <p className="text-xs sm:text-sm text-[#2B2927]/70 font-light">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2 text-[#2B2927]">
                <Mail className="w-4 h-4 text-[#2D5A27]" />
                info@apanacampus.com
              </div>
              <div className="flex items-center gap-2 text-[#2B2927]">
                <Globe className="w-4 h-4 text-[#2D5A27]" />
                https://apanacampus.com
              </div>
              <div className="flex items-center gap-2 text-[#2B2927]">
                <MapPin className="w-4 h-4 text-[#2D5A27]" />
                Mumbai, West, India
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
