"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";
import CreativeGallery from "@/components/CreativeGallery";

// Dynamic imports for 3D components to prevent SSR issues and flash
const Trade69Icon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.Trade69Icon3D })), { ssr: false });
const MegaAgentIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.MegaAgentIcon3D })), { ssr: false });
const OctopusIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OctopusIcon3D })), { ssr: false });
const OvermindIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OvermindIcon3D })), { ssr: false });
const WebsiteIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.WebsiteIcon3D })), { ssr: false });
const DashboardIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.DashboardIcon3D })), { ssr: false });
const APIIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.APIIcon3D })), { ssr: false });
const LLMIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.LLMIcon3D })), { ssr: false });
const Trade69Architecture = dynamic(() => import("@/components/Trade69Architecture"), { ssr: false });
const QuantumManifold = dynamic(() => import("@/components/QuantumManifold"), { ssr: false });
const QuantumSphere = dynamic(() => import("@/components/QuantumSphere"), { ssr: false });

// 3D Experiences Gallery Data
const experiencesItems = [
  {
    id: "sphere",
    title: "Quantum Sphere",
    description: "A living geodesic structure pulsing with quantum energy. Breathes through simplex noise fields.",
    tech: "Three.js · WebGL · GLSL"
  },
  {
    id: "manifold",
    title: "Quantum Manifold",
    description: "A field of infinite possibility rippling with quantum fluctuations and probability waves.",
    tech: "Three.js · WebGL · GLSL"
  },
  {
    id: "metatron-genesis",
    title: "Metatron Genesis",
    description: "Cognitive network based on sacred geometry. Each agent shape has a role in the system.",
    tech: "Next.js · Three.js · WebGL",
    link: "https://metatron-genesis369.vercel.app"
  },
  {
    id: "architecture",
    title: "System Architecture",
    description: "Interactive 3D visualization of the Trade69 system. Components and data flow.",
    tech: "Three.js · WebGL · 3D"
  }
];

// Sacred Geometry Gallery Data
const sacredGeometryItems = [
  {
    id: "metatron",
    title: "Metatron's Cube",
    description: "The blueprint of creation. Thirteen circles containing all five Platonic solids. Central orchestrator in the agent network."
  },
  {
    id: "spiral",
    title: "Golden Spiral",
    description: "Nature's perfect ratio, φ = 1.618. The Fibonacci sequence made visible. Represents memory retrieval spiraling from recent to distant."
  },
  {
    id: "flower",
    title: "Flower of Life",
    description: "Nineteen overlapping circles creating the pattern of genesis. Each petal represents a specialized processing unit."
  },
  {
    id: "lemniscate",
    title: "Lemniscate",
    description: "The infinity symbol. Continuous flow without beginning or end. Represents feedback loops in eternal refinement."
  }
];

// Work Icons 3D Gallery Data
const workIcons3DItems = [
  {
    id: "trade69",
    title: "Trade69",
    description: "Holographic trading terminal with 3D candlesticks and flowing trend lines. Visualizes algorithmic trading in an elegant interface."
  },
  {
    id: "megaagent",
    title: "MegaAgent",
    description: "Quantum neural network with holographic core and orbital rings. Data packets flow representing multi-agent coordination."
  },
  {
    id: "octopus",
    title: "Octopus",
    description: "Bioluminescent cognitive entity with organic mantle and flowing tentacles. Represents the adaptive cognitive framework."
  },
  {
    id: "overmind",
    title: "Overmind",
    description: "Sacred geometry cosmic consciousness with Merkaba star tetrahedron. The all-seeing eye pulses with awareness."
  }
];

// Service Icons 3D Gallery Data
const serviceIcons3DItems = [
  {
    id: "website",
    title: "Web Applications",
    description: "Holographic floating layers with scanline effects and grid patterns. Represents modern web architecture with depth."
  },
  {
    id: "dashboard",
    title: "Dashboards",
    description: "Circular HUD with concentric arcs, energy flow, and animated data bars. Visualizes real-time monitoring interfaces."
  },
  {
    id: "api",
    title: "API Development",
    description: "Constellation network with interconnected nodes and flowing data packets. Represents modern API system architecture."
  },
  {
    id: "llm",
    title: "LLM Middleware",
    description: "Neural brain with synaptic firing and thought particles. Visualizes large language model integration."
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
  const [icons3DReady, setIcons3DReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Delay 3D icons slightly to prevent white flash
  useEffect(() => {
    const timer = setTimeout(() => setIcons3DReady(true), 200);
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

  const renderWorkIcon = (id: string, size: number) => {
    if (!icons3DReady) return null;
    switch (id) {
      case "trade69": return <Trade69Icon3D size={size} />;
      case "megaagent": return <MegaAgentIcon3D size={size} />;
      case "octopus": return <OctopusIcon3D size={size} />;
      case "overmind": return <OvermindIcon3D size={size} />;
      default: return null;
    }
  };

  const renderServiceIcon = (id: string, size: number, forceAnimate: boolean = false) => {
    if (!icons3DReady) return null;
    switch (id) {
      case "website": return <WebsiteIcon3D size={size} forceAnimate={forceAnimate} />;
      case "dashboard": return <DashboardIcon3D size={size} forceAnimate={forceAnimate} />;
      case "api": return <APIIcon3D size={size} forceAnimate={forceAnimate} />;
      case "llm": return <LLMIcon3D size={size} forceAnimate={forceAnimate} />;
      default: return null;
    }
  };

  const renderExperienceThumbnail = (id: string) => {
    switch (id) {
      case "sphere":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" />
            <circle cx="40" cy="40" r="20" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.6" />
            <circle cx="40" cy="40" r="12" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.8" />
            <ellipse cx="40" cy="40" rx="28" ry="10" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="40" cy="40" rx="28" ry="18" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.35" />
            <ellipse cx="40" cy="40" rx="10" ry="28" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.5" />
            <circle cx="40" cy="40" r="4" fill="#FAFAF8" opacity="0.5" />
            <circle cx="40" cy="40" r="2" fill="#FAFAF8" opacity="0.9" />
          </svg>
        );
      case "manifold":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M8 55 Q24 42, 40 55 T72 55" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.3" fill="none" />
            <path d="M8 48 Q24 35, 40 48 T72 48" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" fill="none" />
            <path d="M8 41 Q24 28, 40 41 T72 41" stroke="#FAFAF8" strokeWidth="0.7" opacity="0.7" fill="none" />
            <path d="M8 34 Q24 21, 40 34 T72 34" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.4" fill="none" />
            <path d="M8 27 Q24 14, 40 27 T72 27" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.3" fill="none" />
            <circle cx="40" cy="41" r="3" fill="#FAFAF8" opacity="0.6" />
          </svg>
        );
      case "metatron-genesis":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.4" />
            <circle cx="40" cy="40" r="14" stroke="#FAFAF8" strokeWidth="0.5" opacity="0.6" />
            <circle cx="40" cy="26" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="40" cy="54" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="52" cy="33" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="28" cy="33" r="14" stroke="#FAFAF8" strokeWidth="0.4" opacity="0.4" />
            <circle cx="40" cy="40" r="3" fill="#FAFAF8" opacity="0.6" />
          </svg>
        );
      case "architecture":
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="10" stroke="#FAFAF8" strokeWidth="0.8" opacity="0.7" />
            <circle cx="40" cy="40" r="4" fill="#FAFAF8" opacity="0.6" />
            <circle cx="40" cy="12" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="64" cy="26" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="64" cy="54" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="40" cy="68" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="16" cy="54" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
            <circle cx="16" cy="26" r="6" stroke="#FAFAF8" strokeWidth="0.6" opacity="0.5" />
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
        .creative-page {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .creative-page.loaded {
          opacity: 1;
        }

        /* Prevent white flash on 3D icons */
        .experiences-item,
        .geometry-item,
        .icons3d-item {
          background-color: transparent;
        }
        
        .experiences-item canvas,
        .geometry-item canvas,
        .icons3d-item canvas,
        .expanded-icon canvas {
          background: transparent !important;
        }

        /* ========== iOS-STYLE ICON GRIDS - 4 PER ROW ========== */
        
        .experiences-grid, .geometry-grid, .icons3d-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          max-width: 340px;
          margin: 0 auto;
        }
        
        .experiences-item, .geometry-item, .icons3d-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.25s ease;
          border-radius: 16px;
          width: 72px;
          height: 72px;
          margin: 0 auto;
          overflow: hidden;
        }
        
        .experiences-item {
          background: radial-gradient(ellipse 120% 80% at 50% -20%, rgba(160, 180, 220, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(52, 65, 85, 0.95) 0%, rgba(28, 35, 48, 0.98) 100%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(45, 55, 72, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(160, 180, 220, 0.2);
        }
        
        .geometry-item {
          background: radial-gradient(ellipse 120% 80% at 50% -20%, rgba(200, 160, 220, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(82, 60, 95, 0.95) 0%, rgba(45, 32, 55, 0.98) 100%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(72, 52, 85, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(200, 160, 220, 0.2);
        }
        
        .icons3d-item {
          background: radial-gradient(ellipse 120% 80% at 50% -20%, rgba(140, 200, 180, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(62, 88, 80, 0.95) 0%, rgba(35, 50, 45, 0.98) 100%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(55, 75, 70, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(140, 200, 180, 0.2);
        }
        
        .experiences-item::before, .geometry-item::before, .icons3d-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 100%);
          border-radius: 16px 16px 50% 50%;
          pointer-events: none;
          z-index: 1;
        }
        
        .experiences-item::after, .geometry-item::after, .icons3d-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 40%;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, transparent 100%);
          border-radius: 0 0 16px 16px;
          pointer-events: none;
          z-index: 1;
        }
        
        .experiences-item:active, .geometry-item:active, .icons3d-item:active {
          transform: scale(0.92);
        }
        
        .experiences-preview {
          position: relative;
          z-index: 2;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .experiences-preview svg {
          width: 55px;
          height: 55px;
        }
        
        .geometry-preview {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.48);
        }
        
        .geometry-preview svg,
        .geometry-preview > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .icons3d-preview {
          position: relative;
          z-index: 2;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 8px;
        }
        
        /* Prevent canvas flash/blink */
        .icons3d-preview canvas,
        .experiences-preview canvas,
        .geometry-preview canvas {
          background: transparent !important;
        }

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

        /* ═══════════════════════════════════════════════════════════ */
        /* EXPANDED OVERLAY - ONE SCREEN ONLY, NO SCROLL */
        /* ═══════════════════════════════════════════════════════════ */
        
        .expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: #0A0A0A;
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 12vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        
        .expanded-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          width: 100%;
          max-width: 400px;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* UNIFIED CARD PREVIEW - ALL CARDS FIT ONE SCREEN */
        /* ═══════════════════════════════════════════════════════════ */
        
        .expanded-preview-3d {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .expanded-preview-sphere {
          width: 300px;
          height: 260px;
          margin-bottom: 16px;
        }
        
        .expanded-preview-manifold {
          width: 340px;
          height: 200px;
          margin-bottom: 16px;
        }
        
        .expanded-preview-video {
          width: 90vw;
          max-width: 320px;
          height: 52vw;
          max-height: 200px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        
        .expanded-preview-architecture {
          width: 320px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }
        
        .expanded-preview-geometry {
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }
        
        .expanded-preview-icon {
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }
        
        .expanded-preview-3d canvas,
        .expanded-preview-icon canvas,
        .expanded-preview-geometry canvas,
        .expanded-preview-video canvas,
        .expanded-preview-architecture canvas {
          background: transparent !important;
        }
        
        .expanded-title {
          margin: 0;
          font-size: 15px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.05em;
        }
        
        .expanded-desc {
          margin-top: 8px;
          font-size: 11px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.5);
          line-height: 1.5;
          max-width: 280px;
          max-height: 80px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        
        .expanded-tech {
          margin-top: 6px;
          font-size: 8px;
          color: rgba(250, 250, 248, 0.25);
          font-family: monospace;
          letter-spacing: 0.02em;
        }
        
        .expanded-link {
          margin-top: 8px;
          font-size: 9px;
          color: rgba(250, 250, 248, 0.4);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        
        .expanded-close {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 26px;
          font-weight: 200;
          cursor: pointer;
          transition: color 0.2s ease;
          z-index: 10;
        }
        
        .expanded-close:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        /* ========== DESKTOP ========== */
        @media (min-width: 600px) {
          .experiences-grid, .geometry-grid, .icons3d-grid {
            gap: 20px;
            max-width: 520px;
          }
          
          .experiences-item, .geometry-item, .icons3d-item {
            border-radius: 24px;
            width: 110px;
            height: 110px;
          }
          
          .experiences-item::before, .geometry-item::before, .icons3d-item::before {
            border-radius: 24px 24px 50% 50%;
          }
          
          .experiences-item::after, .geometry-item::after, .icons3d-item::after {
            border-radius: 0 0 24px 24px;
          }
          
          .experiences-item:hover, .geometry-item:hover, .icons3d-item:hover {
            transform: scale(1.04) translateY(-2px);
          }
          
          .experiences-preview {
            width: 85px;
            height: 85px;
          }
          
          .experiences-preview svg {
            width: 85px;
            height: 85px;
          }
          
          .geometry-preview {
            transform: scale(0.6);
          }
          
          .icons3d-preview {
            width: 90px;
            height: 90px;
          }
          
          .svg-icons-grid {
            gap: 24px;
            max-width: 700px;
          }
          .svg-icon-wrapper {
            transform: scale(1.5);
          }
          
          .expanded-title {
            font-size: 18px;
          }
          .expanded-desc {
            font-size: 12px;
            max-width: 360px;
            margin-top: 12px;
            max-height: 120px;
            -webkit-line-clamp: 6;
          }
          .expanded-tech {
            font-size: 9px;
            margin-top: 8px;
          }
          .expanded-link {
            font-size: 10px;
            margin-top: 10px;
          }
          
          /* Desktop previews */
          .expanded-preview-sphere {
            width: 360px;
            height: 280px;
            margin-bottom: 24px;
          }
          .expanded-preview-manifold {
            width: 420px;
            height: 200px;
            margin-bottom: 28px;
          }
          .expanded-preview-video {
            width: 400px;
            max-width: 400px;
            height: 230px;
            max-height: 230px;
            margin-bottom: 24px;
          }
          .expanded-preview-architecture {
            width: 420px;
            height: 260px;
            margin-bottom: 24px;
          }
          .expanded-preview-geometry {
            width: 220px;
            height: 220px;
            margin-bottom: 24px;
          }
          .expanded-preview-icon {
            width: 180px;
            height: 180px;
            margin-bottom: 24px;
          }
        }
      `}</style>

      <div className={`creative-page ${isLoaded ? 'loaded' : ''}`} style={{ minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(80px, 12vh, 140px) 20px clamp(60px, 10vh, 80px)" }}>

          {/* 3D EXPERIENCES */}
          <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            <div className="experiences-grid">
              {experiencesItems.map((item) => (
                <div key={item.id} className="experiences-item" onClick={() => openExperience(item.id)}>
                  <div className="experiences-preview">{renderExperienceThumbnail(item.id)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SACRED GEOMETRY */}
          <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            <div className="geometry-grid">
              {sacredGeometryItems.map((item) => {
                const Component = geometryComponents[item.id];
                return (
                  <div key={item.id} className="geometry-item" onClick={() => openGeometry(item.id)}>
                    <div className="geometry-preview"><Component /></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3D WORK ICONS */}
          <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            <div className="icons3d-grid">
              {workIcons3DItems.map((item) => (
                <div key={item.id} className="icons3d-item" onClick={() => openWork(item.id)}>
                  <div className="icons3d-preview">{renderWorkIcon(item.id, 60)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D SERVICE ICONS */}
          <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            <div className="icons3d-grid">
              {serviceIcons3DItems.map((item) => (
                <div key={item.id} className="icons3d-item" onClick={() => openService(item.id)}>
                  <div className="icons3d-preview">{renderServiceIcon(item.id, 60)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG ICONS */}
          <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
            <div className="svg-icons-grid">
              <div className="svg-icon-wrapper"><Trade69Icon /></div>
              <div className="svg-icon-wrapper"><MegaAgentIcon /></div>
              <div className="svg-icon-wrapper"><OctopusIcon /></div>
              <div className="svg-icon-wrapper"><OvermindIcon /></div>
            </div>
            <div className="svg-icons-grid" style={{ marginTop: "clamp(20px, 3vh, 28px)" }}>
              <div className="svg-icon-wrapper"><WebsiteIcon /></div>
              <div className="svg-icon-wrapper"><DashboardIcon /></div>
              <div className="svg-icon-wrapper"><APIIcon /></div>
              <div className="svg-icon-wrapper"><LLMIcon /></div>
            </div>
          </div>

          {/* GALLERY */}
          <div><CreativeGallery /></div>

        </div>
      </div>

      {/* EXPERIENCES OVERLAY */}
      <div className={`expanded-overlay ${expandedExperience ? 'active' : ''}`} onClick={closeExperience}>
        <div className="expanded-close" onClick={closeExperience}>×</div>
        {expandedExperienceItem && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            {/* 3D Preview - ABOVE text */}
            {expandedExperience === "sphere" && (
              <div className="expanded-preview-3d expanded-preview-sphere">
                <QuantumSphere initialExpanded={false} />
              </div>
            )}
            {expandedExperience === "manifold" && (
              <div className="expanded-preview-3d expanded-preview-manifold">
                <QuantumManifold />
              </div>
            )}
            {expandedExperience === "metatron-genesis" && (
              <div className="expanded-preview-video">
                <VideoPlayer src="/videos/metatrondemo1.mov" />
              </div>
            )}
            {expandedExperience === "architecture" && (
              <div className="expanded-preview-3d expanded-preview-architecture">
                <Trade69Architecture />
              </div>
            )}

            {/* Text - BELOW preview */}
            <p className="expanded-title">{expandedExperienceItem.title}</p>
            <p className="expanded-desc">{expandedExperienceItem.description}</p>
            <p className="expanded-tech">{expandedExperienceItem.tech}</p>
            {expandedExperienceItem.link && (
              <Link href={expandedExperienceItem.link} target="_blank" rel="noopener noreferrer" className="expanded-link" onClick={(e) => e.stopPropagation()}>
                Experience Live →
              </Link>
            )}
          </div>
        )}
      </div>

      {/* GEOMETRY OVERLAY */}
      <div className={`expanded-overlay ${expandedGeometry ? 'active' : ''}`} onClick={closeGeometry}>
        <div className="expanded-close" onClick={closeGeometry}>×</div>
        {expandedGeometryItem && ExpandedGeometryComponent && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="expanded-preview-geometry">
              <ExpandedGeometryComponent />
            </div>
            <p className="expanded-title">{expandedGeometryItem.title}</p>
            <p className="expanded-desc">{expandedGeometryItem.description}</p>
          </div>
        )}
      </div>

      {/* WORK ICONS OVERLAY */}
      <div className={`expanded-overlay ${expandedWork ? 'active' : ''}`} onClick={closeWork}>
        <div className="expanded-close" onClick={closeWork}>×</div>
        {expandedWorkItem && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="expanded-preview-icon">
              {renderWorkIcon(expandedWork!, 160)}
            </div>
            <p className="expanded-title">{expandedWorkItem.title}</p>
            <p className="expanded-desc">{expandedWorkItem.description}</p>
          </div>
        )}
      </div>

      {/* SERVICE ICONS OVERLAY */}
      <div className={`expanded-overlay ${expandedService ? 'active' : ''}`} onClick={closeService}>
        <div className="expanded-close" onClick={closeService}>×</div>
        {expandedServiceItem && (
          <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
            <div className="expanded-preview-icon">
              {renderServiceIcon(expandedService!, 160, true)}
            </div>
            <p className="expanded-title">{expandedServiceItem.title}</p>
            <p className="expanded-desc">{expandedServiceItem.description}</p>
          </div>
        )}
      </div>
    </>
  );
}