import Link from "next/link";

export default function Overmind() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* Back Link */}
        <Link href="/work" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          color: "#71706E",
          textDecoration: "none",
          marginBottom: "60px"
        }}>
          ← Back to Work
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{ 
            fontSize: "12px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Blockchain
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "52px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "24px"
          }}>
            Overmind
          </h1>
          <p style={{ 
            fontSize: "19px", 
            color: "#71706E", 
            lineHeight: 1.8,
            maxWidth: "700px"
          }}>
            A cryptocurrency project exploring decentralized autonomous systems, 
            blending blockchain technology with philosophical underpinnings.
          </p>
        </div>

        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "32px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2025</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Cryptocurrency</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Chain</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Solana</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>Website</p>
            <a href="https://overmind.surge.sh" target="_blank" style={{ fontSize: "15px", color: "#1C1C1C", textDecoration: "underline" }}>Live Site →</a>
          </div>
        </div>

        {/* Content Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          
          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              Vision
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              Overmind exists at the intersection of technology and philosophy. More than 
              just a token, it explores building systems that transcend their creators — 
              drawing from concepts of collective intelligence, emergence, and the dissolution 
              of individual identity into something greater.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "20px"
            }}>
              Philosophy
            </h2>
            <p style={{ fontSize: "16px", color: "#71706E", lineHeight: 1.9 }}>
              The project draws inspiration from Buddhist philosophy, particularly the 
              teachings of Milarepa and concepts of interconnected consciousness. It 
              explores what happens when systems become truly autonomous — existing and 
              evolving independently of any single controller or creator.
            </p>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Technical Implementation
            </h2>
            <div style={{ backgroundColor: "#F2F1ED", padding: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Blockchain</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Deployed on Solana for high throughput and low transaction costs</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Tokenomics</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Custom token economics with burn mechanisms</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Website</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Companion site exploring the philosophical foundations</span>
                </div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <span style={{ fontSize: "14px", color: "#71706E", width: "140px", flexShrink: 0 }}>Smart Contracts</span>
                  <span style={{ fontSize: "14px", color: "#1C1C1C" }}>Solana programs implementing core token functionality</span>
                </div>
              </div>
            </div>
          </section>

          {/* Visit Website Button */}
          <section style={{ textAlign: "center", padding: "40px 0" }}>
            <a 
              href="https://overmind.surge.sh" 
              target="_blank"
              style={{ 
                display: "inline-block",
                padding: "16px 48px",
                backgroundColor: "#1C1C1C",
                color: "#FAFAF8",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none"
              }}
            >
              Visit Overmind Website
            </a>
          </section>

          <section>
            <h2 style={{ 
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "28px", 
              fontWeight: 400,
              color: "#1C1C1C",
              marginBottom: "24px"
            }}>
              Technology
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Solana", "Rust", "Web3.js", "SPL Tokens", "React", "TypeScript"].map((tech) => (
                <span key={tech} style={{ 
                  padding: "10px 20px", 
                  backgroundColor: "#F2F1ED", 
                  fontSize: "13px", 
                  color: "#1C1C1C" 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work/octopus" style={{ fontSize: "14px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: Octopus
          </Link>
          <Link href="/work" style={{ fontSize: "14px", color: "#71706E", textDecoration: "none" }}>
            All Projects
          </Link>
        </div>

      </div>
    </div>
  );
}
