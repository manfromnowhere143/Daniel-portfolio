"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

// Birthday - March 9, 1988
const BIRTHDAY = new Date("1988-03-09T00:00:00");

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState<Date | null>(null);
  const [age, setAge] = useState<number | null>(null);

  // Determine if current page has dark background
  const isDarkPage = pathname === "/" ||
                     pathname === "/work" ||
                     pathname === "/creative" ||
                     pathname === "/story" ||
                     pathname.startsWith("/work/");

  // Colors based on page background
  const textColor = isDarkPage ? "#FAFAF8" : "#0A0A0A";
  const hamburgerColor = isDarkPage ? "#FAFAF8" : "#1C1C1C";

  // Real-time clock & age - updates every 50ms for smooth ticking
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now);
      // Calculate precise age in decimal years
      const diffMs = now.getTime() - BIRTHDAY.getTime();
      const years = diffMs / (1000 * 60 * 60 * 24 * 365.2425);
      setAge(years);
    };

    updateTime();
    const interval = setInterval(updateTime, 50);
    return () => clearInterval(interval);
  }, []);

  // Desktop nav items - NO SERVICES
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

  // Format age with 8 decimal places for smooth ticking
  const formatAge = (years: number) => {
    return years.toFixed(8);
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - MOBILE NAV ICONS                         */
        /* Advanced lighting, depth, and glass effects                 */
        /* ═══════════════════════════════════════════════════════════ */
        
        .nav-icon-container {
          position: relative;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(60, 60, 60, 0.5), rgba(25, 25, 25, 0.7));
          box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.15),
            0 0 60px rgba(255, 255, 255, 0.08),
            0 4px 20px rgba(0, 0, 0, 0.5),
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.2),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          overflow: hidden;
        }
        
        /* STATE OF THE ART - Top shine reflection */
        .nav-icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 45%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 100%
          );
          border-radius: 14px 14px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Active state glow - ENHANCED WHITE GLOW */
        .nav-icon-container.active {
          background: linear-gradient(145deg, rgba(80, 80, 80, 0.6), rgba(40, 40, 40, 0.8));
          box-shadow: 
            0 0 40px rgba(255, 255, 255, 0.25),
            0 0 80px rgba(255, 255, 255, 0.12),
            0 0 120px rgba(255, 255, 255, 0.06),
            0 4px 20px rgba(0, 0, 0, 0.5),
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.3),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
        }
        
        .nav-icon-container:active {
          transform: translateZ(0) scale(0.92);
        }
        
        /* Icon SVG styling */
        .nav-icon-svg {
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }
        
        /* Inactive state opacity */
        .nav-icon-container:not(.active) {
          opacity: 0.7;
        }
        
        .nav-icon-container:not(.active):hover {
          opacity: 0.9;
        }
        
        /* Bottom bar container - TRANSPARENT, FLOATING */
        .mobile-nav-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          background: transparent;
          padding-bottom: env(safe-area-inset-bottom, 20px);
          -webkit-tap-highlight-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* 3 icons centered with bigger gap */
        .mobile-nav-inner {
          height: 76px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 28px;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 0 10px 0;
          box-sizing: border-box;
        }
        
        .nav-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* Desktop Navigation - Floating Vertical Sidebar */}
      <nav className={styles.desktopOnly} style={{
        position: "fixed",
        left: "40px",
        top: "40px",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        {/* Geometric accent - hexagon outline */}
        <div style={{
          width: "28px",
          height: "32px",
          marginBottom: "28px"
        }}>
          <svg viewBox="0 0 28 32" fill="none" style={{ width: "100%", height: "100%" }}>
            <path
              d="M14 1L26 8.5V23.5L14 31L2 23.5V8.5L14 1Z"
              stroke={textColor}
              strokeWidth="0.75"
              fill="none"
            />
            <circle cx="14" cy="16" r="3" stroke={textColor} strokeWidth="0.5" fill="none" opacity="0.6"/>
          </svg>
        </div>

        {/* Time, Date & Age Display */}
        {time && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginBottom: "28px"
          }}>
            <span style={{
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.12em",
              color: textColor,
              fontVariantNumeric: "tabular-nums"
            }}>
              {formatTime(time)}
            </span>
            <span style={{
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.2em",
              color: textColor
            }}>
              {formatDate(time)}
            </span>
            {/* Age Clock - Live Ticking */}
            {age !== null && (
              <span style={{
                fontSize: "9px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: textColor,
                fontVariantNumeric: "tabular-nums",
                marginTop: "8px",
                fontFamily: "ui-monospace, SFMono-Regular, monospace"
              }}>
                {formatAge(age)}
              </span>
            )}
          </div>
        )}

        {/* Navigation Links - NO SERVICES */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              style={{
                fontSize: "12px",
                fontWeight: item.isActive ? 400 : 300,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: textColor,
                textDecoration: "none",
                transition: "opacity 0.3s ease"
              }}
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
        {/* Animated hamburger to X */}
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

      {/* Subtle Overlay */}
      <div
        className={styles.mobileOnly}
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 150,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
          WebkitTapHighlightColor: "transparent"
        }}
      />

      {/* Mobile Top Bar - Time/Date slides in from left */}
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

      {/* STATE OF THE ART - Mobile Bottom Nav - 3 CENTERED ICONS */}
      <div
        className={`mobile-nav-bar ${styles.mobileOnly}`}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none"
        }}
      >
        <div className="mobile-nav-inner">
          {/* ABOUT - Elegant Human Figure */}
          <Link
            href="/"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="28" height="28" viewBox="0 0 40 40" fill="none">
                {/* Outer aura ring */}
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="0.5" opacity="0.15"/>

                {/* Head with inner glow */}
                <circle cx="20" cy="12" r="5.5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>
                <circle cx="20" cy="12" r="3" fill="white" opacity="0.3"/>

                {/* Body - elegant curved form */}
                <path
                  d="M10 36C10 36 11.5 24 20 24C28.5 24 30 36 30 36"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.9"
                />

                {/* Inner body glow */}
                <path
                  d="M14 34C14 34 15 27 20 27C25 27 26 34 26 34"
                  stroke="white"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                />

                {/* Shoulder accents */}
                <circle cx="12" cy="26" r="1" fill="white" opacity="0.4"/>
                <circle cx="28" cy="26" r="1" fill="white" opacity="0.4"/>

                {/* Center energy point */}
                <circle cx="20" cy="30" r="1.5" fill="white" opacity="0.6"/>
              </svg>
            </div>
          </Link>

          {/* WORK - STATE OF THE ART Home Icon */}
          <Link
            href="/work"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/work" || pathname.startsWith("/work/") ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="28" height="28" viewBox="0 0 40 40" fill="none">
                {/* Outer aura */}
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="0.5" opacity="0.1"/>

                {/* Roof - elegant triangular shape */}
                <path
                  d="M20 6L35 18H5L20 6Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.9"
                />

                {/* Inner roof glow */}
                <path
                  d="M20 10L30 18H10L20 10Z"
                  stroke="white"
                  strokeWidth="0.6"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.3"
                />

                {/* House body */}
                <rect x="8" y="18" width="24" height="16" stroke="white" strokeWidth="1.5" fill="none" opacity="0.9"/>

                {/* Inner body glow */}
                <rect x="11" y="20" width="18" height="12" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2"/>

                {/* Door */}
                <rect x="16" y="24" width="8" height="10" rx="1" stroke="white" strokeWidth="1.2" fill="none" opacity="0.8"/>

                {/* Door handle */}
                <circle cx="22" cy="29" r="1" fill="white" opacity="0.7"/>

                {/* Windows */}
                <rect x="10" y="21" width="4" height="4" rx="0.5" fill="white" opacity="0.4"/>
                <rect x="26" y="21" width="4" height="4" rx="0.5" fill="white" opacity="0.4"/>

                {/* Chimney */}
                <rect x="27" y="8" width="4" height="8" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>

                {/* Chimney glow */}
                <circle cx="29" cy="7" r="1.5" fill="white" opacity="0.3"/>

                {/* Foundation line */}
                <path d="M5 34h30" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </svg>
            </div>
          </Link>

          {/* CREATIVE - STATE OF THE ART Entertainment/Star Icon */}
          <Link
            href="/creative"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            className="nav-link"
          >
            <div className={`nav-icon-container ${pathname === "/creative" ? "active" : ""}`}>
              <svg className="nav-icon-svg" width="28" height="28" viewBox="0 0 40 40" fill="none">
                {/* Outer energy ring */}
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="0.5" opacity="0.15"/>

                {/* Main star - 4 point sparkle */}
                <path
                  d="M20 4L22 16L34 18L22 20L20 32L18 20L6 18L18 16L20 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.9"
                />

                {/* Inner star glow */}
                <path
                  d="M20 10L21 17L28 18L21 19L20 26L19 19L12 18L19 17L20 10Z"
                  fill="white"
                  opacity="0.3"
                />

                {/* Diagonal sparkle rays */}
                <line x1="8" y1="8" x2="12" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <line x1="32" y1="8" x2="28" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <line x1="8" y1="32" x2="12" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                <line x1="32" y1="32" x2="28" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>

                {/* Small accent stars */}
                <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.5"/>
                <circle cx="30" cy="10" r="1.5" fill="white" opacity="0.5"/>
                <circle cx="10" cy="30" r="1.5" fill="white" opacity="0.5"/>
                <circle cx="30" cy="30" r="1.5" fill="white" opacity="0.5"/>

                {/* Center core - bright glowing */}
                <circle cx="20" cy="18" r="4" fill="white" opacity="0.6"/>
                <circle cx="20" cy="18" r="2" fill="white" opacity="0.9"/>
                <circle cx="20" cy="18" r="1" fill="white" opacity="1"/>

                {/* Outer sparkle dots */}
                <circle cx="20" cy="4" r="1" fill="white" opacity="0.7"/>
                <circle cx="20" cy="32" r="1" fill="white" opacity="0.7"/>
                <circle cx="6" cy="18" r="1" fill="white" opacity="0.7"/>
                <circle cx="34" cy="18" r="1" fill="white" opacity="0.7"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}