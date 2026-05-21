// /school-admission — Clean URL, SSG, dedicated SEO page
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'School Admission Management Software – ApnaCampus',
  description:
    'Streamline your school admission process digitally. ApnaCampus offers a complete school admission management system with online forms, document verification, enrollment rosters, and more.',
  path: '/school-admission',
  keywords: [
    'school admission management software India',
    'online school admission portal',
    'admission form software',
    'student enrollment system',
    'school admission ERP',
  ],
});

// JSON-LD Schema specific to this page
const admissionSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'School Admission Management',
  description: 'Manage school admissions, enrollments, and document verification digitally.',
  url: 'https://apanacampus.com/school-admission',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apanacampus.com' },
      { '@type': 'ListItem', position: 2, name: 'School Admission', item: 'https://apanacampus.com/school-admission' },
    ],
  },
};

const features = [
  {
    icon: 'fa-file-circle-plus',
    title: 'Online Admission Forms',
    desc: 'Generate and share digital admission forms for new academic sessions with custom fields per grade.',
  },
  {
    icon: 'fa-folder-open',
    title: 'Document Verification Portal',
    desc: 'Digitally collect birth certificates, transfer certificates, and marksheets with real-time verification status.',
  },
  {
    icon: 'fa-users-gear',
    title: 'Enrollment Roster Management',
    desc: 'Assign admitted students to classes and sections automatically and generate class-wise rosters.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Admission Analytics Dashboard',
    desc: 'Track total applications vs confirmed admissions, dropout rates, and class fill-up percentages at a glance.',
  },
  {
    icon: 'fa-id-card',
    title: 'Student ID Card Generation',
    desc: 'Auto-generate printable photo identity cards with barcodes after admission confirmation.',
  },
  {
    icon: 'fa-bell',
    title: 'Parent Notification System',
    desc: 'Automatically notify parents about admission status updates, pending documents, and fee payment deadlines.',
  },
];

export default function SchoolAdmissionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto text-center relative">
        <div className="blob w-[400px] h-[400px] bg-indigo-500/10 top-[-80px] left-1/2 -translate-x-1/2" />
        <div className="relative z-10 space-y-6">
          <nav aria-label="breadcrumb" className="text-xs text-gray-500 flex justify-center gap-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-indigo-400">School Admission</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest">
            Admission Module
          </span>
          <h1 className="font-[family-name:var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
            School Admission Management <span className="gradient-text">Made Digital</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Replace paper-based admission processes with a smart digital workflow. From application to enrollment — everything online with ApnaCampus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/contact" className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
              Start Free Demo <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="#features" className="px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-gray-800/60 transition-all flex items-center gap-2">
              Explore Features <i className="fa-solid fa-chevron-down" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-white">
            Complete Admission Workflow Tools
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Every step of the admission journey — from inquiry to enrollment — covered in one integrated system.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <h3 className="font-semibold text-white text-lg">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <div className="glass-card rounded-2xl p-10 border border-indigo-500/20 space-y-6">
          <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl text-white">
            Ready to Digitize Your Admission Process?
          </h2>
          <p className="text-gray-400">Join hundreds of schools already using ApnaCampus for smooth, paperless admissions.</p>
          <a href="/contact" className="inline-flex px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 items-center gap-2">
            Book a Live Demo <i className="fa-solid fa-calendar-check" />
          </a>
        </div>
      </section>
    </>
  );
}
