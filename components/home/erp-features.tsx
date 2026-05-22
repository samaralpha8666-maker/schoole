'use client';

import React, { useState } from 'react';
import {
  GraduationCap, Users, BookOpen, Coins, Calendar, ClipboardList,
  BookMarked, Bus, Home, MessageSquare, Package, Wallet, BarChart3, Settings,
  TrendingUp, CheckCircle, Bell, Clock
} from 'lucide-react';

const erpFeatures = [
  {
    title: "Students",
    icon: GraduationCap,
    desc: "Student lifecycle from admission to graduation — all in one place.",
    subItems: ["Admission", "Enrollment", "Attendance", "Performance", "Documents"],
    visual: "stats",
    stats: [{ num: "1,240", lbl: "Enrolled" }, { num: "98%", lbl: "Attendance" }, { num: "42", lbl: "Batches" }],
    accent: "#2D5A27"
  },
  {
    title: "Staff",
    icon: Users,
    desc: "Manage all staff records, roles, attendance and performance reviews.",
    subItems: ["Teachers", "Non-Teaching", "Recruitment", "Attendance", "Leave", "Performance"],
    visual: "bars",
    bars: [{ name: "Teachers", val: 72, max: 100 }, { name: "Non-Teaching", val: 45, max: 100 }, { name: "On Leave", val: 12, max: 100 }],
    accent: "#2D5A27"
  },
  {
    title: "Academic",
    icon: BookOpen,
    desc: "Subjects, classes, syllabus mapping, and academic calendar management.",
    subItems: ["Classes", "Subjects", "Mapping", "Calendar", "Syllabus", "Lessons"],
    visual: "list",
    items: ["Class XII — Science (Batch A)", "Class XI — Commerce", "Class X — General", "Class IX — CBSE"],
    accent: "#2D5A27"
  },
  {
    title: "Fees",
    icon: Coins,
    desc: "Fee structures, collections, receipts, concessions and financial reports.",
    subItems: ["Structure", "Collection", "Tracking", "Receipts", "Concessions", "Reports"],
    visual: "stats",
    stats: [{ num: "₹42L", lbl: "Collected" }, { num: "₹8L", lbl: "Pending" }, { num: "96%", lbl: "Paid" }],
    accent: "#2D5A27"
  },
  {
    title: "Timetable",
    icon: Calendar,
    desc: "Class and teacher schedules, resources, substitution and period management.",
    subItems: ["Class Schedules", "Teacher Schedules", "Resources", "Substitution", "Periods"],
    visual: "bars",
    bars: [{ name: "Periods/Day", val: 8, max: 10 }, { name: "Teachers", val: 60, max: 80 }, { name: "Rooms Used", val: 22, max: 30 }],
    accent: "#2D5A27"
  },
  {
    title: "Examination",
    icon: ClipboardList,
    desc: "Exam management, marks entry, report cards, results and online exams.",
    subItems: ["Exams", "Marks", "Report Cards", "Results", "Online Exams"],
    visual: "stats",
    stats: [{ num: "18", lbl: "Exams" }, { num: "94%", lbl: "Pass Rate" }, { num: "240", lbl: "Toppers" }],
    accent: "#2D5A27"
  },
  {
    title: "Library",
    icon: BookMarked,
    desc: "Book catalog, issue/return tracking, fines and digital resources.",
    subItems: ["Books", "Issue/Return", "Fines", "Digital Resources"],
    visual: "list",
    items: ["Physics Vol. II — Issued to Riya", "Mathematics — Available", "Chemistry Guide — Reserved", "English Literature — Issued"],
    accent: "#2D5A27"
  },
  {
    title: "Transport",
    icon: Bus,
    desc: "Routes, vehicles, drivers, student allocation and transport fees.",
    subItems: ["Routes", "Vehicles", "Drivers", "Allocation", "Fees"],
    visual: "bars",
    bars: [{ name: "Routes", val: 14, max: 20 }, { name: "Vehicles", val: 10, max: 15 }, { name: "Students", val: 85, max: 100 }],
    accent: "#2D5A27"
  },
  {
    title: "Hostel",
    icon: Home,
    desc: "Room management, hostel attendance, mess scheduling and fees.",
    subItems: ["Rooms", "Attendance", "Mess", "Fees"],
    visual: "stats",
    stats: [{ num: "320", lbl: "Residents" }, { num: "48", lbl: "Rooms" }, { num: "₹2.4L", lbl: "Collected" }],
    accent: "#2D5A27"
  },
  {
    title: "Communication",
    icon: MessageSquare,
    desc: "Announcements, push notifications, messaging and notice board.",
    subItems: ["Announcements", "Notifications", "Messaging", "Notice Board"],
    visual: "list",
    items: ["PTM scheduled for June 14th", "Fee due reminder sent", "Sports Day announcement", "Holiday notice posted"],
    accent: "#2D5A27"
  },
  {
    title: "Inventory",
    icon: Package,
    desc: "Assets, office supplies, maintenance requests and vendor management.",
    subItems: ["Assets", "Supplies", "Maintenance", "Vendors"],
    visual: "bars",
    bars: [{ name: "Assets", val: 340, max: 400 }, { name: "Vendors", val: 22, max: 30 }, { name: "Requests", val: 18, max: 30 }],
    accent: "#2D5A27"
  },
  {
    title: "HR & Payroll",
    icon: Wallet,
    desc: "Salary processing, tax computation, payslips and HR integration.",
    subItems: ["Salary", "Processing", "Tax", "Payslips", "Integration"],
    visual: "stats",
    stats: [{ num: "₹18L", lbl: "Payroll" }, { num: "92", lbl: "Staff Paid" }, { num: "0", lbl: "Disputes" }],
    accent: "#2D5A27"
  },
  {
    title: "Reports",
    icon: BarChart3,
    desc: "Custom reports across students, finances, staff — with export options.",
    subItems: ["Student", "Attendance", "Financial", "Staff", "Custom", "Export"],
    visual: "bars",
    bars: [{ name: "Student", val: 90, max: 100 }, { name: "Financial", val: 75, max: 100 }, { name: "Attendance", val: 95, max: 100 }],
    accent: "#2D5A27"
  },
  {
    title: "Settings",
    icon: Settings,
    desc: "System profile, academic year config, roles, preferences and backup.",
    subItems: ["Profile", "Academic Year", "Roles", "Preferences", "Backup"],
    visual: "list",
    items: ["Academic Year: 2025–26", "Admin Role: Principal", "Backup: Daily at 2 AM", "Timezone: IST (Asia/Kolkata)"],
    accent: "#2D5A27"
  }
];

function StatsVisual({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {stats.map((s, i) => (
        <div
          key={i}
          className="rounded-2xl border border-[#2B2927]/8 bg-white p-4 text-center"
          style={{ animation: `fadeSlideUp 0.4s ease ${i * 0.08}s both` }}
        >
          <div className="text-2xl font-bold text-[#2D5A27] font-serif">{s.num}</div>
          <div className="text-[11px] text-[#2B2927]/60 mt-1 font-medium uppercase tracking-wide">{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}

function BarsVisual({ bars }) {
  return (
    <div className="w-full space-y-3">
      {bars.map((b, i) => {
        const pct = Math.round((b.val / b.max) * 100);
        return (
          <div key={i} style={{ animation: `fadeSlideUp 0.35s ease ${i * 0.09}s both` }}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[12px] text-[#2B2927]/70 font-medium">{b.name}</span>
              <span className="text-[12px] text-[#2D5A27] font-bold">{b.val}</span>
            </div>
            <div className="h-2.5 bg-[#E2EBD5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#2D5A27] rounded-full"
                style={{
                  width: `${pct}%`,
                  animation: `growBar 0.6s cubic-bezier(.34,1.56,.64,1) ${i * 0.1}s both`
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ListVisual({ items }) {
  return (
    <div className="w-full space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white border border-[#2B2927]/8 rounded-xl px-4 py-3"
          style={{ animation: `fadeSlideRight 0.3s ease ${i * 0.07}s both` }}
        >
          <div className="w-2 h-2 rounded-full bg-[#2D5A27] flex-shrink-0" />
          <span className="text-[13px] text-[#1C1C1C]">{item}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewPanel({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="flex flex-col gap-5 h-full" key={feature.title}>
      {/* Header */}
      <div style={{ animation: 'fadeSlideDown 0.32s cubic-bezier(.34,1.56,.64,1)' }}>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E2EBD5] border border-[#2D5A27]/15 flex items-center justify-center"
            style={{ animation: 'floatUp 3s ease-in-out infinite' }}>
            <Icon className="w-6 h-6 text-[#2D5A27]" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1C1C1C]">{feature.title}</h3>
            <p className="text-[13px] text-[#2B2927]/60 leading-snug mt-0.5">{feature.desc}</p>
          </div>
        </div>
      </div>

      {/* Sub-modules tags */}
      <div style={{ animation: 'fadeSlideUp 0.38s ease 0.05s both' }}>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#2B2927]/40 mb-2">Sub-modules</p>
        <div className="flex flex-wrap gap-2">
          {feature.subItems.map((sub, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#2B2927]/8 text-[11px] font-semibold tracking-wide uppercase text-[#2B2927]/70 hover:bg-[#E2EBD5] hover:text-[#2D5A27] transition-colors cursor-default"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Visual preview */}
      <div
        className="flex-1 rounded-2xl border border-[#2B2927]/8 bg-[#FAF9F6] p-5 flex items-center justify-center"
        style={{ animation: 'fadeIn 0.4s ease 0.1s both', minHeight: '180px' }}
      >
        {feature.visual === 'stats' && <StatsVisual stats={feature.stats} />}
        {feature.visual === 'bars' && <BarsVisual bars={feature.bars} />}
        {feature.visual === 'list' && <ListVisual items={feature.items} />}
      </div>
    </div>
  );
}

export default function ErpFeaturesInteractive() {
  const [active, setActive] = useState(0);

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes growBar {
          from { width: 0; }
          to { width: var(--target-w, 100%); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .feat-item { transition: background 0.18s, transform 0.22s cubic-bezier(.34,1.56,.64,1); }
        .feat-item:hover, .feat-item.active { background: #E2EBD5; border-left-color: #2D5A27 !important; transform: translateY(-2px); }
        .feat-item.active { transform: translateY(-3px); }
        .feat-icon-wrap { transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), background 0.18s; }
        .feat-item:hover .feat-icon-wrap, .feat-item.active .feat-icon-wrap {
          transform: scale(1.18) translateY(-2px);
          background: #2D5A27 !important;
          color: white;
        }
        .feat-item:hover .feat-icon-wrap svg, .feat-item.active .feat-icon-wrap svg {
          color: white !important;
        }
        .feat-item:hover .feat-label, .feat-item.active .feat-label { color: #2D5A27; }
      `}</style>

      <section id="erp-features" className="py-12 bg-[#FAF9F6] scroll-mt-28 relative overflow-hidden font-sans">
        {/* Subtle organic background */}
        <div className="absolute top-[20%] right-[-50px] w-[350px] h-[350px] rounded-full bg-[#E2EBD5]/20 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-50px] w-[350px] h-[350px] rounded-full bg-[#EBDCB9]/25 blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] font-bold tracking-tight">
              14 Comprehensive ERP Core Modules
            </h2>
            <p className="text-[#2B2927]/80 text-sm sm:text-base font-light leading-relaxed">
              Every administrative workflow, classroom dynamic, and billing cycle engineered inside a single secure database connection partition.
            </p>
          </div>

          {/* Interactive Panel */}
          <div className="bg-white rounded-[28px] border border-[#2B2927]/8 shadow-sm overflow-hidden flex"
            style={{ minHeight: '520px' }}>

            {/* LEFT: Sidebar List */}
            <div className="w-52 flex-shrink-0 border-r border-[#2B2927]/8 overflow-y-auto">
              {erpFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className={`feat-item flex items-center gap-3 px-4 py-3 cursor-pointer border-l-2 ${active === idx ? 'active' : 'border-transparent'}`}
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => setActive(idx)}
                  >
                    <div className="feat-icon-wrap w-8 h-8 rounded-full bg-[#E2EBD5] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#2D5A27]" />
                    </div>
                    <span className="feat-label text-[13px] font-medium text-[#1C1C1C] transition-colors">{feat.title}</span>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Preview Panel */}
            <div className="flex-1 p-7 overflow-hidden">
              <PreviewPanel feature={erpFeatures[active]} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}