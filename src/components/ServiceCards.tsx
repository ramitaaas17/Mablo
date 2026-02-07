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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconMap: Record<Service['iconType'], string> = {
  web: IMAGES.WEB_DEVELOPMENT_ICON_20260207_061031_24,
  data: IMAGES.DATA_MIGRATION_ICON_20260207_061030_25,
  optimization: IMAGES.OPTIMIZATION_ICON_20260207_061029_26,
};

export function ServiceCards() {
  return (
    <section id="services" className="py-24 px-4 overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-6"
          >
            Soluciones con <span className="text-primary">Ingeniería Real</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Transformamos procesos complejos en experiencias digitales simples y eficientes.
            Sin fricción, sin miedo, solo resultados.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Claymorphism Card Background */}
              <div className="absolute inset-0 bg-card rounded-[3rem] shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white/40 transition-shadow duration-300 group-hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.8),0_30px_60px_-15px_rgba(0,0,0,0.15)]" />
              
              <div className="relative p-10 flex flex-col items-center text-center">
                {/* 3D Icon Wrapper */}
                <div className="relative w-48 h-48 mb-8">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotateZ: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img 
                      src={iconMap[service.iconType]} 
                      alt={service.title} 
                      className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-muted text-muted-foreground">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div 
                  className="mt-8 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:rounded-xl"
                  style={{ 
                    backgroundColor: `color-mix(in oklch, ${service.accentColor} 10%, transparent)`,
                    color: service.accentColor
                  }}
                >
                  <motion.div
                    className="flex items-center gap-2 font-bold text-sm overflow-hidden whitespace-nowrap"
                    initial={false}
                  >
                    <ArrowRight className="w-5 h-5" />
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
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        >
          <div className="flex items-center gap-2 font-mono text-xs">
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
    </section>
  );
}
