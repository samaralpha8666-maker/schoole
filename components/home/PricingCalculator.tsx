'use client';
import { useState } from 'react';

function calcPrice(students: number): string {
  let rate = 8;
  if (students > 2000) rate = 5;
  else if (students > 1000) rate = 6;
  else if (students > 500) rate = 7;
  return (students * rate).toLocaleString('en-IN');
}

export default function PricingCalculator() {
  const [students, setStudents] = useState(500);

  return (
    <section id="pricing" className="py-20 bg-[#f8fafa]" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center space-y-3 mb-14">
          <span className="section-label">Flexible Pricing</span>
          <h2 id="pricing-heading" className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1e1b4b]">
            Simple, Transparent Scaling Pricing
          </h2>
          <p className="text-[#6b8a8a] max-w-xl mx-auto text-sm">
            Drag the slider to estimate your monthly plan cost. Volume discounts are applied automatically.
          </p>
        </div>

        <div className="bg-white border border-[#daeaea] rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Slider side */}
          <div className="flex-grow w-full space-y-6">
            <div>
              <label htmlFor="student-slider" className="text-xs text-[#6b8a8a] block mb-2 font-bold uppercase tracking-wider">
                Number of Students
              </label>
              <div className="flex justify-between items-center mb-3">
                <span className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl text-[#4f46e5]" aria-live="polite">
                  {students} Students
                </span>
                <span className="text-xs text-[#6b8a8a]">
                  ₹{students > 2000 ? 5 : students > 1000 ? 6 : students > 500 ? 7 : 8}/student/mo
                </span>
              </div>
              <input
                id="student-slider"
                type="range"
                min={100} max={3000} step={50}
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${((students - 100) / 2900) * 100}%, #daeaea ${((students - 100) / 2900) * 100}%, #daeaea 100%)` }}
                aria-label={`${students} students`}
              />
              <div className="flex justify-between text-xs text-[#6b8a8a] mt-1">
                <span>100</span><span>3,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-[#e6efef] pt-5 text-xs text-[#4d6464]">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#6b8a8a] block">Included</span>
                {['All ERP Modules', 'Play Store App', 'Admin Dashboard'].map(f => (
                  <p key={f} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-check text-[#4f46e5] text-[7px]" />
                    </span>
                    {f}
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#6b8a8a] block">Support</span>
                {['24/7 Tech Support', 'Daily Backups', 'Free Onboarding'].map(f => (
                  <p key={f} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-check text-[#4f46e5] text-[7px]" />
                    </span>
                    {f}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Result box */}
          <div className="w-full md:w-56 bg-[#1e1b4b] rounded-xl p-6 text-center space-y-4 shadow-lg">
            <span className="text-xs text-gray-400 block uppercase tracking-wider font-bold">Monthly Estimate</span>
            <div>
              <span className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl text-white" aria-live="polite">
                ₹&nbsp;{calcPrice(students)}
              </span>
              <span className="text-xs text-gray-500 block mt-1">per month (annual billing)</span>
            </div>
            <a
              href="/#contact"
              className="btn-primary w-full justify-center text-sm py-3"
            >
              Book Onboarding
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
