"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════
// 3D SERVICE ICONS - State of the Art
// ═══════════════════════════════════════════════════════════════

interface ServiceIcon3DProps {
  type: 'website' | 'dashboard' | 'api' | 'llm';
  size?: number;
}

function ServiceIcon3D({ type, size = 80 }: ServiceIcon3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const hoverRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Elegant wireframe material
    const elegantMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        varying vec3 vPosition;
        varying float vFresnel;
        
        void main() {
          vPosition = position;
          vec3 pos = position;
          
          float breathe = 1.0 + sin(uTime * 0.8) * 0.008;
          pos *= breathe;
          pos *= 1.0 + uHover * 0.05;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vec3 viewDir = normalize(-mvPosition.xyz);
          vec3 worldNormal = normalize(normalMatrix * normal);
          vFresnel = pow(1.0 - abs(dot(viewDir, worldNormal)), 2.0);
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform float uHover;
        varying vec3 vPosition;
        varying float vFresnel;
        
        void main() {
          float pulse = 0.92 + sin(uTime * 0.6) * 0.08;
          float energy = sin(vPosition.x * 3.0 + vPosition.y * 3.0 - uTime * 0.5) * 0.5 + 0.5;
          
          vec3 color = vec3(0.94, 0.95, 0.98);
          color += vec3(0.02, 0.04, 0.08) * energy * (0.5 + uHover * 0.3);
          color += vec3(0.1, 0.12, 0.15) * vFresnel * uHover;
          
          float alpha = uOpacity * pulse * (1.0 + uHover * 0.15);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Solid subtle material for panels
    const panelMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos *= 1.0 + uHover * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform float uHover;
        varying vec2 vUv;
        
        void main() {
          float scanline = sin(vUv.y * 40.0 - uTime * 2.0) * 0.03 + 0.97;
          vec3 color = vec3(0.92, 0.94, 0.98);
          float alpha = uOpacity * scanline * (1.0 + uHover * 0.2);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Point material
    const pointMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        attribute float aPhase;
        varying float vAlpha;
        
        void main() {
          vec3 pos = position;
          pos.x += sin(uTime * 0.4 + aPhase) * 0.015;
          pos.y += cos(uTime * 0.3 + aPhase * 1.3) * 0.015;
          pos *= 1.0 + uHover * 0.08;
          
          vAlpha = 0.7 + sin(uTime * 0.8 + aPhase * 2.0) * 0.2;
          vAlpha *= (1.0 + uHover * 0.2);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (2.5 + uHover * 1.5) * (1.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying float vAlpha;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float core = smoothstep(0.5, 0.0, dist);
          vec3 color = vec3(0.95, 0.96, 0.98);
          gl_FragColor = vec4(color, core * vAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Flowing line material
    const flowMaterial = (opacity: number) => new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: opacity },
        uHover: { value: 0 }
      },
      vertexShader: `
        uniform float uTime;
        uniform float uHover;
        attribute float aProgress;
        varying float vProgress;
        
        void main() {
          vProgress = aProgress;
          vec3 pos = position;
          pos *= 1.0 + uHover * 0.05;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        uniform float uHover;
        varying float vProgress;
        
        void main() {
          float flow = sin(vProgress * 8.0 - uTime * 1.5) * 0.5 + 0.5;
          float alpha = uOpacity * (0.3 + flow * 0.5) * (1.0 + uHover * 0.3);
          vec3 color = vec3(0.92, 0.94, 0.98);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const materials: THREE.ShaderMaterial[] = [];

    // ═══════════════════════════════════════════════════════════════
    // WEBSITE - 3D Browser Window with floating layers
    // ═══════════════════════════════════════════════════════════════
    if (type === 'website') {
      // Main browser frame - rounded rectangle
      const frameShape = new THREE.Shape();
      const w = 0.7, h = 0.5, r = 0.04;
      frameShape.moveTo(-w/2 + r, -h/2);
      frameShape.lineTo(w/2 - r, -h/2);
      frameShape.quadraticCurveTo(w/2, -h/2, w/2, -h/2 + r);
      frameShape.lineTo(w/2, h/2 - r);
      frameShape.quadraticCurveTo(w/2, h/2, w/2 - r, h/2);
      frameShape.lineTo(-w/2 + r, h/2);
      frameShape.quadraticCurveTo(-w/2, h/2, -w/2, h/2 - r);
      frameShape.lineTo(-w/2, -h/2 + r);
      frameShape.quadraticCurveTo(-w/2, -h/2, -w/2 + r, -h/2);

      const frameGeo = new THREE.ShapeGeometry(frameShape);
      const frameMat = panelMaterial(0.08);
      materials.push(frameMat);
      const frame = new THREE.Mesh(frameGeo, frameMat);
      mainGroup.add(frame);

      // Frame outline
      const outlineGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.7, 0.5, 0.01));
      const outlineMat = elegantMaterial(0.6);
      materials.push(outlineMat);
      mainGroup.add(new THREE.LineSegments(outlineGeo, outlineMat));

      // Top bar
      const barGeo = new THREE.PlaneGeometry(0.68, 0.08);
      const barMat = panelMaterial(0.06);
      materials.push(barMat);
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.y = 0.21;
      bar.position.z = 0.01;
      mainGroup.add(bar);

      // Window dots
      const dotPositions = [-0.28, -0.24, -0.20];
      dotPositions.forEach((x, i) => {
        const dotGeo = new THREE.SphereGeometry(0.015, 12, 12);
        const dotMat = elegantMaterial(0.5 + i * 0.15);
        materials.push(dotMat);
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(x, 0.21, 0.02);
        mainGroup.add(dot);
      });

      // Floating content layers - gives depth
      const layer1Geo = new THREE.PlaneGeometry(0.25, 0.28);
      const layer1Mat = panelMaterial(0.1);
      materials.push(layer1Mat);
      const layer1 = new THREE.Mesh(layer1Geo, layer1Mat);
      layer1.position.set(-0.18, -0.03, 0.03);
      mainGroup.add(layer1);

      const layer2Geo = new THREE.PlaneGeometry(0.32, 0.28);
      const layer2Mat = panelMaterial(0.08);
      materials.push(layer2Mat);
      const layer2 = new THREE.Mesh(layer2Geo, layer2Mat);
      layer2.position.set(0.14, -0.03, 0.06);
      mainGroup.add(layer2);

      // Content lines on layer 2
      for (let i = 0; i < 4; i++) {
        const lineGeo = new THREE.PlaneGeometry(0.22 - i * 0.03, 0.012);
        const lineMat = panelMaterial(0.15);
        materials.push(lineMat);
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set(0.14, 0.06 - i * 0.045, 0.07);
        mainGroup.add(line);
      }

      // Grid dots
      const gridGeo = new THREE.BufferGeometry();
      const gridPositions: number[] = [];
      const gridPhases: number[] = [];
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          gridPositions.push(-0.26 + x * 0.08, -0.12 + y * 0.08, 0.04);
          gridPhases.push((x + y) * 0.5);
        }
      }
      gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(gridPositions, 3));
      gridGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute(gridPhases, 1));
      const gridMat = pointMaterial(0.6);
      materials.push(gridMat);
      mainGroup.add(new THREE.Points(gridGeo, gridMat));
    }

    // ═══════════════════════════════════════════════════════════════
    // DASHBOARD - Gauges, charts, data visualization
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'dashboard') {
      // Main panel frame
      const panelGeo = new THREE.PlaneGeometry(0.75, 0.55);
      const panelMatBg = panelMaterial(0.06);
      materials.push(panelMatBg);
      mainGroup.add(new THREE.Mesh(panelGeo, panelMatBg));

      // Gauge arc - main feature
      const gaugeArc = new THREE.EllipseCurve(0, 0.08, 0.22, 0.22, Math.PI * 0.15, Math.PI * 0.85, false, 0);
      const gaugePoints = gaugeArc.getPoints(32);
      const gaugeGeo = new THREE.BufferGeometry().setFromPoints(gaugePoints);
      const gaugeMat = elegantMaterial(0.7);
      materials.push(gaugeMat);
      const gauge = new THREE.Line(gaugeGeo, gaugeMat);
      gauge.position.z = 0.02;
      mainGroup.add(gauge);

      // Inner gauge arc
      const innerArc = new THREE.EllipseCurve(0, 0.08, 0.16, 0.16, Math.PI * 0.2, Math.PI * 0.8, false, 0);
      const innerPoints = innerArc.getPoints(24);
      const innerGeo = new THREE.BufferGeometry().setFromPoints(innerPoints);
      const innerMat = elegantMaterial(0.35);
      materials.push(innerMat);
      const inner = new THREE.Line(innerGeo, innerMat);
      inner.position.z = 0.02;
      mainGroup.add(inner);

      // Gauge needle
      const needleGeo = new THREE.CylinderGeometry(0.008, 0.003, 0.18, 6);
      const needleMat = elegantMaterial(0.85);
      materials.push(needleMat);
      const needle = new THREE.Mesh(needleGeo, needleMat);
      needle.position.set(0, 0.15, 0.03);
      needle.rotation.z = -Math.PI / 5;
      mainGroup.add(needle);

      // Center hub
      const hubGeo = new THREE.SphereGeometry(0.03, 16, 16);
      const hubMat = elegantMaterial(0.9);
      materials.push(hubMat);
      const hub = new THREE.Mesh(hubGeo, hubMat);
      hub.position.set(0, 0.08, 0.03);
      mainGroup.add(hub);

      // Bar chart - bottom left
      const barHeights = [0.08, 0.14, 0.1, 0.18, 0.12];
      barHeights.forEach((h, i) => {
        const barGeo = new THREE.BoxGeometry(0.035, h, 0.02);
        const barMat = elegantMaterial(0.45 + i * 0.08);
        materials.push(barMat);
        const bar = new THREE.Mesh(barGeo, barMat);
        bar.position.set(-0.28 + i * 0.05, -0.2 + h/2, 0.02);
        mainGroup.add(bar);
      });

      // Line chart - bottom right
      const chartCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.1, -0.22, 0.03),
        new THREE.Vector3(0.18, -0.14, 0.03),
        new THREE.Vector3(0.24, -0.18, 0.03),
        new THREE.Vector3(0.32, -0.08, 0.03)
      ]);
      const chartGeo = new THREE.TubeGeometry(chartCurve, 20, 0.008, 6, false);
      const chartMat = elegantMaterial(0.6);
      materials.push(chartMat);
      mainGroup.add(new THREE.Mesh(chartGeo, chartMat));

      // Chart data points
      const chartPointsGeo = new THREE.BufferGeometry();
      const cpPositions = [0.1, -0.22, 0.04, 0.18, -0.14, 0.04, 0.24, -0.18, 0.04, 0.32, -0.08, 0.04];
      const cpPhases = [0, 1, 2, 3];
      chartPointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(cpPositions, 3));
      chartPointsGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute(cpPhases, 1));
      const cpMat = pointMaterial(0.8);
      materials.push(cpMat);
      mainGroup.add(new THREE.Points(chartPointsGeo, cpMat));

      // Tick marks around gauge
      for (let i = 0; i <= 8; i++) {
        const angle = Math.PI * 0.15 + (i / 8) * Math.PI * 0.7;
        const tickGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.025, 4);
        const tickMat = elegantMaterial(0.4);
        materials.push(tickMat);
        const tick = new THREE.Mesh(tickGeo, tickMat);
        tick.position.set(Math.cos(angle) * 0.25, 0.08 + Math.sin(angle) * 0.25, 0.02);
        tick.rotation.z = angle - Math.PI / 2;
        mainGroup.add(tick);
      }
    }

    // ═══════════════════════════════════════════════════════════════
    // API - Hub and spoke with data flowing
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'api') {
      // Central hub - layered hexagons
      const hexShape = new THREE.Shape();
      const hexR = 0.15;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(angle) * hexR;
        const y = Math.sin(angle) * hexR;
        if (i === 0) hexShape.moveTo(x, y);
        else hexShape.lineTo(x, y);
      }
      hexShape.closePath();

      const hexGeo = new THREE.ShapeGeometry(hexShape);
      const hexMat = panelMaterial(0.12);
      materials.push(hexMat);
      mainGroup.add(new THREE.Mesh(hexGeo, hexMat));

      // Hex outline
      const hexOutlineGeo = new THREE.EdgesGeometry(new THREE.ExtrudeGeometry(hexShape, { depth: 0.02, bevelEnabled: false }));
      const hexOutlineMat = elegantMaterial(0.7);
      materials.push(hexOutlineMat);
      const hexOutline = new THREE.LineSegments(hexOutlineGeo, hexOutlineMat);
      hexOutline.position.z = -0.01;
      mainGroup.add(hexOutline);

      // Inner hex
      const innerHexGeo = new THREE.RingGeometry(0.06, 0.08, 6);
      const innerHexMat = elegantMaterial(0.5);
      materials.push(innerHexMat);
      mainGroup.add(new THREE.Mesh(innerHexGeo, innerHexMat));

      // Central point
      const centerGeo = new THREE.SphereGeometry(0.035, 16, 16);
      const centerMat = elegantMaterial(0.95);
      materials.push(centerMat);
      const center = new THREE.Mesh(centerGeo, centerMat);
      center.position.z = 0.02;
      mainGroup.add(center);

      // Endpoints - 6 around
      const endpoints = [
        { angle: 0, dist: 0.5 },
        { angle: Math.PI / 3, dist: 0.45 },
        { angle: Math.PI * 2/3, dist: 0.48 },
        { angle: Math.PI, dist: 0.5 },
        { angle: Math.PI * 4/3, dist: 0.45 },
        { angle: Math.PI * 5/3, dist: 0.48 }
      ];

      endpoints.forEach((ep, i) => {
        const x = Math.cos(ep.angle) * ep.dist;
        const y = Math.sin(ep.angle) * ep.dist;

        // Endpoint circle
        const epGeo = new THREE.RingGeometry(0.035, 0.05, 16);
        const epMat = elegantMaterial(0.55);
        materials.push(epMat);
        const endpoint = new THREE.Mesh(epGeo, epMat);
        endpoint.position.set(x, y, 0);
        mainGroup.add(endpoint);

        // Endpoint center
        const epCenterGeo = new THREE.SphereGeometry(0.02, 12, 12);
        const epCenterMat = elegantMaterial(0.7);
        materials.push(epCenterMat);
        const epCenter = new THREE.Mesh(epCenterGeo, epCenterMat);
        epCenter.position.set(x, y, 0.01);
        mainGroup.add(epCenter);

        // Connection line
        const lineGeo = new THREE.CylinderGeometry(0.006, 0.006, ep.dist - 0.2, 6);
        const lineMat = flowMaterial(0.4);
        materials.push(lineMat);
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.set(x/2, y/2, 0);
        line.rotation.z = ep.angle - Math.PI / 2;
        mainGroup.add(line);
      });

      // Data packets flowing (animated points)
      const packetGeo = new THREE.BufferGeometry();
      const packetPositions: number[] = [];
      const packetPhases: number[] = [];
      endpoints.forEach((ep, i) => {
        const x = Math.cos(ep.angle) * ep.dist * 0.5;
        const y = Math.sin(ep.angle) * ep.dist * 0.5;
        packetPositions.push(x, y, 0.02);
        packetPhases.push(i * 1.2);
      });
      packetGeo.setAttribute('position', new THREE.Float32BufferAttribute(packetPositions, 3));
      packetGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute(packetPhases, 1));
      const packetMat = pointMaterial(0.85);
      materials.push(packetMat);
      mainGroup.add(new THREE.Points(packetGeo, packetMat));
    }

    // ═══════════════════════════════════════════════════════════════
    // LLM - Neural brain with layers and connections
    // ═══════════════════════════════════════════════════════════════
    else if (type === 'llm') {
      // Brain outline - organic curved shape
      const brainCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.35, 0),
        new THREE.Vector3(0.25, 0.28, 0),
        new THREE.Vector3(0.35, 0.1, 0),
        new THREE.Vector3(0.32, -0.1, 0),
        new THREE.Vector3(0.2, -0.28, 0),
        new THREE.Vector3(0, -0.35, 0),
        new THREE.Vector3(-0.2, -0.28, 0),
        new THREE.Vector3(-0.32, -0.1, 0),
        new THREE.Vector3(-0.35, 0.1, 0),
        new THREE.Vector3(-0.25, 0.28, 0),
        new THREE.Vector3(0, 0.35, 0)
      ], true);

      const brainGeo = new THREE.TubeGeometry(brainCurve, 48, 0.015, 8, true);
      const brainMat = elegantMaterial(0.6);
      materials.push(brainMat);
      mainGroup.add(new THREE.Mesh(brainGeo, brainMat));

      // Brain hemisphere division
      const divisionGeo = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0.32, 0.02),
          new THREE.Vector3(0.05, 0.1, 0.03),
          new THREE.Vector3(0, -0.1, 0.02),
          new THREE.Vector3(-0.03, -0.3, 0.01)
        ]),
        16, 0.008, 6, false
      );
      const divisionMat = elegantMaterial(0.35);
      materials.push(divisionMat);
      mainGroup.add(new THREE.Mesh(divisionGeo, divisionMat));

      // Neural network layers - 3 layers of nodes
      const layers = [
        { y: 0.15, nodes: 4, radius: 0.18 },
        { y: -0.02, nodes: 5, radius: 0.22 },
        { y: -0.18, nodes: 4, radius: 0.18 }
      ];

      const allNodes: THREE.Vector3[] = [];

      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.nodes; i++) {
          const angle = (i / layer.nodes) * Math.PI - Math.PI / 2 + (li % 2) * 0.3;
          const x = Math.cos(angle) * layer.radius;
          const z = Math.sin(angle) * 0.08;

          allNodes.push(new THREE.Vector3(x, layer.y, z));

          // Node sphere
          const nodeGeo = new THREE.SphereGeometry(0.025, 12, 12);
          const nodeMat = elegantMaterial(0.65 + li * 0.1);
          materials.push(nodeMat);
          const node = new THREE.Mesh(nodeGeo, nodeMat);
          node.position.set(x, layer.y, z);
          mainGroup.add(node);

          // Glow ring around node
          const ringGeo = new THREE.RingGeometry(0.03, 0.04, 16);
          const ringMat = elegantMaterial(0.25);
          materials.push(ringMat);
          const ring = new THREE.Mesh(ringGeo, ringMat);
          ring.position.set(x, layer.y, z + 0.01);
          mainGroup.add(ring);
        }
      });

      // Synaptic connections between layers
      const connections = [
        [0, 4], [0, 5], [1, 5], [1, 6], [2, 6], [2, 7], [3, 7], [3, 8],
        [4, 9], [5, 9], [5, 10], [6, 10], [6, 11], [7, 11], [7, 12], [8, 12]
      ];

      connections.forEach(([a, b]) => {
        if (allNodes[a] && allNodes[b]) {
          const start = allNodes[a];
          const end = allNodes[b];
          const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
          mid.z += 0.03;

          const synapseCurve = new THREE.QuadraticBezierCurve3(start, mid, end);
          const synapseGeo = new THREE.TubeGeometry(synapseCurve, 8, 0.004, 4, false);
          const synapseMat = flowMaterial(0.3);
          materials.push(synapseMat);
          mainGroup.add(new THREE.Mesh(synapseGeo, synapseMat));
        }
      });

      // Central processing core
      const coreGeo = new THREE.IcosahedronGeometry(0.06, 1);
      const coreMat = elegantMaterial(0.9);
      materials.push(coreMat);
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.set(0, -0.02, 0.05);
      mainGroup.add(core);

      // Thought particles
      const thoughtGeo = new THREE.BufferGeometry();
      const thoughtPositions: number[] = [];
      const thoughtPhases: number[] = [];
      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = 0.15 + Math.random() * 0.15;
        const y = -0.2 + Math.random() * 0.4;
        thoughtPositions.push(Math.cos(angle) * r, y, Math.sin(angle) * 0.1);
        thoughtPhases.push(Math.random() * Math.PI * 2);
      }
      thoughtGeo.setAttribute('position', new THREE.Float32BufferAttribute(thoughtPositions, 3));
      thoughtGeo.setAttribute('aPhase', new THREE.Float32BufferAttribute(thoughtPhases, 1));
      const thoughtMat = pointMaterial(0.5);
      materials.push(thoughtMat);
      mainGroup.add(new THREE.Points(thoughtGeo, thoughtMat));
    }

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION
    // ═══════════════════════════════════════════════════════════════

    let time = 0;
    let frameCount = 0;

    const animate = () => {
      time += 0.006;
      frameCount++;

      if (frameCount === 5) {
        setIsLoaded(true);
      }

      hoverRef.current += (isHovered ? 1 : 0 - hoverRef.current) * 0.04;

      materials.forEach(mat => {
        mat.uniforms.uTime.value = time;
        mat.uniforms.uHover.value = hoverRef.current;
      });

      // Gentle base rotation
      const baseRotY = Math.sin(time * 0.15) * 0.06;
      const baseRotX = Math.cos(time * 0.12) * 0.03;

      mainGroup.rotation.y = baseRotY + hoverRef.current * 0.12;
      mainGroup.rotation.x = baseRotX;

      // Type-specific animations
      if (type === 'dashboard') {
        // Subtle gauge needle movement
        mainGroup.rotation.z = Math.sin(time * 0.1) * 0.02;
      } else if (type === 'llm') {
        // Brain gentle pulse
        const pulse = 1.0 + Math.sin(time * 0.3) * 0.01;
        mainGroup.scale.setScalar(pulse);
      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      materials.forEach(m => m.dispose());
    };
  }, [type, size, isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: size,
        height: size,
        cursor: 'pointer',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}
    />
  );
}

// Export individual components
export function WebsiteIcon3D({ size = 80 }: { size?: number }) {
  return <ServiceIcon3D type="website" size={size} />;
}

export function DashboardIcon3D({ size = 80 }: { size?: number }) {
  return <ServiceIcon3D type="dashboard" size={size} />;
}

export function APIIcon3D({ size = 80 }: { size?: number }) {
  return <ServiceIcon3D type="api" size={size} />;
}

export function LLMIcon3D({ size = 80 }: { size?: number }) {
  return <ServiceIcon3D type="llm" size={size} />;
}