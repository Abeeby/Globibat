'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = pathname.split('/')[1] || 'fr';

  // Fermer le menu lors d'un clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Changer de langue
  const switchLanguage = (locale: string) => {
    const newPathname = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}/${newPathname}`);
    setIsOpen(false);
  };

  return (
    <div className="language-selector relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-3 py-2"
        aria-label={currentLocale === 'fr' ? 'Changer de langue' : 'Change language'}
      >
        <FaGlobe className="h-5 w-5" aria-hidden="true" />
        <span className="font-medium uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <button
            onClick={() => switchLanguage('fr')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              currentLocale === 'fr' ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
            disabled={currentLocale === 'fr'}
          >
            Français
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
              currentLocale === 'en' ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'
            }`}
            disabled={currentLocale === 'en'}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
} 