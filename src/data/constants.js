export const PROJECTS = [
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


export const THESES = [
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

export const ITEMS = [
  ...PROJECTS.map((p) => ({ ...p, type: 'project' })),
  ...THESES.map((t) => ({ ...t, type: 'seminar' })),
].sort((a, b) => {
  const aProgress = a.status === 'in-progress' ? 1 : 0;
  const bProgress = b.status === 'in-progress' ? 1 : 0;
  return bProgress - aProgress;
});

export const TIMELINE = [
  { year: '2026', de: 'Bereit fuer den naechsten Impact - gerne mit Ihrem Unternehmen.', en: 'Ready for the next impact - ideally with your company.' },
  { year: '2026', de: 'Kinopolis Dashboard - Operative Automatisierung (Live)', en: 'Kinopolis Dashboard - Operational Automation (Live)' },
  { year: '2025', de: 'Teamleitung fuer drei Teams im Bachelor-Praktikum', en: 'Led three teams in a bachelor internship' },
  { year: '2025', de: 'ExerCube Gruppenprojekt mit Note 1,0', en: 'ExerCube group project graded 1.0' },
  { year: '2023', de: 'Start Informatik-Studium an der TU Darmstadt', en: 'Started computer science studies at TU Darmstadt' },
]

export const TESTIMONIALS = [
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


export const NAV_ITEMS = [
  { id: 'about', labelDe: 'Über mich', labelEn: 'About' },
  { id: 'timeline', labelDe: 'Timeline', labelEn: 'Timeline' },
  { id: 'projects', labelDe: 'Projekte', labelEn: 'Projects' },
  { id: 'testimonials', labelDe: 'Empfehlungen', labelEn: 'Reviews' },
  { id: 'cv', labelDe: 'CV', labelEn: 'CV' },
  { id: 'contact', labelDe: 'Kontakt', labelEn: 'Contact' },
]
