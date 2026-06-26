import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { sfx } from '../sfx';
import { ITEMS } from '../data/constants';

const CsAnimation = React.lazy(() => import('../CsAnimation'));
const SkinStockApp = React.lazy(() => import('./SkinStockApp'));

export default function ProjectModal({
  activeProject,
  setActiveProject,
  lang,
  gitStats,
  handleViewPdf,
  setIsPongActive,
  setIsMemoryActive,
  setShowOliVideo
}) {
  const [activeModalTab, setActiveModalTab] = useState('overview');
  const [shareCopied, setShareCopied] = useState(false);
  const [hasScrolledGallery, setHasScrolledGallery] = useState(false);
  const [showCaseOpener, setShowCaseOpener] = useState(false);
  const [showSkinStockApp, setShowSkinStockApp] = useState(false);

  useEffect(() => {
    setActiveModalTab('overview');
    if (activeProject) {
      sfx.playProjectOpen(activeProject.id);
      setHasScrolledGallery(false);
    } else {
      setShowCaseOpener(false);
      setShowSkinStockApp(false);
    }
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject || activeProject.id !== 'kinopolis-automation') {
      setShowOliVideo(false);
    }
  }, [activeProject, setShowOliVideo]);

  const handleGalleryScroll = (e) => {
    if (e.target.scrollLeft > 10) {
      setHasScrolledGallery(true);
    }
    if (activeProject?.id !== 'kinopolis-automation') return;
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      setShowOliVideo(true);
    }
  };

  const handleShareProject = (e) => {
    e.stopPropagation();
    if (!activeProject) return;
    const url = new URL(window.location.href);
    url.searchParams.set('project', activeProject.id);
    navigator.clipboard.writeText(url.toString()).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  if (!activeProject) return null;

  return (
    <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
      <button
        type="button"
        className="modal-nav-arrow modal-nav-arrow--prev"
        onClick={(e) => {
          e.stopPropagation();
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id);
          if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + ITEMS.length) % ITEMS.length;
            setActiveProject(ITEMS[prevIndex]);
            setActiveModalTab('overview');
          }
        }}
        aria-label={lang === 'de' ? 'Vorheriges Projekt' : 'Previous Project'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-nav-arrow-icon">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <motion.div
        key={activeProject.id}
        className={`project-modal ${activeProject.id === 'first-aid-simulator' ? 'project-modal--emergency' : ''}`}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {activeProject.id === 'first-aid-simulator' && <div className="emergency-glow" />}
        {activeProject.id === 'portfolio' && <div className="git-graph-bg" />}
        {activeProject.id === 'arcadesuite' && <div className="arcade-retro-bg" />}

        <div className="modal-actions">
          <button
            className={`modal-share ${shareCopied ? 'copied' : ''}`}
            onClick={handleShareProject}
            title={lang === 'de' ? 'Projekt Link kopieren' : 'Copy Project Link'}
            aria-label={lang === 'de' ? 'Link kopieren' : 'Copy Link'}
          >
            {shareCopied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            )}
          </button>
          <button className="modal-close" onClick={() => setActiveProject(null)} title={lang === 'de' ? 'Schließen' : 'Close'} aria-label={lang === 'de' ? 'Schließen' : 'Close'}>
            ×
          </button>
        </div>

        {activeProject.images ? (
          <div style={{ position: 'relative' }}>
            <div className="modal-image-gallery" onScroll={handleGalleryScroll}>
              {activeProject.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${activeProject.title} ${idx + 1}`} className="modal-image" loading="lazy" />
              ))}
            </div>
            {!hasScrolledGallery && activeProject.images.length > 1 && (
              <div className="gallery-scroll-hint" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            )}
          </div>
        ) : (
          <img src={activeProject.image} alt={activeProject.title} className="modal-image" loading="lazy" />
        )}

        <div className="modal-text-content">
          <h3 id="modal-title">{activeProject.title}</h3>
          <p>{activeProject.short}</p>

          <div className="modal-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={activeModalTab === 'overview'}
              className={`modal-tab-btn ${activeModalTab === 'overview' ? 'modal-tab-btn--active' : ''}`}
              onClick={() => setActiveModalTab('overview')}
            >
              {lang === 'de' ? 'Übersicht' : 'Overview'}
            </button>
            <button
              role="tab"
              aria-selected={activeModalTab === 'challenge'}
              className={`modal-tab-btn ${activeModalTab === 'challenge' ? 'modal-tab-btn--active' : ''}`}
              onClick={() => setActiveModalTab('challenge')}
            >
              {lang === 'de' ? 'Challenge & Lösung' : 'Challenge & Solution'}
            </button>
            <button
              role="tab"
              aria-selected={activeModalTab === 'outcome'}
              className={`modal-tab-btn ${activeModalTab === 'outcome' ? 'modal-tab-btn--active' : ''}`}
              onClick={() => setActiveModalTab('outcome')}
            >
              {lang === 'de' ? 'Ergebnis & Links' : 'Outcome & Links'}
            </button>
          </div>

          <div className="modal-tab-content">
            {activeModalTab === 'overview' && (
              <motion.ul
                className="modal-facts"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                role="tabpanel"
              >
                <li><strong>{lang === 'de' ? 'Rolle' : 'Role'}:</strong> {activeProject.details.role}</li>
                <li><strong>{lang === 'de' ? 'Kontext' : 'Context'}:</strong> {activeProject.details.context}</li>
                <li><strong>Impact:</strong> {activeProject.details.impact}</li>
                <li><strong>Tech:</strong> {activeProject.details.tech}</li>
                <li>
                  <strong>{lang === 'de' ? 'Sprache(n)' : 'Language(s)'}:</strong>{' '}
                  {activeProject.details.languages?.join(', ')}
                </li>
                {gitStats[activeProject.id] && (
                  <li>
                    <strong>GitHub:</strong>{' '}
                    <span className="github-badge" aria-label={`GitHub Stars: ${gitStats[activeProject.id].stars}`}>⭐ {gitStats[activeProject.id].stars} Stars</span>
                    {' · '}
                    <span>{lang === 'de' ? 'Aktiv am' : 'Active on'} {gitStats[activeProject.id].updatedAt}</span>
                  </li>
                )}
              </motion.ul>
            )}

            {activeModalTab === 'challenge' && (
              <motion.div
                className="case-study"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                role="tabpanel"
              >
                <h4>{lang === 'de' ? 'Herausforderung' : 'The Challenge'}</h4>
                <p>{activeProject.details.challenge}</p>
                <h4 style={{ marginTop: '16px' }}>{lang === 'de' ? 'Lösungsweg' : 'Our Solution'}</h4>
                <p>{activeProject.details.solution}</p>
              </motion.div>
            )}

            {activeModalTab === 'outcome' && (
              <motion.div
                className="case-study"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                role="tabpanel"
              >
                <h4>{lang === 'de' ? 'Ergebnis & Impact' : 'Result & Impact'}</h4>
                <p>{activeProject.details.result}</p>

                <div className="modal-links-group" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {activeProject.type === 'seminar' && activeProject.details.link && (
                    (activeProject.details.link.endsWith('.pdf') || activeProject.details.link.endsWith('.pptx')) ? (
                      <button
                        type="button"
                        className="link link-button"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                          color: '#60a5fa', background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.25)',
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                          textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer'
                        }}
                        onClick={() => handleViewPdf(activeProject.details.link, lang === 'de' ? `Seminararbeit - ${activeProject.title}` : `Seminar Paper - ${activeProject.title}`)}
                      >
                        📄 {lang === 'de' ? 'Ausarbeitung anzeigen ↗' : 'View Paper ↗'}
                      </button>
                    ) : (
                      <a
                        href={activeProject.details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-button"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                          color: '#60a5fa', background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.25)',
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                          textDecoration: 'none', transition: 'all 0.2s'
                        }}
                      >
                        📄 {lang === 'de' ? 'Ausarbeitung öffnen ↗' : 'Open Paper ↗'}
                      </a>
                    )
                  )}

                  {activeProject.type === 'project' && activeProject.details.link && activeProject.details.link.startsWith('http') && (
                    <a
                      href={activeProject.details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-button"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                        color: '#60a5fa', background: 'rgba(96, 165, 250, 0.08)', border: '1px solid rgba(96, 165, 250, 0.25)',
                        padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                        textDecoration: 'none', transition: 'all 0.2s'
                      }}
                    >
                      {activeProject.details.link.includes('github.com') ? (
                        <>💻 {lang === 'de' ? 'Repository öffnen ↗' : 'Open Repository ↗'}</>
                      ) : (
                        <>🌐 {lang === 'de' ? 'Website öffnen ↗' : 'Open Website ↗'}</>
                      )}
                    </a>
                  )}

                  {activeProject.details.pdf && (
                    <button
                      type="button"
                      className="link link-button"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                        color: '#34d399', background: 'rgba(52, 211, 153, 0.08)', border: '1px solid rgba(52, 211, 153, 0.25)',
                        padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                        textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer'
                      }}
                      onClick={() => handleViewPdf(activeProject.details.pdf, lang === 'de' ? `Dokumentation - ${activeProject.title}` : `Documentation - ${activeProject.title}`)}
                    >
                      📚 {lang === 'de' ? 'Dokumentation anzeigen ↗' : 'View Documentation ↗'}
                    </button>
                  )}

                  {activeProject.details.slides && (
                    (activeProject.details.slides.endsWith('.pdf') || activeProject.details.slides.endsWith('.pptx')) ? (
                      <button
                        type="button"
                        className="link link-button"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                          color: '#a78bfa', background: 'rgba(167, 139, 250, 0.08)', border: '1px solid rgba(167, 139, 250, 0.25)',
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                          textDecoration: 'none', transition: 'all 0.2s', cursor: 'pointer'
                        }}
                        onClick={() => handleViewPdf(activeProject.details.slides, lang === 'de' ? `Präsentationsfolien - ${activeProject.title}` : `Presentation Slides - ${activeProject.title}`)}
                      >
                        📊 {lang === 'de' ? 'Folien anzeigen ↗' : 'View Slides ↗'}
                      </button>
                    ) : (
                      <a
                        href={activeProject.details.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-button"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                          color: '#a78bfa', background: 'rgba(167, 139, 250, 0.08)', border: '1px solid rgba(167, 139, 250, 0.25)',
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                          textDecoration: 'none', transition: 'all 0.2s'
                        }}
                      >
                        📊 {lang === 'de' ? 'Folien öffnen ↗' : 'Open Slides ↗'}
                      </a>
                    )
                  )}

                  {activeProject.details.trailer && (
                    <a
                      href={activeProject.details.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-button"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                        color: '#f87171', background: 'rgba(248, 113, 113, 0.08)', border: '1px solid rgba(248, 113, 113, 0.25)',
                        padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                        textDecoration: 'none', transition: 'all 0.2s'
                      }}
                    >
                      🎬 {lang === 'de' ? 'Trailer ansehen ↗' : 'Watch Trailer ↗'}
                    </a>
                  )}

                  {activeProject.details.hasEasterEgg && (
                    <button
                      className="link link-button"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                        color: '#fbbf24', background: 'rgba(251, 191, 36, 0.08)', border: '1px solid rgba(251, 191, 36, 0.25)',
                        padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                        cursor: 'pointer', transition: 'all 0.2s'
                      }}
                      onClick={() => {
                        setActiveProject(null);
                        setIsPongActive(true);
                      }}
                    >
                      🎮 {lang === 'de' ? 'Play Pong' : 'Play Pong'}
                    </button>
                  )}

                  {activeProject.id === 'portfolio' && (
                    <button
                      className="link link-button"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                        color: '#fbbf24', background: 'rgba(251, 191, 36, 0.08)', border: '1px solid rgba(251, 191, 36, 0.25)',
                        padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600',
                        cursor: 'pointer', transition: 'all 0.2s'
                      }}
                      onClick={() => {
                        setActiveProject(null);
                        setIsMemoryActive(true);
                      }}
                    >
                      🎮 {lang === 'de' ? 'Play Tech Memory' : 'Play Tech Memory'}
                    </button>
                  )}
                </div>

                {activeProject.id === 'skinstock' && (
                  showCaseOpener || showSkinStockApp ? (
                    <div>
                      <button
                        onClick={() => {
                          setShowCaseOpener(false);
                          setShowSkinStockApp(false);
                        }}
                        className="sandbox-btn"
                        style={{
                          marginBottom: '16px', width: 'auto', padding: '6px 14px', background: 'rgba(255,255,255,0.06)',
                          border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '12px', fontWeight: '600'
                        }}
                      >
                        ← {lang === 'de' ? 'Zurück' : 'Back'}
                      </button>
                      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>Loading...</div>}>
                        {showCaseOpener ? <CsAnimation lang={lang} /> : <SkinStockApp lang={lang} />}
                      </Suspense>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => setShowCaseOpener(true)}
                        className="link link-button"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '6px', margin: 0,
                          color: '#ffae00', background: 'rgba(255, 174, 0, 0.08)', border: '1px solid rgba(255, 174, 0, 0.25)',
                          padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s'
                        }}
                      >
                        📦 {lang === 'de' ? 'Kisten-Simulator starten' : 'Launch Case Simulator'}
                      </button>
                    </div>
                  )
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <button
        type="button"
        className="modal-nav-arrow modal-nav-arrow--next"
        onClick={(e) => {
          e.stopPropagation();
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id);
          if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % ITEMS.length;
            setActiveProject(ITEMS[nextIndex]);
            setActiveModalTab('overview');
          }
        }}
        aria-label={lang === 'de' ? 'Nächstes Projekt' : 'Next Project'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-nav-arrow-icon">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
