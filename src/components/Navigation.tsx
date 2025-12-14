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
                     pathname === "/services" ||
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

  const navItems = [
    { href: "/", label: "About", isActive: pathname === "/" },
    { href: "/work", label: "Work", isActive: pathname === "/work" || pathname.startsWith("/work/") },
    { href: "/creative", label: "Creative", isActive: pathname === "/creative" },
    { href: "/services", label: "Services", isActive: pathname === "/services" },
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

        {/* Navigation Links */}
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
          transition: "opacity 0.2s ease"
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
          background: "rgba(0,0,0,0.3)",
          zIndex: 150,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease"
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

      {/* Mobile Bottom Bar - Nav slides up with elegant icons */}
      <div
        className={styles.mobileOnly}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: "rgba(10, 10, 10, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          opacity: isOpen ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          pointerEvents: isOpen ? "auto" : "none",
          paddingBottom: "env(safe-area-inset-bottom, 0)"
        }}
      >
        <div style={{
          height: "80px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          width: "100%"
        }}>
          {/* About - Human silhouette */}
          <Link
            href="/"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: pathname === "/" ? 1 : 0.6,
              transition: "opacity 0.2s ease"
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {/* Head */}
              <circle cx="13" cy="7" r="4.5" stroke="#FAFAF8" strokeWidth="1.5" fill="none"/>
              {/* Body - elegant curved torso */}
              <path
                d="M6 24C6 24 7 16 13 16C19 16 20 24 20 24"
                stroke="#FAFAF8"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span style={{
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#FAFAF8",
              textTransform: "uppercase"
            }}>About</span>
          </Link>

          {/* Work - Stacked layers/cards representing projects */}
          <Link
            href="/work"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: pathname === "/work" || pathname.startsWith("/work/") ? 1 : 0.6,
              transition: "opacity 0.2s ease"
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {/* Back card */}
              <rect x="6" y="4" width="14" height="10" rx="2" stroke="#FAFAF8" strokeWidth="1" opacity="0.4"/>
              {/* Middle card */}
              <rect x="4" y="8" width="14" height="10" rx="2" stroke="#FAFAF8" strokeWidth="1.2" opacity="0.7"/>
              {/* Front card */}
              <rect x="8" y="12" width="14" height="10" rx="2" stroke="#FAFAF8" strokeWidth="1.5"/>
              {/* Dot detail */}
              <circle cx="15" cy="17" r="1.5" fill="#FAFAF8" opacity="0.8"/>
            </svg>
            <span style={{
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#FAFAF8",
              textTransform: "uppercase"
            }}>Work</span>
          </Link>

          {/* Creative - Abstract geometric spark/burst */}
          <Link
            href="/creative"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: pathname === "/creative" ? 1 : 0.6,
              transition: "opacity 0.2s ease"
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {/* Center diamond */}
              <path d="M13 6L17 13L13 20L9 13L13 6Z" stroke="#FAFAF8" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
              {/* Radiating lines - creative burst */}
              <line x1="13" y1="2" x2="13" y2="5" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
              <line x1="13" y1="21" x2="13" y2="24" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
              <line x1="5" y1="9" x2="8" y2="11" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              <line x1="18" y1="11" x2="21" y2="9" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              <line x1="5" y1="17" x2="8" y2="15" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              <line x1="18" y1="15" x2="21" y2="17" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              {/* Inner glow point */}
              <circle cx="13" cy="13" r="1.5" fill="#FAFAF8" opacity="0.9"/>
            </svg>
            <span style={{
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#FAFAF8",
              textTransform: "uppercase"
            }}>Creative</span>
          </Link>

          {/* Services - Interconnected nodes/network */}
          <Link
            href="/services"
            onClick={() => setTimeout(() => setIsOpen(false), 150)}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              opacity: pathname === "/services" ? 1 : 0.6,
              transition: "opacity 0.2s ease"
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {/* Connection lines */}
              <line x1="7" y1="7" x2="13" y2="13" stroke="#FAFAF8" strokeWidth="1" opacity="0.5"/>
              <line x1="19" y1="7" x2="13" y2="13" stroke="#FAFAF8" strokeWidth="1" opacity="0.5"/>
              <line x1="7" y1="19" x2="13" y2="13" stroke="#FAFAF8" strokeWidth="1" opacity="0.5"/>
              <line x1="19" y1="19" x2="13" y2="13" stroke="#FAFAF8" strokeWidth="1" opacity="0.5"/>
              {/* Corner nodes */}
              <circle cx="7" cy="7" r="3" stroke="#FAFAF8" strokeWidth="1.2" fill="none"/>
              <circle cx="19" cy="7" r="3" stroke="#FAFAF8" strokeWidth="1.2" fill="none"/>
              <circle cx="7" cy="19" r="3" stroke="#FAFAF8" strokeWidth="1.2" fill="none"/>
              <circle cx="19" cy="19" r="3" stroke="#FAFAF8" strokeWidth="1.2" fill="none"/>
              {/* Center hub - larger, filled */}
              <circle cx="13" cy="13" r="3.5" stroke="#FAFAF8" strokeWidth="1.5" fill="none"/>
              <circle cx="13" cy="13" r="1.5" fill="#FAFAF8"/>
            </svg>
            <span style={{
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.1em",
              color: "#FAFAF8",
              textTransform: "uppercase"
            }}>Services</span>
          </Link>
        </div>
      </div>
    </>
  );
}