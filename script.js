const revealItems = document.querySelectorAll('.reveal');

const projectData = [
  { kicker: '01 / MOBILE SYSTEM', title: 'Kinopolis<br /><strong>Operations</strong>', copy: 'Ein ruhiges Werkzeug für schnelle Entscheidungen hinter den Kulissen.', stack: 'REACT NATIVE / PRODUCT', metric: '01' },
  { kicker: '02 / COMMERCE', title: 'Skinstock<br /><strong>Marketplace</strong>', copy: 'Eine visuelle Shopping-Erfahrung für Menschen, die ihre Routine bewusst wählen.', stack: 'BRANDING / WEB APP', metric: '02' },
  { kicker: '03 / RESEARCH', title: 'Relational<br /><strong>Algebra</strong>', copy: 'Komplexe Datenlogik wird zu einer interaktiven visuellen Sprache.', stack: 'THREE.JS / EDUCATION', metric: '03' },
];

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
