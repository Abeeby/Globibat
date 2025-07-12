import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Fonction pour fusionner les classes Tailwind de manière optimisée
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Fonction pour formater les numéros de téléphone
export function formatPhoneNumber(phoneNumber: string): string {
  // Format suisse: +41 21 505 00 62
  return phoneNumber.replace(/(\+\d{2})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

// Fonction pour générer des slugs URL-friendly
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

// Fonction pour tronquer un texte à une longueur donnée
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Fonction pour obtenir l'URL absolue
export function getAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globibat.com';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

// Fonction pour générer un ID unique
export function generateId(prefix = ''): string {
  return `${prefix}${Math.random().toString(36).substring(2, 9)}`;
}

// Fonction pour obtenir le thème actuel
export function getTheme(): string {
  if (typeof window === 'undefined') return 'light';
  
  // Vérifier d'abord la préférence stockée
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  
  // Sinon, vérifier la préférence du système
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

// Fonction pour définir le thème
export function setTheme(theme: string): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Émettre un événement pour informer les composants du changement de thème
  window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
}

// Fonction pour basculer entre les thèmes
export function toggleTheme(): void {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
} 