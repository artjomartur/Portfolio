import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import heroImg from '../assets/hero.png';

export default function HeroSection({ mouse, scrollY }) {
  const { t } = useTranslation();
  const theme = useStore((state) => state.theme);

  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img 
          src={heroImg} 
          alt="Artjom Becker Hero" 
          className="hero-profile-image"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div
        className="hero-spotlight"
        style={{
          background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, var(--spotlight), transparent 45%)`,
          opacity: Math.max(0, 1 - scrollY / 400),
        }}
      />
      <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {t('hero.eyebrow')}
      </motion.p>
      <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        {t('hero.titlePrefix')}<br />
        <span className="hero-title-name">Artjom Becker.</span>
      </motion.h1>
      <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
        {t('hero.tagline')}
      </motion.p>
      <motion.div
        className="hero-scroll-indicator"
        style={{ opacity: Math.max(0, 1 - scrollY / 50) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">{t('hero.scroll')}</span>
      </motion.div>
    </section>
  );
}
