// Home page — SSG (Static Site Generation)
// Next.js renders this at build time → blazing-fast delivery & perfect SEO
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AppShowcase from '@/components/home/AppShowcase';
import PricingCalculator from '@/components/home/PricingCalculator';
import FaqSection from '@/components/home/FaqSection';
import ContactForm from '@/components/home/ContactForm';
import StatsBar from '@/components/home/StatsBar';

export const metadata: Metadata = buildMetadata({
  title: 'ApnaCampus – Best School & College Management ERP Software in India',
  description:
    'ApnaCampus is a premium multi-tenant ERP & LMS platform for schools and colleges. Manage admissions, timetable, fees, exams, library, and attendance — all in one place.',
  path: '/',
  keywords: ['school management India', 'college ERP', 'school admission software'],
});

// This page is STATICALLY GENERATED at build time (SSG)
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <AppShowcase />
      <PricingCalculator />
      <FaqSection />
      <ContactForm />
    </>
  );
}
