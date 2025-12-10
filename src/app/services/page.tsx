import Link from "next/link";
import { Metadata } from "next";
import GeometricDivider from "@/components/GeometricDivider";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, dashboards, and LLM middleware services.",
};

export default function Services() {
  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "clamp(32px, 5vh, 48px) 24px clamp(24px, 4vh, 32px)",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Services
        </h1>
      </div>

      {/* Geometric Divider */}
      <GeometricDivider />

      {/* Services List */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(48px, 7vh, 64px) 24px"
      }}>
        {[
          {
            title: "Custom Websites",
            desc: "Design, development, and SEO optimization. Clean architecture built for performance and longevity."
          },
          {
            title: "Dashboards",
            desc: "Custom dashboards for small businesses. Live data visualization, analytics, and operational control."
          },
          {
            title: "API Development",
            desc: "Backend systems and third-party integrations. Reliable infrastructure that scales with your needs."
          },
          {
            title: "LLM Middleware",
            desc: "AI-powered database interfaces. Natural language queries, schema-aware generation, and intelligent data access."
          }
        ].map((item, i) => (
          <div 
            key={i} 
            style={{ 
              marginBottom: i < 3 ? "clamp(32px, 5vh, 40px)" : 0,
              textAlign: "center"
            }}
          >
            <p style={{ 
              fontSize: "clamp(14px, 2vw, 16px)", 
              fontWeight: 300,
              color: "#FAFAF8",
              marginBottom: "8px",
              letterSpacing: "0.02em"
            }}>
              {item.title}
            </p>
            <p style={{ 
              fontSize: "clamp(12px, 1.5vw, 13px)", 
              color: "#FAFAF8",
              
              lineHeight: 1.7,
              maxWidth: "500px",
              margin: "0 auto",
              fontWeight: 300
            }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Also Seeking Section */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "#FAFAF8",
          
          marginBottom: "clamp(16px, 2vh, 20px)"
        }}>
          Also seeking
        </p>

        <p style={{
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.4,
          marginBottom: "clamp(20px, 3vh, 28px)",
          letterSpacing: "-0.01em"
        }}>
          A team and a mentor
        </p>

        <p style={{
          fontSize: "12px",
          color: "#FAFAF8",
          
          letterSpacing: "0.08em",
          fontWeight: 300
        }}>
          Robotics · Computer Vision · AI · LLM
        </p>
      </div>

      {/* Contact */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "clamp(48px, 8vh, 72px) 24px",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.08em",
          color: "#FAFAF8",
          
          marginBottom: "clamp(16px, 2vh, 20px)",
          fontWeight: 200
        }}>
          Contact
        </p>

        <p style={{
          marginBottom: "12px"
        }}>
          <a 
            href="mailto:cogitoergosum143@gmail.com" 
            style={{
              fontSize: "13px",
              color: "#FAFAF8",
              textDecoration: "none",
              fontWeight: 300,
              letterSpacing: "0.02em"
            }}
          >
            cogitoergosum143@gmail.com
          </a>
        </p>

        <p>
          <a 
            href="https://github.com/manfromnowhere143" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              fontSize: "12px",
              color: "#FAFAF8",
              
              textDecoration: "none",
              fontWeight: 300
            }}
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        padding: "clamp(40px, 6vh, 60px) 24px",
        textAlign: "center"
      }}>
        <Link 
          href="/" 
          style={{
            fontSize: "11px",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.12em",
            opacity: 0.6
          }}
        >
          ← About
        </Link>
      </div>

    </div>
  );
}
