import Link from "next/link";
import { Metadata } from "next";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";
import GeometricDivider from "@/components/GeometricDivider";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, dashboards, and LLM middleware services.",
};

export default function Services() {
  const services = [
    { title: "Custom Websites", icon: <WebsiteIcon /> },
    { title: "Dashboards", icon: <DashboardIcon /> },
    { title: "API Development", icon: <APIIcon /> },
    { title: "LLM Middleware", icon: <LLMIcon /> }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0A0A0A",
      paddingTop: "clamp(100px, 15vh, 160px)",
      paddingBottom: "clamp(80px, 12vh, 120px)",
      paddingLeft: "24px",
      paddingRight: "24px"
    }}>

      {/* Services Grid - 2x2 on desktop, stacked on mobile */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(40px, 7vh, 64px) clamp(32px, 6vw, 64px)"
        }}>
          {services.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "clamp(24px, 4vh, 32px)",
                borderRadius: "2px",
                transition: "all 0.4s ease"
              }}
            >
              {/* Icon with subtle glow */}
              <div style={{
                padding: "20px",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                borderRadius: "50%",
                marginBottom: "16px",
                transform: "scale(1.4)"
              }}>
                {item.icon}
              </div>

              <p style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.03em",
                textAlign: "center"
              }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Geometric Divider */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "clamp(64px, 10vh, 96px) auto"
      }}>
        <GeometricDivider />
      </div>

      {/* Also Seeking Section - Centered elegant note */}
      <div style={{
        maxWidth: "520px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 16px)",
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.9,
          letterSpacing: "0.02em"
        }}>
          Also seeking to join a team, find a great mentor, and happy to take the coffee maker position at any data center. My deep interests lie in robotics, computer vision, and LLMs.
        </p>
      </div>

      {/* Contact - Minimal */}
      <div style={{
        maxWidth: "520px",
        margin: "clamp(64px, 10vh, 96px) auto 0",
        textAlign: "center"
      }}>
        <a
          href="mailto:cogitoergosum143@gmail.com"
          style={{
            fontSize: "clamp(12px, 1.5vw, 14px)",
            color: "#FAFAF8",
            textDecoration: "none",
            fontWeight: 200,
            letterSpacing: "0.04em",
            display: "inline-block",
            marginBottom: "16px"
          }}
        >
          cogitoergosum143@gmail.com
        </a>

        <div style={{ marginTop: "24px" }}>
          <Link
            href="/"
            style={{
              fontSize: "11px",
              color: "#FAFAF8",
              textDecoration: "none",
              letterSpacing: "0.12em",
              opacity: 0.7
            }}
          >
            ← About
          </Link>
        </div>
      </div>

    </div>
  );
}