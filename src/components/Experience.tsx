'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Arexio',
    role: 'Senior Software Engineer',
    period: 'Feb 2026 – Present',
    duration: '5 mos',
    type: 'Full-time · On-site',
    location: 'Lahore, Pakistan',
    bullets: [
      'Shaped technical vision and product architecture',
      'Built scalable web apps using Next.js, MERN, and Laravel',
      'Led code standards, reviews, and deployment workflows',
      'Translated client needs into production-ready systems',
    ],
    skills: ['Next.js', 'TypeScript', 'MERN', 'SEO'],
    current: true,
  },
  {
    company: 'Arexio',
    role: 'Associate Software Engineer',
    period: 'Nov 2025 – Present',
    duration: '8 mos',
    type: 'Hybrid',
    location: 'Lahore, Pakistan',
    bullets: [
      'Developed and maintained web apps using MERN and Laravel',
      'Implemented authentication, dashboards, and dynamic interfaces',
      'Participated in code reviews and performance optimization',
    ],
    skills: ['React', 'Node.js', 'Laravel', 'MongoDB'],
    current: false,
  },
  {
    company: 'AL-Hamd Institute (AISD)',
    role: 'Technical Support Operations Manager',
    period: 'Aug 2025 – Oct 2025',
    duration: '3 mos',
    type: 'Contract · On-site',
    location: 'Lahore, Pakistan',
    bullets: [
      'Developed the AISD website and supported digital presence',
      'Handled student registration, course guidance, and admin support',
      'Provided instructional support for technical courses',
    ],
    skills: ['Next.js', 'React', 'SEO', 'Figma'],
    current: false,
  },
  {
    company: 'NAVTTC',
    role: 'Assessment Specialist',
    period: 'Dec 2025 · 1 mo',
    duration: '1 mo',
    type: 'Contract · On-site',
    location: 'Lahore, Pakistan',
    bullets: [
      'Supported final assessment process for NAVTTC IT courses',
      'Assisted in paper setting and quality checks',
      'Worked with senior assessors on standard methodologies',
    ],
    skills: ['Educational Assessment'],
    current: false,
  },
  {
    company: 'CYBERAPPX Technologies',
    role: 'Full Stack Web Developer',
    period: 'Jul 2024 – Oct 2025',
    duration: '1 yr 4 mos',
    type: 'Contract · Hybrid',
    location: 'Lahore, Pakistan',
    bullets: [
      'Built responsive web apps with React, Laravel, Node.js, MySQL & MongoDB',
      'Developed SuperWheels: driver scheduling, real-time updates, fares & payments',
      'Improved backend performance, reliability & scalability',
      'Used Git and GitHub for smooth team deployments',
    ],
    skills: ['React', 'Laravel', 'Node.js', 'MySQL', 'MongoDB', 'PHP'],
    current: false,
  },
  {
    company: 'CYBERAPPX Technologies',
    role: 'Full Stack Developer (Intern)',
    period: 'Apr 2024 – Jun 2024',
    duration: '3 mos',
    type: 'Internship · On-site',
    location: 'Lahore, Pakistan',
    bullets: [
      'Worked with Laravel and React.js on web application development',
      'Handled backend logic, databases, and UI integration',
      'Used Git/GitHub as part of daily development workflow',
    ],
    skills: ['Laravel', 'React', 'Git', 'PHP'],
    current: false,
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const sectionObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    sectionObs.observe(el)

    itemRefs.current.forEach((item, i) => {
      if (!item) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            item.style.transitionDelay = `${i * 0.1}s`
            item.classList.add('visible')
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(item)
    })

    return () => sectionObs.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-reveal py-28 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">002 / Experience</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
              Work History
            </h2>
          </div>
          <p className="font-mono text-xs text-dim">
            {experiences.length} positions · 2024–Present
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el }}
                className="section-reveal relative sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 hidden sm:block">
                  <div className={`timeline-dot ${exp.current ? 'ring-4 ring-accent/20' : 'opacity-50'}`} />
                </div>

                <div className="card-hover border border-border bg-surface p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0 justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-display text-lg font-bold text-text">{exp.role}</h3>
                        {exp.current && (
                          <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-0.5">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-sm text-dim">{exp.company}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                      <p className="font-mono text-xs text-text">{exp.period}</p>
                      <p className="font-mono text-xs text-dim mt-0.5">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-accent text-xs mt-1 flex-shrink-0">→</span>
                        <span className="font-sans text-sm text-dim leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
