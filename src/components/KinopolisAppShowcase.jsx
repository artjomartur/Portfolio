import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../utils/sound';
import './KinopolisAppShowcase.css';

const IOS_SCREENS = [
  {
    id: 'saalplan',
    labelDe: '🎟️ Saal-Radar',
    labelEn: '🎟️ Hall Radar',
    titleDe: 'Echtzeit Saal-Radar & Belegung',
    titleEn: 'Real-Time Hall Radar & Capacity',
    descDe: 'Sekundengenaue Auslastung, Einlasszeiten und Restlaufzeiten für alle Säle live synchronisiert.',
    descEn: 'Second-by-second seat capacity, admission timing, and runtime tracking for all cinema halls.',
    screen: '/projects/kinopolis/screens/screen_saalplan.png',
    oli: '/assets/Oli/Oli_4_bgless.png',
    accent: '#3b82f6',
    pulseDe: 'LIVE SYNCHRONISIERT',
    pulseEn: 'LIVE SYNCED',
    bulletsDe: ['Sekundengenaue Sitzplan-Scrapes', 'Automatische Einlass-Timer', 'Farbcodierte Saalauslastung', 'Vorstellungs-Restlaufzeiten'],
    bulletsEn: ['Live seat plan scraping', 'Automated admission timers', 'Color-coded hall occupancy', 'Screening runtime tracking']
  },
  {
    id: 'funkruf',
    labelDe: '📢 Digitalfunk',
    labelEn: '📢 Digital Order',
    titleDe: 'Digitaler Nachschub-Ruf',
    titleEn: 'Digital Restock Dispatch',
    descDe: 'Popcorn, Nachos, Getränke und Becher blitzschnell per Fingertipp anfordern – diskret ohne Funkrauschen.',
    descEn: 'Request popcorn, nachos, drinks, and cups instantly with one tap – discreetly without radio noise.',
    screen: '/projects/kinopolis/screens/screen_funkruf.png',
    oli: '/assets/Oli/Oli_2_bgless.png',
    accent: '#f59e0b',
    pulseDe: 'BLITZ-ROUTING',
    pulseEn: 'INSTANT ROUTING',
    bulletsDe: ['Kein störendes Funkrauschen', '1-Tap Schnellbestellungen', 'Kassenbezogene Adressierung', 'Akustisches Feedback'],
    bulletsEn: ['No annoying radio interference', '1-Tap fast ordering', 'Counter-specific routing', 'Audio confirmation']
  },
  {
    id: 'scanner',
    labelDe: '⚡ Ticket-Scanner',
    labelEn: '⚡ Ticket Scanner',
    titleDe: 'High-Speed Ticket-Scanner',
    titleEn: 'High-Speed Ticket Scanner',
    descDe: 'QR-Codes direkt mit der iPhone-Kamera scannen, Tickets entwerten und Saalzutritte im Handumdrehen prüfen.',
    descEn: 'Scan QR codes directly via iPhone camera, validate tickets, and verify hall access in milliseconds.',
    screen: '/projects/kinopolis/screens/screen_scanner.png',
    oli: '/assets/Oli/Oli_Security_bgless.png',
    accent: '#10b981',
    pulseDe: 'KAMERA SCAN',
    pulseEn: 'CAMERA SCAN',
    bulletsDe: ['Direkte Kamera-Integration', 'Haptisches Erfolgsfeedback', 'Dubletten-Erkennung', 'Saal-Zutrittsvalidierung'],
    bulletsEn: ['Native camera integration', 'Haptic success feedback', 'Duplicate ticket detection', 'Hall access validation']
  },
  {
    id: 'fsk',
    labelDe: '🔞 FSK & JuSchG',
    labelEn: '🔞 Youth Protection',
    titleDe: 'Rechtssicherer FSK-Rechner',
    titleEn: 'Legally Compliant Age Verifier',
    descDe: 'Präzise Stichtags- und Ausweiskontrolle mit integriertem Kalender ohne fehleranfälliges Kopfrechnen.',
    descEn: 'Precise legal age and ID cutoff verification with built-in calendar without error-prone mental math.',
    screen: '/projects/kinopolis/screens/screen_fsk.png',
    oli: '/assets/Oli/Oli_6_bgless.png',
    accent: '#ef4444',
    pulseDe: 'STICHTAG GEPRÜFT',
    pulseEn: 'CUTOFF VERIFIED',
    bulletsDe: ['Tagesaktuelle Stichtage', 'FSK 0/6/12/16/18 Checks', 'Begleitpersonen-Regelung', 'Schnelle Ausweis-Validierung'],
    bulletsEn: ['Daily cutoff calculations', 'FSK 0/6/12/16/18 checks', 'Parental guidance rules', 'Instant ID validation']
  },
  {
    id: 'orga',
    labelDe: '📋 Schicht & Orga',
    labelEn: '📋 Shifts & Ops',
    titleDe: 'Schichtleitung & Checklisten',
    titleEn: 'Shift Management & Checklists',
    descDe: 'Plakatwechsel, Übergaben, Reinigungschecks und Schicht-Aufgaben übersichtlich vereint.',
    descEn: 'Poster swaps, handovers, cleaning checklists, and shift assignments unified without paper chaos.',
    screen: '/projects/kinopolis/screens/screen_organisation.png',
    oli: '/assets/Oli/Oli_5_bgless.png',
    accent: '#8b5cf6',
    pulseDe: 'DIGITAL WORKFLOW',
    pulseEn: 'DIGITAL WORKFLOW',
    bulletsDe: ['Plakatwechsel-Tracker', 'Foyer- & Saal-Checklisten', 'Schichtübergaben & Notizen', 'Zeitersparnis im Team'],
    bulletsEn: ['Poster swap tracker', 'Foyer & hall checklists', 'Shift handovers & notes', 'Team time savings']
  }
];

const APPSTORE_SLIDES = [
  {
    id: 'slide1',
    img: '/projects/kinopolis/appstore/appstore_1_live.png',
    titleDe: 'Echtzeit Saal-Monitor',
    titleEn: 'Real-Time Hall Monitor',
    subDe: 'Säle & Vorstellungen live im Blick',
    subEn: 'Halls & screenings live at a glance',
    descDe: 'Auslastung, Einlasszeiten und Restlaufzeiten für alle Kinosäle sekundengenau synchronisiert.',
    descEn: 'Second-by-second seat capacity, admission timing, and runtime tracking for all cinema halls.',
    accent: '#3b82f6'
  },
  {
    id: 'slide2',
    img: '/projects/kinopolis/appstore/appstore_2_funk.png',
    titleDe: 'Digitaler Funkruf',
    titleEn: 'Digital Restock Dispatch',
    subDe: 'Nachschub rufen per Fingertipp',
    subEn: 'Request restock with one tap',
    descDe: 'Popcorn, Nachos, Getränke und Becher blitzschnell anfordern – diskret und ohne Funkrauschen.',
    descEn: 'Request popcorn, nachos, drinks, and cups instantly – discreetly without radio noise.',
    accent: '#f59e0b'
  },
  {
    id: 'slide3',
    img: '/projects/kinopolis/appstore/appstore_3_scanner.png',
    titleDe: 'Schneller Einlass',
    titleEn: 'Fast Admission',
    subDe: 'Ticket-Scanner direkt am Handy',
    subEn: 'Ticket scanner directly on mobile',
    descDe: 'QR-Codes scannen, Tickets entwerten und Saalzutritte im Handumdrehen prüfen.',
    descEn: 'Scan QR codes, validate tickets, and verify hall access in milliseconds.',
    accent: '#10b981'
  },
  {
    id: 'slide4',
    img: '/projects/kinopolis/appstore/appstore_4_action.png',
    titleDe: 'FSK & JuSchG Rechner',
    titleEn: 'Age Protection Calculator',
    subDe: 'Ausweiskontrolle in Sekunden',
    subEn: 'ID checks in seconds',
    descDe: 'Rechtssichere Alters- und Stichtagsprüfung mit integriertem Kalender ohne Kopfrechnen.',
    descEn: 'Legally compliant age and ID cutoff check with integrated calendar without mental math.',
    accent: '#ef4444'
  },
  {
    id: 'slide5',
    img: '/projects/kinopolis/appstore/appstore_5_mehr.png',
    titleDe: 'Digitale Schichtorganisation',
    titleEn: 'Digital Shift Organization',
    subDe: 'Team & Aktionen ohne Zettelchaos',
    subEn: 'Team & tasks without paper chaos',
    descDe: 'Schicht-Zeiterfassung, Waren-Transfers, Reinigungschecks und Aufgaben übersichtlich vereint.',
    descEn: 'Shift tracking, inventory transfers, cleaning checklists, and duties unified.',
    accent: '#8b5cf6'
  }
];

const WEB_SCREENS = [
  {
    id: 'dashboard',
    labelDe: '📊 Projektübersicht',
    labelEn: '📊 Project Overview',
    img: '/projects/kinopolis/web_showcase/web_1_dashboard.png',
    titleDe: 'Operatives Multi-Saal-Radar',
    titleEn: 'Operational Multi-Hall Radar'
  },
  {
    id: 'analytics',
    labelDe: '📈 Auslastung & Trends',
    labelEn: '📈 Occupancy & Trends',
    img: '/projects/kinopolis/web_showcase/web_2_analytics.png',
    titleDe: 'Auslastungs-Analytics',
    titleEn: 'Occupancy Analytics'
  },
  {
    id: 'reports',
    labelDe: '📑 Schicht-Reports',
    labelEn: '📑 Shift Reports',
    img: '/projects/kinopolis/web_showcase/web_3_reports.png',
    titleDe: 'Automatisierte Schichtberichte',
    titleEn: 'Automated Shift Reports'
  },
  {
    id: 'admin',
    labelDe: '⚙️ Admin-Konsole',
    labelEn: '⚙️ Admin Console',
    img: '/projects/kinopolis/web_showcase/web_4_admin.png',
    titleDe: 'Saal-Konfiguration & Scraper',
    titleEn: 'Hall Config & Scraper Management'
  }
];

export default function KinopolisAppShowcase({ lang = 'de' }) {
  const [viewMode, setViewMode] = useState('web'); // 'ios' | 'slides' | 'web'
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeWebIndex, setActiveWebIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const currentScreen = IOS_SCREENS[activeScreenIndex];
  const currentSlide = APPSTORE_SLIDES[activeSlideIndex];
  const currentWeb = WEB_SCREENS[activeWebIndex];

  const currentAccent = viewMode === 'ios' 
    ? currentScreen.accent 
    : viewMode === 'slides' 
    ? currentSlide.accent 
    : '#3b82f6';

  const handleNextSlide = () => {
    playClickSound();
    setActiveSlideIndex((prev) => (prev + 1) % APPSTORE_SLIDES.length);
  };

  const handlePrevSlide = () => {
    playClickSound();
    setActiveSlideIndex((prev) => (prev - 1 + APPSTORE_SLIDES.length) % APPSTORE_SLIDES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode === 'slides') {
        if (e.key === 'ArrowRight') handleNextSlide();
        if (e.key === 'ArrowLeft') handlePrevSlide();
      }
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  return (
    <div 
      className="kinopolis-showcase-container" 
      style={{ '--kino-accent': currentAccent }}
    >
      {/* Top Mode Bar */}
      <div className="kino-mode-bar">
        <div className="kino-mode-group">
          <button
            type="button"
            className={`kino-mode-btn ${viewMode === 'ios' ? 'kino-mode-btn--active' : ''}`}
            onClick={() => { playClickSound(); setViewMode('ios'); }}
          >
            📱 {lang === 'de' ? 'iOS Native App' : 'iOS Native App'}
          </button>
          <button
            type="button"
            className={`kino-mode-btn ${viewMode === 'slides' ? 'kino-mode-btn--active' : ''}`}
            onClick={() => { playClickSound(); setViewMode('slides'); }}
          >
            🖼️ {lang === 'de' ? 'App Store Showcase (3D)' : 'App Store Showcase (3D)'}
          </button>
          <button
            type="button"
            className={`kino-mode-btn ${viewMode === 'web' ? 'kino-mode-btn--active' : ''}`}
            onClick={() => { playClickSound(); setViewMode('web'); }}
          >
            🖥️ {lang === 'de' ? 'Web Dashboard' : 'Web Dashboard'}
          </button>
        </div>

        <div className="kino-badge-status">
          <span>⚡</span>
          <span>{lang === 'de' ? 'Live im Einsatz' : 'Live in Production'}</span>
        </div>
      </div>

      {/* Mode 1: iOS iPhone Interactive Mockup */}
      {viewMode === 'ios' && (
        <motion.div 
          className="kino-ios-view"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* iPhone Hardware Frame */}
          <div className="iphone-device-wrap">
            <div 
              className="iphone-screen-outer"
              onClick={() => setLightboxImg(currentScreen.screen)}
              title={lang === 'de' ? 'Klicken zum Vergrößern' : 'Click to enlarge'}
            >
              <div className="iphone-dynamic-island">
                <div className="dynamic-island-lens" />
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentScreen.id}
                  src={currentScreen.screen}
                  alt={lang === 'de' ? currentScreen.titleDe : currentScreen.titleEn}
                  className="iphone-screen-img"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              <div className="iphone-home-bar" />
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="kino-ios-details">
            <div className="kino-screen-pills">
              {IOS_SCREENS.map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  className={`kino-screen-pill ${activeScreenIndex === idx ? 'kino-screen-pill--active' : ''}`}
                  onClick={() => { playClickSound(); setActiveScreenIndex(idx); }}
                >
                  {lang === 'de' ? sc.labelDe : sc.labelEn}
                </button>
              ))}
            </div>

            <motion.div 
              className="kino-feature-card"
              key={`card-${currentScreen.id}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="kino-feature-avatar">
                <img src={currentScreen.oli} alt="Oli Mascot" />
              </div>
              <div className="kino-feature-info">
                <div className="kino-feature-header">
                  <span className="kino-feature-title">
                    {lang === 'de' ? currentScreen.titleDe : currentScreen.titleEn}
                  </span>
                  <div className="kino-pulse-tag">
                    <span className="kino-pulse-dot" />
                    <span>{lang === 'de' ? currentScreen.pulseDe : currentScreen.pulseEn}</span>
                  </div>
                </div>
                <p className="kino-feature-desc">
                  {lang === 'de' ? currentScreen.descDe : currentScreen.descEn}
                </p>
                <ul className="kino-quick-points">
                  {(lang === 'de' ? currentScreen.bulletsDe : currentScreen.bulletsEn).map((bp, i) => (
                    <li key={i} className="kino-quick-point">
                      <span className="check">✓</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Mode 2: App Store 3D Slides Carousel */}
      {viewMode === 'slides' && (
        <motion.div 
          className="kino-slides-carousel"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="kino-slide-main-frame"
            onClick={() => setLightboxImg(currentSlide.img)}
            title={lang === 'de' ? 'Klicken zum Vergrößern' : 'Click to enlarge'}
          >
            <button
              type="button"
              className="kino-slide-nav-btn kino-slide-nav-btn--prev"
              onClick={(e) => { e.stopPropagation(); handlePrevSlide(); }}
              aria-label="Previous Slide"
            >
              ‹
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide.id}
                src={currentSlide.img}
                alt={lang === 'de' ? currentSlide.titleDe : currentSlide.titleEn}
                className="kino-slide-img"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>

            <button
              type="button"
              className="kino-slide-nav-btn kino-slide-nav-btn--next"
              onClick={(e) => { e.stopPropagation(); handleNextSlide(); }}
              aria-label="Next Slide"
            >
              ›
            </button>
          </div>

          <div className="kino-slides-info">
            <div className="kino-slide-dots">
              {APPSTORE_SLIDES.map((sl, idx) => (
                <button
                  key={sl.id}
                  type="button"
                  className={`kino-slide-dot ${activeSlideIndex === idx ? 'kino-slide-dot--active' : ''}`}
                  onClick={() => { playClickSound(); setActiveSlideIndex(idx); }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div>
              <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', margin: '0 0 4px 0' }}>
                {lang === 'de' ? currentSlide.titleDe : currentSlide.titleEn}
              </h4>
              <p style={{ color: 'var(--kino-accent, #3b82f6)', fontSize: '13px', fontWeight: '600', margin: '0 0 6px 0' }}>
                {lang === 'de' ? currentSlide.subDe : currentSlide.subEn}
              </p>
              <p style={{ color: '#d1d5db', fontSize: '12.5px', margin: 0, lineHeight: 1.45 }}>
                {lang === 'de' ? currentSlide.descDe : currentSlide.descEn}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
              {APPSTORE_SLIDES.map((sl, idx) => (
                <button
                  key={sl.id}
                  type="button"
                  className={`kino-screen-pill ${activeSlideIndex === idx ? 'kino-screen-pill--active' : ''}`}
                  onClick={() => { playClickSound(); setActiveSlideIndex(idx); }}
                  style={{ fontSize: '11px', padding: '4px 9px' }}
                >
                  Slide {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Mode 3: Web Dashboard */}
      {viewMode === 'web' && (
        <motion.div 
          className="kino-web-view"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="kino-screen-pills">
            {WEB_SCREENS.map((wb, idx) => (
              <button
                key={wb.id}
                type="button"
                className={`kino-screen-pill ${activeWebIndex === idx ? 'kino-screen-pill--active' : ''}`}
                onClick={() => { playClickSound(); setActiveWebIndex(idx); }}
              >
                {lang === 'de' ? wb.labelDe : wb.labelEn}
              </button>
            ))}
          </div>

          <div className="kino-browser-window">
            <div className="kino-browser-topbar">
              <div className="kino-window-dots">
                <span className="kino-window-dot red" />
                <span className="kino-window-dot yellow" />
                <span className="kino-window-dot green" />
              </div>
              <div className="kino-browser-url">
                https://kinopolis.artjombecker.com
              </div>
              <a 
                href="https://kinopolis.artjombecker.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link link-button"
                style={{ padding: '3px 8px', fontSize: '11px', margin: 0 }}
              >
                {lang === 'de' ? 'Live öffnen ↗' : 'Open Live ↗'}
              </a>
            </div>

            <div 
              className="kino-browser-body"
              onClick={() => setLightboxImg(currentWeb.img)}
              title={lang === 'de' ? 'Klicken zum Vergrößern' : 'Click to enlarge'}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentWeb.id}
                  src={currentWeb.img}
                  alt={lang === 'de' ? currentWeb.titleDe : currentWeb.titleEn}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            className="kino-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
          >
            <div className="kino-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button"
                className="kino-lightbox-close"
                onClick={() => setLightboxImg(null)}
                aria-label="Close Preview"
              >
                ×
              </button>
              <img src={lightboxImg} alt="Preview" className="kino-lightbox-img" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
