import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

const Hero3D = React.lazy(() => import('../components/Hero3D'));

export default function HeroSection({ lang, theme, mouse, scrollY }) {
  return (
    <section id="hero" className="hero">
      <Suspense fallback={null}>
        <Hero3D theme={theme} />
      </Suspense>
      <div
        className="hero-spotlight"
        style={{
          background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, var(--spotlight), transparent 45%)`,
          opacity: Math.max(0, 1 - scrollY / 400),
        }}
      />
      <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {lang === 'de' ? 'Informatik-Student' : 'Computer Science Student'}
      </motion.p>
      <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        Hallo, ich bin<br />
        <span className="hero-title-name">Artjom Becker.</span>
      </motion.h1>
      <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
        {lang === 'de'
          ? 'Software-Entwickler. Ich baue moderne und performante Anwendungen.'
          : 'Software Developer. Building modern and high-performance applications.'}
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
        <span className="scroll-text">{lang === 'de' ? 'Scrollen' : 'Scroll'}</span>
      </motion.div>
    </section>
  );
}
