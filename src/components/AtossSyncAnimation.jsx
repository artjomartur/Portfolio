import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sfx } from '../sfx'

const DEFAULT_SHIFTS = [
  { day: 2, summary: 'TS 15:00-23:00', start: '15:00', end: '23:00', color: '#3b82f6' },
  { day: 5, summary: 'TS 16:00-00:45', start: '16:00', end: '00:45', color: '#10b981' },
  { day: 9, summary: 'TS 09:00-17:00', start: '09:00', end: '17:00', color: '#f59e0b' },
  { day: 12, summary: 'TS 18:00-02:00', start: '18:00', end: '02:00', color: '#8b5cf6' },
]

export default function AtossSyncAnimation({ lang = 'de' }) {
  const [syncing, setSyncing] = useState(false)
  const [syncedDays, setSyncedDays] = useState([])
  const [animatingShift, setAnimatingShift] = useState(null)

  const startSync = async () => {
    if (syncing) return
    setSyncing(true)
    setSyncedDays([])
    setAnimatingShift(null)

    // Wait a brief moment before starting
    await new Promise((resolve) => setTimeout(resolve, 300))

    for (let i = 0; i < DEFAULT_SHIFTS.length; i++) {
      const shift = DEFAULT_SHIFTS[i]
      setAnimatingShift(shift)
      sfx.playPop(0.04)
      
      // Let the animation play (floating badge slides down and fades out)
      await new Promise((resolve) => setTimeout(resolve, 500))
      
      // Add to synced days so the permanent badge renders
      setSyncedDays((prev) => [...prev, shift.day])
      sfx.playPop(0.02)
      
      // Wait between shifts
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    setAnimatingShift(null)
    setSyncing(false)
    sfx.playSkinStockOpen() // success sound
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startSync()
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '20px',
      width: '380px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(16px)',
      color: '#f8fafc',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Calendar Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>📅</span>
          <div>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#60a5fa' }}>
              Juni 2026
            </h4>
            <span style={{ fontSize: '11px', color: '#94a3b8', display: 'inline-block', minWidth: '100px' }}>
              {syncing 
                ? (lang === 'de' ? 'Synchronisiere...' : 'Syncing...') 
                : (lang === 'de' ? 'Synchronisiert' : 'Synchronized')}
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '8px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Weekday headers */}
        {['M', 'D', 'M', 'D', 'F', 'S', 'S'].map((day, idx) => (
          <div key={idx} style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#64748b',
            paddingBottom: '4px'
          }}>
            {day}
          </div>
        ))}

        {/* Days 1 to 14 */}
        {Array.from({ length: 14 }).map((_, idx) => {
          const dayNum = idx + 1
          const shift = DEFAULT_SHIFTS.find((s) => s.day === dayNum)
          const isSynced = syncedDays.includes(dayNum)
          const isAnimating = animatingShift && animatingShift.day === dayNum

          return (
            <div
              key={idx}
              style={{
                position: 'relative',
                height: '52px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '8px',
                padding: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxSizing: 'border-box'
              }}
            >
              {/* Day Number */}
              <span style={{
                fontSize: '11px',
                color: isSynced ? '#fff' : '#64748b',
                fontWeight: isSynced ? '600' : '400',
                alignSelf: 'flex-start'
              }}>
                {dayNum}
              </span>

              {/* Syncing Overlay Animation */}
              <AnimatePresence>
                {isAnimating && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.3, y: -18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 10,
                      background: animatingShift.color,
                      borderRadius: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      padding: '2px',
                      pointerEvents: 'none'
                    }}
                  >
                    <span style={{ fontSize: '10px' }}>📬</span>
                    <span style={{ fontSize: '8px', whiteSpace: 'nowrap' }}>{animatingShift.start}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Permanent Shift Badge */}
              <div style={{ width: '100%', height: '18px' }}>
                {isSynced && shift && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: shift.color,
                      borderRadius: '4px',
                      fontSize: '9px',
                      fontWeight: 'bold',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '2px 0',
                      lineHeight: '14px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}
                  >
                    {shift.start}
                  </motion.div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
