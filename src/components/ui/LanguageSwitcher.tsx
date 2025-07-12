'use client';

import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useLocale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { currentLocale, switchLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  
  // Les langues disponibles
  const locales = ['fr', 'en']; // Ajouter 'de' plus tard pour l'allemand
  
  // Récupérer les noms des langues
  const languageNames: Record<string, string> = {
    fr: 'Français',
    en: 'English',
    de: 'Deutsch',
  };
  
  // Fermer le menu déroulant lorsque l'utilisateur clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  // Obtenir le drapeau correspondant à la langue
  const getFlag = (localeCode: string) => {
    switch (localeCode) {
      case 'fr':
        return '🇫🇷';
      case 'en':
        return '🇬🇧';
      case 'de':
        return '🇩🇪';
      default:
        return '🌐';
    }
  };
  
  // Gestionnaire de changement de langue
  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    if (newLocale !== currentLocale) {
      switchLocale(newLocale as 'fr' | 'en');
    }
  };
  
  return (
    <div className={`language-switcher relative ${className}`}>
      <button
        className="flex items-center p-2 text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-label="Changer la langue"
      >
        <FaGlobe className="mr-2" />
        <span className="hidden sm:inline-block">{getFlag(currentLocale)} {languageNames[currentLocale]}</span>
        <span className="sm:hidden">{getFlag(currentLocale)}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                  currentLocale === loc
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{getFlag(loc)}</span>
                <span>{languageNames[loc]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 