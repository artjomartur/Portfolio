const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

css = css.replace(/\.arcade-retro-screen \{\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 8;/g, '.arcade-retro-screen {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 9999;');
css = css.replace(/\.git-graph-overlay \{\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  pointer-events: none;\n  overflow: hidden;/g, '.git-graph-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  pointer-events: none;\n  overflow: hidden;');

fs.writeFileSync('src/App.css', css);
