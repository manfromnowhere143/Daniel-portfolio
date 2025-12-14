"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

// Dynamic imports for 3D - prevent SSR flash
const Trade69Icon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.Trade69Icon3D })), { ssr: false });
const MegaAgentIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.MegaAgentIcon3D })), { ssr: false });
const OctopusIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OctopusIcon3D })), { ssr: false });
const OvermindIcon3D = dynamic(() => import("@/components/WorkIcons").then(mod => ({ default: mod.OvermindIcon3D })), { ssr: false });
const WebsiteIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.WebsiteIcon3D })), { ssr: false });
const DashboardIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.DashboardIcon3D })), { ssr: false });
const APIIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.APIIcon3D })), { ssr: false });
const LLMIcon3D = dynamic(() => import("@/components/ServiceIcons3D").then(mod => ({ default: mod.LLMIcon3D })), { ssr: false });
const QuantumManifold = dynamic(() => import("@/components/QuantumManifold"), { ssr: false });
const QuantumSphere = dynamic(() => import("@/components/QuantumSphere"), { ssr: false });
const Trade69Architecture = dynamic(() => import("@/components/Trade69Architecture"), { ssr: false });

// App data - Dark matte colors
const apps = [
  { id: 'work3d', name: 'Work 3D', color: ['#1f6b5e', '#0d3d35'] },
  { id: 'services3d', name: 'Services 3D', color: ['#1f6880', '#0d3d4d'] },
  { id: 'geometry', name: 'Geometry', color: ['#5a3d7a', '#2a1845'] },
  { id: 'experiences', name: 'Experiences', color: ['#8a5a28', '#4a3010'] },
  { id: 'icons', name: 'Icons', color: ['#3a3a3a', '#1a1a1a'], isFolder: true },
];

// Work 3D items
const work3DItems = [
  { id: 'trade69', name: 'Trade69', desc: 'Holographic trading terminal with 3D candlesticks' },
  { id: 'megaagent', name: 'MegaAgent', desc: 'Quantum neural network with orbital rings' },
  { id: 'octopus', name: 'Octopus', desc: 'Bioluminescent cognitive entity' },
  { id: 'overmind', name: 'Overmind', desc: 'Sacred geometry cosmic consciousness' },
];

// Service 3D items
const service3DItems = [
  { id: 'website', name: 'Web Apps', desc: 'Holographic floating layers' },
  { id: 'dashboard', name: 'Dashboards', desc: 'Circular HUD with data arcs' },
  { id: 'api', name: 'API', desc: 'Constellation network' },
  { id: 'llm', name: 'LLM', desc: 'Neural brain visualization' },
];

// Geometry items
const geometryItems = [
  { id: 'metatron', name: 'Metatron', desc: 'Blueprint of creation' },
  { id: 'spiral', name: 'Golden Spiral', desc: 'Nature\'s perfect ratio' },
  { id: 'flower', name: 'Flower of Life', desc: 'Pattern of genesis' },
  { id: 'lemniscate', name: 'Lemniscate', desc: 'Infinity symbol' },
];

// Experience items
const experienceItems = [
  { id: 'sphere', name: 'Quantum Sphere', desc: 'Living geodesic structure' },
  { id: 'manifold', name: 'Manifold', desc: 'Field of infinite possibility' },
  { id: 'architecture', name: 'Architecture', desc: 'Trade69 system visualization' },
  { id: 'metatron-genesis', name: 'Genesis', desc: 'Cognitive network', link: 'https://metatron-genesis369.vercel.app' },
];

export default function Creative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [icons3DReady, setIcons3DReady] = useState(false);
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIcons3DReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const renderWork3D = (id: string, size: number) => {
    if (!icons3DReady) return <div style={{ width: size, height: size }} />;
    switch (id) {
      case 'trade69': return <Trade69Icon3D size={size} />;
      case 'megaagent': return <MegaAgentIcon3D size={size} />;
      case 'octopus': return <OctopusIcon3D size={size} />;
      case 'overmind': return <OvermindIcon3D size={size} />;
      default: return null;
    }
  };

  const renderService3D = (id: string, size: number) => {
    if (!icons3DReady) return <div style={{ width: size, height: size }} />;
    switch (id) {
      case 'website': return <WebsiteIcon3D size={size} />;
      case 'dashboard': return <DashboardIcon3D size={size} />;
      case 'api': return <APIIcon3D size={size} />;
      case 'llm': return <LLMIcon3D size={size} />;
      default: return null;
    }
  };

  const renderGeometry = (id: string) => {
    switch (id) {
      case 'metatron': return <MetatronCube />;
      case 'spiral': return <GoldenSpiral />;
      case 'flower': return <FlowerOfLife />;
      case 'lemniscate': return <GeometricDivider />;
      default: return null;
    }
  };

  const renderExperience = (id: string) => {
    if (!icons3DReady) return <div style={{ width: '100%', height: 300 }} />;
    switch (id) {
      case 'sphere': return <QuantumSphere />;
      case 'manifold': return <QuantumManifold />;
      case 'architecture': return <Trade69Architecture />;
      default: return null;
    }
  };

  // Render mini icons for folder preview - fill the space
  const renderFolderPreview = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6, padding: 12 }}>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(0.85)' }}><Trade69Icon /></div>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(0.85)' }}><MegaAgentIcon /></div>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(0.85)' }}><WebsiteIcon /></div>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(0.85)' }}><APIIcon /></div>
    </div>
  );

  // App icon thumbnail - 3D fills ~90-95% of container (98px)
  const renderAppThumbnail = (id: string) => {
    switch (id) {
      case 'work3d':
        return icons3DReady ? <Trade69Icon3D size={90} /> : <div style={{ width: 90, height: 90 }} />;
      case 'services3d':
        return icons3DReady ? <WebsiteIcon3D size={90} /> : <div style={{ width: 90, height: 90 }} />;
      case 'geometry':
        return <div style={{ transform: 'scale(0.55)' }}><MetatronCube /></div>;
      case 'experiences':
        return (
          <svg width="75" height="75" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="1" opacity="0.8"/>
            <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="0.5" opacity="0.6"/>
            <circle cx="24" cy="24" r="3" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'icons':
        return renderFolderPreview();
      default:
        return null;
    }
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* SMOOTH SCROLL - PREVENT MOBILE BOUNCE/DISRUPTION           */
        /* ═══════════════════════════════════════════════════════════ */
        
        .creative-page {
          overscroll-behavior: none;
          -webkit-overflow-scrolling: touch;
        }
        
        .app-overlay,
        .expanded-view {
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* iOS-LEVEL ELEGANCE - MAIN GRID                              */
        /* ═══════════════════════════════════════════════════════════ */
        
        .creative-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          margin: 0 auto;
          padding: 0 10px;
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .app-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 98px;
          height: 98px;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.3s ease,
                      opacity 0.5s ease;
          cursor: pointer;
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          overflow: visible;
        }
        
        .app-icon.loaded {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        .app-container:nth-child(1) .app-icon { transition-delay: 0ms; }
        .app-container:nth-child(2) .app-icon { transition-delay: 80ms; }
        .app-container:nth-child(3) .app-icon { transition-delay: 160ms; }
        .app-container:nth-child(4) .app-icon { transition-delay: 240ms; }
        .app-container:nth-child(5) .app-icon { transition-delay: 320ms; }
        
        /* Premium glass shine - top highlight */
        .app-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.08) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 60% 60%;
          pointer-events: none;
          z-index: 3;
        }
        
        /* Inner glow overlay for depth */
        .app-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08);
          pointer-events: none;
          z-index: 2;
        }
        
        .app-icon:active { transform: scale(0.92); }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ALIVE MATTE COLORS WITH OUTER GLOW                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        /* Work 3D - Emerald */
        .app-icon.work3d {
          box-shadow: 
            0 0 25px rgba(94, 234, 212, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 74, 66, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(94, 234, 212, 0.18);
        }
        
        /* Services 3D - Cyan */
        .app-icon.services3d {
          box-shadow: 
            0 0 25px rgba(103, 232, 249, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 72, 88, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(103, 232, 249, 0.18);
        }
        
        /* Geometry - Violet */
        .app-icon.geometry {
          box-shadow: 
            0 0 25px rgba(192, 132, 252, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(74, 45, 112, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(192, 132, 252, 0.18);
        }
        
        /* Experiences - Gold */
        .app-icon.experiences {
          box-shadow: 
            0 0 25px rgba(252, 211, 77, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(107, 79, 26, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(252, 211, 77, 0.18);
        }
        
        /* Icons - Gray */
        .app-icon.icons {
          box-shadow: 
            0 0 20px rgba(180, 180, 180, 0.15),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(40, 40, 40, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(180, 180, 180, 0.12);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* FLOATING GLOWING TEXT                                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-name {
          font-size: 12px;
          font-weight: 500;
          color: #FAFAF8;
          letter-spacing: 0.03em;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .app-name.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Color-matched text glow */
        .app-container:nth-child(1) .app-name {
          text-shadow: 
            0 0 12px rgba(94, 234, 212, 0.5),
            0 0 25px rgba(94, 234, 212, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(2) .app-name {
          text-shadow: 
            0 0 12px rgba(103, 232, 249, 0.5),
            0 0 25px rgba(103, 232, 249, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(3) .app-name {
          text-shadow: 
            0 0 12px rgba(192, 132, 252, 0.5),
            0 0 25px rgba(192, 132, 252, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(4) .app-name {
          text-shadow: 
            0 0 12px rgba(252, 211, 77, 0.5),
            0 0 25px rgba(252, 211, 77, 0.25),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        .app-container:nth-child(5) .app-name {
          text-shadow: 
            0 0 10px rgba(180, 180, 180, 0.4),
            0 0 20px rgba(180, 180, 180, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.6);
        }
        
        /* Staggered name animation */
        .app-container:nth-child(1) .app-name { transition-delay: 150ms; }
        .app-container:nth-child(2) .app-name { transition-delay: 230ms; }
        .app-container:nth-child(3) .app-name { transition-delay: 310ms; }
        .app-container:nth-child(4) .app-name { transition-delay: 390ms; }
        .app-container:nth-child(5) .app-name { transition-delay: 470ms; }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* OPENED APP OVERLAY - iOS FOLDER STYLE                       */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 10vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .app-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .app-overlay-title {
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 28px;
          letter-spacing: 0.03em;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .app-overlay-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 32px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 28px;
          max-width: 300px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .app-overlay-close {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }
        
        .app-overlay-close:active {
          transform: translateX(-50%) scale(0.95);
          background: rgba(255, 255, 255, 0.15);
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ITEM CARDS - PREMIUM FLOATING STYLE                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        .item-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        
        .item-icon {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
          overflow: hidden;
        }
        
        /* Glass shine on item icons */
        .item-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.18) 0%, 
            rgba(255, 255, 255, 0.06) 40%,
            transparent 100%
          );
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 3;
        }
        
        .item-icon:active { transform: scale(0.95); }
        
        /* Work 3D items - Emerald */
        .item-icon.work3d {
          background: linear-gradient(145deg, #1f6b5e 0%, #0d3d35 100%);
          box-shadow: 
            0 0 20px rgba(94, 234, 212, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(13, 61, 53, 0.4);
          border: 1px solid rgba(94, 234, 212, 0.15);
        }
        
        /* Service 3D items - Cyan */
        .item-icon.services3d {
          background: linear-gradient(145deg, #1f6880 0%, #0d3d4d 100%);
          box-shadow: 
            0 0 20px rgba(103, 232, 249, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(13, 61, 77, 0.4);
          border: 1px solid rgba(103, 232, 249, 0.15);
        }
        
        /* Geometry items - Violet */
        .item-icon.geometry {
          background: linear-gradient(145deg, #5a3d7a 0%, #2a1845 100%);
          box-shadow: 
            0 0 20px rgba(192, 132, 252, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(42, 24, 69, 0.4);
          border: 1px solid rgba(192, 132, 252, 0.15);
        }
        
        /* Experience items - Amber */
        .item-icon.experiences {
          background: linear-gradient(145deg, #8a5a28 0%, #4a3010 100%);
          box-shadow: 
            0 0 20px rgba(252, 211, 77, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(74, 48, 16, 0.4);
          border: 1px solid rgba(252, 211, 77, 0.15);
        }
        
        /* Icons folder items - Gray */
        .item-icon.icons {
          background: linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 100%);
          box-shadow: 
            0 0 15px rgba(150, 150, 150, 0.1),
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 8px 20px rgba(26, 26, 26, 0.4);
          border: 1px solid rgba(150, 150, 150, 0.1);
        }
        
        .item-name {
          font-size: 11px;
          font-weight: 500;
          color: #FAFAF8;
          text-align: center;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* EXPANDED ITEM VIEW - FULL SCREEN                            */
        /* ═══════════════════════════════════════════════════════════ */
        
        .expanded-view {
          position: fixed;
          inset: 0;
          background: #0A0A0A;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 8vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        
        .expanded-view.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .expanded-title {
          font-size: 24px;
          font-weight: 300;
          color: #FAFAF8;
          margin-bottom: 8px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        
        .expanded-desc {
          font-size: 13px;
          color: rgba(250, 250, 248, 0.6);
          margin-bottom: 24px;
          text-align: center;
          max-width: 280px;
        }
        
        .expanded-content {
          width: 100%;
          max-width: 340px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
        }
        
        .expanded-close {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease;
          z-index: 10;
        }
        
        .expanded-close:active { transform: translateX(-50%) scale(0.95); }
        
        .expanded-link {
          margin-top: 16px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: #FAFAF8;
          font-size: 13px;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        
        .expanded-link:active { background: rgba(255, 255, 255, 0.15); }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ICONS FOLDER - 2D ICONS GRID                                */
        /* ═══════════════════════════════════════════════════════════ */
        
        .icons-folder-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px 16px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          max-width: 300px;
        }
        
        .icon-2d-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        
        .icon-2d-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        
        .icon-2d-name {
          font-size: 9px;
          color: rgba(250, 250, 248, 0.7);
          text-align: center;
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* DESKTOP                                                     */
        /* ═══════════════════════════════════════════════════════════ */
        
        @media (min-width: 600px) {
          .creative-grid {
            gap: 40px 36px;
            max-width: 420px;
          }
          
          .app-container {
            gap: 16px;
          }
          
          .app-icon {
            width: 165px;
            height: 165px;
            border-radius: 38px;
          }
          
          .app-icon::before {
            border-radius: 38px 38px 60% 60%;
          }
          
          .app-icon::after {
            border-radius: 38px;
          }
          
          .app-icon:hover {
            transform: scale(1.06) translateY(-6px);
          }
          
          .app-icon.work3d:hover {
            box-shadow: 
              0 0 40px rgba(94, 234, 212, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(18, 74, 66, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.services3d:hover {
            box-shadow: 
              0 0 40px rgba(103, 232, 249, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(18, 72, 88, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.geometry:hover {
            box-shadow: 
              0 0 40px rgba(192, 132, 252, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(74, 45, 112, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.experiences:hover {
            box-shadow: 
              0 0 40px rgba(252, 211, 77, 0.3),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(107, 79, 26, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-icon.icons:hover {
            box-shadow: 
              0 0 30px rgba(180, 180, 180, 0.2),
              0 8px 25px rgba(0, 0, 0, 0.3),
              0 20px 50px rgba(40, 40, 40, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -3px 8px rgba(0, 0, 0, 0.2);
          }
          
          .app-name {
            font-size: 14px;
            font-weight: 500;
          }
          
          .app-overlay-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 40px;
            max-width: 400px;
            padding: 36px;
          }
          
          .item-icon {
            width: 100px;
            height: 100px;
            border-radius: 24px;
          }
          
          .item-icon::before {
            border-radius: 24px 24px 50% 50%;
          }
          
          .item-icon:hover {
            transform: scale(1.04);
          }
          
          .item-name {
            font-size: 13px;
          }
          
          .expanded-content {
            max-width: 500px;
            height: 400px;
          }
          
          .icons-folder-grid {
            max-width: 400px;
            gap: 16px 20px;
          }
          
          .icon-2d-box {
            width: 60px;
            height: 60px;
            border-radius: 14px;
          }
          
          .icon-2d-name {
            font-size: 10px;
          }
        }
      `}</style>

      <div className="creative-page" style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(100px, 15vh, 160px)",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Main App Grid */}
        <div className="creative-grid">
          {apps.map((app, i) => (
            <div key={app.id} className="app-container">
              <div
                className={`app-icon ${isLoaded ? 'loaded' : ''}`}
                style={{ background: `linear-gradient(145deg, ${app.color[0]} 0%, ${app.color[1]} 100%)` }}
                onClick={() => setOpenApp(app.id)}
              >
                {renderAppThumbnail(app.id)}
              </div>
              <span className={`app-name ${isLoaded ? 'loaded' : ''}`}>{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Work 3D Overlay */}
      <div className={`app-overlay ${openApp === 'work3d' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">Work 3D</div>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {work3DItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`work3d-${item.id}`)}>
              <div className="item-icon work3d">
                {renderWork3D(item.id, 65)}
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Services 3D Overlay */}
      <div className={`app-overlay ${openApp === 'services3d' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">Services 3D</div>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {service3DItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`services3d-${item.id}`)}>
              <div className="item-icon services3d">
                {renderService3D(item.id, 65)}
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Geometry Overlay */}
      <div className={`app-overlay ${openApp === 'geometry' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">Sacred Geometry</div>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {geometryItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`geometry-${item.id}`)}>
              <div className="item-icon geometry">
                <div style={{ transform: 'scale(0.48)' }}>{renderGeometry(item.id)}</div>
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Experiences Overlay */}
      <div className={`app-overlay ${openApp === 'experiences' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">3D Experiences</div>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {experienceItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => item.link ? window.open(item.link, '_blank') : setExpandedItem(`experiences-${item.id}`)}>
              <div className="item-icon experiences">
                <svg width="58" height="58" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="1" opacity="0.9"/>
                  <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="0.5" opacity="0.6"/>
                  <circle cx="24" cy="24" r="2" fill="white" opacity="1"/>
                </svg>
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Icons Folder Overlay */}
      <div className={`app-overlay ${openApp === 'icons' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-title">Icons</div>
        <div className="icons-folder-grid" onClick={e => e.stopPropagation()}>
          {/* Work Icons */}
          <div className="icon-2d-item">
            <div className="icon-2d-box"><Trade69Icon /></div>
            <span className="icon-2d-name">Trade69</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><MegaAgentIcon /></div>
            <span className="icon-2d-name">MegaAgent</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><OctopusIcon /></div>
            <span className="icon-2d-name">Octopus</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><OvermindIcon /></div>
            <span className="icon-2d-name">Overmind</span>
          </div>
          {/* Service Icons */}
          <div className="icon-2d-item">
            <div className="icon-2d-box"><WebsiteIcon /></div>
            <span className="icon-2d-name">Web</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><DashboardIcon /></div>
            <span className="icon-2d-name">Dashboard</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><APIIcon /></div>
            <span className="icon-2d-name">API</span>
          </div>
          <div className="icon-2d-item">
            <div className="icon-2d-box"><LLMIcon /></div>
            <span className="icon-2d-name">LLM</span>
          </div>
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Expanded Views for Work 3D */}
      {work3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `work3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `work3d-${item.id}` && renderWork3D(item.id, 280)}
          </div>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ))}

      {/* Expanded Views for Services 3D */}
      {service3DItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `services3d-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `services3d-${item.id}` && renderService3D(item.id, 280)}
          </div>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ))}

      {/* Expanded Views for Geometry */}
      {geometryItems.map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `geometry-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `geometry-${item.id}` && renderGeometry(item.id)}
          </div>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ))}

      {/* Expanded Views for Experiences */}
      {experienceItems.filter(item => !item.link).map(item => (
        <div key={item.id} className={`expanded-view ${expandedItem === `experiences-${item.id}` ? 'active' : ''}`}>
          <div className="expanded-title">{item.name}</div>
          <div className="expanded-desc">{item.desc}</div>
          <div className="expanded-content">
            {expandedItem === `experiences-${item.id}` && renderExperience(item.id)}
          </div>
          <div className="expanded-close" onClick={() => setExpandedItem(null)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}