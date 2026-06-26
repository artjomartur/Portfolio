const fs = require('fs');

let text = fs.readFileSync('src/components/ProjectModal.jsx', 'utf8');

// Strip out the bad replacements
text = text.replace(
  '    <AnimatePresence>\n      {activeProject && (\n        <>\n    <>',
  '    <>'
);
text = text.replace(
  '</>\n      )}\n    </AnimatePresence>',
  ''
);

// Now carefully wrap the backdrop and the modal container
text = text.replace(
  '<motion.div className="modal-backdrop"',
  '<AnimatePresence>\n        {activeProject && (\n          <motion.div className="modal-backdrop"'
);
text = text.replace(
  '</motion.div>\n        <button',
  '</motion.div>\n        )}\n      </AnimatePresence>\n\n      <AnimatePresence>\n        {activeProject && (\n          <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>\n            <button'
);

text = text.replace(
  '<div className="project-modal-container" onClick={(e) => e.stopPropagation()}>',
  '' // Already added above
);

let lastIndex = text.lastIndexOf('</div>');
text = text.substring(0, lastIndex) + '</div>\n        )}\n      </AnimatePresence>' + text.substring(lastIndex + 6);

fs.writeFileSync('src/components/ProjectModal.jsx', text);
