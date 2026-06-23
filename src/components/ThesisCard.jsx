import React from "react";
import { motion } from "framer-motion";

export const ThesisCard = ({ title, grade, description, link }) => (
  <motion.div
    className="thesis-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
  >
    <h3>{title}</h3>
    <p className="grade">Note: {grade}</p>
    <p>{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="thesis-link">
        View Full Thesis
      </a>
    )}
  </motion.div>
);
