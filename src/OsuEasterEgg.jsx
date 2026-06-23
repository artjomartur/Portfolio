import React, { useState, useEffect, useRef } from 'react'
import { sfx } from './sfx'

function OsuEasterEgg({ onClose }) {
  const [circles, setCircles] = useState([])
  const [combo, setCombo] = useState(0)
  const [score, setScore] = useState(0)
  const [hitEffects, setHitEffects] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  
  const circleIdCounter = useRef(0)
  const effectIdCounter = useRef(0)
  const comboCounter = useRef(0)
  const spawnedCount = useRef(0)
  const activeTimeouts = useRef({})

  // Spawn circles periodically
  useEffect(() => {
    if (isFinished) return

    const spawnCircle = () => {
      if (spawnedCount.current >= 9) {
        return
      }

      // Spawn within 15% to 85% of modal to avoid clipping edges
      const x = 15 + Math.random() * 70
      const y = 20 + Math.random() * 60
      const id = ++circleIdCounter.current
      spawnedCount.current += 1
      
      // Increment combo for the visual number on the circle
      comboCounter.current = (comboCounter.current % 9) + 1
      const number = comboCounter.current

      const newCircle = { id, x, y, number }
      
      setCircles((prev) => [...prev, newCircle])

      // Auto-miss after 1000ms if not clicked
      const timeoutId = setTimeout(() => {
        handleMiss(id)
      }, 1000)

      activeTimeouts.current[id] = timeoutId
    }

    let intervalId = null

    // Start spawning after 1 second, then every 1.8 seconds
    const initialDelay = setTimeout(() => {
      spawnCircle()
      intervalId = setInterval(() => {
        if (spawnedCount.current >= 9) {
          clearInterval(intervalId)
          return
        }
        spawnCircle()
      }, 1800)
    }, 1000)

    return () => {
      clearTimeout(initialDelay)
      if (intervalId) clearInterval(intervalId)
      // Clean up all active timeouts on unmount
      Object.values(activeTimeouts.current).forEach(clearTimeout)
    }
  }, [isFinished])

  // Detect round completion
  useEffect(() => {
    if (spawnedCount.current >= 9 && circles.length === 0 && !isFinished && circleIdCounter.current > 0) {
      // Small delay to let the final hit/miss animation complete
      const t = setTimeout(() => {
        setIsFinished(true)
      }, 800)
      return () => clearTimeout(t)
    }
  }, [circles, isFinished])

  const handleHit = (id, x, y, e) => {
    e.stopPropagation()
    sfx.playOsuHit()
    
    // Clear the auto-miss timeout
    if (activeTimeouts.current[id]) {
      clearTimeout(activeTimeouts.current[id])
      delete activeTimeouts.current[id]
    }

    // Remove the clicked circle
    setCircles((prev) => prev.filter((c) => c.id !== id))

    // Update score and combo
    setCombo((c) => {
      const nextCombo = c + 1
      setScore((s) => s + 300 * nextCombo)
      return nextCombo
    })

    // Add visual +300 hit effect
    const effectId = ++effectIdCounter.current
    const newEffect = { id: effectId, x, y, type: 'hit', text: '300' }
    setHitEffects((prev) => [...prev, newEffect])

    // Clean up effect after animation finishes
    setTimeout(() => {
      setHitEffects((prev) => prev.filter((eff) => eff.id !== effectId))
    }, 600)
  }

  const handleMiss = (id) => {
    sfx.playOsuMiss()
    // Retrieve coordinates of the missed circle for the miss visual effect
    setCircles((prev) => {
      const missed = prev.find((c) => c.id === id)
      if (missed) {
        const effectId = ++effectIdCounter.current
        const newEffect = { id: effectId, x: missed.x, y: missed.y, type: 'miss', text: 'X' }
        setHitEffects((prevEff) => [...prevEff, newEffect])
        
        setTimeout(() => {
          setHitEffects((prevEff) => prevEff.filter((eff) => eff.id !== effectId))
        }, 600)
      }
      return prev.filter((c) => c.id !== id)
    })

    // Reset combo
    setCombo(0)

    // Clear timeout reference
    if (activeTimeouts.current[id]) {
      delete activeTimeouts.current[id]
    }
  }

  const restartGame = (e) => {
    e.stopPropagation()
    setCircles([])
    setCombo(0)
    setScore(0)
    setHitEffects([])
    circleIdCounter.current = 0
    effectIdCounter.current = 0
    comboCounter.current = 0
    spawnedCount.current = 0
    setIsFinished(false)
  }

  return (
    <div className="osu-container">
      {/* Score HUD */}
      {!isFinished && score > 0 && (
        <div className="osu-hud">
          <div className="osu-score">{score.toLocaleString()}</div>
          {combo > 0 && <div className="osu-combo">{combo}x</div>}
        </div>
      )}

      {/* Active Circles */}
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="osu-circle-wrapper"
          style={{ left: `${circle.x}%`, top: `${circle.y}%` }}
          onClick={(e) => handleHit(circle.id, circle.x, circle.y, e)}
        >
          <div className="osu-approach-circle" />
          <div className="osu-inner-circle">{circle.number}</div>
        </div>
      ))}

      {/* Hit/Miss Effects */}
      {hitEffects.map((eff) => (
        <div
          key={eff.id}
          className={`osu-hit-effect osu-hit-effect--${eff.type}`}
          style={{ left: `${eff.x}%`, top: `${eff.y}%` }}
        >
          {eff.text}
        </div>
      ))}

      {/* Round Finished Overlay */}
      {isFinished && (
        <div className="osu-end-screen">
          <h3 className="osu-end-title">Runde beendet!</h3>
          <p className="osu-end-score">Punktzahl: {score.toLocaleString()}</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="osu-replay-btn" onClick={restartGame}>
              Nochmal spielen
            </button>
            {onClose && (
              <button 
                className="osu-replay-btn" 
                style={{ background: '#3f3f46', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)' }}
                onClick={(e) => { e.stopPropagation(); onClose(); }}
              >
                Beenden
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default OsuEasterEgg
