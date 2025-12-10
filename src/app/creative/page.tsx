import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import { Metadata } from "next";
import MetatronCube from "@/components/MetatronCube";
import GoldenSpiral from "@/components/GoldenSpiral";
import FlowerOfLife from "@/components/FlowerOfLife";
import GeometricDivider from "@/components/GeometricDivider";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";
import Trade69Architecture from "@/components/Trade69Architecture";

export const metadata: Metadata = {
  title: "Creative Work | Daniel Wahnich",
  description: "Visual explorations in sacred geometry, emergence, and the architecture of complexity.",
};

export default function Creative() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero Section */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(32px, 5vh, 48px) 24px clamp(24px, 4vh, 32px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Creative
        </h1>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px clamp(80px, 12vh, 120px)" }}>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* METATRON GENESIS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>

          {/* Video Container - Smaller */}
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

            {/* Experience Live Button */}
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

          {/* Description */}
          <div style={{
            maxWidth: "700px",
            margin: "clamp(48px, 8vh, 64px) auto 0",
            textAlign: "left"
          }}>
            <p style={{
              fontSize: "11px",
              color: "#FAFAF8",
              letterSpacing: "0.15em",
              marginBottom: "clamp(16px, 2vh, 20px)",
              fontFamily: "monospace"
            }}>
              May 2025
            </p>

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
              fontWeight: 300,
              marginBottom: "clamp(32px, 5vh, 40px)"
            }}>
              The frontend is also tricky and contains complex architecture. Well, it was for me anyway.
            </p>

            {/* Tech Stack */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px"
            }}>
              {["React", "Three.js", "TypeScript", "Next.js", "WebGL"].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "10px",
                    color: "#FAFAF8",
                    letterSpacing: "0.08em",
                    padding: "6px 12px",
                    border: "1px solid #1E1E1C",
                    borderRadius: "2px"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SACRED GEOMETRY COMPONENTS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        
        <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
          <p style={{
            fontSize: "11px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            textAlign: "center",
            marginBottom: "clamp(48px, 7vh, 64px)"
          }}>
            Sacred Geometry Components
          </p>

          {/* Metatron's Cube */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "clamp(64px, 10vh, 80px)"
          }}>
            <div style={{
              padding: "40px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              marginBottom: "24px"
            }}>
              <MetatronCube />
            </div>
            <h3 style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 200,
              color: "#FAFAF8",
              marginBottom: "12px",
              letterSpacing: "0.02em"
            }}>
              Metatron's Cube
            </h3>
            <p style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#FAFAF8",
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: "left",
              maxWidth: "500px"
            }}>
              The blueprint of creation. Thirteen circles containing all five Platonic solids. Used as the central orchestrator in the agent network, coordinating information flow between all subsystems.
            </p>
          </div>

          {/* Golden Spiral */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "clamp(64px, 10vh, 80px)"
          }}>
            <div style={{
              padding: "40px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              marginBottom: "24px"
            }}>
              <GoldenSpiral />
            </div>
            <h3 style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 200,
              color: "#FAFAF8",
              marginBottom: "12px",
              letterSpacing: "0.02em"
            }}>
              Golden Spiral
            </h3>
            <p style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#FAFAF8",
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: "left",
              maxWidth: "500px"
            }}>
              Nature's perfect ratio, φ = 1.618. The Fibonacci sequence made visible. Represents the memory retrieval system, spiraling outward from recent to distant memories with logarithmic efficiency.
            </p>
          </div>

          {/* Flower of Life */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "clamp(64px, 10vh, 80px)"
          }}>
            <div style={{
              padding: "20px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              marginBottom: "24px"
            }}>
              <FlowerOfLife />
            </div>
            <h3 style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 200,
              color: "#FAFAF8",
              marginBottom: "12px",
              letterSpacing: "0.02em"
            }}>
              Flower of Life
            </h3>
            <p style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#FAFAF8",
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: "left",
              maxWidth: "500px"
            }}>
              Nineteen overlapping circles creating the pattern of genesis. Each petal represents a specialized processing unit, interconnected through shared boundaries for parallel computation.
            </p>
          </div>

          {/* Infinity Divider */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{
              padding: "20px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              borderRadius: "50%",
              marginBottom: "24px"
            }}>
              <GeometricDivider />
            </div>
            <h3 style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 200,
              color: "#FAFAF8",
              marginBottom: "12px",
              letterSpacing: "0.02em"
            }}>
              Lemniscate
            </h3>
            <p style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#FAFAF8",
              lineHeight: 1.8,
              fontWeight: 300,
              textAlign: "left",
              maxWidth: "500px"
            }}>
              The infinity symbol. Continuous flow without beginning or end. Represents the feedback loops in the system, where output becomes input in an eternal cycle of refinement.
            </p>
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
            marginBottom: "clamp(24px, 4vh, 32px)"
          }}>
            3D Architecture Visualization
          </p>
          
          <Trade69Architecture />
          
          <p style={{
            fontSize: "clamp(12px, 1.5vw, 14px)",
            color: "#FAFAF8",
            lineHeight: 1.8,
            fontWeight: 300,
            textAlign: "left",
            maxWidth: "500px",
            margin: "clamp(24px, 4vh, 32px) auto 0"
          }}>
            I needed a creative way to display Mermaid diagrams in a cool way. So I built this interactive visualization using HTML5 Canvas 2D API with custom rendering. The nodes orbit and pulse, showing data flow through the system layers.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* FUNCTIONAL ICONS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        
        <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
          <p style={{
            fontSize: "11px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            textAlign: "center",
            marginBottom: "clamp(48px, 7vh, 64px)"
          }}>
            Functional Icons
          </p>

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
        {/* GALLERY */}
        {/* ═══════════════════════════════════════════════════════════ */}
        
        <div style={{ marginBottom: "clamp(80px, 12vh, 100px)" }}>
          <p style={{
            fontSize: "11px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            textAlign: "center",
            marginBottom: "clamp(48px, 7vh, 64px)"
          }}>
            Visual Studies
          </p>

          {/* Neural Architecture */}
          <div style={{ marginBottom: "clamp(60px, 10vh, 80px)" }}>
            <div style={{
              backgroundColor: "#000000",
              overflow: "hidden",
              borderRadius: "4px"
            }}>
              <Image
                src="/images/art4.png"
                alt="Neural Architecture Study"
                width={1000}
                height={667}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                color: "#FAFAF8",
                fontWeight: 200,
                marginBottom: "6px"
              }}>
                Neural Architecture
              </p>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                2024
              </p>
            </div>
          </div>

          {/* Grid: Emergence & Layers */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px, 5vw, 48px)",
            marginBottom: "clamp(60px, 10vh, 80px)"
          }}>
            <div>
              <div style={{
                backgroundColor: "#000000",
                overflow: "hidden",
                aspectRatio: "3/4",
                borderRadius: "4px"
              }}>
                <Image
                  src="/images/art3.jpg"
                  alt="Emergence Study"
                  width={800}
                  height={1100}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#FAFAF8", fontWeight: 200, marginBottom: "6px" }}>
                  Emergence
                </p>
                <p style={{ fontSize: "11px", color: "#FAFAF8", letterSpacing: "0.1em", fontFamily: "monospace" }}>
                  2024
                </p>
              </div>
            </div>

            <div>
              <div style={{
                backgroundColor: "#000000",
                overflow: "hidden",
                aspectRatio: "1/1",
                borderRadius: "4px"
              }}>
                <Image
                  src="/images/art2.JPEG"
                  alt="Layers Study"
                  width={800}
                  height={800}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#FAFAF8", fontWeight: 200, marginBottom: "6px" }}>
                  Layers
                </p>
                <p style={{ fontSize: "11px", color: "#FAFAF8", letterSpacing: "0.1em", fontFamily: "monospace" }}>
                  2024
                </p>
              </div>
            </div>
          </div>

          {/* Geometric Abstractions */}
          <div>
            <div style={{
              backgroundColor: "#000000",
              overflow: "hidden",
              borderRadius: "4px"
            }}>
              <Image
                src="/images/art1.JPEG"
                alt="Geometric Study"
                width={920}
                height={540}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                color: "#FAFAF8",
                fontWeight: 200,
                marginBottom: "6px"
              }}>
                Geometric Abstractions
              </p>
              <p style={{
                fontSize: "11px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                2024
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SKETCHES */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div>
          <p style={{
            fontSize: "11px",
            color: "#FAFAF8",
            letterSpacing: "0.15em",
            textAlign: "center",
            marginBottom: "clamp(48px, 7vh, 64px)"
          }}>
            Sketches
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(24px, 4vw, 40px)"
          }}>
            {[
              { src: "/images/homework1.jpg", name: "Study I" },
              { src: "/images/neural-timeline.jpg", name: "Study II" },
              { src: "/images/homework36.jpg", name: "Study III" },
              { src: "/images/homework4.jpg", name: "Study IV" },
              { src: "/images/homework5.jpg", name: "Study V" }
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  backgroundColor: "#000000",
                  overflow: "hidden",
                  borderRadius: "4px"
                }}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={900}
                    height={1200}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div style={{ marginTop: "16px", textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(13px, 1.8vw, 15px)",
                    color: "#FAFAF8",
                    fontWeight: 200,
                    marginBottom: "4px"
                  }}>
                    {item.name}
                  </p>
                  <p style={{
                    fontSize: "10px",
                    color: "#FAFAF8",
                    letterSpacing: "0.1em",
                    fontFamily: "monospace"
                  }}>
                    2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
  );
}
