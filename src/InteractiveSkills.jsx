import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    level: 90,
    projectIds: ['kinopolis-automation', 'portfolio', 'skinstock'],
    color: '#f7df1e'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    level: 80,
    projectIds: ['portfolio'],
    color: '#3178c6'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    level: 85,
    projectIds: ['arcadesuite', 'atoss-sync'],
    color: '#3776ab'
  },
  {
    id: 'csharp',
    name: 'C# / Unity',
    category: 'language',
    level: 85,
    projectIds: ['exercube', 'first-aid-simulator'],
    color: '#10b981'
  },
  {
    id: 'applescript',
    name: 'AppleScript',
    category: 'language',
    level: 75,
    projectIds: ['atoss-sync'],
    color: '#ff7700'
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 90,
    projectIds: ['portfolio', 'skinstock'],
    color: '#61dafb'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 80,
    projectIds: ['kinopolis-automation'],
    color: '#339933'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'backend',
    level: 75,
    projectIds: ['kinopolis-automation'],
    color: '#00758f'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    category: 'frontend',
    level: 85,
    projectIds: ['portfolio'],
    color: '#ff0055'
  },
  {
    id: 'git',
    name: 'Git / GitHub',
    category: 'tool',
    level: 90,
    projectIds: ['kinopolis-automation', 'exercube', 'arcadesuite', 'portfolio', 'first-aid-simulator', 'skinstock', 'atoss-sync'],
    color: '#f05032'
  },
  {
    id: 'latex',
    name: 'LaTeX / Research',
    category: 'tool',
    level: 85,
    projectIds: ['datenschutz', 'serious-games'],
    color: '#008080'
  },
  {
    id: 'office',
    name: 'MS Office / 365',
    category: 'tool',
    level: 85,
    projectIds: ['social-psychology', 'serious-games', 'first-aid-simulator', 'exercube', 'datenschutz'],
    color: '#d83b01'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'backend',
    level: 80,
    projectIds: ['skinstock'],
    color: '#ffca28'
  }
]

function InteractiveSkills({ lang = 'de', items = [], onProjectSelect }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [connections, setConnections] = useState([])

  const containerRef = useRef(null)
  const skillRefs = useRef({})
  const projectRefs = useRef({})

  const activeSkill = hoveredSkill || selectedSkill

  // Recalculate SVG connection coordinates
  const updateConnections = () => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const newConns = []

    if (activeSkill) {
      const skillEl = skillRefs.current[activeSkill.id]
      if (skillEl) {
        const skillRect = skillEl.getBoundingClientRect()
        // Anchor coordinate at center of the skill bubble
        const x1 = (skillRect.left + skillRect.right) / 2 - containerRect.left
        const y1 = (skillRect.top + skillRect.bottom) / 2 - containerRect.top

        activeSkill.projectIds.forEach((projId) => {
          const projEl = projectRefs.current[projId]
          if (projEl) {
            const projRect = projEl.getBoundingClientRect()
            // Anchor coordinate at left edge of the project card
            const x2 = projRect.left - containerRect.left
            const y2 = (projRect.top + projRect.bottom) / 2 - containerRect.top
            newConns.push({
              x1,
              y1,
              x2,
              y2,
              color: activeSkill.color,
              id: `${activeSkill.id}-${projId}`
            })
          }
        })
      }
    } else if (hoveredProject) {
      // Find all skills connecting to this project
      const connectedSkills = SKILLS.filter(s => s.projectIds.includes(hoveredProject.id))
      const projEl = projectRefs.current[hoveredProject.id]
      if (projEl) {
        const projRect = projEl.getBoundingClientRect()
        const x2 = projRect.left - containerRect.left
        const y2 = (projRect.top + projRect.bottom) / 2 - containerRect.top

        connectedSkills.forEach((skill) => {
          const skillEl = skillRefs.current[skill.id]
          if (skillEl) {
            const skillRect = skillEl.getBoundingClientRect()
            const x1 = (skillRect.left + skillRect.right) / 2 - containerRect.left
            const y1 = (skillRect.top + skillRect.bottom) / 2 - containerRect.top
            newConns.push({
              x1,
              y1,
              x2,
              y2,
              color: skill.color,
              id: `${skill.id}-${hoveredProject.id}`
            })
          }
        })
      }
    }

    setConnections(newConns)
  }

  // Trigger recalculation on state changes or window resizing
  useEffect(() => {
    updateConnections()
    
    window.addEventListener('resize', updateConnections)
    // Small delay to allow element positions to settle after modal or tab transition renders
    const t = setTimeout(updateConnections, 100)

    return () => {
      window.removeEventListener('resize', updateConnections)
      clearTimeout(t)
    }
  }, [hoveredSkill, selectedSkill, hoveredProject, items])

  const handleSkillClick = (skill) => {
    if (selectedSkill?.id === skill.id) {
      setSelectedSkill(null)
    } else {
      setSelectedSkill(skill)
    }
  }

  const categories = {
    language: lang === 'de' ? 'Sprachen' : 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    tool: lang === 'de' ? 'Tools & Methodik' : 'Tools & Methods'
  }

  // Highlight filters for dimmed states
  const isSkillDimmed = (skillId) => {
    if (hoveredProject) {
      return !SKILLS.find(s => s.id === skillId)?.projectIds.includes(hoveredProject.id)
    }
    if (activeSkill) {
      return activeSkill.id !== skillId
    }
    return false
  }

  const isProjectDimmed = (projId) => {
    if (hoveredProject) {
      return hoveredProject.id !== projId
    }
    if (activeSkill) {
      return !activeSkill.projectIds.includes(projId)
    }
    return false
  }

  return (
    <div className="interactive-skills">
      <h3 className="skills-headline">
        {lang === 'de' ? 'Interaktive Skill-Netzwerkkarte' : 'Interactive Skill Connection Map'}
      </h3>
      <p className="skills-subtitle">
        {lang === 'de'
          ? 'Bewege den Mauszeiger über einen Skill oder ein Projekt, um das neuronale Netzwerk und die Beziehungen aufleuchten zu lassen.'
          : 'Hover over a skill or a project to see the neural network connections light up.'}
      </p>

      <div className="skills-layout-wrapper" ref={containerRef}>
        {/* SVG overlay for drawing glowing connecting lines */}
        <svg className="skills-graph-svg" aria-hidden="true">
          {connections.map((conn) => {
            // Bezier curve control points for smooth Figma-like paths
            const midX = (conn.x1 + conn.x2) / 2
            const pathData = `M ${conn.x1} ${conn.y1} C ${midX} ${conn.y1}, ${midX} ${conn.y2}, ${conn.x2} ${conn.y2}`
            return (
              <g key={conn.id}>
                {/* Background thicker glow path */}
                <path
                  d={pathData}
                  stroke={conn.color}
                  strokeWidth="4"
                  fill="none"
                  opacity="0.3"
                  style={{ filter: `drop-shadow(0 0 6px ${conn.color})` }}
                />
                {/* Foreground animated pulsed path */}
                <path
                  d={pathData}
                  stroke={conn.color}
                  strokeWidth="2.2"
                  fill="none"
                  opacity="0.95"
                  className="skills-graph-path-line"
                />
              </g>
            )
          })}
        </svg>

        {/* Left Column: Skill categories */}
        <div className="skills-column">
          {Object.entries(categories).map(([catKey, catName]) => (
            <div key={catKey} className="skills-category-group">
              <h4 className="skills-category-title">{catName}</h4>
              <div className="skills-bubbles">
                {SKILLS.filter((s) => s.category === catKey).map((skill) => {
                  const isSelected = selectedSkill?.id === skill.id
                  const isDimmed = isSkillDimmed(skill.id)

                  return (
                    <motion.button
                      key={skill.id}
                      ref={(el) => (skillRefs.current[skill.id] = el)}
                      className={`skill-bubble ${isSelected ? 'skill-bubble--active' : ''} ${isDimmed ? 'skill-bubble--dimmed' : ''}`}
                      onClick={() => handleSkillClick(skill)}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        '--skill-color': skill.color,
                        borderColor: (isSelected || hoveredSkill?.id === skill.id) ? skill.color : 'rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      <span className="skill-bubble-name">{skill.name}</span>
                      <span className="skill-bubble-level">{skill.level}%</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Mini Project Nodes */}
        <div className="projects-column">
          <h4 className="skills-category-title">{lang === 'de' ? 'Herausragende Arbeiten' : 'Featured Works'}</h4>
          <div className="skills-projects-nodes-list">
            {items.map((proj) => {
              const isDimmed = isProjectDimmed(proj.id)
              const isHighlighted = (activeSkill?.projectIds.includes(proj.id)) || hoveredProject?.id === proj.id

              return (
                <div
                  key={proj.id}
                  ref={(el) => (projectRefs.current[proj.id] = el)}
                  className={`skills-project-node ${isHighlighted ? 'skills-project-node--active' : ''} ${isDimmed ? 'skills-project-node--dimmed' : ''}`}
                  onMouseEnter={() => setHoveredProject(proj)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => onProjectSelect(proj)}
                >
                  <div className="project-node-img-wrapper">
                    <img src={proj.image} alt="" className="project-node-img" />
                  </div>
                  <div className="project-node-info">
                    <h5 className="project-node-title">{proj.title}</h5>
                    <p className="project-node-desc">{proj.short}</p>
                  </div>
                  <div className="project-node-action-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveSkills
