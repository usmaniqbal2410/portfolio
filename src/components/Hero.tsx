'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMouseParallax } from '@/hooks/useAnimations'

const roles = [
  'Full Stack Developer',
  'Next.js Engineer',
  'MERN Specialist',
  'Laravel Developer',
  'Software Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const parallax = useMouseParallax(15)
  const [time, setTime] = useState('')

  // Typing animation
  useEffect(() => {
    const role = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => setDisplayText(role.slice(0, displayText.length + 1)), 80)
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Live time (Lahore PKT)
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
        {/* Scan line */}
        <div className="scanline" />

        {/* Background orbs with parallax */}
        <div
            className="absolute top-1/4 right-1/4 w-96 h-96 opacity-5 rounded-full"
            style={{
              background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
              transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)`,
              transition: 'transform 0.4s ease-out',
            }}
        />
        <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 opacity-5 rounded-full"
            style={{
              background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
              transform: `translate(${-parallax.x * 0.3}px, ${-parallax.y * 0.3}px)`,
              transition: 'transform 0.4s ease-out',
            }}
        />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              {/* Status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-accent">Open to opportunities</span>
                </div>
                <span className="font-mono text-xs text-dim hidden sm:block">{time} PKT</span>
              </div>

              {/* Name */}
              <div>
                <p className="section-label mb-3">Hello, I'm</p>
                <h1
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-none tracking-tight"
                    style={{
                      transform: `translate(${parallax.x * 0.02}px, ${parallax.y * 0.02}px)`,
                      transition: 'transform 0.3s ease-out',
                    }}
                >
                  Usman
                  <br />
                  <span className="text-accent">Iqbal</span>
                </h1>
              </div>

              {/* Typed role */}
              <div className="font-mono text-lg sm:text-xl text-dim">
                <span className="text-text">{displayText}</span>
                <span className="text-accent animate-blink">|</span>
              </div>

              {/* Summary */}
              <p className="text-dim leading-relaxed max-w-md text-sm sm:text-base">
                Building scalable web applications with modern tech stacks.
                1+ years shipping production code — clean, fast, purposeful.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap gap-4">
                <Link
                    href="#projects"
                    data-hover
                    className="magnetic-btn font-mono text-sm bg-accent text-bg px-6 py-3 hover:bg-accent-dim transition-colors duration-200 font-bold tracking-wide"
                >
                  View Work
                </Link>
                <Link
                    href="#contact"
                    data-hover
                    className="magnetic-btn font-mono text-sm border border-border text-text px-6 py-3 hover:border-accent/40 transition-colors duration-200"
                >
                  Contact Me
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex gap-12 pt-4 border-t border-border">
                {[
                  { val: '1+', label: 'Years Exp' },
                  { val: '5+', label: 'Projects' },
                  { val: '3', label: 'Companies' },
                ].map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-2xl font-bold text-text">{s.val}</p>
                      <p className="font-mono text-xs text-dim mt-0.5">{s.label}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Right: Profile Image Frame (Beautifully framed & responsive to big screen layout heights) */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                  className="relative"
                  style={{
                    transform: `translate(${parallax.x * 0.04}px, ${parallax.y * 0.04}px)`,
                    transition: 'transform 0.4s ease-out',
                  }}
              >
                {/* Image window wrapper scales larger on big screens to claim visual real estate cleanly */}
                <div className="photo-frame relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                  <div className="w-full h-full border border-border overflow-hidden bg-surface relative">

                    {/* Next.js optimized Image deployment */}
                    <Image
                        src="/profile.jpg" // Place your profile image path here
                        alt="Usman Iqbal Portrait"
                        fill
                        priority
                        sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 400px"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                    />

                    {/* Corner technical accents preserving your signature style */}
                    <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent z-10" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent z-10" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-accent z-10" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent z-10" />
                  </div>
                </div>

                {/* Floating location element */}
                <div
                    className="absolute -bottom-6 -left-6 bg-surface border border-border px-4 py-3 shadow-xl z-20"
                    style={{
                      transform: `translate(${parallax.x * 0.08}px, ${parallax.y * 0.08}px)`,
                      transition: 'transform 0.2s ease-out',
                    }}
                >
                  <p className="font-mono text-xs text-dim flex items-center gap-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-3.5 h-3.5 text-accent"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    Location
                  </p>
                  <p className="font-sans text-sm font-medium text-text mt-0.5">Lahore, Pakistan</p>
                </div>

              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="font-mono text-xs text-dim tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-dim animate-pulse" />
          </div>
        </div>
      </section>
  )
}