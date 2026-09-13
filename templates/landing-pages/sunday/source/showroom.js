import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const stage = document.querySelector('#car-stage');
const canvas = document.querySelector('#car-canvas');
const status = document.querySelector('#model-status');
const range = document.querySelector('#open-range');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = value => Math.max(0, Math.min(1, value));
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch {
  status.textContent = 'Your browser cannot display the interactive car. The studio image is shown instead.';
  stage.dataset.failed = 'true';
}
if (renderer) startShowroom();

function startShowroom() {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 40);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minPolarAngle = .6;
  controls.maxPolarAngle = 1.48;
  controls.target.set(0, .64, 0);
  controls.enabled = false;
  const generator = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = generator.fromScene(room, .04).texture;
  scene.environmentIntensity = .85;
  room.dispose(); generator.dispose();
  const key = new THREE.DirectionalLight(0xffefda, 2.3);
  key.position.set(-3, 7, 4); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5 });
  key.shadow.normalBias = .015; key.shadow.bias = -.0001;
  scene.add(key, new THREE.HemisphereLight(0xf6f2ff, 0x583743, .7));
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: .19 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -.007; floor.receiveShadow = true; scene.add(floor);
  const hinges = [];
  const paints = new Set();
  let opening = 0, targetOpening = 0, scrollProgress = 0, paused = reduced.matches;
  let manualOpening = false, inspecting = false, visible = true, loaded = false;
  let targetAngle = -.72, angle = -.72, clock = 0, lastTime = 0, distance = 5.5;

  const draco = new DRACOLoader().setDecoderPath('./assets/draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco);
  loader.load('./assets/porsche-911.glb', gltf => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model, true);
    const center = box.getCenter(new THREE.Vector3());
    model.position.set(-center.x, -box.min.y, -center.z);
    model.traverse(object => {
      if (!object.isMesh) return;
      object.castShadow = true; object.receiveShadow = true;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (material.name === 'paint') {
          material.color.set('#711429'); material.metalness = .6; material.roughness = .24;
          material.clearcoat = 1; material.clearcoatRoughness = .11;
          paints.add(material);
        }
        if (material.name === 'window') {
          material.color.set('#26313a'); material.metalness = .25; material.roughness = .12;
        }
        if (material.name === 'TrunkLiner') material.side = THREE.DoubleSide;
      }
    });
    for (const [name, axis, rotation] of [
      ['DoorLeftHinge', new THREE.Vector3(0, 1, 0), 1.02],
      ['DoorRightHinge', new THREE.Vector3(0, 1, 0), -1.02],
      ['BonnetHinge', new THREE.Vector3(1, 0, 0), -.78]
    ]) {
      const node = model.getObjectByName(name);
      if (node) hinges.push({ node, axis, rotation, base: node.quaternion.clone() });
    }
    scene.add(model); loaded = true;
    stage.dataset.loaded = 'true';
    document.querySelectorAll('[data-car-control]').forEach(element => element.disabled = false);
    status.textContent = '911 Carrera 4S · A study in claret';
    draco.dispose();
  }, event => {
    if (event.total) status.textContent = `Preparing the 911 · ${Math.round(event.loaded / event.total * 100)}%`;
  }, () => {
    stage.dataset.failed = 'true';
    status.textContent = 'The interactive model could not load. Reload the page to try again.';
  });

  function updateOpening(value) {
    manualOpening = true; targetOpening = value;
    syncOpeningControls(value);
  }
  function syncOpeningControls(value) {
    range.value = String(Math.round(value * 100));
    range.setAttribute('aria-valuetext', `${Math.round(value * 100)} percent open`);
    document.querySelector('#closed-button').setAttribute('aria-pressed', String(value === 0));
    document.querySelector('#opened-button').setAttribute('aria-pressed', String(value === 1));
  }
  range.addEventListener('input', () => updateOpening(Number(range.value) / 100));
  document.querySelector('#closed-button').onclick = () => updateOpening(0);
  document.querySelector('#opened-button').onclick = () => updateOpening(1);
  document.querySelector('#inspect-button').onclick = event => {
    inspecting = !inspecting; controls.enabled = inspecting;
    stage.dataset.inspect = String(inspecting);
    if (inspecting) document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', 'false'));
    event.currentTarget.textContent = inspecting ? 'Exit orbit ↗' : 'Explore in 360° ↗';
    event.currentTarget.setAttribute('aria-pressed', String(inspecting));
    document.querySelector('#orbit-hint').textContent = inspecting ? 'Drag to orbit · arrow keys to rotate' : 'Scroll for a closer look';
  };
  canvas.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') targetAngle -= .25;
    if (event.key === 'ArrowRight') targetAngle += .25;
    inspecting = false; controls.enabled = false;
    stage.dataset.inspect = 'false';
    document.querySelector('#inspect-button').setAttribute('aria-pressed', 'false');
    document.querySelector('#inspect-button').textContent = 'Explore in 360° ↗';
  });
  document.querySelectorAll('[data-view]').forEach(button => button.onclick = () => {
    targetAngle = Number(button.dataset.view); inspecting = false; controls.enabled = false;
    stage.dataset.inspect = 'false';
    document.querySelector('#inspect-button').textContent = 'Explore in 360° ↗';
    document.querySelector('#inspect-button').setAttribute('aria-pressed', 'false');
    document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  });
  document.querySelectorAll('[data-paint]').forEach(button => button.onclick = () => {
    paints.forEach(material => material.color.set(button.dataset.paint));
    document.querySelectorAll('[data-paint]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelector('#paint-name').textContent = button.getAttribute('aria-label');
    status.textContent = `911 Carrera 4S · ${button.getAttribute('aria-label')}`;
  });
  const pauseButton = document.querySelector('#motion-toggle');
  function updatePause() {
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.textContent = paused ? 'Resume motion ▷' : 'Pause motion Ⅱ';
  }
  pauseButton.onclick = () => { paused = !paused; updatePause(); };
  reduced.addEventListener('change', () => { paused = reduced.matches; updatePause(); });
  updatePause();
  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height);
    distance = window.innerWidth < 760 ? 8.2 : 5.5;
  }
  new ResizeObserver(resize).observe(stage); resize();
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }).observe(stage);
  window.addEventListener('sunday-scroll', event => {
    if (Math.abs(event.detail - scrollProgress) < .001) return;
    if (!paused) scrollProgress = event.detail;
    if (!inspecting && !paused) {
      targetAngle = -.72 - scrollProgress * 1.9;
      document.querySelectorAll('[data-view]').forEach(button => button.setAttribute('aria-pressed', 'false'));
    }
    if (!manualOpening && !paused) {
      targetOpening = clamp((scrollProgress - .3) / .45);
      syncOpeningControls(targetOpening);
    }
  });
  const rotation = new THREE.Quaternion();
  function render(time) {
    requestAnimationFrame(render);
    const dt = Math.min((time - lastTime) / 1000, .05); lastTime = time;
    if (!visible || document.hidden) return;
    if (!paused && !inspecting) clock += dt;
    const ease = reduced.matches ? 1 : 1 - Math.exp(-dt * 5);
    opening += (targetOpening - opening) * ease;
    angle += (targetAngle - angle) * ease;
    for (const hinge of hinges) hinge.node.quaternion.copy(hinge.base).multiply(rotation.setFromAxisAngle(hinge.axis, hinge.rotation * opening));
    if (!inspecting) {
      const orbit = angle + (paused ? 0 : Math.sin(clock * .27) * .05);
      camera.position.set(Math.sin(orbit) * distance, 1.85 + scrollProgress * .7, Math.cos(orbit) * distance);
    }
    controls.update(); renderer.render(scene, camera);
    canvas.dataset.opening = opening.toFixed(2); canvas.dataset.ready = String(loaded);
  }
  requestAnimationFrame(render);
}
