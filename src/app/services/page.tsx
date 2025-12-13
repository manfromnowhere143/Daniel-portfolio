"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WebsiteIcon3D, DashboardIcon3D, APIIcon3D, LLMIcon3D } from "@/components/ServiceIcons3D";

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Small delay for smooth entrance
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
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

  const iconSize = isMobile ? 100 : 180;

  return (
    <>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          max-width: 260px;
          margin: 0 auto;
        }
        
        .services-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          width: 115px;
          height: 115px;
          margin: 0 auto;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.25s ease, 
                      opacity 0.4s ease;
          opacity: 0;
          overflow: hidden;
        }
        
        /* Premium inner lighting effect */
        .services-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.04) 40%,
            transparent 100%
          );
          border-radius: 24px 24px 50% 50%;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Subtle bottom shadow for depth */
        .services-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.25) 0%, 
            transparent 100%
          );
          border-radius: 0 0 24px 24px;
          pointer-events: none;
          z-index: 1;
        }
        
        .services-item.loaded {
          opacity: 1;
        }
        
        .services-item:active {
          transform: scale(0.92);
        }
        
        /* Website - Premium indigo */
        .services-item.website {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(165, 180, 252, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(65, 55, 120, 0.95) 0%, rgba(35, 28, 70, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(55, 48, 107, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(165, 180, 252, 0.2);
        }
        
        /* Dashboard - Premium rose */
        .services-item.dashboard {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(251, 182, 206, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(125, 52, 85, 0.95) 0%, rgba(72, 28, 50, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(112, 45, 75, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(251, 182, 206, 0.2);
        }
        
        /* API - Premium mint */
        .services-item.api {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(134, 239, 172, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(38, 105, 80, 0.95) 0%, rgba(18, 58, 45, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(32, 90, 70, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(134, 239, 172, 0.2);
        }
        
        /* LLM - Premium coral */
        .services-item.llm {
          background: 
            radial-gradient(ellipse 120% 80% at 50% -20%, rgba(253, 186, 140, 0.15) 0%, transparent 50%),
            linear-gradient(165deg, rgba(140, 68, 52, 0.95) 0%, rgba(82, 38, 28, 0.98) 100%);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            0 8px 24px rgba(124, 58, 45, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(253, 186, 140, 0.2);
        }
        
        /* Icon wrapper for z-index above lighting effects */
        .services-item > * {
          position: relative;
          z-index: 2;
        }

        .services-seeking {
          font-size: 14px;
          margin-top: 48px;
        }
        .services-contact {
          margin-top: 48px;
        }

        /* Expanded overlay - ONE SCREEN ONLY */
        .expanded-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
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
        .expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .expanded-icon {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expanded-title {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 300;
          color: #FAFAF8;
          letter-spacing: 0.04em;
        }
        .expanded-desc {
          margin-top: 8px;
          font-size: 11px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.6);
          line-height: 1.5;
          max-width: 280px;
          padding: 0 16px;
        }
        .expanded-close {
          position: absolute;
          top: 60px;
          left: 16px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.85);
          font-size: 24px;
          font-weight: 200;
          cursor: pointer;
          transition: color 0.2s ease, transform 0.2s ease;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }
        .expanded-close:hover {
          color: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }
        
        @media (min-width: 600px) {
          .services-grid {
            gap: 32px;
            max-width: 480px;
          }
          
          .services-item {
            width: 200px;
            height: 200px;
            border-radius: 40px;
          }
          
          .services-item::before {
            border-radius: 40px 40px 50% 50%;
          }
          
          .services-item::after {
            border-radius: 0 0 40px 40px;
          }
          
          .services-item:hover {
            transform: scale(1.04) translateY(-2px);
          }
          
          .services-item.website:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(55, 48, 107, 0.6),
              0 0 40px rgba(165, 180, 252, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .services-item.dashboard:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(112, 45, 75, 0.6),
              0 0 40px rgba(251, 182, 206, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .services-item.api:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(32, 90, 70, 0.6),
              0 0 40px rgba(134, 239, 172, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .services-item.llm:hover {
            box-shadow: 
              0 4px 8px rgba(0, 0, 0, 0.15),
              0 16px 48px rgba(124, 58, 45, 0.6),
              0 0 40px rgba(253, 186, 140, 0.15),
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          }

          .services-seeking {
            font-size: 16px;
            margin-top: clamp(64px, 10vh, 100px);
          }
          .services-contact {
            margin-top: clamp(64px, 10vh, 90px);
          }
          .expanded-icon {
            width: 180px;
            height: 180px;
          }
          .expanded-title {
            font-size: 20px;
          }
          .expanded-desc {
            font-size: 13px;
            max-width: 340px;
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
              className={`services-item ${item.key} ${isLoaded ? 'loaded' : ''}`}
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
              <div className="expanded-icon">
                {renderIcon(services[expandedIndex].key, 140, true)}
              </div>
              <p className="expanded-title">{services[expandedIndex].title}</p>
              <p className="expanded-desc">{services[expandedIndex].description}</p>
            </div>
          )}
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