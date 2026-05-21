export default function AppShowcase() {
  return (
    <section
      id="app"
      className="py-20 bg-white"
      aria-labelledby="app-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Phone mockup */}
        <div className="flex-1 flex justify-center" aria-hidden="true">
          <div className="relative">
            {/* Teal blob behind phone */}
            <div className="absolute inset-[-20px] bg-[#eef2ff] rounded-3xl -rotate-3" />
            <div className="relative w-[265px] h-[540px] rounded-[36px] border-[8px] border-[#1e1b4b] bg-[#f8fafa] shadow-2xl overflow-hidden ring-1 ring-[#1e1b4b]/20">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1e1b4b] rounded-b-xl z-20" />

              {/* App header */}
              <div className="pt-7 px-4 pb-3 bg-[#1e1b4b]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <i className="fa-solid fa-graduation-cap text-[#4f46e5] text-xs" />
                    <span className="text-white font-bold text-[11px]">ApnaCampus</span>
                  </div>
                  <span className="bg-[#4f46e5]/20 text-[#4f46e5] border border-[#4f46e5]/30 px-2 py-0.5 rounded-full text-[8px] font-semibold">Teacher App</span>
                </div>
              </div>

              {/* App content */}
              <div className="p-4 space-y-3">
                <div className="bg-white border border-[#daeaea] rounded-xl p-3 flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[8px] text-[#6b8a8a] block">Class Teacher</span>
                    <span className="font-bold text-[#1e1b4b] text-xs">Class IX – A</span>
                  </div>
                  <span className="text-[#4f46e5] text-xs"><i className="fa-solid fa-check-double" /></span>
                </div>

                <p className="text-[9px] text-[#6b8a8a] font-semibold uppercase tracking-wider">Today&apos;s Actions</p>

                {[
                  { icon: 'fa-calendar-check', label: 'Mark Attendance', sub: 'Daily roll call', teal: true },
                  { icon: 'fa-book-open', label: 'Marks Ledger', sub: 'Mid-term entry', teal: false },
                  { icon: 'fa-bell', label: 'Notice Board', sub: '3 unread notices', teal: false },
                ].map((item) => (
                  <div key={item.label}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${item.teal ? 'bg-[#eef2ff] border-[#4f46e5]/20' : 'bg-white border-[#daeaea]'}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] ${item.teal ? 'bg-[#4f46e5] text-white' : 'bg-[#f0f5f5] text-[#6b8a8a]'}`}>
                      <i className={`fa-solid ${item.icon}`} />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1e1b4b] text-[10px] block">{item.label}</span>
                      <span className="text-[8px] text-[#6b8a8a]">{item.sub}</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-[8px] text-[#6b8a8a] ml-auto" />
                  </div>
                ))}

                {/* RSVP Card */}
                <div className="bg-[#1e1b4b] p-3 rounded-xl">
                  <span className="text-[8px] text-[#4f46e5] font-bold uppercase block mb-1">Staff Meeting RSVP</span>
                  <span className="text-[10px] text-gray-200 block mb-2.5 leading-tight">Meeting at 3:30 PM – Admin Block</span>
                  <div className="flex gap-2">
                    <span className="bg-[#4f46e5] text-white px-3 py-1 rounded-lg text-[8px] font-bold flex-grow text-center">Accept</span>
                    <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-lg text-[8px] font-bold flex-grow text-center">Decline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="flex-1 space-y-6">
          <span className="section-label">Teacher Companion App</span>
          <h2
            id="app-heading"
            className="font-[family-name:var(--font-outfit)] font-extrabold text-3xl sm:text-4xl text-[#1e1b4b]"
          >
            Manage the Classroom Right from Your Mobile Screen
          </h2>
          <p className="text-[#6b8a8a] text-sm sm:text-base leading-relaxed">
            The official ApnaCampus mobile application empowers teachers to work efficiently without opening heavy desktop systems. Mark attendance, manage homework, track timetables, and accept or decline staff meeting RSVPs — all from one intuitive app.
          </p>

          <ul className="space-y-3 text-sm text-[#2d4a4a]">
            {[
              'Mark daily student attendance with one tap',
              'Submit homework and assignment deadlines',
              'Real-time RSVP for staff meetings & calendar events',
              'View personal timetable and substitution alerts',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-[#4f46e5] text-[9px]" aria-hidden="true" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#1e1b4b] hover:bg-[#312e81] transition-all"
            aria-label="Download ApnaCampus on Google Play"
          >
            <i className="fa-brands fa-google-play text-[#4f46e5] text-2xl" aria-hidden="true" />
            <div className="text-left leading-none">
              <span className="text-[9px] text-gray-400 uppercase tracking-widest block">Available on</span>
              <span className="text-sm font-bold text-white">Google Play Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
