import React from 'react';
import PricingSection from '@/components/home/pricing-section';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Affordable Pricing Tiers & Subscription Plans | ApanaCampus',
  description: 'Choose from our transparent licensing plans tailored for schools and colleges of all sizes. 3 months free trial, no hidden hosting fees, 24/7 dedicated support.',
  path: '/pricing',
  keywords: [
    'cheapest school ERP software',
    'most affordable school management system India',
    'low cost college ERP software',
    'budget friendly school management software',
    'school management software price',
    'college ERP cost India',
    'school administration tool plans',
    'apana campus ERP pricing tiers',
  ],
});

export default function PricingPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAF9F6]">
      <PricingSection />
    </div>
  );
}
