"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
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
        height: "80px",
        gap: "60px"
      }}>
        <Link href="/" style={{
          fontSize: "14px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: pathname === "/" ? "#1C1C1C" : "#71706E"
        }}>
          Home
        </Link>
        <Link href="/work" style={{
          fontSize: "14px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: pathname === "/work" ? "#1C1C1C" : "#71706E"
        }}>
          Work
        </Link>
        <Link href="/about" style={{
          fontSize: "14px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: pathname === "/about" ? "#1C1C1C" : "#71706E"
        }}>
          About
        </Link>
      </div>
      <div style={{ height: "1px", backgroundColor: "#E0DED6" }} />
    </nav>
  );
}
