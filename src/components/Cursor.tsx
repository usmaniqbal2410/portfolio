'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    // Physics & Velocity Tracking Variables
    let lastMouseX = 0, lastMouseY = 0
    let speed = 0
    let angle = 0
    let isHovering = false
    let animId: number

    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot immediately matches mouse for high-refresh accuracy
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

      const target = e.target as HTMLElement
      const interactiveEl = target.closest('a, button, [data-hover]')

      if (interactiveEl) {
        if (!isHovering) {
          isHovering = true
          ring.classList.add('hovering')
          dot.classList.add('hovering')
        }

        // --- OPTIONAL PREMIUM MAGNETIC EFFECT ---
        // Snaps the ring slightly towards the center of the hovered element
        const rect = interactiveEl.getBoundingClientRect()
        const elCenterX = rect.left + rect.width / 2
        const elCenterY = rect.top + rect.height / 2

        // Blend mouse position with element center for a magnetic pull feel
        mouseX = mouseX + (elCenterX - mouseX) * 0.35
        mouseY = mouseY + (elCenterY - mouseY) * 0.35
      } else {
        if (isHovering) {
          isHovering = false
          ring.classList.remove('hovering')
          dot.classList.remove('hovering')
        }
      }
    }

    // Interactive Trigger Animations
    const onMouseDown = () => {
      ring.classList.add('clicking')
      dot.classList.add('clicking')
      createClickRipple(mouseX, mouseY)
    }

    const onMouseUp = () => {
      ring.classList.remove('clicking')
      dot.classList.remove('clicking')
    }

    // Dynamic Micro-Particles on Click
    const createClickRipple = (x: number, y: number) => {
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div')
        particle.className = 'cursor-particle fixed w-1 h-1 bg-accent rounded-full pointer-events-none z-[9997]'
        particle.style.left = `${x}px`
        particle.style.top = `${y}px`

        // Random particle velocity trajectories
        const pAngle = (i / 6) * Math.PI * 2 + (Math.random() * 0.4)
        const pVelocity = 25 + Math.random() * 20
        const targetX = Math.cos(pAngle) * pVelocity
        const targetY = Math.sin(pAngle) * pVelocity

        document.body.appendChild(particle)

        particle.animate([
          { transform: 'translate3d(-50%, -50%, 0) scale(1)', opacity: 0.8 },
          { transform: `translate3d(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px), 0) scale(0)`, opacity: 0 }
        ], {
          duration: 600,
          easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
          fill: 'forwards'
        }).onfinish = () => particle.remove()
      }
    }

    // Kinetic Render Loop (Physics & Velocity Deformation)
    const renderLoop = () => {
      // Fluid linear interpolation (Lerp)
      ringX += (mouseX - ringX) * 0.14
      ringY += (mouseY - ringY) * 0.14

      // Calculate absolute real-time speed/velocity vectors
      const deltaX = mouseX - lastMouseX
      const deltaY = mouseY - lastMouseY

      // Calculate continuous moving average to filter sudden tracking jitters
      const targetSpeed = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 100)
      speed += (targetSpeed - speed) * 0.15

      if (speed > 1) {
        angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      }

      lastMouseX = mouseX
      lastMouseY = mouseY

      // Dynamic Scale Modifiers based on real velocity
      const scaleX = 1 + (speed * 0.0035) // Length stretching factor
      const scaleY = 1 - (speed * 0.0020) // Breadth squeezing factor

      if (!isHovering) {
        // Dynamic fluid morphing while moving freely across viewport
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`
      } else {
        // Clean perfect scale preservation upon interactive magnet snapping
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(0deg) scale(1)`
      }

      animId = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    animId = requestAnimationFrame(renderLoop)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
      <>
        <div
            ref={dotRef}
            className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform mix-blend-difference transition-all duration-200 ease-out hidden md:block"
        />
        <div
            ref={ringRef}
            className="cursor-ring fixed top-0 left-0 w-10 h-10 border border-accent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform mix-blend-difference transition-[width,height,background-color,border-color,box-shadow] duration-500 cubic-bezier(0.19, 1, 0.22, 1) hidden md:block"
        />
      </>
  )
}