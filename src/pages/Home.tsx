import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  ArrowRight,
  Linkedin,
  Github,
} from 'lucide-react';
import { 
  TEAM_DATA, 
  scrollToSection, 
  ROUTE_PATHS 
} from '@/lib/index';
import { ServiceCards } from '@/components/ServiceCards';
import { MabloMascot } from '@/components/MabloMascot';
import { Typewriter } from '@/components/Typewriter';
import { ScrollVisualElements } from '@/components/ScrollVisualElements';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { IMAGES } from '@/assets/images';

const contactSchema = z.object({
  name: z.string().min(2, 'Por favor, ingresa tu nombre'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  message: z.string().min(10, 'Cuéntanos un poco más sobre tu proyecto'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export default function Home() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isSubmitSuccessful } 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
  };

  return (
    <div className="relative bg-white">
      {/* Hero Section - snap + animaciones fluidas */}
      <section 
        id="hero" 
        className="snap-section relative flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Elementos visuales flotantes - en los bordes */}
        <ScrollVisualElements />
        
        <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
          <div className="max-w-6xl mx-auto">
            {/* Grid de 2 columnas en desktop */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Columna izquierda - Texto */}
              <div className="text-center lg:text-left space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 90, damping: 24, delay: 0.1 }}
                  className="space-y-3 md:space-y-4"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2C3E50] leading-tight">
                    Mablo
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#2C3E50]">
                    Tu negocio,{' '}
                    <span className="text-primary">
                      <Typewriter text="organizado" speed={80} delay={400} />
                    </span>
                    {' '}y en línea.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 90, damping: 24, delay: 0.3 }}
                  className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <Button 
                    size="lg" 
                    className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold shadow-lg"
                    style={{ backgroundColor: '#8B7BB8', color: '#fff' }}
                    onClick={() => scrollToSection(ROUTE_PATHS.CONTACT)}
                  >
                    Contactar
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg border-2 border-[#8B7BB8] text-[#8B7BB8] hover:bg-[#8B7BB8]/10 font-semibold"
                    onClick={() => scrollToSection(ROUTE_PATHS.SERVICES)}
                  >
                    Ver servicios
                  </Button>
                </motion.div>
              </div>

              {/* Columna derecha - Mascota Mablo (mabloWork) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...springTransition, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-end relative"
                style={{ zIndex: 20 }}
              >
                <div className="w-full max-w-md lg:max-w-lg">
                  <MabloMascot />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative gradient blobs - detrás de todo */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 0 }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" style={{ zIndex: 0 }} />
      </section>

      {/* Servicios Section - snap + animación suave */}
      <section id="services" className="snap-section py-16 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#FAFAFA] flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4 md:mb-6">
              Servicios
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Dale las herramientas del mañana a tu negocio, organizado y en línea.
            </p>
          </motion.div>

          <ServiceCards />
        </div>
      </section>

      {/* About Section - Nosotros - snap + animaciones fluidas */}
      <section id="about" className="snap-section py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-[#2C3E50]">
                Un equipo de ingenieros con una misión
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Fundada por cuatro ingenieros de la UP, Mablo nació de la necesidad de cerrar la brecha entre la complejidad técnica y la usabilidad empresarial.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Creemos en el código limpio, las bases de datos sólidas y las interfaces que cualquiera pueda usar. Mablo, nuestra mascota, representa esa amabilidad técnica que nos define.
              </p>
              
              <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl md:rounded-3xl border-l-4 border-primary">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">+50</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Proyectos Optimizados</div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl md:rounded-3xl border-l-4 border-secondary">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">Eficiencia en Datos</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 80, damping: 28 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.TEAM_WORKSPACE_1} 
                  alt="Mablo Team Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 md:border-4 border-white overflow-hidden">
                <img src={IMAGES.VISUALES_MABLO_MABLO_SALUDO} alt="Mablo" className="w-16 sm:w-24 md:w-32 h-auto object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Team Cards - animación escalonada suave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {TEAM_DATA.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 80, damping: 28, delay: index * 0.08 }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                      <div className="flex gap-2 md:gap-3">
                        <Button size="icon" variant="secondary" className="rounded-full w-9 h-9 md:w-10 md:h-10 shadow-lg">
                          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full w-9 h-9 md:w-10 md:h-10 shadow-lg">
                          <Github className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-[#2C3E50] mb-1">{member.name}</h3>
                    <p className="text-primary text-xs md:text-sm font-semibold mb-2 md:mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - snap + animación suave */}
      <section id="contact" className="snap-section py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-[#FAFAFA] relative overflow-hidden flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-4 md:mb-6">
              Contacto
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-border/30"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left side - Info */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16 bg-gradient-to-br from-secondary to-secondary/90 text-white relative overflow-hidden">
                <div className="relative z-10 space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">¿Hablamos de tu próximo gran paso?</h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      Ya sea que necesites una web desde cero o poner orden a tus datos, estamos listos para ayudarte.
                    </p>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/70 uppercase font-bold tracking-wider mb-1">Email</p>
                        <p className="text-base md:text-xl font-semibold">hola@mablo.tech</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/70 uppercase font-bold tracking-wider mb-1">Disponibilidad</p>
                        <p className="text-base md:text-xl font-semibold">Proyectos 2026 Abiertos</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-8">
                    <img 
                      src={IMAGES.VISUALES_MABLO_MABLO_WORK} 
                      alt="Mablo trabajando" 
                      className="w-32 md:w-48 h-auto object-contain opacity-20"
                    />
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-48 -mb-48 blur-3xl" />
              </div>

              {/* Right side - Form */}
              <div className="p-8 sm:p-10 md:p-12 lg:p-16">
                {isSubmitSuccessful ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 28 }}
                    className="text-center py-12 md:py-20"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <CheckCircle className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#2C3E50]">¡Mensaje recibido!</h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">Mablo ya está moviendo la cola. Te contactaremos en menos de 24 horas.</p>
                    <Button 
                      className="rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg"
                      variant="outline"
                      onClick={() => window.location.reload()}
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-xs md:text-sm font-bold text-[#2C3E50] uppercase tracking-wider">Nombre Completo</label>
                      <Input 
                        {...register('name')}
                        placeholder="Tu nombre"
                        className="rounded-xl md:rounded-2xl h-12 md:h-14 bg-[#FAFAFA] border-transparent focus:border-primary focus:ring-primary text-base md:text-lg"
                      />
                      {errors.name && <p className="text-xs md:text-sm text-destructive">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      <label className="text-xs md:text-sm font-bold text-[#2C3E50] uppercase tracking-wider">Email Corporativo</label>
                      <Input 
                        {...register('email')}
                        type="email"
                        placeholder="tu@empresa.com"
                        className="rounded-xl md:rounded-2xl h-12 md:h-14 bg-[#FAFAFA] border-transparent focus:border-primary focus:ring-primary text-base md:text-lg"
                      />
                      {errors.email && <p className="text-xs md:text-sm text-destructive">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2 md:space-y-3">
                      <label className="text-xs md:text-sm font-bold text-[#2C3E50] uppercase tracking-wider">¿En qué podemos ayudarte?</label>
                      <Textarea 
                        {...register('message')}
                        placeholder="Cuéntanos sobre tu proyecto, tus Excel o tus metas..."
                        className="min-h-[120px] md:min-h-[160px] rounded-xl md:rounded-2xl bg-[#FAFAFA] border-transparent focus:border-primary focus:ring-primary text-base md:text-lg resize-none"
                      />
                      {errors.message && <p className="text-xs md:text-sm text-destructive">{errors.message.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full rounded-xl md:rounded-2xl h-14 md:h-16 text-base md:text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                      style={{ backgroundColor: '#8B7BB8' }}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                      <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 28 }}
            className="flex justify-center mt-10 md:mt-16"
          >
            <img 
              src={IMAGES.VISUALES_MABLO_MABLO_SALUDO} 
              alt="Mablo saludo" 
              className="w-24 md:w-32 h-auto object-contain"
            />
          </motion.div>

          {/* Footer dentro de la última sección para que se vea */}
          <footer className="mt-12 md:mt-16 pt-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Hecho con ❤️ y código por <span className="text-primary font-bold">Mablo</span>. © 2026
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}