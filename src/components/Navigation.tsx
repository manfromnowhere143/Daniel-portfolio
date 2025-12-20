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
  const desktopIconColor = theme === 'light' ? "#1a1a1a" : "white";

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
        /* STATE OF THE ART - DESKTOP TOP LEFT (Clock & Theme)                         */
        /* Floating minimal elements                                                   */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .desktop-top-left {
          position: fixed;
          left: 32px;
          top: 32px;
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }
        
        .desktop-time-container {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .desktop-time {
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.08em;
          font-variant-numeric: tabular-nums;
          opacity: 0.85;
        }
        
        .desktop-date {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.18em;
          opacity: 0.4;
        }
        
        .desktop-theme-toggle {
          display: flex;
          flex-direction: row;
          gap: 10px;
          margin-top: 4px;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════════ */
        /* STATE OF THE ART - DESKTOP BOTTOM DOCK                                      */
        /* Pure floating icons like mobile - NO container, NO labels                   */
        /* ═══════════════════════════════════════════════════════════════════════════ */
        
        .desktop-nav-dock {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
        
        /* Desktop icon wrapper */
        .desktop-icon-wrapper {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        /* Desktop icon container - slightly larger than mobile */
        .desktop-icon-container {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(
            145deg,
            #1a1a1a 0%,
            #0e0e0e 50%,
            #080808 100%
          );
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.04),
            0 4px 10px rgba(0, 0, 0, 0.5),
            0 10px 20px rgba(0, 0, 0, 0.4),
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0) scale(1);
          overflow: hidden;
          border: 0.5px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Desktop icon gradient border */
        .desktop-icon-container::before {
          content: '';
          position: absolute;
          inset: -0.5px;
          border-radius: 16.5px;
          padding: 0.5px;
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
        
        /* Desktop icon top shine */
        .desktop-icon-container::after {
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
          border-radius: 16px 16px 50% 50%;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Desktop hover state */
        .desktop-icon-container:hover {
          transform: translateZ(0) scale(1.08) translateY(-4px);
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            0 0 20px rgba(255, 255, 255, 0.05),
            0 8px 16px rgba(0, 0, 0, 0.5),
            0 16px 32px rgba(0, 0, 0, 0.4),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.08);
        }
        
        /* Desktop active state */
        .desktop-icon-container.active {
          background: linear-gradient(
            145deg,
            #242424 0%,
            #161616 50%,
            #0c0c0c 100%
          );
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            0 0 20px rgba(255, 255, 255, 0.05),
            0 6px 14px rgba(0, 0, 0, 0.45),
            0 14px 28px rgba(0, 0, 0, 0.35),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.08);
          transform: translateZ(0) scale(1.03);
        }
        
        .desktop-icon-container.active::after {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          );
        }
        
        .desktop-icon-container.active:hover {
          transform: translateZ(0) scale(1.05) translateY(-2px);
        }
        
        /* Desktop click state */
        .desktop-icon-container:active {
          transform: translateZ(0) scale(0.95);
          transition: transform 0.1s ease;
        }
        
        .desktop-icon-container:not(.active) {
          opacity: 0.7;
        }
        
        .desktop-icon-container:not(.active):hover {
          opacity: 1;
        }
        
        .desktop-icon-svg {
          position: relative;
          z-index: 5;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
          transition: all 0.3s ease;
        }
        
        .desktop-icon-container.active .desktop-icon-svg {
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.15))
                  drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        /* Light theme desktop icons */
        [data-theme="light"] .desktop-icon-container {
          background: linear-gradient(
            145deg,
            #ffffff 0%,
            #f5f5f5 50%,
            #ebebeb 100%
          );
          border-color: rgba(0, 0, 0, 0.06);
          box-shadow: 
            0 0 0 0.5px rgba(0, 0, 0, 0.04),
            0 4px 10px rgba(0, 0, 0, 0.08),
            0 10px 20px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }
        
        [data-theme="light"] .desktop-icon-container::before {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.8),
            rgba(0, 0, 0, 0.02),
            rgba(255, 255, 255, 0.4),
            rgba(0, 0, 0, 0.01)
          );
        }
        
        [data-theme="light"] .desktop-icon-container::after {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
        }
        
        [data-theme="light"] .desktop-icon-svg {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }
        
        [data-theme="light"] .desktop-icon-container:hover {
          box-shadow: 
            0 0 0 0.5px rgba(0, 0, 0, 0.06),
            0 12px 24px rgba(0, 0, 0, 0.12),
            0 24px 48px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }
        
        [data-theme="light"] .desktop-icon-container.active {
          background: linear-gradient(
            145deg,
            #f8f8f8 0%,
            #f0f0f0 50%,
            #e8e8e8 100%
          );
          box-shadow: 
            0 0 0 0.5px rgba(0, 0, 0, 0.08),
            0 5px 12px rgba(0, 0, 0, 0.1),
            0 10px 24px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }
        
        /* Labels removed - pure floating icons like mobile */
        
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

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* DESKTOP - Top Left Clock & Theme Toggle                                     */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <div className={`desktop-top-left ${styles.desktopOnly}`}>
        {time && (
          <div className="desktop-time-container">
            <span className="desktop-time" style={{ color: textColor }}>
              {formatTime(time)}
            </span>
            <span className="desktop-date" style={{ color: textColor }}>
              {formatDate(time)}
            </span>
          </div>
        )}
        <div className="desktop-theme-toggle">
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
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* DESKTOP - Bottom Floating Dock (Same style as mobile, larger)              */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className={`desktop-nav-dock ${styles.desktopOnly}`}>
        {/* ABOUT */}
        <Link href="/" className="desktop-icon-wrapper">
          <div className={`desktop-icon-container ${pathname === "/" ? "active" : ""}`}>
            <svg className="desktop-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="9" r="5" stroke={desktopIconColor} strokeWidth="1.5" fill="none"/>
              <path
                d="M5 28C5 28 7 18 16 18C25 18 27 28 27 28"
                stroke={desktopIconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </Link>

        {/* WORK */}
        <Link href="/work" className="desktop-icon-wrapper">
          <div className={`desktop-icon-container ${pathname === "/work" || pathname.startsWith("/work/") ? "active" : ""}`}>
            <svg className="desktop-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="10" width="26" height="16" rx="3" stroke={desktopIconColor} strokeWidth="1.5" fill="none"/>
              <path
                d="M11 10V7C11 5.5 12 4.5 13.5 4.5H18.5C20 4.5 21 5.5 21 7V10"
                stroke={desktopIconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <line x1="16" y1="10" x2="16" y2="26" stroke={desktopIconColor} strokeWidth="0.75" opacity="0.25"/>
            </svg>
          </div>
        </Link>

        {/* CREATIVE */}
        <Link href="/creative" className="desktop-icon-wrapper">
          <div className={`desktop-icon-container ${pathname === "/creative" ? "active" : ""}`}>
            <svg className="desktop-icon-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path
                d="M22 4L8 18L6 26L14 24L28 10"
                stroke={desktopIconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M6 26L8 18L14 24L6 26Z"
                stroke={desktopIconColor}
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M10 22C14 20 18 22 22 18"
                stroke={desktopIconColor}
                strokeWidth="0.75"
                strokeLinecap="round"
                opacity="0.35"
                fill="none"
              />
            </svg>
          </div>
        </Link>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* MOBILE - Floating Menu Button (UNCHANGED)                                  */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
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
            background: isOpen ? textColor : hamburgerColor,
            transformOrigin: "right center",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isOpen ? "0.1s" : "0s",
            width: isOpen ? "24px" : "28px",
            transform: isOpen
              ? "rotate(-45deg) translateX(3px) translateY(-1px)"
              : "rotate(0) translateX(0) translateY(0)",
            boxShadow: isOpen && theme === 'dark'
              ? "0 0 8px rgba(250, 250, 248, 0.3)"
              : "none"
          }} />

          {/* Line 2 - Middle (disappears elegantly) */}
          <span style={{
            display: "block",
            height: "2px",
            borderRadius: "1px",
            background: isOpen ? textColor : hamburgerColor,
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
            background: isOpen ? textColor : hamburgerColor,
            transformOrigin: "right center",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: isOpen ? "0.1s" : "0s",
            width: isOpen ? "24px" : "14px",
            transform: isOpen
              ? "rotate(45deg) translateX(3px) translateY(1px)"
              : "rotate(0) translateX(0) translateY(0)",
            boxShadow: isOpen && theme === 'dark'
              ? "0 0 8px rgba(250, 250, 248, 0.3)"
              : "none"
          }} />
        </div>
      </button>

      {/* Mobile Time/Date and Theme Toggle - slides from left (UNCHANGED) */}
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

      {/* STATE OF THE ART - Bottom Floating Dock - MOBILE (UNCHANGED) */}
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