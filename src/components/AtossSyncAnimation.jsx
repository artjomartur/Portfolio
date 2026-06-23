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
  const [customShift, setCustomShift] = useState('TS 12:00-20:00')
  const [customDay, setCustomDay] = useState(15)
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
      600
    )
    await addLog(
      lang === 'de'
        ? 'Starte Python-Parser (pdfplumber)...'
        : 'Starting Python Parser (pdfplumber)...',
      600
    )
    await addLog(
      lang === 'de'
        ? 'Extrahiere Schichten für Becker A. ...'
        : 'Extracting shifts for Becker A. ...',
      500
    )

    // Build the list of shifts to parse
    const shiftsToSync = [
      ...DEFAULT_SHIFTS,
      { day: Number(customDay), summary: customShift, start: customShift.split(' ')[1]?.split('-')[0] || '12:00', end: customShift.split(' ')[1]?.split('-')[1] || '20:00', color: '#ec4899' }
    ]

    for (const shift of shiftsToSync) {
      await addLog(
        lang === 'de'
          ? `Gefunden: ${shift.summary} am ${shift.day}. Juni`
          : `Found: ${shift.summary} on June ${shift.day}`,
        400
      )
    }

    await addLog(
      lang === 'de'
        ? 'Lösche alte Termine im Kalender "Arbeit" via AppleScript...'
        : 'Clearing old events in calendar "Arbeit" via AppleScript...',
      600
    )

    await addLog(
      lang === 'de'
        ? 'Schreibe neue Events in Kalender...'
        : 'Writing new events to calendar...',
      500
    )

    // Trigger flying events one by one
    for (let i = 0; i < shiftsToSync.length; i++) {
      const shift = shiftsToSync[i]
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
      400
    )

    setSynced(true)
    setSyncing(false)
    sfx.playSkinStockOpen() // play nice success sound
  }

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
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '600', color: '#60a5fa' }}>
          🔄 ATOSS Live Calendar Sync Simulator
        </h4>
        <p style={{ margin: '0', fontSize: '12px', color: '#94a3b8' }}>
          {lang === 'de' 
            ? 'Simuliere den vollautomatischen Workflow vom Mail-Eingang bis zum Kalendereintrag.' 
            : 'Simulate the fully automated workflow from email inbox to calendar entry.'}
        </p>
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
              initial={{ scale: 0.5, x: 50, y: 100, opacity: 0 }}
              animate={{ scale: 1, x: 250, y: -50, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                left: '20px',
                top: '80px',
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

        {/* Left Side: Mail & Config */}
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

          {/* Config Custom Shift */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
            <label style={{ fontSize: '11px', color: '#94a3b8' }}>
              {lang === 'de' ? 'Eigene Schicht testen:' : 'Test custom shift:'}
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={customShift}
                onChange={(e) => setCustomShift(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <input
                type="number"
                min="1"
                max="30"
                value={customDay}
                onChange={(e) => setCustomDay(e.target.value)}
                style={{
                  width: '50px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '6px',
                  color: '#fff',
                  fontSize: '12px',
                  textAlign: 'center'
                }}
              />
            </div>
          </div>

          <button
            onClick={startSync}
            disabled={syncing}
            style={{
              width: '100%',
              height: '38px',
              background: syncing 
                ? '#1e293b' 
                : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: syncing ? 'not-allowed' : 'pointer',
              boxShadow: syncing ? 'none' : '0 4px 12px rgba(59, 130, 246, 0.25)',
              transition: 'all 0.2s',
              fontSize: '12px',
              marginTop: '8px'
            }}
          >
            {syncing 
              ? (lang === 'de' ? '⚙️ Synchronisiere...' : '⚙️ Syncing...') 
              : (lang === 'de' ? '⚡ E-Mail erhalten & syncen' : '⚡ Receive Email & Sync')}
          </button>
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
            {lang === 'de' ? '> Warte auf Sync-Start...' : '> Waiting for sync execution...'}
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
