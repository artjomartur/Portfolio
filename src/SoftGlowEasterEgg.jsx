import React, { useEffect, useRef } from 'react'

const SKILLS = ['React', 'Python', 'C#', 'Unity', 'JS', 'TypeScript', 'Node.js', 'SQL', 'Git', 'Vite']

function SoftGlowEasterEgg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth || 760
      canvas.height = canvas.parentElement.clientHeight || 600
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize particles
    const particles = SKILLS.map((skill) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      text: skill,
      radius: 4,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const accent = isDark ? 'rgba(10, 132, 255, 0.45)' : 'rgba(0, 113, 227, 0.35)'
      const text = isDark ? 'rgba(161, 161, 166, 0.4)' : 'rgba(110, 110, 115, 0.4)'
      const line = isDark ? 'rgba(10, 132, 255, 0.12)' : 'rgba(0, 113, 227, 0.08)'

      // Draw connection lines
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.strokeStyle = line.replace('0.12', String(0.12 * (1 - dist / 140))).replace('0.08', String(0.08 * (1 - dist / 140)))
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce boundaries
        if (p.x < 15 || p.x > canvas.width - 15) p.vx *= -1
        if (p.y < 15 || p.y > canvas.height - 15) p.vy *= -1

        // Draw dot
        ctx.fillStyle = accent
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw text label
        ctx.fillStyle = text
        ctx.font = '500 11px -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(p.text, p.x, p.y - 8)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  )
}

export default SoftGlowEasterEgg
