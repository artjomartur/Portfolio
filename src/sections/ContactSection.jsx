import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { playSuccessSound } from '../utils/sound';
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

export default function ContactSection({ handleHover, handleLeave }) {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error'

  const contactSchema = z.object({
    name: z.string().min(2, { message: t('contact.validationName') }),
    email: z.string().email({ message: t('contact.validationEmail') }),
    message: z.string().min(10, { message: t('contact.validationMsg') }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setFormStatus(null);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(t('contact.toastSuccess'));
        playSuccessSound();
        reset();
        setFormStatus('success');
      } else {
        toast.error(result.message || t('contact.toastError'));
        setFormStatus('error');
      }
    } catch (error) {
      console.error(error);
      toast.error(t('contact.toastError'));
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={t('contact.title')} /></h2>
        <p className="section-text" style={{ marginBottom: '40px' }}>
          {t('contact.subtitle')}
        </p>

        {formStatus === 'success' && (
          <div className="form-success-msg">
            {t('contact.success')}
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="form-error-msg">
            {t('contact.error')}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className={`form-input ${errors.name ? 'form-input--error' : ''}`}
              placeholder={t('contact.namePlaceholder')}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              {...register('name')}
            />
            {errors.name && <p className="form-error">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              placeholder={t('contact.emailPlaceholder')}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              {...register('email')}
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <textarea
              className={`form-textarea ${errors.message ? 'form-input--error' : ''}`}
              placeholder={t('contact.msgPlaceholder')}
              rows={5}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              {...register('message')}
            ></textarea>
            {errors.message && <p className="form-error">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="btn btn-primary form-submit"
            disabled={isSubmitting}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {isSubmitting ? t('contact.sending') : t('contact.sendBtn')}
          </button>
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
