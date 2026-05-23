'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Mail, Phone, MapPin, 
  Sparkles, Calendar, Send, 
  ShieldCheck, HelpCircle, 
  ChevronRight, Loader2,
  CheckCircle2, Building, KeyRound,
  FileText, MessageSquareQuote, ArrowLeftRight
} from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'demo' | 'support' | 'login'>('support');

  // Handle URL action parameters (e.g., /contact?action=demo)
  useEffect(() => {
    const action = searchParams.get('action');
    if (action === 'demo') {
      setActiveTab('demo');
    } else if (action === 'login') {
      setActiveTab('login');
    } else {
      setActiveTab('support');
    }
  }, [searchParams]);

  // Form states
  const [demoForm, setDemoForm] = useState({
    name: '',
    schoolName: '',
    phone: '',
    email: '',
    strength: '',
    demoDate: '',
  });

  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    schoolName: '',
    subject: '',
    priority: 'Medium',
    message: '',
  });

  const [loginForm, setLoginForm] = useState({
    subdomain: '',
  });

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleDemoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDemoForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSupportChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSupportForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!demoForm.name.trim()) return setErrorMsg('Please enter your full name.');
    if (!demoForm.schoolName.trim()) return setErrorMsg('Please enter your school or college name.');
    if (!demoForm.phone.trim()) return setErrorMsg('Please enter your contact number.');
    if (!demoForm.email.trim()) return setErrorMsg('Please enter your email address.');
    if (!demoForm.strength) return setErrorMsg('Please select your estimated student strength.');
    if (!demoForm.demoDate) return setErrorMsg('Please choose a preferred date for the demo.');

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!supportForm.name.trim()) return setErrorMsg('Please enter your name.');
    if (!supportForm.email.trim()) return setErrorMsg('Please enter your email.');
    if (!supportForm.schoolName.trim()) return setErrorMsg('Please enter your school or college name.');
    if (!supportForm.subject.trim()) return setErrorMsg('Please enter the subject of your query.');
    if (!supportForm.message.trim()) return setErrorMsg('Please type your support message.');

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleLoginRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginForm.subdomain.trim()) {
      return setErrorMsg('Please type a subdomain (e.g. dps, dav, tagore).');
    }

    const cleanSubdomain = loginForm.subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!cleanSubdomain) {
      return setErrorMsg('Invalid subdomain characters. Use alphanumeric values.');
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to school subdomain
      window.location.href = `https://${cleanSubdomain}.apanacampus.com/login`;
    }, 800);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMsg('');
    setDemoForm({ name: '', schoolName: '', phone: '', email: '', strength: '', demoDate: '' });
    setSupportForm({ name: '', email: '', schoolName: '', subject: '', priority: 'Medium', message: '' });
    setLoginForm({ subdomain: '' });
  };

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#FAF9F6] text-[#1C1C1C] font-sans antialiased overflow-hidden">
      
      {/* ── DESIGN ELEMENT: Glowing Mesh Background Blobs ── */}
      <div className="absolute top-[10%] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E2EBD5] to-transparent opacity-40 blur-[100px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[20%] right-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#2D5A27]/10 to-transparent opacity-30 blur-[120px] pointer-events-none -z-10 animate-pulse duration-[10000ms]" />

      {/* ── DESIGN ELEMENT: Clean CSS Subtle Grid Overlay ── */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1C1C1C 1px, transparent 1px),
            linear-gradient(to bottom, #1C1C1C 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Grid: Left Support Info, Right Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4">
          
          {/* LEFT: Premium Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 text-[9.5px] uppercase font-bold tracking-widest text-[#2D5A27] bg-[#E2EBD5] border border-[#2D5A27]/25 px-4 py-2 rounded-full w-fit shadow-[0_2px_12px_rgba(45,90,39,0.06)]">
                <HelpCircle className="w-3.5 h-3.5 text-[#2D5A27]" />
                Helpdesk Support
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#1C1C1C] tracking-tight font-extrabold leading-[1.1] md:max-w-md">
                Get in Touch with our <span className="text-[#2D5A27] relative">ERP Experts</span>
              </h1>
              <p className="text-sm sm:text-base text-[#2B2927]/70 font-light leading-relaxed max-w-lg">
                Whether you want to request a live demo setup, log an active support ticket, or search for your institution&apos;s isolated schema portal, we have you covered.
              </p>
            </div>

            {/* Direct Contact Cards - Stunning Micro-Animations */}
            <div className="space-y-4">
              {[
                { icon: Phone, title: 'Call Support desk', details: '+91 89285 67312', desc: 'Mon to Sat · 9:00 AM to 7:00 PM IST', link: 'tel:+918928567312' },
                { icon: Mail, title: 'Email Legal & Support', details: 'info@apanacampus.com', desc: 'Queries resolved under 2 hours', link: 'mailto:info@apanacampus.com' },
                { icon: MapPin, title: 'Corporate Headquarters', details: 'Mumbai, West, India', desc: 'Enterprise scaling engineered locally', link: '#' }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.link}
                  className="
                    group flex gap-4 p-5 rounded-[24px] 
                    bg-white/80 backdrop-blur-md border border-black/[0.04] 
                    hover:border-[#2D5A27]/25 hover:bg-white hover:-translate-y-1
                    shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(45,90,39,0.05)]
                    transition-all duration-300 ease-out
                  "
                >
                  <div className="
                    w-11 h-11 rounded-2xl bg-[#2D5A27]/8 text-[#2D5A27] 
                    flex items-center justify-center shrink-0 border border-[#2D5A27]/10
                    group-hover:scale-105 group-hover:bg-[#2D5A27] group-hover:text-white
                    transition-all duration-300
                  ">
                    <item.icon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col text-left justify-center">
                    <span className="text-[9px] font-bold tracking-widest text-[#1C1C1C]/40 uppercase">{item.title}</span>
                    <span className="text-sm sm:text-base font-bold text-[#1C1C1C] mt-0.5 group-hover:text-[#2D5A27] transition-colors">{item.details}</span>
                    <span className="text-[11.5px] text-[#2B2927]/60 mt-0.5 leading-snug">{item.desc}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Compliance Badge */}
            <div className="
              bg-[#E2EBD5]/40 border border-[#2D5A27]/12 p-5 rounded-[28px] 
              flex gap-4.5 text-left shadow-[0_10px_30px_rgba(45,90,39,0.02)]
            ">
              <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center shrink-0 border border-white/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-[11.5px] text-[#2D5A27] font-semibold leading-relaxed">
                Security Isolation Guarantee: All customer support tickets and school logs are processed inside a schema-isolated, encrypted administrative sandbox.
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Tab Form Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Nav Tabs - Extremely Sleek Design */}
            <div className="flex bg-[#F0EDE8] border border-black/[0.05] p-1.5 rounded-2xl gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              {[
                { id: 'support', label: 'Support Ticket', icon: FileText },
                { id: 'demo', label: 'Request Demo', icon: Calendar },
                { id: 'login', label: 'Client Login', icon: KeyRound }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id as any); resetForm(); }}
                    className={`
                      flex items-center justify-center gap-2
                      flex-1 py-3.5 text-xs sm:text-sm font-bold rounded-xl tracking-[0.5px] transition-all duration-300
                      ${activeTab === tab.id
                        ? 'bg-white text-[#2D5A27] shadow-[0_4px_16px_rgba(0,0,0,0.06)] scale-[1.01]'
                        : 'text-[#1C1C1C]/50 hover:text-[#1C1C1C] hover:bg-white/30'
                      }
                    `}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Error Message banner */}
            {errorMsg && (
              <div className="bg-red-50 text-red-600 text-xs py-3 px-4 rounded-xl border border-red-100 text-left font-semibold mb-4 shadow-sm animate-shake">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Forms Card rendering - Premium Glassmorphism Card */}
            <div className="
              bg-white/95 backdrop-blur-xl border border-black/[0.05] rounded-[36px] 
              p-6 sm:p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.05)] text-left
              relative overflow-hidden
            ">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#2D5A27] to-[#E2EBD5]" />
              
              {isSubmitted ? (
                /* Success Message */
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-[#E2EBD5] text-[#2D5A27] flex items-center justify-center mx-auto border-[4px] border-white shadow-[0_8px_32px_rgba(45,90,39,0.15)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C1C1C]">
                      {activeTab === 'demo' ? 'Demo Scheduled Successfully' : 'Ticket Logged Successfully'}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#2B2927]/60 leading-relaxed font-light max-w-sm mx-auto">
                      {activeTab === 'demo'
                        ? 'Our educational onboarding engineers will email you a calendar invitation within 2 hours.'
                        : 'Your priority ticket has been pushed to our operations dashboard. We will respond within 60 minutes.'}
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="
                        px-8 py-3.5 rounded-full bg-[#1C1C1C] text-white text-[11px] font-bold tracking-[1.5px] uppercase 
                        hover:bg-[#2D5A27] hover:shadow-lg transition-all duration-200
                      "
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Forms */
                <>
                  {/* TAB 1: Support Ticket */}
                  {activeTab === 'support' && (
                    <form onSubmit={handleSupportSubmit} className="space-y-5 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={supportForm.name}
                            onChange={handleSupportChange}
                            placeholder="Aarav Sharma"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Registered Email</label>
                          <input
                            type="email"
                            name="email"
                            value={supportForm.email}
                            onChange={handleSupportChange}
                            placeholder="aarav@school.com"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">School / College Name</label>
                          <input
                            type="text"
                            name="schoolName"
                            value={supportForm.schoolName}
                            onChange={handleSupportChange}
                            placeholder="DPS Public School"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Ticket Priority</label>
                          <select
                            name="priority"
                            value={supportForm.priority}
                            onChange={handleSupportChange}
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white appearance-none
                            "
                          >
                            <option value="Low">Low (General Query)</option>
                            <option value="Medium">Medium (Feature request)</option>
                            <option value="High">High (Account lockout)</option>
                            <option value="Urgent">Urgent (Billing issue)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={supportForm.subject}
                          onChange={handleSupportChange}
                          placeholder="Cannot download timetable PDF files"
                          className="
                            w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                            text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                            focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                          "
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Support Message</label>
                        <textarea
                          name="message"
                          value={supportForm.message}
                          onChange={handleSupportChange}
                          rows={4}
                          placeholder="Describe your operational error or technical bottleneck here..."
                          className="
                            w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                            text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                            focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white resize-none
                          "
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            w-full py-4 rounded-full bg-[#1C1C1C] hover:bg-[#2D5A27] text-white 
                            text-[12px] font-bold tracking-[1.5px] uppercase flex items-center justify-center gap-2 
                            transition-all duration-200 hover:shadow-lg disabled:opacity-50
                          "
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              Logging ticket...
                            </>
                          ) : (
                            <>
                              Submit Support Ticket
                              <Send className="w-4 h-4 text-white" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 2: Request Demo */}
                  {activeTab === 'demo' && (
                    <form onSubmit={handleDemoSubmit} className="space-y-5 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={demoForm.name}
                            onChange={handleDemoChange}
                            placeholder="Aarav Sharma"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">School / College Name</label>
                          <input
                            type="text"
                            name="schoolName"
                            value={demoForm.schoolName}
                            onChange={handleDemoChange}
                            placeholder="DPS Public School"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={demoForm.phone}
                            onChange={handleDemoChange}
                            placeholder="+91 89285 67312"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">School Email</label>
                          <input
                            type="email"
                            name="email"
                            value={demoForm.email}
                            onChange={handleDemoChange}
                            placeholder="info@school.com"
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Student Strength</label>
                          <select
                            name="strength"
                            value={demoForm.strength}
                            onChange={handleDemoChange}
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white appearance-none
                            "
                          >
                            <option value="">Select strength...</option>
                            <option value="under-500">Under 500 Students</option>
                            <option value="500-1500">500 - 1500 Students</option>
                            <option value="1500-3000">1500 - 3000 Students</option>
                            <option value="3000+">3000+ Students</option>
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Preferred Demo Date</label>
                          <input
                            type="date"
                            name="demoDate"
                            value={demoForm.demoDate}
                            onChange={handleDemoChange}
                            className="
                              w-full px-4 py-3 rounded-xl border border-black/[0.08] focus:border-[#2D5A27] 
                              text-xs bg-[#FAF9F6] focus:outline-none transition-all duration-200
                              focus:ring-4 focus:ring-[#2D5A27]/5 focus:bg-white
                            "
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            w-full py-4 rounded-full bg-[#2D5A27] hover:bg-[#1C1C1C] text-white 
                            text-[12px] font-bold tracking-[1.5px] uppercase flex items-center justify-center gap-2 
                            transition-all duration-200 hover:shadow-lg disabled:opacity-50
                          "
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              Scheduling...
                            </>
                          ) : (
                            <>
                              Request a Live Demo
                              <Calendar className="w-4 h-4 text-white" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}

                  {/* TAB 3: Client Login */}
                  {activeTab === 'login' && (
                    <form onSubmit={handleLoginRedirect} className="space-y-5 animate-fadeIn">
                      <div className="space-y-3 bg-[#E2EBD5]/30 border border-[#2D5A27]/10 p-5 rounded-2xl">
                        <div className="w-10 h-10 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center border border-white/20">
                          <Building className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[#1C1C1C]">
                          Access Your Isolated Campus Portal
                        </h3>
                        <p className="text-xs text-[#2B2927]/70 leading-relaxed font-light">
                          Because Apana Campus uses high-grade <strong>Schema-Level PostgreSQL isolation</strong>, your institution has a private domain vault. Type your campus keyword below:
                        </p>
                      </div>

                      <div className="space-y-1.5 relative">
                        <label className="text-[9.5px] font-bold tracking-widest uppercase text-[#1C1C1C]/45">Your School Subdomain Keyword</label>
                        <div className="
                          flex items-center bg-[#FAF9F6] border border-black/[0.08] rounded-xl px-4 py-2 
                          focus-within:border-[#2D5A27] focus-within:ring-4 focus-within:ring-[#2D5A27]/5 focus-within:bg-white
                          transition-all duration-200
                        ">
                          <input
                            type="text"
                            name="subdomain"
                            value={loginForm.subdomain}
                            onChange={handleLoginChange}
                            placeholder="dps"
                            className="w-full py-1.5 text-xs bg-transparent focus:outline-none text-right pr-2"
                          />
                          <span className="text-xs text-[#1C1C1C]/50 font-bold select-none pl-2 border-l border-black/[0.08]">.apanacampus.com</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            w-full py-4 rounded-full bg-[#1C1C1C] hover:bg-[#2D5A27] text-white 
                            text-[12px] font-bold tracking-[1.5px] uppercase flex items-center justify-center gap-2 
                            transition-all duration-200 hover:shadow-lg disabled:opacity-50
                          "
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              Connecting...
                            </>
                          ) : (
                            <>
                              Access Isolated Vault
                              <KeyRound className="w-4 h-4 text-white" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-[10px] text-center text-[#2B2927]/60">
                        Default Demo Trial: Enter <span className="font-bold">demo</span> or <span className="font-bold">sandbox</span> to experience the multi-role student panels.
                      </div>
                    </form>
                  )}
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ContactSupportPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#2D5A27]" />
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
