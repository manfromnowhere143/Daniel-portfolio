import Link from "next/link";
import Image from "next/image";

export default function Overmind() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
        <p style={{ 
          fontSize: "11px", 
          letterSpacing: "0.3em", 
          textTransform: "uppercase", 
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 24px)"
        }}>
          Blockchain · Philosophy
        </p>
        <h1 style={{ 
          
          fontSize: "clamp(32px, 5vw, 52px)", 
          fontWeight: 200,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          Overmind
        </h1>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 18px)", 
          color: "#FAFAF8", 
          lineHeight: 1.7,
          maxWidth: "700px",
          margin: "0 auto clamp(40px, 6vh, 60px)",
          fontWeight: 300
        }}>
          A cryptocurrency exploring decentralized autonomous systems, 
          blending blockchain technology with Buddhist philosophy.
        </p>

        {/* Hero Image */}
        <div style={{ 
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 30px 80px rgba(255,255,255,0.08)",
          border: "1px solid #1C1C1C",
          borderRadius: "2px",
          overflow: "hidden",
          backgroundColor: "#FAFAF8"
        }}>
          <Image 
            src="/images/twinkle.png" 
            alt="Overmind"
            width={500}
            height={333}
            priority
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block"
            }}
          />
        </div>
      </div>

      {/* Overview */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 200,
          marginBottom: "20px"
        }}>
          More than a token. An exploration of systems that transcend their creators.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#FAFAF8", 
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          Overmind exists at the intersection of technology and philosophy. 
          Drawing from concepts of collective intelligence, emergence, and the 
          dissolution of individual identity into something greater.
        </p>
      </div>

      {/* Philosophy Section */}
      <div style={{ 
        maxWidth: "1000px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(24px, 4vh, 32px)",
          textAlign: "center"
        }}>
          Philosophy
        </p>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "24px"
        }}>
          {[
            {
              title: "Milarepa",
              desc: "Inspired by the Tibetan Buddhist master. Persistence through suffering. Transformation through discipline."
            },
            {
              title: "Collective Intelligence",
              desc: "Systems that exist and evolve independently. Autonomy beyond any single controller or creator."
            },
            {
              title: "Emergence",
              desc: "Complex behaviors from simple rules. Decentralized consensus creating order without central authority."
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              borderLeft: "1px solid #2A2A28",
              paddingLeft: "20px"
            }}>
              <p style={{ 
                fontSize: "13px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "8px"
              }}>
                {item.title}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#FAFAF8",
                lineHeight: 1.6
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Section */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          Implementation
        </p>

        <div style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "clamp(40px, 6vh, 56px)"
        }}>
          {[
            "Solana", "SPL Token", "Rust", "Custom Tokenomics"
          ].map((item, i) => (
            <span key={i} style={{ 
              fontSize: "12px",
              color: "#FAFAF8",
              padding: "8px 16px",
              border: "1px solid #2A2A28",
              borderRadius: "2px"
            }}>
              {item}
            </span>
          ))}
        </div>

        {/* Visit Button */}
        <a 
          href="https://overmind.surge.sh" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: "inline-block",
            padding: "14px 40px",
            backgroundColor: "#FAFAF8",
            color: "#0A0A0A",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none"
          }}
        >
          Visit Overmind
        </a>
      </div>

      {/* Quote Section */}
      <div style={{ 
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{ 
          
          fontSize: "13px", 
          
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.7,
          marginBottom: "clamp(16px, 3vh, 24px)",
          letterSpacing: "0.15em"
        }}>
          "Second star to the right, and straight on till morning."
        </p>
        <p style={{ 
          fontSize: "11px", 
          color: "#FAFAF8", 
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}>
          Peter Pan
        </p>
      </div>

      {/* Technology Stack */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 3vh, 24px)"
        }}>
          Stack
        </p>
        <p style={{ 
          fontSize: "12px", 
          color: "#FAFAF8",
          lineHeight: 2,
          letterSpacing: "0.02em"
        }}>
          Solana · Rust · SPL Tokens · Web3.js · React · TypeScript
        </p>
      </div>

      {/* Navigation */}
      <div style={{ 
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{ 
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <Link href="/work/octopus" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Octopus
          </Link>
          <Link href="/work" style={{ 
            fontSize: "12px", 
            color: "#FAFAF8", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            All Work
          </Link>
        </div>
      </div>

    </div>
  );
}
