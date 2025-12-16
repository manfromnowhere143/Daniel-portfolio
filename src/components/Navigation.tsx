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
            145deg,
            #181818 0%,
            #0d0d0d 50%,
            #050505 100%
          );
          box-shadow: 
            /* Subtle edge definition for black backgrounds */
            0 0 0 1px rgba(255, 255, 255, 0.04),
            /* 3D depth layers */
            0 4px 8px rgba(0, 0, 0, 0.7),
            0 8px 16px rgba(0, 0, 0, 0.5),
            0 16px 32px rgba(0, 0, 0, 0.4),
            /* Inner subtle light */
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -webkit-tap-highlight-color: transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0) scale(1);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        
        /* Subtle gradient border */
        .nav-icon-container::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 19px;
          padding: 1px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.01)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.6;
        }
        
        /* Very subtle top shine */
        .nav-icon-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 45%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0.02) 50%,
            transparent 100%
          );
          border-radius: 18px 18px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Active state */
        .nav-icon-container.active {
          background: linear-gradient(
            145deg,
            #222222 0%,
            #141414 50%,
            #0a0a0a 100%
          );
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            /* Slightly more visible edge */
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 0 15px rgba(255, 255, 255, 0.04),
            /* Depth */
            0 6px 12px rgba(0, 0, 0, 0.6),
            0 12px 24px rgba(0, 0, 0, 0.5),
            /* Inner light */
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transform: translateZ(0) scale(1.02);
        }
        
        .nav-icon-container.active::after {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          );
        }
        
        /* Tap state */
        .nav-icon-container:active {
          transform: translateZ(0) scale(0.94);
          transition: transform 0.1s ease;
        }
        
        .nav-icon-svg {
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
          transition: all 0.3s ease;
        }
        
        .nav-icon-container.active .nav-icon-svg {
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.15))
                  drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
        }
        
        .nav-icon-container:not(.active) {
          opacity: 0.9;
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

      {/* STATE OF THE ART - Floating Menu Button - Mobile Only */}
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
          WebkitTapHighlightColor: "transparent"
        }}
        aria-label="Menu"
      >
        <div style={{
          width: "28px",
          height: "20px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}>
          {/* Line 1 - Top */}
          <span style={{
            display: "block",
            height: "2px",
            borderRadius: "1px",
            background: isOpen ? "#FAFAF8" : hamburgerColor,
            transformOrigin: "right center",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isOpen ? "0.1s" : "0s",
            width: isOpen ? "24px" : "28px",
            transform: isOpen
              ? "rotate(-45deg) translateX(3px) translateY(-1px)"
              : "rotate(0) translateX(0) translateY(0)",
            boxShadow: isOpen
              ? "0 0 8px rgba(250, 250, 248, 0.3)"
              : "none"
          }} />

          {/* Line 2 - Middle (disappears elegantly) */}
          <span style={{
            display: "block",
            height: "2px",
            borderRadius: "1px",
            background: isOpen ? "#FAFAF8" : hamburgerColor,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isOpen ? "0s" : "0.1s",
            width: isOpen ? "0px" : "20px",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "translateX(10px)" : "translateX(0)"
          }} />

          {/* Line 3 - Bottom */}
          <span style={{
            display: "block",
            height: "2px",
            borderRadius: "1px",
            background: isOpen ? "#FAFAF8" : hamburgerColor,
            transformOrigin: "right center",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isOpen ? "0.1s" : "0s",
            width: isOpen ? "24px" : "14px",
            transform: isOpen
              ? "rotate(45deg) translateX(3px) translateY(1px)"
              : "rotate(0) translateX(0) translateY(0)",
            boxShadow: isOpen
              ? "0 0 8px rgba(250, 250, 248, 0.3)"
              : "none"
          }} />
        </div>
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
          transition: isOpen
            ? "opacity 0.3s ease-out"
            : "opacity 0.25s ease-in",
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
          transform: isOpen ? "translateX(0)" : "translateX(-120%)",
          opacity: isOpen ? 1 : 0,
          transition: isOpen
            ? "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out"
            : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in",
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

      {/* STATE OF THE ART - Bottom Floating Dock */}
      <div
        className={`mobile-nav-bar ${styles.mobileOnly}`}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          opacity: isOpen ? 1 : 0,
          transition: isOpen
            ? "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out"
            : "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        <div className="mobile-nav-inner">
          {/* ABOUT - Clean minimalist human silhouette */}
          <Link
            href="/"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                {/* Head */}
                <circle cx="16" cy="9" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Body - elegant curved shoulders */}
                <path
                  d="M5 28C5 28 7 18 16 18C25 18 27 28 27 28"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </Link>

          {/* WORK - Clean briefcase */}
          <Link
            href="/work"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/work" || pathname.startsWith("/work/") ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                {/* Briefcase body */}
                <rect x="3" y="10" width="26" height="16" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Handle */}
                <path
                  d="M11 10V7C11 5.5 12 4.5 13.5 4.5H18.5C20 4.5 21 5.5 21 7V10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Center line */}
                <line x1="16" y1="10" x2="16" y2="26" stroke="white" strokeWidth="1" opacity="0.3"/>
              </svg>
            </div>
          </Link>

          {/* CREATIVE - Elegant pen/quill with flowing stroke */}
          <Link
            href="/creative"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/creative" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                {/* Pen body - diagonal elegant line */}
                <path
                  d="M22 4L8 18L6 26L14 24L28 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Pen tip */}
                <path
                  d="M6 26L8 18L14 24L6 26Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Creative flourish - subtle curved line */}
                <path
                  d="M10 22C14 20 18 22 22 18"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.4"
                  fill="none"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}