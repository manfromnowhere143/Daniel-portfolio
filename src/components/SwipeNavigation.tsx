"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, ReactNode, useCallback } from "react";

// Order matches sidebar: About -> Work -> Creative -> Services
const PAGES = ["/", "/work", "/creative", "/services"];

// Work detail pages order: Trade69 -> MegaAgent -> Octopus -> Overmind -> About
const WORK_PAGES = ["/work/trade69", "/work/megaagent", "/work/octopus", "/work/overmind"];

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

  // Prevent pinch zoom on iOS
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    const preventGestureZoom = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventGestureZoom);
    document.addEventListener('gesturechange', preventGestureZoom);
    document.addEventListener('gestureend', preventGestureZoom);

    return () => {
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('gesturestart', preventGestureZoom);
      document.removeEventListener('gesturechange', preventGestureZoom);
      document.removeEventListener('gestureend', preventGestureZoom);
    };
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

  // Check if on work detail page
  const isWorkDetailPage = useCallback(() => {
    return WORK_PAGES.includes(pathname);
  }, [pathname]);

  const getCurrentPageIndex = useCallback(() => {
    // Handle about page (also maps to /)
    if (pathname === "/about") return 0;
    const idx = PAGES.indexOf(pathname);
    return idx >= 0 ? idx : 0;
  }, [pathname]);

  const getWorkPageIndex = useCallback(() => {
    return WORK_PAGES.indexOf(pathname);
  }, [pathname]);

  const canGoNext = useCallback(() => {
    if (isWorkDetailPage()) {
      // Work pages can always go next (last one goes to About)
      return true;
    }
    const idx = getCurrentPageIndex();
    return idx >= 0 && idx < PAGES.length - 1;
  }, [getCurrentPageIndex, isWorkDetailPage]);

  const canGoPrev = useCallback(() => {
    if (isWorkDetailPage()) {
      // Can go prev if not on first work page
      return getWorkPageIndex() > 0;
    }
    const idx = getCurrentPageIndex();
    return idx > 0;
  }, [getCurrentPageIndex, isWorkDetailPage, getWorkPageIndex]);

  const getNextPage = useCallback(() => {
    if (isWorkDetailPage()) {
      const workIdx = getWorkPageIndex();
      if (workIdx < WORK_PAGES.length - 1) {
        return WORK_PAGES[workIdx + 1];
      }
      // Last work page goes to About
      return "/";
    }
    const idx = getCurrentPageIndex();
    return PAGES[idx + 1];
  }, [isWorkDetailPage, getWorkPageIndex, getCurrentPageIndex]);

  const getPrevPage = useCallback(() => {
    if (isWorkDetailPage()) {
      const workIdx = getWorkPageIndex();
      return WORK_PAGES[workIdx - 1];
    }
    const idx = getCurrentPageIndex();
    return PAGES[idx - 1];
  }, [isWorkDetailPage, getWorkPageIndex, getCurrentPageIndex]);

  const isOverlayOpen = () => {
    // Check for sidebar menu (hamburger open)
    const sidebarOpen = document.querySelector('[style*="translateY(0)"][style*="z-index: 200"]');
    const overlayVisible = document.querySelector('[style*="opacity: 1"][style*="z-index: 150"]');

    // Check for expanded overlays on services/creative pages
    const expandedOverlay = document.querySelector('.expanded-overlay.active');
    const cardOverlay = document.querySelector('.card-overlay.active');

    // Check for work page expanded state
    const workDetailOverlay = document.querySelector('.work-expanded-overlay.active');

    return !!(sidebarOpen || overlayVisible || expandedOverlay || cardOverlay || workDetailOverlay);
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

    // Stop if overlay opened during drag
    if (isOverlayOpen()) {
      setIsDragging(false);
      setDragOffset(0);
      isValidSwipe.current = false;
      return;
    }

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
      if (deltaX < 0 && canGoNext()) {
        // Swipe left - next page
        setExitDirection("left");
        setIsNavigating(true);
        setDragOffset(-screenWidth);
        setTimeout(() => {
          router.push(getNextPage());
        }, 280);
      } else if (deltaX > 0 && canGoPrev()) {
        // Swipe right - previous page
        setExitDirection("right");
        setIsNavigating(true);
        setDragOffset(screenWidth);
        setTimeout(() => {
          router.push(getPrevPage());
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
        /* Disable pinch zoom on mobile */
        html, body {
          touch-action: pan-x pan-y;
          -ms-touch-action: pan-x pan-y;
        }
        
        .swipe-container {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
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
          animation: pageEnter 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        
        @keyframes pageEnter {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
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
          className={`page-wrapper ${isEntering ? 'entering' : ''}`}
          style={getTransformStyle()}
        >
          {children}
        </div>
      </div>
    </>
  );
}