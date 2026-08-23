import { useState, useEffect } from 'react';

export function useRetroCode() {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let input = '';
    const secret = 'retro';
    
    const handleKeyDown = (e) => {
      // Ignore keypresses if the user is typing in an input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      input += e.key.toLowerCase();
      if (input.length > secret.length) {
        input = input.slice(input.length - secret.length);
      }
      
      if (input === secret) {
        setIsActive(prev => !prev); // Toggle
        input = ''; // Reset
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return isActive;
}
