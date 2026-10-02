const revealItems = document.querySelectorAll('.reveal');

const projectData = [
  { kicker: '01 / MOBILE SYSTEM', title: 'Kinopolis<br /><strong>Operations</strong>', copy: 'Ein ruhiges Werkzeug für schnelle Entscheidungen hinter den Kulissen.', stack: 'REACT NATIVE / PRODUCT', metric: '01' },
  { kicker: '02 / COMMERCE', title: 'Skinstock<br /><strong>Marketplace</strong>', copy: 'Eine visuelle Shopping-Erfahrung für Menschen, die ihre Routine bewusst wählen.', stack: 'BRANDING / WEB APP', metric: '02' },
  { kicker: '03 / RESEARCH', title: 'Relational<br /><strong>Algebra</strong>', copy: 'Komplexe Datenlogik wird zu einer interaktiven visuellen Sprache.', stack: 'THREE.JS / EDUCATION', metric: '03' },
];

const threeLaptopContainer = document.querySelector('[data-three-laptop]');
const lightSwitch = document.querySelector('.light-switch');
let activeProject = 0;
let setSceneLighting = () => {};
let renderProjectScreen = () => {};

function initThreeLaptop() {
  if (!threeLaptopContainer || !window.THREE) return;

  const width = threeLaptopContainer.clientWidth || 800;
  const height = threeLaptopContainer.clientHeight || 580;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.5, 5.2);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  threeLaptopContainer.appendChild(renderer.domElement);

  const screenCanvas = document.createElement('canvas');
  screenCanvas.width = 1200;
  screenCanvas.height = 750;
  const screenContext = screenCanvas.getContext('2d');
  const screenTexture = new THREE.CanvasTexture(screenCanvas);
  let projectFocusActive = false;

  const ambientLight = new THREE.AmbientLight(0x0a1a40, 2.2);
  scene.add(ambientLight);
  const blueLight = new THREE.DirectionalLight(0x1a3a8a, 2.4);
  blueLight.position.set(-3, 6, 3);
  scene.add(blueLight);
  // strong cyan spotlight from behind-right — key visual from the reference image
  const cyanSpot = new THREE.PointLight(0x00d4ff, 8, 14);
  cyanSpot.position.set(3.2, 2.8, -2.2);
  scene.add(cyanSpot);
  const rimLight = new THREE.PointLight(0x0844bb, 3, 8);
  rimLight.position.set(-3, 1, 3);
  scene.add(rimLight);
  setSceneLighting = (isLit) => {
    ambientLight.intensity = isLit ? 3.2 : 1.6;
    blueLight.intensity   = isLit ? 4.0 : 2.0;
    cyanSpot.intensity    = isLit ? 14  : 8;
    rimLight.intensity    = isLit ? 5   : 3;
  };

  const laptopGroup = new THREE.Group();
  laptopGroup.rotation.set(-0.08, -0.2, 0);
  scene.add(laptopGroup);

  const stageGroup = new THREE.Group();
  stageGroup.position.y = -0.55;
  scene.add(stageGroup);

  const metal = new THREE.MeshStandardMaterial({ color: 0x1a3a7a, metalness: 0.92, roughness: 0.12 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x060e22, metalness: 0.85, roughness: 0.18 });
  const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false });

  // ── PODIUM — two flat circular tiers with chrome rim (reference exact) ────
  const podiumDarkMat = new THREE.MeshStandardMaterial({ color: 0x0a1830, metalness: 0.45, roughness: 0.55 });
  const podiumChromeMat = new THREE.MeshStandardMaterial({ color: 0x7aaac8, metalness: 0.95, roughness: 0.06 });

  // lower wider tier
  const tierLow = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.9, 0.18, 96), podiumDarkMat);
  tierLow.position.set(0, -0.42, 0.15);
  stageGroup.add(tierLow);
  // chrome ring at base of lower tier
  const chromeLow = new THREE.Mesh(new THREE.TorusGeometry(2.88, 0.028, 12, 96), podiumChromeMat);
  chromeLow.rotation.x = Math.PI / 2;
  chromeLow.position.set(0, -0.33, 0.15);
  stageGroup.add(chromeLow);

  // upper narrower tier
  const tierHigh = new THREE.Mesh(new THREE.CylinderGeometry(2.25, 2.7, 0.26, 96), podiumDarkMat);
  tierHigh.position.set(0, -0.12, 0.15);
  stageGroup.add(tierHigh);
  // chrome ring at top edge of upper tier
  const chromeTop = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.032, 12, 96), podiumChromeMat);
  chromeTop.rotation.x = Math.PI / 2;
  chromeTop.position.set(0, 0.01, 0.15);
  stageGroup.add(chromeTop);
  // subtle inner chrome band halfway up
  const chromeMid = new THREE.Mesh(new THREE.TorusGeometry(2.48, 0.016, 8, 96), podiumChromeMat);
  chromeMid.rotation.x = Math.PI / 2;
  chromeMid.position.set(0, -0.22, 0.15);
  stageGroup.add(chromeMid);

  // ── LEFT PANELS — ~20 slabs in a concave circular arc ────────────────────
  // In the reference the panels stand in a curved row behind-left, all parallel
  // to each other (not fanned), forming a concave wall facing the viewer.
  const panelCount = 19;
  const arcRadius = 5.2;          // radius of the imaginary circle the panels sit on
  const arcCenterX = -1.8;        // arc center X (shifted right so the curve wraps left)
  const arcCenterZ = -4.5;        // arc center Z (behind the scene)
  const arcStart = 1.18;          // start angle (radians) — left edge
  const arcEnd   = 1.72;          // end angle — right edge (toward center-back)

  const panelMat = new THREE.MeshStandardMaterial({ color: 0x0c1e4a, metalness: 0.82, roughness: 0.22 });
  const panelFaceMat = new THREE.MeshStandardMaterial({ color: 0x142a5e, metalness: 0.75, roughness: 0.28 });

  for (let i = 0; i < panelCount; i += 1) {
    const t = i / (panelCount - 1);
    const angle = arcStart + t * (arcEnd - arcStart);

    const px = arcCenterX + Math.cos(angle) * arcRadius;
    const pz = arcCenterZ + Math.sin(angle) * arcRadius;

    // panels get slightly taller toward the right end (like reference)
    const panelH = 3.5 + t * 0.9;
    const panelW = 0.18;
    const panelD = 0.09;

    // each panel faces the arc centre (tangent orientation)
    const panelYaw = angle - Math.PI / 2;

    const panel = new THREE.Mesh(new THREE.BoxGeometry(panelW, panelH, panelD), i % 2 === 0 ? panelMat : panelFaceMat);
    panel.position.set(px, panelH / 2 - 0.5, pz);
    panel.rotation.y = panelYaw;
    stageGroup.add(panel);
  }

  // ── RIGHT NEON BUILDINGS — exact wireframe outlines from reference ────────
  const LT = 0.022;   // line thickness
  const neonBrightMat = new THREE.MeshStandardMaterial({ color: 0x00eeff, emissive: 0x00ccee, emissiveIntensity: 4.0, roughness: 1 });
  const neonDimMat    = new THREE.MeshStandardMaterial({ color: 0x00aacc, emissive: 0x008899, emissiveIntensity: 2.0, roughness: 1, transparent: true, opacity: 0.75 });

  // Helper: draw a box frame (wireframe outline) at given position
  const addBox = (group, cx, cy, cz, w, h, d, mat) => {
    // vertical edges
    [[- w/2, -d/2],[w/2,-d/2],[w/2,d/2],[-w/2,d/2]].forEach(([ex, ez]) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(LT, h, LT), mat);
      m.position.set(cx + ex, cy, cz + ez);
      group.add(m);
    });
    // horizontal edges top
    [[-d/2],[d/2]].forEach(([ez]) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, LT, LT), mat);
      m.position.set(cx, cy + h/2, cz + ez);
      group.add(m);
    });
    [[-w/2],[w/2]].forEach(([ex]) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(LT, LT, d), mat);
      m.position.set(cx + ex, cy + h/2, cz);
      group.add(m);
    });
    // horizontal edges bottom
    [[-d/2],[d/2]].forEach(([ez]) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, LT, LT), neonDimMat);
      m.position.set(cx, cy - h/2, cz + ez);
      group.add(m);
    });
    [[-w/2],[w/2]].forEach(([ex]) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(LT, LT, d), neonDimMat);
      m.position.set(cx + ex, cy - h/2, cz);
      group.add(m);
    });
  };

  // ── Building A: slim skyscraper with floor lines + side ladder ────────────
  const buildA = new THREE.Group();
  const bAW = 0.38, bAD = 0.22, bAH = 3.2;

  // main body frame
  addBox(buildA, 0, bAH/2, 0, bAW, bAH, bAD, neonBrightMat);

  // floor level lines (horizontal lines across front face)
  const floorCount = 7;
  for (let f = 1; f < floorCount; f += 1) {
    const fy = (f / floorCount) * bAH;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(bAW, LT, LT), neonDimMat);
    fl.position.set(0, fy, -bAD/2 - 0.001);
    buildA.add(fl);
  }

  // antenna / spire on top
  const spireH = 0.55;
  const spire = new THREE.Mesh(new THREE.BoxGeometry(LT, spireH, LT), neonBrightMat);
  spire.position.set(0, bAH + spireH/2, 0);
  buildA.add(spire);
  // small horizontal bar near spire top
  const spireBar = new THREE.Mesh(new THREE.BoxGeometry(0.14, LT, LT), neonBrightMat);
  spireBar.position.set(0, bAH + spireH * 0.72, 0);
  buildA.add(spireBar);
  const spireBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, LT, LT), neonBrightMat);
  spireBar2.position.set(0, bAH + spireH * 0.9, 0);
  buildA.add(spireBar2);

  // side ladder (attached to right face) — 2 rails + 6 rungs
  const ladderX = bAW/2 + 0.04;
  const ladderH = bAH * 0.58;
  const ladderBot = 0.15;
  const railL = new THREE.Mesh(new THREE.BoxGeometry(LT, ladderH, LT), neonDimMat);
  const railR = railL.clone();
  railL.position.set(ladderX + 0.08, ladderBot + ladderH/2, 0);
  railR.position.set(ladderX - 0.08, ladderBot + ladderH/2, 0);
  buildA.add(railL, railR);
  const rungCount = 7;
  for (let r = 0; r <= rungCount; r += 1) {
    const rung = new THREE.Mesh(new THREE.BoxGeometry(0.18, LT, LT), neonDimMat);
    rung.position.set(ladderX, ladderBot + (r / rungCount) * ladderH, 0);
    buildA.add(rung);
  }

  buildA.position.set(2.28, -0.08, -1.05);
  stageGroup.add(buildA);

  // ── Building B: wide colonnade/arch tower on right ────────────────────────
  const buildB = new THREE.Group();
  const bBW = 0.82, bBD = 0.32, bBH = 1.65;

  // main body frame
  addBox(buildB, 0, bBH/2, 0, bBW, bBH, bBD, neonBrightMat);

  // decorative horizontal band near mid-height
  const band = new THREE.Mesh(new THREE.BoxGeometry(bBW, LT, LT), neonBrightMat);
  band.position.set(0, bBH * 0.62, -bBD/2 - 0.001);
  buildB.add(band);

  // crown: 5 arch columns sitting on top
  const archN = 5;
  const archH = 0.32;
  const archSpacing = bBW / (archN);
  for (let a = 0; a < archN; a += 1) {
    const ax = -bBW/2 + archSpacing * (a + 0.5);
    // vertical pillar
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(LT, archH, LT), neonBrightMat);
    pillar.position.set(ax, bBH + archH/2, -bBD/2);
    buildB.add(pillar);
    // arch top cap
    const cap = new THREE.Mesh(new THREE.BoxGeometry(archSpacing - 0.04, LT, LT), neonDimMat);
    cap.position.set(ax, bBH + archH, -bBD/2);
    buildB.add(cap);
  }
  // crown base bar connecting all pillars
  const crownBase = new THREE.Mesh(new THREE.BoxGeometry(bBW, LT, LT), neonBrightMat);
  crownBase.position.set(0, bBH, -bBD/2);
  buildB.add(crownBase);

  // small base step below the tower
  addBox(buildB, 0, -0.09, 0, bBW + 0.12, 0.18, bBD + 0.08, neonDimMat);

  buildB.position.set(3.3, -0.08, -0.85);
  stageGroup.add(buildB);

  const base = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.08, 1.85), metal);
  base.position.y = -0.04;
  laptopGroup.add(base);

  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(2.48, 0.025, 0.92), darkMetal);
  keyboard.position.set(0, 0.015, -0.23);
  laptopGroup.add(keyboard);

  for (let row = 0; row < 5; row += 1) {
    const keys = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.012, 0.12), new THREE.MeshStandardMaterial({ color: row === 2 ? 0x2854a8 : 0x142b62, metalness: 0.35, roughness: 0.5 }));
    keys.position.set(0, 0.04, -0.56 + row * 0.16);
    laptopGroup.add(keys);
  }

  const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.012, 0.5), new THREE.MeshStandardMaterial({ color: 0x4779c7, metalness: 0.65, roughness: 0.3 }));
  trackpad.position.set(0, 0.04, 0.48);
  laptopGroup.add(trackpad);

  const lidGroup = new THREE.Group();
  lidGroup.position.set(0, 0.04, -0.88);
  lidGroup.rotation.x = 0.18;
  laptopGroup.add(lidGroup);

  const lid = new THREE.Mesh(new THREE.BoxGeometry(2.9, 1.85, 0.06), metal);
  lid.position.y = 0.93;
  lidGroup.add(lid);
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(2.76, 1.69, 0.025), darkMetal);
  bezel.position.set(0, 0.93, 0.045);
  lidGroup.add(bezel);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.62, 1.56), screenMaterial);
  screen.position.set(0, 0.93, 0.065);
  lidGroup.add(screen);

  const particlePositions = new Float32Array(90 * 3);
  for (let index = 0; index < 90; index += 1) {
    const angle = (index / 90) * Math.PI * 2;
    const radius = 2.2 + (Math.random() - 0.5) * 0.8;
    particlePositions[index * 3] = Math.cos(angle) * radius;
    particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 1.8;
    particlePositions[index * 3 + 2] = Math.sin(angle) * radius;
  }
  const particles = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0x8fc0ff, size: 0.025, transparent: true, opacity: 0.65 }));
  particles.geometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  laptopGroup.add(particles);

  renderProjectScreen = (index) => {
    const project = projectData[index] || projectData[0];
    screenContext.fillStyle = '#070b14';
    screenContext.fillRect(0, 0, 1200, 750);
    screenContext.strokeStyle = 'rgba(105,145,230,.12)';
    for (let line = 0; line < 1200; line += 40) { screenContext.beginPath(); screenContext.moveTo(line, 0); screenContext.lineTo(line, 750); screenContext.stroke(); }
    for (let line = 0; line < 750; line += 40) { screenContext.beginPath(); screenContext.moveTo(0, line); screenContext.lineTo(1200, line); screenContext.stroke(); }
    screenContext.fillStyle = '#111a2c';
    screenContext.fillRect(0, 0, 1200, 48);
    screenContext.fillStyle = '#ff6470';
    screenContext.beginPath(); screenContext.arc(28, 24, 7, 0, Math.PI * 2); screenContext.fill();
    screenContext.fillStyle = '#ffcb5c';
    screenContext.beginPath(); screenContext.arc(52, 24, 7, 0, Math.PI * 2); screenContext.fill();
    screenContext.fillStyle = '#5de59b';
    screenContext.beginPath(); screenContext.arc(76, 24, 7, 0, Math.PI * 2); screenContext.fill();
    screenContext.fillStyle = '#7790bb';
    screenContext.font = '16px monospace';
    screenContext.fillText('artjom-becker / portfolio-preview', 112, 30);
    if (!projectFocusActive) {
      screenContext.fillStyle = '#8fbaff';
      screenContext.font = 'bold 38px Arial';
      screenContext.fillText('SYSTEM STANDBY', 72, 220);
      screenContext.fillStyle = '#7895c2';
      screenContext.font = '20px monospace';
      screenContext.fillText('scroll to inspect selected projects', 72, 270);
      screenContext.strokeStyle = '#3d75d8';
      screenContext.lineWidth = 4;
      screenContext.strokeRect(72, 330, 420, 8);
      screenContext.fillStyle = '#4f9aff';
      screenContext.fillRect(72, 330, 190, 8);
      screenContext.fillStyle = '#6b8fc7';
      screenContext.font = '15px monospace';
      screenContext.fillText('stage / ready / awaiting focus', 72, 410);
      screenTexture.needsUpdate = true;
      return;
    }
    screenContext.fillStyle = '#4f9aff';
    screenContext.font = 'bold 19px monospace';
    screenContext.fillText(project.kicker, 72, 125);
    screenContext.fillStyle = '#f1f5ff';
    screenContext.font = 'bold 46px Arial';
    screenContext.fillText(project.title.replace('<br />', ' ').replace('<strong>', '').replace('</strong>', ''), 72, 195);
    screenContext.fillStyle = '#8495b7';
    screenContext.font = '20px Arial';
    screenContext.fillText(project.copy, 72, 245);
    screenContext.fillStyle = '#111d34';
    screenContext.fillRect(72, 285, 1056, 112);
    screenContext.fillStyle = '#6a87b8';
    screenContext.font = '15px monospace';
    screenContext.fillText('LIVE PROJECT SIGNAL', 98, 325);
    screenContext.fillStyle = '#f3f7ff';
    screenContext.font = 'bold 27px monospace';
    screenContext.fillText(project.stack, 98, 370);
    screenContext.fillStyle = '#070b14';
    screenContext.fillRect(72, 440, 1056, 210);
    screenContext.fillStyle = '#4f9aff';
    screenContext.font = '16px monospace';
    screenContext.fillText('> system.observe(project)', 98, 480);
    screenContext.fillStyle = '#80a0cf';
    screenContext.fillText('> render signal / stable / interactive', 98, 520);
    screenContext.fillStyle = '#5de59b';
    screenContext.fillText('> status: nominal', 98, 560);
    screenContext.fillStyle = '#4f9aff';
    for (let bar = 0; bar < 10; bar += 1) { screenContext.fillRect(98 + bar * 92, 615, 64, 7 + ((bar + index) % 5) * 14); }
    screenTexture.needsUpdate = true;
  };
  renderProjectScreen(0);

  let targetX = -0.08;
  let targetY = -0.2;
  let targetZ = 0;
  let pointerActive = false;
  threeLaptopContainer.addEventListener('pointermove', (event) => {
    const bounds = threeLaptopContainer.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    targetY = pointerX * 0.62 - 0.2;
    targetX = pointerY * -0.34 - 0.08;
    targetZ = pointerX * -0.045;
    pointerActive = true;
  });
  threeLaptopContainer.addEventListener('pointerleave', () => {
    targetX = -0.08;
    targetY = -0.2;
    targetZ = 0;
    pointerActive = false;
  });

  const animate = (time) => {
    requestAnimationFrame(animate);
    laptopGroup.rotation.x += (targetX - laptopGroup.rotation.x) * 0.035;
    laptopGroup.rotation.y += (targetY - laptopGroup.rotation.y) * 0.035;
    laptopGroup.rotation.z += (targetZ - laptopGroup.rotation.z) * 0.035;
    laptopGroup.position.y = Math.sin(time * 0.0018) * 0.09;
    laptopGroup.position.x += (((pointerActive ? targetZ * -3 : 0) + Math.sin(time * 0.0012) * 0.015) - laptopGroup.position.x) * 0.035;
    particles.rotation.y = time * 0.00025;
    renderer.render(scene, camera);
  };
  requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    const nextWidth = threeLaptopContainer.clientWidth || 800;
    const nextHeight = threeLaptopContainer.clientHeight || 580;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  });

  const projectDock = document.querySelector('.project-dock');
  let hasEnteredProjectFocus = false;
  const updateScrollFocus = () => {
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = Math.min(window.scrollY / scrollRange, 1);
    camera.position.z = 5.2 - progress * 0.72;
    camera.position.y = 0.5 - progress * 0.08;
    laptopGroup.position.x = progress * 0.18;
    laptopGroup.scale.setScalar(1 + progress * 0.14);
    lidGroup.rotation.x = 0.18 + progress * 1.28;
    stageGroup.position.y = -0.55 - progress * 0.7;
    stageGroup.scale.setScalar(1 - progress * 0.25);
    stageGroup.visible = progress < 0.34;
    stageGroup.traverse((object) => {
      if (object.material && object.material.transparent) object.material.opacity = Math.max(0, 0.92 - progress * 0.92);
    });
    if (projectDock) {
      const projectProgress = Math.max(0, Math.min((progress - 0.38) / 0.42, 1));
      const projectIndex = Math.min(projectData.length - 1, Math.floor(Math.max(0, progress - 0.38) / 0.2));
      const closeProgress = Math.max(0, Math.min((progress - 0.88) / 0.12, 1));
      const windowProgress = projectProgress * (1 - closeProgress);
      projectDock.style.opacity = String(windowProgress);
      projectDock.style.transform = `translateX(${(1 - windowProgress) * 54}px) scale(${0.96 + windowProgress * 0.04})`;
      projectDock.style.pointerEvents = windowProgress > 0.05 ? 'auto' : 'none';
      if (projectProgress > 0.05 && !hasEnteredProjectFocus) {
        hasEnteredProjectFocus = true;
        projectFocusActive = true;
        renderProjectScreen(activeProject);
      }
      if (projectFocusActive && projectIndex !== activeProject && closeProgress < 1) selectProject(projectIndex);
    }
  };
  window.addEventListener('scroll', updateScrollFocus, { passive: true });
  updateScrollFocus();
}

initThreeLaptop();

if (lightSwitch) {
  lightSwitch.addEventListener('click', () => {
    const isLit = document.body.classList.toggle('is-lit');
    lightSwitch.setAttribute('aria-pressed', String(isLit));
    lightSwitch.setAttribute('aria-label', isLit ? 'Licht ausschalten' : 'Licht einschalten');
    setSceneLighting(isLit);
  });
}

const laptopStage = document.querySelector('[data-laptop-stage]');
const laptop = document.querySelector('[data-laptop]');
const projectButtons = document.querySelectorAll('[data-project]');

function selectProject(index) {
  const project = projectData[index];
  if (!project) return;
  activeProject = index;
  document.querySelector('[data-screen-kicker]').innerHTML = project.kicker;
  document.querySelector('[data-screen-title]').innerHTML = project.title;
  document.querySelector('[data-screen-copy]').textContent = project.copy;
  document.querySelector('[data-screen-stack]').textContent = project.stack;
  document.querySelector('[data-screen-metric]').textContent = project.metric;
  projectButtons.forEach((button) => button.classList.toggle('is-active', Number(button.dataset.project) === index));
  renderProjectScreen(index);
}

projectButtons.forEach((button) => {
  button.addEventListener('click', () => selectProject(Number(button.dataset.project)));
});

if (laptopStage && laptop) {
  laptopStage.addEventListener('pointermove', (event) => {
    const bounds = laptopStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    laptop.style.setProperty('--tilt-x', `${y * -8}deg`);
    laptop.style.setProperty('--tilt-y', `${x * 11}deg`);
  });
  laptopStage.addEventListener('pointerleave', () => {
    laptop.style.setProperty('--tilt-x', '0deg');
    laptop.style.setProperty('--tilt-y', '0deg');
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
