const fs = require('fs');

let text = fs.readFileSync('current_modal.jsx', 'utf8');

// 1. Add AnimatePresence import
text = text.replace("import { motion } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';");

// 2. Wrap ONLY modal-backdrop with AnimatePresence
text = text.replace(
  '<motion.div className="modal-backdrop"',
  '<AnimatePresence>\n        {activeProject && (\n          <motion.div className="modal-backdrop"'
);

// 3. Close AnimatePresence after the modal-backdrop
let lastIndex = text.lastIndexOf('</motion.div>');
text = text.substring(0, lastIndex) + '</motion.div>\n        )}\n      </AnimatePresence>' + text.substring(lastIndex + 13);

fs.writeFileSync('src/components/ProjectModal.jsx', text);
