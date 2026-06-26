const fs = require('fs');
let text = fs.readFileSync('src/App.jsx', 'utf8');

text = text.replace(
  '<AnimatePresence>\n        {activeProject && (\n          <Suspense fallback={null}>\n            <ProjectModal />\n          </Suspense>\n        )}\n      </AnimatePresence>',
  '<Suspense fallback={null}>\n        <ProjectModal />\n      </Suspense>'
);

fs.writeFileSync('src/App.jsx', text);
