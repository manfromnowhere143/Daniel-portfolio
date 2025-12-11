"use client";

import Link from "next/link";
import { Trade69Icon, MegaAgentIcon, OctopusIcon, OvermindIcon } from "@/components/WorkIcons";

export default function Work() {
  const projects = [
    { name: "Trade69", href: "/work/trade69", icon: <Trade69Icon /> },
    { name: "MegaAgent", href: "/work/megaagent", icon: <MegaAgentIcon /> },
    { name: "Octopus", href: "/work/octopus", icon: <OctopusIcon /> },
    { name: "Overmind", href: "/work/overmind", icon: <OvermindIcon /> }
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
      {/* Projects Grid - 2x2 on desktop, stacked on mobile */}
      <div style={{
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(40px, 7vh, 64px) clamp(32px, 6vw, 64px)"
        }}>
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "clamp(24px, 4vh, 32px)",
                borderRadius: "2px",
                transition: "opacity 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {/* Icon with subtle glow */}
              <div style={{
                padding: "20px",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                borderRadius: "50%",
                marginBottom: "16px",
                transform: "scale(1.4)"
              }}>
                {project.icon}
              </div>

              <h2 style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.03em",
                marginTop: "0",
                marginBottom: "6px",
                textAlign: "center"
              }}>
                {project.name}
              </h2>
              <span style={{
                fontSize: "12px",
                color: "#FAFAF8",
                opacity: 0.6
              }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}