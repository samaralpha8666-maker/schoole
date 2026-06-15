import React from 'react';
import MobileSection from '@/components/home/mobile-section';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Stakeholder Mobile App Ecosystem | Parent & Teacher Apps | ApanaCampus',
  description: 'Download ApanaCampus mobile apps for parents, teachers, and school administrators. Monitor real-time student attendance, push home assignments, and track GPS school bus routing.',
  path: '/mobile',
  keywords: [
    'school parent communication app',
    'teacher homework upload app',
    'student attendance tracking app',
    'school bus GPS tracker app',
  ],
});

export default function MobilePage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAF9F6]">
      <MobileSection />
    </div>
  );
}
