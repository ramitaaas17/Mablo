import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/assets/images';

interface FloatingVisual {
  src: string;
  alt: string;
  delay?: number;
  xOffset?: string;
  yOffset?: string;
  /** Tamaño extra para el elemento (ej. base de datos grande a la derecha) */
  size?: 'normal' | 'large';
}

/* Solo 4 elementos como en el diseño: ventana, base de datos (izq), base de datos (der, más grande), engranajes. Cerca de Mablo. */
const VISUALS: FloatingVisual[] = [
  { src: IMAGES.VISUALES_MABLO_WEB_DESIGN, alt: 'Ventana / Web', delay: 0.05, xOffset: '26%', yOffset: '26%', size: 'normal' },
  { src: IMAGES.VISUALES_MABLO_DATA_BASE, alt: 'Base de datos', delay: 0.1, xOffset: '20%', yOffset: '56%', size: 'normal' },
  { src: IMAGES.VISUALES_MABLO_DATA_BASE, alt: 'Base de datos', delay: 0.08, xOffset: '68%', yOffset: '24%', size: 'large' },
  { src: IMAGES.VISUALES_MABLO_ANALISIS, alt: 'Engranajes', delay: 0.12, xOffset: '72%', yOffset: '60%', size: 'normal' },
];

/**
 * Elementos grandes y cerca de Mablo: ventana, bases de datos, engranajes.
 */
export function ScrollVisualElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {VISUALS.map((visual, index) => (
        <motion.div
          key={`${visual.alt}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 0.9,
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
            width: visual.size === 'large' ? 'clamp(5rem, 18vw, 10rem)' : 'clamp(4rem, 14vw, 8rem)',
            height: visual.size === 'large' ? 'clamp(5rem, 18vw, 10rem)' : 'clamp(4rem, 14vw, 8rem)',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <motion.img
            src={visual.src}
            alt={visual.alt}
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 8px 20px rgba(139, 92, 246, 0.25))',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2.8 + index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
