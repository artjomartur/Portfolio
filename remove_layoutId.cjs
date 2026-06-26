const fs = require('fs');

let projects = fs.readFileSync('src/sections/ProjectsSection.jsx', 'utf8');
projects = projects.replace(/layoutId={`project-container-\$\{project\.id\}`}/g, '');
projects = projects.replace(/layoutId={`project-title-\$\{project\.id\}`}/g, '');
fs.writeFileSync('src/sections/ProjectsSection.jsx', projects);

let modal = fs.readFileSync('src/components/ProjectModal.jsx', 'utf8');
modal = modal.replace(/layoutId={`project-container-\$\{projectToRender\.id\}`}/g, '');
modal = modal.replace(/layoutId={`project-title-\$\{projectToRender\.id\}`}/g, '');
fs.writeFileSync('src/components/ProjectModal.jsx', modal);
