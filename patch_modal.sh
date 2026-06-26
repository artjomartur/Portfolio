sed -i '' 's/if (!activeProject) return null;/const previousProject = React.useRef(activeProject);\n  React.useEffect(() => {\n    if (activeProject) previousProject.current = activeProject;\n  }, [activeProject]);\n  const projectToRender = activeProject || previousProject.current;\n\n  if (!projectToRender) return null;/' src/components/ProjectModal.jsx

sed -i '' 's/activeProject\./projectToRender\./g' src/components/ProjectModal.jsx
sed -i '' 's/activeProject,/projectToRender,/g' src/components/ProjectModal.jsx
sed -i '' 's/{activeProject}/{projectToRender}/g' src/components/ProjectModal.jsx
sed -i '' 's/activeProject?.id/projectToRender?.id/g' src/components/ProjectModal.jsx

# Fix the refs where activeProject should be used
sed -i '' 's/const projectToRender = projectToRender ||/const projectToRender = activeProject ||/' src/components/ProjectModal.jsx
sed -i '' 's/const previousProject = React.useRef(projectToRender);/const previousProject = React.useRef(activeProject);/' src/components/ProjectModal.jsx
sed -i '' 's/if (projectToRender) previousProject.current = projectToRender;/if (activeProject) previousProject.current = activeProject;/' src/components/ProjectModal.jsx
sed -i '' 's/}, \[projectToRender\]);/}, [activeProject]);/' src/components/ProjectModal.jsx
sed -i '' 's/const projectToRender = useStore((state) => state.activeProject);/const activeProject = useStore((state) => state.activeProject);/' src/components/ProjectModal.jsx
