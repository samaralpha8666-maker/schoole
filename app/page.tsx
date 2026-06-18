import React from 'react';
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
    'cheapest school ERP',
    'affordable school management software',
    'low cost college ERP',
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
