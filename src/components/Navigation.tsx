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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          zIndex: 102,
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? "none" : "auto",
          transition: "opacity 0.3s ease"
        }}
        aria-label="Menu"
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <line x1="0" y1="1" x2="24" y2="1" stroke={hamburgerColor} strokeWidth="1.5"/>
          <line x1="0" y1="9" x2="24" y2="9" stroke={hamburgerColor} strokeWidth="1.5"/>
          <line x1="0" y1="17" x2="24" y2="17" stroke={hamburgerColor} strokeWidth="1.5"/>
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div
        className={styles.mobileSidebar}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#0A0A0A",
          zIndex: 101,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden"
        }}
      >
        {/* Top Left - Time, Date & Age */}
        {time && (
          <div style={{
            position: "absolute",
            top: "28px",
            left: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2px"
          }}>
            <span style={{
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.12em",
              color: "#FAFAF8",
              fontVariantNumeric: "tabular-nums"
            }}>
              {formatTime(time)}
            </span>
            <span style={{
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.2em",
              color: "#FAFAF8"
            }}>
              {formatDate(time)}
            </span>
            {/* Age Clock - Live Ticking */}
            {age !== null && (
              <span style={{
                fontSize: "8px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#FAFAF8",
                fontVariantNumeric: "tabular-nums",
                marginTop: "6px",
                fontFamily: "ui-monospace, SFMono-Regular, monospace"
              }}>
                {formatAge(age)}
              </span>
            )}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={() => setTimeout(() => setIsOpen(false), 150)}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            zIndex: 102
          }}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="4" x2="20" y2="20" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round"/>
            <line x1="20" y1="4" x2="4" y2="20" stroke="#FAFAF8" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Exact Center - Navigation */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px"
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setTimeout(() => setIsOpen(false), 150)}
              style={{
                textDecoration: "none"
              }}
            >
              <span style={{
                fontWeight: 200,
                fontSize: "22px",
                letterSpacing: "0.04em",
                color: "#FAFAF8"
              }}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Name at bottom center */}
        <p style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "9px",
          fontWeight: 300,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#FAFAF8",
          opacity: 0.5
        }}>
          Daniel Wahnich
        </p>
      </div>
    </>
  );
}