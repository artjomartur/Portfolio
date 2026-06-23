import React, { useEffect, useState, useRef } from 'react'
import { sfx } from './sfx'

function ArcadeRainEasterEgg() {
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('playing') // 'playing' | 'exploding' | 'fading' | 'clean'
  const [activeLasers, setActiveLasers] = useState([])
  const [invaders, setInvaders] = useState([
    { id: 1, row: 0, col: 0, x: 25, y: 20, symbol: '👾', alive: true, expl: false },
    { id: 2, row: 0, col: 1, x: 40, y: 20, symbol: '🛸', alive: true, expl: false },
    { id: 3, row: 0, col: 2, x: 55, y: 20, symbol: '🛸', alive: true, expl: false },
    { id: 4, row: 0, col: 3, x: 70, y: 20, symbol: '👾', alive: true, expl: false },
    { id: 5, row: 1, col: 0, x: 25, y: 35, symbol: '👾', alive: true, expl: false },
    { id: 6, row: 1, col: 1, x: 40, y: 35, symbol: '👾', alive: true, expl: false },
    { id: 7, row: 1, col: 2, x: 55, y: 35, symbol: '👾', alive: true, expl: false },
    { id: 8, row: 1, col: 3, x: 70, y: 35, symbol: '👾', alive: true, expl: false },
    { id: 9, row: 2, col: 0, x: 25, y: 50, symbol: '👾', alive: true, expl: false },
    { id: 10, row: 2, col: 1, x: 40, y: 50, symbol: '👾', alive: true, expl: false },
    { id: 11, row: 2, col: 2, x: 55, y: 50, symbol: '👾', alive: true, expl: false },
    { id: 12, row: 2, col: 3, x: 70, y: 50, symbol: '👾', alive: true, expl: false },
  ])
  const [playerX, setPlayerX] = useState(50)
  const [ufo, setUfo] = useState({ visible: false, x: -10, y: 8, symbol: '🛸', expl: false })
  const [explosions, setExplosions] = useState([])
  
  // Track random fly-away vectors for each element
  const flyVectors = useRef({})

  const getFlyStyle = (key) => {
    if (!flyVectors.current[key]) {
      const angle = Math.random() * Math.PI * 2
      const dist = 250 + Math.random() * 300
      const tx = Math.cos(angle) * dist
      const ty = Math.sin(angle) * dist
      const tr = (Math.random() - 0.5) * 540
      flyVectors.current[key] = { tx, ty, tr }
    }
    const { tx, ty, tr } = flyVectors.current[key]
    return {
      '--tx': `${tx}px`,
      '--ty': `${ty}px`,
      '--tr': `${tr}deg`
    }
  }

  useEffect(() => {
    let t = 0
    const intervalTime = 50 // 20 frames per second
    
    const gameTimer = setInterval(() => {
      t += intervalTime
      
      // Update lasers traveling upwards
      setActiveLasers(prev => 
        prev
          .map(l => ({ ...l, y: l.y - 4 }))
          .filter(l => l.y > 0)
      )

      // Scripted sequence of events
      if (gameState === 'playing') {
        // --- 0.2s: Move player to 25% X ---
        if (t === 200) {
          setPlayerX(25)
        }
        // --- 0.4s: Shoot Laser 1 ---
        if (t === 400) {
          sfx.playLaser()
          setActiveLasers(prev => [...prev, { id: 1, x: 25, y: 80 }])
        }
        // --- 0.7s: Laser 1 hits Row 2 Col 0 invader (id: 9) ---
        if (t === 700) {
          sfx.playExplosion()
          setInvaders(prev => prev.map(inv => inv.id === 9 ? { ...inv, alive: false, expl: true } : inv))
          setScore(s => s + 100)
          setExplosions(prev => [...prev, { id: Date.now(), x: 25, y: 50 }])
          setActiveLasers(prev => prev.filter(l => l.id !== 1))
        }

        // --- 0.9s: Move player to 55% X ---
        if (t === 900) {
          setPlayerX(55)
        }
        // --- 1.1s: Shoot Laser 2 ---
        if (t === 1100) {
          sfx.playLaser()
          setActiveLasers(prev => [...prev, { id: 2, x: 55, y: 80 }])
        }
        // --- 1.4s: Laser 2 hits Row 2 Col 2 invader (id: 11) ---
        if (t === 1400) {
          sfx.playExplosion()
          setInvaders(prev => prev.map(inv => inv.id === 11 ? { ...inv, alive: false, expl: true } : inv))
          setScore(s => s + 100)
          setExplosions(prev => [...prev, { id: Date.now(), x: 55, y: 50 }])
          setActiveLasers(prev => prev.filter(l => l.id !== 2))
        }

        // --- 1.6s: Move player to 40% X ---
        if (t === 1600) {
          setPlayerX(40)
        }
        // --- 1.8s: Shoot Laser 3 ---
        if (t === 1800) {
          sfx.playLaser()
          setActiveLasers(prev => [...prev, { id: 3, x: 40, y: 80 }])
        }
        // --- 2.1s: Laser 3 hits Row 1 Col 1 invader (id: 6) ---
        if (t === 2100) {
          sfx.playExplosion()
          setInvaders(prev => prev.map(inv => inv.id === 6 ? { ...inv, alive: false, expl: true } : inv))
          setScore(s => s + 150)
          setExplosions(prev => [...prev, { id: Date.now(), x: 40, y: 35 }])
          setActiveLasers(prev => prev.filter(l => l.id !== 3))
        }

        // --- 2.3s: Spawn UFO moving left-to-right ---
        if (t >= 2300 && t < 3000) {
          setUfo(prev => ({
            ...prev,
            visible: true,
            x: prev.x + 4
          }))
        }

        // --- 2.5s: Move player to track UFO (align to 60%) ---
        if (t === 2500) {
          setPlayerX(60)
        }
        // --- 2.7s: Shoot Laser 4 ---
        if (t === 2700) {
          sfx.playLaser()
          setActiveLasers(prev => [...prev, { id: 4, x: 60, y: 80 }])
        }

        // --- 3.0s: Laser 4 hits UFO (at 60% X) ---
        if (t === 3000) {
          sfx.playExplosion()
          setUfo(prev => ({ ...prev, expl: true }))
          setScore(s => s + 500)
          setExplosions(prev => [...prev, { id: Date.now(), x: 60, y: 8 }])
          setActiveLasers([])
          setGameState('exploding')
        }
      }

      // --- 3.3s: Start fading out the entire screen ---
      if (t === 3300) {
        setGameState('fading')
      }

      // --- 3.9s: Clean up everything ---
      if (t === 3900) {
        setGameState('clean')
        clearInterval(gameTimer)
      }
    }, intervalTime)

    return () => clearInterval(gameTimer)
  }, [gameState])

  // Clear single invader explosion sparks after 300ms
  useEffect(() => {
    if (explosions.length > 0) {
      const timer = setTimeout(() => {
        setExplosions(prev => prev.slice(1))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [explosions])

  if (gameState === 'clean') return null

  const isExploding = gameState === 'exploding' || gameState === 'fading'
  const isShaking = gameState === 'exploding'
  const isFading = gameState === 'fading'

  return (
    <div className={`arcade-retro-screen ${isShaking ? 'screen-shake' : ''} ${isFading ? 'fade-out' : ''}`} aria-hidden>
      {/* HUD Bar */}
      <div 
        className={`arcade-hud ${isExploding ? 'fly-away' : ''}`} 
        style={isExploding ? getFlyStyle('hud') : {}}
      >
        <span>SCORE: {String(score).padStart(4, '0')}</span>
        <span>LIVES: 👾 👾 👾</span>
      </div>

      {/* Invaders Grid */}
      <div className="arcade-grid">
        {invaders.map((inv) => (
          inv.alive ? (
            <span
              key={inv.id}
              className={`arcade-invader ${isExploding ? 'fly-away' : ''}`}
              style={{
                left: `${inv.x}%`,
                top: `${inv.y}%`,
                ...(isExploding ? getFlyStyle(`inv-${inv.id}`) : {})
              }}
            >
              {inv.symbol}
            </span>
          ) : inv.expl ? (
            <span
              key={inv.id}
              className="arcade-explosion-spark"
              style={{ left: `${inv.x}%`, top: `${inv.y}%` }}
            >
              💥
            </span>
          ) : null
        ))}
      </div>

      {/* UFO */}
      {ufo.visible && (
        <span
          className={`arcade-ufo ${ufo.expl ? 'arcade-explosion-spark' : ''}`}
          style={{ left: `${ufo.x}%`, top: `${ufo.y}%` }}
        >
          {ufo.expl ? '💥' : ufo.symbol}
        </span>
      )}

      {/* Lasers */}
      {activeLasers.map((l) => (
        <div
          key={l.id}
          className="arcade-laser"
          style={{ left: `${l.x}%`, top: `${l.y}%` }}
        />
      ))}

      {/* Exploded Spark Particles */}
      {explosions.map((exp) => (
        <span
          key={exp.id}
          className="arcade-particle-sparks"
          style={{ left: `${exp.x}%`, top: `${exp.y}%` }}
        >
          ✨
        </span>
      ))}

      {/* Player Ship */}
      <span
        className={`arcade-player ${isExploding ? 'fly-away' : ''}`}
        style={{
          left: `${playerX}%`,
          ...(isExploding ? getFlyStyle('player') : {})
        }}
      >
        🚀
      </span>
    </div>
  )
}

export default ArcadeRainEasterEgg
