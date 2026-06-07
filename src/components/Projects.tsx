'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    id: '01',
    title: 'Height Management System',
    subtitle: 'HMS — Smart Property Management',
    period: 'Sep 2024 – Jul 2025',
    association: 'COMSATS University · Final Year Project',
    description:
      'Comprehensive subscription-based digital platform centralizing residential building operations. Covers finance, HR, dashboards, analytics, membership management, rental automation, and maintenance.',
    highlights: [
      'Subscription-based multi-module platform',
      'Resident app for unit bookings and memberships',
      'Real-time alerts for rentals, subscriptions, and balances',
      'Early access system for new projects',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'React', 'REST API'],
    featured: true,
  },
  {
    id: '02',
    title: 'AISD Platform',
    subtitle: 'Al Hamd Institute for Skills Development',
    period: 'Mar 2026 – Present',
    association: 'Associated with Arexio',
    description:
      'Led technical development and architecture migration to Next.js App Router. High-performance, SEO-optimized platform with Server-Side Rendering, JSON-LD structured data, and optimized LCP scores.',
    highlights: [
      'Next.js App Router with advanced SSR',
      'JSON-LD structured data for SEO',
      'Optimized LCP and Core Web Vitals',
      'Admin dashboard for courses and team management',
    ],
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'SEO'],
    featured: true,
  },
  {
    id: '03',
    title: 'Avalon Jewelry',
    subtitle: 'Premium Artificial Jewelry E-Commerce',
    period: 'Feb 2026',
    association: 'Client Project',
    description:
      'Clean and modern website for a jewelry brand focusing on premium design and smooth UX. Responsive layouts, product presentation, and performance optimization for fast loading and polished feel.',
    highlights: [
      'Premium product showcase UI',
      'Mobile-first responsive design',
      'Performance-optimized builds',
      'Clean Kashmiri jewelry catalog',
    ],
    skills: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    featured: false,
  },
  {
    id: '04',
    title: 'SuperWheels',
    subtitle: 'Ride-Booking Platform',
    period: '2024 – 2025',
    association: 'CYBERAPPX Technologies',
    description:
      'Full-featured ride-booking platform with instant, scheduled, city, airport, and daily rides. Real-time trip updates, driver management, fare calculations, and admin panel.',
    highlights: [
      'Driver scheduling and real-time trip updates',
      'Multiple ride types: instant, scheduled, daily',
      'Admin panel with vehicle and fare management',
      'Stripe-like payment integration',
    ],
    skills: ['React', 'Laravel', 'Node.js', 'MongoDB', 'MySQL'],
    featured: false,
  },
  {
    id: '05',
    title: 'RentX',
    subtitle: 'Property Rental Management',
    period: '2024',
    association: 'Personal Project',
    description:
      'Full property rental platform enabling landlords to list properties, track bookings, manage payments with Stripe integration, auto-generate PDF contracts, and track tenant history.',
    highlights: [
      'Stripe payment integration',
      'Auto-generated PDF rental contracts',
      'Automated rent reminders',
      'Tenant verification system',
    ],
    skills: ['Express.js', 'Node.js', 'MySQL', 'Sequelize'],
    featured: false,
  },
  {
    id: '06',
    title: 'Budget Wise',
    subtitle: 'Personal Finance Tracker',
    period: '2024',
    association: 'Personal Project',
    description:
      'Personal finance dashboard for tracking income, expenses, and savings goals. Category-wise breakdowns with interactive Chart.js analytics and mobile-first design.',
    highlights: [
      'Income and expense tracking dashboard',
      'Category-wise monthly analytics',
      'Chart.js data visualization',
      'Mobile-first responsive layout',
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'Chart.js'],
    featured: false,
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.05 }
    )
    obs.observe(el)

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const cardObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            card.style.transitionDelay = `${(i % 3) * 0.1}s`
            card.classList.add('visible')
          }
        },
        { threshold: 0.1 }
      )
      cardObs.observe(card)
    })

    return () => obs.disconnect()
  }, [])

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-reveal py-28 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">003 / Projects</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text">
              Built Work
            </h2>
          </div>
          <p className="font-mono text-xs text-dim">{projects.length} projects shipped</p>
        </div>

        {/* Featured projects — large */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className="section-reveal card-hover border border-border bg-surface p-8 relative overflow-hidden group"
            >
              {/* Accent corner */}
              <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-accent opacity-60" />
              </div>

              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-dim">{p.period}</span>
                <span className="font-mono text-xs text-accent border border-accent/20 px-2 py-0.5">Featured</span>
              </div>

              <p className="font-mono text-3xl font-bold text-accent/20 mb-2">{p.id}</p>
              <h3 className="font-display text-2xl font-bold text-text mb-1">{p.title}</h3>
              <p className="font-sans text-sm text-dim mb-4">{p.subtitle}</p>
              <p className="font-mono text-xs text-dim/70 mb-5">{p.association}</p>

              <p className="text-sm text-dim/80 leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-1.5 mb-6">
                {p.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-mono text-xs text-dim">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Remaining projects — compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => { cardRefs.current[featured.length + i] = el }}
              className="section-reveal card-hover border border-border bg-surface p-6 relative"
            >
              <span className="font-mono text-xs text-dim/50">{p.id}</span>
              <h3 className="font-display text-lg font-bold text-text mt-2 mb-1">{p.title}</h3>
              <p className="font-sans text-xs text-dim mb-3">{p.subtitle}</p>
              <p className="font-sans text-xs text-dim/70 leading-relaxed mb-4 line-clamp-3">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.skills.slice(0, 3).map((s) => (
                  <span key={s} className="tag text-xs">{s}</span>
                ))}
                {p.skills.length > 3 && (
                  <span className="tag">+{p.skills.length - 3}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
