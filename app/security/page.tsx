import React from 'react';
import { SchemaIsolation } from '@/components/home/schema-isolation';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'PostgreSQL Schema Isolation & Security | ApanaCampus',
  description: 'Understand the enterprise security layers of ApanaCampus. We implement native logical database schema partitioning to isolate each school and college records container securely.',
  path: '/security',
  keywords: [
    'school database security',
    'multi-tenant schema isolation',
    'PostgreSQL partition security',
    'apana campus security standards',
  ],
});

export default function SecurityPage() {
  return (
    <div className="pt-20 min-h-screen bg-base-dark">
      <SchemaIsolation />
    </div>
  );
}
