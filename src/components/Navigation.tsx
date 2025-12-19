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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme') as 'dark' | 'light' | null;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Handle theme change - instant, no flash
  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    if (newTheme === theme) return;
    setTheme(newTheme);
    localStorage.setItem('site-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Determine if current page has dark background
  const isDarkPage = pathname === "/" ||
                     pathname === "/work" ||
                     pathname === "/creative" ||
                     pathname === "/story" ||
                     pathname.startsWith("/work/");

  // Colors based on theme
  const getTextColor = () => {
    if (theme === 'light') return "#1a1a1a";
    return "#FAFAF8";
  };

  const textColor = getTextColor();
  const hamburgerColor = theme === 'light' ? "#1C1C1C" : "#FAFAF8";

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
        /* STATE OF THE ART - THEME VARIABLES                                          */
        /* Only dark and light - clean and simple                                      */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        :root, [data-theme="dark"] {
          --bg-primary: #050506;
          --bg-secondary: #0a0a0b;
          --bg-card: rgba(40, 40, 45, 0.65);
          --text-primary: #FAFAF8;
          --text-secondary: rgba(250, 250, 248, 0.7);
          --text-tertiary: rgba(250, 250, 248, 0.5);
          --border-primary: rgba(255, 255, 255, 0.06);
          --border-secondary: rgba(255, 255, 255, 0.1);
        }
        
        [data-theme="light"] {
          --bg-primary: #F5F5F0;
          --bg-secondary: #EAEAE5;
          --bg-card: rgba(255, 255, 255, 0.8);
          --text-primary: #1a1a1a;
          --text-secondary: rgba(26, 26, 26, 0.7);
          --text-tertiary: rgba(26, 26, 26, 0.5);
          --border-primary: rgba(0, 0, 0, 0.06);
          --border-secondary: rgba(0, 0, 0, 0.1);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* BUTTERY SMOOTH TRANSITIONS - No flash, professional                         */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        html, body {
          background-color: var(--bg-primary) !important;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - THEME TOGGLE BUTTONS                                     */
        /* Horizontal row, left-aligned, under nav links - floating elegance           */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .theme-toggle-container {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
          justify-content: flex-start;
          padding: 16px 0 0 0;
          margin-top: 16px;
        }
        
        .theme-btn {
          position: relative;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        
        /* Light/Pearl theme button */
        .theme-btn.light {
          background: linear-gradient(145deg, #FFFFFF 0%, #F5F5F0 50%, #E8E8E3 100%);
          box-shadow:
            0 0 0 0.5px rgba(255, 255, 255, 0.8),
            0 1px 3px rgba(0, 0, 0, 0.2),
            0 3px 6px rgba(0, 0, 0, 0.12),
            inset 0 1px 1px rgba(255, 255, 255, 1);
        }
        
        .theme-btn.light::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 60%);
        }
        
        /* Dark theme button */
        .theme-btn.dark {
          background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #000000 100%);
          box-shadow:
            0 0 0 0.5px rgba(255, 255, 255, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.4),
            0 3px 6px rgba(0, 0, 0, 0.3),
            inset 0 1px 1px rgba(255, 255, 255, 0.05);
        }
        
        .theme-btn.dark::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 4px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
        }
        
        .theme-btn.light.active {
          box-shadow:
            0 0 0 2px rgba(120, 120, 120, 0.3),
            0 0 12px rgba(255, 255, 255, 0.4),
            0 2px 6px rgba(0, 0, 0, 0.15),
            inset 0 1px 1px rgba(255, 255, 255, 1);
        }
        
        .theme-btn.dark.active {
          box-shadow:
            0 0 0 2px rgba(255, 255, 255, 0.15),
            0 0 12px rgba(0, 0, 0, 0.5),
            0 2px 6px rgba(0, 0, 0, 0.4),
            inset 0 1px 1px rgba(255, 255, 255, 0.08);
        }
        
        /* Hover states */
        .theme-btn:hover {
          transform: scale(1.15);
        }
        
        .theme-btn.active:hover {
          transform: scale(1.08);
        }
        
        .theme-btn:active {
          transform: scale(0.92);
          transition: transform 0.1s ease;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - DESKTOP SIDEBAR                                          */
        /* Refined, elegant, minimal - pure floating elements                          */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .desktop-sidebar {
          position: fixed;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 18px 16px;
        }
        
        .sidebar-logo {
          width: 22px;
          height: 26px;
          margin-bottom: 14px;
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .desktop-sidebar:hover .sidebar-logo {
          opacity: 0.8;
          transform: scale(1.03);
        }
        
        .sidebar-time-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 8px;
          padding-bottom: 0;
          width: 100%;
        }
        
        .sidebar-time {
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.08em;
          font-variant-numeric: tabular-nums;
          opacity: 0.85;
        }
        
        .sidebar-date {
          font-size: 8px;
          font-weight: 300;
          letter-spacing: 0.18em;
          opacity: 0.4;
        }
        
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          width: 100%;
          margin-top: 12px;
          padding-top: 12px;
        }
        
        .sidebar-nav-link {
          position: relative;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 6px 10px;
          margin: 0 -10px;
          border-radius: 6px;
          transition: opacity 0.3s ease;
          opacity: 0.4;
        }
        
        .sidebar-nav-link:hover {
          opacity: 0.85;
        }
        
        .sidebar-nav-link.active {
          opacity: 1;
          font-weight: 400;
        }
        
        .sidebar-nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.7;
          box-shadow: 0 0 6px currentColor;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - MOBILE NAV ICONS                                         */
        /* Refined, smaller, more elegant - true luxury                                */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .nav-icon-container {
          position: relative;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            #161616 0%,
            #0c0c0c 50%,
            #050505 100%
          );
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.03),
            0 3px 6px rgba(0, 0, 0, 0.6),
            0 6px 12px rgba(0, 0, 0, 0.4),
            0 12px 24px rgba(0, 0, 0, 0.3),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.04);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          -webkit-tap-highlight-color: transparent;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0) scale(1);
          overflow: hidden;
          border: 0.5px solid rgba(255, 255, 255, 0.04);
        }
        
        /* Subtle gradient border */
        .nav-icon-container::before {
          content: '';
          position: absolute;
          inset: -0.5px;
          border-radius: 14.5px;
          padding: 0.5px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.05),
            rgba(255, 255, 255, 0.01)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.5;
        }
        
        /* Very subtle top shine */
        .nav-icon-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 12%;
          right: 12%;
          height: 40%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.015) 50%,
            transparent 100%
          );
          border-radius: 14px 14px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Active state */
        .nav-icon-container.active {
          background: linear-gradient(
            145deg,
            #1e1e1e 0%,
            #121212 50%,
            #080808 100%
          );
          border-color: rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.05),
            0 0 12px rgba(255, 255, 255, 0.03),
            0 4px 10px rgba(0, 0, 0, 0.5),
            0 10px 20px rgba(0, 0, 0, 0.4),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.06);
          transform: translateZ(0) scale(1.02);
        }
        
        .nav-icon-container.active::after {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.02) 50%,
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
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }
        
        .nav-icon-container.active .nav-icon-svg {
          filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.12))
                  drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
        }
        
        .nav-icon-container:not(.active) {
          opacity: 0.85;
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
          padding-bottom: env(safe-area-inset-bottom, 24px);
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
          gap: 20px;
          padding: 10px 0;
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

        {/* STATE OF THE ART - Theme Toggle Buttons */}
        <div className="theme-toggle-container">
          <button
            className={`theme-btn light ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeChange('light')}
            aria-label="Light theme"
            title="Light"
          />
          <button
            className={`theme-btn dark ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeChange('dark')}
            aria-label="Dark theme"
            title="Dark"
          />
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

      {/* Mobile Time/Date and Theme Toggle - slides from left */}
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
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "3px"
        }}>
          {time && (
            <>
              <span style={{
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: textColor,
                fontVariantNumeric: "tabular-nums"
              }}>
                {formatTime(time)}
              </span>
              <span style={{
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.12em",
                color: textColor
              }}>
                {formatDate(time)}
              </span>
            </>
          )}

          {/* Theme buttons - vertical, under date */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "12px"
          }}>
            <button
              className={`theme-btn light ${theme === 'light' ? 'active' : ''}`}
              onClick={() => handleThemeChange('light')}
              aria-label="Light theme"
              style={{ width: "22px", height: "22px" }}
            />
            <button
              className={`theme-btn dark ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => handleThemeChange('dark')}
              aria-label="Dark theme"
              style={{ width: "22px", height: "22px" }}
            />
          </div>
        </div>
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
              <svg className="nav-icon-svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
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
              <svg className="nav-icon-svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
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
                <line x1="16" y1="10" x2="16" y2="26" stroke="white" strokeWidth="0.75" opacity="0.25"/>
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
              <svg className="nav-icon-svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
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
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  opacity="0.35"
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