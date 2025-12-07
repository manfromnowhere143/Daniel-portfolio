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
          fontSize: "clamp(16px, 2.2vw, 22px)",
          color: "#999999",
          maxWidth: "720px",
          margin: "0 auto",
          lineHeight: 1.8,
          fontWeight: 300,
          letterSpacing: "0.01em",
          padding: "0 20px"
        }}>
          Explorations in sacred geometry, emergence,<br />and the architecture of complexity
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

            {/* Experience Button - State of the Art */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "clamp(48px, 8vh, 72px)"
            }}>
              <Link
                href="https://metatron-genesis369.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "22px 48px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  overflow: "hidden",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03) inset"
                }}>
                  {/* Subtle gradient overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)",
                    pointerEvents: "none"
                  }} />

                  {/* Live indicator dot */}
                  <div style={{ 
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1
                  }}>
                    <div style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      boxShadow: "0 0 12px rgba(255,255,255,0.6)"
                    }} />
                    <div style={{
                      position: "absolute",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.25)"
                    }} />
                  </div>

                  <span style={{
                    position: "relative",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#FAFAF8",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    zIndex: 1
                  }}>
                    Experience Live
                  </span>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ 
                      color: "#CCCCCC",
                      position: "relative",
                      zIndex: 1
                    }}
                  >
                    <path d="M7 17L17 7M17 7H10M17 7V14" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Description - Later, Separated */}
          <div style={{
            maxWidth: "900px",
            margin: "clamp(80px, 12vh, 120px) auto 0",
            textAlign: "center",
            padding: "0 clamp(20px, 4vw, 0)"
          }}>
            <p style={{
              fontSize: "clamp(16px, 2.2vw, 21px)",
              color: "#B8B7B3",
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: "clamp(24px, 4vh, 36px)",
              letterSpacing: "0.01em"
            }}>
              An artistic exploration where thought sought form. Nothing more. The ancient geometry
              of Metatron's Cube rendered as an interactive meditation. Eight Platonic solids orbit
              the source pattern, each carrying its element, frequency, and metaphysical resonance.
            </p>

            <p style={{
              fontSize: "clamp(14px, 1.9vw, 17px)",
              color: "#666666",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "780px",
              margin: "0 auto"
            }}>
              Currently presenting the frontend visualization. Backend logic and testing infrastructure
              have been developed and validated. Available upon request for those interested in the
              technical architecture.
            </p>
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
                color: "#666666",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Digital Study
              </p>
            </div>
            <p style={{
              fontSize: "clamp(11px, 1.5vw, 13px)",
              color: "#555555",
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
                color: "#666666",
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
                color: "#666666",
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
                color: "#666666",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Algorithmic Process
              </p>
            </div>
            <p style={{
              fontSize: "clamp(11px, 1.5vw, 13px)",
              color: "#555555",
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
            color: "#555555",
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
                  color: "#AAAAAA",
                  fontWeight: 300,
                  marginBottom: "8px",
                  letterSpacing: "0.01em"
                }}>
                  Homework 1
                </p>
                <p style={{
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  color: "#555555",
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
                  color: "#AAAAAA",
                  fontWeight: 300,
                  marginBottom: "8px",
                  letterSpacing: "0.01em"
                }}>
                  Homework 2
                </p>
                <p style={{
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  color: "#555555",
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
      {/* EINSTEIN QUOTE - ELEGANT */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "clamp(100px, 18vh, 160px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(24px, 4vw, 42px)",
            fontWeight: 300,
            color: "#D4D4D4",
            lineHeight: 1.6,
            letterSpacing: "-0.01em",
            fontStyle: "italic",
            padding: "0 20px",
            marginBottom: "clamp(32px, 6vh, 48px)"
          }}>
            "Art is intelligence having fun"
          </p>
          <div style={{
            width: "80px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #3A3A38, transparent)",
            margin: "0 auto clamp(28px, 5vh, 40px)"
          }} />
          <p style={{
            fontSize: "clamp(11px, 1.6vw, 13px)",
            fontWeight: 400,
            color: "#777777",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}>
            Albert Einstein
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
              color: "#666666",
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
