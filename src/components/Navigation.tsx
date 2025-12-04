"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(250, 250, 248, 0.95)",
        backdropFilter: "blur(12px)"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          gap: "40px",
          padding: "0 20px",
          position: "relative"
        }}>
          <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "center"
          }}>
            <Link href="/" className={styles.desktopOnly} style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              transition: "color 0.3s"
            }}>
              About
            </Link>
            <Link href="/work" className={styles.desktopOnly} style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/work" || pathname.startsWith("/work/") ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              transition: "color 0.3s"
            }}>
              Work
            </Link>
            <Link href="/creative" className={styles.desktopOnly} style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/creative" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              transition: "color 0.3s"
            }}>
              Creative
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileOnly}
            style={{
              position: "absolute",
              right: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "12px",
              zIndex: 101
            }}
            aria-label="Menu"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <line x1="0" y1="1" x2="24" y2="1" stroke="#1C1C1C" strokeWidth="1.5"/>
              <line x1="0" y1="9" x2="24" y2="9" stroke="#1C1C1C" strokeWidth="1.5"/>
              <line x1="0" y1="17" x2="24" y2="17" stroke="#1C1C1C" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
        <div style={{ height: "1px", backgroundColor: "#E0DED6" }} />
      </nav>

      <div
        className={styles.mobileSidebar}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#FAFAF8",
          zIndex: 100,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden"
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            zIndex: 101
          }}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <line x1="2" y1="2" x2="22" y2="22" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="22" y1="2" x2="2" y2="22" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "0",
          padding: "0 40px"
        }}>
          <div style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#E0DED6",
            marginBottom: "60px"
          }} />

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "32px",
              fontWeight: 300,
              letterSpacing: "0.02em",
              color: pathname === "/" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              padding: "20px 0",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
          >
            About
          </Link>

          <div style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#E0DED6",
            margin: "8px 0"
          }} />

          <Link
            href="/work"
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "32px",
              fontWeight: 300,
              letterSpacing: "0.02em",
              color: pathname === "/work" || pathname.startsWith("/work/") ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              padding: "20px 0",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
          >
            Work
          </Link>

          <div style={{
            width: "40px",
            height: "1px",
            backgroundColor: "#E0DED6",
            margin: "8px 0"
          }} />

          <Link
            href="/creative"
            onClick={() => setIsOpen(false)}
            style={{
              fontFamily: "Playfair Display, Georgia, serif",
              fontSize: "32px",
              fontWeight: 300,
              letterSpacing: "0.02em",
              color: pathname === "/creative" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              padding: "20px 0",
              transition: "all 0.3s ease",
              textAlign: "center"
            }}
          >
            Creative
          </Link>

          <div style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#E0DED6",
            marginTop: "60px"
          }} />

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B8B7B3",
            marginTop: "40px",
            textAlign: "center"
          }}>
            Daniel Wahnich
          </p>
        </div>
      </div>
    </>
  );
}
