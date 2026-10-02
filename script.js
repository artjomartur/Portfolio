const revealItems = document.querySelectorAll('.reveal');

const projectData = [
  { kicker: '01 / MOBILE SYSTEM', title: 'Kinopolis<br /><strong>Operations</strong>', copy: 'Ein ruhiges Werkzeug für schnelle Entscheidungen hinter den Kulissen.', stack: 'REACT NATIVE / PRODUCT', metric: '01' },
  { kicker: '02 / COMMERCE', title: 'Skinstock<br /><strong>Marketplace</strong>', copy: 'Eine visuelle Shopping-Erfahrung für Menschen, die ihre Routine bewusst wählen.', stack: 'BRANDING / WEB APP', metric: '02' },
  { kicker: '03 / RESEARCH', title: 'Relational<br /><strong>Algebra</strong>', copy: 'Komplexe Datenlogik wird zu einer interaktiven visuellen Sprache.', stack: 'THREE.JS / EDUCATION', metric: '03' },
];

const threeLaptopContainer = document.querySelector('[data-three-laptop]');
const heroTitle = document.querySelector('.glitch-title');
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

  scene.add(new THREE.AmbientLight(0x9cbcff, 1.8));
  const blueLight = new THREE.DirectionalLight(0x4a88ff, 3.2);
  blueLight.position.set(3, 4, 4);
  scene.add(blueLight);
  const rimLight = new THREE.PointLight(0x1e5bff, 4, 7);
  rimLight.position.set(-2, 1, 2);
  scene.add(rimLight);

  const laptopGroup = new THREE.Group();
  laptopGroup.rotation.set(-0.08, -0.2, 0);
  scene.add(laptopGroup);

  const metal = new THREE.MeshStandardMaterial({ color: 0x31589d, metalness: 0.8, roughness: 0.24 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x0a1736, metalness: 0.72, roughness: 0.3 });
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
    if (heroTitle) heroTitle.style.transform = `translateX(${pointerX * 16}px) translateY(${pointerY * 8}px)`;
  });
  threeLaptopContainer.addEventListener('pointerleave', () => {
    targetX = -0.08;
    targetY = -0.2;
    targetZ = 0;
    pointerActive = false;
    if (heroTitle) heroTitle.style.transform = 'translateX(0) translateY(0)';
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
  const updateScrollFocus = () => {
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.8, 1), 1);
    camera.position.z = 5.2 - progress * 1.25;
    camera.position.y = 0.5 - progress * 0.22;
    laptopGroup.position.x = progress * 0.18;
    laptopGroup.scale.setScalar(1 + progress * 0.24);
    if (projectDock) {
      projectDock.style.opacity = String(1 - progress * 0.52);
      projectDock.style.transform = `translateX(${progress * 34}px)`;
    }
  };
  window.addEventListener('scroll', updateScrollFocus, { passive: true });
  updateScrollFocus();
}

initThreeLaptop();

const laptopStage = document.querySelector('[data-laptop-stage]');
const laptop = document.querySelector('[data-laptop]');
const projectButtons = document.querySelectorAll('[data-project]');
let activeProject = 0;

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
