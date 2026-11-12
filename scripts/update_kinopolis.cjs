const fs = require("fs");
const path = require("path");

function updateKinopolis(filePath, isSubpage) {
  let html = fs.readFileSync(filePath, "utf8");
  const assetPrefix = isSubpage ? "../assets/" : "../../assets/";

  // 1. Replace <style id="story-engine-styles">
  const newStyles = `<style id="story-engine-styles">
  /* Hide redundant legacy video and template grid blocks in Kinopolis */
  .framer-1gw3pnu, .framer-88nnrw, .framer-1si96yt, .framer-11vfhmx, .framer-jcylbl, .framer-7kaz28, .framer-1bl9yx2, .framer-8p1ek5, .framer-h872oy, .story-divider-block {
    display: none !important;
  }
  
  /* Hero-Grade Kinopolis Explanatory Card Animations */
  .kino-explain-card {
    width: calc(100% - 48px);
    max-width: 1400px;
    margin: 64px auto 28px auto;
    padding: 38px 44px;
    background: linear-gradient(135deg, rgba(20, 20, 26, 0.94) 0%, rgba(12, 12, 16, 0.96) 100%);
    border: 1px solid rgba(255, 255, 255, 0.12);
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
  .kino-explain-card.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .kino-explain-card:hover {
    border-color: rgba(254, 60, 1, 0.45);
    box-shadow: 0 20px 56px rgba(0, 0, 0, 0.52), 0 0 32px rgba(254, 60, 1, 0.14);
    transform: translateY(-2px);
  }

  .kino-tag {
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
    color: #fe3c01;
    background: rgba(254, 60, 1, 0.14);
    border: 1px solid rgba(254, 60, 1, 0.38);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
                transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s;
  }
  .kino-tag::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fe3c01;
    box-shadow: 0 0 8px #fe3c01;
  }
  .kino-explain-card.is-visible .kino-tag {
    opacity: 1;
    transform: translateY(0);
  }

  .kino-title {
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
  .kino-explain-card.is-visible .kino-title {
    opacity: 1;
    transform: translateY(0);
  }

  .kino-desc {
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
  .kino-explain-card.is-visible .kino-desc {
    opacity: 1;
    transform: translateY(0);
  }

  .kino-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.32s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.32s;
  }
  .kino-explain-card.is-visible .kino-chips {
    opacity: 1;
    transform: translateY(0);
  }

  .kino-chip {
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
  .kino-chip:hover {
    background: rgba(254, 60, 1, 0.18);
    border-color: rgba(254, 60, 1, 0.45);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(254, 60, 1, 0.2);
  }

  .kino-media-card {
    opacity: 0;
    transform: translateY(28px) scale(0.99);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }
  .kino-media-card.is-visible {
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
  .kino-pill-btn {
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
  .kino-pill-primary {
    background: #FE3C01;
    color: #FFFFFF;
    box-shadow: 0 4px 20px rgba(254, 60, 1, 0.35);
  }
  .kino-pill-primary:hover {
    background: #FF5522;
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(254, 60, 1, 0.55);
  }
  .kino-pill-secondary {
    background: rgba(255, 255, 255, 0.08);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(12px);
  }
  .kino-pill-secondary:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-2px);
  }
  .kino-pill-outline {
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .kino-pill-outline:hover {
    color: #FFFFFF;
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  .story-closing-card {
    text-align: left;
    margin: 60px auto 40px auto;
  }

  @media (max-width: 809.98px) {
    .kino-explain-card {
      padding: 24px 20px;
      margin: 40px auto 20px auto;
      border-radius: 18px;
      width: calc(100% - 24px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .kino-explain-card, .kino-explain-card *, .kino-media-card {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
</style>`;

  html = html.replace(/<style id="story-engine-styles">[\s\S]*?<\/style>/, newStyles);

  // 2. Middle story content
  const heroTag = "<div class=\"framer-1a5aqqz\"";
  const heroIdx = html.indexOf(heroTag);
  if (heroIdx === -1) throw new Error("Could not find framer-1a5aqqz in " + filePath);

  const dividerIdx = html.indexOf("<div class=\"story-divider-block\"", heroIdx);
  const endingIdx = html.indexOf("<div class=\"framer-e832ls\"");
  if (dividerIdx === -1 || endingIdx === -1) throw new Error("Could not find story-divider-block or endingText in " + filePath);

  const storyContent = `
<!-- SECTION 01: SAAL-MANAGEMENT & SEAT MAPS -->
<div class="kino-explain-card" data-reveal>
  <div class="kino-tag">(01) Saal-Management &amp; Kapazität</div>
  <h2 class="kino-title">Live-Saalüberwachung &amp; Dynamische Seat Maps</h2>
  <p class="kino-desc">Entwickelt in freiwilliger Eigeninitiative direkt aus meiner praktischen Erfahrung im Kinopolis-Service: Bei 8 parallel bespielten Sälen ist der Überblick über laufende Vorstellungen entscheidend. Die Suite visualisiert Saalbelegung, belegte Sitzreihen, freie VIP-Logen und Saalsauberkeit in Echtzeit. Das Serviceteam sieht auf einen Blick, welcher Saal einlassbereit ist, verhindert Doppelbelegungen und reduziert die Prüfzeit pro Saal um über 35%.</p>
  <div class="kino-chips">
    <div class="kino-chip"><span>📊</span> Echtzeit-Status aller 8 Kinosäle</div>
    <div class="kino-chip"><span>💺</span> VIP- &amp; Logen-Synchronisation</div>
    <div class="kino-chip"><span>⏱️</span> 35% schnellere Saalkontrolle vor Einlass</div>
  </div>
</div>
<div class="framer-mpy56y kino-media-card" data-framer-name="1Image" data-reveal>
  <div class="ssr-variant">
    <div class="framer-mxg0nz" style="height:auto;aspect-ratio:1.7777777777777777">
      <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/kinopolis_story_seatmap.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_seatmap.jpg" alt="Kinopolis Live Saalüberwachung &amp; Seat Maps" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 02: FOYER & EINLASSKONTROLLE -->
<div class="kino-explain-card" data-reveal>
  <div class="kino-tag">(02) Foyer &amp; Gastronomie-Optimierung</div>
  <h2 class="kino-title">Foyer-Peak-Radar &amp; Smarte Einlasskontrolle</h2>
  <p class="kino-desc">Vor Hauptvorstellungen und Blockbuster-Starts ballen sich Besucherströme an den Snacktheken für Popcorn, Nachos und Getränke. Das integrierte Peak-Radar prognostiziert den Besucherandrang anhand von Vorverkaufszahlen und Vorstellungsstarts im 15-Minuten-Raster. Parallel verifiziert die mobile Einlasskontrolle QR-Codes berührungslos in unter 100 Millisekunden — mit 100% Offline-Fähigkeit dank lokalem Edge-Cache, falls das WLAN am Saaleingang schwankt.</p>
  <div class="kino-chips">
    <div class="kino-chip"><span>🍿</span> Theken-Peak-Radar gegen Warteschlangen</div>
    <div class="kino-chip"><span>⚡</span> &lt;100ms QR-Ticketverifikation</div>
    <div class="kino-chip"><span>🛡️</span> 100% Offline-fähig mit lokalem Edge Cache</div>
  </div>
</div>
<div class="framer-1il18vh kino-media-card" data-framer-name="3Images" data-reveal>
  <div class="framer-tn8sdp">
    <div class="framer-yqr3yw" data-border="true">
      <div class="ssr-variant">
        <div class="framer-b840mt" style="height:auto;aspect-ratio:1.8181818181818181">
          <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
            <img decoding="async" loading="lazy" width="960" height="528" sizes="(min-width: 1200px) max((min(100vw, 1440px) - 72px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw, 1440px) - 72px) / 2, 1px), (max-width: 809.98px) max(min(100vw, 1440px) - 20px, 1px)" srcset="${assetPrefix}images/projects/kinopolis_story_concession.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_concession.jpg" alt="Kinopolis Foyer &amp; Thekenfluss" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
          </div>
        </div>
      </div>
    </div>
    <div class="ssr-variant">
      <div class="framer-13cfqhf" style="height:auto;aspect-ratio:1.8181818181818181">
        <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
          <img decoding="async" loading="lazy" width="960" height="528" sizes="(min-width: 1200px) max((min(100vw, 1440px) - 72px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw, 1440px) - 72px) / 2, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/kinopolis_story_admission.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_admission.jpg" alt="Kinopolis Schneller QR-Einlass" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
        </div>
      </div>
    </div>
  </div>
  <div class="framer-o99ed9" data-border="true">
    <div class="ssr-variant">
      <div class="framer-f88rss" style="height:auto;aspect-ratio:0.8888888888888888">
        <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
          <img decoding="async" loading="lazy" width="960" height="1080" sizes="(min-width: 1200px) max((min(100vw, 1440px) - 72px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw, 1440px) - 72px) / 2, 1px), (max-width: 809.98px) max(min(100vw, 1440px) - 20px, 1px)" srcset="${assetPrefix}images/projects/kinopolis_story_projection.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_projection.jpg" alt="Kinopolis Laserprojektion &amp; Edge-Steuerung" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
        </div>
      </div>
    </div>
  </div>
</div>

<!-- SECTION 03: AUTOMATION SUITE & LEITSTAND -->
<div class="kino-explain-card" data-reveal>
  <div class="kino-tag">(03) Automation Suite &amp; Leitstand</div>
  <h2 class="kino-title">Zentraler Leitstand &amp; Edge-Architektur</h2>
  <p class="kino-desc">Die Automation Suite verbindet alle Teilsysteme in einem einheitlichen, responsiven Leitstand. Entwickelt auf moderner Web-Technologie mit React, Vite und Cloudflare Workers. Die Benutzeroberfläche ermöglicht es Schichtleitern und Servicemitarbeitern, Vorstellungstimer, FSK-Jugendschutzvorgaben und Personalressourcen ohne Medienbrüche von jedem Terminal oder Mobilgerät aus zu steuern.</p>
  <div class="kino-chips">
    <div class="kino-chip"><span>🌐</span> Responsive React / Vite Leitstand</div>
    <div class="kino-chip"><span>☁️</span> Cloudflare Workers &amp; Serverless Edge</div>
    <div class="kino-chip"><span>🔞</span> Integrierter FSK-Jugendschutz-Check</div>
  </div>
</div>
<div class="framer-mpy56y kino-media-card" data-framer-name="1Image" data-reveal>
  <div class="ssr-variant">
    <div class="framer-mxg0nz" style="height:auto;aspect-ratio:1.7777777777777777">
      <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/kinopolis_story_automation.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_automation.jpg" alt="Kinopolis Automation Suite Leitstand" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 04: AUTOMATISIERTE SCHICHTBERICHTE -->
<div class="kino-explain-card" data-reveal>
  <div class="kino-tag">(04) Reporting &amp; Rechnungsabschluss</div>
  <h2 class="kino-title">Automatisierte Schichtberichte &amp; Kassenabschluss</h2>
  <p class="kino-desc">Nach Vorstellungsende und zu Schichtwechseln mussten Besucherzahlen, Umsätze und Vorfallsprotokolle früher zeitraubend händisch in Listen übertragen werden. Das System aggregiert alle Kennzahlen der Schicht automatisch per Knopfdruck, prüft Unstimmigkeiten und generiert fertige Übergabeberichte für die Betriebsleitung. Dies spart pro Schicht bis zu 45 Minuten manuelle Dokumentationszeit.</p>
  <div class="kino-chips">
    <div class="kino-chip"><span>📄</span> 1-Klick Schicht- &amp; Kassenabschluss</div>
    <div class="kino-chip"><span>💾</span> Cloudflare D1 SQL Datenbank</div>
    <div class="kino-chip"><span>🕒</span> Bis zu 45 Min. Ersparnis pro Schicht</div>
  </div>
</div>
<div class="framer-mpy56y kino-media-card" data-framer-name="1Image" data-reveal>
  <div class="ssr-variant">
    <div class="framer-mxg0nz" style="height:auto;aspect-ratio:1.7777777777777777">
      <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1920" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/kinopolis_story_shiftreport.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_shiftreport.jpg" alt="Kinopolis Automatisierte Schichtberichte" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>

<!-- SECTION 05: AUSFALLSICHERHEIT BEI PREMIEREN -->
<div class="kino-explain-card" data-reveal>
  <div class="kino-tag">(05) Hochlast &amp; Premieren</div>
  <h2 class="kino-title">Ausfallsicherheit für Blockbuster &amp; Roter Teppich</h2>
  <p class="kino-desc">Wenn tausende Besucher zeitgleich zu Mitternachtspremieren, Star-Besuchen oder Sonderveranstaltungen strömen, darf kein System zögern. Durch dezentrale Edge-Architektur und intelligentes Caching bleibt die Kinopolis Automation Suite auch unter extremer Spitzenlast absolut reaktionsschnell, latenzfrei und ausfallsicher.</p>
  <div class="kino-chips">
    <div class="kino-chip"><span>🚀</span> Zero-Downtime bei Mitternachtspremieren</div>
    <div class="kino-chip"><span>👥</span> Multi-Client Synchronisation im Team</div>
    <div class="kino-chip"><span>🔒</span> Verschlüsselte Ende-zu-Ende Edge-Sync</div>
  </div>
</div>
<div class="framer-q51fwj kino-media-card" data-framer-name="1Image" data-reveal>
  <div class="ssr-variant">
    <div class="framer-pcsvao" style="height:auto;aspect-ratio:1.4972222222222222">
      <div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">
        <img decoding="async" loading="lazy" width="1617" height="1080" sizes="(min-width: 1200px) max(min(100vw, 1440px) - 48px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw, 1440px) - 48px, 1px), (max-width: 809.98px) calc(min(100vw, 1440px) - 20px)" srcset="${assetPrefix}images/projects/kinopolis_story_premiere.jpg 1920w" src="${assetPrefix}images/projects/kinopolis_story_premiere.jpg" alt="Kinopolis Premieren &amp; Hochlast-Stabilität" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover">
      </div>
    </div>
  </div>
</div>
`;

  html = html.substring(0, dividerIdx) + storyContent + html.substring(endingIdx);

  // 3. Replace script #kino-story-engine
  const newScript = `<script id="kino-story-engine">
(function() {
  function initObserver() {
    const cards = document.querySelectorAll(".kino-explain-card, .kino-media-card");
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
    // 1. Top links before hero
    const hero = document.querySelector(".framer-1a5aqqz");
    if (hero && !document.getElementById("kino-top-links")) {
      const topBar = document.createElement("div");
      topBar.id = "kino-top-links";
      topBar.className = "story-custom-bar";
      topBar.innerHTML = \`
        <span style="display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:9999px;background:rgba(254,60,1,0.14);border:1px solid rgba(254,60,1,0.38);color:#fe3c01;font-size:13px;font-weight:700;font-family:'Outfit',sans-serif;letter-spacing:0.04em;">
          <span style="width:7px;height:7px;border-radius:50%;background:#fe3c01;box-shadow:0 0 8px #fe3c01;"></span>
          Freiwillige Eigeninitiative aus dem Kinoservice
        </span>
        <a href="https://www.kinopolis.de" target="_blank" rel="noopener" class="kino-pill-btn kino-pill-primary">Offizielle Kinopolis Website ↗</a>
        <a href="https://github.com/artjomartur" target="_blank" rel="noopener" class="kino-pill-btn kino-pill-secondary">GitHub Repository ↗</a>
        <a href="/work/architect-of-mind" class="kino-pill-btn kino-pill-secondary">Projekt: Architect of Mind →</a>
      \`;
      hero.parentNode.insertBefore(topBar, hero);
    }

    // 2. Footer Links after EndingText
    const ending = document.querySelector(".framer-e832ls") || document.querySelector('[data-framer-name="EndingText"]');
    if (ending && !document.getElementById("kino-bottom-links")) {
      const btm = document.createElement("div");
      btm.id = "kino-bottom-links";
      btm.className = "kino-explain-card story-closing-card is-visible";
      btm.style.opacity = "1";
      btm.style.transform = "none";
      btm.innerHTML = \`
        <div class="kino-tag">Links &amp; Weiteres</div>
        <h2 class="kino-title">Kinopolis Automation Suite</h2>
        <p class="kino-desc">Entdecke mehr Details zum Projekt oder besuche meine weiteren Arbeiten:</p>
        <div class="story-custom-bar" style="margin-top: 20px;">
          <a href="https://www.kinopolis.de" target="_blank" rel="noopener" class="kino-pill-btn kino-pill-primary">Offizielle Kinopolis Website ↗</a>
          <a href="https://github.com/artjomartur" target="_blank" rel="noopener" class="kino-pill-btn kino-pill-secondary">GitHub: Artjom Becker ↗</a>
          <a href="/work/architect-of-mind" class="kino-pill-btn kino-pill-secondary">Nächstes Projekt: Architect of Mind →</a>
          <a href="/work" class="kino-pill-btn kino-pill-outline">← Zurück zur Übersicht</a>
        </div>
      \`;
      ending.parentNode.insertBefore(btm, ending.nextSibling);
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

  html = html.replace(/<script id="kino-story-engine">[\s\S]*?<\/script>/, newScript);

  fs.writeFileSync(filePath, html, "utf8");
  console.log("Updated", filePath, "successfully!");
}

updateKinopolis("work/kinopolis/index.html", false);
updateKinopolis("subpages/work_kinopolis.html", true);
