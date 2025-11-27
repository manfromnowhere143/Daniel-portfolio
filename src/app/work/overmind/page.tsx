import Link from "next/link";

export default function Overmind() {
  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", backgroundColor: "#FAFAF8" }}>
      
      {/* Hero Section */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#1C1C1C",
        padding: "60px 24px"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ 
            fontSize: "10px", 
            letterSpacing: "0.3em", 
            textTransform: "uppercase", 
            color: "#71706E",
            marginBottom: "16px"
          }}>
            Blockchain
          </p>
          <h1 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(36px, 10vw, 64px)", 
            fontWeight: 400,
            color: "#FAFAF8",
            marginBottom: "24px",
            lineHeight: 1.1
          }}>
            Overmind
          </h1>
          <p style={{ 
            fontSize: "16px", 
            color: "#A0A0A0", 
            lineHeight: 1.8,
            maxWidth: "500px"
          }}>
            A cryptocurrency project exploring decentralized autonomous systems, 
            blending blockchain technology with philosophical underpinnings.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Meta Info */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
          gap: "24px",
          padding: "32px 0",
          borderTop: "1px solid #E0DED6",
          borderBottom: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Year</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>2025</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Type</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Cryptocurrency</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Chain</p>
            <p style={{ fontSize: "15px", color: "#1C1C1C" }}>Solana</p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>Website</p>
            <a href="https://overmind.surge.sh" target="_blank" style={{ fontSize: "15px", color: "#1C1C1C", textDecoration: "underline" }}>Live →</a>
          </div>
        </div>

        {/* Vision & Philosophy */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          gap: "40px",
          marginBottom: "60px"
        }}>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              Vision
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              Overmind exists at the intersection of technology and philosophy. More than 
              just a token, it explores building systems that transcend their creators. 
              Drawing from concepts of collective intelligence, emergence, and the dissolution 
              of individual identity into something greater.
            </p>
          </div>
          <div>
            <h2 style={{ 
              fontSize: "12px", 
              fontWeight: 400,
              color: "#71706E",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "16px"
            }}>
              Philosophy
            </h2>
            <p style={{ fontSize: "15px", color: "#1C1C1C", lineHeight: 1.9 }}>
              Inspired by Buddhist philosophy, particularly the teachings of Milarepa. 
              Interconnected consciousness. What happens when systems become truly autonomous. 
              Existing and evolving independently of any single controller or creator.
            </p>
          </div>
        </div>

        {/* Visit Button */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <a 
            href="https://overmind.surge.sh" 
            target="_blank"
            style={{ 
              display: "inline-block",
              padding: "14px 40px",
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

        {/* Architecture */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "28px", 
            fontWeight: 400,
            color: "#1C1C1C",
            marginBottom: "12px"
          }}>
            Technical
          </h2>
        </div>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          backgroundColor: "#E0DED6",
          border: "1px solid #E0DED6",
          marginBottom: "60px"
        }}>
          {[
            { title: "Blockchain", desc: "Solana" },
            { title: "Tokenomics", desc: "Burn Mechanics" },
            { title: "Website", desc: "Philosophy" },
            { title: "Contracts", desc: "SPL Token" },
          ].map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#FAFAF8",
              padding: "24px 16px",
              textAlign: "center"
            }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#71706E", marginBottom: "6px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "13px", color: "#1C1C1C" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#71706E", marginBottom: "20px" }}>
            Built With
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {["Solana", "Rust", "Web3.js", "SPL Tokens", "React", "TypeScript"].map((tech) => (
              <span key={tech} style={{ 
                padding: "10px 18px", 
                border: "1px solid #E0DED6",
                fontSize: "12px", 
                color: "#1C1C1C"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          marginTop: "80px",
          paddingTop: "24px",
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
