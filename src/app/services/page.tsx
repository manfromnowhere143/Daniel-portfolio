"use client";

import Link from "next/link";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

export default function Services() {
  const services = [
    { title: "Custom Websites", icon: <WebsiteIcon /> },
    { title: "Dashboards", icon: <DashboardIcon /> },
    { title: "API Development", icon: <APIIcon /> },
    { title: "LLM Middleware", icon: <LLMIcon /> }
  ];

  return (
    <>
      <style>{`
        .services-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .services-item {
          padding: 0;
        }
        .services-icon {
          transform: scale(1.2);
          padding: 16px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%);
          border-radius: 50%;
          margin-bottom: 12px;
          transition: transform 0.3s ease, background 0.3s ease;
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
          transform: scale(1.3);
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%);
        }
        .services-title {
          font-size: 15px;
        }
        .services-seeking {
          font-size: 14px;
          margin-top: 80px;
        }
        .services-contact {
          margin-top: 56px;
        }
        
        @media (min-width: 600px) {
          .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 56px 80px;
          }
          .services-item {
            padding: 32px;
          }
          .services-icon {
            transform: scale(1.5);
            padding: 24px;
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%);
            margin-bottom: 20px;
          }
          .services-item:hover .services-icon {
            transform: scale(1.65);
          }
          .services-title {
            font-size: 17px;
          }
          .services-seeking {
            font-size: 16px;
            margin-top: clamp(100px, 14vh, 140px);
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
          maxWidth: "700px",
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