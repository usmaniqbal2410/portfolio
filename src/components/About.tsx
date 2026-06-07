'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  BoltIcon,
  CpuChipIcon,
  PaintBrushIcon,
  CubeIcon
} from '@heroicons/react/24/outline'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
        { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
      <section
          id="about"
          ref={sectionRef}
          className="section-reveal py-28 border-t border-border"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            {/* Left */}
            <div>
              <p className="section-label mb-4">001 / About</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-text leading-tight">
                Code.
                <br />
                <span className="text-accent">Scale.</span>
                <br />
                Repeat.
              </h2>
              <div className="mt-8 space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-dim">COMSATS University</span>
                </div>
                <p className="font-mono text-sm text-text">BS Software Engineering</p>
                <p className="font-mono text-xs text-dim">GPA 2.94 · Aug 2021 – Jul 2025</p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-8">
              <p className="text-text/80 leading-relaxed text-base">
                I'm a full-stack developer from Lahore, Pakistan, focused on building production-grade
                web applications that are fast, scalable, and maintainable. I care deeply about clean
                code, thoughtful architecture, and seamless user experiences.
              </p>
              <p className="text-dim leading-relaxed text-sm">
                My foundation is MERN Stack and Laravel, but I'm comfortable across the whole stack —
                from database design to CI/CD pipelines. I've shipped features across ride-booking platforms,
                property management systems, institute platforms, and jewelry e-commerce sites.
              </p>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <BoltIcon className="w-6 h-6 text-accent" />, title: 'Performance First', desc: 'LCP, SSR, and bundle optimization are part of my workflow' },
                  { icon: <CpuChipIcon className="w-6 h-6 text-accent" />, title: 'Clean Architecture', desc: 'Scalable patterns that grow with the product' },
                  { icon: <PaintBrushIcon className="w-6 h-6 text-accent" />, title: 'UI/UX Aware', desc: 'Code that users feel — smooth, intentional interfaces' },
                  { icon: <CubeIcon className="w-6 h-6 text-accent" />, title: 'Delivery Focused', desc: 'From idea to production-ready, consistently' },
                ].map((v) => (
                    <div
                        key={v.title}
                        className="card-hover border border-border p-4 bg-surface"
                    >
                      <div className="mb-2">{v.icon}</div>
                      <p className="font-sans text-sm font-medium text-text mt-2">{v.title}</p>
                      <p className="font-mono text-xs text-dim mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/usmaniqbal2410' },
                  { label: 'GitHub', href: 'https://github.com/usmaniqbal2410' },
                ].map((l) => (
                    <Link
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover
                        className="font-mono text-xs text-dim hover:text-accent transition-colors duration-200 border-b border-dim/30 hover:border-accent pb-0.5"
                    >
                      {l.label} ↗
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}