import React from 'react';

const TECH_LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'Unity', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', invert: true, url: 'https://unity.com/' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org/' },
  { name: 'Framer Motion', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg', invert: true, url: 'https://www.framer.com/motion/' },
  { name: 'LaTeX', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', invert: true, url: 'https://www.latex-project.org/' },
  { name: 'AppleScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg', invert: true, url: 'https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com/' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', url: 'https://www.figma.com/' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', url: 'https://firebase.google.com/' },
  { name: 'Swift', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg', url: 'https://developer.apple.com/swift/' },
  { name: 'Xcode', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg', url: 'https://developer.apple.com/xcode/' },
  { name: 'Playwright', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg', url: 'https://playwright.dev/' }
];

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper section-inner">
      <div className="tech-marquee-mask">
        <div className="tech-marquee-track">
          {/* Duplicate the logos 3 times for a seamless infinite loop */}
          {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((logo, index) => (
            <a 
              key={`${logo.name}-${index}`} 
              href={logo.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tech-marquee-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className={`tech-marquee-icon ${logo.invert ? 'invert-icon' : ''}`}
                loading="lazy" 
                decoding="async"
              />
              <span className="tech-marquee-name">{logo.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

