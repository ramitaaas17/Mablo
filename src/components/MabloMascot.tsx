import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { IMAGES } from '@/assets/images';

/**
 * MabloMascot Component
 * Features a 3D Claymorphism mascot that reacts to page scroll.
 * Starts centered in the hero section and migrates to the navigation bar.
 */
export function MabloMascot() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  // Check for mobile to adjust final positions
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth the scroll progress for a high-end physical feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform logic: Hero Center -> Top Right Header
  // x: 0 (center) -> calc(50vw - 60px) (right edge)
  const x = useTransform(smoothProgress, [0, 0.15], ['0%', isMobile ? '35%' : '42%']);
  
  // y: 0 (center) -> calc(-50vh + 40px) (top edge)
  const y = useTransform(smoothProgress, [0, 0.15], ['0%', isMobile ? '-46vh' : '-44vh']);

  // scale: 1 -> 0.15
  const scale = useTransform(smoothProgress, [0, 0.15], [1, 0.18]);

  // opacity: slightly fades during movement for smoothness
  const opacity = useTransform(smoothProgress, [0, 0.02, 0.15], [1, 0.9, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <motion.div
        style={{
          x,
          y,
          scale,
          opacity,
        }}
        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
      >
        {/* Claymorphism Shadow Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"
        />

        {/* Mablo the Dog */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            rotate: [0, -2, 2, 0]
          }}
          transition={{
            y: { duration: 0.8, ease: "easeOut" },
            opacity: { duration: 0.8 },
            rotate: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <img
            src={IMAGES.MABLO_MASCOT_HERO_20260207_061031_23}
            alt="Mablo Mascot"
            className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(255,140,66,0.3)]"
          />
          
          {/* Subtle Waving Animation Overlay (Hand move effect simulation) */}
          <motion.div
            animate={{ 
              rotate: [0, 15, 0, 15, 0],
              x: [0, 2, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="absolute right-[20%] top-[40%] w-12 h-12 pointer-events-none"
          />
        </motion.div>

        {/* Interactive "Observing" Look (Active after scroll) */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0.14, 0.15], [0, 1])
          }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20 shadow-sm"
        >
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
            Mablo en línea
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
