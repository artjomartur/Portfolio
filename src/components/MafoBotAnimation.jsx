import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const lines = [
  { text: '> node apply.js', color: '#10b981', delay: 500 },
  { text: '> Starte MaFo Bewerber...', color: '#a1a1aa', delay: 1000 },
  { text: '> Navigiere zur Hauptseite...', color: '#a1a1aa', delay: 1800 },
  { text: '> Navigiere zum Login...', color: '#a1a1aa', delay: 2300 },
  { text: '> Versuche Login...', color: '#a1a1aa', delay: 3000 },
  { text: '> Login-Formular abgesendet.', color: '#10b981', delay: 3800 },
  { text: '> Suche nach verfügbaren Studien...', color: '#a1a1aa', delay: 4800 },
  { text: '> Gefundene Studien (Akkordeons): 3', color: '#fbbf24', delay: 6000 },
  { text: '> Öffne die erste Studie im Akkordeon...', color: '#a1a1aa', delay: 6800 },
  { text: '> Klicke auf den Bewerben-Button...', color: '#a1a1aa', delay: 7600 },
  { text: '> Bewerbung erfolgreich simuliert!', color: '#10b981', delay: 8400 },
  { text: '> Skript beendet.', color: '#a1a1aa', delay: 9000 },
];

export default function MafoBotAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeouts = [];
    lines.forEach((line, index) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => Math.max(prev, index + 1));
      }, line.delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div style={{
      background: '#0d1117',
      width: '100%',
      aspectRatio: '16/9',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      padding: '24px',
      fontFamily: '"SF Mono", "Fira Code", monospace',
      fontSize: '14px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }} ref={containerRef}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
      </div>
      
      {lines.slice(0, visibleLines).map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ color: line.color, marginBottom: '8px', lineHeight: '1.5' }}
        >
          {line.text}
        </motion.div>
      ))}
      
      {visibleLines < lines.length && (
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ width: '8px', height: '16px', background: '#fff', marginTop: '4px' }}
        />
      )}
    </div>
  );
}
