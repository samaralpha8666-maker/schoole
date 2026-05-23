'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TickerSection from '@/components/home/ticker-section';
import ErpFeatures from '@/components/home/erp-features';
import { PortalTabs } from '@/components/home/portal-tabs';
import MobileSection from '@/components/home/mobile-section';
import { SchemaIsolation } from '@/components/home/schema-isolation';
import { RoiCalculator } from '@/components/home/roi-calculator';
import PricingSection from '@/components/home/pricing-section';
import FaqSection from '@/components/home/faq-section';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-cream font-sans text-shade-dark antialiased selection:bg-accent-lime selection:text-accent-green">
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
