import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    id: 'topic',
    labelDe: 'Themenfindung',
    labelEn: 'Topic Selection',
    status: 'completed', // completed, active, pending
    descDe: 'Grobe Forschungsrichtung abgesteckt',
    descEn: 'General research direction established'
  },
  {
    id: 'research',
    labelDe: 'Literaturrecherche',
    labelEn: 'Literature Review',
    status: 'active',
    descDe: 'Aktuell laufende tiefgehende Analyse',
    descEn: 'Ongoing in-depth analysis'
  },
  {
    id: 'impl',
    labelDe: 'Implementierung',
    labelEn: 'Implementation',
    status: 'pending',
    descDe: 'Entwicklung des Prototyps',
    descEn: 'Development of the prototype'
  },
  {
    id: 'writing',
    labelDe: 'Ausarbeitung',
    labelEn: 'Thesis Writing',
    status: 'pending',
    descDe: 'Niederschrift der Ergebnisse',
    descEn: 'Writing down the results'
  }
];

export default function ThesisRoadmap() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="thesis-roadmap" style={{ marginTop: '32px', marginBottom: '32px' }}>
      <h4 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600', color: 'var(--text-light)' }}>
        {lang === 'de' ? 'Aktueller Fortschritt' : 'Current Progress'}
      </h4>
      
      <div className="roadmap-timeline" style={{ position: 'relative', paddingLeft: '24px' }}>
        {/* Vertical connecting line */}
        <div style={{
          position: 'absolute', left: '8px', top: '12px', bottom: '12px', width: '2px',
          background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px'
        }} />

        {steps.map((step, idx) => (
          <motion.div 
            key={step.id} 
            className={`roadmap-step ${step.status}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{ 
              position: 'relative', 
              marginBottom: idx < steps.length - 1 ? '24px' : '0',
              opacity: step.status === 'pending' ? 0.5 : 1
            }}
          >
            {/* Status dot */}
            <div style={{
              position: 'absolute',
              left: '-24px',
              top: '4px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: step.status === 'completed' ? '#10b981' : step.status === 'active' ? '#3b82f6' : '#333',
              border: '3px solid #161b22',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: step.status === 'active' ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
            }}>
              {step.status === 'completed' && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
              {step.status === 'active' && (
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
              )}
            </div>

            <div className="roadmap-step-content">
              <h5 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: step.status === 'active' ? '#60a5fa' : 'var(--text-light)' }}>
                {lang === 'de' ? step.labelDe : step.labelEn}
              </h5>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                {lang === 'de' ? step.descDe : step.descEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
