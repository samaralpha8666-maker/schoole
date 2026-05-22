'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  GraduationCap,
  Users,
  BookOpen,
  Coins,
  Calendar,
  ClipboardList,
  BookMarked,
  Bus,
  Home,
  MessageSquare,
  Package,
  Wallet,
  BarChart3,
  Settings,
} from 'lucide-react';

const erpFeatures = [
  {
    title: "Students",
    icon: GraduationCap,
    subItems: ["Admission", "Enrollment", "Attendance", "Performance", "Documents"],
    description: "Manage the complete student lifecycle from admission to graduation with smart tracking and document management.",
    color: "#2D5A27",
    bg: "#E2EBD5",
    visual: "students",
  },
  {
    title: "Staff",
    icon: Users,
    subItems: ["Teachers", "Non-Teaching", "Recruitment", "Attendance", "Leave", "Performance"],
    description: "Complete HR management for all staff members — from recruitment to performance reviews and leave management.",
    color: "#1A4A6B",
    bg: "#D5E4EB",
    visual: "staff",
  },
  {
    title: "Academic",
    icon: BookOpen,
    subItems: ["Classes", "Subjects", "Mapping", "Calendar", "Syllabus", "Lessons"],
    description: "Structure your entire academic framework — classes, subjects, lesson plans and the full academic calendar.",
    color: "#6B3A1A",
    bg: "#EBD5C5",
    visual: "academic",
  },
  {
    title: "Fees",
    icon: Coins,
    subItems: ["Structure", "Collection", "Tracking", "Receipts", "Concessions", "Reports"],
    description: "Automate fee collection, generate receipts, apply concessions and track outstanding payments effortlessly.",
    color: "#1A6B4A",
    bg: "#C5EBD8",
    visual: "fees",
  },
  {
    title: "Timetable",
    icon: Calendar,
    subItems: ["Class/Teacher Schedules", "Resources", "Substitution", "Periods"],
    description: "Build conflict-free timetables for classes and teachers with automated substitution management.",
    color: "#4A1A6B",
    bg: "#D8C5EB",
    visual: "timetable",
  },
  {
    title: "Examination",
    icon: ClipboardList,
    subItems: ["Exams", "Marks", "Report Cards", "Results", "Online Exams"],
    description: "Conduct exams, record marks, generate report cards and publish results — online and offline.",
    color: "#6B1A1A",
    bg: "#EBC5C5",
    visual: "examination",
  },
  {
    title: "Library",
    icon: BookMarked,
    subItems: ["Books", "Issue/Return", "Fines", "Digital Resources"],
    description: "Digitize your library — catalog books, manage issue/return cycles, collect fines and provide digital resources.",
    color: "#1A5A6B",
    bg: "#C5E2EB",
    visual: "library",
  },
  {
    title: "Transport",
    icon: Bus,
    subItems: ["Routes", "Vehicles", "Drivers", "Allocation", "Fees"],
    description: "Manage routes, vehicles and drivers. Allocate students to buses and track transport fee collections.",
    color: "#6B5A1A",
    bg: "#EBE2C5",
    visual: "transport",
  },
  {
    title: "Hostel",
    icon: Home,
    subItems: ["Rooms", "Attendance", "Mess", "Fees"],
    description: "Allocate rooms, track hostel attendance, manage mess schedules and collect hostel fees seamlessly.",
    color: "#2D5A27",
    bg: "#D5EBC5",
    visual: "hostel",
  },
  {
    title: "Communication",
    icon: MessageSquare,
    subItems: ["Announcements", "Notifications", "Messaging", "Notice Board"],
    description: "Keep everyone informed with instant announcements, push notifications and a digital notice board.",
    color: "#1A3D6B",
    bg: "#C5D5EB",
    visual: "communication",
  },
  {
    title: "Inventory",
    icon: Package,
    subItems: ["Assets", "Supplies", "Maintenance", "Vendors"],
    description: "Track school assets, manage supply stocks, schedule maintenance and maintain vendor records.",
    color: "#3D1A6B",
    bg: "#D0C5EB",
    visual: "inventory",
  },
  {
    title: "HR & Payroll",
    icon: Wallet,
    subItems: ["Salary", "Processing", "Tax", "Payslips", "Integration"],
    description: "Process monthly salaries, compute taxes, generate payslips and integrate with accounting systems.",
    color: "#1A6B1A",
    bg: "#C5EBC5",
    visual: "payroll",
  },
  {
    title: "Reports",
    icon: BarChart3,
    subItems: ["Student", "Attendance", "Financial", "Staff", "Custom", "Export"],
    description: "Generate actionable reports across every module — export as PDF, Excel or share directly.",
    color: "#6B3D1A",
    bg: "#EBD0C5",
    visual: "reports",
  },
  {
    title: "Settings",
    icon: Settings,
    subItems: ["Profile", "Academic Year", "Roles", "Preferences", "Backup"],
    description: "Configure academic years, define roles and permissions, manage preferences and schedule backups.",
    color: "#1A1A6B",
    bg: "#C5C5EB",
    visual: "settings",
  },
];

// SVG Illustrations for each module
const VisualIllustrations = {
  students: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="50" width="120" height="140" rx="12" fill={color} opacity="0.15" />
      <circle cx="120" cy="100" r="30" fill={color} opacity="0.3" />
      <rect x="75" y="140" width="90" height="8" rx="4" fill={color} opacity="0.4" />
      <rect x="85" y="155" width="70" height="6" rx="3" fill={color} opacity="0.25" />
      <rect x="200" y="60" width="140" height="12" rx="6" fill={color} opacity="0.3" />
      <rect x="200" y="82" width="110" height="10" rx="5" fill={color} opacity="0.2" />
      <rect x="200" y="102" width="120" height="10" rx="5" fill={color} opacity="0.2" />
      <rect x="200" y="130" width="140" height="24" rx="8" fill={color} opacity="0.15" />
      <rect x="200" y="164" width="140" height="24" rx="8" fill={color} opacity="0.1" />
      <rect x="60" y="200" width="280" height="2" rx="1" fill={color} opacity="0.2" />
      <circle cx="80" cy="225" r="10" fill={color} opacity="0.3" />
      <circle cx="110" cy="225" r="10" fill={color} opacity="0.2" />
      <circle cx="140" cy="225" r="10" fill={color} opacity="0.2" />
      <rect x="180" y="218" width="140" height="14" rx="7" fill={color} opacity="0.2" />
    </svg>
  ),
  staff: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${60 + i * 100}, 55)`}>
          <rect width="80" height="100" rx="12" fill={color} opacity={0.15 - i * 0.02} />
          <circle cx="40" cy="32" r="20" fill={color} opacity="0.3" />
          <rect x="10" y="62" width="60" height="8" rx="4" fill={color} opacity="0.35" />
          <rect x="20" y="76" width="40" height="6" rx="3" fill={color} opacity="0.2" />
        </g>
      ))}
      <rect x="60" y="175" width="280" height="16" rx="8" fill={color} opacity="0.12" />
      <rect x="60" y="200" width="200" height="12" rx="6" fill={color} opacity="0.1" />
      <rect x="60" y="220" width="240" height="12" rx="6" fill={color} opacity="0.1" />
    </svg>
  ),
  academic: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="55" width="280" height="40" rx="10" fill={color} opacity="0.2" />
      <rect x="75" y="66" width="100" height="18" rx="6" fill={color} opacity="0.4" />
      <rect x="195" y="66" width="60" height="18" rx="6" fill={color} opacity="0.2" />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <rect x="60" y={110 + i * 30} width="280" height="22" rx="6" fill={color} opacity={i % 2 === 0 ? 0.08 : 0.04} />
          <circle cx="80" cy={121 + i * 30} r="6" fill={color} opacity="0.3" />
          <rect x="96" y={116 + i * 30} width="140" height="10" rx="5" fill={color} opacity="0.25" />
          <rect x="280" y={116 + i * 30} width="40" height="10" rx="5" fill={color} opacity="0.2" />
        </g>
      ))}
    </svg>
  ),
  fees: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="50" width="130" height="100" rx="14" fill={color} opacity="0.15" />
      <text x="125" y="105" textAnchor="middle" fill={color} opacity="0.6" fontSize="28" fontWeight="bold">INR</text>
      <rect x="75" y="160" width="100" height="8" rx="4" fill={color} opacity="0.3" />
      <rect x="90" y="175" width="70" height="6" rx="3" fill={color} opacity="0.2" />
      <rect x="210" y="50" width="130" height="60" rx="12" fill={color} opacity="0.1" />
      <rect x="225" y="65" width="80" height="8" rx="4" fill={color} opacity="0.3" />
      <rect x="225" y="82" width="60" height="6" rx="3" fill={color} opacity="0.2" />
      <rect x="210" y="125" width="130" height="60" rx="12" fill={color} opacity="0.1" />
      <rect x="225" y="140" width="80" height="8" rx="4" fill={color} opacity="0.3" />
      <rect x="225" y="157" width="60" height="6" rx="3" fill={color} opacity="0.2" />
      <rect x="60" y="200" width="280" height="16" rx="8" fill={color} opacity="0.12" />
      <rect x="60" y="225" width="180" height="12" rx="6" fill={color} opacity="0.08" />
    </svg>
  ),
  timetable: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="55" width="280" height="30" rx="8" fill={color} opacity="0.2" />
      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
        <text key={d} x={95 + i * 52} y="76" textAnchor="middle" fill={color} opacity="0.5" fontSize="11" fontWeight="600">{d}</text>
      ))}
      {[0, 1, 2, 3].map(row => (
        [0, 1, 2, 3, 4].map(col => (
          <rect key={`${row}-${col}`} x={64 + col * 52} y={96 + row * 42} width="44" height="34" rx="8"
            fill={color} opacity={(row + col) % 3 === 0 ? 0.25 : 0.08} />
        ))
      ))}
    </svg>
  ),
  examination: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="80" y="50" width="240" height="180" rx="16" fill={color} opacity="0.1" />
      <rect x="100" y="70" width="160" height="16" rx="8" fill={color} opacity="0.35" />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <circle cx="115" cy={106 + i * 28} r="6" fill={color} opacity="0.3" />
          <rect x="130" y={101 + i * 28} width="120" height="10" rx="5" fill={color} opacity="0.2" />
          <rect x="280" y={101 + i * 28} width="30" height="10" rx="5" fill={color} opacity={i < 3 ? 0.4 : 0.1} />
        </g>
      ))}
    </svg>
  ),
  library: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <rect key={i} x={64 + i * 40} y="60" width="30" height="140" rx="6"
          fill={color} opacity={0.1 + (i % 3) * 0.08} />
      ))}
      <rect x="60" y="200" width="280" height="10" rx="5" fill={color} opacity="0.3" />
      <rect x="60" y="218" width="200" height="8" rx="4" fill={color} opacity="0.15" />
      <rect x="270" y="218" width="70" height="8" rx="4" fill={color} opacity="0.25" />
    </svg>
  ),
  transport: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="120" width="280" height="80" rx="16" fill={color} opacity="0.15" />
      <rect x="60" y="100" width="200" height="50" rx="12" fill={color} opacity="0.2" />
      <circle cx="110" cy="210" r="18" fill={color} opacity="0.35" />
      <circle cx="110" cy="210" r="8" fill="white" opacity="0.6" />
      <circle cx="290" cy="210" r="18" fill={color} opacity="0.35" />
      <circle cx="290" cy="210" r="8" fill="white" opacity="0.6" />
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x={80 + i * 60} y="125" width="40" height="30" rx="6" fill={color} opacity="0.2" />
      ))}
      <rect x="60" y="60" width="120" height="12" rx="6" fill={color} opacity="0.2" />
      <rect x="200" y="60" width="140" height="12" rx="6" fill={color} opacity="0.15" />
      <rect x="60" y="82" width="80" height="10" rx="5" fill={color} opacity="0.15" />
    </svg>
  ),
  hostel: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="100" y="50" width="200" height="20" rx="6" fill={color} opacity="0.3" />
      <polygon points="80,80 200,50 320,80" fill={color} opacity="0.2" />
      <rect x="80" y="80" width="240" height="150" rx="0" fill={color} opacity="0.1" />
      {[0, 1, 2].map(row => (
        [0, 1, 2, 3].map(col => (
          <rect key={`${row}-${col}`} x={95 + col * 56} y={95 + row * 44} width="36" height="28" rx="4"
            fill={color} opacity={(row + col) % 2 === 0 ? 0.25 : 0.12} />
        ))
      ))}
    </svg>
  ),
  communication: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="60" width="180" height="50" rx="14" fill={color} opacity="0.2" />
      <rect x="75" y="74" width="120" height="10" rx="5" fill={color} opacity="0.4" />
      <rect x="75" y="90" width="90" height="8" rx="4" fill={color} opacity="0.25" />
      <path d="M60 110 L85 110" stroke={color} strokeWidth="2" opacity="0.3" />
      <rect x="160" y="130" width="180" height="50" rx="14" fill={color} opacity="0.15" />
      <rect x="175" y="144" width="120" height="10" rx="5" fill={color} opacity="0.3" />
      <rect x="175" y="160" width="90" height="8" rx="4" fill={color} opacity="0.2" />
      <rect x="60" y="200" width="150" height="50" rx="14" fill={color} opacity="0.2" />
      <rect x="75" y="214" width="100" height="10" rx="5" fill={color} opacity="0.35" />
      <rect x="75" y="230" width="70" height="8" rx="4" fill={color} opacity="0.2" />
    </svg>
  ),
  inventory: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      {[0, 1, 2].map(row => (
        [0, 1, 2].map(col => (
          <rect key={`${row}-${col}`} x={65 + col * 100} y={55 + row * 70} width="80" height="55" rx="12"
            fill={color} opacity={0.08 + (row * col) * 0.03} />
        ))
      ))}
      {[0, 1, 2].map(row => (
        [0, 1, 2].map(col => (
          <g key={`icon-${row}-${col}`}>
            <rect x={80 + col * 100} y={68 + row * 70} width="50" height="8" rx="4" fill={color} opacity="0.3" />
            <rect x={80 + col * 100} y={82 + row * 70} width="35" height="6" rx="3" fill={color} opacity="0.2" />
          </g>
        ))
      ))}
    </svg>
  ),
  payroll: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="55" width="280" height="55" rx="12" fill={color} opacity="0.15" />
      <rect x="80" y="68" width="80" height="12" rx="6" fill={color} opacity="0.4" />
      <rect x="80" y="86" width="60" height="10" rx="5" fill={color} opacity="0.25" />
      <rect x="280" y="68" width="40" height="24" rx="8" fill={color} opacity="0.35" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="60" y={125 + i * 32} width="280" height="24" rx="6" fill={color} opacity={i % 2 === 0 ? 0.06 : 0.03} />
          <rect x="75" y={132 + i * 32} width="100" height="10" rx="5" fill={color} opacity="0.2" />
          <rect x="200" y={132 + i * 32} width="60" height="10" rx="5" fill={color} opacity="0.2" />
          <rect x="295" y={132 + i * 32} width="30" height="10" rx="5" fill={color} opacity="0.3" />
        </g>
      ))}
    </svg>
  ),
  reports: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <rect x="60" y="200" width="40" height="60" rx="6" fill={color} opacity="0.35" />
      <rect x="115" y="160" width="40" height="100" rx="6" fill={color} opacity="0.3" />
      <rect x="170" y="130" width="40" height="130" rx="6" fill={color} opacity="0.25" />
      <rect x="225" y="100" width="40" height="160" rx="6" fill={color} opacity="0.35" />
      <rect x="280" y="70" width="40" height="190" rx="6" fill={color} opacity="0.4" />
      <path d="M60 200 L115 160 L170 130 L225 100 L280 70 L320 50" stroke={color} strokeWidth="2.5" opacity="0.5" strokeDasharray="6 3" />
      <rect x="60" y="55" width="200" height="14" rx="7" fill={color} opacity="0.2" />
      <rect x="60" y="77" width="150" height="10" rx="5" fill={color} opacity="0.12" />
    </svg>
  ),
  settings: (color) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
      <rect x="40" y="30" width="320" height="240" rx="20" fill="white" opacity="0.6" />
      <circle cx="200" cy="150" r="60" fill={color} opacity="0.1" />
      <circle cx="200" cy="150" r="40" fill={color} opacity="0.15" />
      <circle cx="200" cy="150" r="20" fill={color} opacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 42 * Math.cos(rad);
        const y1 = 150 + 42 * Math.sin(rad);
        const x2 = 200 + 62 * Math.cos(rad);
        const y2 = 150 + 62 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.3" />;
      })}
      <rect x="60" y="55" width="120" height="12" rx="6" fill={color} opacity="0.2" />
      <rect x="60" y="74" width="90" height="10" rx="5" fill={color} opacity="0.12" />
      <rect x="220" y="55" width="120" height="12" rx="6" fill={color} opacity="0.2" />
      <rect x="220" y="74" width="90" height="10" rx="5" fill={color} opacity="0.12" />
    </svg>
  ),
};

export default function ErpFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index);
          if (!isNaN(idx)) {
            setIsTransitioning(true);
            setTimeout(() => {
              setActiveIndex(idx);
              setIsTransitioning(false);
            }, 150);
          }
        }
      });
    }, options);

    itemRefs.current.forEach((el) => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const activeFeature = erpFeatures[activeIndex];
  const IllustrationComponent = VisualIllustrations[activeFeature.visual];

  return (
    <section
      id="erp-features"
      className="py-16 bg-[#FAF9F6] scroll-mt-28 relative overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[20%] right-[-50px] w-[350px] h-[350px] rounded-full pointer-events-none -z-10 blur-3xl transition-colors duration-700"
        style={{ background: activeFeature.bg, opacity: 0.3 }}
      />
      <div
        className="absolute bottom-[10%] left-[-50px] w-[350px] h-[350px] rounded-full pointer-events-none -z-10 blur-3xl transition-colors duration-700"
        style={{ background: activeFeature.bg, opacity: 0.25 }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] font-bold tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            14 Comprehensive ERP Core Modules
          </h2>
          <p className="text-[#2B2927]/70 text-sm sm:text-base font-light leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>
            Every administrative workflow, classroom dynamic, and billing cycle engineered inside a single secure database.
          </p>
        </div>

        {/* Main Scroll Layout */}
        <div className="flex gap-0 relative items-start">

          {/* LEFT: Feature Scroller — 40% */}
          <div
            ref={scrollContainerRef}
            className="w-[40%] flex-shrink-0 pr-8 space-y-3"
            style={{ maxHeight: '80vh', overflowY: 'auto', scrollbarWidth: 'none' }}
          >
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {erpFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  data-index={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsTransitioning(false);
                    }, 150);
                    itemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '20px',
                    padding: '18px 20px',
                    border: isActive ? `2px solid ${feat.color}40` : '2px solid transparent',
                    background: isActive ? `${feat.bg}70` : 'white',
                    boxShadow: isActive
                      ? `0 8px 32px ${feat.color}20, 0 2px 8px ${feat.color}10`
                      : '0 1px 4px rgba(0,0,0,0.06)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {/* Active indicator bar */}
                    <div
                      style={{
                        width: '4px',
                        height: '36px',
                        borderRadius: '4px',
                        background: isActive ? feat.color : 'transparent',
                        transition: 'background 0.35s ease',
                        flexShrink: 0,
                      }}
                    />

                    {/* Icon */}
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: isActive ? feat.color : '#F0EDE8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.35s ease',
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: isActive ? 'white' : feat.color, transition: 'color 0.35s ease' }}
                      />
                    </div>

                    {/* Title */}
                    <span
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: '15px',
                        fontWeight: '700',
                        color: isActive ? feat.color : '#1C1C1C',
                        transition: 'color 0.35s ease',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {feat.title}
                    </span>

                    {/* Arrow */}
                    <div style={{ marginLeft: 'auto' }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{
                          transform: isActive ? 'translateX(3px)' : 'translateX(0)',
                          opacity: isActive ? 1 : 0.3,
                          transition: 'all 0.35s ease',
                        }}
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" stroke={feat.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Sub items — visible when active */}
                  <div
                    style={{
                      paddingLeft: '62px',
                      maxHeight: isActive ? '120px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingBottom: '4px' }}>
                      {feat.subItems.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            padding: '3px 10px',
                            borderRadius: '20px',
                            background: `${feat.color}15`,
                            border: `1px solid ${feat.color}25`,
                            color: feat.color,
                            fontSize: '10px',
                            fontWeight: '600',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            fontFamily: 'system-ui, sans-serif',
                          }}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sticky Visual Panel — 60% */}
          <div
            className="w-[60%] flex-shrink-0"
            style={{ position: 'sticky', top: '100px', height: 'fit-content' }}
          >
            <div
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${activeFeature.bg}90 0%, ${activeFeature.bg}40 100%)`,
                border: `1.5px solid ${activeFeature.color}20`,
                boxShadow: `0 20px 60px ${activeFeature.color}18, 0 4px 16px ${activeFeature.color}10`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '480px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Top bar */}
              <div
                style={{
                  padding: '20px 28px 16px',
                  borderBottom: `1px solid ${activeFeature.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: `${activeFeature.color}08`,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: activeFeature.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 14px ${activeFeature.color}40`,
                    transition: 'background 0.5s ease',
                    flexShrink: 0,
                  }}
                >
                  {React.createElement(activeFeature.icon, { size: 22, color: 'white' })}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1C1C1C',
                      margin: 0,
                      lineHeight: 1.2,
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    {activeFeature.title} Module
                  </h3>
                  <p
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '12px',
                      color: '#2B2927',
                      opacity: isTransitioning ? 0 : 0.55,
                      transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
                      transition: 'opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s',
                      margin: '3px 0 0',
                    }}
                  >
                    {activeFeature.subItems.length} sub-features included
                  </p>
                </div>

                {/* Dot indicators */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
                  {[0, 1, 2].map(d => (
                    <div
                      key={d}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: d === 0 ? '#FF5F57' : d === 1 ? '#FFBE2E' : '#2AC33B',
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Illustration Area */}
              <div
                style={{
                  flex: 1,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '24px',
                }}
              >
                {/* SVG Illustration */}
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)',
                    transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
                  }}
                >
                  {IllustrationComponent && IllustrationComponent(activeFeature.color)}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: '14px',
                    lineHeight: '1.7',
                    color: '#2B2927',
                    opacity: isTransitioning ? 0 : 0.75,
                    transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
                    transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                    textAlign: 'center',
                    maxWidth: '380px',
                    margin: 0,
                  }}
                >
                  {activeFeature.description}
                </p>

                {/* Feature tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center',
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
                    transition: 'opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s',
                  }}
                >
                  {activeFeature.subItems.map((sub, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '24px',
                        background: `${activeFeature.color}12`,
                        border: `1px solid ${activeFeature.color}30`,
                        color: activeFeature.color,
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        fontFamily: 'system-ui, sans-serif',
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress dots at bottom */}
              <div
                style={{
                  padding: '16px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderTop: `1px solid ${activeFeature.color}12`,
                }}
              >
                {erpFeatures.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      height: '4px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      background: i === activeIndex ? activeFeature.color : `${activeFeature.color}25`,
                      width: i === activeIndex ? '24px' : '6px',
                      transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                ))}
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '11px',
                    color: '#2B2927',
                    opacity: 0.5,
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: '600',
                  }}
                >
                  {activeIndex + 1} / {erpFeatures.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}