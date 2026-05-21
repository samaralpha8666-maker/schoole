import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#312e81] via-[#1e1b4b] to-[#0c0a20] overflow-hidden min-h-[500px] lg:min-h-[580px] flex flex-col lg:flex-row"
      aria-labelledby="hero-heading"
    >
      {/* ── LEFT HALF: Text content ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-6 md:px-12 pt-28 pb-10 lg:py-24 z-10 relative">
        {/* Subtle glow behind text */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(53, 56, 224, 0.15) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="space-y-6 max-w-[520px] lg:mr-10 xl:mr-16 relative z-10 w-full flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-indigo-200 text-xs font-medium border border-indigo-400/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden="true" />
            Now Live on Google Play Store
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-outfit)] font-bold text-[2.5rem] md:text-[3.2rem] text-white leading-[1.1] tracking-tight"
          >
            ApnaCampus
            <span className="text-[1.8rem] md:text-[2.2rem] text-indigo-100/90 font-semibold block mt-1 leading-[1.2]">
              School & College Management
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 block mt-3 text-[1.25rem] md:text-[1.5rem] font-medium tracking-wide">
              6-Month Free Trial
            </span>
          </h1>

          {/* Description */}
          <p className="text-indigo-100/80 text-[15px] md:text-base leading-relaxed max-w-[460px]">
            India&apos;s most advanced multi-tenant ERP platform. Manage admissions, fees, timetable, exams, hostel, library, and transport — all from one intelligent dashboard.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
            <Link href="/#contact" className="btn-primary text-[15px] py-3.5 px-8 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)]">
              Get Started Free
            </Link>
            <Link href="/#features" className="btn-outline text-[15px] py-3.5 px-6 rounded-xl bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
              <i className="fa-solid fa-play text-[12px]" aria-hidden="true" />
              Explore Features
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-[13px] font-medium text-indigo-200/70 border-t border-indigo-400/20 mt-8 w-full">
            <div className="flex items-center gap-2 mt-2">
              <i className="fa-solid fa-shield-halved text-emerald-400/80 text-sm" aria-hidden="true" />
              <span>Isolated DB</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <i className="fa-solid fa-users text-indigo-400/80 text-sm" aria-hidden="true" />
              <span>10k+ Users</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <i className="fa-solid fa-star text-amber-400/80 text-sm" aria-hidden="true" />
              <span>4.9 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT HALF: Dashboard Image ── */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center px-6 pb-16 lg:pb-0 lg:p-12 xl:p-16 z-0">
        {/* Glow effect behind the image */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none blur-[80px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative w-full h-full">
          <Image
            src="/dashboard-hero.png"
            alt="ApnaCampus school and college ERP dashboard"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            quality={90}
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        viewBox="0 0 1440 40"
        className="absolute bottom-0 left-0 w-full fill-white z-20"
        aria-hidden="true"
        preserveAspectRatio="none"
        style={{ height: '40px' }}
      >
        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </section>
  );
}