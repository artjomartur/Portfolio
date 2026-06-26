const fs = require('fs');
let text = fs.readFileSync('src/sections/ProjectsSection.jsx', 'utf8');

text = text.replace(
  '<motion.article \n              key={project.id}',
  '<motion.article \n              key={project.id} \n              layoutId={`project-container-${project.id}`}'
);

text = text.replace(
  '<h3 className="project-title">{project.title}</h3>',
  '<motion.h3 layoutId={`project-title-${project.id}`} className="project-title">{project.title}</motion.h3>'
);

fs.writeFileSync('src/sections/ProjectsSection.jsx', text);
