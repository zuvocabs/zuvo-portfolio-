import React, { useEffect, useState } from 'react';
import LightPillar from './LightPillar';

/**
 * BackgroundLightPillar
 * Global fixed background component that renders the React Bits LightPillar
 * across the ENTIRE viewport from hero down to footer with seamless shader-level
 * horizontal translation and ZERO canvas element offsets.
 */
export default function BackgroundLightPillar() {
  const [scrollProgress, setScrollProgress] = useState(0);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Internal shader shift: gracefully moves the pillar beam across the screen
  // from -0.35 (left-center) to +0.35 (right-center) as the user scrolls down
  const internalShift = -0.35 + scrollProgress * 0.7;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white"
      aria-hidden="true"
    >
      {/* Light Pillar canvas perfectly matching 100% viewport dimensions with no CSS transforms */}
      <div className="w-full h-full relative opacity-90">
        <LightPillar
          topColor="#015B97"
          bottomColor="#B8A7F6"
          intensity={1.35}
          glowAmount={0.0035}
          bloom={0.65}
          pillarWidth={4.2}
          pillarHeight={0.35}
          pillarRotation={22}
          rotationSpeed={0.32}
          twist={0.42}
          flow={1.1}
          detail={4}
          noiseIntensity={0.18}
          lightMode={false}
          mixBlendMode="normal"
          quality="high"
          fade={0}
          scrollShift={internalShift}
          interactive={true}
          clickPulse={true}
          intro={true}
        />
      </div>

      {/* Gentle architectural grid pattern across the full screen */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#17171D 1px, transparent 1px), linear-gradient(90deg, #17171D 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
