'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { getTheme, setTheme } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  // Initialiser le thème
  useEffect(() => {
    // Appliquer le thème immédiatement pour éviter le flash
    const savedTheme = getTheme();
    setTheme(savedTheme);
    
    // Marquer le composant comme monté
    setMounted(true);
    
    // Écouter les changements de préférence système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const currentTheme = localStorage.getItem('theme');
      // Ne mettre à jour que si l'utilisateur n'a pas explicitement choisi un thème
      if (!currentTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Éviter les problèmes d'hydratation
  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="h-16"></div> {/* Espace pour le header */}
        <main className="flex-grow pt-24">{children}</main>
        <div className="h-64"></div> {/* Espace pour le footer */}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
    </div>
  );
} 