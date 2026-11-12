const fs = require("fs");
const path = require("path");

function updateArchitectPage(filePath, isSubpage, isJumboAlias) {
  let html = fs.readFileSync(filePath, "utf8");
  const assetPrefix = isSubpage ? "../assets/" : "../../assets/";

  // If this is jumbo-signatures file, update title & canonical tag
  if (isJumboAlias) {
    html = html.replace(/<title>[^<]+<\/title>/, "<title>Architect of Mind - Artjom Becker</title>");
    html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="https://artjom-portfolio.5zm9ccr6m9.workers.dev/work/architect-of-mind">');
  }

  // 1. New Styles
  const newStyles = `<style id="story-engine-styles">
  /* Hide redundant template video and obsolete duplicate blocks in Architect of Mind */
  .framer-i54z1, .framer-1t5zby5, .framer-1p06bfy, .framer-dobjfc, .framer-1qj3kpm, .framer-1dereqw, .framer-1b7huvi, .framer-ijhezo, .story-divider-block {
    display: none !important;
  }
  
  /* Hero-Grade Architect of Mind Explanatory Card Animations */
  .aom-explain-card {
    width: calc(100% - 48px);
    max-width: 1400px;
    margin: 64px auto 28px auto;
    padding: 38px 44px;
    background: linear-gradient(135deg, rgba(24, 20, 20, 0.94) 0%, rgba(14, 12, 12, 0.96) 100%);
    border: 1px solid rgba(255, 138, 61, 0.22);
    border-radius: 24px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 30;
    position: relative;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.42);
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s ease,
                border-color 0.3s ease;
    will-change: opacity, transform;
  }
  .aom-explain-card.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .aom-explain-card:hover {
    border-color: rgba(255, 122, 26, 0.55);
    box-shadow: 0 20px 56px rgba(0, 0, 0, 0.52), 0 0 34px rgba(255, 122, 26, 0.18);
    transform: translateY(-2px);
  }

  .aom-tag {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 9999px;
    font-family: "Outfit", sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #FF8A3D;
    background: rgba(255, 138, 61, 0.14);
    border: 1px solid rgba(255, 138, 61, 0.38);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;
  }
  .aom-tag::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF7A1A;
    box-shadow: 0 0 8px #FF7A1A;
  }
  .aom-explain-card.is-visible .aom-tag {
    opacity: 1;
    transform: translateY(0);
  }

  .aom-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(24px, 2.7vw, 38px);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    margin: 4px 0 0 0;
    letter-spacing: -0.025em;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.16s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.16s;
  }
  .aom-explain-card.is-visible .aom-title {
    opacity: 1;
    transform: translateY(0);
  }

  .aom-desc {
    font-family: "Outfit", sans-serif;
    font-size: clamp(15px, 1.2vw, 17.5px);
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.68;
    max-width: 960px;
    margin: 6px 0 0 0;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.24s;
  }
  .aom-explain-card.is-visible .aom-desc {
    opacity: 1;
    transform: translateY(0);
  }

  .aom-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.32s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.32s;
  }
  .aom-explain-card.is-visible .aom-chips {
    opacity: 1;
    transform: translateY(0);
  }

  .aom-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 14px;
    border-radius: 10px;
    font-family: "Outfit", sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .aom-chip:hover {
    background: rgba(255, 122, 26, 0.18);
    border-color: rgba(255, 122, 26, 0.45);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(255, 122, 26, 0.25);
  }

  .aom-media-card {
    opacity: 0;
    transform: translateY(28px) scale(0.99);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }
  .aom-media-card.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .story-custom-bar {
    width: calc(100% - 48px);
    max-width: 1400px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    z-index: 50;
    position: relative;
  }
  .aom-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
    border-radius: 9999px;
    font-family: "Outfit", sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .aom-pill-primary {
    background: #FF7A1A;
    color: #FFFFFF;
    box-shadow: 0 4px 20px rgba(255, 122, 26, 0.35);
  }
  .aom-pill-primary:hover {
    background: #FF9442;
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(255, 122, 26, 0.55);
  }
  .aom-pill-secondary {
    background: rgba(255, 255, 255, 0.08);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(12px);
  }
  .aom-pill-secondary:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
  .aom-pill-outline {
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .aom-pill-outline:hover {
    color: #FFFFFF;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  .story-closing-card {
    text-align: left;
    margin: 60px auto 40px auto;
  }

  @media (max-width: 809.98px) {
    .aom-explain-card {
      padding: 24px 20px;
      margin: 40px auto 20px auto;
      border-radius: 18px;
      width: calc(100% - 24px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .aom-explain-card, .aom-explain-card *, .aom-media-card {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
</style>`;

  if (html.includes('<style id="story-engine-styles">')) {
    html = html.replace(/<style id="story-engine-styles">[\s\S]*?<\/style>/, newStyles);
  } else {
    html = html.replace("</head>", newStyles + "\n</head>");
  }

  // 2. Middle Content Replacement
  // We locate where the Header finishes, and where IndexFooter or the bottom next link begins.
  // In AOM files, Header is framer-1d9htnz.
  // Right after header is where first content starts.
  let startMarker = html.indexOf("<div class=\"framer-zxg9i6\"");
  if (startMarker === -1) {
    // In subpages/work_jumbo-signatures.html:
    startMarker = html.indexOf("<div class=\"framer-pt1o7q\"");
    if (startMarker === -1) {
      startMarker = html.indexOf("<div class=\"story-divider-block\"");
    }
  }

  // End marker: where the footer or next link begins
  let endMarker = html.indexOf("<div class=\"ssr-variant\"><div class=\"framer-17g271f-container\"");
  if (endMarker === -1) {
    endMarker = html.indexOf("<div class=\"framer-n705w\"");
  }
  if (endMarker === -1) {
    endMarker = html.indexOf("<div class=\"framer-1mehwzu\"");
  }

  if (startMarker === -1 || endMarker === -1) {
    throw new Error(`Could not locate start (${startMarker}) or end (${endMarker}) marker in ${filePath}`);
  }

  const storyContent = `
<!-- SECTION 00: HERO OVERVIEW -->
<div class="framer-mpy56y aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto 20px auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="eager" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_hero_statik.jpg 1920w" src="${assetPrefix}images/projects/aom_hero_statik.jpg" alt="Architect of Mind 3D Insel-Welt" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 01: DAS PSYCHOLOGISCHE KONZEPT & KVT -->
<div class="aom-explain-card" data-reveal>
  <div class="aom-tag">(01) Konzept &amp; Psychologie</div>
  <h2 class="aom-title">Kognitive Umstrukturierung spielerisch begreifen</h2>
  <p class="aom-desc">Wie können evidenzbasierte Methoden der kognitiven Verhaltenstherapie (KVT) interaktiv, motivierend und ohne klinische Barrieren vermittelt werden? Architect of Mind transformiert abstrakte psychologische Mechanismen in greifbare architektonische Metaphern: Gedanken werden zu Bauwerken, automatisierte mentale Verzerrungen zu instabilen Pfeilern und alternative Perspektiven zu tragfähigen Brücken.</p>
  <div class="aom-chips">
    <div class="aom-chip"><span>🧠</span> Kognitive Verhaltenstherapie (KVT)</div>
    <div class="aom-chip"><span>🌉</span> Gedanken als Bauwerke &amp; Statik</div>
    <div class="aom-chip"><span>📊</span> Evidenzbasierte Psychologie</div>
  </div>
</div>
<div class="framer-zxg9i6 aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_headspace.jpg 1920w" src="${assetPrefix}images/projects/aom_headspace.jpg" alt="Architect of Mind Psychologisches Konzept" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 02: DER BEGLEITER & CHARAKTERDESIGN -->
<div class="aom-explain-card" data-reveal>
  <div class="aom-tag">(02) Charakterdesign &amp; Narration</div>
  <h2 class="aom-title">Der kleine Fuchs als Gedanken-Architekt</h2>
  <p class="aom-desc">Der kleine Fuchs begleitet Spieler empathisch auf ihrer Entdeckungsreise durch das eigene Gedankenreich. Ausgestattet mit Bauhelm und Skizzenbuch hilft er dabei, automatische negative Gedanken ('Trümmer-Gedanken') behutsam aufzudecken, Denkmuster auf ihre 'Statik' zu überprüfen und dysfunktionale Grundannahmen schrittweise durch konstruktive, resiliente Überzeugungen zu ersetzen.</p>
  <div class="aom-chips">
    <div class="aom-chip"><span>🦊</span> Empathischer Begleiter &amp; Mentor</div>
    <div class="aom-chip"><span>🔎</span> Aufdecken automatischer Gedanken</div>
    <div class="aom-chip"><span>🏗️</span> Der spielerische 'Statik-Check'</div>
  </div>
</div>
<div class="framer-1xif5zz aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_fox_architect.jpg 1920w" src="${assetPrefix}images/projects/aom_fox_architect.jpg" alt="Der kleine Fuchs als Gedanken-Architekt" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 03: FARBPSYCHOLOGIE & DESIGN SYSTEM -->
<div class="aom-explain-card" data-reveal>
  <div class="aom-tag">(03) Design System &amp; Farbpsychologie</div>
  <h2 class="aom-title">Evidenzbasierte Farbpsychologie &amp; Barrierefreies UI</h2>
  <p class="aom-desc">Ein maßgeschneidertes Designsystem verbindet barrierefreie Benutzeroberflächen mit gezielter Farbpsychologie: Warme Terrakotta-, Bernstein- und Ockertöne vermitteln Geborgenheit, Wärme und Erdung während herausfordernder Selbstreflexion. Kühle, reduzierte Schiefertöne markieren neutrale Analysephasen. Haptisch anmutende Schaltflächen und organische Formen reduzieren kognitiven Stress.</p>
  <div class="aom-chips">
    <div class="aom-chip"><span>🎨</span> Evidenzbasierte Farbpalette</div>
    <div class="aom-chip"><span>📐</span> Barrierefreie UI-Architektur</div>
    <div class="aom-chip"><span>🧩</span> Modulares Komponenten-System</div>
  </div>
</div>
<div class="framer-vl25kl aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_brandboard.jpg 1920w" src="${assetPrefix}images/projects/aom_brandboard.jpg" alt="Architect of Mind Brandboard &amp; Farbsystem" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 04: GAMEPLAY & RÄTSELMECHANIK -->
<div class="aom-explain-card" data-reveal>
  <div class="aom-tag">(04) Gameplay &amp; Rätselmechanik</div>
  <h2 class="aom-title">Gedankenbrücken bauen &amp; Mentale Statik testen</h2>
  <p class="aom-desc">Kern der spielerischen Interaktion sind räumliche Gedanken-Puzzles: Spieler identifizieren typische Denkverzerrungen (wie Katastrophisieren oder Schwarz-Weiß-Denken), wählen alternative kognitive Bauelemente aus und konstruieren tragfähige Gedankenbrücken. Hält die Brücke der anschließenden Belastungsprobe stand, wird der nächste Bereich der schwebenden Inselwelt freigeschaltet.</p>
  <div class="aom-chips">
    <div class="aom-chip"><span>🌉</span> Interaktiver Brückenbau</div>
    <div class="aom-chip"><span>⚖️</span> Kognitive Belastungstests</div>
    <div class="aom-chip"><span>🎯</span> Sofortiges visuelles Feedback</div>
  </div>
</div>
<div class="framer-1ntjsny aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_thought_puzzle.jpg 1920w" src="${assetPrefix}images/projects/aom_thought_puzzle.jpg" alt="Architect of Mind Gedankenbrücken Puzzle" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 05: TECHNOLOGIE & TU DARMSTADT EVALUATION -->
<div class="aom-explain-card" data-reveal>
  <div class="aom-tag">(05) Technologie &amp; Evaluation</div>
  <h2 class="aom-title">Unity 3D Engine, Custom Shader &amp; TU Darmstadt</h2>
  <p class="aom-desc">Entwickelt in Unity und C# im Fachbereich Informatik (Telecooperation / Serious Games) an der Technischen Universität Darmstadt. Prozedurale GLSL-Shader erzeugen eine traumartige Inselatmosphäre mit sanfter Tiefenunschärfe. In empirischen Nutzertests mit standardisierten Fragebögen erzielte der Prototyp 98% positive Resonanz und belegte einen messbaren Lerneffekt mentaler Selbstwirksamkeit.</p>
  <div class="aom-chips">
    <div class="aom-chip"><span>🎮</span> Unity 3D &amp; C# Scripting</div>
    <div class="aom-chip"><span>✨</span> Prozedurale GLSL-Shader</div>
    <div class="aom-chip"><span>🎓</span> TU Darmstadt Bachelorarbeit (98% Resonanz)</div>
  </div>
</div>
<div class="framer-10hqlms aom-media-card" data-framer-name="1Image" data-reveal style="max-width:1440px;width:100%;margin:0 auto;padding:0 24px;box-sizing:border-box;">
  <div class="ssr-variant">
    <div style="height:auto;aspect-ratio:1.7777777777777777;position:relative;border-radius:20px;overflow:hidden;">
      <div style="position:absolute;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/aom_prototype.jpg 1920w" src="${assetPrefix}images/projects/aom_prototype.jpg" alt="Architect of Mind Unity 3D Prototyp" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>
`;

  html = html.substring(0, startMarker) + storyContent + html.substring(endMarker);

  // 3. Fix the "next / Jumbo Signatures" button to "next / LKY100"
  html = html.replace(/href="[^"]*jumbo-signatures[^"]*"/g, isSubpage ? 'href="work_lky100.html"' : 'href="/work/lky100"');
  html = html.replace(/next \/ Jumbo Signatures/g, "next / LKY100");

  // 4. Update or replace the script #aom-story-engine
  const newScript = `<script id="aom-story-engine">
(function() {
  function initObserver() {
    const cards = document.querySelectorAll(".aom-explain-card, .aom-media-card");
    if (!cards.length) return;
    
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      });
      cards.forEach(card => observer.observe(card));
    } else {
      cards.forEach(card => card.classList.add("is-visible"));
    }
  }

  function injectBars() {
    // 1. Top links before first story section
    const header = document.querySelector(".framer-1d9htnz") || document.querySelector('[data-framer-name="Header"]');
    if (header && !document.getElementById("aom-top-links")) {
      const topBar = document.createElement("div");
      topBar.id = "aom-top-links";
      topBar.className = "story-custom-bar";
      topBar.innerHTML = \`
        <span style="display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:9999px;background:rgba(255,138,61,0.14);border:1px solid rgba(255,138,61,0.38);color:#FF8A3D;font-size:13px;font-weight:700;font-family:'Outfit',sans-serif;letter-spacing:0.04em;">
          <span style="width:7px;height:7px;border-radius:50%;background:#FF7A1A;box-shadow:0 0 8px #FF7A1A;"></span>
          TU Darmstadt · Fachbereich Informatik (Telecooperation)
        </span>
        <a href="https://www.informatik.tu-darmstadt.de/" target="_blank" rel="noopener" class="aom-pill-btn aom-pill-primary">TU Darmstadt Informatik ↗</a>
        <a href="https://github.com/artjomartur" target="_blank" rel="noopener" class="aom-pill-btn aom-pill-secondary">GitHub Repository ↗</a>
        <a href="/work/kinopolis" class="aom-pill-btn aom-pill-secondary">Projekt: Kinopolis Suite →</a>
      \`;
      header.parentNode.insertBefore(topBar, header.nextSibling);
    }

    // 2. Footer Links before IndexFooter
    const footer = document.querySelector('[data-framer-name="IndexFooter"]') || document.querySelector('.framer-1mehwzu');
    if (footer && !document.getElementById("aom-bottom-links")) {
      const btm = document.createElement("div");
      btm.id = "aom-bottom-links";
      btm.className = "aom-explain-card story-closing-card is-visible";
      btm.style.opacity = "1";
      btm.style.transform = "none";
      btm.innerHTML = \`
        <div class="aom-tag">Links &amp; Weiteres</div>
        <h2 class="aom-title">Architect of Mind — Serious Games Forschung</h2>
        <p class="aom-desc">Entdecke mehr Details zur wissenschaftlichen Arbeit an der TU Darmstadt oder erkunde meine weiteren Projekte:</p>
        <div class="story-custom-bar" style="margin-top: 20px;">
          <a href="https://www.informatik.tu-darmstadt.de/" target="_blank" rel="noopener" class="aom-pill-btn aom-pill-primary">TU Darmstadt Fachbereich Informatik ↗</a>
          <a href="https://github.com/artjomartur" target="_blank" rel="noopener" class="aom-pill-btn aom-pill-secondary">GitHub: Artjom Becker ↗</a>
          <a href="/work/lky100" class="aom-pill-btn aom-pill-secondary">Nächstes Projekt: LKY100 →</a>
          <a href="/work" class="aom-pill-btn aom-pill-outline">← Zurück zur Übersicht</a>
        </div>
      \`;
      footer.parentNode.insertBefore(btm, footer);
    }
  }

  function run() {
    injectBars();
    initObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  window.addEventListener("load", run);
  setTimeout(run, 300);
  setTimeout(run, 1000);
})();
</script>`;

  if (html.includes('<script id="aom-story-engine">')) {
    html = html.replace(/<script id="aom-story-engine">[\s\S]*?<\/script>/, newScript);
  } else {
    html = html.replace("</body>", newScript + "\n</body>");
  }

  fs.writeFileSync(filePath, html, "utf8");
  console.log("Updated", filePath, "successfully!");
}

// Update Architect of Mind pages
updateArchitectPage("work/architect-of-mind/index.html", false, false);
updateArchitectPage("subpages/work_architect-of-mind.html", true, false);

// Make subpages/work_jumbo-signatures.html identical to subpages/work_architect-of-mind.html with redirect
let aomSubpage = fs.readFileSync("subpages/work_architect-of-mind.html", "utf8");
aomSubpage = aomSubpage.replace(/<title>[^<]+<\/title>/, "<title>Architect of Mind - Artjom Becker</title>");
const redirectSnippet = `
<link rel="canonical" href="https://artjom-portfolio.5zm9ccr6m9.workers.dev/work/architect-of-mind">
<meta http-equiv="refresh" content="0; url=/work/architect-of-mind">
<script>
if (window.location.pathname.includes("jumbo-signatures")) {
  window.location.replace("/work/architect-of-mind" + window.location.search + window.location.hash);
}
</script>
`;
aomSubpage = aomSubpage.replace("<head>", "<head>" + redirectSnippet);
fs.writeFileSync("subpages/work_jumbo-signatures.html", aomSubpage, "utf8");
console.log("Updated subpages/work_jumbo-signatures.html with AOM content and instant redirect");

// Fix LKY100 next buttons that pointed to jumbo-signatures
["work/lky100/index.html", "subpages/work_lky100.html"].forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  content = content.replace(/href="[^"]*jumbo-signatures[^"]*"/g, file.includes("subpages") ? 'href="work_architect-of-mind.html"' : 'href="/work/architect-of-mind"');
  content = content.replace(/next \/ Jumbo Signatures/g, "next / Architect of Mind");
  fs.writeFileSync(file, content, "utf8");
  console.log("Updated next link in", file);
});

