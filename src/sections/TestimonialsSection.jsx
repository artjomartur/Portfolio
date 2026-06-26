import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SplitFlapText from '../SplitFlapText';
import TestimonialLogo from '../components/TestimonialLogo';
import { TESTIMONIALS } from '../data/constants';

export default function TestimonialsSection({ handleHover, handleLeave }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <section id="testimonials" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Empfehlungen' : 'Testimonials'} /></h2>
        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee-content">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <article 
                key={idx} 
                className={`testimonial-card ${t.link ? 'testimonial-card--clickable' : ''}`}
                onMouseEnter={handleHover} 
                onMouseLeave={handleLeave}
                onClick={t.link ? () => window.open(t.link, '_blank') : undefined}
                role={t.link ? 'button' : 'article'}
                tabIndex={t.link ? 0 : undefined}
                onKeyDown={(e) => {
                  if (t.link && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    window.open(t.link, '_blank');
                  }
                }}
                aria-label={t.link ? `Testimonial von ${t.author}` : undefined}
              >
                <div className="testimonial-header-info">
                  {t.brand ? <TestimonialLogo brand={t.brand} color={t.color} /> : <div className="testimonial-avatar">{t.initials}</div>}
                  <div>
                    <h4 className="testimonial-author">{t.author}</h4>
                    <p className="testimonial-role">{lang === 'de' ? t.roleDe : t.roleEn}</p>
                  </div>
                </div>
                <p className="testimonial-quote">{lang === 'de' ? t.quoteDe : t.quoteEn}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
