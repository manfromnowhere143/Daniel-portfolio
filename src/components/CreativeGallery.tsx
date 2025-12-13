"use client";

import { useState } from "react";
import FadeImage from "./FadeImage";

export default function CreativeGallery() {
  const [expandedGallery, setExpandedGallery] = useState<number | null>(null);
  const [expandedSketch, setExpandedSketch] = useState<number | null>(null);

  const galleryItems = [
    {
      src: "/images/art4.png",
      name: "Neural Architecture",
      description: "A visual exploration of artificial neural networks, depicting the intricate pathways of machine cognition through layered geometric abstraction."
    },
    {
      src: "/images/art3.jpg",
      name: "Emergence",
      description: "Complex patterns arising from simple rules. An investigation into how order spontaneously manifests from chaos through iterative processes."
    },
    {
      src: "/images/art2.JPEG",
      name: "Layers",
      description: "Depth through transparency. Multiple planes of existence coexisting in a single frame, each revealing and concealing simultaneously."
    },
    {
      src: "/images/art1.JPEG",
      name: "Geometric Abstractions",
      description: "Pure form distilled to its essence. The fundamental shapes that underlie all visual perception, stripped of ornament."
    }
  ];

  const sketchItems = [
    {
      src: "/images/homework1.jpg",
      name: "Study I",
      description: "Preliminary exploration of form and negative space. Graphite on paper."
    },
    {
      src: "/images/neural-timeline.jpg",
      name: "Study II",
      description: "Temporal mapping of neural activation patterns. Mixed media."
    },
    {
      src: "/images/homework36.jpg",
      name: "Study III",
      description: "Iterative refinement of geometric principles. Ink and wash."
    },
    {
      src: "/images/homework4.jpg",
      name: "Study IV",
      description: "Light and shadow as structural elements. Charcoal study."
    },
    {
      src: "/images/homework5.jpg",
      name: "Study V",
      description: "Final synthesis of form studies. Combined techniques."
    }
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
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          max-width: 340px;
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
          gap: 4px;
          max-width: 340px;
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

        /* Expanded Overlay - Matches other card overlays */
        .gallery-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: #0A0A0A;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .gallery-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }
        .gallery-close {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 26px;
          font-weight: 200;
          cursor: pointer;
          z-index: 10;
          transition: color 0.2s ease;
        }
        .gallery-close:hover {
          color: rgba(255, 255, 255, 0.9);
        }
        .gallery-expanded-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          width: 100%;
          max-width: 400px;
          max-height: 90vh;
          overflow: hidden;
        }
        .gallery-expanded-preview {
          width: 100%;
          max-width: 280px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .gallery-expanded-image {
          max-width: 100%;
          max-height: 45vh;
          border-radius: 4px;
          object-fit: contain;
        }
        .gallery-expanded-title {
          font-size: 16px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.05em;
          margin: 0 0 12px 0;
          text-align: center;
        }
        .gallery-expanded-desc {
          font-size: 11px;
          font-weight: 300;
          color: rgba(250, 250, 248, 0.55);
          line-height: 1.6;
          text-align: center;
          max-width: 300px;
          margin: 0;
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
            max-width: 500px;
          }
          .gallery-expanded-preview {
            max-width: 400px;
            margin-bottom: 24px;
          }
          .gallery-expanded-image {
            max-height: 50vh;
          }
          .gallery-expanded-title {
            font-size: 18px;
            margin-bottom: 14px;
          }
          .gallery-expanded-desc {
            font-size: 12px;
            max-width: 400px;
          }
        }
      `}</style>

      {/* GALLERY */}
      <div style={{ marginBottom: "clamp(20px, 3vh, 28px)" }}>
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
            <div className="gallery-expanded-preview">
              <img
                src={expandedGalleryItem.src}
                alt={expandedGalleryItem.name}
                className="gallery-expanded-image"
              />
            </div>
            <h3 className="gallery-expanded-title">{expandedGalleryItem.name}</h3>
            <p className="gallery-expanded-desc">{expandedGalleryItem.description}</p>
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
            <div className="gallery-expanded-preview">
              <img
                src={expandedSketchItem.src}
                alt={expandedSketchItem.name}
                className="gallery-expanded-image"
              />
            </div>
            <h3 className="gallery-expanded-title">{expandedSketchItem.name}</h3>
            <p className="gallery-expanded-desc">{expandedSketchItem.description}</p>
          </div>
        )}
      </div>
    </>
  );
}