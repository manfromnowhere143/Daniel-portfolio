"use client";

import { useState } from "react";
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
  const [expandedGeometry, setExpandedGeometry] = useState<string | null>(null);
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const openGeometry = (id: string) => setExpandedGeometry(id);
  const closeGeometry = () => setExpandedGeometry(null);

  const openWork = (id: string) => setExpandedWork(id);
  const closeWork = () => setExpandedWork(null);

  const openService = (id: string) => setExpandedService(id);
  const closeService = () => setExpandedService(null);

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

  return (
    <>
      <style>{`
        .geometry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
        }
        .geometry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .geometry-item:active {
          transform: scale(0.96);
        }
        .geometry-preview {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .geometry-preview svg {
          max-width: 100%;
          max-height: 100%;
        }
        .geometry-title {
          font-size: 13px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
        }

        /* Expanded overlay */
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
        .geometry-tap-hint {
          position: absolute;
          bottom: 40px;
          font-size: 10px;
          color: #FAFAF8;
          opacity: 0.3;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* 3D Icons Gallery */
        .icons3d-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 300px;
          margin: 0 auto;
        }
        .icons3d-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 8px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .icons3d-item:active {
          transform: scale(0.96);
        }
        .icons3d-preview {
          margin-bottom: 12px;
        }
        .icons3d-title {
          font-size: 12px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          text-align: center;
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
        .icons3d-tap-hint {
          position: absolute;
          bottom: 40px;
          font-size: 10px;
          color: #FAFAF8;
          opacity: 0.3;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        @media (min-width: 600px) {
          .geometry-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 700px;
          }
          .geometry-item {
            padding: 32px 20px;
            cursor: pointer;
          }
          .geometry-item:hover {
            transform: scale(1.02);
          }
          .geometry-item:active {
            transform: scale(0.98);
          }
          .geometry-preview {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
          }
          .geometry-title {
            font-size: 14px;
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
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            max-width: 600px;
          }
          .icons3d-item {
            padding: 20px 16px;
          }
          .icons3d-item:hover {
            transform: scale(1.02);
          }
          .icons3d-item:active {
            transform: scale(0.98);
          }
          .icons3d-title {
            font-size: 13px;
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
        }
      `}</style>

      <div style={{ paddingTop: "40px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

        {/* Hero Section */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "clamp(20px, 3vh, 32px) 24px clamp(24px, 4vh, 32px)",
          textAlign: "center"
        }}>
          <h1 style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 200,
            color: "#FAFAF8",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            fontStyle: "italic"
          }}>
            visual figments
          </h1>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px clamp(80px, 12vh, 120px)" }}>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* QUANTUM SPHERE */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(60px, 10vh, 80px)" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "clamp(20px, 3vh, 28px)"
            }}>
              <h3 style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 200,
                color: "#FAFAF8",
                marginBottom: "16px",
                letterSpacing: "0.02em"
              }}>
                Quantum Sphere
              </h3>
              <p style={{
                fontSize: "clamp(13px, 1.5vw, 15px)",
                color: "#FAFAF8",
                lineHeight: 1.9,
                fontWeight: 300,
                textAlign: "left",
                maxWidth: "500px"
              }}>
                A living geodesic structure pulsing with quantum energy. Multi-layered icosahedral shells breathe and deform through simplex noise fields.
              </p>
            </div>

            <div style={{
              position: "relative",
              maxWidth: "700px",
              margin: "0 auto",
              padding: "clamp(12px, 2vw, 24px)"
            }}>
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "70%",
                height: "70%",
                background: "radial-gradient(ellipse at center, rgba(100, 140, 200, 0.06) 0%, rgba(60, 100, 160, 0.02) 40%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <QuantumSphere initialExpanded={false} />
              </div>
            </div>

            <p style={{
              fontSize: "10px",
              color: "#FAFAF8",
              letterSpacing: "0.1em",
              fontFamily: "monospace",
              textAlign: "center",
              marginTop: "clamp(16px, 2.5vh, 24px)"
            }}>
              Three.js · WebGL · GLSL Shaders · Simplex Noise
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* QUANTUM MANIFOLD */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "clamp(16px, 2.5vh, 24px)"
            }}>
              <h3 style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 200,
                color: "#FAFAF8",
                marginBottom: "16px",
                letterSpacing: "0.02em"
              }}>
                Quantum Manifold
              </h3>
              <p style={{
                fontSize: "clamp(13px, 1.5vw, 15px)",
                color: "#FAFAF8",
                lineHeight: 1.9,
                fontWeight: 300,
                textAlign: "left",
                maxWidth: "500px"
              }}>
                A field of infinite possibility. The manifold ripples with quantum fluctuations, each wave representing probability amplitudes in superposition.
              </p>
            </div>

            <div style={{
              position: "relative",
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40px",
                background: "linear-gradient(to bottom, #0A0A0A, transparent)",
                zIndex: 2,
                pointerEvents: "none"
              }} />

              <QuantumManifold />

              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40px",
                background: "linear-gradient(to top, #0A0A0A, transparent)",
                zIndex: 2,
                pointerEvents: "none"
              }} />
            </div>

            <p style={{
              fontSize: "10px",
              color: "#FAFAF8",
              letterSpacing: "0.1em",
              fontFamily: "monospace",
              textAlign: "center",
              marginTop: "clamp(16px, 2.5vh, 24px)"
            }}>
              Three.js · WebGL · GLSL Shaders · Simplex Noise
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* METATRON GENESIS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            <p style={{
              fontSize: "11px",
              color: "#FAFAF8",
              letterSpacing: "0.15em",
              textAlign: "center",
              marginBottom: "clamp(32px, 5vh, 40px)",
              }}>
              METATRON GENESIS
            </p>

            <div style={{
              position: "relative",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              <div style={{
                position: "relative",
                backgroundColor: "#000000",
                borderRadius: "4px",
                overflow: "hidden",
              }}>
                <VideoPlayer src="/videos/metatrondemo1.mov" />
              </div>

              <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "clamp(20px, 3vh, 28px)"
              }}>
                <Link
                  href="https://metatron-genesis369.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{
                    fontSize: "11px",
                    color: "#FAFAF8",
                    letterSpacing: "0.12em",
                    fontWeight: 200,
                    textTransform: "uppercase"
                  }}>
                    Experience Live
                  </span>
                  <span style={{ color: "#FAFAF8", fontSize: "12px" }}>→</span>
                </Link>
              </div>
            </div>

            <div style={{
              maxWidth: "700px",
              margin: "clamp(48px, 8vh, 64px) auto 0",
              textAlign: "left"
            }}>
              <p style={{
                fontSize: "clamp(14px, 1.8vw, 16px)",
                color: "#FAFAF8",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "20px"
              }}>
                Back in May I was probably smoking too much weed and started building a cognitive network based on sacred geometry. I tried to visualize it. While this was totally a figment of imagination, to me it looked like a beautiful aligned structure.
              </p>

              <p style={{
                fontSize: "clamp(14px, 1.8vw, 16px)",
                color: "#FAFAF8",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "20px"
              }}>
                I built the backend and gave each agent (a sacred geometry shape) a role. Basically a regular structure of memory agents, operative agents, and orchestration, but all based on the principles of each geometry shape.
              </p>

              <p style={{
                fontSize: "clamp(14px, 1.8vw, 16px)",
                color: "#FAFAF8",
                lineHeight: 1.9,
                fontWeight: 300
              }}>
                The frontend is also tricky and contains complex architecture. Well, it was for me anyway.
              </p>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* SACRED GEOMETRY COMPONENTS - Gallery Style */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            {/* Section Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 5vh, 48px)"
            }}>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                letterSpacing: "0.15em",
                marginBottom: "16px",
                }}>
                CUSTOM COMPONENTS
              </p>
              <h3 style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginBottom: "12px"
              }}>
                Sacred Geometry
              </h3>
              <p style={{
                fontSize: "10px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                React · Pure SVG · Mathematical Geometry · Trigonometric Positioning
              </p>
            </div>

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
                    <p className="geometry-title">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D ARCHITECTURE VISUALIZATION */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            <p style={{
              fontSize: "11px",
              color: "#FAFAF8",
              letterSpacing: "0.15em",
              textAlign: "center",
              marginBottom: "clamp(24px, 4vh, 32px)",
              }}>
              3D ARCHITECTURE VISUALIZATION
            </p>

            <Trade69Architecture />

            <p style={{
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "#FAFAF8",
              lineHeight: 1.9,
              fontWeight: 300,
              textAlign: "left",
              maxWidth: "500px",
              margin: "clamp(24px, 4vh, 32px) auto 0"
            }}>
              A creative way to display the Mermaid diagram for the Trade69 project.
            </p>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D WORK ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            {/* Section Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 5vh, 48px)"
            }}>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                letterSpacing: "0.15em",
                marginBottom: "16px",
                }}>
                3D VISUALIZATIONS
              </p>
              <h3 style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginBottom: "12px"
              }}>
                Work Icons
              </h3>
              <p style={{
                fontSize: "10px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                Three.js · WebGL · GLSL Shaders · Custom Geometry
              </p>
            </div>

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
                  <p className="icons3d-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* 3D SERVICE ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            {/* Section Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 5vh, 48px)"
            }}>
              <h3 style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginBottom: "12px"
              }}>
                Service Icons
              </h3>
              <p style={{
                fontSize: "10px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                Three.js · WebGL · GLSL Shaders · Holographic Effects
              </p>
            </div>

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
                  <p className="icons3d-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* SVG ICONS */}
          {/* ═══════════════════════════════════════════════════════════ */}

          <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
            {/* Section Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "clamp(32px, 5vh, 48px)"
            }}>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                letterSpacing: "0.15em",
                marginBottom: "16px"
              }}>
                2D VISUALIZATIONS
              </p>
              <h3 style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginBottom: "12px"
              }}>
                SVG Icons
              </h3>
              <p style={{
                fontSize: "10px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                Pure SVG · Mathematical Precision · Scalable Graphics
              </p>
            </div>

            {/* Work Icons Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(24px, 4vw, 40px)",
              maxWidth: "600px",
              margin: "0 auto clamp(48px, 7vh, 64px)"
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <Trade69Icon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Trading</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <MegaAgentIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Network</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <OctopusIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Cognitive</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <OvermindIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Blockchain</span>
              </div>
            </div>

            {/* Service Icons Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(24px, 4vw, 40px)",
              maxWidth: "600px",
              margin: "0 auto"
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <WebsiteIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Web</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <DashboardIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>Dashboard</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <APIIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>API</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <LLMIcon />
                <span style={{ fontSize: "10px", color: "#FAFAF8", letterSpacing: "0.08em" }}>LLM</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* VISUAL DIVIDER */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "clamp(80px, 12vh, 100px)"
          }}>
            <GeometricDivider />
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* GALLERY & SKETCHES */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <CreativeGallery />

        </div>

        {/* Navigation */}
        <div style={{
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
        <p className="geometry-tap-hint">tap anywhere to close</p>
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
        <p className="icons3d-tap-hint">tap anywhere to close</p>
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
        <p className="icons3d-tap-hint">tap anywhere to close</p>
      </div>
    </>
  );
}