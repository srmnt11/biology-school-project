'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PawPrint, Sprout, ZoomIn, ZoomOut, RotateCw, Pause, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import {
  organelleData,
  cellMeta,
  type CellType,
  type OrganelleName,
} from '@/lib/cell-data';

type MeshEntry = {
  mesh: THREE.Mesh;
  organelle: OrganelleName;
  originalColor: string;
  originalOpacity?: number;
};

function disposeMesh(mesh: THREE.Mesh) {
  mesh.geometry.dispose();
  if (Array.isArray(mesh.material)) mesh.material.forEach((m) => m.dispose());
  else mesh.material.dispose();
}

// Enhanced plant cell with better visibility
function buildPlantCell(): {
  group: THREE.Group;
  outerShell: THREE.Mesh;
  meshMap: MeshEntry[];
} {
  const group = new THREE.Group();
  const meshMap: MeshEntry[] = [];

  // Cell Wall - semi-transparent with visible edges
  const wallMat = new THREE.MeshPhongMaterial({
    color: organelleData['Cell Wall'].color,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide,
    shininess: 30,
  });
  const outerShell = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.8, 2.4), wallMat);
  group.add(outerShell);
  meshMap.push({
    mesh: outerShell,
    organelle: 'Cell Wall',
    originalColor: organelleData['Cell Wall'].color,
    originalOpacity: 0.25,
  });

  // Add wireframe overlay for cell wall structure
  const wireMat = new THREE.MeshBasicMaterial({
    color: organelleData['Cell Wall'].color,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const wireFrame = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.8, 2.4), wireMat);
  group.add(wireFrame);

  // Cytoplasm - subtle background
  const cytoMat = new THREE.MeshPhongMaterial({
    color: '#d4e8c2',
    transparent: true,
    opacity: 0.3,
    shininess: 10,
  });
  const cytoplasm = new THREE.Mesh(new THREE.BoxGeometry(3.0, 2.4, 2.0), cytoMat);
  group.add(cytoplasm);

  // Central Vacuole - large, prominent
  const vacMat = new THREE.MeshPhongMaterial({
    color: organelleData['Central Vacuole'].color,
    transparent: true,
    opacity: 0.6,
    shininess: 100,
    specular: new THREE.Color(0xffffff),
  });
  const vacuole = new THREE.Mesh(new THREE.SphereGeometry(0.9, 32, 32), vacMat);
  vacuole.position.set(-0.3, -0.1, 0);
  group.add(vacuole);
  meshMap.push({
    mesh: vacuole,
    organelle: 'Central Vacuole',
    originalColor: organelleData['Central Vacuole'].color,
    originalOpacity: 0.6,
  });

  // Nucleus - prominent with glow
  const nucMat = new THREE.MeshPhongMaterial({
    color: organelleData.Nucleus.color,
    shininess: 100,
    specular: new THREE.Color(0x444466),
    emissive: organelleData.Nucleus.color,
    emissiveIntensity: 0.1,
  });
  const nucleus = new THREE.Mesh(new THREE.SphereGeometry(0.6, 32, 32), nucMat);
  nucleus.position.set(0.9, 0.3, 0.2);
  group.add(nucleus);
  meshMap.push({
    mesh: nucleus,
    organelle: 'Nucleus',
    originalColor: organelleData.Nucleus.color,
  });

  // Nucleolus
  const nolMat = new THREE.MeshPhongMaterial({
    color: '#3d1f5e',
    shininess: 80,
  });
  const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), nolMat);
  nucleolus.position.set(0.95, 0.4, 0.25);
  group.add(nucleolus);

  // Chloroplasts - more realistic with internal structure
  for (let i = 0; i < 16; i++) {
    const mat = new THREE.MeshPhongMaterial({
      color: organelleData.Chloroplasts.color,
      shininess: 60,
      emissive: organelleData.Chloroplasts.color,
      emissiveIntensity: 0.05,
    });
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.06, 16), mat);
    disc.position.set(
      (Math.random() - 0.5) * 2.4,
      (Math.random() - 0.5) * 1.8,
      (Math.random() - 0.5) * 1.6
    );
    disc.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    group.add(disc);
    meshMap.push({
      mesh: disc,
      organelle: 'Chloroplasts',
      originalColor: organelleData.Chloroplasts.color,
    });
  }

  return { group, outerShell, meshMap };
}

// Enhanced animal cell with better visibility
function buildAnimalCell(): {
  group: THREE.Group;
  outerShell: THREE.Mesh;
  meshMap: MeshEntry[];
} {
  const group = new THREE.Group();
  const meshMap: MeshEntry[] = [];

  // Plasma Membrane - more visible with slight glow
  const sphereMat = new THREE.MeshPhongMaterial({
    color: organelleData['Plasma Membrane'].color,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
    shininess: 80,
    specular: new THREE.Color(0x8888aa),
  });
  const outerShell = new THREE.Mesh(
    new THREE.SphereGeometry(2.2, 64, 64, 0, Math.PI * 1.65, 0, Math.PI),
    sphereMat
  );
  group.add(outerShell);
  meshMap.push({
    mesh: outerShell,
    organelle: 'Plasma Membrane',
    originalColor: organelleData['Plasma Membrane'].color,
    originalOpacity: 0.4,
  });

  // Nucleus - large and prominent
  const nucMat = new THREE.MeshPhongMaterial({
    color: organelleData.Nucleus.color,
    shininess: 100,
    specular: new THREE.Color(0x444466),
    emissive: organelleData.Nucleus.color,
    emissiveIntensity: 0.1,
  });
  const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), nucMat);
  nuc.position.set(0.3, 0.2, 0);
  group.add(nuc);
  meshMap.push({
    mesh: nuc,
    organelle: 'Nucleus',
    originalColor: organelleData.Nucleus.color,
  });

  // Nucleolus
  const nolMat = new THREE.MeshPhongMaterial({
    color: '#3d1f5e',
    shininess: 80,
  });
  const nucleolus = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), nolMat);
  nucleolus.position.set(0.4, 0.3, 0.1);
  group.add(nucleolus);

  // Mitochondria - more detailed with cristae
  for (let i = 0; i < 20; i++) {
    const mat = new THREE.MeshPhongMaterial({
      color: organelleData.Mitochondria.color,
      shininess: 80,
      specular: new THREE.Color(0x666644),
      emissive: organelleData.Mitochondria.color,
      emissiveIntensity: 0.05,
    });
    const mito = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.35, 12), mat);

    const dist = 0.9 + Math.random() * 0.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    mito.position.set(
      dist * Math.sin(phi) * Math.cos(theta),
      dist * Math.sin(phi) * Math.sin(theta),
      dist * Math.cos(phi)
    );
    mito.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    group.add(mito);
    meshMap.push({
      mesh: mito,
      organelle: 'Mitochondria',
      originalColor: organelleData.Mitochondria.color,
    });
  }

  // Lysosomes - small but visible
  for (let i = 0; i < 12; i++) {
    const mat = new THREE.MeshPhongMaterial({
      color: organelleData.Lysosomes.color,
      shininess: 60,
      emissive: organelleData.Lysosomes.color,
      emissiveIntensity: 0.05,
    });
    const lyso = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), mat);

    const dist = 0.8 + Math.random() * 0.9;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    lyso.position.set(
      dist * Math.sin(phi) * Math.cos(theta),
      dist * Math.sin(phi) * Math.sin(theta),
      dist * Math.cos(phi)
    );
    group.add(lyso);
    meshMap.push({
      mesh: lyso,
      organelle: 'Lysosomes',
      originalColor: organelleData.Lysosomes.color,
    });
  }

  return { group, outerShell, meshMap };
}

function applyHighlight(
  meshMap: MeshEntry[],
  selected: OrganelleName | null,
  highlightOn: boolean,
  crossSection: boolean,
  cellType: CellType,
  outerShell: THREE.Mesh | null
) {
  const shellOpacity = crossSection ? (cellType === 'plant' ? 0.3 : 0.3) : 0.95;

  meshMap.forEach(({ mesh, organelle, originalColor, originalOpacity }) => {
    const mat = mesh.material as THREE.MeshPhongMaterial;
    const isSelected = highlightOn && selected === organelle;

    if (isSelected) {
      // Highlight selected organelle
      mat.color.set('#ffd700');
      if (mat.transparent) mat.opacity = 0.9;
      if (mat.emissive) {
        mat.emissive.set('#ffd700');
        mat.emissiveIntensity = 0.3;
      }
      // Scale up slightly for emphasis
      mesh.scale.set(1.15, 1.15, 1.15);
    } else {
      // Reset to original
      mat.color.set(originalColor);
      if (mat.transparent && originalOpacity !== undefined) {
        mat.opacity = originalOpacity;
      }
      if (mat.emissive) {
        mat.emissive.set(originalColor);
        mat.emissiveIntensity = 0.05;
      }
      mesh.scale.set(1, 1, 1);

      // Handle outer shell specifically
      if (mesh === outerShell) {
        mat.opacity = shellOpacity;
      }
    }
  });
}

// --- Orbit camera helpers -------------------------------------------------
// The camera orbits a fixed target at the origin using spherical
// coordinates (radius, theta = azimuth, phi = polar angle). This keeps the
// camera always aimed at the model, so zooming and rotating never drift the
// framing off-center — the bug in the previous z-only zoom / free-Euler
// rotation approach.

const MIN_RADIUS = 3.4;
const MAX_RADIUS = 13;
const PHI_MIN = 0.35; // radians from the top pole
const PHI_MAX = Math.PI - 0.35; // radians from the bottom pole

const INITIAL_CAMERA_POS = new THREE.Vector3(4, 2, 6);

function initialOrbit() {
  const radius = INITIAL_CAMERA_POS.length();
  const theta = Math.atan2(INITIAL_CAMERA_POS.x, INITIAL_CAMERA_POS.z);
  const phi = Math.acos(INITIAL_CAMERA_POS.y / radius);
  return { radius, theta, phi };
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

type OrbitState = { radius: number; theta: number; phi: number };

function applyOrbit(camera: THREE.PerspectiveCamera, orbit: OrbitState) {
  const { radius, theta, phi } = orbit;
  camera.position.set(
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.cos(theta)
  );
  camera.lookAt(0, 0, 0);
}
// ---------------------------------------------------------------------------

type ThreeState = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  group: THREE.Group | null;
  outerShell: THREE.Mesh | null;
  meshMap: MeshEntry[];
  raycaster: THREE.Raycaster;
  frameId: number;
};

export type Cell3DViewerProps = {
  lockType?: CellType;
  className?: string;
};

export function Cell3DViewer({ lockType, className }: Cell3DViewerProps) {
  const initialType = lockType ?? 'plant';
  const [cellType, setCellType] = useState<CellType>(initialType);
  const [selected, setSelected] = useState<OrganelleName>(cellMeta[initialType].organelles[0]);
  const [highlightOn, setHighlightOn] = useState(true);
  const [crossSection, setCrossSection] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<ThreeState | null>(null);
  const dragRef = useRef({ down: false, dragging: false, x: 0, y: 0 });
  const orbitRef = useRef<OrbitState>(initialOrbit());
  const autoRotateRef = useRef(autoRotate);

  // Keep the ref in sync so the render loop (set up once) always sees the
  // latest toggle value instead of a stale closure.
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  // Init scene once on mount
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f8fafc');

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    orbitRef.current = initialOrbit();
    applyOrbit(camera, orbitRef.current);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x8888ff, 0.4);
    fillLight.position.set(-3, 1, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(-2, 4, -3);
    scene.add(rimLight);

    // Add subtle grid or ground
    const gridHelper = new THREE.GridHelper(6, 12, '#e2e8f0', '#e2e8f0');
    gridHelper.position.y = -1.8;
    scene.add(gridHelper);

    stateRef.current = {
      scene,
      camera,
      renderer,
      group: null,
      outerShell: null,
      meshMap: [],
      raycaster: new THREE.Raycaster(),
      frameId: 0,
    };

    const animate = () => {
      const s = stateRef.current;
      if (!s) return;
      s.frameId = requestAnimationFrame(animate);

      // Subtle auto-orbit when not dragging and the toggle is on — orbits
      // the camera rather than spinning the model, so lighting/shading on
      // the cell stays stable.
      if (!dragRef.current.down && autoRotateRef.current) {
        orbitRef.current.theta += 0.0025;
        applyOrbit(s.camera, orbitRef.current);
      }

      s.renderer.render(s.scene, s.camera);
    };
    animate();

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      const s = stateRef.current;
      if (!entry || !s) return;
      const { width: w, height: h } = entry.contentRect;
      if (w === 0 || h === 0) return;
      s.camera.aspect = w / h;
      s.camera.updateProjectionMatrix();
      s.renderer.setSize(w, h);
    });
    ro.observe(mount);

    const handleClick = (e: PointerEvent) => {
      const s = stateRef.current;
      if (!s) return;
      const rect = mount.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      s.raycaster.setFromCamera(mouse, s.camera);
      const hits = s.raycaster.intersectObjects(s.meshMap.map((m) => m.mesh));
      if (hits.length > 0) {
        const found = s.meshMap.find((m) => m.mesh === hits[0].object);
        if (found) setSelected(found.organelle);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      dragRef.current = { down: true, dragging: false, x: e.clientX, y: e.clientY };
    };
    const handlePointerMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d.down) return;
      const deltaX = e.clientX - d.x;
      const deltaY = e.clientY - d.y;
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) d.dragging = true;
      const s = stateRef.current;
      if (s && d.dragging) {
        const o = orbitRef.current;
        o.theta -= deltaX * 0.008;
        o.phi = clamp(o.phi - deltaY * 0.008, PHI_MIN, PHI_MAX);
        applyOrbit(s.camera, o);
      }
      d.x = e.clientX;
      d.y = e.clientY;
    };
    const handlePointerUp = (e: PointerEvent) => {
      const d = dragRef.current;
      if (d.down && !d.dragging) handleClick(e);
      d.down = false;
    };
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const s = stateRef.current;
      if (!s) return;
      const o = orbitRef.current;
      o.radius = clamp(o.radius + e.deltaY * 0.01, MIN_RADIUS, MAX_RADIUS);
      applyOrbit(s.camera, o);
    };

    mount.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    mount.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      const s = stateRef.current;
      cancelAnimationFrame(s?.frameId ?? 0);
      ro.disconnect();
      mount.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      mount.removeEventListener('wheel', handleWheel);

      s?.group?.traverse((obj) => {
        if (obj instanceof THREE.Mesh) disposeMesh(obj);
      });
      s?.renderer.dispose();
      if (s && mount.contains(s.renderer.domElement)) {
        mount.removeChild(s.renderer.domElement);
      }
      stateRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rebuild the model whenever the cell type changes
  useEffect(() => {
    const s = stateRef.current;
    if (!s) return;

    if (s.group) {
      s.scene.remove(s.group);
      s.group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) disposeMesh(obj);
      });
    }

    const built = cellType === 'plant' ? buildPlantCell() : buildAnimalCell();
    s.scene.add(built.group);
    s.group = built.group;
    s.outerShell = built.outerShell;
    s.meshMap = built.meshMap;

    setSelected(cellMeta[cellType].organelles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellType]);

  // Re-apply colors/opacity whenever selection or toggles change
  useEffect(() => {
    const s = stateRef.current;
    if (!s || s.meshMap.length === 0) return;
    applyHighlight(s.meshMap, selected, highlightOn, crossSection, cellType, s.outerShell);
  }, [selected, highlightOn, crossSection, cellType]);

  // Zoom controls — scale the orbit radius, then re-aim the camera so it
  // never loses the target the way the old position.z-only zoom did.
  const handleZoom = (direction: 'in' | 'out') => {
    const s = stateRef.current;
    if (!s) return;
    const zoomFactor = direction === 'in' ? 0.8 : 1.25;
    const o = orbitRef.current;
    o.radius = clamp(o.radius * zoomFactor, MIN_RADIUS, MAX_RADIUS);
    applyOrbit(s.camera, o);
  };

  const handleResetView = () => {
    const s = stateRef.current;
    if (!s) return;
    orbitRef.current = initialOrbit();
    applyOrbit(s.camera, orbitRef.current);
  };

  const info = organelleData[selected];
  const Icon = info.icon;

  return (
    <Card className={cn('overflow-hidden rounded-xl border-border/70', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/30 px-4 py-3 sm:px-5">
        {!lockType ? (
          <div className="inline-flex rounded-lg border border-border/70 bg-card p-1">
            <button
              type="button"
              onClick={() => setCellType('plant')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors',
                cellType === 'plant'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Sprout className="h-3.5 w-3.5" /> Plant
            </button>
            <button
              type="button"
              onClick={() => setCellType('animal')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors',
                cellType === 'animal'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <PawPrint className="h-3.5 w-3.5" /> Animal
            </button>
          </div>
        ) : (
          <span className="text-sm font-semibold text-foreground">
            {cellMeta[cellType].title} — 3D Model
          </span>
        )}

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-border/70 bg-card p-0.5">
            <button
              type="button"
              onClick={() => handleZoom('in')}
              className="rounded-md p-1.5 transition-colors hover:bg-primary/10"
              title="Zoom in"
            >
              <ZoomIn className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button
              type="button"
              onClick={() => handleZoom('out')}
              className="rounded-md p-1.5 transition-colors hover:bg-primary/10"
              title="Zoom out"
            >
              <ZoomOut className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button
              type="button"
              onClick={handleResetView}
              className="rounded-md p-1.5 transition-colors hover:bg-primary/10"
              title="Reset view"
            >
              <RotateCw className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button
              type="button"
              onClick={() => setAutoRotate((v) => !v)}
              className={cn(
                'rounded-md p-1.5 transition-colors',
                autoRotate ? 'hover:bg-primary/10' : 'bg-primary/10 text-primary'
              )}
              title={autoRotate ? 'Pause rotation' : 'Resume rotation'}
              aria-pressed={autoRotate}
            >
              {autoRotate ? (
                <Pause className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <Play className="h-3.5 w-3.5 text-primary" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <label className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={highlightOn}
                onChange={(e) => setHighlightOn(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-border accent-primary"
              />
              Highlight
            </label>
            <label className="flex items-center gap-1.5">
              <input
                type="checkbox"
                checked={crossSection}
                onChange={(e) => setCrossSection(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-border accent-primary"
              />
              Cross-section
            </label>
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[180px_1fr_280px]">
        <div className="order-2 border-b border-border/70 p-3 lg:order-none lg:border-b-0 lg:border-r">
          <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Organelles
          </p>
          <div className="flex flex-wrap gap-1.5 lg:flex-col">
            {cellMeta[cellType].organelles.map((name) => {
              const data = organelleData[name];
              const active = name === selected;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelected(name)}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all lg:w-full',
                    active
                      ? 'border-primary/40 bg-primary/10 text-primary shadow-sm'
                      : 'border-border/70 bg-card text-foreground hover:border-primary/30 hover:bg-primary/5'
                  )}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full shadow-sm"
                    style={{ backgroundColor: data.color }}
                  />
                  <span className="truncate">{name}</span>
                  {active && (
                    <span className="ml-auto text-[10px] text-primary">●</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="order-1 relative h-[400px] bg-gradient-to-br from-slate-50 to-slate-100 sm:h-[460px] lg:order-none">
          <div ref={mountRef} className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing" />
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-background/90 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur shadow-sm">
            🖱 Drag to rotate · Scroll to zoom · Click an organelle
          </div>

          {/* Cross-section overlay indicator */}
          {crossSection && (
            <div className="pointer-events-none absolute right-3 top-3 rounded-lg bg-primary/10 px-2 py-1 text-[10px] font-medium text-primary">
              Cross-section view
            </div>
          )}
        </div>

        <div className="order-3 border-t border-border/70 p-4 lg:order-none lg:border-l lg:border-t-0">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-base font-semibold text-foreground">{info.name}</p>
              <p className="text-xs italic text-primary/80">{info.tag}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <dl className="space-y-1.5 text-xs">
              {(
                [
                  ['Size', info.size],
                  ['Location', info.loc],
                  ['Visible in LM', info.vis],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-dashed border-border/70 pb-1.5"
                >
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="text-right font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="text-xs leading-relaxed text-muted-foreground">{info.notes}</p>

            <div className="rounded-lg border-l-2 border-primary/60 bg-primary/5 px-3 py-2 text-[11px] leading-relaxed text-foreground">
              <span className="font-semibold">💡 Did you know?</span> {info.fact}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}