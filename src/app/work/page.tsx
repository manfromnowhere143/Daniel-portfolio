"use client";

import Link from "next/link";
import { Trade69Icon3D, MegaAgentIcon3D, OctopusIcon3D, OvermindIcon3D } from "@/components/WorkIcons";

export default function Work() {
  const projects = [
    { name: "Trade69", href: "/work/trade69", icon: <Trade69Icon3D size={70} /> },
    { name: "MegaAgent", href: "/work/megaagent", icon: <MegaAgentIcon3D size={70} /> },
    { name: "Octopus", href: "/work/octopus", icon: <OctopusIcon3D size={70} /> },
    { name: "Overmind", href: "/work/overmind", icon: <OvermindIcon3D size={70} /> }
  ];

  return (
    <>
      <style>{`
        .work-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .work-item {
          padding: 0;
        }
        .work-icon {
          margin-bottom: 0;
        }
        .work-title {
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 2px;
        }
        
        @media (min-width: 600px) {
          .work-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 56px;
          }
          .work-item {
            padding: 24px;
          }
          .work-icon {
            margin-bottom: 8px;
          }
          .work-title {
            font-size: 18px;
            margin-top: 0;
            margin-bottom: 6px;
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}