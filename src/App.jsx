import React, { useState, useEffect, useMemo, Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'
import { sfx } from './sfx'
import { useCursor } from './useCursor'
import CommandPalette from './components/CommandPalette'
import CodeShowcase from './components/CodeShowcase'
import { useKonamiCode } from './hooks/useKonamiCode'
import { Toaster, toast } from 'react-hot-toast'
import { playClickSound, playSuccessSound } from './utils/sound'
import './App.css'

// Extracted Sections & Components
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'

const TestimonialsSection = React.lazy(() => import('./sections/TestimonialsSection'))
const SocialHubSection = React.lazy(() => import('./sections/SocialHubSection'))
const ContactSection = React.lazy(() => import('./sections/ContactSection'))
const ProjectModal = React.lazy(() => import('./components/ProjectModal'))
import { SunIcon, MoonIcon } from './components/Icons'
import SplitFlapText from './SplitFlapText'

// Existing Lazy Components
const Chatbot = React.lazy(() => import('./Chatbot'))
const CVSection = React.lazy(() => import('./CVSection'))
const TechMarquee = React.lazy(() => import('./TechMarquee'))
const InteractiveSkills = React.lazy(() => import('./InteractiveSkills'))
const GitHubActivity = React.lazy(() => import('./GitHubActivity'))
const PdfViewerModal = React.lazy(() => import('./components/PdfViewerModal'))
const GitPathAnimation = React.lazy(() => import('./components/GitPathAnimation'))

const PongEasterEgg = React.lazy(() => import('./PongEasterEgg'))
const OsuEasterEgg = React.lazy(() => import('./OsuEasterEgg'))
const PopcornEasterEgg = React.lazy(() => import('./PopcornEasterEgg'))
const TechMemoryEasterEgg = React.lazy(() => import('./TechMemoryEasterEgg'))
const ArcadeRainEasterEgg = React.lazy(() => import('./ArcadeRainEasterEgg'))
const AtossSyncAnimation = React.lazy(() => import('./components/AtossSyncAnimation'))
const OliEasterEgg = React.lazy(() => import('./OliEasterEgg'))
const StickFigureFollower = React.lazy(() => import('./StickFigureFollower'))
const MatrixRain = React.lazy(() => import('./components/MatrixRain').catch(() => {
  return { default: () => null } // Stub if MatrixRain doesn't exist
}))

import { PROJECTS, TIMELINE, NAV_ITEMS, ITEMS } from './data/constants'

function App() {
  const { scrollYProgress } = useScroll()
  const isKonamiCodeActive = useKonamiCode()
  const [showOliVideo, setShowOliVideo] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeProject, setActiveProject] = useState(null)
  const [showGame, setShowGame] = useState(true)
  const [isPongActive, setIsPongActive] = useState(false)
  const [isMemoryActive, setIsMemoryActive] = useState(false)
  const [isCvView, setIsCvView] = useState(
    typeof window !== 'undefined' && window.location.hash === '#cv'
  )
  const projectTitles = useMemo(() => PROJECTS.map((p) => p.title), [])

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    )
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const projectId = urlParams.get('project')
      if (projectId) {
        const foundProject = ITEMS.find(p => p.id === projectId)
        if (foundProject) {
          setActiveProject(foundProject)
        }
      }
    }
  }, [])

  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'de'
    return localStorage.getItem('lang') || 'de'
  })
  const [primaryFilter, setPrimaryFilter] = useState('all')
  const [projectFilter, setProjectFilter] = useState('All')

  const dynamicTags = useMemo(() => {
    const items = ITEMS.filter(item => primaryFilter === 'all' || item.type === primaryFilter)
    const tags = new Set()
    items.forEach(item => {
      item.details.tags?.forEach(tag => tags.add(tag))
    })
    return ['All', ...Array.from(tags)]
  }, [primaryFilter])

  useEffect(() => {
    if (!dynamicTags.includes(projectFilter)) {
      setProjectFilter('All')
    }
  }, [dynamicTags, projectFilter])

  const [showAllProjects, setShowAllProjects] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { mouse, smoothMouse, isHovering, isVisible, handleHover, handleLeave } = useCursor()

  const [formStatus, setFormStatus] = useState(null) // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [themeWave, setThemeWave] = useState({ x: 0, y: 0, active: false, targetTheme: 'dark' })
  const [activePdfUrl, setActivePdfUrl] = useState(null)
  const [activePdfTitle, setActivePdfTitle] = useState('')

  const [gitStats, setGitStats] = useState({})

  useEffect(() => {
    const repos = {
      'exercube': 'serious-games-darmstadt/SS25-P21-ExerCube',
      'arcadesuite': 'artjomartur/ArcadeSuite',
      'portfolio': 'artjomartur/portfolio',
      'atoss-sync': 'artjomartur/atoss-sync'
    }

    const fetchStats = async () => {
      const cacheKey = 'portfolio-github-stats-cache'
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < 7200000) {
            setGitStats(data)
            return
          }
        } catch (e) { }
      }

      const results = {}
      for (const [key, repoPath] of Object.entries(repos)) {
        try {
          const res = await fetch(`https://api.github.com/repos/${repoPath}`)
          if (res.ok) {
            const json = await res.json()
            results[key] = {
              stars: json.stargazers_count,
              updatedAt: new Date(json.pushed_at).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
              })
            }
          }
        } catch (err) {}
      }

      if (Object.keys(results).length > 0) {
        setGitStats(results)
        localStorage.setItem(cacheKey, JSON.stringify({ data: results, timestamp: Date.now() }))
      }
    }

    fetchStats()
  }, [lang])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.lang = lang
    const title = lang === 'de' ? 'Artjom Becker | Informatik-Portfolio' : 'Artjom Becker | Computer Science Portfolio'
    const description = lang === 'de' ? 'Informatik-Portfolio von Artjom Becker: Projekte, Case Studies, Teamleitung und Kontakt.' : 'Computer science portfolio by Artjom Becker: projects, case studies, team leadership, and contact.'

    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)
  }, [lang])

  useEffect(() => {
    const key = `portfolio-view-count-${new Date().toISOString().slice(0, 10)}`
    const views = Number(localStorage.getItem(key) || '0') + 1
    localStorage.setItem(key, String(views))
  }, [])

  const trackEvent = (name, payload = {}) => {
    const item = { name, payload, ts: Date.now() }
    const events = JSON.parse(localStorage.getItem('portfolio-events') || '[]')
    events.push(item)
    localStorage.setItem('portfolio-events', JSON.stringify(events.slice(-60)))
  }

  const handleViewPdf = (url, title) => {
    setActivePdfUrl(url)
    setActivePdfTitle(title)
    trackEvent('pdf_view', { url, title })
  }

  const filteredProjects = useMemo(() => {
    return ITEMS.filter((item) => {
      const matchesType = primaryFilter === 'all' || item.type === primaryFilter;
      const matchesTag = projectFilter === 'All' || item.details.tags?.includes(projectFilter);
      return matchesType && matchesTag;
    });
  }, [primaryFilter, projectFilter]);

  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4)
  const hasMoreProjects = filteredProjects.length > 4

  const toggleTheme = (e) => {
    playClickSound()
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const x = e?.clientX || window.innerWidth / 2
    const y = e?.clientY || window.innerHeight / 2
    setThemeWave({ x, y, active: true, targetTheme: nextTheme })
  }

  const handleWaveEnd = () => {
    setTheme(themeWave.targetTheme)
    setThemeWave(prev => ({ ...prev, active: false }))
  }

  const toggleLang = () => setLang((l) => (l === 'de' ? 'en' : 'de'))

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 20)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      } else if (activeProject) {
        if (e.key === 'ArrowLeft') {
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
          if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + ITEMS.length) % ITEMS.length
            setActiveProject(ITEMS[prevIndex])
          }
        } else if (e.key === 'ArrowRight') {
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
          if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % ITEMS.length
            setActiveProject(ITEMS[nextIndex])
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProject])

  useEffect(() => {
    const onHashChange = () => setIsCvView(window.location.hash === '#cv')
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'timeline', 'projects', 'testimonials', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id)
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isCvView])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const [hasPointer, setHasPointer] = useState(false)
  useEffect(() => {
    const check = () => {
      const fine = window.matchMedia('(pointer: fine)').matches
      setHasPointer(fine)
      if (fine) document.body.classList.add('custom-cursor')
    }
    check()
    return () => document.body.classList.remove('custom-cursor')
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(e.target)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(lang === 'de' ? 'Nachricht erfolgreich gesendet!' : 'Message sent successfully!')
        playSuccessSound()
        e.target.reset()
        setFormStatus('success')
      } else {
        toast.error(result.message || 'Fehler beim Senden.')
        setFormStatus('error')
      }
    } catch (error) {
      console.error(error)
      toast.error('Es gab einen Fehler.')
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const [isMatrixActive, setIsMatrixActive] = useState(false)
  const [isFollowActive, setIsFollowActive] = useState(false)
  const [isShakeActive, setIsShakeActive] = useState(false)
  const [isDestructionActive, setIsDestructionActive] = useState(false)
  const [destructionProgress, setDestructionProgress] = useState(0)
  const [destructionLogs, setDestructionLogs] = useState([])

  useEffect(() => {
    if (isKonamiCodeActive) {
      setIsMatrixActive(true)
      sfx.playArcadeSuiteOpen()
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [isKonamiCodeActive])

  useEffect(() => {
    if (isShakeActive) {
      document.body.classList.add('shake-active-body')
    } else {
      document.body.classList.remove('shake-active-body')
    }
  }, [isShakeActive])

  const handleCardMouseMove = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xc = rect.width / 2
    const yc = rect.height / 2
    const rotateX = ((yc - y) / yc) * 12
    const rotateY = ((x - xc) / xc) * 12
    el.style.setProperty('--rx', `${rotateX}deg`)
    el.style.setProperty('--ry', `${rotateY}deg`)
  }

  const handleCardMouseLeave = (e) => {
    const el = e.currentTarget
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    handleLeave()
  }

  const triggerShake = () => {
    setIsShakeActive(true)
    trackEvent('terminal_shake')
    setTimeout(() => {
      setIsShakeActive(false)
    }, 1000)
  }

  const triggerMatrix = () => {
    setIsMatrixActive(prev => {
      const next = !prev
      trackEvent('terminal_matrix', { active: next })
      return next
    })
  }

  const triggerFollow = () => {
    setIsFollowActive(prev => {
      const next = !prev
      trackEvent('terminal_follow', { active: next })
      return next
    })
  }

  const triggerDestruction = () => {
    setIsDestructionActive(true)
    setDestructionProgress(0)
    setDestructionLogs([
      'WARNING: UNAUTHORIZED ROOT ACCESS GRANTED.',
      'Executing command: rm -rf /'
    ])
    trackEvent('terminal_destruction')

    const fileList = [
      'Deleting /src/App.jsx ... OK',
      'Deleting /src/Terminal.jsx ... OK',
      'Deleting /src/InteractiveSkills.jsx ... OK',
      'Deleting /public/Cyberquest.pdf ... OK',
      'Deleting /public/exinpa_zeugnis.pdf ... OK',
      'Deleting /public/dm_zeugnis.pdf ... OK',
      'Deleting database bindings ... OK',
      'Deleting styles & variables ... OK',
      'Clearing memory blocks ... OK',
      'SYSTEM CRITICAL WARNING: NO OS FOUND.'
    ]

    let progress = 0
    let logIndex = 0
    const interval = setInterval(() => {
      progress += 10
      setDestructionProgress(progress)
      
      if (logIndex < fileList.length) {
        setDestructionLogs(prev => [...prev, fileList[logIndex]])
        logIndex++
      }

      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setDestructionLogs(prev => [...prev, 'REBOOTING SYSTEM...', 'Restoring assets from backup...', 'Success!'])
          setTimeout(() => {
            setIsDestructionActive(false)
            setDestructionLogs([])
            setDestructionProgress(0)
          }, 1500)
        }, 2500)
      }
    }, 400)
  }

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--bg-section)', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '12px' } }} />
      <motion.div className="scroll-progress-bar" style={{ scaleX: scrollYProgress }} />
      <CommandPalette 
        lang={lang} 
        toggleTheme={toggleTheme} 
        onViewPdf={(url, title) => {
          setActivePdfUrl(url)
          setActivePdfTitle(title)
        }} 
      />
      {themeWave.active && (
        <div 
          className={`theme-wave theme-wave--${themeWave.targetTheme}`} 
          style={{ left: themeWave.x, top: themeWave.y }}
          onAnimationEnd={handleWaveEnd}
        />
      )}
      
      {/* Easter Eggs */}
      <Suspense fallback={null}>
        {isMatrixActive && <MatrixRain onClose={() => setIsMatrixActive(false)} />}
        {isFollowActive && <StickFigureFollower onClose={() => setIsFollowActive(false)} />}
        {isPongActive && <PongEasterEgg lang={lang} onClose={() => setIsPongActive(false)} />}
        {isMemoryActive && <TechMemoryEasterEgg lang={lang} onClose={() => setIsMemoryActive(false)} />}
      </Suspense>

      {isDestructionActive && (
        <div className="destruction-overlay">
          <div className="destruction-content">
            <div className="destruction-header">SYSTEM ALERT: TERMINAL ACCESS OVERRIDE</div>
            <div className="destruction-progress-bar">
              <div className="destruction-progress-fill" style={{ width: `${destructionProgress}%` }} />
            </div>
            <div className="destruction-progress-text">{destructionProgress}% COMPLETE</div>
            <div className="destruction-logs">
              {destructionLogs.map((log, i) => (
                <div key={i} className="destruction-log-line">{log}</div>
              ))}
            </div>
            {destructionProgress >= 100 && (
              <div className="destruction-rescue">
                grub rescue&gt; <span className="blinking-cursor">_</span>
              </div>
            )}
          </div>
        </div>
      )}

      {hasPointer && (
        <div className="cursor-wrapper" aria-hidden="true">
          <motion.div
            className={`cursor-glow ${isHovering ? 'cursor-glow--hover' : ''}`}
            style={{ left: smoothMouse.x, top: smoothMouse.y, opacity: isVisible ? 1 : 0 }}
          />
          <motion.div
            className={`cursor-dot ${isHovering ? 'cursor-dot--hover' : ''}`}
            style={{ left: mouse.x, top: mouse.y, opacity: isVisible ? 1 : 0 }}
          />
        </div>
      )}

      <Suspense fallback={null}>
        <ProjectModal 
          activeProject={activeProject} 
          setActiveProject={setActiveProject} 
          lang={lang} 
          gitStats={gitStats} 
          handleViewPdf={handleViewPdf} 
          setIsPongActive={setIsPongActive} 
          setIsMemoryActive={setIsMemoryActive} 
          setShowOliVideo={setShowOliVideo} 
        />
      </Suspense>

      {/* Foreground Easter Egg animations */}
      {activeProject?.id === 'atoss-sync' && (
        <div className="atoss-sync-overlay">
          <Suspense fallback={null}><AtossSyncAnimation lang={lang} /></Suspense>
        </div>
      )}
      <Suspense fallback={null}><OliEasterEgg active={showOliVideo} /></Suspense>
      {activeProject?.id === 'exercube' && showGame && (
        <Suspense fallback={null}><OsuEasterEgg onClose={() => setShowGame(false)} /></Suspense>
      )}
      {activeProject?.id === 'kinopolis-automation' && (
        <Suspense fallback={null}><PopcornEasterEgg /></Suspense>
      )}
      {activeProject?.id === 'arcadesuite' && (
        <Suspense fallback={null}><ArcadeRainEasterEgg /></Suspense>
      )}
      {activeProject?.id === 'portfolio' && (
        <Suspense fallback={null}><GitPathAnimation /></Suspense>
      )}
      {activeProject?.id === 'skinstock' && (
        <div className="smoke-grenade-overlay">
          <div className="smoke-cloud-1" />
          <div className="smoke-cloud-2" />
          <div className="smoke-cloud-3" />
        </div>
      )}
      {activeProject?.id === 'datenschutz' && (
        <div className="security-scan-overlay">
          <div className="scanner-line" />
          <div className="security-glow" />
        </div>
      )}
      {activeProject?.id === 'serious-games' && (
        <div className="ekg-overlay">
          <svg className="ekg-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path className="ekg-path" d="M 0,50 L 120,50 L 130,40 L 140,60 L 150,15 L 160,85 L 170,45 L 180,55 L 190,50 L 400,50" />
          </svg>
        </div>
      )}
      {activeProject?.id === 'social-psychology' && (
        <div className="groupthink-table-overlay">
          <svg className="groupthink-svg" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
            <ellipse cx="210" cy="140" rx="90" ry="16" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2.5" />
            <line x1="195" y1="115" x2="195" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
            <line x1="255" y1="115" x2="255" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
            <line x1="315" y1="115" x2="315" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
            <g className="shouting-leader">
              <circle cx="80" cy="85" r="5.5" fill="none" stroke="#fe0979" strokeWidth="2.5" />
              <path d="M 76 78 L 77 76 L 79 77.5 L 80 75.5 L 81 77.5 L 83 76 L 84 78 Z" fill="#ffd700" />
              <line x1="80" y1="91" x2="80" y2="120" stroke="#fe0979" strokeWidth="2.5" />
              <line x1="80" y1="120" x2="75" y2="145" stroke="#fe0979" strokeWidth="2.5" />
              <line x1="80" y1="120" x2="85" y2="145" stroke="#fe0979" strokeWidth="2.5" />
              <line className="shouting-arm-left" x1="80" y1="96" x2="65" y2="82" stroke="#fe0979" strokeWidth="2.5" />
              <line className="shouting-arm-right" x1="80" y1="96" x2="95" y2="82" stroke="#fe0979" strokeWidth="2.5" />
            </g>
            <circle cx="80" cy="85" r="10" className="soundwave" />
            <circle cx="80" cy="85" r="10" className="soundwave sw2" />
            <circle cx="80" cy="85" r="10" className="soundwave sw3" />
            <g className="follower-seated f1">
              <circle cx="185" cy="108" r="4.5" className="nodding-head-1" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="185" y1="113" x2="185" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
              <line className="agree-arm-1" x1="185" y1="118" x2="172" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="185" y1="135" x2="172" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
            </g>
            <g className="follower-seated f2">
              <circle cx="245" cy="108" r="4.5" className="nodding-head-2" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="245" y1="113" x2="245" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
              <line className="agree-arm-2" x1="245" y1="118" x2="232" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="245" y1="135" x2="232" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
            </g>
            <g className="follower-seated f3">
              <circle cx="305" cy="108" r="4.5" className="nodding-head-3" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="305" y1="113" x2="305" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
              <line className="agree-arm-3" x1="305" y1="118" x2="292" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
              <line x1="305" y1="135" x2="292" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
            </g>
            <text x="172" y="94" className="agree-word w1" fill="#00f2fe">YES!</text>
            <text x="232" y="94" className="agree-word w2" fill="#00f2fe">AGREE!</text>
            <text x="292" y="94" className="agree-word w3" fill="#00f2fe">TRUE!</text>
            <text x="210" y="80" className="agree-word w4" fill="#00f2fe">YES!</text>
          </svg>
        </div>
      )}

      <nav className={`nav ${navScrolled ? 'nav--scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={() => setActiveSection('hero')} aria-label={lang === 'de' ? 'Zur Startseite' : 'Go to homepage'}>
          <span className="nav-logo-title">Artjom Becker</span>
          <span className="nav-logo-subtitle">{lang === 'de' ? 'Informatik' : 'Computer Science'}</span>
        </a>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={lang === 'de' ? 'Menü öffnen' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'nav-links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'nav-link-active' : ''}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false)
                  setActiveSection(item.id)
                }}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <SplitFlapText text={lang === 'de' ? item.labelDe : item.labelEn} />
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleLang}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              aria-label="Sprache wechseln"
            >
              <SplitFlapText text={lang === 'de' ? 'EN' : 'DE'} />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              aria-label={theme === 'dark' ? 'Hell-Modus aktivieren' : 'Dark-Modus aktivieren'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
      </nav>

      <main className={isCvView ? 'main-cv-only' : ''}>
        {isCvView ? (
          <Suspense fallback={null}>
            <CVSection lang={lang} onViewPdf={handleViewPdf} />
          </Suspense>
        ) : (
          <>
            <HeroSection lang={lang} theme={theme} mouse={mouse} scrollY={scrollY} />

            <AboutSection 
              lang={lang} 
              projectTitles={projectTitles} 
              handleHover={handleHover} 
              handleLeave={handleLeave} 
              triggerShake={triggerShake} 
              triggerMatrix={triggerMatrix} 
              triggerDestruction={triggerDestruction} 
              triggerFollow={triggerFollow} 
              setIsPongActive={setIsPongActive} 
            />

            <Suspense fallback={null}>
              <CodeShowcase lang={lang} />
            </Suspense>

            <Suspense fallback={null}>
              <TechMarquee lang={lang} />
            </Suspense>

            <section className="section skills-section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <Suspense fallback={null}>
                  <InteractiveSkills
                    lang={lang}
                    items={ITEMS}
                    onProjectSelect={(item) => setActiveProject(item)}
                  />
                </Suspense>
              </motion.div>
            </section>

            <section id="timeline" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Timeline' : 'Timeline'} /></h2>
                <div className="timeline">
                  {TIMELINE.map((entry) => (
                    <article key={`${entry.year}-${entry.de}`} className="timeline-item" tabIndex={0}>
                      <p className="timeline-year">{entry.year}</p>
                      <p className="timeline-text">{lang === 'de' ? entry.de : entry.en}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </section>

            <section id="github" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'GitHub Aktivität' : 'GitHub Activity'} /></h2>
                <Suspense fallback={null}>
                  <GitHubActivity lang={lang} theme={theme} />
                </Suspense>
              </motion.div>
            </section>

            <ProjectsSection 
              lang={lang} 
              primaryFilter={primaryFilter} 
              setPrimaryFilter={setPrimaryFilter} 
              projectFilter={projectFilter} 
              setProjectFilter={setProjectFilter} 
              dynamicTags={dynamicTags} 
              visibleProjects={visibleProjects} 
              hasMoreProjects={hasMoreProjects} 
              showAllProjects={showAllProjects} 
              setShowAllProjects={setShowAllProjects} 
              filteredProjects={filteredProjects} 
              gitStats={gitStats} 
              handleCardMouseMove={handleCardMouseMove} 
              handleCardMouseLeave={handleCardMouseLeave} 
              handleHover={handleHover} 
              handleLeave={handleLeave} 
              setActiveProject={setActiveProject} 
              handleViewPdf={handleViewPdf} 
              trackEvent={trackEvent} 
            />

            <Suspense fallback={null}>
              <TestimonialsSection lang={lang} handleHover={handleHover} handleLeave={handleLeave} />
            </Suspense>

            <Suspense fallback={null}>
              <SocialHubSection lang={lang} handleHover={handleHover} handleLeave={handleLeave} />
            </Suspense>

            <Suspense fallback={null}>
              <ContactSection 
                lang={lang} 
                formStatus={formStatus} 
                isSubmitting={isSubmitting} 
                handleFormSubmit={handleFormSubmit} 
                handleHover={handleHover} 
                handleLeave={handleLeave} 
              />
            </Suspense>
          </>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Artjom Becker. Designed & gebaut mit Liebe zum Detail.</p>
      </footer>

      {!isCvView && (
        <Suspense fallback={null}>
          <Chatbot lang={lang} />
        </Suspense>
      )}
      
      {activePdfUrl && (
        <Suspense fallback={null}>
          <PdfViewerModal
            url={activePdfUrl}
            title={activePdfTitle}
            onClose={() => setActivePdfUrl(null)}
            lang={lang}
          />
        </Suspense>
      )}
    </>
  )
}

export default App
