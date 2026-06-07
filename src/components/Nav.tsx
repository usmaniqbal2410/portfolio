'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm text-accent tracking-widest uppercase" data-hover>
          UI<span className="text-dim">_dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-hover
              className="font-mono text-xs tracking-widest uppercase text-dim hover:text-text transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:usmaniqbal2410@gmail.com"
          data-hover
          className="hidden md:flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 px-4 py-2 hover:bg-accent/5 transition-all duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4 border-b border-border bg-bg/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-dim hover:text-accent transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
