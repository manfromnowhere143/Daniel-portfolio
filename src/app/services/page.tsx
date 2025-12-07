import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, and LLM middleware services.",
};

export default function Services() {
  const githubLinkStyle = {
    fontSize: "12px",
    color: "#FAFAF8",
    textDecoration: "none",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    borderBottom: "1px solid #666666",
    paddingBottom: "4px"
  };

  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(42px, 6vw, 58px)",
          fontWeight: 300,
          color: "#FAFAF8",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Services
        </h1>
      </div>

      {/* Services Grid */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 24px clamp(40px, 6vh, 60px)"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          backgroundColor: "#1A1A1A"
        }}>
          {/* Service 1 */}
          <div style={{
            backgroundColor: "#0A0A0A",
            padding: "clamp(40px, 6vw, 60px) clamp(24px, 4vw, 40px)",
            textAlign: "center",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#FAFAF8",
              marginBottom: "32px",
              opacity: 0.3
            }} />
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 300,
              color: "#FAFAF8",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: "16px"
            }}>
              Custom<br />Websites
            </h2>
            <p style={{
              fontSize: "12px",
              color: "#FAFAF8",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              Design • SEO • Development
            </p>
          </div>

          {/* Service 2 */}
          <div style={{
            backgroundColor: "#0A0A0A",
            padding: "clamp(40px, 6vw, 60px) clamp(24px, 4vw, 40px)",
            textAlign: "center",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#FAFAF8",
              marginBottom: "32px",
              opacity: 0.3
            }} />
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 300,
              color: "#FAFAF8",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: "16px"
            }}>
              API<br />Development
            </h2>
            <p style={{
              fontSize: "12px",
              color: "#FAFAF8",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              Backend & Integration
            </p>
          </div>

          {/* Service 3 */}
          <div style={{
            backgroundColor: "#0A0A0A",
            padding: "clamp(40px, 6vw, 60px) clamp(24px, 4vw, 40px)",
            textAlign: "center",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#FAFAF8",
              marginBottom: "32px",
              opacity: 0.3
            }} />
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 300,
              color: "#FAFAF8",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: "16px"
            }}>
              LLM Middleware<br />& SQL Agents
            </h2>
            <p style={{
              fontSize: "12px",
              color: "#FAFAF8",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              AI • SQL Databases • Data
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 5vh, 48px) 24px"
      }}>
        <div style={{ width: "80px", height: "1px", background: "#1C1C1C" }} />
        <div style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          border: "1px solid #2A2A28",
          margin: "0 24px"
        }} />
        <div style={{ width: "80px", height: "1px", background: "#1C1C1C" }} />
      </div>

      {/* Looking to Join */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "clamp(24px, 4vh, 40px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          opacity: 0.5
        }}>
          Also Seeking
        </p>

        <p style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
          marginBottom: "clamp(16px, 3vh, 24px)"
        }}>
          A team. A mentor. A guide.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(16px, 4vw, 32px)",
          flexWrap: "wrap",
          marginTop: "clamp(24px, 4vh, 36px)"
        }}>
          {["Robotics", "Computer Vision", "AI", "LLM"].map((field) => (
            <span
              key={field}
              style={{
                fontSize: "13px",
                color: "#FAFAF8",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "12px 0",
                borderBottom: "1px solid #2A2A28"
              }}
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      {/* The Story Section */}
      <div style={{
        backgroundColor: "#000000",
        marginTop: "clamp(40px, 6vh, 60px)"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "clamp(48px, 8vh, 80px) 24px",
          textAlign: "center"
        }}>
          <div style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#FAFAF8",
            margin: "0 auto clamp(32px, 5vh, 48px)",
            opacity: 0.3
          }} />

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 20px)",
            color: "#FAFAF8",
            lineHeight: 2,
            fontWeight: 300,
            letterSpacing: "0.01em",
            marginBottom: "clamp(20px, 3vh, 32px)"
          }}>
            Everything you see here, I built in the past nine months.
          </p>

          <p style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#FAFAF8",
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: "0.02em",
            opacity: 0.7
          }}>
            My first GitHub commit was March 2025.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 32px)",
          opacity: 0.5
        }}>
          Let&apos;s Talk
        </p>

        <a 
          href="mailto:cogitoergosum143@gmail.com" 
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            display: "inline-block",
            position: "relative",
            paddingBottom: "8px"
          }}
        >
          cogitoergosum143@gmail.com
          <span style={{
            position: "absolute",
            bottom: "0",
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: "#666666"
          }} />
        </a>

        <div style={{ marginTop: "clamp(32px, 5vh, 48px)" }}>
          <a href="https://github.com/manfromnowhere143" target="_blank" rel="noopener noreferrer" style={githubLinkStyle}>
            GitHub
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Link 
            href="/" 
            style={{
              fontSize: "12px",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}
          >
            ← About
          </Link>
        </div>
      </div>

    </div>
  );
}
