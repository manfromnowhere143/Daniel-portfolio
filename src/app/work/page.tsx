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
    <div style={{ paddingTop: "40px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero */}
      <div style={{ 
        maxWidth: "900px", 
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
          Work
        </h1>
      </div>

      {/* Projects List */}
      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto", 
        padding: "0 24px clamp(80px, 12vh, 120px)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(32px, 5vh, 44px)"
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
