"use client";

import GeometricDivider from "@/components/GeometricDivider";

import Link from "next/link";

export default function Work() {
  const projects = [
    { name: "Trade69", href: "/work/trade69" },
    { name: "MegaAgent", href: "/work/megaagent" },
    { name: "Octopus", href: "/work/octopus" },
    { name: "Overmind", href: "/work/overmind" }
  ];

  return (
    <div style={{ paddingTop: "60px", minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      
      {/* Hero */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        padding: "clamp(20px, 4vh, 40px) 24px clamp(16px, 2vh, 20px)",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "clamp(32px, 5vw, 48px)", 
          fontWeight: 200,
          color: "#FAFAF8",
          letterSpacing: "-0.01em",
          lineHeight: 1.1
        }}>
          Work
        </h1>
      </div>

      {/* Geometric Divider */}
      <GeometricDivider />

      {/* Projects List */}
      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto", 
        padding: "clamp(16px, 3vh, 24px) 24px clamp(80px, 12vh, 120px)"
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(20px, 3vh, 28px)"
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
              <h2 style={{ 
                fontSize: "clamp(20px, 3vw, 26px)", 
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.01em",
                marginBottom: "8px"
              }}>
                {project.name}
              </h2>
              <span style={{ 
                fontSize: "14px", 
                color: "#FAFAF8",
                opacity: 1
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
