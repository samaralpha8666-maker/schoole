'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const outerFeatures = [
  { name: "Exam", color: "#4F46E5", bg: "#EEF2FF" },
  { name: "Result", color: "#10B981", bg: "#ECFDF5" },
  { name: "Fee", color: "#F59E0B", bg: "#FFFBEB" },
  { name: "Admission", color: "#3B82F6", bg: "#EFF6FF" },
  { name: "Report Card", color: "#EC4899", bg: "#FDF2F8" },
  { name: "Transport", color: "#8B5CF6", bg: "#F5F3FF" },
  { name: "Attendance", color: "#06B6D4", bg: "#ECFEFF" },
  { name: "Registration", color: "#F97316", bg: "#FFF7ED" },
  { name: "LMS", color: "#14B8A6", bg: "#F0FDF4" },
  { name: "Digital Content", color: "#6366F1", bg: "#EEF2FF" },
  { name: "Time Table", color: "#EF4444", bg: "#FEF2F2" }
];

const innerPersonas = [
  { name: "Students", icon: "🎓", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE", textColor: "#1E40AF" },
  { name: "Teachers", icon: "👩‍🏫", color: "#F97316", bg: "#FFF7ED", border: "#FED7AA", textColor: "#9A3412" },
  { name: "Parents", icon: "👪", color: "#F43F5E", bg: "#FFF1F2", border: "#FECDD3", textColor: "#9F1239" },
];

// Custom radius per persona: Students gets a larger radius to push it up and clear the phone
const personaRadius = [210, 170, 170];

export default function MobileSection() {
  const [scale, setScale] = useState(1);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 420) {
        setScale(0.5);
      } else if (window.innerWidth < 640) {
        setScale(0.65);
      } else if (window.innerWidth < 1024) {
        setScale(0.85);
      } else {
        setScale(1.05);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="mobile-section" className="py-24 bg-[#FAF9F6] font-sans border-t border-[#2B2927]/10 scroll-mt-28 relative overflow-hidden">
      {/* Background blobs for premium look */}
      <div className="absolute top-[10%] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#E2EBD5] opacity-25 blur-3xl -z-10" />
      <div className="absolute bottom-[10%] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#EEF2FF] opacity-30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-[#E2EBD5] border border-[#2D5A27]/20 rounded-full text-[#2D5A27] text-[10px] font-black uppercase tracking-widest">
            Mobile Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] font-bold tracking-tight">
            Integrated Mobile App for Everyone
          </h2>
          <p className="text-[#2B2927]/80 text-base sm:text-lg font-light leading-relaxed">
            Real-time updates, instant notifications, and unified mobile dashboards tailored specifically for Students, Parents, Teachers, Admin, and School leadership.
          </p>
        </div>

        {/* Dynamic Animation Area */}
        <div className="flex flex-col items-center justify-center min-h-[580px] sm:min-h-[640px] md:min-h-[700px] w-full relative">

          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transition: 'transform 0.3s ease-out'
            }}
            className="w-[600px] h-[600px] relative flex items-center justify-center shrink-0"
          >
            {/* CSS Animation definitions injected natively */}
            <style>{`
              @keyframes rotate-clockwise {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes rotate-counter-clockwise {
                0% { transform: rotate(360deg); }
                100% { transform: rotate(0deg); }
              }
              .orbit-outer {
                animation: rotate-clockwise 45s linear infinite;
              }
              .orbit-outer:hover {
                animation-play-state: paused;
              }
              .node-counter-rotate {
                animation: rotate-counter-clockwise 45s linear infinite;
              }
              .orbit-outer:hover .node-counter-rotate {
                animation-play-state: paused;
              }
            `}</style>

            {/* Orbit Lines */}
            <div className="absolute w-[520px] h-[520px] rounded-full border-2 border-dashed border-[#2D5A27]/10" />
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#4F46E5]/10" />

            {/* Outer Ring: Rotating features */}
            <div className="absolute w-[720px] h-[720px] orbit-outer flex items-center justify-center z-10">
              {outerFeatures.map((feat, idx) => {
                const total = outerFeatures.length;
                const angle = (idx * 360) / total;
                const radius = 260;
                const isHovered = hoveredNode === feat.name;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredNode(feat.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                      transition: 'all 0.3s ease-out',
                    }}
                  >
                    <div
                      style={{
                        background: isHovered ? feat.color : 'white',
                        color: isHovered ? 'white' : '#1C1C1C',
                        border: `1.5px solid ${isHovered ? feat.color : '#2D5A2720'}`,
                        boxShadow: isHovered ? `0 10px 25px ${feat.color}40` : '0 4px 12px rgba(0,0,0,0.05)',
                        transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      className="node-counter-rotate px-4 py-2 rounded-full cursor-pointer select-none text-[11px] font-bold tracking-wide uppercase font-sans whitespace-nowrap"
                    >
                      {feat.name}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Inner Ring: Persona Nodes (Stationary but floating/hoverable) */}
            <div className="absolute w-[320px] h-[320px] flex items-center justify-center z-40">
              {innerPersonas.map((pers, idx) => {
                const total = innerPersonas.length;
                const angle = (idx * 360) / total;

                const radius = personaRadius[idx]; // Students uses 210, others 170
                const isHovered = hoveredNode === pers.name;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredNode(pers.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                      transition: 'all 0.3s ease-out',
                    }}
                  >
                    <div
                      style={{
                        background: pers.bg,
                        color: pers.textColor,
                        border: `2px solid ${isHovered ? pers.color : pers.border}`,
                        boxShadow: isHovered ? `0 8px 20px ${pers.color}25` : '0 2px 8px rgba(0,0,0,0.03)',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        transition: 'all 0.25s ease',
                      }}
                      className="w-[90px] h-[90px] rounded-full flex flex-col items-center justify-center cursor-pointer select-none text-center p-2 gap-1.5"
                    >
                      <span className="text-[20px]">{pers.icon}</span>
                      <span className="text-[11px] font-black tracking-wider uppercase font-sans">{pers.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Phone Mockup (iPhone 16 Pro Style) */}
            <div className="absolute top-[200px] w-[184px] aspect-[393/852] rounded-[38px] bg-[#0c0c0d] p-[4px] ring-1 ring-white/10 ring-inset shadow-[0_25px_60px_rgba(0,0,0,0.35)] border-[1.5px] border-[#2b2b2c] z-30 transition-transform duration-500 hover:scale-[1.03] group">
              {/* Screen Frame */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white">
                {/* Dynamic Island */}
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[72px] h-[13px] bg-black rounded-[8px] z-50" />

                {/* Screen dashboard image */}
                <Image
                  src="/mobile-dashboard.jpg"
                  alt="ApanaCampus Stakeholder Mobile App Overview"
                  fill
                  sizes="180px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Play Store & App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl border border-white/10 shadow-lg hover:bg-neutral-900 transition-all duration-200 w-64 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M5.25 2.1c-.26 0-.5.1-.68.28l10.97 10.97 3.51-3.51L5.93 2.38c-.18-.18-.42-.28-.68-.28zM3.48 3.84c-.1.21-.15.46-.15.73v14.86c0 .27.05.52.15.73l9.64-9.64L3.48 3.84zm12.33 7.82l-3.51 3.51 10.97 10.97c.18-.18.28-.42.28-.68 0-.26-.1-.5-.28-.68l-7.46-13.12zM13.62 12l-9.64 9.64c.21.1.46.15.73.15.26 0 .5-.1.68-.28l13.12-7.46-4.89-2.05z" />
            </svg>
            <div className="text-left font-sans leading-tight">
              <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">GET IT ON</p>
              <p className="text-[16px] font-black tracking-tight">Google Play</p>
            </div>
          </a>

          {/* Apple App Store Button */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl border border-white/10 shadow-lg hover:bg-neutral-900 transition-all duration-200 w-64 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.58 2.98-1.42z" />
            </svg>
            <div className="text-left font-sans leading-tight">
              <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Download on the</p>
              <p className="text-[16px] font-black tracking-tight">App Store</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}