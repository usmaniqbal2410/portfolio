'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { label: 'Total Contributions', value: '1,115', sub: 'Feb 2024 – Present' },
  { label: 'Current Streak', value: '214', sub: 'days 🔥' },
  { label: 'Longest Streak', value: '214', sub: 'Nov 2025 – Jun 2026' },
  { label: 'Commits in 2026', value: '471', sub: 'and counting' },
]

const activityMonths = [
  { month: 'Apr 2026', commits: 81, repos: 3 },
  { month: 'May 2026', commits: 159, repos: 3 },
  { month: 'Jun 2026', commits: 21, repos: 3 },
]

export default function GitHubStats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-reveal py-28 border-t border-border bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">GitHub Activity</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
              Commit History
            </h2>
          </div>
          <a
            href="https://github.com/usmaniqbal2410"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="font-mono text-xs text-accent hover:text-accent-dim transition-colors"
          >
            github.com/usmaniqbal2410 ↗
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="border border-border p-6 bg-bg">
              <p className="font-display text-4xl font-bold text-accent">{s.value}</p>
              <p className="font-sans text-sm text-text mt-2">{s.label}</p>
              <p className="font-mono text-xs text-dim mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Contribution bar chart */}
        <div className="border border-border p-6 bg-bg mb-6">
          <p className="font-mono text-xs text-dim mb-6">RECENT ACTIVITY</p>
          <div className="space-y-4">
            {activityMonths.map((m) => (
              <div key={m.month} className="flex items-center gap-4">
                <span className="font-mono text-xs text-dim w-20 flex-shrink-0">{m.month}</span>
                <div className="flex-1 bg-muted h-5 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-accent/80 flex items-center"
                    style={{ width: `${Math.min(100, (m.commits / 160) * 100)}%` }}
                  />
                  <span className="absolute left-2 font-mono text-xs text-bg font-bold z-10 leading-5">{m.commits} commits</span>
                </div>
                <span className="font-mono text-xs text-dim w-12 flex-shrink-0">{m.repos} repos</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="border border-border p-6 bg-bg">
          <p className="font-mono text-xs text-dim mb-6">MOST USED LANGUAGES</p>
          <div className="flex items-center gap-0 h-3 mb-4 overflow-hidden">
            <div className="h-full bg-accent" style={{ width: '50.54%' }} />
            <div className="h-full bg-yellow-400" style={{ width: '38.46%' }} />
            <div className="h-full bg-pink-500" style={{ width: '7.90%' }} />
            <div className="h-full bg-blue-500" style={{ width: '3.10%' }} />
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { name: 'C++', pct: '50.54%', color: 'bg-accent' },
              { name: 'JavaScript', pct: '38.46%', color: 'bg-yellow-400' },
              { name: 'MDX', pct: '7.90%', color: 'bg-pink-500' },
              { name: 'CSS', pct: '3.10%', color: 'bg-blue-500' },
            ].map((l) => (
              <div key={l.name} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                <span className="font-mono text-xs text-dim">{l.name}</span>
                <span className="font-mono text-xs text-text">{l.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
