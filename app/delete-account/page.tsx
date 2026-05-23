'use client';

import React, { useState } from 'react';
import { Trash2, CheckCircle2, ShieldAlert, ChevronRight, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolName: '',
    role: '',
    reason: '',
    confirm: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const roles = [
    { value: 'student', label: 'Student' },
    { value: 'parent', label: 'Parent / Guardian' },
    { value: 'teacher', label: 'Teacher / Staff' },
    { value: 'admin', label: 'School Administrator' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, confirm: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!formData.name.trim()) return setErrorMsg('Please enter your full name.');
    if (!formData.email.trim()) return setErrorMsg('Please enter your registered email address.');
    if (!formData.schoolName.trim()) return setErrorMsg('Please enter your school or college name.');
    if (!formData.role) return setErrorMsg('Please select your user role.');
    if (!formData.confirm) return setErrorMsg('You must check the confirmation box to proceed.');

    setIsSubmitting(true);

    // Simulate database submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-sans antialiased flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-4">
        
        {/* Success Card */}
        {isSubmitted ? (
          <div className="bg-white border border-[#2D5A27]/10 rounded-[32px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#2D5A27]" />
            <div className="w-16 h-16 rounded-full bg-[#E2EBD5] text-[#2D5A27] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-3">
              <h1 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C] font-bold tracking-tight">
                Request Submitted Successfully
              </h1>
              <p className="text-xs sm:text-sm text-[#2B2927]/70 leading-relaxed font-light">
                We have received your account and data deletion request for <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-black/[0.04] p-5 rounded-2xl text-xs text-left text-[#2B2927]/80 leading-relaxed font-light space-y-2">
              <p><strong>What happens next?</strong></p>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>We will coordinate with <strong>{formData.schoolName}</strong> to verify the request credentials.</li>
                <li>Your entire personal profile, logs, attendance, and marks database entries will be permanently erased or anonymized within <strong>30 days</strong>.</li>
                <li>A final verification email will be dispatched to you once complete.</li>
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                className="
                  flex-1 py-3.5 flex items-center justify-center rounded-full
                  bg-[#2D5A27] text-white text-[12px] font-bold tracking-[1.5px] uppercase
                  hover:bg-[#1C1C1C] transition-all duration-200
                "
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-white border border-black/[0.06] rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.06)] space-y-6 relative">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#FF5F57]/80" />
            
            {/* Header info */}
            <div className="space-y-2.5 text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FF5F57]/10 text-[#FF5F57] flex items-center justify-center mx-auto mb-1">
                <Trash2 className="w-6 h-6" />
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C] font-bold tracking-tight">
                Account & Data Deletion
              </h1>
              <p className="text-xs sm:text-sm text-[#2B2927]/60 leading-relaxed font-light max-w-sm mx-auto">
                Request the permanent deletion of your school or college account records under Play Store and DPDP policies.
              </p>
            </div>

            {/* Warning Message */}
            <div className="bg-[#FF5F57]/5 border border-[#FF5F57]/15 p-4 rounded-2xl flex gap-3 text-left">
              <ShieldAlert className="w-5 h-5 text-[#FF5F57] shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#FF5F57] font-semibold leading-relaxed font-sans">
                CAUTION: This action is irreversible. All of your grades, exam logs, paid fee registers, and profile info will be permanently purged within 30 days of approval.
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="bg-red-50 text-red-600 text-xs py-3 px-4 rounded-xl border border-red-100 text-left font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#1C1C1C]/60">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Aarav Sharma"
                  disabled={isSubmitting}
                  className="
                    w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27]
                    text-xs bg-[#FAF9F6] focus:outline-none transition-all
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#1C1C1C]/60">Registered Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="aarav@school.com"
                  disabled={isSubmitting}
                  className="
                    w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27]
                    text-xs bg-[#FAF9F6] focus:outline-none transition-all
                  "
                />
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* School Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-[#1C1C1C]/60">School / College Name</label>
                  <input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    placeholder="DPS Public School"
                    disabled={isSubmitting}
                    className="
                      w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27]
                      text-xs bg-[#FAF9F6] focus:outline-none transition-all
                    "
                  />
                </div>

                {/* Role */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-[#1C1C1C]/60">Select Your Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="
                      w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27]
                      text-xs bg-[#FAF9F6] focus:outline-none transition-all appearance-none
                    "
                  >
                    <option value="">Choose role...</option>
                    {roles.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Reason */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-widest uppercase text-[#1C1C1C]/60">Reason for Deletion (Optional)</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Leaving school, graduating, transferring to another branch..."
                  disabled={isSubmitting}
                  rows={2}
                  className="
                    w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27]
                    text-xs bg-[#FAF9F6] focus:outline-none transition-all resize-none
                  "
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group text-xs text-[#2B2927]/85 font-light leading-relaxed select-none">
                  <input
                    type="checkbox"
                    checked={formData.confirm}
                    onChange={handleCheckboxChange}
                    disabled={isSubmitting}
                    className="
                      mt-1 w-4 h-4 rounded border-black/[0.1] focus:ring-0 text-[#2D5A27]
                    "
                  />
                  <span>
                    I confirm that I want to delete my account and understand that all my academic files, attendance logs, and marks will be permanently erased or anonymized within 30 days.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full py-4 rounded-full bg-[#1C1C1C] hover:bg-[#2D5A27] text-white
                    text-[12px] font-bold tracking-[1.5px] uppercase
                    flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none
                  "
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Submit Deletion Request
                      <ChevronRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
                
                <Link
                  href="/"
                  className="
                    w-full py-3.5 flex items-center justify-center gap-1.5 rounded-full border border-black/[0.08] hover:bg-black/[0.02]
                    text-[11px] font-bold tracking-[1px] uppercase text-[#1C1C1C]/70 transition-all duration-200
                  "
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Cancel
                </Link>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
