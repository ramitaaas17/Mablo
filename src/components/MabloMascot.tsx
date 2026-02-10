import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/assets/images';

const MABLO_WORK = IMAGES.VISUALES_MABLO_MABLO_WORK;

/**
 * Mascota grande y prominente para el hero usando mabloWork.
 */
export function MabloMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 24, duration: 0.6 }}
      className="relative w-full aspect-square flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      {/* Glow effect - más sutil */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 123, 184, 0.2)' }}
      />
      
      {/* Secondary glow */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1.1, 1.15, 1.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute inset-0 rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: 'rgba(139, 123, 184, 0.15)' }}
      />
      
      {/* Main mascot image - mabloWork */}
      <motion.img
        src={MABLO_WORK}
        alt="Mablo - Tu compañero digital"
        className="relative w-full h-full object-contain z-10"
        style={{ 
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
        }}
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity, 
          ease: 'easeInOut',
          times: [0, 0.5, 1]
        }}
      />
      
      {/* Subtle particles effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            top: `${30 + i * 20}%`,
            left: `${20 + i * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut'
          }}
        />
      ))}
    </motion.div>
  );
}

/**
 * Versión estática grande para el hero (alias por compatibilidad).
 */
export const MabloMain = () => <MabloMascot />;