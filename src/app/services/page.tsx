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
        padding: "clamp(20px, 4vh, 40px) 24px clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
        <h1 style={{
          
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "0.02em",
          lineHeight: 1.1
        }}>
          Services
        </h1>
      </div>

      {/* Services List */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: "24px"
        }}>
          {[
            {
              title: "Custom Websites",
              desc: "Design, development, and SEO optimization. Clean architecture built for performance and longevity."
            },
            {
              title: "Dashboards and Control Panels",
              desc: "Custom dashboards for small businesses. Live data visualization, analytics, and operational control."
            },
            {
              title: "API Development",
              desc: "Backend systems and third-party integrations. Reliable infrastructure that scales with your needs."
            },
            {
              title: "LLM Middleware and SQL Agents",
              desc: "AI-powered database interfaces. Natural language queries, schema-aware generation, and intelligent data access."
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

      {/* Divider */}
      <div style={{
        width: "1px",
        height: "40px",
        backgroundColor: "#2A2A28",
        margin: "clamp(40px, 6vh, 60px) auto"
      }} />

      {/* Also Seeking */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          marginBottom: "clamp(20px, 3vh, 28px)"
        }}>
          Also Seeking
        </p>

        <p style={{
          fontSize: "clamp(15px, 2.5vw, 18px)",
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.5,
          marginBottom: "clamp(24px, 4vh, 32px)"
        }}>
          A team and a mentor
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px"
        }}>
          {["Robotics", "Computer Vision", "AI", "LLM"].map((field) => (
            <span
              key={field}
              style={{
                fontSize: "10px",
                color: "#FAFAF8",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 12px",
                border: "1px solid #2A2A28",
                borderRadius: "2px"
              }}
            >
              {field}
            </span>
          ))}
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
          fontSize: "13px",
          color: "#FAFAF8",
          marginBottom: "16px"
        }}>
          <a 
            href="mailto:cogitoergosum143@gmail.com" 
            style={{
              color: "#FAFAF8",
              textDecoration: "none",
              borderBottom: "1px solid #3A3A38",
              paddingBottom: "2px"
            }}
          >
            cogitoergosum143@gmail.com
          </a>
        </p>

        <p style={{
          fontSize: "12px",
          color: "#FAFAF8"
        }}>
          <a 
            href="https://github.com/manfromnowhere143" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: "#FAFAF8",
              textDecoration: "none",
              borderBottom: "1px solid #3A3A38",
              paddingBottom: "2px"
            }}
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        borderTop: "1px solid #1C1C1C",
        padding: "clamp(40px, 6vh, 60px) 24px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Link 
            href="/" 
            style={{
              fontSize: "10px",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.12em",
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
