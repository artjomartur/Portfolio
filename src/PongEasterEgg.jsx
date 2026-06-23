import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { sfx } from './sfx'

function PongEasterEgg({ onClose, lang = 'de' }) {
  const canvasRef = useRef(null)
  const [score, setScore] = useState({ player: 0, ai: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Game state
    const gameState = {
      width: 800,
      height: 400,
      paddleWidth: 10,
      paddleHeight: 80,
      playerY: 160,
      aiY: 160,
      aiSpeed: 4,
      ball: {
        x: 400,
        y: 200,
        size: 8,
        dx: 5,
        dy: 5,
        speed: 7
      }
    }

    // Set canvas dimensions
    canvas.width = gameState.width
    canvas.height = gameState.height

    const resetBall = () => {
      gameState.ball.x = gameState.width / 2
      gameState.ball.y = gameState.height / 2
      gameState.ball.dx = -Math.sign(gameState.ball.dx) * 5
      gameState.ball.dy = (Math.random() > 0.5 ? 1 : -1) * 5
      gameState.ball.speed = 7
    }

    const draw = () => {
      // Clear screen
      ctx.fillStyle = '#0d1117'
      ctx.fillRect(0, 0, gameState.width, gameState.height)

      // Draw center line
      ctx.setLineDash([10, 10])
      ctx.beginPath()
      ctx.moveTo(gameState.width / 2, 0)
      ctx.lineTo(gameState.width / 2, gameState.height)
      ctx.strokeStyle = '#30363d'
      ctx.stroke()
      ctx.setLineDash([])

      // Draw paddles
      ctx.fillStyle = '#7ee787'
      ctx.fillRect(20, gameState.playerY, gameState.paddleWidth, gameState.paddleHeight)
      
      ctx.fillStyle = '#ff5f57'
      ctx.fillRect(gameState.width - 30, gameState.aiY, gameState.paddleWidth, gameState.paddleHeight)

      // Draw ball
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(gameState.ball.x, gameState.ball.y, gameState.ball.size, 0, Math.PI * 2)
      ctx.fill()
    }

    const update = () => {
      // Move ball
      gameState.ball.x += gameState.ball.dx
      gameState.ball.y += gameState.ball.dy

      // Wall collision (top/bottom)
      if (gameState.ball.y - gameState.ball.size < 0 || gameState.ball.y + gameState.ball.size > gameState.height) {
        gameState.ball.dy *= -1
        sfx.playPongBounce()
      }

      // AI movement
      const aiCenter = gameState.aiY + gameState.paddleHeight / 2
      if (aiCenter < gameState.ball.y - 10) {
        gameState.aiY += gameState.aiSpeed
      } else if (aiCenter > gameState.ball.y + 10) {
        gameState.aiY -= gameState.aiSpeed
      }
      
      // Clamp AI to bounds
      gameState.aiY = Math.max(0, Math.min(gameState.height - gameState.paddleHeight, gameState.aiY))

      // Paddle collision
      const checkPaddleCollision = (paddleX, paddleY) => {
        return (
          gameState.ball.x - gameState.ball.size < paddleX + gameState.paddleWidth &&
          gameState.ball.x + gameState.ball.size > paddleX &&
          gameState.ball.y + gameState.ball.size > paddleY &&
          gameState.ball.y - gameState.ball.size < paddleY + gameState.paddleHeight
        )
      }

      if (gameState.ball.dx < 0 && checkPaddleCollision(20, gameState.playerY)) {
        gameState.ball.dx *= -1
        sfx.playPongBounce()
        let collidePoint = (gameState.ball.y - (gameState.playerY + gameState.paddleHeight / 2))
        collidePoint = collidePoint / (gameState.paddleHeight / 2)
        const angleRad = (Math.PI / 4) * collidePoint
        gameState.ball.dx = gameState.ball.speed * Math.cos(angleRad)
        gameState.ball.dy = gameState.ball.speed * Math.sin(angleRad)
        gameState.ball.speed += 0.5
      }

      if (gameState.ball.dx > 0 && checkPaddleCollision(gameState.width - 30, gameState.aiY)) {
        gameState.ball.dx *= -1
        sfx.playPongBounce()
        let collidePoint = (gameState.ball.y - (gameState.aiY + gameState.paddleHeight / 2))
        collidePoint = collidePoint / (gameState.paddleHeight / 2)
        const angleRad = (Math.PI / 4) * collidePoint
        gameState.ball.dx = -gameState.ball.speed * Math.cos(angleRad)
        gameState.ball.dy = gameState.ball.speed * Math.sin(angleRad)
        gameState.ball.speed += 0.5
      }

      // Scoring
      if (gameState.ball.x < 0) {
        sfx.playOsuMiss()
        setScore(s => ({ ...s, ai: s.ai + 1 }))
        resetBall()
      } else if (gameState.ball.x > gameState.width) {
        sfx.playScoreUp()
        setScore(s => ({ ...s, player: s.player + 1 }))
        resetBall()
      }
    }

    const loop = () => {
      update()
      draw()
      animationFrameId = requestAnimationFrame(loop)
    }

    loop()

    // Handle mouse movement for player paddle
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      // Calculate scale in case CSS resizes the canvas
      const scaleY = canvas.height / rect.height
      let mouseY = (e.clientY - rect.top) * scaleY
      gameState.playerY = mouseY - gameState.paddleHeight / 2
      // Clamp to bounds
      gameState.playerY = Math.max(0, Math.min(gameState.height - gameState.paddleHeight, gameState.playerY))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '800px', maxWidth: '100vw', padding: '0 20px', marginBottom: '20px' }}>
          <h2 style={{ color: '#7ee787' }}>{lang === 'de' ? 'Du' : 'You'}: {score.player}</h2>
          <h2 style={{ color: '#ff5f57' }}>AI: {score.ai}</h2>
        </div>
        
        <div style={{ position: 'relative', maxWidth: '100vw' }}>
          <canvas
            ref={canvasRef}
            style={{
              border: '1px solid #30363d',
              borderRadius: '12px',
              boxShadow: '0 0 30px rgba(126, 231, 135, 0.1)',
              maxWidth: '100%',
              height: 'auto',
              cursor: 'none'
            }}
          />
        </div>

        <button 
          onClick={onClose}
          style={{
            marginTop: '30px',
            padding: '10px 24px',
            background: 'transparent',
            border: '1px solid #30363d',
            color: '#c9d1d9',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#21262d'
            e.target.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = '#c9d1d9'
          }}
        >
          {lang === 'de' ? 'Spiel beenden' : 'End Game'}
        </button>
      </motion.div>
    </div>
  )
}

export default PongEasterEgg
