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
    {
      title: "Web Applications",
      key: "website",
      description: "Full-stack applications with modern frameworks. SEO optimization, responsive design, authentication, databases, and deployment infrastructure."
    },
    {
      title: "Dashboards",
      key: "dashboard",
      description: "Real-time data visualization and monitoring interfaces. Custom analytics, interactive charts, and live data streams for informed decision-making."
    },
    {
      title: "API Development",
      key: "api",
      description: "RESTful and GraphQL APIs with robust architecture. Authentication, rate limiting, documentation, and seamless third-party integrations."
    },
    {
      title: "LLM Middleware",
      key: "llm",
      description: "Custom AI integrations and agent systems. Prompt engineering, context management, tool orchestration, and multi-model pipelines."
    }
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
    setExpandedIndex(index);
  };

  const closeExpanded = () => {
    setExpandedIndex(null);
  };

  const iconSize = isMobile ? 70 : 100;

  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 340px;
          margin: 0 auto;
        }
        
        .services-item {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 140px;
          height: 140px;
          margin: 0 auto;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .services-item:active {
          transform: scale(0.95);
        }
        
        /* Website - Soft indigo/blue */
        .services-item.website {
          background: linear-gradient(145deg, rgba(55, 48, 107, 0.9), rgba(38, 32, 78, 0.95));
          box-shadow: 0 4px 20px rgba(55, 48, 107, 0.4);
          border: 1px solid rgba(165, 180, 252, 0.15);
        }
        
        /* Dashboard - Soft rose/pink */
        .services-item.dashboard {
          background: linear-gradient(145deg, rgba(112, 45, 75, 0.9), rgba(82, 30, 55, 0.95));
          box-shadow: 0 4px 20px rgba(112, 45, 75, 0.4);
          border: 1px solid rgba(251, 182, 206, 0.15);
        }
        
        /* API - Soft mint/green */
        .services-item.api {
          background: linear-gradient(145deg, rgba(32, 90, 70, 0.9), rgba(22, 65, 52, 0.95));
          box-shadow: 0 4px 20px rgba(32, 90, 70, 0.4);
          border: 1px solid rgba(134, 239, 172, 0.15);
        }
        
        /* LLM - Soft coral/orange */
        .services-item.llm {
          background: linear-gradient(145deg, rgba(124, 58, 45, 0.9), rgba(92, 40, 30, 0.95));
          box-shadow: 0 4px 20px rgba(124, 58, 45, 0.4);
          border: 1px solid rgba(253, 186, 140, 0.15);
        }

        .services-seeking {
          font-size: 14px;
          margin-top: 48px;
        }
        .services-contact {
          margin-top: 48px;
        }

        /* Expanded overlay */
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
          padding: 40px 24px;
        }
        .expanded-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 400px;
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
          text-align: center;
          width: 100%;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.15s;
        }
        .expanded-overlay.active .expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .expanded-desc {
          margin-top: 16px;
          font-size: 13px;
          font-weight: 300;
          color: #FAFAF8;
          line-height: 1.9;
          text-align: left;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s ease 0.25s;
          padding: 0 16px;
        }
        .expanded-overlay.active .expanded-desc {
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
            gap: 28px;
            max-width: 500px;
          }
          
          .services-item {
            width: 200px;
            height: 200px;
            border-radius: 32px;
          }
          
          .services-item:hover {
            transform: scale(1.05);
          }
          
          .services-item.website:hover {
            box-shadow: 0 8px 32px rgba(55, 48, 107, 0.6);
          }
          
          .services-item.dashboard:hover {
            box-shadow: 0 8px 32px rgba(112, 45, 75, 0.6);
          }
          
          .services-item.api:hover {
            box-shadow: 0 8px 32px rgba(32, 90, 70, 0.6);
          }
          
          .services-item.llm:hover {
            box-shadow: 0 8px 32px rgba(124, 58, 45, 0.6);
          }

          .services-seeking {
            font-size: 16px;
            margin-top: clamp(64px, 10vh, 100px);
          }
          .services-contact {
            margin-top: clamp(64px, 10vh, 90px);
          }
          .expanded-content {
            max-width: 500px;
          }
          .expanded-title {
            font-size: 24px;
          }
          .expanded-desc {
            font-size: 15px;
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
              className={`services-item ${item.key}`}
              onClick={() => handleClick(i)}
            >
              {renderIcon(item.key, iconSize)}
            </div>
          ))}
        </div>

        {/* Expanded Overlay */}
        <div
          className={`expanded-overlay ${expandedIndex !== null ? 'active' : ''}`}
          onClick={closeExpanded}
        >
          <div className="expanded-close">×</div>
          {expandedIndex !== null && (
            <div className="expanded-content" onClick={(e) => e.stopPropagation()}>
              <div className="expanded-icon" key={`expanded-${expandedIndex}`}>
                {renderIcon(services[expandedIndex].key, isMobile ? 280 : 320, true)}
              </div>
              <p className="expanded-title">{services[expandedIndex].title}</p>
              <p className="expanded-desc">{services[expandedIndex].description}</p>
            </div>
          )}
          <p className="expanded-tap-hint">{isMobile ? 'tap anywhere to close' : 'click anywhere to close'}</p>
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
                letterSpacing: "0.12em"
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