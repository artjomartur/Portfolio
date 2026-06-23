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
          <iframe
            src={iframeSrc}
            width="100%"
            height="100%"
            title={title || 'Document'}
            style={{ border: 'none', background: '#0e0e11' }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default PdfViewerModal
