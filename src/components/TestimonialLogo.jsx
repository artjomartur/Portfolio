import React from 'react';

export default function TestimonialLogo({ brand, color }) {
  const style = {
    background: '#ffffff',
    borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }

  switch (brand) {
    case 'kinopolis':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/kinopolis.png" 
            alt="Kinopolis" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'tud':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/tud.svg" 
            alt="TU Darmstadt" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'dm':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/dm.svg" 
            alt="dm-drogerie markt" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'exinpa':
      return (
        <div className="testimonial-avatar" style={{ ...style, background: '#0b1329' }}>
          <img 
            src="/projects/exinpa.png" 
            alt="exinpa" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'rewe':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/rewe.svg" 
            alt="REWE" 
            style={{ width: '95%', height: '95%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'aramark':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/aramark.svg" 
            alt="Aramark" 
            style={{ width: '95%', height: '95%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'tgs':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/tgs.svg" 
            alt="TGS Bornheim" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    default:
      return null
  }
}

