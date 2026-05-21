// /college-management — Dedicated SEO page for college searches
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'College Management System & ERP Software – ApnaCampus',
  description:
    'ApnaCampus provides an advanced college management ERP with program & course management, library, hostel, transport, fee collection, online exams, and a dedicated student & teacher app.',
  path: '/college-management',
  keywords: [
    'college management software India',
    'university ERP system',
    'college LMS',
    'higher education ERP India',
    'college student portal',
  ],
});

const collegeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'College Management Software',
  description: 'Advanced ERP for colleges and universities with programs, courses, and hostel management.',
  url: 'https://apanacampus.com/college-management',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apanacampus.com' },
      { '@type': 'ListItem', position: 2, name: 'College Management', item: 'https://apanacampus.com/college-management' },
    ],
  },
};

const modules = [
  { icon: 'fa-book-open', color: 'indigo', title: 'Programs & Courses Manager', desc: 'Manage degree programs, elective course bundles, and credit hour allocations for every department.' },
  { icon: 'fa-building-columns', color: 'emerald', title: 'Hostel & Room Allocation', desc: 'Digitize hostel registration, assign rooms by gender and floor, and track daily mess attendance.' },
  { icon: 'fa-bus', color: 'amber', title: 'Transport Route Manager', desc: 'Configure bus routes, assign drivers, allocate students per route, and publish live route schedules.' },
  { icon: 'fa-book', color: 'purple', title: 'Digital Library System', desc: 'Issue and return books digitally, track overdue fines, and provide access to digital resource PDFs.' },
  { icon: 'fa-laptop-code', color: 'blue', title: 'Online Exam Portal', desc: 'Create, schedule, and publish MCQ-based or descriptive online examinations with auto-grading support.' },
  { icon: 'fa-indian-rupee-sign', color: 'green', title: 'College Fee Billing Suite', desc: 'Collect semester fees, manage scholarship deductions, and generate automated payment receipts.' },
];

const colorMap: Record<string, string> = {
  indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  green: 'text-green-400 bg-green-500/10 border-green-500/20',
};

export default function CollegeManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto text-center relative">
        <div className="blob w-[500px] h-[500px] bg-emerald-500/10 top-[-100px] right-[-100px]" />
        <div className="relative z-10 space-y-6">
          <nav aria-label="breadcrumb" className="text-xs text-gray-500 flex justify-center gap-2">
            <a href="/" className="hover:text-indigo-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-emerald-400">College Management</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest">
            College & University ERP
          </span>
          <h1 className="font-[family-name:var(--font-outfit)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
            Modernize Your College with <span className="gradient-text">ApnaCampus ERP</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A complete digital transformation platform purpose-built for colleges and universities. Manage programs, hostel, transport, library, and online exams under one roof.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/contact" className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
              Get College Demo <i className="fa-solid fa-graduation-cap" />
            </a>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-white">
            Specialized College Management Modules
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Designed to handle the complexity of higher education institutions of any scale.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="glass-card rounded-2xl p-6 space-y-4">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl ${colorMap[m.color]}`}>
                <i className={`fa-solid ${m.icon}`} />
              </div>
              <h3 className="font-semibold text-white text-lg">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
