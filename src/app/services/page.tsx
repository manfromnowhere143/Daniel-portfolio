import Link from "next/link";
import { Metadata } from "next";
import { WebsiteIcon, DashboardIcon, APIIcon, LLMIcon } from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: "Services | Daniel Wahnich",
  description: "Custom websites, API development, dashboards, and LLM middleware services.",
};

export default function Services() {
  const services = [
    { title: "Custom Websites", icon: <WebsiteIcon /> },
    { title: "Dashboards", icon: <DashboardIcon /> },
    { title: "API Development", icon: <APIIcon /> },
    { title: "LLM Middleware", icon: <LLMIcon /> }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0A0A0A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "clamp(80px, 12vh, 140px)",
      paddingBottom: "60px",
      paddingLeft: "24px",
      paddingRight: "24px"
    }}>

      {/* Services List */}
      <div style={{
        maxWidth: "600px",
        width: "100%"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(36px, 6vh, 48px)"
        }}>
          {services.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {/* Icon */}
              <div>
                {item.icon}
              </div>

              <p style={{
                fontSize: "clamp(18px, 2.5vw, 22px)",
                fontWeight: 200,
                color: "#FAFAF8",
                letterSpacing: "0.02em",
                marginTop: "4px",
                marginBottom: "0"
              }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Also Seeking Section */}
      <div style={{
        maxWidth: "700px",
        marginTop: "clamp(60px, 10vh, 80px)",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 20px)"
        }}>
          Also seeking
        </p>

        <p style={{
          fontSize: "clamp(18px, 3vw, 24px)",
          fontWeight: 200,
          color: "#FAFAF8",
          lineHeight: 1.4,
          marginBottom: "clamp(20px, 3vh, 28px)",
          letterSpacing: "-0.01em"
        }}>
          A team and a mentor
        </p>

        <p style={{
          fontSize: "12px",
          color: "#FAFAF8",
          letterSpacing: "0.08em",
          fontWeight: 300
        }}>
          Robotics · Computer Vision · AI · LLM
        </p>
      </div>

      {/* Contact */}
      <div style={{
        maxWidth: "700px",
        marginTop: "clamp(48px, 8vh, 72px)",
        textAlign: "center"
      }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.08em",
          color: "#FAFAF8",
          marginBottom: "clamp(16px, 2vh, 20px)",
          fontWeight: 200
        }}>
          Contact
        </p>

        <p style={{
          marginBottom: "12px"
        }}>
          <a
            href="mailto:cogitoergosum143@gmail.com"
            style={{
              fontSize: "13px",
              color: "#FAFAF8",
              textDecoration: "none",
              fontWeight: 300,
              letterSpacing: "0.02em"
            }}
          >
            cogitoergosum143@gmail.com
          </a>
        </p>

        <p>
          <a
            href="https://github.com/manfromnowhere143"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "#FAFAF8",
              textDecoration: "none",
              fontWeight: 300
            }}
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        marginTop: "clamp(40px, 6vh, 60px)",
        textAlign: "center"
      }}>
        <Link
          href="/"
          style={{
            fontSize: "11px",
            color: "#FAFAF8",
            textDecoration: "none",
            letterSpacing: "0.12em"
          }}
        >
          ← About
        </Link>
      </div>

    </div>
  );
}