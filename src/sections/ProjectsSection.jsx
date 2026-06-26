import React from 'react';
import { motion } from 'framer-motion';
import SplitFlapText from '../SplitFlapText';

export default function ProjectsSection({
  lang,
  primaryFilter,
  setPrimaryFilter,
  projectFilter,
  setProjectFilter,
  dynamicTags,
  visibleProjects,
  hasMoreProjects,
  showAllProjects,
  setShowAllProjects,
  filteredProjects,
  gitStats,
  handleCardMouseMove,
  handleCardMouseLeave,
  handleHover,
  handleLeave,
  setActiveProject,
  handleViewPdf,
  trackEvent
}) {
  return (
    <section id="projects" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Ausgewählte Projekte & Seminare' : 'Selected Projects & Seminars'} /></h2>
        
        {/* Primary Filter row */}
        <div className="primary-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
          <button
            type="button"
            className={`filter-chip ${primaryFilter === 'all' ? 'filter-chip--active' : ''}`}
            onClick={() => {
              setPrimaryFilter('all');
              trackEvent('primary_filter', { type: 'all' });
            }}
          >
            {lang === 'de' ? 'Alle' : 'All'}
          </button>
          <button
            type="button"
            className={`filter-chip ${primaryFilter === 'project' ? 'filter-chip--active' : ''}`}
            onClick={() => {
              setPrimaryFilter('project');
              trackEvent('primary_filter', { type: 'project' });
            }}
          >
            {lang === 'de' ? 'Projekte' : 'Projects'}
          </button>
          <button
            type="button"
            className={`filter-chip ${primaryFilter === 'seminar' ? 'filter-chip--active' : ''}`}
            onClick={() => {
              setPrimaryFilter('seminar');
              trackEvent('primary_filter', { type: 'seminar' });
            }}
          >
            {lang === 'de' ? 'Seminare' : 'Seminars'}
          </button>
        </div>

        {/* Secondary Filter row */}
        <div className="project-filters" style={{ marginBottom: '32px' }}>
          {dynamicTags.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-chip ${projectFilter === filter ? 'filter-chip--active' : ''}`}
              onClick={() => {
                setProjectFilter(filter);
                trackEvent('project_filter', { filter });
              }}
            >
              {filter === 'All' ? (lang === 'de' ? 'Alle' : 'All') : filter}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {visibleProjects.map((project, i) => (
            <motion.article 
              key={project.id} 
              className="project" 
              style={{ cursor: 'pointer' }}
              onMouseMove={handleCardMouseMove} 
              onMouseLeave={handleCardMouseLeave} 
              onMouseEnter={handleHover}
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              aria-label={`${lang === 'de' ? 'Projekt öffnen:' : 'Open project:'} ${project.title}`}
            >
              <div className="project-content">
                <div className="project-header-badges" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className={`type-badge type-badge--${project.type}`}>
                    {project.type === 'seminar'
                      ? 'Seminar'
                      : (lang === 'de' ? 'Projekt' : 'Project')}
                  </span>
                  {project.status === 'in-progress' && (
                    <div className="status-badge" style={{ marginBottom: 0 }}>
                      {lang === 'de' ? 'In Arbeit' : 'In Progress'}
                    </div>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.short}</p>
                <div className="project-actions">
                  <button 
                    className="link link-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                  >
                    {lang === 'de' ? 'Details öffnen' : 'Open details'}
                  </button>
                  {project.type === 'seminar' ? (
                    <a 
                      href={project.details.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link project-direct" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {lang === 'de' ? 'Ausarbeitung ↗' : 'Paper ↗'}
                    </a>
                  ) : (
                    project.details.link.startsWith('http') && (
                      <a 
                        href={project.details.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link project-direct" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.details.link.includes('github.com') ? (
                          <>
                            Repo ↗
                            {gitStats[project.id] && (
                              <span className="repo-stars-badge" aria-label={`${gitStats[project.id].stars} Stars`}>
                                ★ {gitStats[project.id].stars}
                              </span>
                            )}
                          </>
                        ) : 'Live ↗'}
                      </a>
                    )
                  )}
                  {project.details.pdf && (
                    <button 
                      type="button"
                      className="link project-direct" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewPdf(project.details.pdf, lang === 'de' ? `Dokumentation - ${project.title}` : `Documentation - ${project.title}`);
                      }}
                    >
                      {lang === 'de' ? 'Doku ↗' : 'Docs ↗'}
                    </button>
                  )}
                  {project.details.slides && (
                    (project.details.slides.endsWith('.pdf') || project.details.slides.endsWith('.pptx')) ? (
                      <button 
                        type="button"
                        className="link project-direct" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewPdf(project.details.slides, lang === 'de' ? `Präsentationsfolien - ${project.title}` : `Presentation Slides - ${project.title}`);
                        }}
                      >
                        {lang === 'de' ? 'Folien ↗' : 'Slides ↗'}
                      </button>
                    ) : (
                      <a 
                        href={project.details.slides} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link project-direct" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {lang === 'de' ? 'Folien ↗' : 'Slides ↗'}
                      </a>
                    )
                  )}
                  {project.details.trailer && (
                    <a 
                      href={project.details.trailer} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="link project-direct"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Trailer ↗
                    </a>
                  )}
                </div>
                <div className="project-tags">
                  {project.details.languages?.map((language) => (
                    <span key={`${project.id}-${language}`} className="project-tag project-tag--language">
                      {lang === 'de' ? `Sprache: ${language}` : `Language: ${language}`}
                    </span>
                  ))}
                  {project.details.tags?.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="projects-more">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowAllProjects(!showAllProjects);
                trackEvent('project_toggle', { state: !showAllProjects });
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              {showAllProjects
                ? (lang === 'de' ? 'Weniger anzeigen' : 'Show less')
                : (lang === 'de' ? `Alle anzeigen (${filteredProjects.length})` : `Show all (${filteredProjects.length})`)}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
