import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette({ lang, toggleTheme, onViewPdf }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setQuery('');
        setSelectedIndex(0);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const commands = [
    {
      id: 'theme',
      title: lang === 'de' ? 'Theme wechseln (Dark/Light)' : 'Toggle Theme (Dark/Light)',
      icon: '🌓',
      action: () => toggleTheme()
    },
    {
      id: 'contact',
      title: lang === 'de' ? 'Zum Kontaktformular' : 'Go to Contact',
      icon: '✉️',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'cv',
      title: lang === 'de' ? 'Lebenslauf ansehen (PDF)' : 'View Resume (PDF)',
      icon: '📄',
      action: () => {
        onViewPdf('/CV_ArtjomBecker.pdf', lang === 'de' ? 'Lebenslauf Artjom Becker' : 'Resume Artjom Becker');
      }
    },
    {
      id: 'projects',
      title: lang === 'de' ? 'Projekte ansehen' : 'View Projects',
      icon: '🚀',
      action: () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'social',
      title: lang === 'de' ? 'Social Media / GitHub' : 'Social Media / GitHub',
      icon: '🌐',
      action: () => {
        document.getElementById('social-hub')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="cmd-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10000, display: 'flex', justifyContent: 'center', paddingTop: '12vh' }}>
            <motion.div 
              className="cmd-palette"
              style={{ pointerEvents: 'auto', height: 'fit-content' }}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="cmd-input-wrapper">
                <span className="cmd-search-icon">🔍</span>
                <input
                  ref={inputRef}
                  className="cmd-input"
                  placeholder={lang === 'de' ? 'Befehl eingeben...' : 'Type a command...'}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="cmd-esc-hint">ESC</div>
              </div>
              
              <div className="cmd-list">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, i) => (
                    <div 
                      key={cmd.id}
                      className={`cmd-item ${i === selectedIndex ? 'cmd-item--active' : ''}`}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(i)}
                    >
                      <span className="cmd-item-icon">{cmd.icon}</span>
                      <span className="cmd-item-title">{cmd.title}</span>
                    </div>
                  ))
                ) : (
                  <div className="cmd-empty">
                    {lang === 'de' ? 'Keine Befehle gefunden.' : 'No commands found.'}
                  </div>
                )}
              </div>
              <div className="cmd-footer">
                <span className="cmd-footer-text">
                  <strong>↑↓</strong> {lang === 'de' ? 'zum Navigieren' : 'to navigate'}
                </span>
                <span className="cmd-footer-text">
                  <strong>↵</strong> {lang === 'de' ? 'zum Auswählen' : 'to select'}
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
