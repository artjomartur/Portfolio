import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OliEasterEgg({ active }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let animationFrameId;

    const computeFrame = () => {
      if (video.paused || video.ended) return;
      
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;
      const l = data.length / 4;

      for (let i = 0; i < l; i++) {
        let r = data[i * 4 + 0];
        let g = data[i * 4 + 1];
        let b = data[i * 4 + 2];
        
        // Advanced Greenscreen removal
        // If green dominates over red and blue
        if (g > 100 && g > r * 1.3 && g > b * 1.3) {
          data[i * 4 + 3] = 0; // Set alpha to 0
        } else {
          // Feathering/spill suppression
          if (g > r && g > b) {
            data[i * 4 + 1] = Math.max(r, b); // Desaturate green spill
          }
        }
      }
      ctx.putImageData(frame, 0, 0);
      animationFrameId = requestAnimationFrame(computeFrame);
    };

    video.addEventListener('play', computeFrame);
    video.currentTime = 0;
    video.play().catch(e => console.log('Video play failed', e));

    return () => {
      video.removeEventListener('play', computeFrame);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          style={{
            position: 'absolute',
            top: '40px',
            right: '20px',
            zIndex: 50,
            pointerEvents: 'none',
            width: '240px',
            filter: 'drop-shadow(-5px 10px 15px rgba(0,0,0,0.5))'
          }}
        >
          <video 
            ref={videoRef}
            src="/assets/Oli/Oli_Video.mp4" 
            muted 
            playsInline
            crossOrigin="anonymous"
            style={{ display: 'none' }} 
            onLoadedMetadata={() => {
              if (canvasRef.current && videoRef.current) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
              }
            }}
          />
          <canvas 
            ref={canvasRef}
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
