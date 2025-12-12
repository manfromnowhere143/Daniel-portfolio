"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WebsiteIcon3D, DashboardIcon3D, APIIcon3D, LLMIcon3D } from "@/components/ServiceIcons3D";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    { title: "Custom Websites", key: "website" },
    { title: "Dashboards", key: "dashboard" },
    { title: "API Development", key: "api" },
    { title: "LLM Middleware", key: "llm" }
  ];

  const renderIcon = (key: string, size: number, forceAnimate: boolean = false) => {
    const props = { size, forceAnimate };
    switch (key) {
      case "website": return <WebsiteIcon3D {...props} />;
      case "dashboard": return <DashboardIcon3D {...props} />;
      case "api": return <APIIcon3D {...props} />;
      case "llm": return <LLMIcon3D {...props} />;
      default: return null;
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      setExpandedIndex(index);
    }
  };

  const closeExpanded = () => {
    setExpandedIndex(null);
  };

  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          max-width: 320px;
          margin: 0 auto;
        }
        .services-item {
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .services-item:active {
          transform: scale(0.95);
          background: rgba(255,255,255,0.03);
        }
        .services-icon {
          margin-bottom: 10px;
        }
        .services-title {
          font-size: 12px;
          margin: 0;
          padding: 0;
        }
        .services-seeking {
          font-size: 14px;
          margin-top: 48px;
        }
        .services-contact {
          margin-top: 48px;
        }

        /* Expanded overlay - mobile only */
        .expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .expanded-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .expanded-icon {
          transform: scale(0.7);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .expanded-overlay.active .expanded-icon {
          transform: scale(1);
        }
        .expanded-title {
          margin-top: 20px;
          font-size: 20px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.08em;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.2s;
        }
        .expanded-overlay.active .expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .expanded-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAFAF8;
          opacity: 0.5;
          font-size: 28px;
          font-weight: 200;
          cursor: pointer;
          transition: opacity 0.2s;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .expanded-tap-hint {
          position: absolute;
          bottom: 50px;
          font-size: 10px;
          color: #FAFAF8;
          opacity: 0.3;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        
        @media (min-width: 600px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 56px;
            max-width: 760px;
          }
          .services-item {
            padding: 20px;
            cursor: default;
            background: transparent;
            border: none;
          }
          .services-item:active {
            transform: none;
            background: transparent;
          }
          .services-item:hover .services-icon {
            transform: scale(1.04);
          }
          .services-icon {
            margin-bottom: 14px;
            transition: transform 0.3s ease;
          }
          .services-title {
            font-size: 17px;
          }
          .services-seeking {
            font-size: 16px;
            margin-top: clamp(64px, 10vh, 100px);
          }
          .services-contact {
            margin-top: clamp(64px, 10vh, 90px);
          }
          .expanded-overlay {
            display: none !important;
          }
        }
      `}</style>

      <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        paddingTop: "clamp(80px, 12vh, 140px)",
        paddingBottom: "60px",
        paddingLeft: "20px",
        paddingRight: "20px",
        overscrollBehavior: "none"
      }}>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((item, i) => (
            <div
              key={i}
              className="services-item"
              onClick={() => handleClick(i)}
            >
              <div className="services-icon">
                {renderIcon(item.key, isMobile ? 110 : 200)}
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

        {/* Expanded Overlay - Mobile Only */}
        <div
          className={`expanded-overlay ${expandedIndex !== null ? 'active' : ''}`}
          onClick={closeExpanded}
        >
          <div className="expanded-close">×</div>
          {expandedIndex !== null && (
            <>
              <div className="expanded-icon">
                {renderIcon(services[expandedIndex].key, 300, true)}
              </div>
              <p className="expanded-title">{services[expandedIndex].title}</p>
            </>
          )}
          <p className="expanded-tap-hint">tap anywhere to close</p>
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