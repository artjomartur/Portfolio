import React from 'react';
import { motion } from 'framer-motion';
import SplitFlapText from '../SplitFlapText';
import MagneticButton from '../components/MagneticButton';
import { 
  GitHubIcon, 
  LinkedInIcon, 
  WhatsAppIcon, 
  TelegramIcon, 
  InstagramIcon, 
  TikTokIcon, 
  LetterboxdIcon, 
  RedditIcon,
  ItchIoIcon
} from '../components/Icons';

export default function ContactSection({
  lang,
  formStatus,
  isSubmitting,
  handleFormSubmit,
  handleHover,
  handleLeave
}) {
  return (
    <section id="contact" className="section section--contact">
      <motion.div className="contact-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="contact-title"><SplitFlapText text={lang === 'de' ? 'Lass uns vernetzen.' : 'Let us connect.'} /></h2>
        <p className="contact-text">{lang === 'de' ? 'Ob Zusammenarbeit, Fragen zu Projekten oder einfach nur Austausch - ich freue mich über jede Nachricht.' : 'For collaboration, project questions, or just a quick exchange - I am happy to hear from you.'}</p>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          {formStatus === 'success' && (
            <div className="form-status form-status--success" role="alert">
              {lang === 'de' ? 'Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.' : 'Thank you! Your message has been sent successfully.'}
            </div>
          )}
          {formStatus === 'error' && (
            <div className="form-status form-status--error" role="alert">
              {lang === 'de' ? 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' : 'Something went wrong. Please try again later.'}
            </div>
          )}
          <div className="form-group">
            <input name="name" type="text" placeholder={lang === 'de' ? 'Dein Name' : 'Your Name'} required disabled={isSubmitting} aria-label={lang === 'de' ? 'Dein Name' : 'Your Name'} />
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder={lang === 'de' ? 'Deine E-Mail' : 'Your Email'} required disabled={isSubmitting} aria-label={lang === 'de' ? 'Deine E-Mail' : 'Your Email'} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder={lang === 'de' ? 'Deine Nachricht' : 'Your Message'} rows="5" required disabled={isSubmitting} aria-label={lang === 'de' ? 'Deine Nachricht' : 'Your Message'}></textarea>
          </div>
          <MagneticButton style={{ width: '100%' }}>
            <button type="submit" className={`btn ${isSubmitting ? 'btn--loading' : ''}`} style={{ width: '100%' }} disabled={isSubmitting}>
              {isSubmitting
                ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...')
                : (lang === 'de' ? 'Nachricht senden' : 'Send message')}
            </button>
          </MagneticButton>
        </form>

        <p className="contact-mail"><a href="mailto:hi@artjombecker.com" style={{ color: 'inherit', textDecoration: 'none' }}>hi@artjombecker.com</a></p>
        <div className="contact-links">
          <MagneticButton><a href="https://github.com/artjomartur" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub" onMouseEnter={handleHover} onMouseLeave={handleLeave}><GitHubIcon /></a></MagneticButton>
          <MagneticButton>
            <a href="https://x.com/artjombecker" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="X" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </MagneticButton>
          <MagneticButton><a href="https://artjomartur.itch.io/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Itch.io" onMouseEnter={handleHover} onMouseLeave={handleLeave}><ItchIoIcon /></a></MagneticButton>
          <MagneticButton><a href="https://www.linkedin.com/in/artjom-becker-aba5413a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn" onMouseEnter={handleHover} onMouseLeave={handleLeave}><LinkedInIcon /></a></MagneticButton>
          <MagneticButton><a href="https://wa.me/4915203322770" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="WhatsApp" onMouseEnter={handleHover} onMouseLeave={handleLeave}><WhatsAppIcon /></a></MagneticButton>
          <MagneticButton><a href="https://t.me/+4915203322770" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Telegram" onMouseEnter={handleHover} onMouseLeave={handleLeave}><TelegramIcon /></a></MagneticButton>
          <MagneticButton><a href="https://www.instagram.com/artjomartur777/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Instagram" onMouseEnter={handleHover} onMouseLeave={handleLeave}><InstagramIcon /></a></MagneticButton>
          <MagneticButton><a href="https://www.tiktok.com/@artjom0711" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="TikTok" onMouseEnter={handleHover} onMouseLeave={handleLeave}><TikTokIcon /></a></MagneticButton>
          <MagneticButton><a href="https://letterboxd.com/artjomartur/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Letterboxd" onMouseEnter={handleHover} onMouseLeave={handleLeave}><LetterboxdIcon /></a></MagneticButton>
          <MagneticButton><a href="https://www.reddit.com/user/Artuhaaa/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Reddit" onMouseEnter={handleHover} onMouseLeave={handleLeave}><RedditIcon /></a></MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
