"use client";

import { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon, Trade69Icon3D, MegaAgentIcon3D, OctopusIcon3D, OvermindIcon3D } from "@/components/WorkIcons";
import { WebsiteIcon3D, DashboardIcon3D, APIIcon3D, LLMIcon3D } from "@/components/ServiceIcons3D";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";
import Trade69Architecture from "@/components/Trade69Architecture";
import CreativeGallery from "@/components/CreativeGallery";
import QuantumManifold from "@/components/QuantumManifold";
import QuantumSphere from "@/components/QuantumSphere";

// 3D Experiences Gallery Data
const experiencesItems = [
  {
    id: "sphere",
    title: "Quantum Sphere",
    description: "A living geodesic structure pulsing with quantum energy. Multi-layered icosahedral shells breathe and deform through simplex noise fields.",
    tech: "Three.js · WebGL · GLSL Shaders · Simplex Noise"
  },
  {
    id: "manifold",
    title: "Quantum Manifold",
    description: "A field of infinite possibility. The manifold ripples with quantum fluctuations, each wave representing probability amplitudes in superposition.",
    tech: "Three.js · WebGL · GLSL Shaders · Simplex Noise"
  },
  {
    id: "metatron-genesis",
    title: "Metatron Genesis",
    description: "Back in May I was probably smoking too much weed and started building a cognitive network based on sacred geometry. I tried to visualize it. While this was totally a figment of imagination, to me it looked like a beautiful aligned structure. I built the backend and gave each agent (a sacred geometry shape) a role. Basically a regular structure of memory agents, operative agents, and orchestration, but all based on the principles of each geometry shape.",
    tech: "Next.js · Three.js · WebGL · Multi-Agent Architecture",
    link: "https://metatron-genesis369.vercel.app"
  },
  {
    id: "architecture",
    title: "System Architecture",
    description: "A creative way to display the Mermaid diagram for the Trade69 project. Interactive 3D visualization of system components and data flow.",
    tech: "Three.js · WebGL · Interactive 3D"
  }
];

// Sacred Geometry Gallery Data
const sacredGeometryItems = [
  {
    id: "metatron",
    title: "Metatron's Cube",
    description: "The blueprint of creation. Thirteen circles containing all five Platonic solids. Used as the central orchestrator in the agent network, coordinating information flow between all subsystems."
  },
  {
    id: "spiral",
    title: "Golden Spiral",
    description: "Nature's perfect ratio, φ = 1.618. The Fibonacci sequence made visible. Represents the memory retrieval system, spiraling outward from recent to distant memories with logarithmic efficiency."
  },
  {
    id: "flower",
    title: "Flower of Life",
    description: "Nineteen overlapping circles creating the pattern of genesis. Each petal represents a specialized processing unit, interconnected through shared boundaries for parallel computation."
  },
  {
    id: "lemniscate",
    title: "Lemniscate",
    description: "The infinity symbol. Continuous flow without beginning or end. Represents the feedback loops in the system, where output becomes input in an eternal cycle of refinement."
  }
];

// Work Icons 3D Gallery Data
const workIcons3DItems = [
  {
    id: "trade69",
    title: "Trade69",
    description: "Holographic trading terminal with 3D candlesticks, flowing trend lines, and rising data particles. Visualizes algorithmic trading in an elegant, futuristic interface."
  },
  {
    id: "megaagent",
    title: "MegaAgent",
    description: "Quantum neural network with holographic core, orbital rings, and interconnected agent nodes. Data packets flow through the network representing multi-agent coordination."
  },
  {
    id: "octopus",
    title: "Octopus",
    description: "Bioluminescent cognitive entity with organic mantle, flowing tentacles, and neural patterns. Represents the adaptive, multi-armed nature of the cognitive framework."
  },
  {
    id: "overmind",
    title: "Overmind",
    description: "Sacred geometry cosmic consciousness featuring Merkaba star tetrahedron, icosahedral shell, and orbital energy ring. The all-seeing eye at its core pulses with awareness."
  }
];

// Service Icons 3D Gallery Data
const serviceIcons3DItems = [
  {
    id: "website",
    title: "Web Applications",
    description: "Holographic floating layers with scanline effects, grid patterns, and flowing content layers. Represents modern web architecture with depth and dimension."
  },
  {
    id: "dashboard",
    title: "Dashboards",
    description: "Circular HUD with concentric arcs, energy flow, radar sweep, and animated data bars. Visualizes real-time data monitoring and analytics interfaces."
  },
  {
    id: "api",
    title: "API Development",
    description: "Constellation network with interconnected nodes, flowing data packets, and hexagonal boundary. Represents the architecture of modern API systems."
  },
  {
    id: "llm",
    title: "LLM Middleware",
    description: "Neural brain with synaptic firing, thought particles, and organic pulsing. Visualizes the complexity of large language model integration."
  }
];

// Component map for rendering
const geometryComponents: Record<string, React.FC> = {
  metatron: MetatronCube,
  spiral: GoldenSpiral,
  flower: FlowerOfLife,
  lemniscate: GeometricDivider
};

export default function Creative() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [expandedGeometry, setExpandedGeometry] = useState<string | null>(null);
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openExperience = (id: string) => setExpandedExperience(id);
  const closeExperience = () => setExpandedExperience(null);

  const openGeometry = (id: string) => setExpandedGeometry(id);
  const closeGeometry = () => setExpandedGeometry(null);

  const openWork = (id: string) => setExpandedWork(id);
  const closeWork = () => setExpandedWork(null);

  const openService = (id: string) => setExpandedService(id);
  const closeService = () => setExpandedService(null);

  const expandedExperienceItem = experiencesItems.find(item => item.id === expandedExperience);
  const expandedGeometryItem = sacredGeometryItems.find(item => item.id === expandedGeometry);
  const ExpandedGeometryComponent = expandedGeometry ? geometryComponents[expandedGeometry] : null;
  const expandedWorkItem = workIcons3DItems.find(item => item.id === expandedWork);
  const expandedServiceItem = serviceIcons3DItems.find(item => item.id === expandedService);

  // Render 3D Work Icon
  const renderWorkIcon = (id: string, size: number) => {
    switch (id) {
      case "trade69": return <Trade69Icon3D size={size} />;
      case "megaagent": return <MegaAgentIcon3D size={size} />;
      case "octopus": return <OctopusIcon3D size={size} />;
      case "overmind": return <OvermindIcon3D size={size} />;
      default: return null;
    }
  };

  // Render 3D Service Icon
  const renderServiceIcon = (id: string, size: number, forceAnimate: boolean = false) => {
    switch (id) {
      case "website": return <WebsiteIcon3D size={size} forceAnimate={forceAnimate} />;
      case "dashboard": return <DashboardIcon3D size={size} forceAnimate={forceAnimate} />;
      case "api": return <APIIcon3D size={size} forceAnimate={forceAnimate} />;
      case "llm": return <LLMIcon3D size={size} forceAnimate={forceAnimate} />;
      default: return null;
    }
  };

  // Render Experience Thumbnail - Elegant SVG icons
  const renderExperienceThumbnail = (id: string) => {
    switch (id) {
      case "sphere":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Geodesic sphere */}
            <circle cx="40" cy="40" r="28" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" />
            <circle cx="40" cy="40" r="20" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.6" />
            <circle cx="40" cy="40" r="12" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.8" />
            {/* Horizontal ellipses */}
            <ellipse cx="40" cy="40" rx="28" ry="10" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="40" cy="40" rx="28" ry="18" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.35" />
            {/* Vertical ellipse */}
            <ellipse cx="40" cy="40" rx="10" ry="28" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
            {/* Diagonal cross */}
            <ellipse cx="40" cy="40" rx="28" ry="10" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.3" transform="rotate(45 40 40)" />
            <ellipse cx="40" cy="40" rx="28" ry="10" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.3" transform="rotate(-45 40 40)" />
            {/* Center glow */}
            <circle cx="40" cy="40" r="4" fill="#FAFAF8" opacity="0.5" />
            <circle cx="40" cy="40" r="2" fill="#FAFAF8" opacity="0.9" />
          </svg>
        );
      case "manifold":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Wave grid - more prominent */}
            <path d="M8 55 Q24 42, 40 55 T72 55" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.3" fill="none" />
            <path d="M8 48 Q24 35, 40 48 T72 48" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" fill="none" />
            <path d="M8 41 Q24 28, 40 41 T72 41" stroke="#FAFAF8" strokeWidth="0.7" opacity="0.7" fill="none" />
            <path d="M8 34 Q24 21, 40 34 T72 34" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" fill="none" />
            <path d="M8 27 Q24 14, 40 27 T72 27" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.3" fill="none" />
            {/* Cross lines for depth */}
            <path d="M15 20 L15 60" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.2" />
            <path d="M27 16 L27 62" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.3" />
            <path d="M40 14 L40 64" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <path d="M53 16 L53 62" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.3" />
            <path d="M65 20 L65 60" stroke="#FAFAF8" strokeWidth="0.3" opacity="0.2" />
            {/* Glow points */}
            <circle cx="40" cy="41" r="3" fill="#FAFAF8" opacity="0.6" />
            <circle cx="27" cy="34" r="1.5" fill="#FAFAF8" opacity="0.3" />
            <circle cx="53" cy="34" r="1.5" fill="#FAFAF8" opacity="0.3" />
          </svg>
        );
      case "metatron-genesis":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Outer circle */}
            <circle cx="40" cy="40" r="28" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            {/* Inner circles - Fruit of Life pattern */}
            <circle cx="40" cy="40" r="14" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
            <circle cx="40" cy="26" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="40" cy="54" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="52" cy="33" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="52" cy="47" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="28" cy="33" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="28" cy="47" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            {/* Metatron lines */}
            <line x1="40" y1="26" x2="52" y2="33" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="52" y1="33" x2="52" y2="47" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="52" y1="47" x2="40" y2="54" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="40" y1="54" x2="28" y2="47" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="28" y1="47" x2="28" y2="33" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="28" y1="33" x2="40" y2="26" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            {/* Cross lines */}
            <line x1="40" y1="26" x2="40" y2="54" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="28" y1="33" x2="52" y2="47" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            <line x1="28" y1="47" x2="52" y2="33" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.5" />
            {/* Center */}
            <circle cx="40" cy="40" r="3" fill="#FAFAF8" opacity="0.6" />
          </svg>
        );
      case "architecture":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Central node */}
            <circle cx="40" cy="40" r="10" stroke="#FAFAF8" strokeWidth="0.8" opacity="0.7" />
            <circle cx="40" cy="40" r="4" fill="#FAFAF8" opacity="0.6" />
            {/* Orbiting nodes */}
            <circle cx="40" cy="12" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="40" cy="12" r="2" fill="#FAFAF8" opacity="0.4" />
            <circle cx="64" cy="26" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="64" cy="26" r="2" fill="#FAFAF8" opacity="0.4" />
            <circle cx="64" cy="54" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="64" cy="54" r="2" fill="#FAFAF8" opacity="0.4" />
            <circle cx="40" cy="68" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="40" cy="68" r="2" fill="#FAFAF8" opacity="0.4" />
            <circle cx="16" cy="54" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="16" cy="54" r="2" fill="#FAFAF8" opacity="0.4" />
            <circle cx="16" cy="26" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="16" cy="26" r="2" fill="#FAFAF8" opacity="0.4" />
            {/* Connection lines */}
            <line x1="40" y1="30" x2="40" y2="18" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <line x1="49" y1="34" x2="58" y2="26" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <line x1="49" y1="46" x2="58" y2="54" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <line x1="40" y1="50" x2="40" y2="62" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <line x1="31" y1="46" x2="22" y2="54" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <line x1="31" y1="34" x2="22" y2="26" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{`
        /* Page Load Animation */
        .creative-page {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .creative-page.loaded {
          opacity: 1;
        }
        
        .load-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .creative-page.loaded .load-section {
          opacity: 1;
          transform: translateY(0);
        }
        .creative-page.loaded .load-section:nth-child(1) { transition-delay: 0.1s; }
        .creative-page.loaded .load-section:nth-child(2) { transition-delay: 0.2s; }
        .creative-page.loaded .load-section:nth-child(3) { transition-delay: 0.3s; }
        .creative-page.loaded .load-section:nth-child(4) { transition-delay: 0.4s; }
        .creative-page.loaded .load-section:nth-child(5) { transition-delay: 0.5s; }
        .creative-page.loaded .load-section:nth-child(6) { transition-delay: 0.6s; }
        .creative-page.loaded .load-section:nth-child(7) { transition-delay: 0.7s; }

        /* ========== MOBILE: APP-LIKE ICONS ========== */
        
        /* Experiences Gallery - Mobile */
        .experiences-grid {
          display: flex;
          justify-content: center;
          gap: 10px;
          max-width: 340px;
          margin: 0 auto;
        }
        .experiences-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          background: rgba(28, 28, 30, 0.95);
          border-radius: 18px;
          width: 76px;
          height: 76px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .experiences-item:active {
          transform: scale(0.92);
        }
        .experiences-preview {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .experiences-preview svg {
          width: 56px;
          height: 56px;
        }

        /* Geometry Gallery - Mobile */
        .geometry-grid {
          display: flex;
          justify-content: center;
          gap: 10px;
          max-width: 340px;
          margin: 0 auto;
        }
        .geometry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          background: rgba(28, 28, 30, 0.95);
          border-radius: 18px;
          width: 76px;
          height: 76px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }
        .geometry-item:active {
          transform: scale(0.92);
        }
        .geometry-preview {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .geometry-preview svg {
          max-width: 100%;
          max-height: 100%;
        }

        /* 3D Icons Gallery - Mobile */
        .icons3d-grid {
          display: flex;
          justify-content: center;
          gap: 10px;
          max-width: 340px;
          margin: 0 auto;
        }
        .icons3d-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          background: rgba(28, 28, 30, 0.95);
          border-radius: 18px;
          width: 76px;
          height: 76px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .icons3d-item:active {
          transform: scale(0.92);
        }
        .icons3d-preview {
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SVG 2D Icons Grid */
        .svg-icons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          max-width: 340px;
          margin: 0 auto;
        }
        .svg-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          transform: scale(0.9);
        }

        /* Experiences Expanded Overlay */
        .experiences-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 16px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow-y: auto;
        }
        .experiences-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .experiences-expanded-content {
          transform: scale(0.95) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 900px;
        }
        .experiences-overlay.active .experiences-expanded-content {
          transform: scale(1) translateY(0);
        }
        .experiences-expanded-preview {
          width: 100%;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .experiences-expanded-title {
          font-size: 20px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          margin-bottom: 16px;
          text-align: center;
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.15s;
        }
        .experiences-overlay.active .experiences-expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .experiences-expanded-desc {
          font-size: 12px;
          color: #FAFAF8;
          line-height: 1.7;
          font-weight: 300;
          text-align: left;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.2s;
          padding: 0 12px;
          max-width: 500px;
        }
        .experiences-overlay.active .experiences-expanded-desc {
          opacity: 1;
          transform: translateY(0);
        }
        .experiences-expanded-tech {
          font-size: 10px;
          color: #FAFAF8;
          letter-spacing: 0.1em;
          font-family: monospace;
          margin-top: 16px;
          opacity: 0;
          transition: opacity 0.3s ease 0.25s;
        }
        .experiences-overlay.active .experiences-expanded-tech {
          opacity: 0.6;
        }
        .experiences-expanded-link {
          margin-top: 14px;
          font-size: 11px;
          color: #FAFAF8;
          letter-spacing: 0.12em;
          text-decoration: none;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.3s ease 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .experiences-overlay.active .experiences-expanded-link {
          opacity: 1;
        }
        .experiences-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAFAF8;
          opacity: 0.5;
          font-size: 28px;
          font-weight: 200;
          cursor: pointer;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          z-index: 1001;
        }

        /* Geometry Expanded overlay */
        .geometry-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow-y: auto;
        }
        .geometry-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .geometry-expanded-content {
          transform: scale(0.9) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
        }
        .geometry-overlay.active .geometry-expanded-content {
          transform: scale(1) translateY(0);
        }
        .geometry-expanded-preview {
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%);
          border-radius: 50%;
          padding: 30px;
        }
        .geometry-expanded-preview svg {
          max-width: 100%;
          max-height: 100%;
        }
        .geometry-expanded-title {
          font-size: 22px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          margin-bottom: 20px;
          text-align: center;
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.15s;
        }
        .geometry-overlay.active .geometry-expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .geometry-expanded-desc {
          font-size: 14px;
          color: #FAFAF8;
          line-height: 1.9;
          font-weight: 300;
          text-align: left;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.2s;
          padding: 0 16px;
        }
        .geometry-overlay.active .geometry-expanded-desc {
          opacity: 1;
          transform: translateY(0);
        }
        .geometry-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAFAF8;
          opacity: 0.5;
          font-size: 28px;
          font-weight: 200;
          cursor: pointer;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        /* 3D Icons Expanded Overlay */
        .icons3d-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .icons3d-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .icons3d-expanded-content {
          transform: scale(0.8);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
        }
        .icons3d-overlay.active .icons3d-expanded-content {
          transform: scale(1);
        }
        .icons3d-expanded-preview {
          margin-bottom: 24px;
        }
        .icons3d-expanded-title {
          font-size: 20px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          margin-bottom: 20px;
          text-align: center;
          width: 100%;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.15s;
        }
        .icons3d-overlay.active .icons3d-expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .icons3d-expanded-desc {
          font-size: 13px;
          color: #FAFAF8;
          line-height: 1.9;
          font-weight: 300;
          text-align: left;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.2s;
          padding: 0 20px;
        }
        .icons3d-overlay.active .icons3d-expanded-desc {
          opacity: 1;
          transform: translateY(0);
        }
        .icons3d-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAFAF8;
          opacity: 0.5;
          font-size: 28px;
          font-weight: 200;
          cursor: pointer;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }

        /* ========== DESKTOP: APP-LIKE BUT LARGER ========== */
        @media (min-width: 600px) {
          .experiences-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            max-width: 700px;
          }
          .experiences-item {
            background: rgba(28, 28, 30, 0.95);
            border-radius: 22px;
            width: 120px;
            height: 120px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 0;
          }
          .experiences-item:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 24px rgba(0,0,0,0.5);
          }
          .experiences-item:active {
            transform: scale(0.98);
          }
          .experiences-preview {
            width: 80px;
            height: 80px;
          }
          .experiences-preview svg {
            width: 80px;
            height: 80px;
          }
          .experiences-expanded-title {
            font-size: 26px;
            margin-bottom: 20px;
          }
          .experiences-expanded-desc {
            font-size: 15px;
            line-height: 1.9;
            padding: 0 16px;
          }
          .experiences-overlay {
            padding: 60px 24px;
          }
          .experiences-expanded-preview {
            margin-bottom: 32px;
          }
          .experiences-expanded-tech {
            margin-top: 24px;
          }
          .experiences-expanded-link {
            margin-top: 20px;
          }
          .geometry-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            max-width: 700px;
          }
          .geometry-item {
            background: rgba(28, 28, 30, 0.95);
            border-radius: 22px;
            width: 120px;
            height: 120px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 0;
            overflow: hidden;
          }
          .geometry-item:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 24px rgba(0,0,0,0.5);
          }
          .geometry-item:active {
            transform: scale(0.98);
          }
          .geometry-preview {
            width: 80px;
            height: 80px;
          }
          .geometry-expanded-preview {
            width: 240px;
            height: 240px;
            padding: 40px;
          }
          .geometry-expanded-title {
            font-size: 26px;
          }
          .geometry-expanded-desc {
            font-size: 15px;
          }
          .icons3d-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            max-width: 700px;
          }
          .icons3d-item {
            background: rgba(28, 28, 30, 0.95);
            border-radius: 22px;
            width: 120px;
            height: 120px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 0;
          }
          .icons3d-item:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 24px rgba(0,0,0,0.5);
          }
          .icons3d-item:active {
            transform: scale(0.98);
          }
          .icons3d-preview {
            width: 90px;
            height: 90px;
          }
          .icons3d-expanded-preview {
            margin-bottom: 32px;
          }
          .icons3d-expanded-title {
            font-size: 24px;
          }
          .icons3d-expanded-desc {
            font-size: 14px;
          }
          .svg-icons-grid {
            gap: 24px;
            max-width: 700px;
          }
          .svg-icon-wrapper {
            transform: scale(1.5);
          }
        }
      `}</style>

      <div className={`creative-page ${isLoaded ? 'loaded' : ''}`} style={{ paddingTop: "40px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

        {/* Main Content */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "clamp(16px, 3vh, 24px) 20px clamp(60px, 10vh, 80px)"
        }}>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D EXPERIENCES - Unified Gallery */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div className="load-section" style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            {/* Gallery Grid */}
            <div className="experiences-grid">
              {experiencesItems.map((item) => (
                <div
                  key={item.id}
                  className="experiences-item"
                  onClick={() => openExperience(item.id)}
                >
                  <div className="experiences-preview">
                    {renderExperienceThumbnail(item.id)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* SACRED GEOMETRY COMPONENTS - Gallery Style */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div className="load-section" style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            {/* Gallery Grid */}
            <div className="geometry-grid">
              {sacredGeometryItems.map((item) => {
                const Component = geometryComponents[item.id];
                return (
                  <div
                    key={item.id}
                    className="geometry-item"
                    onClick={() => openGeometry(item.id)}
                  >
                    <div className="geometry-preview">
                      <Component />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D WORK ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div className="load-section" style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            {/* Gallery Grid */}
            <div className="icons3d-grid">
              {workIcons3DItems.map((item) => (
                <div
                  key={item.id}
                  className="icons3d-item"
                  onClick={() => openWork(item.id)}
                >
                  <div className="icons3d-preview">
                    {renderWorkIcon(item.id, 100)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D SERVICE ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div className="load-section" style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            {/* Gallery Grid */}
            <div className="icons3d-grid">
              {serviceIcons3DItems.map((item) => (
                <div
                  key={item.id}
                  className="icons3d-item"
                  onClick={() => openService(item.id)}
                >
                  <div className="icons3d-preview">
                    {renderServiceIcon(item.id, 100)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* SVG ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div className="load-section" style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            {/* Work Icons Grid */}
            <div className="svg-icons-grid">
              <div className="svg-icon-wrapper">
                <Trade69Icon />
              </div>
              <div className="svg-icon-wrapper">
                <MegaAgentIcon />
              </div>
              <div className="svg-icon-wrapper">
                <OctopusIcon />
              </div>
              <div className="svg-icon-wrapper">
                <OvermindIcon />
              </div>
            </div>

            {/* Service Icons Grid */}
            <div className="svg-icons-grid" style={{ marginTop: "clamp(20px, 3vh, 28px)" }}>
              <div className="svg-icon-wrapper">
                <WebsiteIcon />
              </div>
              <div className="svg-icon-wrapper">
                <DashboardIcon />
              </div>
              <div className="svg-icon-wrapper">
                <APIIcon />
              </div>
              <div className="svg-icon-wrapper">
                <LLMIcon />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* GALLERY & SKETCHES */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="load-section">
            <CreativeGallery />
          </div>

        </div>

        {/* Navigation */}
        <div className="load-section" style={{
          padding: "clamp(60px, 10vh, 80px) 24px",
          textAlign: "center"
        }}>
          <Link
            href="/"
            style={{
              fontSize: "11px",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.12em"
            }}
          >
            ← About
          </Link>
        </div>

      </div>

      {/* Experiences Expanded Overlay */}
      <div
        className={`experiences-overlay ${expandedExperience ? 'active' : ''}`}
        onClick={closeExperience}
      >
        <div className="experiences-close" onClick={closeExperience}>×</div>
        {expandedExperienceItem && (
          <div className="experiences-expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="experiences-expanded-preview">
              {expandedExperience === "sphere" && (
                <div style={{
                  width: "100%",
                  maxWidth: "500px",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <QuantumSphere initialExpanded={false} />
                </div>
              )}
              {expandedExperience === "manifold" && (
                <div style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "300px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px"
                }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "60px",
                    background: "linear-gradient(to bottom, rgba(10,10,10,0.98), transparent)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }} />
                  <QuantumManifold />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60px",
                    background: "linear-gradient(to top, rgba(10,10,10,0.98), transparent)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }} />
                </div>
              )}
              {expandedExperience === "metatron-genesis" && (
                <div style={{
                  width: "100%",
                  maxWidth: "min(600px, calc(100vw - 48px))",
                  padding: "0 12px"
                }}>
                  <div style={{
                    position: "relative",
                    backgroundColor: "#000000",
                    borderRadius: "4px",
                    overflow: "hidden",
                    maxHeight: "50vh"
                  }}>
                    <VideoPlayer src="/videos/metatrondemo1.mov" />
                  </div>
                </div>
              )}
              {expandedExperience === "architecture" && (
                <div style={{
                  width: "100%",
                  maxWidth: "600px",
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <Trade69Architecture />
                </div>
              )}
            </div>
            <h3 className="experiences-expanded-title">{expandedExperienceItem.title}</h3>
            <p className="experiences-expanded-desc">{expandedExperienceItem.description}</p>
            <p className="experiences-expanded-tech">{expandedExperienceItem.tech}</p>
            {expandedExperienceItem.link && (
              <Link
                href={expandedExperienceItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experiences-expanded-link"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Experience Live</span>
                <span>→</span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Sacred Geometry Expanded Overlay */}
      <div
        className={`geometry-overlay ${expandedGeometry ? 'active' : ''}`}
        onClick={closeGeometry}
      >
        <div className="geometry-close">×</div>
        {expandedGeometryItem && ExpandedGeometryComponent && (
          <div className="geometry-expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="geometry-expanded-preview">
              <ExpandedGeometryComponent />
            </div>
            <h3 className="geometry-expanded-title">{expandedGeometryItem.title}</h3>
            <p className="geometry-expanded-desc">{expandedGeometryItem.description}</p>
          </div>
        )}
      </div>

      {/* Work Icons 3D Expanded Overlay */}
      <div
        className={`icons3d-overlay ${expandedWork ? 'active' : ''}`}
        onClick={closeWork}
      >
        <div className="icons3d-close" onClick={closeWork}>×</div>
        {expandedWorkItem && (
          <div className="icons3d-expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="icons3d-expanded-preview" key={`work-expanded-${expandedWork}`}>
              {renderWorkIcon(expandedWork!, 280)}
            </div>
            <h3 className="icons3d-expanded-title">{expandedWorkItem.title}</h3>
            <p className="icons3d-expanded-desc">{expandedWorkItem.description}</p>
          </div>
        )}
      </div>

      {/* Service Icons 3D Expanded Overlay */}
      <div
        className={`icons3d-overlay ${expandedService ? 'active' : ''}`}
        onClick={closeService}
      >
        <div className="icons3d-close" onClick={closeService}>×</div>
        {expandedServiceItem && (
          <div className="icons3d-expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="icons3d-expanded-preview" key={`service-expanded-${expandedService}`}>
              {renderServiceIcon(expandedService!, 280, true)}
            </div>
            <h3 className="icons3d-expanded-title">{expandedServiceItem.title}</h3>
            <p className="icons3d-expanded-desc">{expandedServiceItem.description}</p>
          </div>
        )}
      </div>
    </>
  );
}