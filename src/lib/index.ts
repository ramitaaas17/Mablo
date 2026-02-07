/**
 * Mablo Digital Agency - 2026
 * Core constants, types, and data structures.
 */

export const ROUTE_PATHS = {
  HOME: '/',
  SERVICES: '#services',
  ABOUT: '#about',
  CONTACT: '#contact',
} as const;

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: 'web' | 'data' | 'optimization';
  accentColor: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Desarrollo Web',
    subtitle: 'Presencia Digital',
    description: 'Creamos sitios web dinámicos y estáticos que no solo se ven bien, sino que están construidos con ingeniería de primer nivel para escalar con tu negocio.',
    iconType: 'web',
    accentColor: 'var(--primary)',
  },
  {
    id: 'data-migration',
    title: 'Datos & Migración',
    subtitle: 'De Excel a SQL',
    description: 'Transformamos tus hojas de cálculo desordenadas y manuales en bases de datos robustas y estructuradas, optimizando el acceso y la seguridad de tu información.',
    iconType: 'data',
    accentColor: 'var(--secondary)',
  },
  {
    id: 'process-optimization',
    title: 'Optimización',
    subtitle: 'Flujos de Trabajo',
    description: 'Analizamos y automatizamos tus procesos operativos para eliminar cuellos de botella, reduciendo el error humano y maximizando la productividad.',
    iconType: 'optimization',
    accentColor: 'oklch(0.70 0.12 150)',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 1,
    name: 'Alejandro V.',
    role: 'Socio Fundador / Backend',
    specialty: 'Arquitectura de Sistemas',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    bio: 'Ingeniero especializado en infraestructuras escalables y seguridad de datos.',
  },
  {
    id: 2,
    name: 'Sofía M.',
    role: 'Socia Fundadora / Datos',
    specialty: 'Ingeniería de Datos',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Experta en transformar el caos de las hojas de cálculo en bases de datos relacionales eficientes.',
  },
  {
    id: 3,
    name: 'Mateo R.',
    role: 'Socio Fundador / Frontend',
    specialty: 'UX & Interfaces 3D',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Apasionado por crear experiencias digitales que humanizan la tecnología.',
  },
  {
    id: 4,
    name: 'Valentina P.',
    role: 'Socia Fundadora / Procesos',
    specialty: 'Optimización Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Ingeniera de procesos dedicada a simplificar flujos de trabajo complejos mediante código.',
  },
];

export const NAV_LINKS = [
  { label: 'Servicios', href: ROUTE_PATHS.SERVICES },
  { label: 'Nosotros', href: ROUTE_PATHS.ABOUT },
  { label: 'Contacto', href: ROUTE_PATHS.CONTACT },
];

/**
 * Helper to smooth scroll to an element by ID
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
