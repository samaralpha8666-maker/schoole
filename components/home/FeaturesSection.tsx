'use client';
import { useState } from 'react';

const tabs = [
  {
    id: 'academics',
    label: 'Academics & Roster',
    icon: 'fa-graduation-cap',
    title: 'Academic Sessions, Timetable Grid & Substitution Planner',
    desc: 'Create multi-tier sessions, map classes to sections, allocate subjects to qualified teachers, and generate conflict-free timetable rosters. Handle substitution scheduling instantly when teachers are on leave.',
    features: [
      'Dynamic Academic Sessions scaling',
      'Interactive Timetable & Substitution matrices',
      'Unified Student Enrollment Roster lists',
    ],
    preview: [
      { period: 'Period 1', subject: 'Mathematics', teacher: 'Prof. Verma', active: true },
      { period: 'Period 2', subject: 'Physics (Substituted)', teacher: 'Prof. Nair', active: false },
      { period: 'Period 3', subject: 'Chemistry', teacher: 'Prof. Sen', active: true },
    ],
  },
  {
    id: 'fees',
    label: 'Smart Fee Billing',
    icon: 'fa-sack-dollar',
    title: 'Dynamic Fee Billing, Invoices & Concession Management',
    desc: 'Configure dynamic fee profiles for different student categories. Track invoice structures, payment history, concessions, and generate beautiful receipts automatically.',
    features: [
      'Custom fee profiles & structured bill cycles',
      'Partial payment tracker & concession builder',
      'Automatic overdue invoice generation',
    ],
    preview: [
      { period: 'Tuition Fee – Sem II', subject: '', teacher: '₹24,000', active: true },
      { period: 'Laboratory Access', subject: '', teacher: '₹4,500', active: true },
      { period: 'Concession Applied', subject: '', teacher: '– ₹2,000', active: false },
    ],
  },
  {
    id: 'exams',
    label: 'Exams & Gradebooks',
    icon: 'fa-square-poll-vertical',
    title: 'Exam Scheduling, Marks Entry & Online Test Portal',
    desc: 'Schedule multiple midterms and finals. Teachers record subject-wise marks, auto-compute percentages, assign grades, and publish digital report cards directly.',
    features: [
      'Multi-tier Exam Scheduler & Online Portal tests',
      'Subject-specific Gradebook & Marks entry',
      'Instant results publishing to parent portals',
    ],
    preview: [
      { period: 'Aman Sen', subject: '', teacher: '88 / 100', active: true },
      { period: 'Neha Verma', subject: '', teacher: '92 / 100', active: true },
      { period: 'Rahul Dev', subject: '', teacher: '76 / 100', active: false },
    ],
  },
  {
    id: 'security',
    label: 'Tenant Isolation',
    icon: 'fa-server',
    title: 'Isolated Multi-Tenant PostgreSQL Database Architecture',
    desc: 'Each school owns an independent isolated PostgreSQL schema. Zero data leakage, super-fast queries, independent backups, and total control per institution.',
    features: [
      'Dynamic search_path schema isolation',
      'Daily automated backups per institution',
      'Zero cross-tenant data hazards',
    ],
    preview: [
      { period: 'school_xyz schema', subject: 'Isolated', teacher: '✓ Secure', active: true },
      { period: 'school_abc schema', subject: 'Isolated', teacher: '✓ Secure', active: true },
      { period: 'Cross-tenant access', subject: 'Blocked', teacher: '✗ Denied', active: false },
    ],
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState('academics');
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section
      id="features"
      className="py-20 bg-[#f8fafa]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="text-center space-y-3 mb-12">
          <span className="section-label">Core Modules</span>
          <h2
            id="features-heading"
            className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1e1b4b]"
          >
            Fully Loaded with Enterprise Capabilities
          </h2>
          <p className="text-[#6b8a8a] max-w-xl mx-auto text-sm sm:text-base">
            A single multi-tenant infrastructure delivering specialized modules for every department.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Feature categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border ${
                active === t.id
                  ? 'bg-[#4f46e5] text-white border-[#4f46e5] shadow-md shadow-teal-200'
                  : 'bg-white text-[#4d6464] border-[#daeaea] hover:border-[#4f46e5] hover:text-[#4f46e5]'
              }`}
            >
              <i className={`fa-solid ${t.icon} text-xs`} aria-hidden="true" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          className="bg-white border border-[#daeaea] rounded-2xl p-6 sm:p-10 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Copy */}
            <div className="flex-1 space-y-5">
              <div className="icon-box">
                <i className={`fa-solid ${current.icon}`} aria-hidden="true" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl text-[#1e1b4b]">
                {current.title}
              </h3>
              <p className="text-[#6b8a8a] text-sm leading-relaxed">{current.desc}</p>
              <ul className="space-y-2.5 text-sm text-[#2d4a4a]">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-[#4f46e5] text-[9px]" aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preview table */}
            <div className="flex-1 w-full">
              <div className="bg-[#f8fafa] border border-[#daeaea] rounded-xl overflow-hidden">
                <div className="bg-[#1e1b4b] px-5 py-3 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{current.title.split(' ')[0]} Preview</span>
                  <span className="text-[#4f46e5] text-xs font-mono">ApnaCampus ERP</span>
                </div>
                <div className="divide-y divide-[#e6efef]">
                  {current.preview.map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3.5 text-sm">
                      <span className="text-[#2d4a4a] font-medium">{row.period}</span>
                      <span className={`font-semibold ${row.active ? 'text-[#4f46e5]' : 'text-amber-500'}`}>
                        {row.teacher}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
