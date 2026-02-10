import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/assets/images';

interface FloatingVisual {
  src: string;
  alt: string;
  delay?: number;
  xOffset?: string;
  yOffset?: string;
  size?: 'normal' | 'large';
}

/* Iconos más separados y en los bordes para no estorbar */
const VISUALS: FloatingVisual[] = [
  { src: IMAGES.VISUALES_MABLO_WEB_DESIGN, alt: 'Ventana / Web', delay: 0.05, xOffset: '8%', yOffset: '15%', size: 'normal' },
  { src: IMAGES.VISUALES_MABLO_DATA_BASE, alt: 'Base de datos', delay: 0.1, xOffset: '12%', yOffset: '75%', size: 'normal' },
  { src: IMAGES.VISUALES_MABLO_DATA_BASE, alt: 'Base de datos', delay: 0.08, xOffset: '88%', yOffset: '20%', size: 'normal' },
  { src: IMAGES.VISUALES_MABLO_ANALISIS, alt: 'Engranajes', delay: 0.12, xOffset: '90%', yOffset: '70%', size: 'normal' },
];

/**
 * Elementos flotantes posicionados en los bordes para no interferir con el contenido central.
 */
export function ScrollVisualElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {VISUALS.map((visual, index) => (
        <motion.div
          key={`${visual.alt}-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 24,
              delay: visual.delay ?? index * 0.08,
            },
          }}
          className="absolute flex items-center justify-center"
          style={{
            left: visual.xOffset,
            top: visual.yOffset,
            width: visual.size === 'large' ? 'clamp(4rem, 12vw, 7rem)' : 'clamp(3rem, 10vw, 5.5rem)',
            height: visual.size === 'large' ? 'clamp(4rem, 12vw, 7rem)' : 'clamp(3rem, 10vw, 5.5rem)',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <motion.img
            src={visual.src}
            alt={visual.alt}
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.15))',
            }}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 3.5 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.15,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}