import { useState, useEffect } from 'react';

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 
      'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 
      'ArrowLeft', 'ArrowRight', 
      'b', 'a'
    ];
    let index = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[index] || e.key.toLowerCase() === konamiCode[index].toLowerCase()) {
        index++;
        if (index === konamiCode.length) {
          setSuccess(true);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return success;
}
