import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SplitFlapText from '../SplitFlapText';

export default function SocialHubSection({ handleHover, handleLeave }) {
  const { t } = useTranslation();

  return (
    <section id="social" className="section social-section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={t('social.title')} /></h2>
        <p className="section-text">{t('social.subtitle')}</p>
        
        <div className="social-hub-grid">
          <motion.div className="social-card x-card" whileHover={{ scale: 1.02 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="social-card-header">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X (Twitter)</span>
            </div>
            <div className="social-card-body">
              <p className="tweet-text">
                {t('social.xTweet')}
              </p>
              <div className="tweet-meta">10:42 AM · 24. Mai 2024</div>
            </div>
            <a href="https://x.com/artjomartur" target="_blank" rel="noopener noreferrer" className="btn btn-secondary social-btn">
              {t('social.xShare')}
            </a>
          </motion.div>

          <motion.div className="social-card tiktok-card" whileHover={{ scale: 1.02 }} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="social-card-header">
              <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              <span>TikTok</span>
            </div>
            <div className="social-card-body tiktok-body">
              <div className="tiktok-placeholder">
                <div className="play-btn">▶</div>
                <div className="tiktok-title">{t('social.tiktokTitle')}</div>
                <div className="tiktok-caption">{t('social.tiktokCaption')}</div>
              </div>
            </div>
            <p className="tiktok-desc" style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-dim)' }}>
              {t('social.tiktokDesc')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
