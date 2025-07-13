'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projets réalisés', href: '/projets-realises' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Gérer l'accessibilité clavier
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand la route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 dark:bg-gray-900 shadow-lg' : 'bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Navigation principale"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Globibat - Accueil">
            <Image
              src="/images/logo/Logo Globibat.png"
              alt="Logo Globibat"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  pathname === item.href
                    ? 'text-blue-400 font-bold aria-current="page"'
                    : 'text-white'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+41215050062"
                className="flex items-center space-x-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                aria-label="Appeler Globibat au +41 21 505 00 62"
              >
                <FaPhone aria-hidden="true" />
                <span>+41 21 505 00 62</span>
              </a>
              <a
                href="mailto:info@globibat.com"
                className="flex items-center space-x-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                aria-label="Envoyer un email à info@globibat.com"
              >
                <FaEnvelope aria-hidden="true" />
                <span>info@globibat.com</span>
              </a>
            </div>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="sr-only">{isOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
            {isOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu mobile avec transition animée */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 dark:bg-gray-900 shadow-lg overflow-hidden"
            role="menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-blue-400 bg-gray-800'
                      : 'text-white hover:text-blue-400 hover:bg-gray-800'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-4 space-y-3">
                <a
                  href="tel:+41215050062"
                  className="flex items-center space-x-2 text-base font-medium text-blue-400 hover:text-blue-300"
                  aria-label="Appeler Globibat au +41 21 505 00 62"
                  role="menuitem"
                >
                  <FaPhone aria-hidden="true" />
                  <span>+41 21 505 00 62</span>
                </a>
                <a
                  href="mailto:info@globibat.com"
                  className="flex items-center space-x-2 text-base font-medium text-blue-400 hover:text-blue-300"
                  aria-label="Envoyer un email à info@globibat.com"
                  role="menuitem"
                >
                  <FaEnvelope aria-hidden="true" />
                  <span>info@globibat.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 