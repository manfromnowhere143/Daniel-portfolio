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
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: "clamp(80px, 12vh, 140px)",
      paddingBottom: "60px",
      paddingLeft: "24px",
      paddingRight: "24px"
    }}>
      {/* Projects List */}
      <div style={{
        maxWidth: "600px",
        width: "100%"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(36px, 6vh, 48px)"
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
                transition: "opacity 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {/* Icon */}
              <div>
                {project.icon}
              </div>

              <h2 style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginTop: "4px",
                marginBottom: "2px"
              }}>
                {project.name}
              </h2>
              <span style={{
                fontSize: "12px",
                color: "#FAFAF8"
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