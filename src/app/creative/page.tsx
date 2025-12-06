import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Work | Daniel Wahnich",
  description: "Abstract visual explorations in texture, form, and layered complexity by Daniel Wahnich.",
};

export default function Creative() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero Section - Ultra Minimal */}
      <div style={{
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 6vw, 80px)",
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1
        }}>
          Visual Studies
        </h1>
        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#71706E",
          margin: "0 auto clamp(24px, 4vh, 36px)"
        }} />
        <p style={{
          fontSize: "clamp(15px, 2vw, 20px)",
          color: "#B8B7B3",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: 1.7,
          fontWeight: 300
        }}>
          Explorations in form, emergence, and the architecture of complexity
        </p>
      </div>

      {/* Gallery */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 6vh, 60px) clamp(24px, 4vw, 80px) clamp(80px, 12vh, 120px)" }}>

        {/* METATRON GENESIS - Featured Interactive Project */}
        <div style={{ marginBottom: "clamp(100px, 14vh, 140px)" }}>

          {/* Project Label */}
          <div style={{
            textAlign: "center",
            marginBottom: "clamp(24px, 4vh, 36px)"
          }}>
            <span style={{
              fontSize: "10px",
              color: "#4A4A48",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "monospace"
            }}>
              Featured Work
            </span>
          </div>

          {/* Interactive Preview Card - Floating Design */}
          <div style={{
            position: "relative",
            maxWidth: "950px",
            margin: "0 auto"
          }}>
            {/* Glow Effect Behind */}
            <div style={{
              position: "absolute",
              inset: "-20px",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
              borderRadius: "20px",
              pointerEvents: "none"
            }} />

            {/* Main Card */}
            <div style={{
              position: "relative",
              backgroundColor: "#0D0D0D",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.4), 0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset"
            }}>
              {/* Image Container - Natural Aspect */}
              <div style={{
                position: "relative",
                overflow: "hidden",
                background: "radial-gradient(ellipse at center, #0a0a0f 0%, #000000 100%)"
              }}>
                <Image
                  src="/images/metatron-genesis.png"
                  alt="Metatron Genesis - Sacred Geometry Visualization"
                  width={950}
                  height={950}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    maxHeight: "70vh",
                    objectFit: "contain"
                  }}
                />

                {/* Subtle Vignette */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
                  pointerEvents: "none"
                }} />
              </div>

              {/* Bottom Bar - Refined Design */}
              <div style={{
                padding: "clamp(24px, 4vw, 36px) clamp(28px, 5vw, 44px)",
                background: "linear-gradient(180deg, rgba(15,15,15,0.98) 0%, rgba(10,10,10,1) 100%)",
                borderTop: "1px solid rgba(255,255,255,0.04)"
              }}>
                {/* Content Grid */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "24px"
                }}>
                  {/* Left - Title Group */}
                  <div style={{ flex: "1 1 auto", minWidth: "200px" }}>
                    {/* Main Title */}
                    <h3 style={{
                      fontFamily: "Playfair Display, Georgia, serif",
                      fontSize: "clamp(22px, 3vw, 28px)",
                      fontWeight: 300,
                      color: "#FAFAF8",
                      letterSpacing: "-0.02em",
                      marginBottom: "8px",
                      lineHeight: 1.2
                    }}>
                      Metatron Genesis
                    </h3>

                    {/* Subtitle with refined styling */}
                    <p style={{
                      fontSize: "clamp(11px, 1.3vw, 13px)",
                      color: "#71706E",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 300
                    }}>
                      Interactive 3D Sacred Geometry
                    </p>
                  </div>

                  {/* Right - Experience Live Button */}
                  <Link
                    href="https://metatron-genesis369.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 32px",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative"
                    }}>
                      {/* Subtle inner glow */}
                      <div style={{
                        position: "absolute",
                        inset: "1px",
                        borderRadius: "3px",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%)",
                        pointerEvents: "none"
                      }} />

                      {/* Live Pulse Indicator */}
                      <div style={{ position: "relative" }}>
                        <div style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#B8B7B3"
                        }} />
                        {/* Outer ring */}
                        <div style={{
                          position: "absolute",
                          inset: "-4px",
                          borderRadius: "50%",
                          border: "1px solid rgba(184,183,179,0.3)"
                        }} />
                      </div>

                      {/* Text - Refined Typography */}
                      <span style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#FAFAF8",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
                      }}>
                        Experience
                      </span>

                      {/* Minimal Arrow */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        style={{ color: "#71706E" }}
                      >
                        <path d="M7 17L17 7M17 7H10M17 7V14" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div style={{
            maxWidth: "950px",
            margin: "clamp(48px, 7vh, 64px) auto 0"
          }}>
            {/* Minimal divider */}
            <div style={{
              width: "32px",
              height: "1px",
              background: "#2A2A28",
              marginBottom: "clamp(32px, 5vh, 44px)"
            }} />

            {/* Year and Status Row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "clamp(24px, 4vh, 32px)"
            }}>
              <span style={{
                fontSize: "12px",
                color: "#4A4A48",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                2024
              </span>
              <div style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#2A2A28"
              }} />
              <span style={{
                fontSize: "11px",
                color: "#4A4A48",
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              }}>
                In Progress
              </span>
            </div>

            {/* Description */}
            <div>
              <p style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "#B8B7B3",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "clamp(20px, 3vh, 28px)",
                maxWidth: "720px"
              }}>
                An artistic exploration where thought sought form. Nothing more. The ancient geometry
                of Metatron's Cube rendered as an interactive meditation. Eight Platonic solids orbit
                the source pattern, each carrying its element, frequency, and metaphysical resonance.
              </p>

              <p style={{
                fontSize: "clamp(14px, 1.7vw, 16px)",
                color: "#5A5A58",
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: "clamp(36px, 5vh, 48px)",
                maxWidth: "720px"
              }}>
                Currently presenting the frontend visualization. Backend logic and testing infrastructure
                have been developed and validated. Available upon request for those interested in the
                technical architecture.
              </p>

              {/* Tech Stack - Refined */}
              <div style={{ marginBottom: "clamp(32px, 5vh, 44px)" }}>
                <p style={{
                  fontSize: "10px",
                  color: "#3A3A38",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "16px"
                }}>
                  Technologies
                </p>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {["React", "Three.js", "TypeScript", "Next.js", "Framer Motion", "WebGL"].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        color: "#5A5A58",
                        letterSpacing: "0.04em",
                        padding: "8px 16px",
                        border: "1px solid #1E1E1C",
                        borderRadius: "2px"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Continuation Note */}
              <p style={{
                fontSize: "14px",
                color: "#3A3A38",
                fontStyle: "italic",
                letterSpacing: "0.02em"
              }}>
                To be continued... <span style={{ opacity: 0.5 }}>perhaps</span>
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "clamp(80px, 12vh, 120px)"
        }}>
          <div style={{ width: "60px", height: "1px", background: "#1C1C1C" }} />
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#2A2A28" }} />
          <div style={{ width: "60px", height: "1px", background: "#1C1C1C" }} />
        </div>

        {/* OTHER WORKS */}

        {/* Piece 1 */}
        <div style={{ marginBottom: "clamp(60px, 10vh, 100px)" }}>
          <div style={{
            position: "relative",
            backgroundColor: "#000000",
            overflow: "hidden",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <Image
              src="/images/art4.png"
              alt="Neural Architecture Study"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto", display: "block", opacity: 0.95 }}
            />
          </div>
          <div style={{
            marginTop: "clamp(20px, 3vh, 32px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "16px",
            maxWidth: "900px",
            margin: "clamp(20px, 3vh, 32px) auto 0"
          }}>
            <div>
              <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "#FAFAF8", fontWeight: 300, marginBottom: "8px" }}>
                Neural Architecture
              </p>
              <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#71706E", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Digital Study
              </p>
            </div>
            <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#71706E", letterSpacing: "0.05em" }}>2024</p>
          </div>
        </div>

        {/* Piece 2 & 3 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "clamp(40px, 6vw, 60px)",
          marginBottom: "clamp(60px, 10vh, 100px)"
        }}>
          <div>
            <div style={{ backgroundColor: "#000000", overflow: "hidden", aspectRatio: "3/4" }}>
              <Image src="/images/art3.jpg" alt="Emergence Study" width={800} height={1100}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.95 }} />
            </div>
            <div style={{ marginTop: "clamp(20px, 3vh, 32px)" }}>
              <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(16px, 2.2vw, 20px)", color: "#FAFAF8", fontWeight: 300, marginBottom: "8px" }}>Emergence</p>
              <p style={{ fontSize: "clamp(11px, 1.4vw, 13px)", color: "#71706E", letterSpacing: "0.1em", textTransform: "uppercase" }}>Mixed Media</p>
            </div>
          </div>
          <div>
            <div style={{ backgroundColor: "#000000", overflow: "hidden", aspectRatio: "1/1" }}>
              <Image src="/images/art2.JPEG" alt="Layers Study" width={800} height={800}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.95 }} />
            </div>
            <div style={{ marginTop: "clamp(20px, 3vh, 32px)" }}>
              <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(16px, 2.2vw, 20px)", color: "#FAFAF8", fontWeight: 300, marginBottom: "8px" }}>Layers</p>
              <p style={{ fontSize: "clamp(11px, 1.4vw, 13px)", color: "#71706E", letterSpacing: "0.1em", textTransform: "uppercase" }}>Digital Composite</p>
            </div>
          </div>
        </div>

        {/* Piece 4 */}
        <div style={{ maxWidth: "850px", margin: "0 auto clamp(60px, 10vh, 100px)" }}>
          <div style={{ backgroundColor: "#000000", overflow: "hidden" }}>
            <Image src="/images/art1.JPEG" alt="Geometric Study" width={850} height={500}
              style={{ width: "100%", height: "auto", display: "block", opacity: 0.95 }} />
          </div>
          <div style={{ marginTop: "clamp(20px, 3vh, 32px)", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "#FAFAF8", fontWeight: 300, marginBottom: "8px" }}>Geometric Abstractions</p>
              <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#71706E", letterSpacing: "0.1em", textTransform: "uppercase" }}>Algorithmic Process</p>
            </div>
            <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "#71706E", letterSpacing: "0.05em" }}>2024</p>
          </div>
        </div>

      </div>

      {/* Philosophy Statement */}
      <div style={{ borderTop: "1px solid #1C1C1C", padding: "clamp(60px, 10vh, 100px) 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(20px, 3.5vw, 36px)", fontWeight: 300, color: "#FAFAF8", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            Order from chaos
          </p>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#71706E", margin: "clamp(24px, 4vh, 40px) auto" }} />
          <p style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 300, color: "#B8B7B3", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Pattern from randomness. The space between control and surrender.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ padding: "clamp(60px, 10vh, 100px) 24px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "clamp(11px, 1.5vw, 13px)", color: "#71706E", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid transparent", paddingBottom: "4px", transition: "all 0.3s ease" }}>
            About
          </Link>
        </div>
      </div>

    </div>
  );
}