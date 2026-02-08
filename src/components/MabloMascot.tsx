import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/assets/images';

const MABLO_SALUDO = IMAGES.VISUALES_MABLO_MABLO_SALUDO;

/**
 * Mascota estática para el hero: mabloSaludo, grande y responsive.
 * Sin transición al hacer scroll.
 */
export function MabloMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 24, duration: 0.5 }}
      className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] aspect-square flex items-center justify-center"
    >
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 123, 184, 0.18)' }}
      />
      <motion.img
        src={MABLO_SALUDO}
        alt="Mablo - Tu compañero digital"
        className="relative w-full h-full object-contain"
        style={{ filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.06))' }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

/**
 * Versión estática grande para el hero (alias por compatibilidad).
 */
export const MabloMain = () => <MabloMascot />;
