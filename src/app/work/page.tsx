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
    <>
      <style>{`
        .work-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
        }
        .work-item {
          padding: 0;
        }
        .work-icon {
          transform: scale(1);
          padding: 0;
          background: none;
          margin-bottom: 4px;
        }
        .work-title {
          font-size: 18px;
          margin-top: 4px;
          margin-bottom: 2px;
        }
        .work-arrow {
          opacity: 1;
        }
        
        @media (min-width: 600px) {
          .work-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 64px;
          }
          .work-item {
            padding: 32px;
          }
          .work-icon {
            transform: scale(1.4);
            padding: 20px;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%);
            border-radius: 50%;
            margin-bottom: 16px;
          }
          .work-title {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 6px;
          }
          .work-arrow {
            opacity: 0.6;
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(80px, 12vh, 140px)",
        paddingBottom: "60px",
        paddingLeft: "24px",
        paddingRight: "24px"
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          <div className="work-grid">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="work-item"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "2px",
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                <div className="work-icon">
                  {project.icon}
                </div>

                <h2
                  className="work-title"
                  style={{
                    fontWeight: 200,
                    color: "#FAFAF8",
                    letterSpacing: "0.03em",
                    textAlign: "center"
                  }}
                >
                  {project.name}
                </h2>
                <span
                  className="work-arrow"
                  style={{
                    fontSize: "12px",
                    color: "#FAFAF8"
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}