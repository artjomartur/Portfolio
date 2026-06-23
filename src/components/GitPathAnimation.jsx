import React, { useState, useEffect, useRef } from 'react'

// A git graph that draws itself across the modal like the popcorn effect.
// Main line runs top-to-bottom, branches fork out and merge back.
// Total animation: ~4 seconds, then fades away.

function GitPathAnimation() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // hi-dpi
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.parentElement.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'
    ctx.scale(dpr, dpr)

    const W = rect.width
    const H = rect.height

    // Colors
    const MAIN_COLOR = '#6ee7b7'
    const BRANCH_COLORS = ['#818cf8', '#f472b6', '#fbbf24', '#34d399', '#a78bfa']

    // Build the graph
    const mainX = W * 0.18
    const totalSegments = 8
    const segH = H / (totalSegments + 1)

    // Commits on main branch
    const mainCommits = []
    for (let i = 0; i <= totalSegments; i++) {
      mainCommits.push({ x: mainX, y: segH * (i + 0.5) })
    }

    // Branches: each has a start commit index, end commit index, and a peak X offset
    const branches = [
      { from: 1, to: 3, peakX: W * 0.52, color: BRANCH_COLORS[0], midCommits: 1 },
      { from: 2, to: 5, peakX: W * 0.70, color: BRANCH_COLORS[1], midCommits: 2 },
      { from: 4, to: 6, peakX: W * 0.55, color: BRANCH_COLORS[2], midCommits: 1 },
      { from: 5, to: 7, peakX: W * 0.80, color: BRANCH_COLORS[3], midCommits: 1 },
    ]

    // Build all draw items with timing
    const items = []
    const TOTAL_DURATION = 3600 // ms of drawing, then 400ms fade

    // Main line segments
    for (let i = 0; i < mainCommits.length - 1; i++) {
      const t0 = (i / totalSegments) * TOTAL_DURATION * 0.9
      const t1 = ((i + 1) / totalSegments) * TOTAL_DURATION * 0.9
      items.push({
        type: 'line',
        x1: mainCommits[i].x, y1: mainCommits[i].y,
        x2: mainCommits[i + 1].x, y2: mainCommits[i + 1].y,
        color: MAIN_COLOR,
        width: 3,
        t0, t1,
      })
    }

    // Main commits (dots)
    for (let i = 0; i < mainCommits.length; i++) {
      const t = (i / totalSegments) * TOTAL_DURATION * 0.9
      items.push({
        type: 'commit',
        x: mainCommits[i].x, y: mainCommits[i].y,
        color: MAIN_COLOR,
        r: i === 0 || i === mainCommits.length - 1 ? 7 : 5,
        t0: t, t1: t + 150,
      })
    }

    // Branches
    branches.forEach((branch) => {
      const startPt = mainCommits[branch.from]
      const endPt = mainCommits[branch.to]
      const branchDuration = ((branch.to - branch.from) / totalSegments) * TOTAL_DURATION * 0.9
      const branchStart = (branch.from / totalSegments) * TOTAL_DURATION * 0.9 + 100

      // Build branch path points
      const pts = [{ x: startPt.x, y: startPt.y }]
      const midCount = branch.midCommits
      for (let m = 0; m < midCount; m++) {
        const frac = (m + 1) / (midCount + 1)
        const midY = startPt.y + (endPt.y - startPt.y) * frac
        const midX = branch.peakX + (Math.random() - 0.5) * 30
        pts.push({ x: midX, y: midY })
      }
      pts.push({ x: endPt.x, y: endPt.y })

      // Line segments for branch
      for (let i = 0; i < pts.length - 1; i++) {
        const segFrac0 = i / (pts.length - 1)
        const segFrac1 = (i + 1) / (pts.length - 1)
        items.push({
          type: 'curve',
          x1: pts[i].x, y1: pts[i].y,
          x2: pts[i + 1].x, y2: pts[i + 1].y,
          cpx1: pts[i].x + (pts[i + 1].x - pts[i].x) * 0.5,
          cpy1: pts[i].y,
          cpx2: pts[i].x + (pts[i + 1].x - pts[i].x) * 0.5,
          cpy2: pts[i + 1].y,
          color: branch.color,
          width: 2.5,
          t0: branchStart + branchDuration * segFrac0,
          t1: branchStart + branchDuration * segFrac1,
        })
      }

      // Commit dots on branch (mid points only)
      for (let i = 1; i < pts.length - 1; i++) {
        const frac = i / (pts.length - 1)
        items.push({
          type: 'commit',
          x: pts[i].x, y: pts[i].y,
          color: branch.color,
          r: 4,
          t0: branchStart + branchDuration * frac,
          t1: branchStart + branchDuration * frac + 150,
        })
      }
    })

    // Labels
    const labels = [
      { text: 'main', x: mainX - 40, y: mainCommits[0].y - 12, color: MAIN_COLOR, t: 200 },
      { text: 'feat/ui', x: branches[0].peakX + 10, y: (mainCommits[branches[0].from].y + mainCommits[branches[0].to].y) / 2, color: branches[0].color, t: TOTAL_DURATION * 0.3 },
      { text: 'hotfix', x: branches[2].peakX + 10, y: (mainCommits[branches[2].from].y + mainCommits[branches[2].to].y) / 2, color: branches[2].color, t: TOTAL_DURATION * 0.6 },
    ]

    const startTime = performance.now()

    function draw(now) {
      const elapsed = now - startTime

      if (elapsed > 4000) {
        // Fade out and stop
        setVisible(false)
        return
      }

      ctx.clearRect(0, 0, W, H)

      // Global opacity for fade out in last 400ms
      let globalAlpha = 1
      if (elapsed > 3600) {
        globalAlpha = 1 - (elapsed - 3600) / 400
      }
      ctx.globalAlpha = globalAlpha

      // Draw items
      for (const item of items) {
        if (elapsed < item.t0) continue

        const progress = Math.min(1, (elapsed - item.t0) / Math.max(1, item.t1 - item.t0))

        if (item.type === 'line') {
          ctx.beginPath()
          ctx.moveTo(item.x1, item.y1)
          const cx = item.x1 + (item.x2 - item.x1) * progress
          const cy = item.y1 + (item.y2 - item.y1) * progress
          ctx.lineTo(cx, cy)
          ctx.strokeStyle = item.color
          ctx.lineWidth = item.width
          ctx.lineCap = 'round'
          ctx.shadowColor = item.color
          ctx.shadowBlur = 8
          ctx.stroke()
          ctx.shadowBlur = 0
        } else if (item.type === 'curve') {
          // Draw bezier curve progressively
          const steps = Math.floor(progress * 30)
          ctx.beginPath()
          ctx.moveTo(item.x1, item.y1)
          for (let s = 1; s <= steps; s++) {
            const t = s / 30
            const x = (1 - t) ** 3 * item.x1 + 3 * (1 - t) ** 2 * t * item.cpx1 + 3 * (1 - t) * t ** 2 * item.cpx2 + t ** 3 * item.x2
            const y = (1 - t) ** 3 * item.y1 + 3 * (1 - t) ** 2 * t * item.cpy1 + 3 * (1 - t) * t ** 2 * item.cpy2 + t ** 3 * item.y2
            ctx.lineTo(x, y)
          }
          ctx.strokeStyle = item.color
          ctx.lineWidth = item.width
          ctx.lineCap = 'round'
          ctx.shadowColor = item.color
          ctx.shadowBlur = 6
          ctx.stroke()
          ctx.shadowBlur = 0
        } else if (item.type === 'commit') {
          const scale = Math.min(1, progress * 2)
          ctx.beginPath()
          ctx.arc(item.x, item.y, item.r * scale, 0, Math.PI * 2)
          ctx.fillStyle = '#0f172a'
          ctx.fill()
          ctx.strokeStyle = item.color
          ctx.lineWidth = 2.5
          ctx.shadowColor = item.color
          ctx.shadowBlur = 10
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      }

      // Labels
      ctx.font = '600 11px monospace'
      for (const label of labels) {
        if (elapsed > label.t + 300) {
          const labelAlpha = Math.min(0.7, (elapsed - label.t - 300) / 400)
          ctx.globalAlpha = labelAlpha * globalAlpha
          ctx.fillStyle = label.color
          ctx.fillText(label.text, label.x, label.y)
          ctx.globalAlpha = globalAlpha
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="git-graph-overlay">
      <canvas ref={canvasRef} className="git-graph-canvas" />
    </div>
  )
}

export default GitPathAnimation
