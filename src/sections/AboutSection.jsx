import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import SplitFlapText from '../SplitFlapText';
import { ITEMS } from '../data/constants';

const Terminal = React.lazy(() => import('../Terminal'));

export default function AboutSection({
  lang,
  projectTitles,
  handleHover,
  handleLeave,
  triggerShake,
  triggerMatrix,
  triggerDestruction,
  triggerFollow,
  setIsPongActive
}) {
  return (
    <section id="about" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Über mich' : 'About me'} /></h2>
        <Suspense fallback={<div className="terminal-placeholder">Lade Terminal...</div>}>
          <Terminal
            lang={lang}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            projectTitles={projectTitles}
            items={ITEMS}
            onPlayPong={() => setIsPongActive(true)}
            onTriggerShake={triggerShake}
            onTriggerMatrix={triggerMatrix}
            onTriggerDestruction={triggerDestruction}
            onTriggerFollow={triggerFollow}
          />
        </Suspense>
        <p className="section-text section-text--mt">
          {lang === 'de'
            ? 'Ich studiere Informatik und bin fasziniert von der Verbindung zwischen Theorie und Praxis. Teamleitung im Bachelor-Praktikum, Gruppenprojekte mit Bestnote - ich liebe es, komplexe Probleme zu zerlegen und elegante Lösungen zu entwickeln.'
            : 'I study computer science and I am fascinated by connecting theory and practice. I led teams in a bachelor internship and enjoy breaking down complex problems into elegant solutions.'}
        </p>
      </motion.div>
    </section>
  );
}
