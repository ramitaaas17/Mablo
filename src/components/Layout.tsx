import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS, scrollToSection } from '@/lib/index.ts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-border py-3 shadow-sm"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl font-extrabold tracking-tighter text-foreground flex items-center gap-2 group"
          >
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-lg transition-transform group-hover:scale-110">
              M
            </span>
            <span className="hidden sm:inline">Mablo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mascot Landing Placeholder Area */}
            <div className="w-16 h-16 ml-4 hidden lg:block" id="mablo-dock-target" aria-hidden="true" />
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              onClick={() => scrollToSection('#contact')}
            >
              Empezar ahora
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-primary text-primary-foreground py-6 text-lg rounded-2xl"
                onClick={() => {
                  scrollToSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Empezar ahora
              </Button>
            </nav>
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
