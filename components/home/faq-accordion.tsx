"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'Security' | 'Pricing' | 'Features' | 'Onboarding';
}

export function FaqAccordion() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Security' | 'Pricing' | 'Features' | 'Onboarding'>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      category: 'Security',
      question: "How secure is PostgreSQL Schema Isolation? Can one school see another school's records?",
      answer: "No, physically impossible. Unlike generic ERP databases that place all schools inside one massive table with a simple 'school_id' filter, Apana Campus leverages native PostgreSQL schemas. Each school gets an entirely separate logical database partition with restricted access permissions. It is like having private bank vaults instead of a shared locker."
    },
    {
      category: 'Onboarding',
      question: "Can we import our existing student and teacher lists via Excel or CSV?",
      answer: "Yes, easily! Our system contains a powerful, automated Bulk Directory Uploader. You simply download our standard Excel template, paste your student rosters, teacher rosters, or active credit balances, and upload. Our system validates the data and provisions records under 10 seconds."
    },
    {
      category: 'Features',
      question: "Does the system support custom PDF report cards and academic transcript exports?",
      answer: "Absolutely. You can generate professional, high-resolution PDF report cards, financial ledger spreadsheets, monthly fee receipts, and official student transfer transcripts directly from the administrative portal with custom school logo stamps."
    },
    {
      category: 'Pricing',
      question: "Are there any setup fees or hidden hosting charges?",
      answer: "No setup fees, no hidden charges. Our monthly and yearly licensing fees are fully inclusive of isolated secure cloud hosting, daily automated database backups, WhatsApp/SMS gateway infrastructure integrations, and all new feature updates."
    },
    {
      category: 'Security',
      question: "Do you perform automated backups? Can we download our entire database backup?",
      answer: "Yes. We execute automated, hourly snapshots of all tenant schemas with 30-day retention policies on secure Amazon S3 vaults. Additionally, you always own your data. Administrators can download complete JSON or CSV database dumps of their entire campus roster at any time."
    },
    {
      category: 'Features',
      question: "Can parents pay school fees online? What gateways are supported?",
      answer: "Yes! The unified Parent Portal features single-click online fee payments. We support major national payment gateways out-of-the-box, allowing payments via UPI, NetBanking, Credit/Debit Cards, and popular wallets with instant automated receipt generation."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 font-sans text-indigo-950">
      
      {/* Category & Search Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white border border-slate-200/85 p-4 rounded-3xl shadow-sm">
        
        {/* Search bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30"
          />
        </div>

        {/* Categories togglers */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar justify-start md:justify-end">
          {['All', 'Security', 'Onboarding', 'Features', 'Pricing'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat as any);
                setOpenIndex(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border shrink-0 ${
                activeCategory === cat 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-sm"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="font-serif text-sm sm:text-base font-bold text-indigo-950 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <span className="p-1 rounded-xl bg-slate-50 border border-slate-200 shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible Answer */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 border-t border-slate-100 bg-slate-50/50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-slate-650 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-400 font-semibold bg-white border border-slate-200 rounded-3xl">
            No FAQs found matching your criteria.
          </div>
        )}
      </div>

    </div>
  );
}
