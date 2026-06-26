const fs = require('fs');
let text = fs.readFileSync('src/App.css', 'utf8');

text = text.replace(
  '  background: rgba(20, 20, 20, 0.72);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.05);',
  '  background: var(--nav-bg);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid var(--border);'
);

// fix scrollbar for modal
text = text.replace(
  '  scrollbar-color: rgba(255, 255, 255, 0.15) transparent;',
  '  scrollbar-color: var(--scrollbar-thumb) transparent;'
);

text = text.replace(
  '  background: rgba(255, 255, 255, 0.15);',
  '  background: var(--scrollbar-thumb);'
);

text = text.replace(
  '  background: rgba(255, 255, 255, 0.3);',
  '  background: var(--scrollbar-thumb-hover);'
);

fs.writeFileSync('src/App.css', text);

let indexText = fs.readFileSync('src/index.css', 'utf8');
indexText = indexText.replace(
  '  --spotlight: rgba(0, 113, 227, 0.15);',
  '  --spotlight: rgba(0, 113, 227, 0.15);\n  --scrollbar-thumb: rgba(0, 0, 0, 0.15);\n  --scrollbar-thumb-hover: rgba(0, 0, 0, 0.3);'
);

indexText = indexText.replace(
  '  --spotlight: rgba(10, 132, 255, 0.15);',
  '  --spotlight: rgba(10, 132, 255, 0.15);\n  --scrollbar-thumb: rgba(255, 255, 255, 0.15);\n  --scrollbar-thumb-hover: rgba(255, 255, 255, 0.3);'
);

fs.writeFileSync('src/index.css', indexText);
