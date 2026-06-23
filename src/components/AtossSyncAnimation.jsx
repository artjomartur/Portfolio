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
  const [synced, setSynced] = useState(false)
  const [logs, setLogs] = useState([])
  const [calendarEvents, setCalendarEvents] = useState([])
  const [flyingEvent, setFlyingEvent] = useState(null)

  const addLog = (message, delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`])
        sfx.playPop(0.015)
        resolve()
      }, delay)
    })
  }

  const startSync = async () => {
    if (syncing) return
    setSyncing(true)
    setSynced(false)
    setCalendarEvents([])
    setLogs([])

    await addLog(
      lang === 'de' 
        ? 'Empfange E-Mail mit Anhang: Dienstplan_Becker.pdf...' 
        : 'Received email with attachment: Dienstplan_Becker.pdf...',
      200
    )
    await addLog(
      lang === 'de'
        ? 'Triggere macOS Mail Rule (AtossMailRule.applescript)...'
        : 'Triggering macOS Mail Rule (AtossMailRule.applescript)...',
      500
    )
    await addLog(
      lang === 'de'
        ? 'Starte Python-Parser (pdfplumber)...'
        : 'Starting Python Parser (pdfplumber)...',
      500
    )
    await addLog(
      lang === 'de'
        ? 'Extrahiere Schichten für Becker A. ...'
        : 'Extracting shifts for Becker A. ...',
      400
    )

    for (const shift of DEFAULT_SHIFTS) {
      await addLog(
        lang === 'de'
          ? `Gefunden: ${shift.summary} am ${shift.day}. Juni`
          : `Found: ${shift.summary} on June ${shift.day}`,
        350
      )
    }

    await addLog(
      lang === 'de'
        ? 'Lösche alte Termine im Kalender "Arbeit" via AppleScript...'
        : 'Clearing old events in calendar "Arbeit" via AppleScript...',
      500
    )

    await addLog(
      lang === 'de'
        ? 'Schreibe neue Events in Kalender...'
        : 'Writing new events to calendar...',
      400
    )

    // Trigger flying events one by one
    for (let i = 0; i < DEFAULT_SHIFTS.length; i++) {
      const shift = DEFAULT_SHIFTS[i]
      setFlyingEvent(shift)
      sfx.playPop(0.04)
      await new Promise((resolve) => setTimeout(resolve, 350))
      setCalendarEvents((prev) => [...prev, shift])
    }
    
    setFlyingEvent(null)

    await addLog(
      lang === 'de'
        ? 'Synchronisation erfolgreich abgeschlossen! 🎉'
        : 'Sync completed successfully! 🎉',
      350
    )

    setSynced(true)
    setSyncing(false)
    sfx.playSkinStockOpen() // play nice success sound
  }

  useEffect(() => {
    // Automatically trigger on mount after 800ms delay to let details modal transition finish
    const timer = setTimeout(() => {
      startSync()
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="atoss-sync-box" style={{
      background: 'rgba(15, 23, 42, 0.65)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '16px',
      padding: '24px',
      marginTop: '20px',
      textAlign: 'left',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      color: '#e2e8f0',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '600', color: '#60a5fa' }}>
            🔄 ATOSS Live Calendar Sync
          </h4>
          <p style={{ margin: '0', fontSize: '12px', color: '#94a3b8' }}>
            {lang === 'de' 
              ? 'Automatischer Workflow: Mail-Eingang ➔ Kalender-Sync' 
              : 'Automated workflow: Email inbox ➔ Calendar sync'}
          </p>
        </div>
        <button 
          onClick={startSync}
          disabled={syncing}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '11px',
            fontWeight: '600',
            cursor: syncing ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s'
          }}
        >
          ↻ {lang === 'de' ? 'Neu starten' : 'Restart'}
        </button>
      </div>

      {/* Simulator grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        position: 'relative'
      }}>
        {/* Flying animation overlay */}
        <AnimatePresence>
          {flyingEvent && (
            <motion.div
              initial={{ scale: 0.5, x: 20, y: 80, opacity: 0 }}
              animate={{ scale: 1, x: 280, y: -40, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50px',
                zIndex: 50,
                background: flyingEvent.color,
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                pointerEvents: 'none'
              }}
            >
              📬 {flyingEvent.summary}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Left Side: Mail Status */}
        <div style={{
          background: '#090d16',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ✉️ macOS Mail App (Mock)
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '8px',
            padding: '10px',
            fontSize: '12px'
          }}>
            <div style={{ color: '#60a5fa', fontWeight: '600' }}>Von: noreply@atoss.com</div>
            <div style={{ color: '#fff', fontWeight: 'bold', marginTop: '2px' }}>Betreff: Neuer Dienstplan online</div>
            <div style={{ marginTop: '8px', padding: '4px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff7700', fontSize: '11px' }}>
              📄 Dienstplan_Becker.pdf (142 KB)
            </div>
          </div>

          <div style={{
            marginTop: 'auto',
            padding: '10px',
            borderRadius: '8px',
            background: syncing ? 'rgba(59, 130, 246, 0.06)' : synced ? 'rgba(16, 185, 129, 0.06)' : 'rgba(255,255,255,0.02)',
            border: `1px solid ${syncing ? 'rgba(59,130,246,0.15)' : synced ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: syncing ? '#3b82f6' : synced ? '#10b981' : '#64748b',
              display: 'inline-block',
              boxShadow: syncing ? '0 0 8px #3b82f6' : synced ? '0 0 8px #10b981' : 'none'
            }} />
            <span style={{ fontWeight: '500' }}>
              {syncing 
                ? (lang === 'de' ? 'Script läuft...' : 'Script executing...') 
                : synced 
                  ? (lang === 'de' ? 'Daten synchronisiert' : 'Data synchronized')
                  : (lang === 'de' ? 'Bereit' : 'Ready')}
            </span>
          </div>
        </div>

        {/* Right Side: Calendar Mock */}
        <div style={{
          background: '#090d16',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            📅 Apple Calendar (Kalender: "Arbeit")
          </div>

          {/* Mini Calendar Grid (June 2026) */}
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '8px',
            padding: '8px',
          }}>
            <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', marginBottom: '6px', color: '#60a5fa' }}>
              Juni 2026
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '4px',
              fontSize: '9px',
              textAlign: 'center'
            }}>
              {/* Calendar Header */}
              {['M', 'D', 'M', 'D', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} style={{ color: '#64748b', fontWeight: 'bold' }}>{d}</div>
              ))}

              {/* Days 1-14 */}
              {Array.from({ length: 14 }).map((_, idx) => {
                const dayNum = idx + 1
                const activeShifts = calendarEvents.filter(e => e.day === dayNum)
                
                return (
                  <div key={idx} style={{
                    height: '34px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '4px',
                    padding: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}>
                    <span style={{ color: '#64748b' }}>{dayNum}</span>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                      {activeShifts.map((sh, sIdx) => (
                        <div
                          key={sIdx}
                          title={sh.summary}
                          style={{
                            background: sh.color,
                            height: '8px',
                            borderRadius: '2px',
                            width: '100%',
                            fontSize: '6px',
                            lineHeight: '8px',
                            color: '#fff',
                            fontWeight: 'bold',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            textAlign: 'center'
                          }}
                        >
                          {sh.start}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Logs Window */}
      <div style={{
        marginTop: '20px',
        background: '#040711',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '12px',
        fontSize: '11px',
        fontFamily: 'monospace',
        height: '110px',
        overflowY: 'auto',
        color: '#a3e635',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
      }}>
        {logs.length === 0 ? (
          <div style={{ color: '#64748b', fontStyle: 'italic' }}>
            {lang === 'de' ? '> Bereite Synchronisation vor...' : '> Preparing synchronization...'}
          </div>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} style={{ marginBottom: '2px' }}>{log}</div>
          ))
        )}
      </div>
    </div>
  )
}
