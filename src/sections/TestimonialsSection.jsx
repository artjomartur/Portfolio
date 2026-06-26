import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SplitFlapText from '../SplitFlapText';

export default function TestimonialsSection({ handleHover, handleLeave }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const testimonials = [
    {
      author: 'A. Eberhardt',
      roleDe: 'Dozent',
      roleEn: 'Lecturer',
      textDe: 'Ihre Gruppe hat das bestmögliche Ergebnis für das gesamte Praktikum erzielt... herausragende Leistung im C/C++ Praktikum!',
      textEn: 'Your group achieved the best possible result for the entire internship... outstanding performance in the C/C++ lab!',
      initials: 'AE'
    },
    {
      author: 'Prof. Dr. Stefan Göbel',
      roleDe: 'Leitung Serious Games',
      roleEn: 'Head of Serious Games',
      textDe: 'Sie waren die beste Gruppe im letzten Semester. Ihr ExerCube Spiel "CyberQuest" wurde sogar zur Ausstellung im Foyer des Fachbereichs ausgewählt.',
      textEn: 'You were the best group last semester. Your ExerCube game "CyberQuest" was even selected for exhibition in the department foyer.',
      initials: 'SG'
    }
  ];

  return (
    <section id="testimonials" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={t('testimonials.title')} /></h2>
        <div className="testimonials-grid">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={testi.author} 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              tabIndex={0}
              aria-label={t('testimonials.ariaLabel', { author: testi.author })}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testi.initials}</div>
                <div>
                  <div className="testimonial-author">{testi.author}</div>
                  <div className="testimonial-role">{lang === 'de' ? testi.roleDe : testi.roleEn}</div>
                </div>
              </div>
              <p className="testimonial-text">"{lang === 'de' ? testi.textDe : testi.textEn}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
