import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, Clock, Layers, Star, FileText, Mail } from 'lucide-react';
import { useStore } from '../store/useStore';
import { playClickSound } from '../utils/sound';
import { NAV_ITEMS } from '../data/constants';
import './AppleTabBar.css';

// Map navigation items to icons
const ICONS = {
  about: User,
  timeline: Clock,
  projects: Layers,
  testimonials: Star,
  cv: FileText,
  contact: Mail
};

export default function AppleTabBar() {
  const { t } = useTranslation();
  const activeSection = useStore((state) => state.activeSection);
  const setActiveSection = useStore((state) => state.setActiveSection);

  return (
    <div className="apple-tab-bar-container">
      <div className="apple-tab-bar">
        {NAV_ITEMS.map((item) => {
          const IconComponent = ICONS[item.id];
          if (!IconComponent) return null;
          
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              className={`apple-tab-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                playClickSound();
                setActiveSection(item.id);
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label={item.id}
            >
              {isActive && (
                <motion.div
                  layoutId="apple-tab-active-pill"
                  className="apple-tab-active-bg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="apple-tab-icon-wrapper">
                <IconComponent size={20} strokeWidth={2.5} className="apple-tab-icon" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
