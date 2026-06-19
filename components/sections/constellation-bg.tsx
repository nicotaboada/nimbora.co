'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

type Streak = {
  x: number
  y: number
  vx: number
  len: number
  thickness: number
  alpha: number
}

/**
 * Boom-style background:
 *  - white "constellation" of slow-drifting dots connected by faint lines
 *  - soft horizontal light streaks that glide slowly left → right
 * Pure white/grey on transparent so the black section shows through.
 */
export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let streaks: Streak[] = []
    let raf = 0

    const LINK_DIST = 150 // px before scaling — connect nodes closer than this

    const rand = (min: number, max: number) => min + Math.random() * (max - min)

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // density scales with area, capped for perf
      const count = Math.min(90, Math.floor((width * height) / 14000))
      nodes = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.12, 0.12),
        r: rand(0.6, 1.8),
      }))

      const streakCount = Math.max(3, Math.floor(width / 600))
      streaks = Array.from({ length: streakCount }, () => makeStreak(true))
    }

    function makeStreak(initial: boolean): Streak {
      const len = rand(120, 320)
      return {
        x: initial ? rand(-len, width) : -len,
        y: rand(height * 0.05, height * 0.95),
        vx: rand(0.18, 0.45), // slow drift to the right
        len,
        thickness: rand(0.8, 2.2),
        alpha: rand(0.05, 0.16),
      }
    }

    function drawStreaks() {
      for (const s of streaks) {
        s.x += s.vx
        if (s.x - s.len > width) {
          Object.assign(s, makeStreak(false))
        }
        const grad = ctx.createLinearGradient(s.x - s.len, s.y, s.x, s.y)
        grad.addColorStop(0, 'rgba(255,255,255,0)')
        grad.addColorStop(0.5, `rgba(255,255,255,${s.alpha})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = s.thickness
        ctx.beginPath()
        ctx.moveTo(s.x - s.len, s.y)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
      }
    }

    function drawConstellation() {
      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > width) a.vx *= -1
        if (a.y < 0 || a.y > height) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const op = (1 - dist / LINK_DIST) * 0.18
            ctx.strokeStyle = `rgba(255,255,255,${op})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      // dots
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.35 + n.r * 0.18})`
        ctx.fill()
      }
    }

    function frame() {
      ctx.clearRect(0, 0, width, height)
      drawStreaks()
      drawConstellation()
      raf = requestAnimationFrame(frame)
    }

    resize()

    if (reduced) {
      // single static frame, no animation
      drawStreaks()
      drawConstellation()
    } else {
      raf = requestAnimationFrame(frame)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
