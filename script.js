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
  camera.position.set(0, 0.3, 3.8);

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

  const ambientLight = new THREE.AmbientLight(0x9cbcff, 1.8);
  scene.add(ambientLight);
  const blueLight = new THREE.DirectionalLight(0x4a88ff, 3.2);
  blueLight.position.set(3, 4, 4);
  scene.add(blueLight);
  const rimLight = new THREE.PointLight(0x1e5bff, 4, 7);
  rimLight.position.set(-2, 1, 2);
  scene.add(rimLight);
  setSceneLighting = (isLit) => {
    ambientLight.intensity = isLit ? 2.8 : 1.8;
    blueLight.intensity = isLit ? 5.2 : 3.2;
    rimLight.intensity = isLit ? 7 : 4;
  };

  const laptopGroup = new THREE.Group();
  laptopGroup.rotation.set(-0.06, 0, 0);   // straight-on, no side tilt
  scene.add(laptopGroup);





  const metal = new THREE.MeshStandardMaterial({ color: 0x1a3a7a, metalness: 0.92, roughness: 0.12 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x060e22, metalness: 0.85, roughness: 0.18 });
  const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false });


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

  // ── HERO SCREEN: animated name ────────────────────────────────────────────
  const NAME_FULL = 'Artjom Becker';
  const ROLE_LINE = 'Software Developer / CS Student';
  let heroAnimStart = null;

  const drawHeroScreen = (time) => {
    if (projectFocusActive) return;   // hand off to renderProjectScreen when scrolled

    if (!heroAnimStart) heroAnimStart = time;
    const elapsed = (time - heroAnimStart) / 1000;  // seconds

    const W = 1200, H = 750;
    screenContext.clearRect(0, 0, W, H);

    // deep dark background
    screenContext.fillStyle = '#050c1a';
    screenContext.fillRect(0, 0, W, H);

    // subtle grid
    screenContext.strokeStyle = 'rgba(60,100,200,.07)';
    screenContext.lineWidth = 1;
    for (let x = 0; x < W; x += 48) { screenContext.beginPath(); screenContext.moveTo(x,0); screenContext.lineTo(x,H); screenContext.stroke(); }
    for (let y = 0; y < H; y += 48) { screenContext.beginPath(); screenContext.moveTo(0,y); screenContext.lineTo(W,y); screenContext.stroke(); }

    // mac-style title bar
    screenContext.fillStyle = '#0d1626';
    screenContext.fillRect(0, 0, W, 44);
    [[28,'#ff5f57'],[52,'#ffbd2e'],[76,'#28c840']].forEach(([x,c]) => {
      screenContext.fillStyle = c;
      screenContext.beginPath(); screenContext.arc(x, 22, 7, 0, Math.PI*2); screenContext.fill();
    });
    screenContext.fillStyle = '#3a4f70';
    screenContext.font = '14px monospace';
    screenContext.fillText('artjom.dev  —  portfolio', 105, 28);

    // typewriter: name reveals letter by letter over 1.4s
    const charDelay = 0.08;
    const visibleChars = Math.min(NAME_FULL.length, Math.floor(elapsed / charDelay));
    const partialName = NAME_FULL.slice(0, visibleChars);

    // glitch: occasional horizontal offset on the name
    const glitchActive = Math.sin(elapsed * 17) > 0.93;
    const glitchOffsetX = glitchActive ? (Math.random() - 0.5) * 14 : 0;
    const glitchOffsetY = glitchActive ? (Math.random() - 0.5) * 6 : 0;

    // name — large, bright
    screenContext.save();
    screenContext.font = 'bold 112px Arial';
    screenContext.letterSpacing = '-4px';

    if (glitchActive) {
      // red ghost
      screenContext.fillStyle = 'rgba(255,60,80,.55)';
      screenContext.fillText(partialName, 72 + glitchOffsetX + 8, 330 + glitchOffsetY);
      // cyan ghost
      screenContext.fillStyle = 'rgba(0,220,255,.45)';
      screenContext.fillText(partialName, 72 + glitchOffsetX - 8, 330 + glitchOffsetY);
    }
    screenContext.fillStyle = '#e8f2ff';
    screenContext.fillText(partialName, 72, 330);
    screenContext.restore();

    // blinking cursor after the typed text
    const showCursor = visibleChars < NAME_FULL.length || Math.floor(elapsed * 2) % 2 === 0;
    if (showCursor) {
      const nameW = screenContext.measureText(partialName).width;
      // measure with same font first
      screenContext.font = 'bold 112px Arial';
      const nw = screenContext.measureText(partialName).width;
      screenContext.fillStyle = '#4f9aff';
      screenContext.fillRect(72 + nw + 6, 240, 6, 90);
    }

    // role line — fades in after name is complete
    const roleElapsed = elapsed - NAME_FULL.length * charDelay - 0.2;
    if (roleElapsed > 0) {
      const roleAlpha = Math.min(1, roleElapsed / 0.6);
      screenContext.globalAlpha = roleAlpha;
      screenContext.fillStyle = '#4f9aff';
      screenContext.font = '500 28px monospace';
      screenContext.fillText(ROLE_LINE, 74, 378);
      screenContext.globalAlpha = 1;
    }

    // divider line
    const dividerAlpha = Math.min(1, Math.max(0, elapsed - 1.8) / 0.5);
    if (dividerAlpha > 0) {
      screenContext.globalAlpha = dividerAlpha;
      screenContext.strokeStyle = '#1e3a70';
      screenContext.lineWidth = 1;
      screenContext.beginPath(); screenContext.moveTo(72, 400); screenContext.lineTo(W - 72, 400); screenContext.stroke();
      // blinking status indicator
      const blink = Math.floor(elapsed * 1.8) % 2 === 0;
      screenContext.fillStyle = blink ? '#43e89a' : '#1e4a30';
      screenContext.beginPath(); screenContext.arc(82, 430, 5, 0, Math.PI*2); screenContext.fill();
      screenContext.fillStyle = '#3a5a80';
      screenContext.font = '14px monospace';
      screenContext.fillText('READY  /  scroll to explore', 100, 436);
      screenContext.globalAlpha = 1;
    }

    // scanline overlay
    for (let y = 0; y < H; y += 4) {
      screenContext.fillStyle = 'rgba(0,0,0,.06)';
      screenContext.fillRect(0, y, W, 2);
    }

    screenTexture.needsUpdate = true;
  };

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

  let targetX = -0.06;
  let targetY = 0;
  let targetZ = 0;
  let pointerActive = false;
  threeLaptopContainer.addEventListener('pointermove', (event) => {
    const bounds = threeLaptopContainer.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;
    targetY = pointerX * 0.5;
    targetX = pointerY * -0.28 - 0.06;
    targetZ = pointerX * -0.04;
    pointerActive = true;
  });
  threeLaptopContainer.addEventListener('pointerleave', () => {
    targetX = -0.06;
    targetY = 0;
    targetZ = 0;
    pointerActive = false;
  });

  const animate = (time) => {
    requestAnimationFrame(animate);
    laptopGroup.rotation.x += (targetX - laptopGroup.rotation.x) * 0.035;
    laptopGroup.rotation.y += (targetY - laptopGroup.rotation.y) * 0.035;
    laptopGroup.rotation.z += (targetZ - laptopGroup.rotation.z) * 0.035;
    laptopGroup.position.y = Math.sin(time * 0.0018) * 0.08;
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
    // Use viewport-based scroll: 100vh scroll = full progress
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    // shift laptop to the left and zoom slightly out as user scrolls
    camera.position.z = 3.8 + progress * 1.4;
    camera.position.x = progress * -1.2;
    camera.position.y = 0.3 - progress * 0.1;
    laptopGroup.scale.setScalar(1 - progress * 0.08);
    const laptopCloseProgress = Math.max(0, Math.min((progress - 0.9) / 0.1, 1));
    lidGroup.rotation.x = 0.18 + laptopCloseProgress * 1.28;
    if (projectDock) {
      const projectProgress = Math.max(0, Math.min((progress - 0.18) / 0.68, 1));
      const projectIndex = Math.min(projectData.length - 1, Math.floor(Math.max(0, progress - 0.18) / 0.22));
      const closeProgress = Math.max(0, Math.min((progress - 0.9) / 0.1, 1));
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
