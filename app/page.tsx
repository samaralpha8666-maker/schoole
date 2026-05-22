'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TickerSection from '@/components/home/ticker-section';
import ErpFeatures from '@/components/home/erp-features';
import { PortalTabs } from '@/components/home/portal-tabs';
import HowItWorks from '@/components/home/how-it-works';
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

      {/* 3. Interactive Multi-Role Portal Tabs Showcase */}
      <PortalTabs />

      {/* 4. Onboarding & Provisioning Architecture (3-Step) */}
      <HowItWorks />

      {/* 5. Schema Isolation PostgreSQL Technical Feature Details */}
      <SchemaIsolation />

      {/* 6. Interactive ROI Cost Savings Calculator */}
      <RoiCalculator />

      {/* 7. Flexible Tiered Pricing Licensing Plans */}
      <PricingSection />

      {/* 8. Searchable Categorized Support FAQ Accordion Section */}
      <FaqSection />
    </div>
  );
}
