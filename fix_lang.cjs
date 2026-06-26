const fs = require('fs');

function addTranslation(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add import if not present
    if (!content.includes('useTranslation')) {
        content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';");
    }
    
    // Remove lang from props
    content = content.replace(/\{ lang, /g, '{ ');
    content = content.replace(/\{ lang /g, '{ ');
    
    // Add useTranslation hook inside component
    content = content.replace(
        /export default function [^({]+(\([^)]+\)) \{/,
        match => match + '\n  const { t, i18n } = useTranslation();\n  const lang = i18n.language;'
    );
    
    fs.writeFileSync(file, content);
}

addTranslation('src/sections/TestimonialsSection.jsx');
addTranslation('src/sections/SocialHubSection.jsx');
