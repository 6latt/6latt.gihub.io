import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, controls, scene, renderer, pc, group, mouse, raycaster;

init();
render();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.z = 30;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x080808, 1);
  document.body.appendChild(renderer.domElement);

  group = new THREE.Group();
  scene.add(group);

  const curvePoints = thomas();
  const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);

  const pcMat = new THREE.PointsMaterial({
    color: new THREE.Color(0x5555ff),
    transparent: true,
    size: 0.01,
    blending: THREE.AdditiveBlending
  });

  pc = new THREE.Points(geometry, pcMat);
  group.add(pc);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.dampingFactor = 0.25;
  controls.minDistance = 0.1;
  controls.maxDistance = 50;

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();

  window.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
}

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(pc);

  for (const intersect of intersects) {
    intersect.point.sub(mouse).multiplyScalar(5);
  }

  updateVertices(pc.geometry);

  pc.geometry.attributes.position.needsUpdate = true;
  group.rotation.x += 0.001;
  group.rotation.y += 0.002;
  group.rotation.z -= 0.001;
}

function thomas() {
  const arrayCurve = [];
  let x = 0.1, y = 0.1, z = 0.1, t = 0.1, a = 1, omega = 1;

  for (let i = 0; i < 100000; i++) {
    const dx = -omega * x + a * Math.sin(y);
    const dy = -omega * y + a * Math.sin(z);
    const dz = -omega * z + a * Math.sin(x);

    x += dx * t;
    y += dy * t;
    z += dz * t;

    arrayCurve.push(new THREE.Vector3(x, y, z));
  }

  return arrayCurve;
}

function updateVertices(geometry) {
  const positions = geometry.attributes.position.array;
  const t = 0.1, a = 1, omega = 1;

  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i], y = positions[i + 1], z = positions[i + 2];

    const dx = -omega * x + a * Math.sin(y);
    const dy = -omega * y + a * Math.sin(z);
    const dz = -omega * z + a * Math.sin(x);

    positions[i] += dx * t;
    positions[i + 1] += dy * t;
    positions[i + 2] += dz * t;
  }
}
