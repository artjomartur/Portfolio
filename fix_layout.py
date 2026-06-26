import sys

with open('src/sections/ProjectsSection.jsx', 'r') as f:
    text = f.read()

text = text.replace('layoutId={`project-${project.id}`}', '')
text = text.replace('layoutId={`title-${project.id}`}', '')

with open('src/sections/ProjectsSection.jsx', 'w') as f:
    f.write(text)

with open('src/components/ProjectModal.jsx', 'r') as f:
    text = f.read()

text = text.replace('layoutId={`project-${projectToRender.id}`}', '')
text = text.replace('layoutId={`title-${projectToRender.id}`}', '')
text = text.replace('<div className="modal-backdrop" onClick={() => setActiveProject(null)}>',
                    '<motion.div className="modal-backdrop" onClick={() => setActiveProject(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>')
text = text.replace('</div>\n        <button', '</motion.div>\n        <button')
text = text.replace('initial={{ opacity: 0 }} animate={{ opacity: 1 }}', 'initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}')

with open('src/components/ProjectModal.jsx', 'w') as f:
    f.write(text)
