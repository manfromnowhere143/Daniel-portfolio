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
          color: "#71706E",
          marginBottom: "clamp(16px, 2vh, 24px)"
        }}>
          Blockchain · Philosophy
        </p>
        <h1 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(40px, 6vw, 72px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          Overmind
        </h1>
        <p style={{ 
          fontSize: "clamp(15px, 2vw, 18px)", 
          color: "#B8B7B3", 
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
          margin: "0 auto clamp(50px, 8vh, 80px)",
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

        {/* Stats Bar */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: "clamp(20px, 4vw, 40px)",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          {[
            { value: "Solana", label: "Blockchain" },
            { value: "SPL", label: "Token Standard" },
            { value: "Rust", label: "Smart Contracts" },
            { value: "Live", label: "Status" },
          ].map((stat, i) => (
            <div key={i}>
              <p style={{ 
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "clamp(24px, 4vw, 32px)", 
                fontWeight: 300,
                color: "#FAFAF8",
                marginBottom: "8px"
              }}>
                {stat.value}
              </p>
              <p style={{ 
                fontSize: "12px", 
                color: "#71706E",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "clamp(60px, 10vh, 100px) 24px"
      }}>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(20px, 3vw, 28px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.6,
          marginBottom: "24px"
        }}>
          More than a token. An exploration of systems that transcend their creators.
        </p>
        <p style={{ 
          fontSize: "clamp(14px, 2vw, 16px)", 
          color: "#71706E", 
          lineHeight: 1.8 
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
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{
          width: "60px",
          height: "1px",
          backgroundColor: "#1C1C1C",
          margin: "0 auto clamp(32px, 5vh, 48px)"
        }} />
        <h2 style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(28px, 4vw, 40px)", 
          fontWeight: 300,
          color: "#FAFAF8",
          marginBottom: "clamp(40px, 6vh, 60px)",
          textAlign: "center",
          letterSpacing: "-0.01em"
        }}>
          Philosophy
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            {
              title: "Milarepa",
              desc: "Inspired by the Tibetan Buddhist master. Persistence through suffering. Transformation through discipline. The dissolution of ego into something beyond the individual self."
            },
            {
              title: "Collective Intelligence",
              desc: "What happens when systems become truly autonomous? When they exist and evolve independently of any single controller or creator? Overmind explores these questions through code."
            },
            {
              title: "Emergence",
              desc: "Complex behaviors arising from simple rules. Decentralized consensus creating order without central authority. The whole becoming greater than the sum of its parts."
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "32px",
              backgroundColor: "#0F0F0F",
              borderLeft: "2px solid #1C1C1C"
            }}>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "16px",
                letterSpacing: "0.01em"
              }}>
                {item.title}
              </h3>
              <p style={{ 
                fontSize: "15px", 
                color: "#71706E",
                lineHeight: 1.7
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Section */}
      <div style={{ 
        backgroundColor: "#000000",
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#1C1C1C",
            margin: "0 auto clamp(32px, 5vh, 48px)"
          }} />
          <h2 style={{ 
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(28px, 4vw, 40px)", 
            fontWeight: 300,
            color: "#FAFAF8",
            marginBottom: "clamp(40px, 6vh, 60px)",
            textAlign: "center",
            letterSpacing: "-0.01em"
          }}>
            Technical Implementation
          </h2>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
            gap: "24px",
            marginBottom: "clamp(60px, 10vh, 80px)"
          }}>
            {[
              { title: "Blockchain", desc: "Solana for high throughput and low costs" },
              { title: "Token", desc: "SPL Token standard implementation" },
              { title: "Contracts", desc: "Rust-based smart contracts" },
              { title: "Tokenomics", desc: "Custom burn mechanisms" },
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: "28px",
                backgroundColor: "#0A0A0A",
                border: "1px solid #1C1C1C"
              }}>
                <p style={{ 
                  fontSize: "12px", 
                  letterSpacing: "0.15em", 
                  textTransform: "uppercase", 
                  color: "#71706E", 
                  marginBottom: "12px"
                }}>
                  {item.title}
                </p>
                <p style={{ 
                  fontSize: "15px", 
                  color: "#B8B7B3", 
                  lineHeight: 1.7,
                  fontWeight: 300
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Visit Button */}
          <div style={{ textAlign: "center", marginBottom: "clamp(60px, 10vh, 80px)" }}>
            <a 
              href="https://overmind.surge.sh" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: "inline-block",
                padding: "18px 56px",
                backgroundColor: "#FAFAF8",
                color: "#0A0A0A",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.3s"
              }}
            >
              Visit Overmind
            </a>
          </div>

          {/* Tech Stack */}
          <div style={{ textAlign: "center" }}>
            <p style={{ 
              fontSize: "11px", 
              letterSpacing: "0.2em", 
              textTransform: "uppercase", 
              color: "#4D4D4D", 
              marginBottom: "clamp(32px, 5vh, 40px)"
            }}>
              Technology Stack
            </p>
            <p style={{ 
              fontSize: "15px", 
              color: "#71706E",
              lineHeight: 1.8,
              letterSpacing: "0.01em"
            }}>
              Solana · Rust · SPL Tokens · Web3.js · React · TypeScript
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div style={{ 
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(80px, 12vh, 120px) 24px",
        textAlign: "center"
      }}>
        <p style={{ 
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(20px, 3.5vw, 32px)", 
          fontStyle: "italic",
          fontWeight: 300,
          color: "#E6E6E6",
          lineHeight: 1.6,
          marginBottom: "clamp(24px, 4vh, 32px)",
          letterSpacing: "0.01em"
        }}>
          "The mind that is not baffled is not employed.<br/>The impeded stream is the one that sings."
        </p>
        <p style={{ 
          fontSize: "14px", 
          color: "#666666", 
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}>
          Wendell Berry
        </p>
      </div>

      {/* Navigation */}
      <div style={{ 
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <div style={{ 
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <Link href="/work/octopus" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            ← Previous: Octopus
          </Link>
          <Link href="/work" style={{ 
            fontSize: "13px", 
            color: "#71706E", 
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            All Projects
          </Link>
        </div>
      </div>

    </div>
  );
}
