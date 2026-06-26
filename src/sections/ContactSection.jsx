import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { playSuccessSound } from '../utils/sound';
import SplitFlapText from '../SplitFlapText';

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
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
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
      </motion.div>
    </section>
  );
}
