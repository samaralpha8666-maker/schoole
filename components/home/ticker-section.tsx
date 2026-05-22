'use client';

import React from 'react';
import { Database, Sparkles, ShieldCheck, Smartphone } from 'lucide-react';

export default function TickerSection() {
  return (
    <section className="bg-accent-green py-8 border-y border-[#2B2927]/10 overflow-hidden relative">
      {/* Infinite looping metrics */}
      <div className="w-full flex">
        <div className="flex gap-16 shrink-0 animate-infinite-scroll min-w-full justify-around items-center text-xs font-bold tracking-widest text-base-cream uppercase">
          <span className="flex items-center gap-2">
            <Database className="w-4 h-4 text-accent-lime" />
            100% Schema Isolation Safeguards
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-lime" />
            Sub-500ms Database Query Speeds
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-lime" />
            99.99% Live Application Uptime
          </span>
          <span className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-accent-lime" />
            Instant Subdomain Provisioning
          </span>
        </div>
        {/* Loop twin */}
        <div className="flex gap-16 shrink-0 animate-infinite-scroll min-w-full justify-around items-center text-xs font-bold tracking-widest text-base-cream uppercase">
          <span className="flex items-center gap-2">
            <Database className="w-4 h-4 text-accent-lime" />
            100% Schema Isolation Safeguards
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent-lime" />
            Sub-500ms Database Query Speeds
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-lime" />
            99.99% Live Application Uptime
          </span>
          <span className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-accent-lime" />
            Instant Subdomain Provisioning
          </span>
        </div>
      </div>
    </section>
  );
}
