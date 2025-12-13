"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, ReactNode, useCallback } from "react";

const PAGES = ["/", "/work", "/creative", "/services"];

interface SwipeNavigationProps {
  children: ReactNode;
}

export default function SwipeNavigation({ children }: SwipeNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [isEntering, setIsEntering] = useState(true);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchCurrentX = useRef(0);
  const velocity = useRef(0);
  const lastTouchTime = useRef(0);
  const lastTouchX = useRef(0);
  const isValidSwipe = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Page enter animation
  useEffect(() => {
    setIsEntering(true);
    setExitDirection(null);
    setIsNavigating(false);
    setDragOffset(0);
    const timer = setTimeout(() => setIsEntering(false), 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  const getCurrentPageIndex = useCallback(() => {
    if (pathname.startsWith("/work/")) return 1;
    return PAGES.indexOf(pathname);
  }, [pathname]);

  const canGoNext = useCallback(() => {
    const idx = getCurrentPageIndex();
    return idx !== -1 && idx < PAGES.length - 1;
  }, [getCurrentPageIndex]);

  const canGoPrev = useCallback(() => {
    const idx = getCurrentPageIndex();
    return idx > 0;
  }, [getCurrentPageIndex]);

  const isOverlayOpen = () => {
    const sidebarOpen = document.querySelector('[style*="translateY(0)"][style*="z-index: 200"]');
    const overlayVisible = document.querySelector('[style*="opacity: 1"][style*="z-index: 150"]');
    return !!(sidebarOpen || overlayVisible);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || isNavigating) return;

    const touch = e.touches[0];

    // Ignore hamburger zone
    if (touch.clientX > window.innerWidth - 80 && touch.clientY < 80) return;

    // Ignore if overlay is open
    if (isOverlayOpen()) return;

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    touchCurrentX.current = touch.clientX;
    lastTouchX.current = touch.clientX;
    lastTouchTime.current = Date.now();
    velocity.current = 0;
    isValidSwipe.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging || isNavigating) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = Math.abs(touch.clientY - touchStartY.current);

    // Calculate velocity
    const now = Date.now();
    const dt = now - lastTouchTime.current;
    if (dt > 0) {
      velocity.current = (touch.clientX - lastTouchX.current) / dt;
    }
    lastTouchX.current = touch.clientX;
    lastTouchTime.current = now;

    // Determine if horizontal swipe after 10px movement
    if (!isValidSwipe.current && Math.abs(deltaX) > 10) {
      isValidSwipe.current = Math.abs(deltaX) > deltaY;
    }

    if (!isValidSwipe.current) return;

    // Apply resistance at edges
    let offset = deltaX;
    if ((deltaX > 0 && !canGoPrev()) || (deltaX < 0 && !canGoNext())) {
      offset = deltaX * 0.2; // Rubber band effect
    }

    touchCurrentX.current = touch.clientX;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;

    setIsDragging(false);

    if (!isValidSwipe.current) {
      setDragOffset(0);
      return;
    }

    const deltaX = touchCurrentX.current - touchStartX.current;
    const screenWidth = window.innerWidth;
    const threshold = screenWidth * 0.25;
    const velocityThreshold = 0.5;

    // Check if should navigate based on distance or velocity
    const shouldNavigate = Math.abs(deltaX) > threshold || Math.abs(velocity.current) > velocityThreshold;

    if (shouldNavigate) {
      const currentIndex = getCurrentPageIndex();

      if (deltaX < 0 && canGoNext()) {
        // Swipe left - next page
        setExitDirection("left");
        setIsNavigating(true);
        setDragOffset(-screenWidth);
        setTimeout(() => {
          router.push(PAGES[currentIndex + 1]);
        }, 280);
      } else if (deltaX > 0 && canGoPrev()) {
        // Swipe right - previous page
        setExitDirection("right");
        setIsNavigating(true);
        setDragOffset(screenWidth);
        setTimeout(() => {
          router.push(PAGES[currentIndex - 1]);
        }, 280);
      } else {
        // Snap back
        setDragOffset(0);
      }
    } else {
      // Snap back with animation
      setDragOffset(0);
    }

    isValidSwipe.current = false;
  };

  const getTransformStyle = () => {
    if (isNavigating && exitDirection) {
      return {
        transform: `translateX(${dragOffset}px)`,
        transition: "transform 0.28s cubic-bezier(0.25, 0.1, 0.25, 1)",
        opacity: 1 - Math.abs(dragOffset) / window.innerWidth * 0.4
      };
    }

    if (isDragging && isValidSwipe.current) {
      return {
        transform: `translateX(${dragOffset}px)`,
        transition: "none",
        opacity: 1 - Math.abs(dragOffset) / window.innerWidth * 0.2
      };
    }

    if (dragOffset !== 0) {
      return {
        transform: "translateX(0)",
        transition: "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.35s ease",
        opacity: 1
      };
    }

    return {
      transform: "translateX(0)",
      transition: "none",
      opacity: 1
    };
  };

  return (
    <>
      <style>{`
        .swipe-container {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }
        
        .page-wrapper {
          min-height: 100vh;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        
        .page-wrapper.entering {
          animation: pageEnter 0.45s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        
        @keyframes pageEnter {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .page-wrapper.entering-reverse {
          animation: pageEnterReverse 0.45s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        
        @keyframes pageEnterReverse {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="swipe-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`page-wrapper ${isEntering ? (exitDirection === 'right' ? 'entering-reverse' : 'entering') : ''}`}
          style={getTransformStyle()}
        >
          {children}
        </div>
      </div>
    </>
  );
}