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
  const [openApp, setOpenApp] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when overlay or expanded view is open
  useEffect(() => {
    if (openApp || expandedItem) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [openApp, expandedItem]);

  // Elegant Work SVG Icons - instant load, state-of-the-art design
  const renderWorkIcon = (id: string, size: number = 85) => {
    switch (id) {
      case 'trade69':
        // Trading chart with ascending trend
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Grid lines */}
            <line x1="10" y1="15" x2="10" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="25" y1="15" x2="25" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="40" y1="15" x2="40" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="10" y1="25" x2="55" y2="25" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="10" y1="37" x2="55" y2="37" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            {/* Candlesticks */}
            <rect x="12" y="32" width="4" height="12" fill="white" opacity="0.6"/>
            <line x1="14" y1="28" x2="14" y2="48" stroke="white" strokeWidth="1" opacity="0.6"/>
            <rect x="20" y="28" width="4" height="8" fill="white" opacity="0.7"/>
            <line x1="22" y1="24" x2="22" y2="40" stroke="white" strokeWidth="1" opacity="0.7"/>
            <rect x="28" y="22" width="4" height="10" fill="white" opacity="0.8"/>
            <line x1="30" y1="18" x2="30" y2="36" stroke="white" strokeWidth="1" opacity="0.8"/>
            <rect x="36" y="18" width="4" height="8" fill="white" opacity="0.9"/>
            <line x1="38" y1="14" x2="38" y2="30" stroke="white" strokeWidth="1" opacity="0.9"/>
            <rect x="44" y="12" width="4" height="10" fill="white" opacity="1"/>
            <line x1="46" y1="8" x2="46" y2="26" stroke="white" strokeWidth="1" opacity="1"/>
            {/* Trend line */}
            <path d="M12 42 L22 34 L30 28 L38 22 L46 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
            {/* Arrow tip */}
            <path d="M44 16 L48 12 L46 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
          </svg>
        );

      case 'megaagent':
        // Multi-agent network hub
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Central hub */}
            <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
            <circle cx="30" cy="30" r="3" fill="white" opacity="1"/>
            {/* Agent nodes */}
            <circle cx="30" cy="10" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.8"/>
            <circle cx="30" cy="10" r="2" fill="white" opacity="0.8"/>
            <circle cx="50" cy="20" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
            <circle cx="50" cy="20" r="2" fill="white" opacity="0.7"/>
            <circle cx="50" cy="40" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
            <circle cx="50" cy="40" r="2" fill="white" opacity="0.6"/>
            <circle cx="30" cy="50" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
            <circle cx="30" cy="50" r="2" fill="white" opacity="0.7"/>
            <circle cx="10" cy="40" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
            <circle cx="10" cy="40" r="2" fill="white" opacity="0.6"/>
            <circle cx="10" cy="20" r="5" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
            <circle cx="10" cy="20" r="2" fill="white" opacity="0.7"/>
            {/* Connections */}
            <line x1="30" y1="22" x2="30" y2="15" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="37" y1="25" x2="45" y2="20" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="37" y1="35" x2="45" y2="40" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="38" x2="30" y2="45" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="23" y1="35" x2="15" y2="40" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="23" y1="25" x2="15" y2="20" stroke="white" strokeWidth="1" opacity="0.5"/>
            {/* Orbit ring */}
            <circle cx="30" cy="30" r="22" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3"/>
          </svg>
        );

      case 'octopus':
        // Cognitive octopus - tentacles reaching out
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Head */}
            <ellipse cx="30" cy="24" rx="12" ry="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
            <circle cx="26" cy="22" r="2" fill="white" opacity="0.8"/>
            <circle cx="34" cy="22" r="2" fill="white" opacity="0.8"/>
            {/* Tentacles - flowing curves */}
            <path d="M22 32 Q12 38 8 50" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
            <path d="M25 33 Q18 42 14 52" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
            <path d="M28 34 Q26 44 24 54" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M32 34 Q34 44 36 54" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M35 33 Q42 42 46 52" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
            <path d="M38 32 Q48 38 52 50" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7"/>
            {/* Suction cups */}
            <circle cx="8" cy="50" r="2" fill="white" opacity="0.6"/>
            <circle cx="52" cy="50" r="2" fill="white" opacity="0.6"/>
            <circle cx="24" cy="54" r="1.5" fill="white" opacity="0.4"/>
            <circle cx="36" cy="54" r="1.5" fill="white" opacity="0.4"/>
          </svg>
        );

      case 'overmind':
        // Cosmic consciousness - all-seeing eye
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Outer aura rings */}
            <circle cx="30" cy="30" r="26" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="30" cy="30" r="22" stroke="white" strokeWidth="0.5" opacity="0.25"/>
            <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Eye shape */}
            <path d="M6 30 Q30 10 54 30 Q30 50 6 30" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
            {/* Iris */}
            <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="1" fill="none" opacity="0.9"/>
            {/* Pupil */}
            <circle cx="30" cy="30" r="5" fill="white" opacity="0.95"/>
            {/* Inner light */}
            <circle cx="28" cy="28" r="1.5" fill="white" opacity="0.5"/>
            {/* Radiating lines */}
            <line x1="30" y1="4" x2="30" y2="10" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <line x1="30" y1="50" x2="30" y2="56" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <line x1="4" y1="30" x2="10" y2="30" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <line x1="50" y1="30" x2="56" y2="30" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        );

      default:
        return null;
    }
  };

  // Elegant Service SVG Icons - instant load, state-of-the-art design
  const renderServiceIcon = (id: string, size: number = 85) => {
    switch (id) {
      case 'website':
        // Floating browser layers
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Back layer */}
            <rect x="14" y="10" width="32" height="24" rx="3" stroke="white" strokeWidth="0.8" opacity="0.3"/>
            {/* Middle layer */}
            <rect x="10" y="16" width="32" height="24" rx="3" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="10" y1="24" x2="42" y2="24" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            {/* Front layer */}
            <rect x="6" y="22" width="32" height="24" rx="3" stroke="white" strokeWidth="1.5" opacity="0.9"/>
            <line x1="6" y1="30" x2="38" y2="30" stroke="white" strokeWidth="1" opacity="0.7"/>
            {/* Browser dots */}
            <circle cx="11" cy="26" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="16" cy="26" r="1.5" fill="white" opacity="0.8"/>
            <circle cx="21" cy="26" r="1.5" fill="white" opacity="0.8"/>
            {/* Content */}
            <line x1="10" y1="36" x2="26" y2="36" stroke="white" strokeWidth="1" opacity="0.5"/>
            <line x1="10" y1="42" x2="20" y2="42" stroke="white" strokeWidth="1" opacity="0.4"/>
          </svg>
        );

      case 'dashboard':
        // Circular data HUD
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Outer ring */}
            <circle cx="30" cy="30" r="24" stroke="white" strokeWidth="0.8" opacity="0.3"/>
            {/* Data arcs */}
            <path d="M30 8 A22 22 0 0 1 52 30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
            <path d="M52 30 A22 22 0 0 1 38 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <path d="M38 50 A22 22 0 0 1 10 38" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
            {/* Inner rings */}
            <circle cx="30" cy="30" r="14" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Center */}
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.9"/>
            {/* Data points */}
            <circle cx="30" cy="8" r="2" fill="white" opacity="0.8"/>
            <circle cx="52" cy="30" r="2" fill="white" opacity="0.7"/>
            <circle cx="38" cy="50" r="2" fill="white" opacity="0.6"/>
          </svg>
        );

      case 'api':
        // Constellation endpoints
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Connection lines */}
            <line x1="30" y1="12" x2="30" y2="30" stroke="white" strokeWidth="1" opacity="0.4"/>
            <line x1="30" y1="30" x2="14" y2="44" stroke="white" strokeWidth="1" opacity="0.4"/>
            <line x1="30" y1="30" x2="46" y2="44" stroke="white" strokeWidth="1" opacity="0.4"/>
            <line x1="14" y1="44" x2="46" y2="44" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Glow rings */}
            <circle cx="30" cy="12" r="8" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="14" cy="44" r="8" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="46" cy="44" r="8" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            {/* Endpoints */}
            <circle cx="30" cy="12" r="5" fill="white" opacity="0.9"/>
            <circle cx="14" cy="44" r="5" fill="white" opacity="0.9"/>
            <circle cx="46" cy="44" r="5" fill="white" opacity="0.9"/>
            {/* Center hub */}
            <circle cx="30" cy="30" r="4" fill="white" opacity="0.7"/>
            <circle cx="30" cy="30" r="8" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Brackets */}
            <path d="M22 28 L18 30 L22 32" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            <path d="M38 28 L42 30 L38 32" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
        );

      case 'llm':
        // Neural brain network
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Brain outline */}
            <ellipse cx="30" cy="30" rx="24" ry="20" stroke="white" strokeWidth="0.8" opacity="0.25"/>
            {/* Neural connections */}
            <line x1="18" y1="16" x2="30" y2="26" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="42" y1="16" x2="30" y2="26" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="30" y1="26" x2="18" y2="36" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="30" y1="26" x2="42" y2="36" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="18" y1="36" x2="30" y2="46" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="42" y1="36" x2="30" y2="46" stroke="white" strokeWidth="0.5" opacity="0.4"/>
            <line x1="18" y1="16" x2="42" y2="16" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <line x1="18" y1="36" x2="42" y2="36" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Input layer */}
            <circle cx="18" cy="16" r="4" fill="white" opacity="0.7"/>
            <circle cx="42" cy="16" r="4" fill="white" opacity="0.7"/>
            {/* Hidden layer */}
            <circle cx="30" cy="26" r="5" fill="white" opacity="0.9"/>
            <circle cx="18" cy="36" r="4" fill="white" opacity="0.7"/>
            <circle cx="42" cy="36" r="4" fill="white" opacity="0.7"/>
            {/* Output layer */}
            <circle cx="30" cy="46" r="5" fill="white" opacity="0.9"/>
            {/* Pulse rings */}
            <circle cx="30" cy="26" r="9" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="30" cy="46" r="9" stroke="white" strokeWidth="0.5" opacity="0.2"/>
          </svg>
        );

      default:
        return null;
    }
  };

  // Keep 3D for expanded views only
  const renderWork3D = (id: string, size: number) => {
    switch (id) {
      case 'trade69': return <Trade69Icon3D size={size} />;
      case 'megaagent': return <MegaAgentIcon3D size={size} />;
      case 'octopus': return <OctopusIcon3D size={size} />;
      case 'overmind': return <OvermindIcon3D size={size} />;
      default: return null;
    }
  };

  // Keep 3D for expanded views only
  const renderService3D = (id: string, size: number) => {
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

  // App icon thumbnail - elegant SVG shapes for instant load
  const renderAppThumbnail = (id: string) => {
    switch (id) {
      case 'work3d':
        // Show Trade69 icon as preview for Work 3D folder
        return renderWorkIcon('trade69', 85);
      case 'services3d':
        // Show Website icon as preview for Services 3D folder
        return renderServiceIcon('website', 85);
      case 'geometry':
        return <div style={{ transform: 'scale(0.55)' }}><MetatronCube /></div>;
      case 'experiences':
        // Elegant quantum sphere visualization
        return (
          <svg width="90" height="90" viewBox="0 0 60 60" fill="none">
            {/* Outer orbital ring */}
            <ellipse cx="30" cy="30" rx="24" ry="10" stroke="white" strokeWidth="0.5" opacity="0.3" transform="rotate(-20 30 30)"/>
            <ellipse cx="30" cy="30" rx="24" ry="10" stroke="white" strokeWidth="0.5" opacity="0.3" transform="rotate(40 30 30)"/>
            <ellipse cx="30" cy="30" rx="24" ry="10" stroke="white" strokeWidth="0.5" opacity="0.3" transform="rotate(100 30 30)"/>
            {/* Main sphere outline */}
            <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="1" opacity="0.5"/>
            <circle cx="30" cy="30" r="12" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            {/* Glow ring */}
            <circle cx="30" cy="30" r="22" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            {/* Core */}
            <circle cx="30" cy="30" r="6" fill="white" opacity="0.9"/>
            <circle cx="30" cy="30" r="3" fill="white" opacity="1"/>
            {/* Orbital points */}
            <circle cx="54" cy="30" r="2" fill="white" opacity="0.7"/>
            <circle cx="6" cy="30" r="2" fill="white" opacity="0.7"/>
            <circle cx="30" cy="8" r="2" fill="white" opacity="0.6"/>
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
          touch-action: none;
          overflow: hidden;
          position: fixed;
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
        /* OPENED APP OVERLAY - SEAMLESS TRANSITION                    */
        /* ═══════════════════════════════════════════════════════════ */
        
        .app-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: clamp(100px, 15vh, 160px);
          padding-left: 20px;
          padding-right: 20px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        
        .app-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        
        .app-overlay-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px 28px;
          max-width: 240px;
          padding: 0 10px;
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.35s ease 0.05s, transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
        }
        
        .app-overlay.active .app-overlay-grid {
          opacity: 1;
          transform: scale(1);
        }
        
        .app-overlay-close {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
          z-index: 10;
          background: transparent;
          border: none;
        }
        
        .app-overlay-close:active {
          transform: translateX(-50%) scale(0.9);
        }
        
        .app-overlay-close svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
        }
        
        /* ═══════════════════════════════════════════════════════════ */
        /* ITEM CARDS - PREMIUM FLOATING STYLE                         */
        /* ═══════════════════════════════════════════════════════════ */
        
        .item-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        
        .item-icon {
          position: relative;
          width: 98px;
          height: 98px;
          border-radius: 24px;
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
            rgba(255, 255, 255, 0.22) 0%, 
            rgba(255, 255, 255, 0.08) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 60% 60%;
          pointer-events: none;
          z-index: 3;
        }
        
        /* Inner glow overlay for depth */
        .item-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08);
          pointer-events: none;
          z-index: 2;
        }
        
        .item-icon:active { transform: scale(0.95); }
        
        /* Work 3D items - Emerald */
        .item-icon.work3d {
          background: linear-gradient(145deg, #1f6b5e 0%, #124a42 50%, #0a3530 100%);
          box-shadow: 
            0 0 25px rgba(94, 234, 212, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 74, 66, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(94, 234, 212, 0.18);
        }
        
        /* Service 3D items - Cyan */
        .item-icon.services3d {
          background: linear-gradient(145deg, #1f6880 0%, #124858 50%, #0a3340 100%);
          box-shadow: 
            0 0 25px rgba(103, 232, 249, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(18, 72, 88, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(103, 232, 249, 0.18);
        }
        
        /* Geometry items - Violet */
        .item-icon.geometry {
          background: linear-gradient(145deg, #6b4a8f 0%, #4a2d70 50%, #351f52 100%);
          box-shadow: 
            0 0 25px rgba(192, 132, 252, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(74, 45, 112, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(192, 132, 252, 0.18);
        }
        
        /* Experience items - Amber */
        .item-icon.experiences {
          background: linear-gradient(145deg, #9a7228 0%, #6b4f1a 50%, #4a3510 100%);
          box-shadow: 
            0 0 25px rgba(252, 211, 77, 0.2),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(107, 79, 26, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(252, 211, 77, 0.18);
        }
        
        /* Icons folder items - Gray */
        .item-icon.icons {
          background: linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 50%, #1a1a1a 100%);
          box-shadow: 
            0 0 20px rgba(180, 180, 180, 0.15),
            0 4px 15px rgba(0, 0, 0, 0.4),
            0 10px 30px rgba(40, 40, 40, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -3px 8px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(180, 180, 180, 0.12);
        }
        
        .item-name {
          font-size: 11px;
          font-weight: 500;
          color: #FAFAF8;
          text-align: center;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.3),
            0 2px 4px rgba(0, 0, 0, 0.5);
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
          color: #FAFAF8;
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
          background: transparent;
        }
        
        .expanded-close {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
          z-index: 10;
          background: transparent;
          border: none;
        }
        
        .expanded-close:active { transform: translateX(-50%) scale(0.9); }
        
        .expanded-close svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
        }
        
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
          gap: 16px 12px;
          max-width: 240px;
          padding: 0 10px;
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.35s ease 0.05s, transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s;
        }
        
        .app-overlay.active .icons-folder-grid {
          opacity: 1;
          transform: scale(1);
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
          color: #FAFAF8;
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
                className={`app-icon ${app.id} ${isLoaded ? 'loaded' : ''}`}
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
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {work3DItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`work3d-${item.id}`)}>
              <div className="item-icon work3d">
                {renderWorkIcon(item.id, 85)}
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
      </div>

      {/* Services 3D Overlay */}
      <div className={`app-overlay ${openApp === 'services3d' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {service3DItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`services3d-${item.id}`)}>
              <div className="item-icon services3d">
                {renderServiceIcon(item.id, 85)}
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
      </div>

      {/* Geometry Overlay */}
      <div className={`app-overlay ${openApp === 'geometry' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {geometryItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => setExpandedItem(`geometry-${item.id}`)}>
              <div className="item-icon geometry">
                <div style={{ transform: 'scale(0.55)' }}>{renderGeometry(item.id)}</div>
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
      </div>

      {/* Experiences Overlay */}
      <div className={`app-overlay ${openApp === 'experiences' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
        <div className="app-overlay-grid" onClick={e => e.stopPropagation()}>
          {experienceItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => item.link ? window.open(item.link, '_blank') : setExpandedItem(`experiences-${item.id}`)}>
              <div className="item-icon experiences">
                <svg width="75" height="75" viewBox="0 0 60 60" fill="none">
                  {/* Outer orbital ring */}
                  <ellipse cx="30" cy="30" rx="22" ry="8" stroke="white" strokeWidth="0.5" opacity="0.3" transform="rotate(-20 30 30)"/>
                  <ellipse cx="30" cy="30" rx="22" ry="8" stroke="white" strokeWidth="0.5" opacity="0.3" transform="rotate(40 30 30)"/>
                  {/* Main sphere */}
                  <circle cx="30" cy="30" r="14" stroke="white" strokeWidth="1" opacity="0.6"/>
                  {/* Core */}
                  <circle cx="30" cy="30" r="5" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="app-overlay-close" onClick={() => setOpenApp(null)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
          </svg>
        </div>
      </div>

      {/* Icons Folder Overlay */}
      <div className={`app-overlay ${openApp === 'icons' ? 'active' : ''}`} onClick={() => setOpenApp(null)}>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}