import React from 'react';

const TECH_LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'Unity', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', invert: true },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Framer Motion', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
  { name: 'LaTeX', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', invert: true },
  { name: 'AppleScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg', invert: true },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' }
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper section-inner">
      <div className="tech-marquee-mask">
        <div className="tech-marquee-track">
          {/* Duplicate the logos 3 times for a seamless infinite loop */}
          {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="tech-marquee-item">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="tech-marquee-icon" 
                loading="lazy" 
                style={logo.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
              />
              <span className="tech-marquee-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

