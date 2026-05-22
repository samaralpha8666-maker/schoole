'use client';

import React from 'react';
import { FaqAccordion } from '@/components/home/faq-accordion';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-base-cream border-t border-[#2B2927]/10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 bg-accent-lime/40 border border-accent-green/20 rounded-full text-accent-green text-[10px] font-bold uppercase tracking-widest">
            Support Directory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-base-dark font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-shade-dark/80 text-base sm:text-lg font-light leading-relaxed">
            Everything you need to know about our isolated school ERP database schema, bulk excel imports, and licensing.
          </p>
        </div>

        {/* Searchable, categorized premium accordion component */}
        <FaqAccordion />

      </div>
    </section>
  );
}
