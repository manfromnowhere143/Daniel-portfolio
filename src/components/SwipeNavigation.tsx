"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, ReactNode } from "react";

const PAGES = ["/", "/work", "/creative", "/services"];

interface SwipeNavigationProps {
  children: ReactNode;
}

export default function SwipeNavigation({ children }: SwipeNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Reset transition state when pathname changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  const getCurrentPageIndex = () => {
    // Handle sub-routes like /work/trade69
    if (pathname.startsWith("/work/")) return 1;
    return PAGES.indexOf(pathname);
  };

  const isOverlayOpen = () => {
    // Check if any overlay/modal is open (sidebar, expanded cards, etc)
    const overlays = document.querySelectorAll('[style*="z-index: 200"], [style*="z-index: 150"], [style*="z-index: 1000"]');
    for (const overlay of overlays) {
      const style = window.getComputedStyle(overlay);
      if (style.opacity !== '0' && style.pointerEvents !== 'none') {
        return true;
      }
    }
    return false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;

    // Ignore touches in hamburger zone (top-right corner)
    const touch = e.touches[0];
    const isHamburgerZone = touch.clientX > window.innerWidth - 80 && touch.clientY < 80;
    if (isHamburgerZone) return;

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isMobile || isTransitioning) return;

    // Don't swipe if an overlay is open
    if (isOverlayOpen()) return;

    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);
    const minSwipeDistance = 80;

    // Only trigger if horizontal swipe is dominant (not scrolling)
    if (Math.abs(deltaX) < minSwipeDistance || deltaY > Math.abs(deltaX)) return;

    const currentIndex = getCurrentPageIndex();
    if (currentIndex === -1) return;

    if (deltaX > 0 && currentIndex < PAGES.length - 1) {
      // Swipe left - go to next page
      setSlideDirection("left");
      setIsTransitioning(true);
      setTimeout(() => router.push(PAGES[currentIndex + 1]), 50);
    } else if (deltaX < 0 && currentIndex > 0) {
      // Swipe right - go to previous page
      setSlideDirection("right");
      setIsTransitioning(true);
      setTimeout(() => router.push(PAGES[currentIndex - 1]), 50);
    }
  };

  return (
    <>
      <style>{`
        .swipe-container {
          min-height: 100vh;
          position: relative;
        }
        
        .page-content {
          animation: pageIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .page-content.slide-left {
          animation: slideOutLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .page-content.slide-right {
          animation: slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes pageIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px);
          }
        }
        
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px);
          }
        }
      `}</style>

      <div
        className="swipe-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`page-content ${slideDirection ? `slide-${slideDirection}` : ''}`}>
          {children}
        </div>
      </div>
    </>
  );
}