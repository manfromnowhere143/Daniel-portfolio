import Link from "next/link";
import Image from "next/image";

export default function Overmind() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "20px"
          }}>
            Blockchain · Philosophy
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(40px, 10vw, 72px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            Overmind
          </h1>
          <p style={{ 
            fontSize: "17px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "540px",
            margin: "0 auto"
          }}>
            A cryptocurrency exploring decentralized autonomous systems, 
            blending blockchain technology with Buddhist philosophy.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ 
        maxWidth: "450px", 
        margin: "-30px auto 0",
        padding: "0 24px"
      }}>
        <div style={{ 
          boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "#1C1C1C"
        }}>
          <Image 
            src="/images/twinkle.png" 
            alt="Overmind"
            width={450}
            height={300}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px 0" }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "40px",
          paddingBottom: "60px",
          borderBottom: "1px solid #E0DED6"
        }}>
          {[
            { value: "Solana", label: "Blockchain" },
            { value: "SPL", label: "Token Standard" },
            { value: "Rust", label: "Smart Contracts" },
            { value: "Live", label: "Status" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "28px", 
                color: "#1C1C1C",
                marginBottom: "8px"
              }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ maxWidth: "450px" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            color: "#1C1C1C",
            lineHeight: 1.6,
            marginBottom: "24px"
          }}>
            More than a token. An exploration of systems that transcend their creators.
          </p>
          <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.9 }}>
            Overmind exists at the intersection of technology and philosophy. 
            Drawing from concepts of collective intelligence, emergence, and the 
            dissolution of individual identity into something greater.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div style={{ backgroundColor: "#F2F1ED", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "11px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "12px"
          }}>
            Foundation
          </p>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "32px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "40px"
          }}>
            Philosophy
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ 
              padding: "32px",
              backgroundColor: "#FAFAF8",
              borderLeft: "2px solid #1C1C1C"
            }}>
              <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
                Milarepa
              </h3>
              <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
                Inspired by the Tibetan Buddhist master. Persistence through suffering. 
                Transformation through discipline. The dissolution of ego into 
                something beyond the individual self.
              </p>
            </div>

            <div style={{ 
              padding: "32px",
              backgroundColor: "#FAFAF8",
              borderLeft: "2px solid #1C1C1C"
            }}>
              <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
                Collective Intelligence
              </h3>
              <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
                What happens when systems become truly autonomous? When they exist 
                and evolve independently of any single controller or creator? 
                Overmind explores these questions through code.
              </p>
            </div>

            <div style={{ 
              padding: "32px",
              backgroundColor: "#FAFAF8",
              borderLeft: "2px solid #1C1C1C"
            }}>
              <h3 style={{ fontSize: "18px", color: "#1C1C1C", marginBottom: "12px" }}>
                Emergence
              </h3>
              <p style={{ fontSize: "15px", color: "#71706E", lineHeight: 1.8 }}>
                Complex behaviors arising from simple rules. Decentralized consensus 
                creating order without central authority. The whole becoming greater 
                than the sum of its parts.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Technical Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#71706E",
          marginBottom: "12px"
        }}>
          Implementation
        </p>
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "32px", 
          fontWeight: 400,
          color: "#1C1C1C",
          marginBottom: "40px"
        }}>
          Technical
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "16px",
          marginBottom: "60px"
        }}>
          {[
            { title: "Blockchain", desc: "Solana for high throughput and low costs" },
            { title: "Token", desc: "SPL Token standard implementation" },
            { title: "Contracts", desc: "Rust-based smart contracts" },
            { title: "Tokenomics", desc: "Custom burn mechanisms" },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "24px",
              backgroundColor: "#F2F1ED"
            }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#71706E", marginBottom: "8px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "14px", color: "#1C1C1C", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visit Button */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <a 
            href="https://overmind.surge.sh" 
            target="_blank"
            style={{ 
              display: "inline-block",
              padding: "16px 48px",
              backgroundColor: "#1C1C1C",
              color: "#FAFAF8",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none"
            }}
          >
            Visit Overmind
          </a>
        </div>

        {/* Tech Stack */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#71706E", marginBottom: "24px" }}>
            Technology Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["Solana", "Rust", "SPL Tokens", "Web3.js", "React", "TypeScript"].map((tech) => (
              <span key={tech} style={{ 
                padding: "12px 24px", 
                border: "1px solid #E0DED6",
                fontSize: "13px", 
                color: "#1C1C1C"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div style={{ 
        backgroundColor: "#1C1C1C",
        padding: "80px 24px"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "24px", 
            fontStyle: "italic",
            color: "#FAFAF8",
            lineHeight: 1.6
          }}>
            "The mind that is not baffled is not employed. The impeded stream is the one that sings."
          </p>
          <p style={{ fontSize: "13px", color: "#71706E", marginTop: "20px" }}>
            — Wendell Berry
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingTop: "32px",
          borderTop: "1px solid #E0DED6"
        }}>
          <Link href="/work/octopus" style={{ fontSize: "13px", color: "#1C1C1C", textDecoration: "none" }}>
            ← Previous: Octopus
          </Link>
          <Link href="/work" style={{ fontSize: "13px", color: "#71706E", textDecoration: "none" }}>
            All Projects
          </Link>
        </div>
      </div>

    </div>
  );
}
