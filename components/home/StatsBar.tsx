const stats = [
  { value: '500+', label: 'Schools & Colleges', icon: 'fa-building-columns' },
  { value: '10k+', label: 'Daily Active Users', icon: 'fa-users' },
  { value: '4.9★', label: 'Play Store Rating', icon: 'fa-star' },
  { value: '99.9%', label: 'Uptime SLA Guarantee', icon: 'fa-shield-halved' },
];

export default function StatsBar() {
  return (
    <section className="section-white py-14 max-w-7xl mx-auto px-6 md:px-16" aria-label="Key platform statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="card p-6 space-y-3 rounded-2xl">
            <div className="icon-box mx-auto">
              <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
            </div>
            <div className="font-[family-name:var(--font-outfit)] font-extrabold text-2xl sm:text-3xl text-[#1e1b4b]">
              {s.value}
            </div>
            <div className="text-xs text-[#6b8a8a] font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
