import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OliEasterEgg({ active }) {
  // We'll rotate through the bgless images to find the one with the ticket, 
  // or just randomly show one of them if active
  const [currentImage, setCurrentImage] = useState(5); // Default guess for ticket: Oli_5_bgless.png

  useEffect(() => {
    if (active) {
      // Pick a random image between 1 and 6
      const randomImg = Math.floor(Math.random() * 6) + 1;
      setCurrentImage(randomImg);
    }
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ y: '100%', x: '100%', rotate: 15 }}
          animate={{ y: 0, x: 0, rotate: -5 }}
          exit={{ y: '100%', x: '100%', rotate: 20 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          style={{
            position: 'fixed',
            bottom: '-20px',
            right: '20px',
            zIndex: 9999,
            pointerEvents: 'none',
            maxWidth: '350px',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
          }}
        >
          {/* We'll try Oli_5_bgless.png first. If it's not the ticket, the user will tell us */}
          <img 
            src={`/assets/Oli/Oli_${currentImage}_bgless.png`} 
            alt="Oli Mascot" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
