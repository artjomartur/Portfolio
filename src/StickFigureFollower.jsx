import { useEffect, useRef, useState } from 'react'

function StickFigureFollower({ onClose }) {
  const canvasRef = useRef(null)
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Setup characters
    const numCharacters = 8
    const spacing = 55
    const groundYRatio = 0.75
    let groundY = canvas.height * groundYRatio

    const characters = []
    for (let i = 0; i < numCharacters; i++) {
      characters.push({
        x: canvas.width / 2 - i * spacing,
        y: groundY,
        vy: 0,
        vx: 0,
        targetX: canvas.width / 2,
        legPhase: i * 0.5,
        isJumping: false,
        color: i === 0 ? '#fe0979' : '#00f2fe', // Leader is bright pink, followers are cyan/blue
        size: i === 0 ? 1.2 : 1.0, // Leader is slightly larger
        crown: i === 0, // Leader wears a crown
      })
    }

    let mouseX = canvas.width / 2
    let mouseY = groundY

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    // Force all characters to jump when space is pressed or screen clicked
    const triggerGlobalJump = () => {
      characters.forEach((char, idx) => {
        // Stagger the jumps
        setTimeout(() => {
          if (!char.isJumping) {
            char.vy = -14
            char.isJumping = true
          }
        }, idx * 100)
      })
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Space' || e.keyCode === 32) {
        triggerGlobalJump()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('keydown', handleKeyDown)

    let animationFrameId

    const drawStickFigure = (ctx, char, x, y) => {
      const scale = char.size || 1
      const headRadius = 9 * scale
      const bodyHeight = 22 * scale
      const limbLength = 18 * scale
      
      const isLeader = char.crown

      ctx.lineWidth = isLeader ? 4.5 : 3.5
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.strokeStyle = char.color

      // Draw Head
      ctx.beginPath()
      ctx.arc(x, y - bodyHeight - headRadius, headRadius, 0, Math.PI * 2)
      ctx.stroke()

      // Draw Crown
      if (isLeader) {
        ctx.fillStyle = '#ffd700'
        ctx.strokeStyle = '#ffd700'
        ctx.lineWidth = 2
        ctx.beginPath()
        const cx = x
        const cy = y - bodyHeight - headRadius - 4
        ctx.moveTo(cx - 8, cy)
        ctx.lineTo(cx - 10, cy - 8)
        ctx.lineTo(cx - 4, cy - 3)
        ctx.lineTo(cx, cy - 11)
        ctx.lineTo(cx + 4, cy - 3)
        ctx.lineTo(cx + 10, cy - 8)
        ctx.lineTo(cx + 8, cy)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        // Reset color/width
        ctx.strokeStyle = char.color
        ctx.lineWidth = 4.5
      }

      // Neck joint
      const neckY = y - bodyHeight

      // Torso / Spine
      ctx.beginPath()
      ctx.moveTo(x, neckY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Calculate walking limbs angles
      const speedFactor = Math.min(Math.abs(char.vx) / 3, 1)
      const swingAmp = char.isJumping ? 0.3 : speedFactor * 0.7
      const phase = char.legPhase

      // Legs swing back and forth
      const leftLegAngle = Math.sin(phase) * swingAmp
      const rightLegAngle = -Math.sin(phase) * swingAmp

      // Arms swing opposite to legs
      const leftArmAngle = -Math.sin(phase) * swingAmp * 0.8
      const rightArmAngle = Math.sin(phase) * swingAmp * 0.8

      // Draw Legs
      // Hip joint is at (x, y)
      const lx = x + Math.sin(leftLegAngle) * limbLength
      const ly = y + Math.cos(leftLegAngle) * limbLength
      const rx = x + Math.sin(rightLegAngle) * limbLength
      const ry = y + Math.cos(rightLegAngle) * limbLength

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(lx, ly)
      ctx.moveTo(x, y)
      ctx.lineTo(rx, ry)
      ctx.stroke()

      // Draw Arms
      // Shoulder joint is at (x, neckY + 4)
      const shoulderY = neckY + 4 * scale
      if (char.isJumping) {
        // Raise arms when jumping
        ctx.beginPath()
        ctx.moveTo(x, shoulderY)
        ctx.lineTo(x - 12 * scale, shoulderY - 14 * scale)
        ctx.moveTo(x, shoulderY)
        ctx.lineTo(x + 12 * scale, shoulderY - 14 * scale)
        ctx.stroke()
      } else {
        const lax = x + Math.sin(leftArmAngle - 0.2) * limbLength * 0.8
        const lay = shoulderY + Math.cos(leftArmAngle - 0.2) * limbLength * 0.8
        const rax = x + Math.sin(rightArmAngle + 0.2) * limbLength * 0.8
        const ray = shoulderY + Math.cos(rightArmAngle + 0.2) * limbLength * 0.8

        ctx.beginPath()
        ctx.moveTo(x, shoulderY)
        ctx.lineTo(lax, lay)
        ctx.moveTo(x, shoulderY)
        ctx.lineTo(rax, ray)
        ctx.stroke()
      }
    }

    const updateAndRender = () => {
      groundY = canvas.height * groundYRatio

      // Clear with dark transparent overlay to create glowing trailing effect
      ctx.fillStyle = 'rgba(10, 10, 12, 0.25)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw Ground
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, groundY)
      ctx.lineTo(canvas.width, groundY)
      ctx.stroke()

      // Update and Draw characters
      for (let i = 0; i < characters.length; i++) {
        const char = characters[i]

        // Determine targets
        if (i === 0) {
          // Leader follows mouse X
          char.targetX = mouseX
          
          // Trigger jump if mouse is high above ground
          if (mouseY < groundY - 80 && !char.isJumping) {
            char.vy = -14
            char.isJumping = true
          }
        } else {
          // Followers follow the one in front of them
          const leader = characters[i - 1]
          
          // Target position lags behind the leader
          // We set targetX so that they follow in a queue
          const targetDist = spacing
          const dx = leader.x - char.x
          
          if (Math.abs(dx) > targetDist) {
            char.targetX = leader.x - Math.sign(dx) * targetDist
          } else {
            char.targetX = char.x // Stop
          }

          // Trigger jump if leader jumps and we are close enough
          if (leader.isJumping && leader.y < groundY - 50 && !char.isJumping && Math.random() < 0.2) {
            char.vy = -14
            char.isJumping = true
          }
        }

        // Steer towards targetX
        const dx = char.targetX - char.x
        const speed = i === 0 ? 6.5 : 5.5
        
        if (Math.abs(dx) > 4) {
          char.vx = Math.sign(dx) * speed
          char.x += char.vx
          char.legPhase += Math.abs(char.vx) * 0.035
        } else {
          char.vx = 0
          // Smoothly return leg phase to idle
          const phaseMod = char.legPhase % Math.PI
          if (phaseMod > 0.1) {
            char.legPhase -= 0.1
          }
        }

        // Apply vertical physics
        if (char.isJumping) {
          char.vy += 0.65 // Gravity
          char.y += char.vy

          // Land collision
          if (char.y >= groundY) {
            char.y = groundY
            char.vy = 0
            char.isJumping = false
          }
        }

        // Draw character
        drawStickFigure(ctx, char, char.x, char.y)
      }

      animationFrameId = requestAnimationFrame(updateAndRender)
    }

    updateAndRender()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="matrix-overlay" onClick={onClose} style={{ backdropFilter: 'blur(4px)', background: 'rgba(8, 8, 10, 0.85)', cursor: 'pointer' }}>
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div 
        className="matrix-exit-hint" 
        style={{ 
          color: '#ffd700', 
          textShadow: '0 0 8px rgba(255, 215, 0, 0.4)', 
          fontFamily: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span>Leite die Gruppe mit deiner Maus! Drücke [Leertaste] zum Springen.</span>
        <button 
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            cursor: 'pointer',
            marginTop: '8px',
            transition: 'background 0.2s',
            pointerEvents: 'auto'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          Beenden
        </button>
      </div>
    </div>
  )
}

export default StickFigureFollower
