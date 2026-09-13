const hero = document.querySelector('#hero');
const journey = document.querySelector('#journey');
const opening = document.querySelector('#opening-copy');
const chapter = document.querySelector('#chapter-card');
const motionButton = document.querySelector('#motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;
let scheduledFrame = 0;
let targetX = 0;
let targetY = 0;
let pointerX = 0;
let pointerY = 0;
let cameraProgress = 0;

const clamp = value => Math.min(1, Math.max(0, value));

function updateScene() {
  scheduledFrame = 0;
  const bounds = journey.getBoundingClientRect();
  const travel = Math.max(1, journey.offsetHeight - hero.offsetHeight);
  const progress = reducedMotion.matches ? 0 : clamp(-bounds.top / travel);
  const chapterProgress = reducedMotion.matches ? 1 : clamp((progress - 0.37) / 0.28);
  const still = paused || reducedMotion.matches;
  if (!paused) {
    pointerX += ((still ? 0 : targetX) - pointerX) * 0.09;
    pointerY += ((still ? 0 : targetY) - pointerY) * 0.09;
    cameraProgress = progress;
  }
  hero.style.setProperty('--chapter', String(progress));
  hero.style.setProperty('--camera', String(cameraProgress));
  hero.style.setProperty('--chapter-opacity', reducedMotion.matches || progress > 0.43 ? '1' : '0');
  hero.style.setProperty('--opening-opacity', progress < 0.34 || reducedMotion.matches ? '1' : '0');
  hero.style.setProperty('--chapter-offset', `${still ? 0 : (1 - chapterProgress) * 65}px`);
  hero.style.setProperty('--pointer-x', `${pointerX.toFixed(2)}px`);
  hero.style.setProperty('--pointer-y', `${pointerY.toFixed(2)}px`);
  hero.style.setProperty('--progress-width', `${progress * 100}%`);
  const chapterVisible = reducedMotion.matches || progress > 0.43;
  chapter.classList.toggle('visible', chapterVisible);
  chapter.inert = !chapterVisible;
  chapter.setAttribute('aria-hidden', String(!chapterVisible));
  opening.inert = !reducedMotion.matches && progress > 0.4;
  document.querySelector('#chapter-number').textContent = progress > 0.5 ? '02' : '01';
  if (!paused && Math.abs(pointerX - (still ? 0 : targetX)) + Math.abs(pointerY - (still ? 0 : targetY)) > 0.1) {
    scheduleScene();
  }
}

function scheduleScene() {
  if (!scheduledFrame) scheduledFrame = requestAnimationFrame(updateScene);
}

hero.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || paused || reducedMotion.matches) return;
  const bounds = hero.getBoundingClientRect();
  targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
  targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
  scheduleScene();
});
hero.addEventListener('pointerleave', () => {
  targetX = 0;
  targetY = 0;
  scheduleScene();
});
window.addEventListener('scroll', scheduleScene, { passive: true });
window.addEventListener('resize', scheduleScene);
reducedMotion.addEventListener('change', scheduleScene);
motionButton.addEventListener('click', () => {
  paused = !paused;
  document.body.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? 'Resume scene motion' : 'Pause scene motion');
  document.querySelector('#motion-label').textContent = paused ? 'Resume motion' : 'Pause motion';
  scheduleScene();
});
new IntersectionObserver(([entry]) => {
  hero.classList.toggle('scene-offscreen', !entry.isIntersecting);
}).observe(hero);
scheduleScene();
