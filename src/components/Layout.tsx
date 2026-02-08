import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, scrollToSection } from '@/lib/index.ts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IMAGES } from '@/assets/images';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'services', 'about', 'contact'];
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - viewportHeight <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Navbar única mejorada */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-3 md:py-4",
          isScrolled && "shadow-sm"
        )}
        style={{ backgroundColor: '#ffffff', borderColor: 'rgba(0,0,0,0.08)' }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo: icono pequeño + Mablo (estilo referencia) */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <img 
              src={IMAGES.VISUALES_MABLO_MABLO_WORK} 
              alt="Mablo" 
              className="w-9 h-9 md:w-10 md:h-10 object-contain"
            />
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#2C3E50]">
              Mablo
            </span>
          </a>

          {/* Desktop Navigation: enlaces gris, botón naranja */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-[#2C3E50]/80 hover:text-[#2C3E50]"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
            
            <Button 
              className="rounded-full px-6 font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: '#8B7BB8' }}
              onClick={() => scrollToSection('#contact')}
            >
              Contactar
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2.5 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <motion.nav 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ staggerChildren: 0.05 }}
              className="flex flex-col gap-3"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-4 px-6 text-xl font-semibold text-foreground hover:text-primary hover:bg-muted/50 rounded-2xl transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button 
                className="w-full mt-6 py-6 text-lg rounded-2xl font-bold text-white"
                style={{ backgroundColor: '#8B7BB8' }}
                onClick={() => {
                  scrollToSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contactar
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-lg font-bold">
                  M
                </span>
                <span className="text-xl font-bold tracking-tighter">Mablo</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-6">
                Agencia de ingeniería digital enfocada en transformar negocios tradicionales 
                en empresas ágiles, organizadas y preparadas para el futuro.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-foreground">Navegación</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Términos de Servicio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Mablo Digital Agency. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart size={14} className="text-destructive fill-destructive" /> y código por Mablo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
