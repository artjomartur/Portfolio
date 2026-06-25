import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'
import { sfx } from './sfx'
import { useCursor } from './useCursor'
import Chatbot from './Chatbot'
import CVSection from './CVSection'
import TechMarquee from './TechMarquee'
import GitHubActivity from './GitHubActivity'
import GitPathAnimation from './components/GitPathAnimation'
import InteractiveSkills from './InteractiveSkills'
import SplitFlapText from './SplitFlapText'
import StickFigureFollower from './StickFigureFollower'
import PdfViewerModal from './components/PdfViewerModal'
import CommandPalette from './components/CommandPalette'
import CodeShowcase from './components/CodeShowcase'
import { useKonamiCode } from './hooks/useKonamiCode'
import { Toaster, toast } from 'react-hot-toast'
import MagneticButton from './components/MagneticButton'
import { playClickSound, playSuccessSound } from './utils/sound'
import './App.css'

const Hero3D = React.lazy(() => import('./components/Hero3D'))
const Terminal = React.lazy(() => import('./Terminal'))

const PongEasterEgg = React.lazy(() => import('./PongEasterEgg'))
const OsuEasterEgg = React.lazy(() => import('./OsuEasterEgg'))
const PopcornEasterEgg = React.lazy(() => import('./PopcornEasterEgg'))
const TechMemoryEasterEgg = React.lazy(() => import('./TechMemoryEasterEgg'))
const ArcadeRainEasterEgg = React.lazy(() => import('./ArcadeRainEasterEgg'))
const SoftGlowEasterEgg = React.lazy(() => import('./SoftGlowEasterEgg'))
const CsAnimation = React.lazy(() => import('./CsAnimation'))
const SkinStockApp = React.lazy(() => import('./components/SkinStockApp'))
const AtossSyncAnimation = React.lazy(() => import('./components/AtossSyncAnimation'))
const OliEasterEgg = React.lazy(() => import('./OliEasterEgg'))
const PROJECTS = [
  {
    id: 'kinopolis-automation',
    title: 'Kinopolis Automation',
    status: 'in-progress',
    short: 'Modernes Dashboard für Echtzeit-Monitoring und operative Automatisierung im Kinobetrieb.',
    image: '/kinopolis_hero.jpeg',
    images: ['/kinopolis_hero.jpeg', '/slide_final_1.png', '/slide_final_2.png', '/slide_final_3.png', '/slide_final_4.png', '/slide_final_5.png'],
    details: {
      role: 'Fullstack Developer & Automation',
      context: 'Operative Unterstützung Kinopolis',
      impact: 'Effizientere Plakatwechsel und Echtzeit-Auslastungsübersicht',
      tech: 'Vanilla JS, Node.js, Cheerio, Vite',
      languages: ['JavaScript', 'HTML', 'CSS'],
      challenge: 'Echtzeit-Scraping von komplexen Sitzplänen und intuitive Aufbereitung für das Personal.',
      solution: 'Entwicklung eines reaktionsschnellen Dashboards mit automatisierten Alerts und Standort-Management.',
      result: 'Live im Einsatz zur Unterstützung der täglichen Abläufe.',
      tags: ['Web', 'UI/UX', 'Automation'],
      link: 'https://kinopolis.artjombecker.com',
    },
  },
  {
    id: 'exercube',
    title: 'ExerCube',
    short: 'Gruppenprojekt (Note 1,0) - Serious Games, TU Darmstadt.',
    image: '/exercube_hero.webp',
    details: {
      role: 'Unity-Entwickler & UX-Designer',
      context: 'Serious Games Gruppenprojekt, TU Darmstadt',
      impact: 'Erfolgreiche Umsetzung eines Fitness-Lernspiels mit Bestnote 1,0',
      tech: 'Unity, SteamVR, C#',
      languages: ['C#'],
      challenge: 'Ein spielerisches Trainingserlebnis entwickeln, das Motivation und Bewegung verbindet.',
      solution: 'Konzeption eines klaren UX-Flows mit iterativen Tests und enger Teamabstimmung.',
      result: 'Stabiler Prototyp mit sehr gutem Feedback und Abschlussnote 1,0.',
      tags: ['Game Dev', 'Team', 'UX', 'Unity', 'SteamVR'],
      link: 'https://github.com/serious-games-darmstadt/SS25-P21-ExerCube',
      trailer: 'https://youtu.be/oTpbnMsudgs',
      pdf: '/Cyberquest.pdf',
      slides: '/SG_P21_SS_2025_Cyberquest_GoebelHorn_Folien.pdf',
    },
  },
  {
    id: 'arcadesuite',
    title: 'ArcadeSuite',
    short: 'Eigenes Bachelor-Projekt mit Agenten auf Atari-Spielen.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Teamprojekt und UX/UI Mitgestaltung',
      context: 'Bachelor-Projekt',
      impact: 'PvP, PvE, EvE und visualisierte Agentenentscheidungen',
      tech: 'Python, OC_Atari, HackAtari, ScoBots',
      languages: ['Python'],
      challenge: 'Mehrere KI-Agenten in unterschiedlichen Atari-Szenarien vergleichbar machen.',
      solution: 'Modulare Agenten-Architektur mit reproduzierbaren Evaluations-Setups und Visualisierung.',
      result: 'Saubere Benchmark-Basis fuer Experimente und Demonstrationen.',
      tags: ['AI', 'Game Dev', 'Research', 'Team', 'UX', 'UI/UX'],
      link: 'https://github.com/artjomartur/ArcadeSuite',
      hasEasterEgg: true,
      pdf: '/Project_Documentation.pdf',
      slides: '/2025-03-04_Gruppe_74_53_Slides.pdf',
    },
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    short: 'Apple-Style Portfolio mit Dark Mode und Custom Cursor.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Konzept, Design, Umsetzung',
      context: 'Persönliche Web-Präsenz',
      impact: 'Interaktives Auftreten fuer Recruiter & Projekte',
      tech: 'React, Vite, Framer Motion, Custom UI',
      languages: ['JavaScript', 'CSS'],
      challenge: 'Eine moderne Seite bauen, die persoenlich wirkt und trotzdem professionell bleibt.',
      solution: 'Apple-inspirierte UI mit klarer Struktur, Interaktion und zweisprachigem Content.',
      result: 'Recruiter-fokussiertes Portfolio mit hoher Lesbarkeit und starker Conversion.',
      tags: ['Web', 'UI/UX', 'Branding'],
      link: 'https://artjombecker.com',
    },
  },
  {
    id: 'atoss-sync',
    title: 'ATOSS Calendar Sync',
    short: 'Automatisierter Dienstplan-Sync in den Apple Calendar via Apple Mail & Python.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Sole Developer',
      context: 'Eigenständiges Automatisierungstool',
      impact: 'Dienstplanänderungen werden automatisch und verzögerungsfrei in den iOS/macOS Kalender synchronisiert.',
      tech: 'Python, AppleScript, Apple Mail, pdfplumber',
      languages: ['Python', 'AppleScript'],
      challenge: 'Komplexe Schichtdaten aus unstrukturierten ATOSS-Dienstplan-PDFs extrahieren und plattformübergreifend synchronisieren.',
      solution: 'Ein Python-Backend parst das PDF, während ein Apple Mail Rule Script (AppleScript) den Prozess bei Erhalt einer E-Mail automatisch triggert und die Events im Kalender aktualisiert.',
      result: 'Vollautomatische Synchronisation im Hintergrund ohne manuellen Aufwand.',
      tags: ['Automation', 'Python', 'macOS', 'Productivity'],
      link: 'https://github.com/artjomartur/atoss-sync',
    },
  },
  {
    id: 'first-aid-simulator',
    title: 'First Aid Simulator',
    short: 'Interaktiver Erste-Hilfe-Simulator – Serious Games Projekt.',
    image: '/first_aid_simulator_hero.webp',
    details: {
      role: 'Developer & Concept',
      context: 'Serious Games',
      impact: 'Lebensrettendes Wissen spielerisch vermitteln',
      tech: 'Unity, WebGL, C#',
      languages: ['C#'],
      challenge: 'Stressige Notsituationen realistisch und lehrreich in Pixel-Art abbilden.',
      solution: 'Kombination aus Quiz-Modulen, Rhythmus-basierten Mechaniken (CPR) und Drag-and-Drop.',
      result: 'Als spielbarer Prototyp auf itch.io veröffentlicht.',
      tags: ['Game Dev', 'Education', 'Unity'],
      link: 'https://artjomartur.itch.io/help-first-aids-simulator',
    },
  },
  {
    id: 'skinstock',
    title: 'SkinStock',
    status: 'in-progress',
    short: 'Interaktiver CS2 Skin-Portfolio-Tracker, verpackt als native App via Capacitor.',
    image: '/skinstock_hero.png',
    details: {
      role: 'Sole Developer / Single-Projekt',
      context: 'Eigenständige Mobil- & Web-App',
      impact: 'Simuliertes Trading und Echtzeit-Preisüberwachungen für CS2-Investoren',
      tech: 'React, Vite, Capacitor, TradingView Lightweight Charts, Web Audio API',
      languages: ['JavaScript', 'HTML', 'CSS'],
      challenge: 'Flüssige Candlestick-Charts und echtzeitnahe Preissimulationen auf mobilen Webviews mit nativer App-Performance.',
      solution: 'Verwendung der hochperformanten TradingView Lightweight Charts Library, Web Audio API für Sound-Trigger und native Wrapper-Optimierung mit Capacitor.',
      result: 'Das Projekt befindet sich in aktiver Entwicklung (iOS-App und Web-Demo in Arbeit).',
      tags: ['Mobile', 'Fintech', 'App Store'],
      link: 'https://skinstock.artjombecker.com',
    },
  },
]


const THESES = [
  {
    id: 'datenschutz',
    title: 'Datenschutz',
    short: 'Seminararbeit über Datenschutzkonzepte und deren Umsetzung in modernen Webprojekten.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Autor',
      context: 'Studienbegleitendes Seminar, TU',
      impact: 'Umfassende Analyse aktueller Datenschutzrichtlinien (DSGVO) und technische Implementierung',
      tech: 'Recherche, LaTeX, Analyse',
      languages: ['Deutsch'],
      tags: ['Research', 'Datenschutz', 'DSGVO', 'Seminar'],
      link: '/Datenminimierung_ArtjomBecker.pdf',
      slides: '/Datenminimierung.pdf',
      challenge: 'Komplexe rechtliche Rahmenbedingungen technisch korrekt aufbereiten.',
      solution: 'Strukturierte Analyse der DSGVO-Anforderungen mit praktischen Implementierungsbeispielen.',
      result: 'Note 2,0 – Fundierte Seminararbeit mit praxisnahem Bezug.',
    },
  },
  {
    id: 'serious-games',
    title: 'Serious Games',
    short: 'Seminararbeit über Entwicklung und Evaluation von Lernspielen für die Hochschulbildung.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Autor',
      context: 'Studienbegleitendes Seminar, TU',
      impact: 'Evaluation von Game-Design-Prinzipien im Bildungskontext',
      tech: 'Recherche, LaTeX, Game Design',
      languages: ['Deutsch'],
      tags: ['Research', 'Game Dev', 'Education', 'Seminar'],
      link: '/SG_GamesForHealth_ArtjomBecker_StefanGoebel_Final.pdf',
      slides: '/SG_GamesForHealth_ArtjomBecker_StefanGoebel_Slides.pptx',
      challenge: 'Wissenschaftlich fundierte Analyse von Serious Games im Hochschulkontext.',
      solution: 'Systematische Evaluation bestehender Ansätze und eigene Design-Empfehlungen.',
      result: 'Note 1,7 – Überzeugende Arbeit mit klarer Methodik.',
    },
  },
  {
    id: 'social-psychology',
    title: 'Sozialpsychologie - Groupthink',
    short: 'Seminarpräsentation über Irving Janis\' Theorie des Groupthink und Gruppenentscheidungsprozesse.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    details: {
      role: 'Referent',
      context: 'Seminar Sozialpsychologie, Goethe-Universität Frankfurt',
      impact: 'Detaillierte Aufbereitung von Janis\' Groupthink-Modell und historischen Fallanalysen',
      tech: 'Recherche, PowerPoint, Psychologie',
      languages: ['Deutsch'],
      tags: ['Psychology', 'Social Psychology', 'Groupthink', 'Seminar'],
      link: '/Janis_Group_Decision_Making.pptx',
      slides: '/Janis_Group_Decision_Making.pptx',
      challenge: 'Komplexe psychologische Phänomene und historische Fehlentscheidungen anschaulich erklären.',
      solution: 'Strukturierte Gegenüberstellung von Symptomen, Antezedenzbedingungen und präventiven Maßnahmen nach Irving Janis.',
      result: 'Erfolgreich gehaltene Seminarpräsentation an der Goethe-Universität.',
    },
  },
];

const ITEMS = [
  ...PROJECTS.map((p) => ({ ...p, type: 'project' })),
  ...THESES.map((t) => ({ ...t, type: 'seminar' })),
].sort((a, b) => {
  const aProgress = a.status === 'in-progress' ? 1 : 0;
  const bProgress = b.status === 'in-progress' ? 1 : 0;
  return bProgress - aProgress;
});

const TIMELINE = [
  { year: '2026', de: 'Bereit fuer den naechsten Impact - gerne mit Ihrem Unternehmen.', en: 'Ready for the next impact - ideally with your company.' },
  { year: '2026', de: 'Kinopolis Dashboard - Operative Automatisierung (Live)', en: 'Kinopolis Dashboard - Operational Automation (Live)' },
  { year: '2025', de: 'Teamleitung fuer drei Teams im Bachelor-Praktikum', en: 'Led three teams in a bachelor internship' },
  { year: '2025', de: 'ExerCube Gruppenprojekt mit Note 1,0', en: 'ExerCube group project graded 1.0' },
  { year: '2023', de: 'Start Informatik-Studium an der TU Darmstadt', en: 'Started computer science studies at TU Darmstadt' },
]

const TESTIMONIALS = [
  {
    author: 'Kinopolis Mitarbeiter',
    roleDe: 'Operativer Betrieb, Kinopolis',
    roleEn: 'Cinema Operations, Kinopolis',
    quoteDe: '„Artjoms Dashboard hat unseren Arbeitsalltag im Kino extrem vereinfacht. Die Echtzeit-Sitzpläne sparen uns täglich viel Zeit bei der operativen Planung.“',
    quoteEn: '“Artjom\'s dashboard has simplified our daily cinema operations immensely. The real-time seat maps save us so much time every day.”',
    initials: 'KM',
    brand: 'kinopolis',
    color: '#e30613'
  },
  {
    author: 'Serious Games Teammitglied',
    roleDe: 'Projektpartner, TU Darmstadt',
    roleEn: 'Project Partner, TU Darmstadt',
    quoteDe: '„Als Teamleiter hat Artjom das Projekt mit extrem viel Struktur und Fokus auf UX geführt. Das Ergebnis mit Bestnote 1,0 spricht für sich selbst!“',
    quoteEn: '“As team lead, Artjom guided the project with structure and a strong focus on UX. The resulting top grade of 1.0 speaks for itself!”',
    initials: 'SG',
    brand: 'tud',
    color: '#005b8c'
  },
  {
    author: 'Bachelor-Praktikum Supervisor',
    roleDe: 'Betreuer & Evaluator, TU Darmstadt',
    roleEn: 'Supervisor & Evaluator, TU Darmstadt',
    quoteDe: '„Herausragende Führungsqualität. Artjom hat die Koordination für drei verschiedene Teams hochprofessionell, zielgerichtet und einfühlsam übernommen. Jedes Teammitglied mit einer 1,0 und selbst mit einer 1,3 ist ein Erfolg.“',
    quoteEn: '“Outstanding leadership. Artjom handled the coordination for three different teams in a highly professional, targeted, and empathetic manner.”',
    initials: 'BP',
    brand: 'tud',
    color: '#005b8c'
  },
  {
    author: 'dm-drogerie markt',
    roleDe: 'Aushilfe (Arbeitszeugnis)',
    roleEn: 'Assistant (Reference Letter)',
    quoteDe: '„Herr Becker zeigte stets eine sehr gute Arbeitsleistung und zeichnete sich durch seine hohe Einsatzbereitschaft, Kundenorientierung und Zuverlässigkeit aus. Er erfüllte seine Aufgaben stets zu unserer vollsten Zufriedenheit.“ [Zeugnis öffnen ↗]',
    quoteEn: '“Mr. Becker always demonstrated high commitment, strong customer orientation, and reliability. He performed his duties to our fullest satisfaction.” [Open reference ↗]',
    initials: 'DM',
    link: '/dm_zeugnis.pdf',
    brand: 'dm',
    color: '#ffb81c'
  },
  {
    author: 'exinpa GmbH',
    roleDe: 'Werkstudent (Arbeitszeugnis)',
    roleEn: 'Working Student (Reference Letter)',
    quoteDe: '„Herr Becker arbeitete aufgabenbezogen und setzte sich engagiert mit den ihm übertragenen Tätigkeiten auseinander. In der Bearbeitung komplexerer Themenstellungen suchte er regelmäßig den Austausch. Wir danken ihm für seine Mitarbeit.“ [Zeugnis öffnen ↗]',
    quoteEn: '“Mr. Becker worked task-oriented and engaged himself committedly with the duties assigned to him. For complex topics, he regularly sought exchange. We thank him for his cooperation.” [Open reference ↗]',
    initials: 'EX',
    link: '/exinpa_zeugnis.pdf',
    brand: 'exinpa',
    color: '#00b4d8'
  },
  {
    author: 'TGS Bornheim',
    roleDe: 'Trainerassistent (Arbeitszeugnis)',
    roleEn: 'Assistant Coach (Reference Letter)',
    quoteDe: '„Hierbei hat Herr Becker stets verantwortungsbewusst und mit großer Zuverlässigkeit gehandelt. Er ist auf die Kinder eingegangen und konnte sie immer motivieren. Im Laufe der Zeit konnte er auch eigenständig mit den Kindern arbeiten.“ [Zeugnis öffnen ↗]',
    quoteEn: '“Mr. Becker always acted responsibly and with great reliability. He engaged with the children and was always able to motivate them. Over time, he was also able to work independently with the children.” [Open reference ↗]',
    initials: 'TB',
    link: '/tgs_bornheim_zeugnis.pdf',
    brand: 'tgs',
    color: '#e3000f'
  },
  {
    author: 'REWE',
    roleDe: 'Aushilfe',
    roleEn: 'Assistant',
    quoteDe: '„Herr Becker zeichnete sich im Marktbetrieb durch hohe Zuverlässigkeit, Teamfähigkeit und ausgeprägte Kundenorientierung aus. Er war stets flexibel einsetzbar und erledigte alle Aufgaben sehr gewissenhaft.“',
    quoteEn: '“Mr. Becker distinguished himself in store operations through high reliability, teamwork, and strong customer focus. He was always flexible and performed all duties very conscientiously.”',
    initials: 'RW',
    brand: 'rewe',
    color: '#cc0000'
  },
  {
    author: 'Aramark',
    roleDe: 'Aushilfe Gastronomie',
    roleEn: 'Catering Assistant',
    quoteDe: '„Herr Becker überzeugte bei Großveranstaltungen durch hohe Belastbarkeit, ein stets freundliches und serviceorientiertes Auftreten sowie eine verlässliche Arbeitsweise im Team.“',
    quoteEn: '“Mr. Becker convinced during major events with his high resilience, consistently friendly and service-oriented demeanor, and reliable teamwork.”',
    initials: 'AM',
    brand: 'aramark',
    color: '#e21838'
  }
]


const NAV_ITEMS = [
  { id: 'about', labelDe: 'Über mich', labelEn: 'About' },
  { id: 'timeline', labelDe: 'Timeline', labelEn: 'Timeline' },
  { id: 'projects', labelDe: 'Projekte', labelEn: 'Projects' },
  { id: 'testimonials', labelDe: 'Empfehlungen', labelEn: 'Reviews' },
  { id: 'cv', labelDe: 'CV', labelEn: 'CV' },
  { id: 'contact', labelDe: 'Kontakt', labelEn: 'Contact' },
]

const renderTestimonialLogo = (brand, color) => {
  const style = {
    background: '#ffffff',
    borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }

  switch (brand) {
    case 'kinopolis':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/kinopolis.png" 
            alt="Kinopolis" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'tud':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/tud.svg" 
            alt="TU Darmstadt" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'dm':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/dm.svg" 
            alt="dm-drogerie markt" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'exinpa':
      return (
        <div className="testimonial-avatar" style={{ ...style, background: '#0b1329' }}>
          <img 
            src="/projects/exinpa.png" 
            alt="exinpa" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'rewe':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/rewe.svg" 
            alt="REWE" 
            style={{ width: '95%', height: '95%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'aramark':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/aramark.svg" 
            alt="Aramark" 
            style={{ width: '95%', height: '95%', objectFit: 'contain' }} 
          />
        </div>
      )
    case 'tgs':
      return (
        <div className="testimonial-avatar" style={style}>
          <img 
            src="/projects/tgs.svg" 
            alt="TGS Bornheim" 
            style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
          />
        </div>
      )
    default:
      return null
  }
}

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
  const [showCaseOpener, setShowCaseOpener] = useState(false)
  const [showSkinStockApp, setShowSkinStockApp] = useState(false)
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
  const { mouse, smoothMouse, isHovering, isVisible, handleHover, handleLeave } =
    useCursor()

  // Form state
  const [formStatus, setFormStatus] = useState(null) // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeModalTab, setActiveModalTab] = useState('overview')
  const [themeWave, setThemeWave] = useState({ x: 0, y: 0, active: false, targetTheme: 'dark' })
  const [activePdfUrl, setActivePdfUrl] = useState(null)
  const [activePdfTitle, setActivePdfTitle] = useState('')

  const handleGalleryScroll = (e) => {
    if (activeProject?.id !== 'kinopolis-automation') return;
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      setShowOliVideo(true);
    }
  };

  useEffect(() => {
    if (!activeProject || activeProject.id !== 'kinopolis-automation') {
      setShowOliVideo(false);
    }
  }, [activeProject]);

  useEffect(() => {
    setShowGame(true)
    setActiveModalTab('overview')
    if (activeProject) {
      sfx.playProjectOpen(activeProject.id)
    } else {
      setShowCaseOpener(false)
      setShowSkinStockApp(false)
    }
  }, [activeProject])

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
          // 2 hours TTL
          if (Date.now() - timestamp < 7200000) {
            setGitStats(data)
            return
          }
        } catch (e) {
          // Ignore
        }
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
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })
            }
          }
        } catch (err) {
          console.error(`Error fetching stats for ${repoPath}:`, err)
        }
      }

      if (Object.keys(results).length > 0) {
        setGitStats(results)
        localStorage.setItem(cacheKey, JSON.stringify({
          data: results,
          timestamp: Date.now()
        }))
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
    const title =
      lang === 'de'
        ? 'Artjom Becker | Informatik-Portfolio'
        : 'Artjom Becker | Computer Science Portfolio'
    const description =
      lang === 'de'
        ? 'Informatik-Portfolio von Artjom Becker: Projekte, Case Studies, Teamleitung und Kontakt.'
        : 'Computer science portfolio by Artjom Becker: projects, case studies, team leadership, and contact.'

    document.title = title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDescription) ogDescription.setAttribute('content', description)
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
        setShowCaseOpener(false)
      } else if (activeProject) {
        if (e.key === 'ArrowLeft') {
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
          if (currentIndex !== -1) {
            const prevIndex = (currentIndex - 1 + ITEMS.length) % ITEMS.length
            setActiveProject(ITEMS[prevIndex])
            setActiveModalTab('overview')
          }
        } else if (e.key === 'ArrowRight') {
          const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
          if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % ITEMS.length
            setActiveProject(ITEMS[nextIndex])
            setActiveModalTab('overview')
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
      } else {
        toast.error(result.message || 'Fehler beim Senden.')
      }
    } catch (error) {
      console.error(error)
      toast.error('Es gab einen Fehler.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Easter Eggs & 3D Tilt states
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
      {isMatrixActive && <MatrixRain onClose={() => setIsMatrixActive(false)} />}
      {isFollowActive && <StickFigureFollower onClose={() => setIsFollowActive(false)} />}
      
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
        <div className="cursor-wrapper" aria-hidden>
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

      {isPongActive && <Suspense fallback={null}><PongEasterEgg lang={lang} onClose={() => setIsPongActive(false)} /></Suspense>}
      {isMemoryActive && <Suspense fallback={null}><TechMemoryEasterEgg lang={lang} onClose={() => setIsMemoryActive(false)} /></Suspense>}

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <button
            type="button"
            className="modal-nav-arrow modal-nav-arrow--prev"
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
              if (currentIndex !== -1) {
                const prevIndex = (currentIndex - 1 + ITEMS.length) % ITEMS.length
                setActiveProject(ITEMS[prevIndex])
                setActiveModalTab('overview')
              }
            }}
            aria-label={lang === 'de' ? 'Vorheriges Projekt' : 'Previous Project'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-nav-arrow-icon">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <motion.div
            key={activeProject.id}
            className={`project-modal ${activeProject.id === 'first-aid-simulator' ? 'project-modal--emergency' : ''}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeProject.id === 'first-aid-simulator' && (
              <div className="emergency-glow" />
            )}
            {activeProject.id === 'portfolio' && (
              <div className="git-graph-bg" />
            )}
            {activeProject.id === 'arcadesuite' && (
              <div className="arcade-retro-bg" />
            )}
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              ×
            </button>
            {activeProject.images ? (
              <div className="modal-image-gallery" onScroll={handleGalleryScroll}>
                {activeProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${activeProject.title} ${idx + 1}`} className="modal-image" loading="lazy" />
                ))}
              </div>
            ) : (
              <img src={activeProject.image} alt={activeProject.title} className="modal-image" loading="lazy" />
            )}
            <div className="modal-text-content">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.short}</p>

            <div className="modal-tabs">
              <button
                className={`modal-tab-btn ${activeModalTab === 'overview' ? 'modal-tab-btn--active' : ''}`}
                onClick={() => setActiveModalTab('overview')}
              >
                {lang === 'de' ? 'Übersicht' : 'Overview'}
              </button>
              <button
                className={`modal-tab-btn ${activeModalTab === 'challenge' ? 'modal-tab-btn--active' : ''}`}
                onClick={() => setActiveModalTab('challenge')}
              >
                {lang === 'de' ? 'Challenge & Lösung' : 'Challenge & Solution'}
              </button>
              <button
                className={`modal-tab-btn ${activeModalTab === 'outcome' ? 'modal-tab-btn--active' : ''}`}
                onClick={() => setActiveModalTab('outcome')}
              >
                {lang === 'de' ? 'Ergebnis & Links' : 'Outcome & Links'}
              </button>
            </div>

            <div className="modal-tab-content">
              {activeModalTab === 'overview' && (
                <motion.ul 
                  className="modal-facts"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <li><strong>{lang === 'de' ? 'Rolle' : 'Role'}:</strong> {activeProject.details.role}</li>
                  <li><strong>{lang === 'de' ? 'Kontext' : 'Context'}:</strong> {activeProject.details.context}</li>
                  <li><strong>Impact:</strong> {activeProject.details.impact}</li>
                  <li><strong>Tech:</strong> {activeProject.details.tech}</li>
                  <li>
                    <strong>{lang === 'de' ? 'Sprache(n)' : 'Language(s)'}:</strong>{' '}
                    {activeProject.details.languages?.join(', ')}
                  </li>
                  {gitStats[activeProject.id] && (
                    <li>
                      <strong>GitHub:</strong>{' '}
                      <span className="github-badge">⭐ {gitStats[activeProject.id].stars} Stars</span>
                      {' · '}
                      <span>{lang === 'de' ? 'Aktiv am' : 'Active on'} {gitStats[activeProject.id].updatedAt}</span>
                    </li>
                  )}
                </motion.ul>
              )}

              {activeModalTab === 'challenge' && (
                <motion.div 
                  className="case-study"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h4>{lang === 'de' ? 'Herausforderung' : 'The Challenge'}</h4>
                  <p>{activeProject.details.challenge}</p>
                  <h4 style={{ marginTop: '16px' }}>{lang === 'de' ? 'Lösungsweg' : 'Our Solution'}</h4>
                  <p>{activeProject.details.solution}</p>
                </motion.div>
              )}

              {activeModalTab === 'outcome' && (
                <motion.div 
                  className="case-study"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h4>{lang === 'de' ? 'Ergebnis & Impact' : 'Result & Impact'}</h4>
                  <p>{activeProject.details.result}</p>
                  
                  <div className="modal-links-group" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {/* Seminar Paper Link */}
                    {activeProject.type === 'seminar' && activeProject.details.link && (
                      (activeProject.details.link.endsWith('.pdf') || activeProject.details.link.endsWith('.pptx')) ? (
                        <button
                          type="button"
                          className="link link-button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            margin: 0,
                            color: '#60a5fa',
                            background: 'rgba(96, 165, 250, 0.08)',
                            border: '1px solid rgba(96, 165, 250, 0.25)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleViewPdf(activeProject.details.link, lang === 'de' ? `Seminararbeit - ${activeProject.title}` : `Seminar Paper - ${activeProject.title}`)}
                        >
                          📄 {lang === 'de' ? 'Ausarbeitung anzeigen ↗' : 'View Paper ↗'}
                        </button>
                      ) : (
                        <a
                          href={activeProject.details.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            margin: 0,
                            color: '#60a5fa',
                            background: 'rgba(96, 165, 250, 0.08)',
                            border: '1px solid rgba(96, 165, 250, 0.25)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.2s'
                          }}
                        >
                          📄 {lang === 'de' ? 'Ausarbeitung öffnen ↗' : 'Open Paper ↗'}
                        </a>
                      )
                    )}

                    {/* Project Live/GitHub Link */}
                    {activeProject.type === 'project' && activeProject.details.link && activeProject.details.link.startsWith('http') && (
                      <a
                        href={activeProject.details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          margin: 0,
                          color: '#60a5fa',
                          background: 'rgba(96, 165, 250, 0.08)',
                          border: '1px solid rgba(96, 165, 250, 0.25)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        {activeProject.details.link.includes('github.com') ? (
                          <>💻 {lang === 'de' ? 'Repository öffnen ↗' : 'Open Repository ↗'}</>
                        ) : (
                          <>🌐 {lang === 'de' ? 'Website öffnen ↗' : 'Open Website ↗'}</>
                        )}
                      </a>
                    )}

                    {/* PDF Documentation Link */}
                    {activeProject.details.pdf && (
                      <button
                        type="button"
                        className="link link-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          margin: 0,
                          color: '#34d399',
                          background: 'rgba(52, 211, 153, 0.08)',
                          border: '1px solid rgba(52, 211, 153, 0.25)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleViewPdf(activeProject.details.pdf, lang === 'de' ? `Dokumentation - ${activeProject.title}` : `Documentation - ${activeProject.title}`)}
                      >
                        📚 {lang === 'de' ? 'Dokumentation anzeigen ↗' : 'View Documentation ↗'}
                      </button>
                    )}

                    {/* Slides Link */}
                    {activeProject.details.slides && (
                      (activeProject.details.slides.endsWith('.pdf') || activeProject.details.slides.endsWith('.pptx')) ? (
                        <button
                          type="button"
                          className="link link-button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            margin: 0,
                            color: '#a78bfa',
                            background: 'rgba(167, 139, 250, 0.08)',
                            border: '1px solid rgba(167, 139, 250, 0.25)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleViewPdf(activeProject.details.slides, lang === 'de' ? `Präsentationsfolien - ${activeProject.title}` : `Presentation Slides - ${activeProject.title}`)}
                        >
                          📊 {lang === 'de' ? 'Folien anzeigen ↗' : 'View Slides ↗'}
                        </button>
                      ) : (
                        <a
                          href={activeProject.details.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            margin: 0,
                            color: '#a78bfa',
                            background: 'rgba(167, 139, 250, 0.08)',
                            border: '1px solid rgba(167, 139, 250, 0.25)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'all 0.2s'
                          }}
                        >
                          📊 {lang === 'de' ? 'Folien öffnen ↗' : 'Open Slides ↗'}
                        </a>
                      )
                    )}

                    {/* Trailer Link */}
                    {activeProject.details.trailer && (
                      <a
                        href={activeProject.details.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          margin: 0,
                          color: '#f87171',
                          background: 'rgba(248, 113, 113, 0.08)',
                          border: '1px solid rgba(248, 113, 113, 0.25)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                      >
                        🎬 {lang === 'de' ? 'Trailer ansehen ↗' : 'Watch Trailer ↗'}
                      </a>
                    )}

                    {/* Easter Eggs */}
                    {activeProject.details.hasEasterEgg && (
                      <button
                        className="link link-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          margin: 0,
                          color: '#fbbf24',
                          background: 'rgba(251, 191, 36, 0.08)',
                          border: '1px solid rgba(251, 191, 36, 0.25)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => {
                          setActiveProject(null)
                          setIsPongActive(true)
                        }}
                      >
                        🎮 {lang === 'de' ? 'Play Pong' : 'Play Pong'}
                      </button>
                    )}

                    {activeProject.id === 'portfolio' && (
                      <button
                        className="link link-button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          margin: 0,
                          color: '#fbbf24',
                          background: 'rgba(251, 191, 36, 0.08)',
                          border: '1px solid rgba(251, 191, 36, 0.25)',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => {
                          setActiveProject(null)
                          setIsMemoryActive(true)
                        }}
                      >
                        🎮 {lang === 'de' ? 'Play Tech Memory' : 'Play Tech Memory'}
                      </button>
                    )}
                  </div>

                  {activeProject.id === 'skinstock' && (
                    showCaseOpener || showSkinStockApp ? (
                      <div>
                        <button
                          onClick={() => {
                            setShowCaseOpener(false)
                            setShowSkinStockApp(false)
                          }}
                          className="sandbox-btn"
                          style={{
                            marginBottom: '16px',
                            width: 'auto',
                            padding: '6px 14px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid var(--border)',
                            color: 'var(--text)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                        >
                          ← {lang === 'de' ? 'Zurück' : 'Back'}
                        </button>
                        <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>Loading...</div>}>
                          {showCaseOpener ? <CsAnimation lang={lang} /> : <SkinStockApp lang={lang} />}
                        </Suspense>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => setShowCaseOpener(true)}
                          className="link link-button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            margin: 0,
                            color: '#ffae00',
                            background: 'rgba(255, 174, 0, 0.08)',
                            border: '1px solid rgba(255, 174, 0, 0.25)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          📦 {lang === 'de' ? 'Kisten-Simulator starten' : 'Launch Case Simulator'}
                        </button>
                      </div>
                    )
                  )}
                </motion.div>
              )}
            </div>
            </div>

            {/* Foreground Easter Egg animations */}
            {activeProject.id === 'atoss-sync' && (
              <div className="atoss-sync-overlay">
                <Suspense fallback={null}>
                  <AtossSyncAnimation lang={lang} />
                </Suspense>
              </div>
            )}
            <OliEasterEgg active={showOliVideo} />
            {activeProject.id === 'exercube' && showGame && (
              <Suspense fallback={null}><OsuEasterEgg onClose={() => setShowGame(false)} /></Suspense>
            )}
            {activeProject.id === 'kinopolis-automation' && (
              <Suspense fallback={null}><PopcornEasterEgg /></Suspense>
            )}
            {activeProject.id === 'arcadesuite' && (
              <Suspense fallback={null}><ArcadeRainEasterEgg /></Suspense>
            )}
            {activeProject.id === 'portfolio' && (
              <GitPathAnimation />
            )}
            {activeProject.id === 'skinstock' && (
              <div className="smoke-grenade-overlay">
                <div className="smoke-cloud-1" />
                <div className="smoke-cloud-2" />
                <div className="smoke-cloud-3" />
              </div>
            )}
            {activeProject.id === 'datenschutz' && (
              <div className="security-scan-overlay">
                <div className="scanner-line" />
                <div className="security-glow" />
              </div>
            )}
            {activeProject.id === 'serious-games' && (
              <div className="ekg-overlay">
                <svg className="ekg-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path
                    className="ekg-path"
                    d="M 0,50 L 120,50 L 130,40 L 140,60 L 150,15 L 160,85 L 170,45 L 180,55 L 190,50 L 400,50"
                  />
                </svg>
              </div>
            )}
            {activeProject.id === 'social-psychology' && (
              <div className="groupthink-table-overlay">
                <svg className="groupthink-svg" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
                  {/* Table */}
                  <ellipse cx="210" cy="140" rx="90" ry="16" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="2.5" />
                  
                  {/* Chairs backrests for seated followers (placed on the right side as they face left) */}
                  {/* Chair 1 */}
                  <line x1="195" y1="115" x2="195" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
                  {/* Chair 2 */}
                  <line x1="255" y1="115" x2="255" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />
                  {/* Chair 3 */}
                  <line x1="315" y1="115" x2="315" y2="140" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2.5" />

                  {/* Standing Shouting Leader (facing right) */}
                  <g className="shouting-leader">
                    {/* Head */}
                    <circle cx="80" cy="85" r="5.5" fill="none" stroke="#fe0979" strokeWidth="2.5" />
                    {/* Crown */}
                    <path d="M 76 78 L 77 76 L 79 77.5 L 80 75.5 L 81 77.5 L 83 76 L 84 78 Z" fill="#ffd700" />
                    {/* Torso */}
                    <line x1="80" y1="91" x2="80" y2="120" stroke="#fe0979" strokeWidth="2.5" />
                    {/* Legs */}
                    <line x1="80" y1="120" x2="75" y2="145" stroke="#fe0979" strokeWidth="2.5" />
                    <line x1="80" y1="120" x2="85" y2="145" stroke="#fe0979" strokeWidth="2.5" />
                    {/* Shouting Arms */}
                    <line className="shouting-arm-left" x1="80" y1="96" x2="65" y2="82" stroke="#fe0979" strokeWidth="2.5" />
                    <line className="shouting-arm-right" x1="80" y1="96" x2="95" y2="82" stroke="#fe0979" strokeWidth="2.5" />
                  </g>

                  {/* Concentric soundwaves from leader's mouth */}
                  <circle cx="80" cy="85" r="10" className="soundwave" />
                  <circle cx="80" cy="85" r="10" className="soundwave sw2" />
                  <circle cx="80" cy="85" r="10" className="soundwave sw3" />

                  {/* Seated Follower 1 (facing left) */}
                  <g className="follower-seated f1">
                    {/* Head */}
                    <circle cx="185" cy="108" r="4.5" className="nodding-head-1" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Torso (sitting) */}
                    <line x1="185" y1="113" x2="185" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Arm in agreement (raising hand towards leader) */}
                    <line className="agree-arm-1" x1="185" y1="118" x2="172" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Sitting leg pointing left */}
                    <line x1="185" y1="135" x2="172" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                  </g>

                  {/* Seated Follower 2 (facing left) */}
                  <g className="follower-seated f2">
                    {/* Head */}
                    <circle cx="245" cy="108" r="4.5" className="nodding-head-2" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Torso (sitting) */}
                    <line x1="245" y1="113" x2="245" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Arm in agreement */}
                    <line className="agree-arm-2" x1="245" y1="118" x2="232" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Sitting leg pointing left */}
                    <line x1="245" y1="135" x2="232" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                  </g>

                  {/* Seated Follower 3 (facing left) */}
                  <g className="follower-seated f3">
                    {/* Head */}
                    <circle cx="305" cy="108" r="4.5" className="nodding-head-3" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Torso (sitting) */}
                    <line x1="305" y1="113" x2="305" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Arm in agreement */}
                    <line className="agree-arm-3" x1="305" y1="118" x2="292" y2="103" stroke="#00f2fe" strokeWidth="2.5" />
                    {/* Sitting leg pointing left */}
                    <line x1="305" y1="135" x2="292" y2="135" stroke="#00f2fe" strokeWidth="2.5" />
                  </g>

                  {/* Agreement text bubbles floating up */}
                  <text x="172" y="94" className="agree-word w1" fill="#00f2fe">YES!</text>
                  <text x="232" y="94" className="agree-word w2" fill="#00f2fe">AGREE!</text>
                  <text x="292" y="94" className="agree-word w3" fill="#00f2fe">TRUE!</text>
                  <text x="210" y="80" className="agree-word w4" fill="#00f2fe">YES!</text>
                </svg>
              </div>
            )}
          </motion.div>
          <button
            type="button"
            className="modal-nav-arrow modal-nav-arrow--next"
            onClick={(e) => {
              e.stopPropagation()
              const currentIndex = ITEMS.findIndex((item) => item.id === activeProject.id)
              if (currentIndex !== -1) {
                const nextIndex = (currentIndex + 1) % ITEMS.length
                setActiveProject(ITEMS[nextIndex])
                setActiveModalTab('overview')
              }
            }}
            aria-label={lang === 'de' ? 'Nächstes Projekt' : 'Next Project'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="modal-nav-arrow-icon">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      <nav className={`nav ${navScrolled ? 'nav--scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={() => setActiveSection('hero')}>
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
          <CVSection lang={lang} onViewPdf={handleViewPdf} />
        ) : (
          <>
            <section id="hero" className="hero">
              <Suspense fallback={null}>
                <Hero3D theme={theme} />
              </Suspense>
              <div
                className="hero-spotlight"
                style={{
                  background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, var(--spotlight), transparent 45%)`,
                  opacity: Math.max(0, 1 - scrollY / 400),
                }}
              />
              <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {lang === 'de' ? 'Informatik-Student' : 'Computer Science Student'}
              </motion.p>
              <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                Hallo, ich bin<br />
                <span className="hero-title-name">Artjom Becker.</span>
              </motion.h1>
              <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                {lang === 'de'
                  ? 'Software-Entwickler. Ich baue moderne und performante Anwendungen.'
                  : 'Software Developer. Building modern and high-performance applications.'}
              </motion.p>
              <motion.div
                className="hero-scroll-indicator"
                style={{ opacity: Math.max(0, 1 - scrollY / 50) }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="mouse-icon">
                  <div className="wheel"></div>
                </div>
                <span className="scroll-text">{lang === 'de' ? 'Scrollen' : 'Scroll'}</span>
              </motion.div>
            </section>


            <section id="about" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Über mich' : 'About me'} /></h2>
                <Suspense fallback={<div className="terminal-placeholder">Lade Terminal...</div>}>
                  <Terminal
                    lang={lang}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    projectTitles={projectTitles}
                    items={ITEMS}
                    onPlayPong={() => setIsPongActive(true)}
                    onTriggerShake={triggerShake}
                    onTriggerMatrix={triggerMatrix}
                    onTriggerDestruction={triggerDestruction}
                    onTriggerFollow={triggerFollow}
                  />
                </Suspense>
                <p className="section-text section-text--mt">
                  {lang === 'de'
                    ? 'Ich studiere Informatik und bin fasziniert von der Verbindung zwischen Theorie und Praxis. Teamleitung im Bachelor-Praktikum, Gruppenprojekte mit Bestnote - ich liebe es, komplexe Probleme zu zerlegen und elegante Lösungen zu entwickeln.'
                    : 'I study computer science and I am fascinated by connecting theory and practice. I led teams in a bachelor internship and enjoy breaking down complex problems into elegant solutions.'}
                </p>
              </motion.div>
            </section>

            <CodeShowcase lang={lang} />

            <TechMarquee lang={lang} />
            <section className="section skills-section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <InteractiveSkills
                  lang={lang}
                  items={ITEMS}
                  onProjectSelect={(item) => setActiveProject(item)}
                />
              </motion.div>
            </section>

            <section id="timeline" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Timeline' : 'Timeline'} /></h2>
                <div className="timeline">
                  {TIMELINE.map((entry) => (
                    <article key={`${entry.year}-${entry.de}`} className="timeline-item">
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
                <GitHubActivity lang={lang} theme={theme} />
              </motion.div>
            </section>




            <section id="projects" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Ausgewählte Projekte & Seminare' : 'Selected Projects & Seminars'} /></h2>
                
                {/* Primary Filter row */}
                <div className="primary-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                  <button
                    type="button"
                    className={`filter-chip ${primaryFilter === 'all' ? 'filter-chip--active' : ''}`}
                    onClick={() => {
                      setPrimaryFilter('all')
                      trackEvent('primary_filter', { type: 'all' })
                    }}
                  >
                    {lang === 'de' ? 'Alle' : 'All'}
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${primaryFilter === 'project' ? 'filter-chip--active' : ''}`}
                    onClick={() => {
                      setPrimaryFilter('project')
                      trackEvent('primary_filter', { type: 'project' })
                    }}
                  >
                    {lang === 'de' ? 'Projekte' : 'Projects'}
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${primaryFilter === 'seminar' ? 'filter-chip--active' : ''}`}
                    onClick={() => {
                      setPrimaryFilter('seminar')
                      trackEvent('primary_filter', { type: 'seminar' })
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
                        setProjectFilter(filter)
                        trackEvent('project_filter', { filter })
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
                              e.stopPropagation()
                              setActiveProject(project)
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
                                      <span className="repo-stars-badge">
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
                        setShowAllProjects(!showAllProjects)
                        trackEvent('project_toggle', { state: !showAllProjects })
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

            <section id="testimonials" className="section">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title"><SplitFlapText text={lang === 'de' ? 'Empfehlungen' : 'Testimonials'} /></h2>
                <div className="testimonials-marquee-wrapper">
                  <div className="testimonials-marquee-content">
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                      <article 
                        key={idx} 
                        className={`testimonial-card ${t.link ? 'testimonial-card--clickable' : ''}`}
                        onMouseEnter={handleHover} 
                        onMouseLeave={handleLeave}
                        onClick={t.link ? () => window.open(t.link, '_blank') : undefined}
                      >
                        <div className="testimonial-header-info">
                          {t.brand ? renderTestimonialLogo(t.brand, t.color) : <div className="testimonial-avatar">{t.initials}</div>}
                          <div>
                            <h4 className="testimonial-author">{t.author}</h4>
                            <p className="testimonial-role">{lang === 'de' ? t.roleDe : t.roleEn}</p>
                          </div>
                        </div>
                        <p className="testimonial-quote">{lang === 'de' ? t.quoteDe : t.quoteEn}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            <section id="social-hub" className="section section--social">
              <motion.div className="section-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }}>
                <h2 className="section-title">
                  <SplitFlapText text={lang === 'de' ? 'Content & Social Hub' : 'Content & Social Hub'} />
                </h2>
                <p className="section-text" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
                  {lang === 'de'
                    ? 'Ich teile mein Wissen über Informatik und Softwareentwicklung auf X und plane kurze, lehrreiche TikToks.'
                    : 'I share computer science & software engineering insights on X and plan educational short-form TikToks.'}
                </p>

                <div className="social-grid">
                  {/* X / Twitter Card */}
                  <article className="social-card social-card--x" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <div className="social-card-header">
                      <div className="social-card-profile">
                        <div className="social-avatar social-avatar--x">AB</div>
                        <div>
                          <h4 className="social-profile-name">Artjom Becker</h4>
                          <p className="social-profile-handle">@artjom_becker</p>
                        </div>
                      </div>
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-follow-x"
                        style={{ textDecoration: 'none' }}
                      >
                        Follow
                      </a>
                    </div>
                    <div className="social-card-body">
                      <p className="tweet-text">
                        {lang === 'de'
                          ? '🚀 Warum Unity das perfekte Werkzeug für Serious Games ist: Physikeffekte, C# Scripting und schnelle Iterationszyklen machen es möglich, Motivation & Lernen ideal zu verknüpfen. Ausarbeitung & Code sind in meinem Portfolio! 👇'
                          : '🚀 Why Unity is the perfect tool for Serious Games: Physics, C# scripting, and rapid iteration make it easy to combine learning & motivation. Read the full paper in my portfolio! 👇'}
                      </p>
                      <div className="tweet-media-placeholder">
                        <div className="tweet-media-overlay">
                          <span>Serious Games Hub</span>
                        </div>
                      </div>
                    </div>
                    <div className="social-card-footer">
                      <a
                        href="https://twitter.com/intent/tweet?text=Schau%20dir%20das%20Informatik-Portfolio%20von%20Artjom%20Becker%20an!%20%F0%9F%9A%80%20https%3A%2F%2Fartjombecker.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-share-x"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        {lang === 'de' ? 'Auf X teilen' : 'Share on X'}
                      </a>
                    </div>
                  </article>

                  {/* TikTok Card */}
                  <article className="social-card social-card--tiktok" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <div className="mockphone-wrapper">
                      <div className="mockphone">
                        <div className="mockphone-screen">
                          <div className="tiktok-video-sim">
                            <div className="tiktok-overlay">
                              <div className="tiktok-sidebar">
                                <div className="tiktok-icon-group">❤️ <span>1.2k</span></div>
                                <div className="tiktok-icon-group">💬 <span>84</span></div>
                                <div className="tiktok-icon-group">⭐ <span>241</span></div>
                                <div className="tiktok-icon-group">↪️ <span>48</span></div>
                              </div>
                              <div className="tiktok-info">
                                <p className="tiktok-handle">@artjom0711</p>
                                <p className="tiktok-caption">
                                  {lang === 'de'
                                    ? 'Wie man eine Note 1.0 im Bachelor-Praktikum holt! 🎓💡 #informatik #tudarmstadt #uni'
                                    : 'How to get a 1.0 grade in your bachelor internship! 🎓💡 #compsci #tudarmstadt #university'}
                                </p>
                              </div>
                            </div>
                            <div className="tiktok-waves">
                              <span className="wave-bar"></span>
                              <span className="wave-bar"></span>
                              <span className="wave-bar"></span>
                              <span className="wave-bar"></span>
                              <span className="wave-bar"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="social-card-text">
                      <h4 className="tiktok-title">
                        Informatik auf TikTok 🎬
                      </h4>
                      <p className="tiktok-desc">
                        {lang === 'de'
                          ? 'In Zukunft plane ich kurze, packende Kurzvideos zu komplexen Tech-Themen. Folge mir gerne für künftige Updates!'
                          : 'I plan to release quick, high-energy tech videos explaining complex coding concepts. Follow me for updates!'}
                      </p>
                      <a
                        href="https://www.tiktok.com/@artjom0711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tiktok-follow"
                      >
                        @artjom0711
                      </a>
                    </div>
                  </article>
                </div>
              </motion.div>
            </section>

            <section id="contact" className="section section--contact">
              <motion.div className="contact-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="contact-title"><SplitFlapText text={lang === 'de' ? 'Lass uns vernetzen.' : 'Let us connect.'} /></h2>
                <p className="contact-text">{lang === 'de' ? 'Ob Zusammenarbeit, Fragen zu Projekten oder einfach nur Austausch - ich freue mich über jede Nachricht.' : 'For collaboration, project questions, or just a quick exchange - I am happy to hear from you.'}</p>

                <form className="contact-form" onSubmit={handleFormSubmit}>
                  {formStatus === 'success' && (
                    <div className="form-status form-status--success">
                      {lang === 'de' ? 'Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.' : 'Thank you! Your message has been sent successfully.'}
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="form-status form-status--error">
                      {lang === 'de' ? 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' : 'Something went wrong. Please try again later.'}
                    </div>
                  )}
                  <div className="form-group">
                    <input name="name" type="text" placeholder={lang === 'de' ? 'Dein Name' : 'Your Name'} required disabled={isSubmitting} />
                  </div>
                  <div className="form-group">
                    <input name="email" type="email" placeholder={lang === 'de' ? 'Deine E-Mail' : 'Your Email'} required disabled={isSubmitting} />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder={lang === 'de' ? 'Deine Nachricht' : 'Your Message'} rows="5" required disabled={isSubmitting}></textarea>
                  </div>
                  <MagneticButton style={{ width: '100%' }}>
                    <button type="submit" className={`btn ${isSubmitting ? 'btn--loading' : ''}`} style={{ width: '100%' }} disabled={isSubmitting}>
                      {isSubmitting
                        ? (lang === 'de' ? 'Wird gesendet...' : 'Sending...')
                        : (lang === 'de' ? 'Nachricht senden' : 'Send message')}
                    </button>
                  </MagneticButton>
                </form>

                <p className="contact-mail"><a href="mailto:hi@artjombecker.com" style={{ color: 'inherit', textDecoration: 'none' }}>hi@artjombecker.com</a></p>
                <div className="contact-links">
                  <MagneticButton><a href="https://github.com/artjomartur" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub" onMouseEnter={handleHover} onMouseLeave={handleLeave}><GitHubIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://x.com/artjombecker" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="X" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a></MagneticButton>
                  <MagneticButton><a href="https://artjomartur.itch.io/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Itch.io" onMouseEnter={handleHover} onMouseLeave={handleLeave}><ItchIoIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://www.linkedin.com/in/artjom-becker-aba5413a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn" onMouseEnter={handleHover} onMouseLeave={handleLeave}><LinkedInIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://wa.me/4915203322770" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="WhatsApp" onMouseEnter={handleHover} onMouseLeave={handleLeave}><WhatsAppIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://t.me/+4915203322770" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Telegram" onMouseEnter={handleHover} onMouseLeave={handleLeave}><TelegramIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://www.instagram.com/artjomartur777/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Instagram" onMouseEnter={handleHover} onMouseLeave={handleLeave}><InstagramIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://www.tiktok.com/@artjom0711" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="TikTok" onMouseEnter={handleHover} onMouseLeave={handleLeave}><TikTokIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://letterboxd.com/artjomartur/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Letterboxd" onMouseEnter={handleHover} onMouseLeave={handleLeave}><LetterboxdIcon /></a></MagneticButton>
                  <MagneticButton><a href="https://www.reddit.com/user/Artuhaaa/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Reddit" onMouseEnter={handleHover} onMouseLeave={handleLeave}><RedditIcon /></a></MagneticButton>
                </div>
              </motion.div>
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Artjom Becker. Designed & gebaut mit Liebe zum Detail.</p>
      </footer>

      {!isCvView && <Chatbot lang={lang} />}
      {activePdfUrl && (
        <PdfViewerModal
          url={activePdfUrl}
          title={activePdfTitle}
          onClose={() => setActivePdfUrl(null)}
          lang={lang}
        />
      )}
    </>
  )
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.14 1.59 5.95L0 24l6.35-1.67a11.83 11.83 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.14-3.44-8.43Zm-8.44 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.86 9.86 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.91a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.86 9.89Zm5.43-7.42c-.3-.15-1.78-.88-2.05-.98-.28-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.13 9.13 0 0 1-1.67-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.22 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.9 8.2-1.97 9.29c-.15.66-.54.83-1.1.52l-3.05-2.25-1.47 1.41c-.16.16-.3.3-.62.3l.22-3.11 5.66-5.11c.25-.22-.05-.35-.38-.13L8.2 13.5l-2.98-.93c-.65-.2-.66-.65.14-.96l11.66-4.5c.54-.2 1.01.13.88 1.09Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
  );
}

function ItchIoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.25 3.42H3.75A.28.28 0 0 0 3.47 3.7v4.62c0 .15.13.28.28.28h.21c.75 0 1.39.5 1.57 1.22l.5 1.93a.28.28 0 0 1-.27.35H4.22a.28.28 0 0 0-.28.28v7.94c0 .15.13.28.28.28h15.56c.15 0 .28-.13.28-.28v-7.94a.28.28 0 0 0-.28-.28h-1.55a.28.28 0 0 1-.26-.35l.5-1.93c.19-.72.83-1.22 1.57-1.22h.21c.15 0 .28-.13.28-.28V3.7a.28.28 0 0 0-.28-.28zm-9.35 14.89a1.06 1.06 0 0 1-.81-.38l-1.92-2.31a.28.28 0 0 1 .21-.45h5.23c.13 0 .24.13.21.25l-1.92 2.31a1.06 1.06 0 0 1-.8.38v-.02zm1.88-6.06h-1.56a.28.28 0 0 1-.28-.24l-.16-1.6a1.1 1.1 0 0 1 1.1-1.21h.24c.64 0 1.14.54 1.1 1.18l-.16 1.63a.28.28 0 0 1-.27.24z" />
    </svg>
  )
}

function LetterboxdIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
      <circle cx="7" cy="12" r="4" opacity="0.55" />
      <circle cx="12" cy="12" r="4" opacity="0.8" />
      <circle cx="17" cy="12" r="4" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
      <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-5.99-1.72l1.24-3.91 3.99.87c.05 1.02.9 1.84 1.93 1.84 1.08 0 1.95-.87 1.95-1.95S20.83 3 19.75 3c-.88 0-1.62.58-1.86 1.39l-4.44-.97c-.12-.03-.24.03-.28.15L11.8 7.02C9.5 7.1 7.33 7.74 5.67 8.74 5.1 7.98 4.21 7.5 3.25 7.5 1.6 7.5.25 8.85.25 10.5c0 1.12.61 2.09 1.51 2.6-.08.3-.12.6-.12.9 0 3.61 4.62 6.55 10.31 6.55s10.31-2.94 10.31-6.55c0-.3-.04-.6-.12-.9.9-.51 1.51-1.48 1.51-2.6zM9 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm8.01 4.41c-1.07 1.07-3.09 1.14-3.5 1.14-.41 0-2.43-.07-3.5-1.14-.1-.1-.1-.26 0-.36.1-.1.26-.1.36 0 .87.87 2.59.95 3.14.95.55 0 2.27-.08 3.14-.95.1-.1.26-.1.36 0 .1.1.1.26 0 .36zm-1.51-2.91c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function MatrixRain({ onClose }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシシチヂニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const alphabet = katakana.split('')

    const fontSize = 16
    const columns = canvas.width / fontSize

    const rainDrops = []
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)]
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }

    const interval = setInterval(draw, 30)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="matrix-overlay" onClick={onClose}>
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-exit-hint">Tippe "matrix" erneut oder klicke zum Beenden</div>
    </div>
  )
}

export default App
