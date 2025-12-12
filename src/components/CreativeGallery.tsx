"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import FadeImage from "./FadeImage";

export default function CreativeGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const galleryItems = [
    { src: "/images/art4.png", name: "Neural Architecture" },
    { src: "/images/art3.jpg", name: "Emergence" },
    { src: "/images/art2.JPEG", name: "Layers" },
    { src: "/images/art1.JPEG", name: "Geometric Abstractions" }
  ];

  const sketchItems = [
    { src: "/images/homework1.jpg", name: "Study I" },
    { src: "/images/neural-timeline.jpg", name: "Study II" },
    { src: "/images/homework36.jpg", name: "Study III" },
    { src: "/images/homework4.jpg", name: "Study IV" },
    { src: "/images/homework5.jpg", name: "Study V" }
  ];

  return (
    <>
      <Lightbox
        src={lightbox?.src || ""}
        alt={lightbox?.alt || ""}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />

      {/* GALLERY */}
      <div style={{ marginBottom: "clamp(48px, 8vh, 64px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          maxWidth: "700px",
          margin: "0 auto"
        }}>
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox({ src: item.src, alt: item.name })}
              style={{ cursor: "zoom-in" }}
            >
              <div
                style={{
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                <FadeImage
                  src={item.src}
                  alt={item.name}
                  width={400}
                  height={300}
                  aspectRatio="4/3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKETCHES */}
      <div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "12px",
          maxWidth: "800px",
          margin: "0 auto"
        }}>
          {sketchItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightbox({ src: item.src, alt: item.name })}
              style={{ cursor: "zoom-in" }}
            >
              <div
                style={{
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                <FadeImage
                  src={item.src}
                  alt={item.name}
                  width={200}
                  height={267}
                  aspectRatio="3/4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}