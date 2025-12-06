import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, and LLM middleware services.",
};

export default function Services() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(60px, 12vh, 100px) 24px clamp(80px, 14vh, 120px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(42px, 7vw, 64px)",
          fontWeight: 300,
          color: "#FAFAF8",
          letterSpacing: "-0.02em",
          lineHeight: 1.1
        }}>
          Services
        </h1>
      </div>

      {/* Services Grid */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 24px clamp(80px, 12vh, 120px)"
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
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#2A2A28",
              marginBottom: "32px"
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
              color: "#5A5A58",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              Design & Development
            </p>
          </div>

          {/* Service 2 */}
          <div style={{
            backgroundColor: "#0A0A0A",
            padding: "clamp(40px, 6vw, 60px) clamp(24px, 4vw, 40px)",
            textAlign: "center",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#2A2A28",
              marginBottom: "32px"
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
              color: "#5A5A58",
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
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              width: "1px",
              height: "40px",
              backgroundColor: "#2A2A28",
              marginBottom: "32px"
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
              color: "#5A5A58",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              AI & Data
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vh, 80px) 24px"
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
        padding: "clamp(40px, 8vh, 80px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#4A4A48",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          Also Seeking
        </p>

        <p style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: 300,
          color: "#E6E6E6",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
          marginBottom: "clamp(24px, 4vh, 36px)"
        }}>
          A team. A mentor. A guide.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 48px)",
          flexWrap: "wrap",
          marginTop: "clamp(32px, 5vh, 48px)"
        }}>
          {["Robotics", "Computer Vision", "AI", "LLM"].map((field) => (
            <span
              key={field}
              style={{
                fontSize: "13px",
                color: "#71706E",
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
        marginTop: "clamp(60px, 10vh, 100px)"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "clamp(80px, 14vh, 140px) 24px",
          textAlign: "center"
        }}>
          <div style={{
            width: "1px",
            height: "60px",
            backgroundColor: "#2A2A28",
            margin: "0 auto clamp(48px, 8vh, 72px)"
          }} />

          <p style={{
            fontSize: "clamp(17px, 2.2vw, 20px)",
            color: "#999999",
            lineHeight: 2,
            fontWeight: 300,
            letterSpacing: "0.01em",
            marginBottom: "clamp(32px, 5vh, 48px)"
          }}>
            Everything you see here, I built in the past nine months.
          </p>

          <p style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#5A5A58",
            lineHeight: 1.8,
            fontWeight: 300,
            letterSpacing: "0.02em"
          }}>
            My first GitHub commit was March 2025.
          </p>
        </div>
      </div>

      {/* Contact */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(100px, 16vh, 160px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#3A3A38",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          Let's Talk
        </p>

        <a href="mailto:cogitoergosum143@gmail.com" style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(22px, 3.5vw, 32px)",
          color: "#FAFAF8",
          textDecoration: "none",
          letterSpacing: "-0.01em",
          position: "relative",
          paddingBottom: "8px"
        }}>
          <span style={{
            position: "relative"
          }}>
            cogitoergosum143@gmail.com
            <span style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              right: 0,
              height: "1px",
              backgroundColor: "#333333"
            }} />
          </span>
        </a>

        <div style={{
          marginTop: "clamp(48px, 8vh, 72px)"
        }}>
          <a
            href="https://github.com/manfromnowhere143"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#5A5A58",
              textDecoration: "none",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderBottom: "1px solid #2A2A28",
              paddingBottom: "4px"
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(60px, 10vh, 80px) 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Link href="/" style={{
            fontSize: "12px",
            color: "#4A4A48",
            textDecoration: "none",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}>
            ← About
          </Link>
        </div>
      </div>

    </div>
  );
}