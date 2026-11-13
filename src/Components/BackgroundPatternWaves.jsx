import React, { useEffect, useState } from 'react';
import PatternWaves from './PatternWaves';

/**
 * BackgroundPatternWaves
 * Full-viewport fixed background rendering React Bits PatternWaves
 * using the 'silk' preset and 'dot' motion with the ZUVO purple theme color (#015B97).
 * Dynamically shifts direction and movement across the full website scroll.
 */
export default function BackgroundPatternWaves() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollProgress(window.scrollY / totalScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    handleScroll();

    return () => {

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Direction tilts dynamically with scroll (horizontal wave flow shift across sections)
  const dynamicDirection = 20 + scrollProgress * 70;
  // Dynamic scale and depth expand subtly as user scrolls through the conglomerate ecosystem
  const dynamicScale = 1.1 + scrollProgress * 0.35;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white"
      aria-hidden="true"
    >
      {/* PatternWaves Canvas Container */}
      <div className="w-full h-full relative opacity-[0.45]">
        <PatternWaves
          preset="silk"
          pattern="dot"
          wave="silk"
          color="#015B97"
          backgroundColor="#FFFFFF"
          spacing={11}
          markSize={0.84}
          depth={0.76}
          shine={0.6}
          contrast={1.0}
          speed={0.28}
          scale={dynamicScale}
          direction={dynamicDirection}
          opacity={0.65}
          fade="none"
          interactive={true}
          cursorSize={85}
          cursorStrength={1.25}
          intro={true}
        />
      </div>

      {/* Interactive Cursor Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, rgba(119, 90, 218, 0.12), transparent 75%)`,
          }}
        />
      )}

      {/* Subtle architectural structural grid aligned across the page */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#17171D 1px, transparent 1px), linear-gradient(90deg, #17171D 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
