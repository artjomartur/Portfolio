const fs = require('fs');

let text = fs.readFileSync('current_modal.jsx', 'utf8');

// 1. Wrap the return value with AnimatePresence
text = text.replace(
  'if (!projectToRender) return null;\n\n  return (',
  `if (!projectToRender) return null;\n\n  return (\n    <AnimatePresence>\n      {activeProject && (\n        <>`
);

// Close AnimatePresence at the bottom
let lastIndex = text.lastIndexOf('</>');
text = text.substring(0, lastIndex) + '</>\n      )}\n    </AnimatePresence>' + text.substring(lastIndex + 3);

// 2. Add AnimatePresence import
text = text.replace("import { motion } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';");

// 3. Add layoutId back to project-modal-container
text = text.replace(
  '<motion.div\n          key={projectToRender.id}\n          className="project-modal-container"',
  '<motion.div\n          key={projectToRender.id}\n          layoutId={`project-container-${projectToRender.id}`}\n          className="project-modal-container"'
);

// 4. Add layoutId to title
text = text.replace(
  '<h3 className="modal-title" id="modal-title">',
  '<motion.h3 layoutId={`project-title-${projectToRender.id}`} className="modal-title" id="modal-title">'
);
text = text.replace(
  '</h3>',
  '</motion.h3>'
);

fs.writeFileSync('src/components/ProjectModal.jsx', text);
