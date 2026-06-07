'use client'

import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'usmaniqbal2410@gmail.com',
    href: 'mailto:usmaniqbal2410@gmail.com',
    icon: '✉',
  },
  {
    label: 'Phone',
    value: '+92 312 6037375',
    href: 'tel:+923126037375',
    icon: '☎',
  },
  {
    label: 'LinkedIn',
    value: 'in/usmaniqbal2410',
    href: 'https://linkedin.com/in/usmaniqbal2410',
    icon: '◈',
  },
  {
    label: 'GitHub',
    value: 'usmaniqbal2410',
    href: 'https://github.com/usmaniqbal2410',
    icon: '◆',
  },
  {
    label: 'Portfolio',
    value: 'usmaniqbal.arexio.io',
    href: 'https://usmaniqbal.arexio.io',
    icon: '◉',
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-reveal py-28 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">005 / Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
            Let's Build
            <br />
            Something.
          </h2>
          <p className="mt-6 text-dim max-w-md text-sm leading-relaxed">
            Available for freelance projects, full-time roles, and consulting.
            I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-hover
                className="card-hover flex items-center gap-4 border border-border p-4 bg-surface group"
              >
                <span className="font-mono text-accent text-lg w-8 flex-shrink-0 text-center">{c.icon}</span>
                <div className="flex-1">
                  <p className="font-mono text-xs text-dim">{c.label}</p>
                  <p className="font-sans text-sm text-text mt-0.5 group-hover:text-accent transition-colors">{c.value}</p>
                </div>
                <span className="text-dim group-hover:text-accent transition-colors text-sm">↗</span>
              </a>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex flex-col justify-between">
            <div className="border border-border p-6 bg-surface">
              <p className="font-mono text-xs text-accent mb-4">CURRENT STATUS</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-dim">Availability</span>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-xs text-accent">Open</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-dim">Response Time</span>
                  <span className="font-mono text-xs text-text">{'< 24 hours'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-dim">Time Zone</span>
                  <span className="font-mono text-xs text-text">PKT (UTC+5)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-dim">Location</span>
                  <span className="font-mono text-xs text-text">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs text-dim mb-3">PREFERRED WORK</p>
              <div className="flex flex-wrap gap-2">
                {['Full-time', 'Freelance', 'Remote', 'On-site', 'Contract'].map((w) => (
                  <span key={w} className="tag">{w}</span>
                ))}
              </div>
            </div>

            <a
              href="mailto:usmaniqbal2410@gmail.com"
              data-hover
              className="mt-8 block w-full text-center font-mono text-sm bg-accent text-bg px-6 py-4 hover:bg-accent-dim transition-colors duration-200 font-bold tracking-wide"
            >
              Send Message →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
