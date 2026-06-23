import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CodeShowcase({ lang = 'de' }) {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { useEffect, useState } from 'react';

/**
 * Custom React Hook to listen for Command Palette trigger (⌘K / Ctrl+K)
 * Perfect for adding a fast, keyboard-first navigation to your apps.
 */
export function useCommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return { isOpen, setIsOpen };
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section code-showcase-section">
      <motion.div 
        className="section-inner" 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="code-showcase-header-text">
          <h2 className="section-title">
            {lang === 'de' ? 'Digital Garden' : 'Digital Garden'}
          </h2>
          <p className="section-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px' }}>
            {lang === 'de' 
              ? 'Ein kleiner Einblick in meinen Code. Probier mal ⌘K (oder Strg+K) aus, um das Command Menu zu öffnen!' 
              : 'A small glimpse into my code. Try pressing ⌘K (or Ctrl+K) to open the Command Menu!'}
          </p>
        </div>

        <div className="mac-window">
          <div className="mac-titlebar">
            <div className="mac-buttons">
              <span className="mac-btn close"></span>
              <span className="mac-btn minimize"></span>
              <span className="mac-btn maximize"></span>
            </div>
            <div className="mac-title">useCommandMenu.js — Portfolio</div>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? (lang === 'de' ? 'Kopiert!' : 'Copied!') : 'Copy'}
            </button>
          </div>
          <div className="mac-content">
            <div className="code-line-numbers">
              {codeSnippet.split('\n').map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <pre className="code-block">
              <code>
                {/* Syntax Highlighting Fake */}
                <span className="keyword">import</span> {'{'} useEffect, useState {'}'} <span className="keyword">from</span> <span className="string">'react'</span>;
                {'\n\n'}
                <span className="comment">/**</span>{'\n'}
                <span className="comment"> * Custom React Hook to listen for Command Palette trigger (⌘K / Ctrl+K)</span>{'\n'}
                <span className="comment"> * Perfect for adding a fast, keyboard-first navigation to your apps.</span>{'\n'}
                <span className="comment"> */</span>{'\n'}
                <span className="keyword">export function</span> <span className="function">useCommandMenu</span>() {'{\n'}
                {'  '}<span className="keyword">const</span> [isOpen, setIsOpen] = <span className="function">useState</span>(<span className="boolean">false</span>);
                {'\n\n'}
                {'  '}<span className="function">useEffect</span>(() <span className="keyword">=&gt;</span> {'{\n'}
                {'    '}<span className="keyword">const</span> <span className="function">down</span> = (e) <span className="keyword">=&gt;</span> {'{\n'}
                {'      '}<span className="keyword">if</span> (e.key === <span className="string">'k'</span> && (e.metaKey || e.ctrlKey)) {'{\n'}
                {'        '}e.<span className="function">preventDefault</span>();{'\n'}
                {'        '}<span className="function">setIsOpen</span>((open) <span className="keyword">=&gt;</span> !open);{'\n'}
                {'      }'}{'\n'}
                {'    }'};{'\n\n'}
                {'    '}document.<span className="function">addEventListener</span>(<span className="string">'keydown'</span>, down);{'\n'}
                {'    '}<span className="keyword">return</span> () <span className="keyword">=&gt;</span> document.<span className="function">removeEventListener</span>(<span className="string">'keydown'</span>, down);{'\n'}
                {'  }'}, []);{'\n\n'}
                {'  '}<span className="keyword">return</span> {'{'} isOpen, setIsOpen {'}'};{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
