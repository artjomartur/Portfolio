import React from 'react'
import { motion } from 'framer-motion'

function PdfViewerModal({ url, title, onClose, lang = 'de' }) {
  if (!url) return null

  const isOfficeDoc = url.endsWith('.pptx') || url.endsWith('.ppt') || url.endsWith('.docx')
  const absoluteUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`
  const iframeSrc = isOfficeDoc
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`
    : url

  const isSlides = url.endsWith('.pptx') || url.endsWith('.ppt') || url.includes('slides')
  const isCertificate = title && !title.toLowerCase().includes('lebenslauf') && !title.toLowerCase().includes('resume') && !isSlides

  return (
    <div className="pdf-viewer-backdrop" onClick={onClose}>
      <motion.div
        className="pdf-viewer-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pdf-viewer-header">
          <div className="pdf-viewer-title">
            <span className="pdf-viewer-icon">{isSlides ? '📊' : '📄'}</span>
            <h3>{title || (lang === 'de' ? 'Dokumenten-Vorschau' : 'Document Preview')}</h3>
          </div>
          <div className="pdf-viewer-actions">
            <a
              href={url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-viewer-btn pdf-viewer-btn--download"
              title={lang === 'de' ? 'Herunterladen' : 'Download'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>{lang === 'de' ? 'Herunterladen' : 'Download'}</span>
            </a>
            <button
              onClick={onClose}
              className="pdf-viewer-btn pdf-viewer-btn--close"
              aria-label={lang === 'de' ? 'Schließen' : 'Close'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div className="pdf-viewer-body">
          {isCertificate ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h4>
              <p style={{ marginBottom: '2rem', maxWidth: '400px', lineHeight: '1.5' }}>
                {lang === 'de' 
                  ? 'Dieses Dokument wird nicht direkt im Browser angezeigt. Sie können es stattdessen hier herunterladen.' 
                  : 'This document is not displayed directly in the browser. You can download it securely here.'}
              </p>
              <a
                href={url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {lang === 'de' ? 'Jetzt herunterladen' : 'Download now'}
              </a>
            </div>
          ) : (
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              title={title || 'Document'}
              style={{ border: 'none', background: '#0e0e11' }}
            />
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default PdfViewerModal
