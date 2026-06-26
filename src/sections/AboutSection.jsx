import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import SplitFlapText from '../SplitFlapText';
import { ITEMS } from '../data/constants';

const Terminal = React.lazy(() => import('../Terminal'));

export default function AboutSection({
  projectTitles,
  handleHover,
  handleLeave,
  triggerShake,
  triggerMatrix,
  triggerDestruction,
  triggerFollow
}) {
  const { t, i18n } = useTranslation();
  const setIsPongActive = useStore((state) => state.setIsPongActive);
  const lang = i18n.language;

  return (
    <section id="about" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={t('about.title')} /></h2>
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
          {t('about.text')}
        </p>
      </motion.div>
    </section>
  );
}
