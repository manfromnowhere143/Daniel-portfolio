import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Work | Daniel Wahnich",
  description: "Visual explorations in sacred geometry, emergence, and the architecture of complexity.",
};

export default function Creative() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero Section */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 100px) clamp(20px, 5vw, 40px) clamp(80px, 12vh, 120px)",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-block",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          <div style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "#4A4A48",
            margin: "0 auto 24px"
          }} />
          <h1 style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(48px, 7vw, 92px)",
            fontWeight: 300,
            color: "#FAFAF8",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "28px"
          }}>
            Visual Studies
          </h1>
          <div style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #3A3A38, transparent)",
            margin: "0 auto"
          }} />
        </div>
        <p style={{
          fontSize: "clamp(15px, 2.2vw, 22px)",
          color: "#FAFAF8",
          maxWidth: "720px",
          margin: "0 auto",
          lineHeight: 1.8,
          fontWeight: 300,
          letterSpacing: "0.01em",
          padding: "0 20px"
        }}>
          Explorations in sacred geometry, emergence, and the architecture of complexity
        </p>
      </div>

      {/* Main Gallery Container */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px) clamp(100px, 15vh, 160px)" }}>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* METATRON GENESIS - STANDALONE HERO */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div style={{ marginBottom: "clamp(140px, 20vh, 200px)" }}>
          
          {/* Hero Image - Standalone */}
          <div style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {/* Outer Glow */}
            <div style={{
              position: "absolute",
              inset: "clamp(-30px, -5vw, -60px)",
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
              borderRadius: "clamp(20px, 4vw, 40px)",
              pointerEvents: "none",
              opacity: 0.4
            }} />

            {/* Image Container */}
            <div style={{
              position: "relative",
              backgroundColor: "#000000",
              borderRadius: "clamp(6px, 1vw, 8px)",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
              boxShadow: "0 12px 24px rgba(0,0,0,0.5), 0 30px 60px rgba(0,0,0,0.6)",
              padding: "clamp(40px, 8vw, 100px)"
            }}>
              <Image
                src="/images/metatron-genesis.png"
                alt="Metatron Genesis"
                width={1200}
                height={1200}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>

            {/* Experience Button - Simple Text + Arrow */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "clamp(48px, 8vh, 72px)"
            }}>
              <Link
                href="https://metatron-genesis369.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.4s ease"
                }}
              >
                <span style={{
                  fontSize: "clamp(13px, 2vw, 15px)",
                  color: "#FAFAF8",
                  letterSpacing: "0.08em",
                  fontWeight: 300
                }}>
                  Experience Live
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "#FAFAF8" }}
                >
                  <path d="M7 17L17 7M17 7H10M17 7V14" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Full Description - Left Aligned */}
          <div style={{
            maxWidth: "950px",
            margin: "clamp(80px, 12vh, 120px) auto 0"
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
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                fontFamily: "monospace"
              }}>
                2025
              </span>
              <div style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#2A2A28"
              }} />
              <span style={{
                fontSize: "11px",
                color: "#FAFAF8",
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
                color: "#FAFAF8",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "clamp(20px, 3vh, 28px)",
                maxWidth: "720px",
                textAlign: "left"
              }}>
                An artistic exploration where thought sought form. Nothing more. The ancient geometry
                of Metatron's Cube rendered as an interactive meditation. Eight Platonic solids orbit
                the source pattern, each carrying its element, frequency, and metaphysical resonance.
              </p>

              <p style={{
                fontSize: "clamp(14px, 1.7vw, 16px)",
                color: "#FAFAF8",
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: "clamp(36px, 5vh, 48px)",
                maxWidth: "720px",
                textAlign: "left"
              }}>
                Currently presenting the frontend visualization. Backend logic and testing infrastructure
                have been developed and validated. Available upon request for those interested in the
                technical architecture.
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: "clamp(32px, 5vh, 44px)" }}>
                <p style={{
                  fontSize: "10px",
                  color: "#FAFAF8",
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
                        color: "#FAFAF8",
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
                color: "#FAFAF8",
                fontStyle: "italic",
                letterSpacing: "0.02em",
                textAlign: "left"
              }}>
                To be continued... <span style={{ opacity: 0.5 }}>perhaps</span>
              </p>
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
          gap: "clamp(20px, 4vw, 28px)",
          marginBottom: "clamp(100px, 18vh, 180px)",
          padding: "0 20px"
        }}>
          <div style={{ width: "clamp(60px, 15vw, 100px)", height: "1px", background: "linear-gradient(90deg, transparent, #1C1C1C, transparent)" }} />
          <div style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#262626",
            boxShadow: "0 0 0 8px rgba(38,38,38,0.1)"
          }} />
          <div style={{ width: "clamp(60px, 15vw, 100px)", height: "1px", background: "linear-gradient(90deg, transparent, #1C1C1C, transparent)" }} />
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* GALLERY PIECES */}
        {/* ═══════════════════════════════════════════════════════════ */}

        {/* Neural Architecture */}
        <div style={{ marginBottom: "clamp(80px, 12vh, 120px)" }}>
          <div style={{
            position: "relative",
            backgroundColor: "#000000",
            overflow: "hidden",
            maxWidth: "1000px",
            margin: "0 auto",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "6px"
          }}>
            <Image
              src="/images/art4.png"
              alt="Neural Architecture Study"
              width={1000}
              height={667}
              style={{ width: "100%", height: "auto", display: "block", filter: "brightness(0.96)" }}
            />
          </div>
          <div style={{
            marginTop: "clamp(20px, 4vh, 36px)",
            maxWidth: "1000px",
            margin: "clamp(20px, 4vh, 36px) auto 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "16px",
            padding: "0 clamp(0px, 2vw, 20px)"
          }}>
            <div>
              <p style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(18px, 2.8vw, 26px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px",
                letterSpacing: "-0.01em"
              }}>
                Neural Architecture
              </p>
              <p style={{
                fontSize: "clamp(10px, 1.4vw, 13px)",
                color: "#FAFAF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Digital Study
              </p>
            </div>
            <p style={{
              fontSize: "clamp(11px, 1.5vw, 13px)",
              color: "#FAFAF8",
              letterSpacing: "0.05em",
              fontFamily: "monospace"
            }}>
              2024
            </p>
          </div>
        </div>

        {/* Grid: Emergence & Layers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(40px, 8vw, 80px)",
          marginBottom: "clamp(80px, 12vh, 120px)"
        }}>
          <div>
            <div style={{
              backgroundColor: "#000000",
              overflow: "hidden",
              aspectRatio: "3/4",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "6px"
            }}>
              <Image
                src="/images/art3.jpg"
                alt="Emergence Study"
                width={800}
                height={1100}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.96)"
                }}
              />
            </div>
            <div style={{ marginTop: "clamp(20px, 4vh, 36px)" }}>
              <p style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(16px, 2.4vw, 22px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px",
                letterSpacing: "-0.01em"
              }}>
                Emergence
              </p>
              <p style={{
                fontSize: "clamp(10px, 1.4vw, 12px)",
                color: "#FAFAF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Mixed Media
              </p>
            </div>
          </div>
          
          <div>
            <div style={{
              backgroundColor: "#000000",
              overflow: "hidden",
              aspectRatio: "1/1",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "6px"
            }}>
              <Image
                src="/images/art2.JPEG"
                alt="Layers Study"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.96)"
                }}
              />
            </div>
            <div style={{ marginTop: "clamp(20px, 4vh, 36px)" }}>
              <p style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(16px, 2.4vw, 22px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px",
                letterSpacing: "-0.01em"
              }}>
                Layers
              </p>
              <p style={{
                fontSize: "clamp(10px, 1.4vw, 12px)",
                color: "#FAFAF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Digital Composite
              </p>
            </div>
          </div>
        </div>

        {/* Geometric Abstractions */}
        <div style={{ maxWidth: "920px", margin: "0 auto clamp(100px, 18vh, 180px)" }}>
          <div style={{
            backgroundColor: "#000000",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "6px"
          }}>
            <Image
              src="/images/art1.JPEG"
              alt="Geometric Study"
              width={920}
              height={540}
              style={{ width: "100%", height: "auto", display: "block", filter: "brightness(0.96)" }}
            />
          </div>
          <div style={{
            marginTop: "clamp(20px, 4vh, 36px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "16px",
            padding: "0 clamp(0px, 2vw, 20px)"
          }}>
            <div>
              <p style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(18px, 2.8vw, 26px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px",
                letterSpacing: "-0.01em"
              }}>
                Geometric Abstractions
              </p>
              <p style={{
                fontSize: "clamp(10px, 1.4vw, 13px)",
                color: "#FAFAF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Algorithmic Process
              </p>
            </div>
            <p style={{
              fontSize: "clamp(11px, 1.5vw, 13px)",
              color: "#FAFAF8",
              letterSpacing: "0.05em",
              fontFamily: "monospace"
            }}>
              2024
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HOMEWORK - HUMBLE & ELEGANT */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div>
          <p style={{
            fontSize: "clamp(12px, 2vw, 13px)",
            color: "#FAFAF8",
            letterSpacing: "0.05em",
            marginBottom: "clamp(36px, 6vh, 60px)",
            textAlign: "center",
            fontWeight: 300
          }}>
            Homework
          </p>

          {/* Grid Layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(40px, 7vw, 80px)",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {/* Homework 1 */}
            <div>
              <div style={{
                position: "relative",
                backgroundColor: "#000000",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "4px"
              }}>
                <Image
                  src="/images/homework1.jpg"
                  alt="Homework 1"
                  width={900}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.96
                  }}
                />
              </div>
              <div style={{ marginTop: "clamp(20px, 4vh, 32px)" }}>
                <p style={{
                  fontSize: "clamp(15px, 2.2vw, 18px)",
                  color: "#FAFAF8",
                  fontWeight: 300,
                  marginBottom: "8px",
                  letterSpacing: "0.01em"
                }}>
                  Homework 1
                </p>
                <p style={{
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  color: "#FAFAF8",
                  letterSpacing: "0.05em",
                  fontFamily: "monospace"
                }}>
                  2025
                </p>
              </div>
            </div>

            {/* Homework 2 */}
            <div>
              <div style={{
                position: "relative",
                backgroundColor: "#000000",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "4px"
              }}>
                <Image
                  src="/images/neural-timeline.jpg"
                  alt="Homework 2"
                  width={900}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    opacity: 0.96
                  }}
                />
              </div>
              <div style={{ marginTop: "clamp(20px, 4vh, 32px)" }}>
                <p style={{
                  fontSize: "clamp(15px, 2.2vw, 18px)",
                  color: "#FAFAF8",
                  fontWeight: 300,
                  marginBottom: "8px",
                  letterSpacing: "0.01em"
                }}>
                  Homework 2
                </p>
                <p style={{
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  color: "#FAFAF8",
                  letterSpacing: "0.05em",
                  fontFamily: "monospace"
                }}>
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* NEW QUOTE - NONSENSE */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "clamp(100px, 18vh, 160px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(20px, 3.5vw, 36px)",
            fontWeight: 300,
            color: "#FAFAF8",
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
            fontStyle: "italic",
            padding: "0 20px"
          }}>
            "Everything presented on this page is nonsense,<br />treat it accordingly"
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* NAVIGATION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={{ padding: "clamp(60px, 12vh, 120px) clamp(20px, 5vw, 40px)" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontSize: "clamp(10px, 1.8vw, 11px)",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "12px 0",
              borderBottom: "1px solid transparent",
              transition: "all 0.4s ease"
            }}
          >
            About
          </Link>
        </div>
      </div>

    </div>
  );
}
