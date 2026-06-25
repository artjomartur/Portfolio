import { useState, useEffect } from 'react';

export function useOliCode() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const oliCode = ['o', 'l', 'i'];
    let index = 0;

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === oliCode[index]) {
        index++;
        if (index === oliCode.length) {
          setSuccess(true);
          index = 0;
          // Reset after a while
          setTimeout(() => setSuccess(false), 5000);
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
