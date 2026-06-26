const fs = require('fs');

// 1. Fix ProjectsSection.jsx
let pSec = fs.readFileSync('src/sections/ProjectsSection.jsx', 'utf8');
pSec = pSec.replace(/layoutId=\{`project-\$\{project\.id\}`\}/g, '');
pSec = pSec.replace(/layoutId=\{`title-\$\{project\.id\}`\}/g, '');
fs.writeFileSync('src/sections/ProjectsSection.jsx', pSec);

// 2. Fix ProjectModal.jsx
let pMod = fs.readFileSync('src/components/ProjectModal.jsx', 'utf8');

// Add projectToRender handling
pMod = pMod.replace(
  'const activeProject = useStore((state) => state.activeProject);',
  `const activeProject = useStore((state) => state.activeProject);
  const previousProject = React.useRef(activeProject);
  React.useEffect(() => {
    if (activeProject) previousProject.current = activeProject;
  }, [activeProject]);
  const projectToRender = activeProject || previousProject.current;`
);

// We only replace activeProject -> projectToRender below the hook definitions.
let parts = pMod.split('const projectToRender = activeProject || previousProject.current;');
let body = parts[1];

body = body.replace(/activeProject/g, 'projectToRender');

// Fix accidental replacements of setActiveProject
body = body.replace(/setprojectToRender/g, 'setActiveProject');

// Fix animations
body = body.replace(
  '<div className="modal-backdrop" onClick={() => setActiveProject(null)}>',
  '<motion.div className="modal-backdrop" onClick={() => setActiveProject(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>'
);
body = body.replace('</div>\n      <button', '</motion.div>\n      <button');

body = body.replace(
  /layoutId=\{`project-\$\{projectToRender\.id\}`\}/g,
  'initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}'
);
body = body.replace(/layoutId=\{`title-\$\{projectToRender\.id\}`\}/g, '');

pMod = parts[0] + 'const projectToRender = activeProject || previousProject.current;' + body;

fs.writeFileSync('src/components/ProjectModal.jsx', pMod);
