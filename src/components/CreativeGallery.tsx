"use client";

import { useState } from "react";
import FadeImage from "./FadeImage";

export default function CreativeGallery() {
  const [expandedGallery, setExpandedGallery] = useState<number | null>(null);
  const [expandedSketch, setExpandedSketch] = useState<number | null>(null);

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

  const closeGallery = () => setExpandedGallery(null);
  const closeSketch = () => setExpandedSketch(null);

  const expandedGalleryItem = expandedGallery !== null ? galleryItems[expandedGallery] : null;
  const expandedSketchItem = expandedSketch !== null ? sketchItems[expandedSketch] : null;

  return (
    <>
      <style>{`
        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 500px;
          margin: 0 auto;
        }
        .gallery-item {
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          border-radius: 2px;
          overflow: hidden;
        }
        .gallery-item:hover {
          opacity: 0.85;
        }
        .gallery-item:active {
          transform: scale(0.98);
        }

        /* Sketch Grid */
        .sketch-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          max-width: 600px;
          margin: 0 auto;
        }
        .sketch-item {
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          border-radius: 2px;
          overflow: hidden;
        }
        .sketch-item:hover {
          opacity: 0.85;
        }
        .sketch-item:active {
          transform: scale(0.98);
        }

        /* Expanded Overlay */
        .gallery-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 10, 0.98);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .gallery-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .gallery-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAFAF8;
          opacity: 0.5;
          font-size: 28px;
          font-weight: 200;
          cursor: pointer;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          z-index: 1001;
          transition: opacity 0.2s ease;
        }
        .gallery-close:hover {
          opacity: 0.8;
        }
        .gallery-expanded-content {
          transform: scale(0.95) translateY(20px);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 90vw;
          max-height: 80vh;
        }
        .gallery-overlay.active .gallery-expanded-content {
          transform: scale(1) translateY(0);
        }
        .gallery-expanded-image {
          max-width: 100%;
          max-height: 75vh;
          border-radius: 4px;
          object-fit: contain;
        }

        @media (min-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            max-width: 700px;
          }
          .gallery-item:hover {
            transform: scale(1.02);
          }
          .sketch-grid {
            gap: 16px;
            max-width: 700px;
          }
          .sketch-item:hover {
            transform: scale(1.02);
          }
          .gallery-expanded-content {
            max-width: 80vw;
          }
        }
      `}</style>

      {/* GALLERY */}
      <div style={{ marginBottom: "clamp(32px, 5vh, 48px)" }}>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setExpandedGallery(i)}
            >
              <FadeImage
                src={item.src}
                alt={item.name}
                width={400}
                height={300}
                aspectRatio="4/3"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SKETCHES */}
      <div>
        <div className="sketch-grid">
          {sketchItems.map((item, i) => (
            <div
              key={i}
              className="sketch-item"
              onClick={() => setExpandedSketch(i)}
            >
              <FadeImage
                src={item.src}
                alt={item.name}
                width={200}
                height={267}
                aspectRatio="3/4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Expanded Overlay */}
      <div
        className={`gallery-overlay ${expandedGallery !== null ? 'active' : ''}`}
        onClick={closeGallery}
      >
        <div className="gallery-close" onClick={closeGallery}>×</div>
        {expandedGalleryItem && (
          <div className="gallery-expanded-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedGalleryItem.src}
              alt={expandedGalleryItem.name}
              className="gallery-expanded-image"
            />
          </div>
        )}
      </div>

      {/* Sketch Expanded Overlay */}
      <div
        className={`gallery-overlay ${expandedSketch !== null ? 'active' : ''}`}
        onClick={closeSketch}
      >
        <div className="gallery-close" onClick={closeSketch}>×</div>
        {expandedSketchItem && (
          <div className="gallery-expanded-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedSketchItem.src}
              alt={expandedSketchItem.name}
              className="gallery-expanded-image"
            />
          </div>
        )}
      </div>
    </>
  );
}