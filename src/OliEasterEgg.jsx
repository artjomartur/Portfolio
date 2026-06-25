import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OliEasterEgg({ active }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (active && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Video play failed', e));
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: '100%', x: '100%' }}
          animate={{ y: 0, x: 0 }}
          exit={{ y: '100%', x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          style={{
            position: 'fixed',
            bottom: '-20px',
            right: '20px',
            zIndex: 9999,
            pointerEvents: 'none',
            width: '400px',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
          }}
        >
          <video 
            ref={videoRef}
            src="/assets/Oli/Oli_Video.mp4" 
            autoPlay 
            muted 
            playsInline
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px' }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
