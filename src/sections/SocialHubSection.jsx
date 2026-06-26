import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SplitFlapText from '../SplitFlapText';

export default function SocialHubSection({ handleHover, handleLeave }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <section id="social-hub" className="section section--social">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title">
          <SplitFlapText text={lang === 'de' ? 'Content & Social Hub' : 'Content & Social Hub'} />
        </h2>
        <p className="section-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
          {lang === 'de'
            ? 'Ich teile mein Wissen über Informatik und Softwareentwicklung auf X und plane kurze, lehrreiche TikToks.'
            : 'I share computer science & software engineering insights on X and plan educational short-form TikToks.'}
        </p>

        <div className="social-grid">
          {/* X / Twitter Card */}
          <article className="social-card social-card--x" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="social-card-header">
              <div className="social-card-profile">
                <div className="social-avatar social-avatar--x">AB</div>
                <div>
                  <h4 className="social-profile-name">Artjom Becker</h4>
                  <p className="social-profile-handle">@artjom_becker</p>
                </div>
              </div>
              <a
                href="https://x.com/artjombecker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-follow-x"
                style={{ textDecoration: 'none' }}
              >
                Follow
              </a>
            </div>
            <div className="social-card-body">
              <p className="tweet-text">
                {lang === 'de'
                  ? '🚀 Warum Unity das perfekte Werkzeug für Serious Games ist: Physikeffekte, C# Scripting und schnelle Iterationszyklen machen es möglich, Motivation & Lernen ideal zu verknüpfen. Ausarbeitung & Code sind in meinem Portfolio! 👇'
                  : '🚀 Why Unity is the perfect tool for Serious Games: Physics, C# scripting, and rapid iteration make it easy to combine learning & motivation. Read the full paper in my portfolio! 👇'}
              </p>
              <div className="tweet-media-placeholder">
                <div className="tweet-media-overlay">
                  <span>Serious Games Hub</span>
                </div>
              </div>
            </div>
            <div className="social-card-footer">
              <a
                href="https://twitter.com/intent/tweet?text=Schau%20dir%20das%20Informatik-Portfolio%20von%20Artjom%20Becker%20an!%20%F0%9F%9A%80%20https%3A%2F%2Fartjombecker.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-share-x"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                {lang === 'de' ? 'Auf X teilen' : 'Share on X'}
              </a>
            </div>
          </article>

          {/* TikTok Card */}
          <article className="social-card social-card--tiktok" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="mockphone-wrapper">
              <div className="mockphone">
                <div className="mockphone-screen">
                  <div className="tiktok-video-sim">
                    <div className="tiktok-overlay">
                      <div className="tiktok-sidebar">
                        <div className="tiktok-icon-group">❤️ <span>1.2k</span></div>
                        <div className="tiktok-icon-group">💬 <span>84</span></div>
                        <div className="tiktok-icon-group">⭐ <span>241</span></div>
                        <div className="tiktok-icon-group">↪️ <span>48</span></div>
                      </div>
                      <div className="tiktok-info">
                        <p className="tiktok-handle">@artjom0711</p>
                        <p className="tiktok-caption">
                          {lang === 'de'
                            ? 'Wie man eine Note 1.0 im Bachelor-Praktikum holt! 🎓💡 #informatik #tudarmstadt #uni'
                            : 'How to get a 1.0 grade in your bachelor internship! 🎓💡 #compsci #tudarmstadt #university'}
                        </p>
                      </div>
                    </div>
                    <div className="tiktok-waves">
                      <span className="wave-bar"></span>
                      <span className="wave-bar"></span>
                      <span className="wave-bar"></span>
                      <span className="wave-bar"></span>
                      <span className="wave-bar"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="social-card-text">
              <h4 className="tiktok-title">
                Informatik auf TikTok 🎬
              </h4>
              <p className="tiktok-desc">
                {lang === 'de'
                  ? 'In Zukunft plane ich kurze, packende Kurzvideos zu komplexen Tech-Themen. Folge mir gerne für künftige Updates!'
                  : 'I plan to release quick, high-energy tech videos explaining complex coding concepts. Follow me for updates!'}
              </p>
              <a
                href="https://www.tiktok.com/@artjom0711"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tiktok-follow"
              >
                @artjom0711
              </a>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}
