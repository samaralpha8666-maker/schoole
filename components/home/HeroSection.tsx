import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-br from-[#1b1836] via-[#0b0a16] to-[#080710] overflow-hidden min-h-[500px] lg:min-h-[580px] flex flex-col lg:flex-row"
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

        <div className="space-y-5 max-w-[460px] lg:mr-10 xl:mr-16 relative z-10 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-[10px] font-semibold border border-indigo-400/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Now Live on Google Play Store!
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl md:text-[2.2rem] text-white leading-[1.25]"
          >
            Master Campus Management,{' '}
            <span className="text-indigo-400 block mt-1">Advance with Confidence</span>
          </h1>

          {/* Description */}
          <p className="text-indigo-200/80 text-[13px] leading-relaxed max-w-[400px]">
            ApnaCampus is India&apos;s most advanced multi-tenant school and college ERP. Manage admissions, fees, timetable, exams, hostel, library, and transport — all from one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/#contact" className="btn-primary text-sm py-2.5 px-6">
              Get Started Free
            </Link>
            <Link href="/#features" className="btn-outline text-sm py-2.5 px-5">
              <i className="fa-solid fa-play text-[10px]" aria-hidden="true" />
              Explore Features
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-5 pt-5 text-[11px] text-indigo-300 border-t border-indigo-500/20 mt-6">
            <div className="flex items-center gap-1.5 mt-2">
              <i className="fa-solid fa-shield-halved text-emerald-400" aria-hidden="true" />
              <span>Isolated DB</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <i className="fa-solid fa-users text-indigo-400" aria-hidden="true" />
              <span>10k+ Users</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <i className="fa-solid fa-star text-amber-400" aria-hidden="true" />
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