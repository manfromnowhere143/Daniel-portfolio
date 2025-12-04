"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(250, 250, 248, 0.9)",
        backdropFilter: "blur(8px)"
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
          {/* Desktop Links - Hidden on Mobile */}
          <div style={{
            display: "flex",
            gap: "40px",
            alignItems: "center"
          }}>
            <Link href="/" style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              display: "block"
            }}
            className="desktop-only">
              About
            </Link>
            <Link href="/work" style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/work" || pathname.startsWith("/work/") ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              display: "block"
            }}
            className="desktop-only">
              Work
            </Link>
            <Link href="/creative" style={{
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/creative" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              display: "block"
            }}
            className="desktop-only">
              Creative
            </Link>
          </div>

          {/* Hamburger Menu - Only on Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              position: "absolute",
              right: "20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none"
            }}
            className="mobile-only"
            aria-label="Menu"
          >
            <div style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#1C1C1C",
              marginBottom: "5px",
              transition: "all 0.3s"
            }} />
            <div style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#1C1C1C",
              marginBottom: "5px",
              transition: "all 0.3s"
            }} />
            <div style={{
              width: "24px",
              height: "2px",
              backgroundColor: "#1C1C1C",
              transition: "all 0.3s"
            }} />
          </button>
        </div>
        <div style={{ height: "1px", backgroundColor: "#E0DED6" }} />
      </nav>

      {/* Mobile Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-100%",
          width: "70%",
          maxWidth: "300px",
          height: "100vh",
          backgroundColor: "#FAFAF8",
          zIndex: 100,
          transition: "right 0.3s ease",
          boxShadow: isOpen ? "-4px 0 24px rgba(0,0,0,0.1)" : "none",
          display: "none"
        }}
        className="mobile-sidebar"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "32px",
            color: "#1C1C1C",
            padding: "8px",
            lineHeight: 1
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Menu Items */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "100px",
          gap: "0"
        }}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            style={{
              padding: "24px 40px",
              fontSize: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              borderBottom: "1px solid #E0DED6",
              transition: "all 0.3s"
            }}
          >
            About
          </Link>
          <Link
            href="/work"
            onClick={() => setIsOpen(false)}
            style={{
              padding: "24px 40px",
              fontSize: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/work" || pathname.startsWith("/work/") ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              borderBottom: "1px solid #E0DED6",
              transition: "all 0.3s"
            }}
          >
            Work
          </Link>
          <Link
            href="/creative"
            onClick={() => setIsOpen(false)}
            style={{
              padding: "24px 40px",
              fontSize: "16px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: pathname === "/creative" ? "#1C1C1C" : "#71706E",
              textDecoration: "none",
              borderBottom: "1px solid #E0DED6",
              transition: "all 0.3s"
            }}
          >
            Creative
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 99,
            display: "none"
          }}
          className="mobile-overlay"
        />
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
          .mobile-sidebar {
            display: block !important;
          }
          .mobile-overlay {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-only {
            display: block !important;
          }
          .mobile-only {
            display: none !important;
          }
          .mobile-sidebar {
            display: none !important;
          }
          .mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
