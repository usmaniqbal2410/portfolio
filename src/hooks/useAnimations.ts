'use client'

import { useEffect, useRef, useState } from 'react'

export function useMouseParallax(strength: number = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength
      const y = (e.clientY / window.innerHeight - 0.5) * strength
      setOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [strength])

  return offset
}

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
