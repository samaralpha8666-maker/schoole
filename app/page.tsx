import React from 'react';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import ErpFeatures from '@/components/home/erp-features';
import MobileSection from '@/components/home/mobile-section';
import { SchemaIsolation } from '@/components/home/schema-isolation';
import PricingSection from '@/components/home/pricing-section';
import FaqSection from '@/components/home/faq-section';
import { buildMetadata, faqSchema } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'ApanaCampus – Best School and College Management ERP Software',
  description: 'ApanaCampus is the best School and College Management ERP Software. Manage school & college admissions, fees, timetables, academic exams, attendance, transport, and payroll in one secure cloud portal.',
  path: '/',
  keywords: [
    'school management erp',
    'college management software',
    'best school ERP India',
    'multi-tenant school software',
    'school fees management system',
    'timetable generator online',
    'parent teacher communication portal',
  ],
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-cream font-sans text-shade-dark antialiased selection:bg-accent-lime selection:text-accent-green">
      {/* FAQ structured data schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. Redesigned Premium Hero Section */}
      <HeroSection />

      {/* Premium Infographic Banner Section */}
      <section className="py-12 md:py-16 bg-[#F5F2EB]/40 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <span className="section-label">Interactive Platform</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1A19]">
              The Ultimate School ERP Ecosystem
            </h2>
            <p className="text-[#3C3A38]/80 text-sm md:text-base max-w-2xl mx-auto font-medium">
              A single unified cloud interface connecting teachers, admins, and schedulers for seamless academic management.
            </p>
          </div>
          <div className="relative rounded-[28px] overflow-hidden border border-[#2D5A27]/10 shadow-[0_20px_50px_rgba(45,90,39,0.06)] bg-white p-2 md:p-3 transition-all duration-300 hover:scale-[1.005]">
            <Image
              src="/school-erp-banner.png"
              alt="The Complete School ERP Solution Dashboard Overview"
              width={1920}
              height={800}
              className="w-full h-auto rounded-[20px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2.5. 14 Comprehensive ERP Core Modules */}
      <ErpFeatures />

      {/* 4. Integrated Stakeholder Mobile App Ecosystem */}
      <MobileSection />

      {/* 5. Schema Isolation PostgreSQL Technical Feature Details */}
      <SchemaIsolation />

      {/* 7. Flexible Tiered Pricing Licensing Plans */}
      <PricingSection />

      {/* 8. Searchable Categorized Support FAQ Accordion Section */}
      <FaqSection />
    </div>
  );
}
