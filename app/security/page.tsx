'use client';

import React from 'react';
import { SchemaIsolation } from '@/components/home/schema-isolation';

export default function SecurityPage() {
  return (
    <div className="pt-20 min-h-screen bg-base-dark">
      <SchemaIsolation />
    </div>
  );
}
