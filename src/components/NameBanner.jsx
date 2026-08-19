import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const Hero3D = React.lazy(() => import('./Hero3D'));

export default function NameBanner({ name = "Artjom Becker", theme = 'dark' }) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="namebanner-container">
      
      {/* Interactive Background */}
      <div className="namebanner-bg-interactive" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.8 }}>
        <Suspense fallback={null}>
          <Hero3D theme={theme} />
        </Suspense>
      </div>

      {/* Animated Text Lines */}
      <div className="namebanner-marquees" style={{ zIndex: 1 }}>
        <div className="namebanner-track">
          <motion.div
            initial={{ x: '250vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1] }}
            className="namebanner-center-wrapper"
          >
            <motion.div 
              className="namebanner-tail left-tail"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 3 }}
            >
              <span className="namebanner-text text-solid">{name} &nbsp;•&nbsp;&nbsp;</span>
              <span className="namebanner-text text-solid">{name} &nbsp;•&nbsp;&nbsp;</span>
              <span className="namebanner-text text-solid">{name} &nbsp;•&nbsp;&nbsp;</span>
            </motion.div>
            <span className="namebanner-text text-solid">{name}</span>
          </motion.div>
        </div>
      </div>

      {/* Foreground Content (Premium Hero Overlay) */}
      <motion.div 
        className="namebanner-overlay"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        <p className="namebanner-subtitle">{t('hero.tagline', 'Software-Entwickler. Ich baue moderne und performante Anwendungen.')}</p>
        
        <div className="hero-cta" style={{ justifyContent: 'center', marginTop: '20px' }}>
          <a 
            href="#projects" 
            className="btn" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('nav.projects', 'Projekte ansehen')}
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('nav.contact', 'Kontakt aufnehmen')}
          </a>
        </div>
      </motion.div>

    </section>
  );
}
