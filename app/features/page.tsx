import React from 'react';
import ErpFeatures from '@/components/home/erp-features';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'All ERP Features & Modules | ApanaCampus',
  description: 'Explore the complete administrative dashboard modules of ApanaCampus ERP, including fee management, attendance tracker, academic exams & report cards, transport route tracking, and payroll.',
  path: '/features',
  keywords: [
    'school ERP modules list',
    'student information system',
    'fee collect tracker',
    'automated classroom timetable',
    'exam result publisher',
    'teacher payroll software',
  ],
});

export default function FeaturesPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAF9F6]">
      <ErpFeatures />
    </div>
  );
}
