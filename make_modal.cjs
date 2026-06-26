const fs = require('fs');

let old = fs.readFileSync('old_modal.jsx', 'utf8');

// Replace props with hooks
old = old.replace(
  'export default function ProjectModal({\n  activeProject,\n  setActiveProject,\n  lang,\n  gitStats,\n  handleViewPdf,\n  setIsPongActive,\n  setIsMemoryActive,\n  setShowOliVideo\n}) {',
  `import { useStore } from '../store/useStore';\nimport { useTranslation } from 'react-i18next';\nimport SEO from './SEO';\n\nexport default function ProjectModal() {\n  const activeProject = useStore((state) => state.activeProject);\n  const setActiveProject = useStore((state) => state.setActiveProject);\n  const gitStats = useStore((state) => state.gitStats);\n  const setIsPongActive = useStore((state) => state.setIsPongActive);\n  const setIsMemoryActive = useStore((state) => state.setIsMemoryActive);\n  const setShowOliVideo = useStore((state) => state.setShowOliVideo);\n  const { t, i18n } = useTranslation();\n  const lang = i18n.language;\n  // handleViewPdf is not needed anymore if we just use a fallback or import it, wait, let's see how handleViewPdf was used.`
);

fs.writeFileSync('new_modal.jsx', old);
