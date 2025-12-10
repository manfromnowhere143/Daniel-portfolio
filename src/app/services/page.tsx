import Link from "next/link";
import { Metadata } from "next";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, dashboards, and LLM middleware services.",
};

export default function Services() {
  const services = [
    {
      title: "Custom Websites",
      desc: "Design, development, and SEO optimization. Clean architecture built for performance and longevity.",
      icon: <WebsiteIcon />
    },
    {
      title: "Dashboards",
      desc: "Custom dashboards for small businesses. Live data visualization, analytics, and operational control.",
      icon: <DashboardIcon />
    },
    {
      title: "API Development",
      desc: "Backend systems and third-party integrations. Reliable infrastructure that scales with your needs.",
      icon: <APIIcon />
    },
    {
      title: "LLM Middleware",
      desc: "AI-powered database interfaces. Natural language queries, schema-aware generation, and intelligent data access.",
      icon: <LLMIcon />
    }
  ];

  return (
    <div style={{ paddingTop: "40px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>

      {/* Hero */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "clamp(20px, 3vh, 32px) 24px clamp(40px, 6vh, 60px)",
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

      {/* Services List */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "0 24px clamp(48px, 7vh, 64px)"
      }}>
        {services.map((item, i) => (
          <div 
            key={i} 
            style={{ 
              marginBottom: i < 3 ? "clamp(40px, 6vh, 52px)" : 0,
              textAlign: "center"
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
              {item.icon}
            </div>
            
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
            letterSpacing: "0.12em"
          }}
        >
          ← About
        </Link>
      </div>

    </div>
  );
}
