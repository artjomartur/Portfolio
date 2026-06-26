import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore } from '../store/useStore';
import SplitFlapText from '../SplitFlapText';

export default function ProjectsSection({
  dynamicTags,
  visibleProjects,
  hasMoreProjects,
  filteredProjects,
  handleCardMouseMove,
  handleCardMouseLeave,
  handleHover,
  handleLeave,
  handleViewPdf,
  trackEvent
}) {
  const { t } = useTranslation();
  
  const primaryFilter = useStore((state) => state.primaryFilter);
  const setPrimaryFilter = useStore((state) => state.setPrimaryFilter);
  const projectFilter = useStore((state) => state.projectFilter);
  const setProjectFilter = useStore((state) => state.setProjectFilter);
  const showAllProjects = useStore((state) => state.showAllProjects);
  const setShowAllProjects = useStore((state) => state.setShowAllProjects);
  const setActiveProject = useStore((state) => state.setActiveProject);
  const gitStats = useStore((state) => state.gitStats);

  return (
    <section id="projects" className="section">
      <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
        <h2 className="section-title"><SplitFlapText text={t('projects.title')} /></h2>
        
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
            {t('projects.filterAll')}
          </button>
          <button
            type="button"
            className={`filter-chip ${primaryFilter === 'project' ? 'filter-chip--active' : ''}`}
            onClick={() => {
              setPrimaryFilter('project');
              trackEvent('primary_filter', { type: 'project' });
            }}
          >
            {t('projects.filterProjects')}
          </button>
          <button
            type="button"
            className={`filter-chip ${primaryFilter === 'seminar' ? 'filter-chip--active' : ''}`}
            onClick={() => {
              setPrimaryFilter('seminar');
              trackEvent('primary_filter', { type: 'seminar' });
            }}
          >
            {t('projects.filterSeminars')}
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
              {filter === 'All' ? t('projects.filterAll') : filter}
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
              aria-label={`${t('projects.openProject')} ${project.title}`}
            >
              <div className="project-content">
                <div className="project-header-badges" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className={`type-badge type-badge--${project.type}`}>
                    {project.type === 'seminar'
                      ? t('projects.typeSeminar')
                      : t('projects.typeProject')}
                  </span>
                  {project.status === 'in-progress' && (
                    <div className="status-badge" style={{ marginBottom: 0 }}>
                      {t('projects.inProgress')}
                    </div>
                  )}
                </div>
                <motion.h3 className="project-title">{project.title}</motion.h3>
                <p className="project-desc">{project.short}</p>
                <div className="project-actions">
                  <button 
                    className="link link-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                  >
                    {t('projects.openDetails')}
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
                      {t('projects.paper')}
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
                            {t('projects.repo')}
                            {gitStats[project.id] && (
                              <span className="repo-stars-badge" aria-label={`${gitStats[project.id].stars} Stars`}>
                                ★ {gitStats[project.id].stars}
                              </span>
                            )}
                          </>
                        ) : t('projects.live')}
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
                        handleViewPdf(project.details.pdf, `Dokumentation - ${project.title}`);
                      }}
                    >
                      {t('projects.docs')}
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
                          handleViewPdf(project.details.slides, `Präsentation - ${project.title}`);
                        }}
                      >
                        {t('projects.slides')}
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
                        {t('projects.slides')}
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
                      {t('projects.trailer')}
                    </a>
                  )}
                </div>
                <div className="project-tags">
                  {project.details.languages?.map((language) => (
                    <span key={`${project.id}-${language}`} className="project-tag project-tag--language">
                      {t('projects.language', { lang: language })}
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
                ? t('projects.showLess')
                : t('projects.showAll', { count: filteredProjects.length })}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
