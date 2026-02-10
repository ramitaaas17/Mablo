import { motion } from 'framer-motion';
import { IMAGES } from '@/assets/images';
import { SERVICES_DATA, Service } from '@/lib/index';
import { ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 28,
    },
  },
};

const iconMap: Record<Service['iconType'], string> = {
  web: IMAGES.VISUALES_MABLO_WEB_DESIGN,
  data: IMAGES.VISUALES_MABLO_DATA_BASE,
  optimization: IMAGES.VISUALES_MABLO_ANALISIS,
};

export function ServiceCards() {
  return (
    <div className="w-full">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 28 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Tarjeta blanca con borde morado claro (estilo referencia) */}
              <div 
                className="absolute inset-0 rounded-3xl shadow-sm transition-all duration-300 group-hover:shadow-md"
                style={{ backgroundColor: '#ffffff', border: '2px solid rgba(139, 92, 246, 0.35)' }}
              />
              
              <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
                {/* Icono 3D */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4 md:mb-6">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotateZ: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img 
                      src={iconMap[service.iconType]} 
                      alt={service.title} 
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>

                <div 
                  className="mt-6 md:mt-8 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:rounded-xl"
                  style={{ 
                    backgroundColor: `color-mix(in oklch, ${service.accentColor} 10%, transparent)`,
                    color: service.accentColor
                  }}
                >
                  <motion.div
                    className="flex items-center gap-2 font-bold text-sm overflow-hidden whitespace-nowrap"
                    initial={false}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden group-hover:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saber más
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Accent Glow */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: service.accentColor }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Subtle Reference */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 28, delay: 0.4 }}
          className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-primary" /> React / Next.js
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-secondary" /> Python / SQL
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent" /> Automation / GSAP
          </div>
        </motion.div>
    </div>
  );
}
