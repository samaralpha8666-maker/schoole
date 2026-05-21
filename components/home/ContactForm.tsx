'use client';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#1e1b4b]" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        {/* Section heading inside teal bg */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#4f46e5]">Book a Live Demo</span>
          <h2 id="contact-heading" className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl text-white">
            Transform Your Institution Today
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Fill out the quick form. Our onboarding team will schedule a personalised live demo within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Demo booking form" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">Your Name *</label>
                  <input id="name" type="text" required placeholder="Principal / Admin Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all" />
                </div>
                <div>
                  <label htmlFor="institution" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">Institution Name *</label>
                  <input id="institution" type="text" required placeholder="School or College Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">Email Address *</label>
                  <input id="email" type="email" required placeholder="principal@institution.edu.in"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">Mobile Number *</label>
                  <input id="phone" type="tel" required placeholder="+91 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all" />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">City / State</label>
                <input id="city" type="text" placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all" />
              </div>

              <div>
                <label htmlFor="requirement" className="text-xs text-[#6b8a8a] block mb-1.5 font-semibold">Any Specific Requirement</label>
                <textarea id="requirement" rows={3}
                  placeholder="e.g. Need online fee portal, hostel management, timetable substitution..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f8fafa] border border-[#daeaea] text-sm text-[#2d4a4a] placeholder-[#8fa3a3] focus:outline-none focus:border-[#4f46e5] transition-all resize-none" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center py-4 disabled:opacity-70"
              >
                {loading
                  ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting...</>
                  : <><i className="fa-solid fa-paper-plane" aria-hidden="true" /> Submit Demo Request</>}
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#eef2ff] border-2 border-[#4f46e5] text-[#4f46e5] text-3xl flex items-center justify-center mx-auto">
                <i className="fa-solid fa-envelope-circle-check" aria-hidden="true" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl text-[#1e1b4b]">
                Demo Booking Received!
              </h3>
              <p className="text-[#6b8a8a] text-sm max-w-sm mx-auto">
                Our campus onboarding team will contact you within 24 hours to schedule your personalised live demo walkthrough.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
