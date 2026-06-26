const fs = require('fs');
let text = fs.readFileSync('src/components/ProjectModal.jsx', 'utf8');

// Replace the last </div> with </motion.div> since it belongs to modal-backdrop
let lastIndex = text.lastIndexOf('</div>');
text = text.substring(0, lastIndex) + '</motion.div>' + text.substring(lastIndex + 6);

fs.writeFileSync('src/components/ProjectModal.jsx', text);
