'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { cn, getTheme, setTheme } from '@/lib/utils';
import LanguageSelector from '../ui/LanguageSelector';

// Définition des liens de navigation en français
const frNavigationLinks = [
  { name: 'Accueil', href: '/fr' },
  { name: 'À propos', href: '/fr/a-propos' },
  { 
    name: 'Services', 
    href: '/fr/services',
    submenu: [
      { name: 'Électricité & dépannage', href: '/fr/services/electricite-depannage' },
      { name: 'Serrurerie & dépannage', href: '/fr/services/serrurerie-depannage' },
      { name: 'Nettoyage & conciergerie', href: '/fr/services/nettoyage-conciergerie' },
      { name: 'Débarras & déménagement', href: '/fr/services/debarras-demenagement' },
    ]
  },
  { name: 'Projets', href: '/fr/projets-realises' },
  { name: 'Contact', href: '/fr/contact' },
];

// Définition des liens de navigation en anglais
const enNavigationLinks = [
  { name: 'Home', href: '/en' },
  { name: 'About', href: '/en/a-propos' },
  { 
    name: 'Services', 
    href: '/en/services',
    submenu: [
      { name: 'Construction & Renovation', href: '/en/services/construction-renovation' },
      { name: 'Cleaning Services', href: '/en/services/cleaning' },
      { name: 'Moving & Clearance', href: '/en/services/moving-clearance' },
    ]
  },
  { name: 'Projects', href: '/en/projets-realises' },
  { name: 'Contact', href: '/en/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [theme, setCurrentTheme] = useState<string>('light');
  const pathname = usePathname();

  // Déterminer la langue actuelle
  const currentLocale = pathname.split('/')[1] || 'fr';
  const navigationLinks = currentLocale === 'en' ? enNavigationLinks : frNavigationLinks;

  // Effet pour détecter le défilement et ajuster le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet pour initialiser le thème
  useEffect(() => {
    // Initialiser le thème
    const currentTheme = getTheme();
    setCurrentTheme(currentTheme);
    setTheme(currentTheme);

    // Écouter les changements de thème
    const handleThemeChange = (e: CustomEvent) => {
      setCurrentTheme(e.detail);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themeChange', handleThemeChange as EventListener);
  }, []);

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  // Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Fonction pour gérer l'ouverture/fermeture des sous-menus
  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  // Fermer le menu mobile quand on navigue
  const handleNavigate = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm py-2' 
          : 'bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-sm py-4'
      )}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Accueil Globibat">
            <Image
              src="/images/logo/Logo Globibat.png"
              alt="Globibat Logo"
              width={200}
              height={70}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-4" aria-label="Navigation principale">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-white px-2 py-1 flex items-center',
                      isActive(link.href) 
                        ? 'text-white' 
                        : 'text-white'
                    )}
                    aria-expanded={activeSubmenu === link.name}
                    aria-haspopup="true"
                    onClick={() => toggleSubmenu(link.name)}
                  >
                    {link.name}
                    <svg 
                      className="ml-1 h-4 w-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-white hover:underline px-2 py-1',
                      isActive(link.href) 
                        ? 'text-white font-bold' 
                        : 'text-white'
                    )}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Sous-menu pour les services */}
                {link.submenu && (
                  <div 
                    className="absolute left-0 mt-1 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`menu-button-${link.name}`}
                  >
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className={cn(
                            'block px-4 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                            isActive(sublink.href) 
                              ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-700 font-bold' 
                              : 'text-gray-700 dark:text-gray-300'
                          )}
                          role="menuitem"
                          onClick={handleNavigate}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Sélecteur de langue */}
            <LanguageSelector />
            
            {/* Bouton de thème - Déplacé dans le header */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ml-2"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              {theme === 'dark' ? (
                <FaSun size={18} aria-hidden="true" />
              ) : (
                <FaMoon size={18} aria-hidden="true" />
              )}
            </button>
            
            {/* Bouton Devis */}
            <Link
              href={`/${currentLocale}/contact#devis`}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-md transition-colors ml-2 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
              onClick={handleNavigate}
            >
              {currentLocale === 'en' ? 'Get a Quote' : 'Obtenir un devis'}
            </Link>
          </nav>

          {/* Boutons mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Sélecteur de langue version mobile */}
            <LanguageSelector />
            
            {/* Bouton thème version mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              {theme === 'dark' ? (
                <FaSun size={18} aria-hidden="true" />
              ) : (
                <FaMoon size={18} aria-hidden="true" />
              )}
            </button>
            
            <button
              type="button"
              className="p-1.5 rounded-md text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 lg:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
          <nav className="flex-1 mt-8" aria-label="Navigation mobile">
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={cn(
                          'flex justify-between items-center w-full py-2 text-lg font-medium',
                          isActive(link.href) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        )}
                        aria-expanded={activeSubmenu === link.name}
                        aria-controls={`submenu-${link.name}`}
                      >
                        {link.name}
                        <svg
                          className={cn(
                            'w-5 h-5 transition-transform',
                            activeSubmenu === link.name ? 'transform rotate-180' : ''
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      {activeSubmenu === link.name && (
                        <ul 
                          id={`submenu-${link.name}`}
                          className="mt-2 pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700"
                          role="menu"
                          aria-label={`Sous-menu de ${link.name}`}
                        >
                          {link.submenu.map((sublink) => (
                            <li key={sublink.name} role="none">
                              <Link
                                href={sublink.href}
                                className={cn(
                                  'block py-1 text-base',
                                  isActive(sublink.href) ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-600 dark:text-gray-400'
                                )}
                                onClick={handleNavigate}
                                role="menuitem"
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-2 text-lg font-medium',
                        isActive(link.href) ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300'
                      )}
                      onClick={handleNavigate}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link
              href={`/${currentLocale}/contact#devis`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-bold shadow-md transition-colors focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onClick={handleNavigate}
            >
              {currentLocale === 'en' ? 'Get a Quote' : 'Obtenir un devis'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 