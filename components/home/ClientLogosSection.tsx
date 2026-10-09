'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  BookOpen, 
  Building,
  ChevronLeft, 
  ChevronRight, 
  Award,
  ExternalLink,
  QrCode,
  ScanFace,
  Calculator,
  ShieldCheck,
  Sparkles,
  MapPin,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  category: 'COLLEGE' | 'SCHOOL' | 'COACHING';
  location: string;
  logo: string;
  website?: string;
  featured?: boolean;
}

const clientsData: ClientItem[] = [
  // ── 1. COLLEGES & HIGHER EDUCATION ──
  {
    id: 'swift-college',
    name: 'Swift Group of Colleges (SGOC)',
    category: 'COLLEGE',
    location: 'Rajpura, Punjab',
    logo: '/clients/swift-group-colleges.png',
    website: 'https://www.swiftcollege.edu.in/',
    featured: true,
  },
  {
    id: 'ytcem-college',
    name: 'Yadavrao Tasgaonkar Engg. & Mgmt. (YTCEM / SES)',
    category: 'COLLEGE',
    location: 'Karjat, Mumbai',
    logo: '/clients/ses-ytcem-college.jpg',
    website: 'https://ytcem.com/about-us/about-trust/ses-trust/',
    featured: true,
  },

  // ── 2. SCHOOLS & INTER COLLEGES ──
  {
    id: 'sn-inter-college',
    name: 'Shiv Narayan SVM Inter College',
    category: 'SCHOOL',
    location: 'Maharajganj',
    logo: '/clients/sn-inter-college.jpg',
  },
  {
    id: 'svic-inter-college',
    name: 'Swami Vivekanand Inter College',
    category: 'SCHOOL',
    location: 'Rajganj',
    logo: '/clients/svic-inter-college.jpg',
  },
  {
    id: 'shyama-mall-inter-college',
    name: 'Shyama Mall Balika Inter College',
    category: 'SCHOOL',
    location: 'Amahiya, Gorakhpur',
    logo: '/clients/shyama-mall-inter-college.jpg',
  },
  {
    id: 'raghurai-inter-college',
    name: 'Raghurai Inter College',
    category: 'SCHOOL',
    location: 'Ramnagar, Gorakhpur',
    logo: '/clients/raghurai-inter-college.jpg',
  },
  {
    id: 'pioneer-education-trust',
    name: 'Pioneer Education Trust',
    category: 'SCHOOL',
    location: 'Regional Campus',
    logo: '/clients/pioneer-education-trust.jpg',
  },
  {
    id: 'kgps',
    name: 'K. G. Public School',
    category: 'SCHOOL',
    location: 'Darbhanga',
    logo: '/clients/kg-public-school.jpg',
  },
  {
    id: 'jps',
    name: 'JPS Central Academy',
    category: 'SCHOOL',
    location: 'Jhangha, Gorakhpur',
    logo: '/clients/jps-central-academy.jpg',
  },
  {
    id: 'aarybhatt',
    name: 'Aarybhatt Public School',
    category: 'SCHOOL',
    location: 'Kunauni Chowk',
    logo: '/clients/aarybhatt-public-school.jpg',
  },
  {
    id: 'imaan',
    name: 'IPS Imaan Public School',
    category: 'SCHOOL',
    location: 'Supaul Bazar, Biraul',
    logo: '/clients/imaan-public-school.jpg',
  },
  {
    id: 'hansraj-chaudhary',
    name: 'Hansraj Chaudhary P.M.V.',
    category: 'SCHOOL',
    location: 'Kuin Bazar, Gorakhpur',
    logo: '/clients/hansraj-chaudhary-school.jpg',
  },
  {
    id: 'msgm',
    name: 'M.S.G.M. Public School',
    category: 'SCHOOL',
    location: 'Gambhirwa Bazar',
    logo: '/clients/msgm-school.jpg',
  },
  {
    id: 'sdssn',
    name: 'S.D.S.S.N. Junior Sec. School',
    category: 'SCHOOL',
    location: 'Nichlaul, Maharajganj',
    logo: '/clients/sdssn-school.jpg',
  },
  {
    id: 'ps-public',
    name: 'P. S. Public School',
    category: 'SCHOOL',
    location: 'Regional Campus',
    logo: '/clients/ps-public-school.jpg',
  },
  {
    id: 'swami-vivekanand',
    name: 'Swami Vivekanand Bal Vidya Mandir',
    category: 'SCHOOL',
    location: 'Kuin Bazar, Gorakhpur',
    logo: '/clients/swami-vivekanand-school.jpg',
  },

  // ── 3. COACHING CENTERS ──
  {
    id: 'divyansh-coaching',
    name: 'Divyansh Coaching Center',
    category: 'COACHING',
    location: 'Jahda Bazar, Maharajganj',
    logo: '/clients/divyansh-coaching.jpg',
  },
  {
    id: 'vidhun-learnify',
    name: 'Vidhun Learnify',
    category: 'COACHING',
    location: 'Digital Learning Hub',
    logo: '/clients/vidhun-learnify.jpg',
  },
  {
    id: 'indrawati-gurukul',
    name: 'Indrawati Gurukul Classes & Library',
    category: 'COACHING',
    location: 'Gorakhpur Region',
    logo: '/clients/indrawati-gurukul.jpg',
  },
];

export default function ClientLogosSection() {
  const [filter, setFilter] = useState<'ALL' | 'COLLEGE' | 'SCHOOL' | 'COACHING'>('ALL');
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'ALL' 
    ? clientsData 
    : clientsData.filter(c => c.category === filter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Continuous subtle auto-scroll that pauses on user hover
  useEffect(() => {
    if (isHovered) return;
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 8) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollLeft += 1;
      }
    }, 32);

    return () => clearInterval(interval);
  }, [isHovered, filter]);

  return (
    <section className="relative bg-[#FAF9F6] py-10 md:py-14 border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-[1390px] mx-auto px-4 md:px-6">
        
        {/* Top Header & Category Controls (Without numbers) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E2EBD5] text-[#2D5A27] text-[11px] font-bold tracking-wider uppercase shrink-0">
              <Award className="w-3.5 h-3.5" />
              Verified Partners
            </span>
            <h2 className="font-bold text-sm md:text-base text-[#1C1C1C] truncate">
              Trusted by Premier <span className="text-[#003366]">Colleges</span>, <span className="text-[#2D5A27]">Schools</span> &amp; <span className="text-[#D97706]">Coaching Centers</span>
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap">
            {/* Category Filter Pills (No counts) */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setFilter('ALL')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === 'ALL'
                    ? 'bg-[#2D5A27] text-white shadow-xs'
                    : 'bg-white text-[#1C1C1C]/70 hover:bg-black/5 border border-black/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('COLLEGE')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === 'COLLEGE'
                    ? 'bg-[#003366] text-white shadow-xs'
                    : 'bg-white text-[#1C1C1C]/70 hover:bg-black/5 border border-black/10'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                Colleges
              </button>
              <button
                onClick={() => setFilter('SCHOOL')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === 'SCHOOL'
                    ? 'bg-[#2D5A27] text-white shadow-xs'
                    : 'bg-white text-[#1C1C1C]/70 hover:bg-black/5 border border-black/10'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                Schools
              </button>
              <button
                onClick={() => setFilter('COACHING')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  filter === 'COACHING'
                    ? 'bg-[#D97706] text-white shadow-xs'
                    : 'bg-white text-[#1C1C1C]/70 hover:bg-black/5 border border-black/10'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Coaching
              </button>
            </div>

            {/* Left & Right Arrow Buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll Left"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#1C1C1C]/70 hover:bg-[#2D5A27] hover:text-white hover:border-[#2D5A27] transition-all shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll Right"
                className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#1C1C1C]/70 hover:bg-[#2D5A27] hover:text-white hover:border-[#2D5A27] transition-all shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroller Container (Square Cards with Big 80px Logos) */}
        <div 
          className="relative mb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle Left & Right Gradient Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto py-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((client) => {
              const isCollege = client.category === 'COLLEGE';
              const isSchool = client.category === 'SCHOOL';

              const badgeBg = isCollege
                ? 'bg-[#E0E7FF] text-[#003366]'
                : isSchool
                ? 'bg-[#E2EBD5] text-[#2D5A27]'
                : 'bg-amber-100 text-[#D97706]';

              const badgeLabel = isCollege
                ? 'College'
                : isSchool
                ? 'School'
                : 'Coaching';

              const accentBorder = client.featured
                ? 'border-2 border-[#003366] shadow-md'
                : 'border border-black/[0.08]';

              return (
                <div
                  key={client.id}
                  className={`group flex flex-col items-center justify-between bg-white rounded-2xl p-3.5 ${accentBorder} shadow-2xs hover:shadow-xl hover:border-[#003366] transition-all duration-300 shrink-0 select-none cursor-default`}
                  style={{
                    width: '175px',
                    height: '188px',
                  }}
                >
                  {/* Category Pill Tag */}
                  <div className="w-full flex items-center justify-between">
                    <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md ${badgeBg}`}>
                      {client.featured ? '⭐ ' + badgeLabel : badgeLabel}
                    </span>
                    <span className="text-[10px] text-[#1C1C1C]/50 truncate max-w-[85px]">
                      {client.location}
                    </span>
                  </div>

                  {/* Big Square Logo Container (80x80px) */}
                  <div className="relative w-20 h-20 rounded-xl p-1.5 bg-white border border-black/[0.06] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-108 transition-transform duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={76}
                      height={76}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Institution Name */}
                  <div className="w-full text-center">
                    <div 
                      className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#003366] transition-colors line-clamp-2 leading-snug"
                      title={client.name}
                    >
                      {client.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── HIGHLIGHTED HIGHER EDUCATION SPOTLIGHT: SWIFT (PUNJAB) & YTCEM SES (MUMBAI) ── */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#003366]/20 shadow-lg shadow-[#003366]/5 relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 via-amber-100/30 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10">
            {/* Spotlight Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/[0.08]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#003366] text-xs font-bold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#003366]" />
                  Flagship Higher Education &amp; Engineering Deployments
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1C1C]">
                  Leading Colleges &amp; Educational Societies Powered by ApanaCampus
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 self-start sm:self-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Live Cloud ERP Active
              </span>
            </div>

            {/* Dual Featured College Cards: YTCEM (Mumbai) & SWIFT (Punjab) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
              
              {/* 1. Yadavrao Tasgaonkar College of Engineering & Management (SES Trust) */}
              <div className="bg-[#FAF9F6] rounded-2xl p-5 md:p-6 border border-black/[0.08] hover:border-[#003366] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-16 h-16 rounded-2xl p-2 bg-white border border-black/[0.08] shadow-xs flex items-center justify-center shrink-0">
                        <Image
                          src="/clients/ses-ytcem-college.jpg"
                          alt="Saraswati Education Society (SES Trust) - YTCEM"
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#003366]">
                          10+ Colleges under SES Trust
                        </span>
                        <h4 className="font-bold text-base md:text-lg text-[#1C1C1C] leading-snug mt-1">
                          Yadavrao Tasgaonkar College of Engg. &amp; Management (YTCEM)
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-[#1C1C1C]/65 font-medium mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#003366] shrink-0" />
                          <span>Karjat, Raigad / Mumbai MMR • Saraswati Education Society</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#1C1C1C]/75 leading-relaxed mb-4">
                    Affiliated to <strong>University of Mumbai</strong>, Approved by <strong>AICTE, DTE &amp; Govt. of Maharashtra</strong>. SES Trust governs 10+ engineering, management, technology and polytechnic institutes.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-[#1C1C1C]/80 mb-5">
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Multi-College Trust Governance</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <Calculator className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Mumbai Univ. Exams &amp; Fees</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <QrCode className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Engineering Student Lifecycle</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <ScanFace className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Faculty Biometric Records</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                  <a
                    href="https://ytcem.com/about-us/about-trust/ses-trust/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:text-[#1C1C1C] hover:underline"
                  >
                    <span>View SES Trust Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://ytcem.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-gray-500 hover:text-[#003366]"
                  >
                    ytcem.com ↗
                  </a>
                </div>
              </div>

              {/* 2. Swift Group of Colleges (SGOC - Punjab) */}
              <div className="bg-[#FAF9F6] rounded-2xl p-5 md:p-6 border border-black/[0.08] hover:border-[#003366] hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-16 h-16 rounded-2xl p-2 bg-white border border-black/[0.08] shadow-xs flex items-center justify-center shrink-0">
                        <Image
                          src="/clients/swift-group-colleges.png"
                          alt="Swift Group of Colleges (SGOC)"
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-[#003366]">
                          Flagship Punjab Campus
                        </span>
                        <h4 className="font-bold text-base md:text-lg text-[#1C1C1C] leading-snug mt-1">
                          Swift Group of Colleges (SGOC)
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-[#1C1C1C]/65 font-medium mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#003366] shrink-0" />
                          <span>Rajpura, Punjab • Nursing, Pharmacy, IT &amp; Management</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#1C1C1C]/75 leading-relaxed mb-4">
                    Leading Punjab college group running <strong>Swift Institute of Nursing, Swift School of Pharmacy</strong>, and Management degree faculties with 3000+ students and faculty.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-[#1C1C1C]/80 mb-5">
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <QrCode className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Period-Wise Class QR Attendance</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <ScanFace className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Face AI + GPS Geofencing</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <Calculator className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Biometric-Synced Auto-Payroll</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 border border-black/[0.04] flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-[#003366]" />
                      <span>Multi-College Unified ERP</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                  <a
                    href="https://www.swiftcollege.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003366] hover:text-[#1C1C1C] hover:underline"
                  >
                    <span>View SGOC Official Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.swiftcollege.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-gray-500 hover:text-[#003366]"
                  >
                    swiftcollege.edu.in ↗
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Demo Banner for Colleges */}
            <div className="mt-6 pt-5 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-50/70 to-transparent p-4 rounded-2xl">
              <div>
                <div className="font-bold text-sm text-[#1C1C1C]">
                  Want Period-wise QR, Face Biometrics &amp; Auto-Payroll for your College or University Trust?
                </div>
                <div className="text-xs text-[#1C1C1C]/70 mt-0.5">
                  Get full enterprise implementation with complete on-site faculty training &amp; university exam sync.
                </div>
              </div>
              <Link
                href="/contact?type=college"
                className="inline-flex items-center gap-1.5 bg-[#003366] text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-[#1C1C1C] transition-all shrink-0 shadow-sm"
              >
                <span>Request College ERP Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
