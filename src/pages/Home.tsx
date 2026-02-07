import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Code, 
  Database, 
  Cpu, 
  ArrowRight, 
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';
import { 
  TEAM_DATA, 
  scrollToSection, 
  ROUTE_PATHS 
} from '@/lib/index';
import { MabloMascot } from '@/components/MabloMascot';
import { ServiceCards } from '@/components/ServiceCards';
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
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0.5, 1]);
  const heroX = useTransform(scrollYProgress, [0, 0.2], [-50, 0]);

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
    <div className="relative">
      {/* Mascota Interactiva - Controlada por Scroll */}
      <MabloMascot />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden"
      >
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ opacity: heroOpacity, x: heroX }}
            className="max-w-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-[#2C3E50] leading-tight mb-6"
            >
              Tu negocio, <br />
              <span className="text-primary">organizado</span> y en línea.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Dejamos atrás tus Excel y creamos tu nueva web. Soluciones digitales diseñadas por ingenieros para empresas reales que buscan crecer sin fricción.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white text-lg"
                onClick={() => scrollToSection(ROUTE_PATHS.CONTACT)}
              >
                Empezar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary/5 text-lg"
                onClick={() => scrollToSection(ROUTE_PATHS.SERVICES)}
              >
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Space for Mablo (MabloMascot handles its own positioning via fixed/absolute) */}
          <div className="hidden lg:block h-[500px]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-wider uppercase text-sm"
            >
              Nuestra Experiencia
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2C3E50]">
              Ingeniería aplicada a tu crecimiento
            </h2>
            <p className="text-lg text-muted-foreground">
              No solo hacemos webs; optimizamos la columna vertebral de tu operación digital.
            </p>
          </div>

          <ServiceCards />
        </div>
      </section>

      {/* About Section - The 4 Engineers */}
      <section id="about" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#2C3E50]">
                Un equipo de ingenieros con una misión
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fundada por cuatro ingenieros de la UP, Mablo nació de la necesidad de cerrar la brecha entre la complejidad técnica y la usabilidad empresarial.
              </p>
              <p className="text-lg text-muted-foreground">
                Creemos en el código limpio, las bases de datos sólidas y las interfaces que cualquiera pueda usar. Mablo, nuestra mascota, representa esa amabilidad técnica que nos define.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border-l-4 border-primary">
                  <div className="text-3xl font-bold text-primary mb-1">+50</div>
                  <div className="text-sm text-muted-foreground">Proyectos Optimizados</div>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border-l-4 border-secondary">
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Eficiencia en Datos</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={IMAGES.TEAM_WORKSPACE_1} 
                  alt="Mablo Team Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/20">
                 <img src={IMAGES.TEAM_AVATARS_20260207_061030_27} alt="Team avatars" className="w-24 h-auto" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_DATA.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-3">
                        <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#2C3E50]">{member.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-[#FAFAFA] rounded-[3rem] overflow-hidden shadow-2xl border border-border/50 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-secondary text-white relative">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-8">¿Hablamos de tu próximo gran paso?</h2>
                <p className="text-lg text-white/80 mb-12">
                  Ya sea que necesites una web desde cero o poner orden a tus datos, estamos listos para ayudarte.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase font-bold tracking-wider">Email</p>
                      <p className="text-lg">hola@mablo.tech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase font-bold tracking-wider">Disponibilidad</p>
                      <p className="text-lg">Proyectos 2026 Abiertos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32 blur-3xl" />
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20">
              {isSubmitSuccessful ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">¡Mensaje recibido!</h3>
                  <p className="text-muted-foreground">Mablo ya está moviendo la cola. Te contactaremos en menos de 24 horas.</p>
                  <Button 
                    className="mt-8 rounded-full"
                    variant="outline"
                    onClick={() => window.location.reload()}
                  >
                    Enviar otro mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2C3E50]">Nombre Completo</label>
                    <Input 
                      {...register('name')}
                      placeholder="Tu nombre"
                      className="rounded-xl bg-white border-border focus:ring-primary"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2C3E50]">Email Corporativo</label>
                    <Input 
                      {...register('email')}
                      type="email"
                      placeholder="tu@empresa.com"
                      className="rounded-xl bg-white border-border focus:ring-primary"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#2C3E50]">¿En qué podemos ayudarte?</label>
                    <Textarea 
                      {...register('message')}
                      placeholder="Cuéntanos sobre tu proyecto, tus Excel o tus metas..."
                      className="min-h-[120px] rounded-xl bg-white border-border focus:ring-primary"
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full rounded-xl h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-12 bg-[#FAFAFA] border-t border-border/50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            Hecho con ❤️ y código por <span className="text-primary font-bold">Mablo</span>. © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
