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

      {/* Gallery - Asymmetric Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 6vh, 60px) clamp(24px, 4vw, 80px) clamp(80px, 12vh, 120px)" }}>
        
        {/* Piece 1 - Constrained Width */}
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
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                opacity: 0.95
              }}
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
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px"
              }}>
                Neural Architecture
              </p>
              <p style={{ 
                fontSize: "clamp(12px, 1.5vw, 14px)",
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Digital Study
              </p>
            </div>
            <p style={{ 
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#71706E",
              letterSpacing: "0.05em"
            }}>
              2024
            </p>
          </div>
        </div>

        {/* Piece 2 & 3 - Side by Side on Desktop, Stacked on Mobile */}
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "clamp(40px, 6vw, 60px)",
          marginBottom: "clamp(60px, 10vh, 100px)"
        }}>
          
          {/* Piece 2 */}
          <div>
            <div style={{ 
              backgroundColor: "#000000",
              overflow: "hidden",
              aspectRatio: "3/4"
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
                  opacity: 0.95
                }}
              />
            </div>
            <div style={{ marginTop: "clamp(20px, 3vh, 32px)" }}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(16px, 2.2vw, 20px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px"
              }}>
                Emergence
              </p>
              <p style={{ 
                fontSize: "clamp(11px, 1.4vw, 13px)",
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Mixed Media
              </p>
            </div>
          </div>

          {/* Piece 3 */}
          <div>
            <div style={{ 
              backgroundColor: "#000000",
              overflow: "hidden",
              aspectRatio: "1/1"
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
                  opacity: 0.95
                }}
              />
            </div>
            <div style={{ marginTop: "clamp(20px, 3vh, 32px)" }}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(16px, 2.2vw, 20px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px"
              }}>
                Layers
              </p>
              <p style={{ 
                fontSize: "clamp(11px, 1.4vw, 13px)",
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Digital Composite
              </p>
            </div>
          </div>

        </div>

        {/* Piece 4 - Constrained Width, Centered */}
        <div style={{ 
          maxWidth: "850px",
          margin: "0 auto clamp(60px, 10vh, 100px)"
        }}>
          <div style={{ 
            backgroundColor: "#000000",
            overflow: "hidden"
          }}>
            <Image 
              src="/images/art1.JPEG" 
              alt="Geometric Study"
              width={850}
              height={500}
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                opacity: 0.95
              }}
            />
          </div>
          <div style={{ 
            marginTop: "clamp(20px, 3vh, 32px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "16px"
          }}>
            <div>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "#FAFAF8",
                fontWeight: 300,
                marginBottom: "8px"
              }}>
                Geometric Abstractions
              </p>
              <p style={{ 
                fontSize: "clamp(12px, 1.5vw, 14px)",
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                Algorithmic Process
              </p>
            </div>
            <p style={{ 
              fontSize: "clamp(12px, 1.5vw, 14px)",
              color: "#71706E",
              letterSpacing: "0.05em"
            }}>
              2024
            </p>
          </div>
        </div>

      </div>

      {/* Philosophy Statement */}
      <div style={{ 
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(20px, 3.5vw, 36px)", 
            fontWeight: 300,
            color: "#FAFAF8",
            lineHeight: 1.5,
            letterSpacing: "-0.01em"
          }}>
            Order from chaos
          </p>
          <div style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#71706E",
            margin: "clamp(24px, 4vh, 40px) auto"
          }} />
          <p style={{ 
            fontSize: "clamp(14px, 2vw, 18px)", 
            fontWeight: 300,
            color: "#B8B7B3",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Pattern from randomness. The space between control and surrender.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ 
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"
        }}>
          <Link href="/" style={{ 
            fontSize: "clamp(11px, 1.5vw, 13px)", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderBottom: "1px solid transparent",
            paddingBottom: "4px",
            transition: "all 0.3s ease"
          }}>
            About
          </Link>
        </div>
      </div>

    </div>
  );
}
