'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', level: 92 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Laravel / PHP', level: 88 },
      { name: 'REST API Design', level: 87 },
      { name: 'Authentication & Auth', level: 84 },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 83 },
      { name: 'MySQL / PostgreSQL', level: 82 },
      { name: 'Database Design', level: 78 },
      { name: 'Query Optimization', level: 75 },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 72 },
      { name: 'Postman', level: 85 },
      { name: 'Jira / Trello', level: 78 },
    ],
  },
]

const techStack = [
  'JavaScript', 'TypeScript', 'PHP', 'Python', 'C++', 'Java', 'C#',
  'React', 'Next.js', 'Tailwind', 'Bootstrap', 'Laravel Blade',
  'Node.js', 'Express', 'Laravel', 'REST API',
  'MongoDB', 'MySQL', 'PostgreSQL', 'SQL Server',
  'Git', 'GitHub', 'Figma', 'Postman', 'Jira', 'Trello', 'Visio',
  'React Native', 'Unity', 'SEO', 'SSR', 'Docker',
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          // Animate bars
          barRefs.current.forEach((bar, i) => {
            if (!bar) return
            const level = bar.dataset.level
            setTimeout(() => {
              bar.style.width = level + '%'
            }, i * 60)
          })
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-reveal py-28 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">004 / Skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Tech Stack
          </h2>
        </div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-accent mb-4 tracking-widest">{group.label.toUpperCase()}</p>
              <div className="space-y-4">
                {group.skills.map((skill, i) => {
                  const globalIndex =
                    skillGroups
                      .slice(0, skillGroups.indexOf(group))
                      .reduce((acc, g) => acc + g.skills.length, 0) + i
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-sans text-xs text-dim">{skill.name}</span>
                        <span className="font-mono text-xs text-dim/50">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          ref={(el) => { barRefs.current[globalIndex] = el }}
                          className="skill-bar-fill"
                          data-level={skill.level}
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="border-t border-border pt-12">
          <p className="font-mono text-xs text-dim mb-6">ALL TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tag cursor-default">{tech}</span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 border border-border p-6 bg-surface">
          <p className="font-mono text-xs text-accent mb-4">CERTIFICATION</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-text">Certified Full Stack Web Developer</h3>
              <p className="font-sans text-sm text-dim mt-1">PNY Trainings · Feb 2025</p>
              <p className="font-mono text-xs text-dim/60 mt-1">Credential ID: FSW-67-02-6069</p>
            </div>
            <div className="flex-shrink-0">
              <p className="font-mono text-xs text-dim">6-month program covering</p>
              <p className="font-sans text-sm text-text mt-1">Next.js · Laravel · MERN Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
