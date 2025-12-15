"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<Date | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if current page has dark background
  const isDarkPage = pathname === "/" ||
                     pathname === "/work" ||
                     pathname === "/creative" ||
                     pathname === "/story" ||
                     pathname.startsWith("/work/");

  // Colors based on page background
  const textColor = isDarkPage ? "#FAFAF8" : "#0A0A0A";
  const hamburgerColor = isDarkPage ? "#FAFAF8" : "#1C1C1C";

  // Real-time clock - updates every second
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Desktop nav items
  const navItems = [
    { href: "/", label: "About", isActive: pathname === "/" },
    { href: "/work", label: "Work", isActive: pathname === "/work" || pathname.startsWith("/work/") },
    { href: "/creative", label: "Creative", isActive: pathname === "/creative" },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - DESKTOP SIDEBAR                                          */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .desktop-sidebar {
          position: fixed;
          left: 32px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px 20px;
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 
            0 0 40px rgba(0, 0, 0, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .desktop-sidebar:hover {
          background: rgba(25, 25, 25, 0.5);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 60px rgba(0, 0, 0, 0.4),
            0 25px 50px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        
        .desktop-sidebar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          pointer-events: none;
        }
        
        .sidebar-logo {
          width: 28px;
          height: 32px;
          margin-bottom: 20px;
          opacity: 0.7;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .desktop-sidebar:hover .sidebar-logo {
          opacity: 0.9;
          transform: scale(1.05);
        }
        
        .sidebar-time-container {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
        }
        
        .sidebar-time {
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.1em;
          font-variant-numeric: tabular-nums;
          opacity: 0.9;
        }
        
        .sidebar-date {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.2em;
          opacity: 0.5;
        }
        
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }
        
        .sidebar-nav-link {
          position: relative;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 8px 12px;
          margin: 0 -12px;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.5;
        }
        
        .sidebar-nav-link:hover {
          opacity: 0.9;
          background: rgba(255, 255, 255, 0.05);
        }
        
        .sidebar-nav-link.active {
          opacity: 1;
          font-weight: 400;
          background: rgba(255, 255, 255, 0.08);
        }
        
        .sidebar-nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.8;
          box-shadow: 0 0 8px currentColor;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - MOBILE NAV ICONS                                          */
        /* Luxury glass, breathing glow, 3D depth - FLOATING on the glass header       */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .nav-icon-container {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            rgba(0, 0, 0, 0.15) 100%
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 
            /* Outer glow - ethereal floating */
            0 0 30px rgba(255, 255, 255, 0.12),
            0 0 60px rgba(255, 255, 255, 0.06),
            /* 3D depth layers - LIFTED above the glass */
            0 4px 8px rgba(0, 0, 0, 0.5),
            0 8px 16px rgba(0, 0, 0, 0.4),
            0 16px 32px rgba(0, 0, 0, 0.3),
            /* Inner light */
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -webkit-tap-highlight-color: transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0) scale(1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        
        /* Animated gradient border - Apple style */
        .nav-icon-container::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 19px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.15),
            rgba(255, 255, 255, 0.02)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.7;
        }
        
        /* Curved glass reflection - top shine */
        .nav-icon-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 8%;
          right: 8%;
          height: 50%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.12) 30%,
            rgba(255, 255, 255, 0.02) 60%,
            transparent 100%
          );
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Active state - triple-layer luminous glow */
        .nav-icon-container.active {
          background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(0, 0, 0, 0.05) 100%
          );
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            /* Triple-layer outer glow */
            0 0 40px rgba(255, 255, 255, 0.25),
            0 0 80px rgba(255, 255, 255, 0.15),
            0 0 120px rgba(255, 255, 255, 0.08),
            /* Depth - more lifted */
            0 6px 12px rgba(0, 0, 0, 0.5),
            0 12px 24px rgba(0, 0, 0, 0.4),
            /* Inner light - brighter */
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          transform: translateZ(0) scale(1.04);
        }
        
        .nav-icon-container.active::after {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.18) 30%,
            rgba(255, 255, 255, 0.04) 60%,
            transparent 100%
          );
        }
        
        /* Tap state - bouncy spring */
        .nav-icon-container:active {
          transform: translateZ(0) scale(0.92);
          transition: transform 0.1s ease;
        }
        
        .nav-icon-svg {
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }
        
        .nav-icon-container.active .nav-icon-svg {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))
                  drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .nav-icon-container:not(.active) {
          opacity: 0.8;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - FLOATING ICONS ONLY                                      */
        /* No background container - pure floating icons                               */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .mobile-nav-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background: transparent;
          padding-bottom: env(safe-area-inset-bottom, 28px);
          -webkit-tap-highlight-color: transparent;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        
        /* Just a flex container - NO visual styling */
        .mobile-nav-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 12px 0;
        }
        
        .nav-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* Desktop Sidebar */}
      <nav
        className={`desktop-sidebar ${styles.desktopOnly}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sidebar-logo">
          <svg viewBox="0 0 28 32" fill="none" style={{ width: "100%", height: "100%" }}>
            <path
              d="M14 1L26 8.5V23.5L14 31L2 23.5V8.5L14 1Z"
              stroke={textColor}
              strokeWidth="0.75"
              fill="none"
            />
            <circle cx="14" cy="16" r="3" stroke={textColor} strokeWidth="0.5" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {time && (
          <div className="sidebar-time-container">
            <span className="sidebar-time" style={{ color: textColor }}>
              {formatTime(time)}
            </span>
            <span className="sidebar-date" style={{ color: textColor }}>
              {formatDate(time)}
            </span>
          </div>
        )}

        <div className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-nav-link ${item.isActive ? 'active' : ''}`}
              style={{ color: textColor }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Floating Hamburger - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.mobileOnly}
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "12px",
          zIndex: 201,
          transition: "opacity 0.2s ease",
          WebkitTapHighlightColor: "transparent"
        }}
        aria-label="Menu"
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <line
            x1={isOpen ? "4" : "0"}
            y1={isOpen ? "1" : "1"}
            x2={isOpen ? "20" : "24"}
            y2={isOpen ? "17" : "1"}
            stroke={isOpen ? "#FAFAF8" : hamburgerColor}
            strokeWidth="1.5"
            style={{ transition: "all 0.3s ease" }}
          />
          <line
            x1="0"
            y1="9"
            x2="24"
            y2="9"
            stroke={isOpen ? "#FAFAF8" : hamburgerColor}
            strokeWidth="1.5"
            style={{
              opacity: isOpen ? 0 : 1,
              transition: "opacity 0.2s ease"
            }}
          />
          <line
            x1={isOpen ? "4" : "0"}
            y1={isOpen ? "17" : "17"}
            x2={isOpen ? "20" : "24"}
            y2={isOpen ? "1" : "17"}
            stroke={isOpen ? "#FAFAF8" : hamburgerColor}
            strokeWidth="1.5"
            style={{ transition: "all 0.3s ease" }}
          />
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={styles.mobileOnly}
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 150,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
          WebkitTapHighlightColor: "transparent"
        }}
      />

      {/* Mobile Time/Date - slides from left */}
      <div
        className={styles.mobileOnly}
        style={{
          position: "fixed",
          top: "28px",
          left: "24px",
          zIndex: 200,
          transform: isOpen ? "translateX(0)" : "translateX(-150%)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        {time && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "3px"
          }}>
            <span style={{
              fontSize: "14px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "#FAFAF8",
              fontVariantNumeric: "tabular-nums"
            }}>
              {formatTime(time)}
            </span>
            <span style={{
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.12em",
              color: "#FAFAF8"
            }}>
              {formatDate(time)}
            </span>
          </div>
        )}
      </div>

      {/* STATE OF THE ART - Bottom Floating Dock with Glass Header */}
      <div
        className={`mobile-nav-bar ${styles.mobileOnly}`}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(120%)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        <div className="mobile-nav-inner">
          {/* ABOUT */}
          <Link
            href="/"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="url(#aboutGrad)" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="16" cy="10" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="16" cy="10" r="2.5" fill="white" opacity="0.15"/>
                <path
                  d="M6 28C6 28 8 20 16 20C24 20 26 28 26 28"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <line x1="16" y1="15" x2="16" y2="22" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>

          {/* WORK */}
          <Link
            href="/work"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/work" || pathname.startsWith("/work/") ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                <rect x="3" y="10" width="26" height="17" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
                <path
                  d="M11 10V7C11 5.5 12 4.5 13.5 4.5H18.5C20 4.5 21 5.5 21 7V10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <rect x="14" y="14" width="4" height="5" rx="1" stroke="white" strokeWidth="1" fill="none"/>
                <circle cx="16" cy="16.5" r="0.75" fill="white" opacity="0.8"/>
                <line x1="3" y1="18" x2="14" y2="18" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="18" y1="18" x2="29" y2="18" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="6" cy="13" r="0.5" fill="white" opacity="0.4"/>
                <circle cx="26" cy="13" r="0.5" fill="white" opacity="0.4"/>
              </svg>
            </div>
          </Link>

          {/* CREATIVE */}
          <Link
            href="/creative"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/creative" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 2L18 13L29 16L18 19L16 30L14 19L3 16L14 13L16 2Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M16 7L17 14L24 16L17 18L16 25L15 18L8 16L15 14L16 7Z"
                  fill="white"
                  opacity="0.12"
                />
                <circle cx="16" cy="16" r="2" fill="white" opacity="0.9"/>
                <circle cx="16" cy="16" r="1" fill="white"/>
                <line x1="6" y1="6" x2="9" y2="9" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <line x1="26" y1="6" x2="23" y2="9" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <line x1="6" y1="26" x2="9" y2="23" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <line x1="26" y1="26" x2="23" y2="23" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <circle cx="5" cy="5" r="1" fill="white" opacity="0.6"/>
                <circle cx="27" cy="5" r="1" fill="white" opacity="0.6"/>
                <circle cx="5" cy="27" r="1" fill="white" opacity="0.6"/>
                <circle cx="27" cy="27" r="1" fill="white" opacity="0.6"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}