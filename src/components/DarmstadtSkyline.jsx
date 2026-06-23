import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function DarmstadtSkyline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ 
        position: 'absolute', 
        top: '16px', 
        right: '16px', 
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--accent)',
        fontSize: '12px',
        fontWeight: '500',
        pointerEvents: 'none', 
        zIndex: 10,
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <Building2 size={14} />
      <span>Darmstadt</span>
    </motion.div>
  );
}
