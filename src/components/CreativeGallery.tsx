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

        /* Expanded Overlay - Same as icons */
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
          overflow-y: auto;
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
          width: 100%;
          max-width: 600px;
        }
        .gallery-overlay.active .gallery-expanded-content {
          transform: scale(1) translateY(0);
        }
        .gallery-expanded-preview {
          width: 100%;
          margin-bottom: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .gallery-expanded-image {
          max-width: 100%;
          max-height: 50vh;
          border-radius: 4px;
          object-fit: contain;
        }
        .gallery-expanded-title {
          font-size: 22px;
          font-weight: 200;
          color: #FAFAF8;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
          text-align: center;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
        }
        .gallery-overlay.active .gallery-expanded-title {
          opacity: 1;
          transform: translateY(0);
        }
        .gallery-expanded-desc {
          font-size: 13px;
          font-weight: 300;
          color: #FAFAF8;
          opacity: 0;
          line-height: 1.7;
          text-align: left;
          max-width: 500px;
          transform: translateY(10px);
          transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s;
        }
        .gallery-overlay.active .gallery-expanded-desc {
          opacity: 0.7;
          transform: translateY(0);
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
            max-width: 700px;
          }
          .gallery-expanded-title {
            font-size: 26px;
          }
          .gallery-expanded-desc {
            font-size: 15px;
          }
          .gallery-expanded-image {
            max-height: 55vh;
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