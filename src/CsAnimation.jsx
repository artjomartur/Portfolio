import React, { useState, useEffect, useRef } from 'react'
import { sfx } from './sfx'
import { motion, AnimatePresence } from 'framer-motion'

const CASE_SKINS = [
  { name: 'Operation Bravo Case', type: 'Mil-Spec', color: '#4b69ff', img: '/projects/case_bravo.png', price: 42.50 },
  { name: 'AK-47 | Redline (FT)', type: 'Classified', color: '#d32f2f', img: '/projects/ak47_redline.png', price: 18.50 },
  { name: '★ Specialist Gloves | Fade (MW)', type: 'Special', color: '#ffae00', img: '/projects/gloves_fade.png', price: 620.00 },
  { name: 'AWP | Asiimov (FT)', type: 'Covert', color: '#eb4b4b', img: '/projects/awp_asiimov.png', price: 142.00 },
  { name: '★ Karambit | Fade (FN)', type: 'Special', color: '#ffae00', img: '/projects/karambit_fade.png', price: 1750.00 },
  { name: 'M4A4 | Howl (FN)', type: 'Contraband', color: '#e4ae39', img: '/projects/m4a4_howl.png', price: 3250.00 }
]

function CsAnimation({ lang = 'de' }) {
  const [spinning, setSpinning] = useState(false)
  const [winner, setWinner] = useState(null)
  const [showWinnerModal, setShowWinnerModal] = useState(false)
  const [reelSkins, setReelSkins] = useState([])
  const reelRef = useRef(null)

  // Generate 40 items for the rolling strip
  const initReel = () => {
    const arr = []
    for (let i = 0; i < 45; i++) {
      // Pick random skin
      const randSkin = CASE_SKINS[Math.floor(Math.random() * CASE_SKINS.length)]
      arr.push({
        ...randSkin,
        uniqueId: `${randSkin.name}-${i}-${Math.random()}`
      })
    }
    setReelSkins(arr)
  }

  useEffect(() => {
    initReel()
  }, [])

  const startSpin = () => {
    if (spinning) return
    
    setWinner(null)
    setShowWinnerModal(false)
    setSpinning(true)
    
    // Choose winning item index (e.g. index 38 in the strip)
    const winIndex = 38
    const winSkin = reelSkins[winIndex]

    // Width of card is 120px + 8px gap = 128px
    const cardWidth = 128
    // Random offset inside the winning card to prevent landing exactly in the middle every time
    const randomOffset = Math.floor(Math.random() * 80) + 20 
    // Translate distance: winIndex * cardWidth + offset (no containerWidth subtraction)
    const translateValue = winIndex * cardWidth + randomOffset

    // Reset strip transition first
    if (reelRef.current) {
      reelRef.current.style.transition = 'none'
      reelRef.current.style.transform = `translateX(0px)`
    }

    // Force reflow
    if (reelRef.current) {
      void reelRef.current.offsetHeight
    }

    // Apply spin transition (ease-out for 5 seconds)
    if (reelRef.current) {
      reelRef.current.style.transition = 'transform 5s cubic-bezier(0.1, 0.8, 0.1, 1)'
      reelRef.current.style.transform = `translateX(-${translateValue}px)`
    }

    // Simulate ticking sound as the strip moves
    const totalTicks = winIndex
    const tickDelays = []

    // Tick algorithm that slows down
    for (let i = 0; i < totalTicks; i++) {
      // Exponential curve for deceleration
      const progress = i / totalTicks
      const delay = 5000 * Math.pow(progress, 2.5)
      tickDelays.push(delay)
    }

    tickDelays.forEach((delay) => {
      setTimeout(() => {
        sfx.playPop(0.015)
      }, delay)
    })

    // Finished spinning
    setTimeout(() => {
      setWinner(winSkin)
      setShowWinnerModal(true)
      setSpinning(false)
      sfx.playSkinStockOpen()
    }, 5100)
  }

  const handleCloseWinnerModal = () => {
    setShowWinnerModal(false)
    initReel()
    if (reelRef.current) {
      reelRef.current.style.transition = 'none'
      reelRef.current.style.transform = `translateX(0px)`
    }
  }

  return (
    <div className="cs-animation-box" style={{
      background: 'rgba(15, 23, 42, 0.65)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '16px',
      padding: '24px',
      marginTop: '20px',
      textAlign: 'center',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }}>
      <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '600', color: '#ffae00' }}>
        ⚔️ {lang === 'de' ? 'Skin-Kisten-Simulator' : 'CS2 Case Opening Simulation'}
      </h4>
      <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#94a3b8' }}>
        {lang === 'de' 
          ? 'Klicke auf den Button, um den Case-Spinner zu starten und ein zufälliges CS-Skin zu ziehen!' 
          : 'Click the button below to spin the case wheel and draw a random CS skin!'}
      </p>

      {/* Case Spinner Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '150px',
        background: '#090d16',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'inset 0 4px 24px rgba(0,0,0,0.8)'
      }}>
        {/* Red Vertical Center Line Indicator */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '3px',
          background: '#ff2a2a',
          zIndex: 10,
          boxShadow: '0 0 12px rgba(255, 42, 42, 0.8)'
        }} />

        {/* Rolling Reel */}
        <div 
          ref={reelRef}
          style={{
            display: 'flex',
            gap: '8px',
            paddingLeft: '50%', // Start alignment in the center
            transform: 'translateX(0px)',
          }}
        >
          {reelSkins.map((skin, idx) => (
            <div 
              key={skin.uniqueId || idx}
              style={{
                width: '120px',
                height: '110px',
                background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderBottom: `4px solid ${skin.color}`,
                borderRadius: '8px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img 
                src={skin.img} 
                alt={skin.name} 
                style={{ width: '70px', height: '70px', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} 
              />
              <span style={{ 
                fontSize: '9px', 
                color: '#e2e8f0', 
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
                width: '100%',
                textAlign: 'center',
                marginTop: '4px',
                fontWeight: 500
              }}>
                {skin.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Control Button */}
      <button
        onClick={startSpin}
        disabled={spinning}
        className="sandbox-btn"
        style={{
          marginTop: '20px',
          width: '200px',
          height: '44px',
          background: spinning 
            ? '#334155' 
            : 'linear-gradient(135deg, #ffae00 0%, #ff7700 100%)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '700',
          cursor: spinning ? 'not-allowed' : 'pointer',
          boxShadow: spinning ? 'none' : '0 4px 15px rgba(255, 174, 0, 0.25)',
          transition: 'all 0.2s',
          fontSize: '14px',
          letterSpacing: '0.04em'
        }}
      >
        {spinning 
          ? (lang === 'de' ? 'Öffne Kiste...' : 'Spinning...') 
          : (lang === 'de' ? 'Kiste öffnen (Free)' : 'Open Case (Free)')}
      </button>

      {/* Winner Modal Backdrop Overlay */}
      <AnimatePresence>
        {showWinnerModal && winner && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(8px)'
            }}
            onClick={handleCloseWinnerModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              style={{
                width: '320px',
                background: '#0d131f',
                border: `2px solid ${winner.color}`,
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: `0 0 30px ${winner.color}40`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Radial glow background */}
              <div style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                background: winner.color,
                filter: 'blur(80px)',
                opacity: 0.2,
                borderRadius: '50%',
                top: '10%',
                left: '20%',
                zIndex: 0
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ 
                  fontSize: '11px', 
                  color: winner.color, 
                  fontWeight: '800', 
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  ✨ {lang === 'de' ? 'GEWONNEN!' : 'YOU WON!'} ✨
                </span>
                
                <img 
                  src={winner.img} 
                  alt={winner.name} 
                  style={{ width: '150px', height: '150px', objectFit: 'contain', margin: '0 auto 12px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} 
                />

                <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>
                  {winner.name}
                </h3>
                <span style={{ 
                  background: winner.color, 
                  color: '#ffffff', 
                  fontSize: '10px', 
                  fontWeight: '700', 
                  padding: '2px 8px', 
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '16px'
                }}>
                  {winner.type}
                </span>

                <div style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '8px', 
                  padding: '10px',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '2px' }}>
                    {lang === 'de' ? 'Geschätzter Marktwert' : 'Estimated Value'}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#00ff66' }}>
                    €{winner.price.toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={handleCloseWinnerModal}
                  className="sandbox-btn"
                  style={{
                    width: '100%',
                    height: '40px',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}
                >
                  {lang === 'de' ? 'Schließen' : 'Close'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CsAnimation
