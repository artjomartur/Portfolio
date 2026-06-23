import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function CertificateEasterEgg() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 10, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 10, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ 
        position: 'absolute', 
        top: '50%', 
        right: '90px', 
        marginTop: '-12px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 8px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--accent)',
        fontSize: '11px',
        fontWeight: '500',
        pointerEvents: 'none', 
        zIndex: 10,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Award size={12} />
      </motion.div>
      <span>Verified</span>
    </motion.div>
  );
}
