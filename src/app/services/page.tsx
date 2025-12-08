import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, dashboards, and LLM middleware services.",
};

export default function Services() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "clamp(40px, 8vh, 80px) 24px clamp(60px, 10vh, 100px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 300,
          color: "#FAFAF8",
          letterSpacing: "0.02em",
          lineHeight: 1.1,
          marginBottom: "clamp(20px, 3vh, 32px)"
        }}>
          Services
        </h1>
        <p style={{
          fontSize: "clamp(15px, 2vw, 17px)",
          color: "#FAFAF8",
          lineHeight: 1.7,
          fontWeight: 300,
          maxWidth: "560px",
          margin: "0 auto"
        }}>
          Building digital solutions with precision and care
        </p>
      </div>

      {/* Services List */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 24px clamp(80px, 12vh, 120px)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(48px, 8vh, 72px)"
        }}>
          {/* Service 1 */}
          <div style={{
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "clamp(24px, 4vw, 40px)"
          }}>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 400,
              color: "#FAFAF8",
              letterSpacing: "0.01em",
              marginBottom: "16px"
            }}>
              Custom Websites
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#FAFAF8",
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              Design, development, and SEO optimization. Clean architecture built for performance and longevity.
            </p>
          </div>

          {/* Service 2 */}
          <div style={{
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "clamp(24px, 4vw, 40px)"
          }}>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 400,
              color: "#FAFAF8",
              letterSpacing: "0.01em",
              marginBottom: "16px"
            }}>
              Dashboards & Control Panels
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#FAFAF8",
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              Custom dashboards for small businesses. Live data visualization, analytics, and operational control in one place.
            </p>
          </div>

          {/* Service 3 */}
          <div style={{
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "clamp(24px, 4vw, 40px)"
          }}>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 400,
              color: "#FAFAF8",
              letterSpacing: "0.01em",
              marginBottom: "16px"
            }}>
              API Development
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#FAFAF8",
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              Backend systems and third-party integrations. Reliable infrastructure that scales with your needs.
            </p>
          </div>

          {/* Service 4 */}
          <div style={{
            borderLeft: "1px solid #2A2A28",
            paddingLeft: "clamp(24px, 4vw, 40px)"
          }}>
            <h2 style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 400,
              color: "#FAFAF8",
              letterSpacing: "0.01em",
              marginBottom: "16px"
            }}>
              LLM Middleware & SQL Agents
            </h2>
            <p style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#FAFAF8",
              lineHeight: 1.7,
              fontWeight: 300
            }}>
              AI-powered database interfaces. Natural language queries, schema-aware generation, and intelligent data access.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "1px",
        height: "60px",
        backgroundColor: "#2A2A28",
        margin: "0 auto"
      }} />

      {/* Also Seeking */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(60px, 10vh, 100px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(32px, 5vh, 48px)"
        }}>
          Also Seeking
        </p>

        <p style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontWeight: 300,
          color: "#FAFAF8",
          lineHeight: 1.5,
          letterSpacing: "0.01em",
          marginBottom: "clamp(40px, 6vh, 56px)"
        }}>
          A team and a mentor
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 48px)",
          flexWrap: "wrap"
        }}>
          {["Robotics", "Computer Vision", "AI", "LLM"].map((field) => (
            <span
              key={field}
              style={{
                fontSize: "12px",
                color: "#FAFAF8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 300
              }}
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div style={{
        borderTop: "1px solid #1A1A1A",
        padding: "clamp(80px, 12vh, 120px) 24px"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "#FAFAF8",
            marginBottom: "clamp(24px, 4vh, 36px)",
            fontWeight: 300
          }}>
            <a 
              href="mailto:cogitoergosum143@gmail.com" 
              style={{
                color: "#FAFAF8",
                textDecoration: "none",
                borderBottom: "1px solid #3A3A38",
                paddingBottom: "4px"
              }}
            >
              cogitoergosum143@gmail.com
            </a>
          </p>

          <p style={{
            fontSize: "clamp(14px, 1.8vw, 15px)",
            color: "#FAFAF8",
            fontWeight: 300
          }}>
            <a 
              href="https://github.com/manfromnowhere143" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                color: "#FAFAF8",
                textDecoration: "none",
                borderBottom: "1px solid #3A3A38",
                paddingBottom: "4px"
              }}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Link 
            href="/" 
            style={{
              fontSize: "11px",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase"
            }}
          >
            About
          </Link>
        </div>
      </div>

    </div>
  );
}
