const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

css = css.replace(/\.osu-container \{\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 8;/g, '.osu-container {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 9999;');
css = css.replace(/\.popcorn-container \{\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 8;/g, '.popcorn-container {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 9999;');
css = css.replace(/\.atoss-sync-overlay \{\n  position: absolute;\n  inset: 0;\n  z-index: 100;/g, '.atoss-sync-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;');
css = css.replace(/\.smoke-grenade-overlay \{\n  position: absolute;\n  inset: 0;\n  z-index: 100;/g, '.smoke-grenade-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;');

fs.writeFileSync('src/App.css', css);
