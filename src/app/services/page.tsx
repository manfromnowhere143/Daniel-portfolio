"use client";

import Link from "next/link";
import { WebsiteIcon3D, DashboardIcon3D, APIIcon3D, LLMIcon3D } from "@/components/ServiceIcons3D";

export default function Services() {
  const services = [
    { title: "Custom Websites", icon: <WebsiteIcon3D size={220} /> },
    { title: "Dashboards", icon: <DashboardIcon3D size={220} /> },
    { title: "API Development", icon: <APIIcon3D size={220} /> },
    { title: "LLM Middleware", icon: <LLMIcon3D size={220} /> }
  ];

  return (
    <>
      <style>{`
        .services-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .services-item {
          padding: 0;
          margin: 0;
        }
        .services-icon {
          margin-bottom: 0;
          transition: transform 0.3s ease;
        }
        .services-icon svg {
          stroke: #FAFAF8 !important;
          fill: none !important;
          opacity: 1 !important;
        }
        .services-icon svg * {
          stroke: #FAFAF8 !important;
          opacity: 1 !important;
        }
        .services-item:hover .services-icon {
          transform: scale(1.05);
        }
        .services-title {
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
        .services-seeking {
          font-size: 14px;
          margin-top: 48px;
        }
        .services-contact {
          margin-top: 56px;
        }
        
        @media (min-width: 600px) {
          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px 32px;
          }
          .services-item {
            padding: 8px;
          }
          .services-icon {
            margin-bottom: 4px;
          }
          .services-item:hover .services-icon {
            transform: scale(1.08);
          }
          .services-title {
            font-size: 20px;
          }
          .services-seeking {
            font-size: 16px;
            margin-top: clamp(64px, 10vh, 100px);
          }
          .services-contact {
            margin-top: clamp(64px, 10vh, 90px);
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(80px, 12vh, 140px)",
        paddingBottom: "60px",
        paddingLeft: "24px",
        paddingRight: "24px",
        overscrollBehavior: "none"
      }}>

        {/* Services Grid */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <div className="services-grid">
            {services.map((item, i) => (
              <div
                key={i}
                className="services-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "2px",
                  cursor: "default"
                }}
              >
                <div className="services-icon">
                  {item.icon}
                </div>

                <p
                  className="services-title"
                  style={{
                    fontWeight: 200,
                    color: "#FAFAF8",
                    letterSpacing: "0.04em",
                    textAlign: "center"
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Also Seeking Section */}
        <div
          className="services-seeking"
          style={{
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left"
          }}
        >
          <p
            style={{
              fontWeight: 200,
              color: "#FAFAF8",
              lineHeight: 1.9,
              letterSpacing: "0.02em"
            }}
          >
            Also seeking to join a team, find a great mentor, and happy to take the coffee maker position at any data center. My deep interests lie in robotics, computer vision, and LLMs.
          </p>
        </div>

        {/* Contact */}
        <div
          className="services-contact"
          style={{
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left"
          }}
        >
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
    </>
  );
}