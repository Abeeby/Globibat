'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FaUniversalAccess, FaTextHeight, FaAdjust, FaFont } from 'react-icons/fa';

interface AccessibilityContextType {
  fontSize: number;
  contrast: 'normal' | 'high';
  dyslexicFont: boolean;
  reducedMotion: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleContrast: () => void;
  toggleDyslexicFont: () => void;
  toggleReducedMotion: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

export default function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState<'normal' | 'high'>('normal');
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Charger les préférences sauvegardées
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const { fontSize, contrast, dyslexicFont, reducedMotion } = JSON.parse(savedSettings);
      setFontSize(fontSize);
      setContrast(contrast);
      setDyslexicFont(dyslexicFont);
      setReducedMotion(reducedMotion);
    }
  }, []);

  // Sauvegarder les préférences
  useEffect(() => {
    localStorage.setItem(
      'accessibility-settings',
      JSON.stringify({ fontSize, contrast, dyslexicFont, reducedMotion })
    );

    // Appliquer les styles globaux
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
    document.documentElement.classList.toggle('high-contrast', contrast === 'high');
    document.documentElement.classList.toggle('dyslexic-font', dyslexicFont);
    document.documentElement.classList.toggle('reduced-motion', reducedMotion);
  }, [fontSize, contrast, dyslexicFont, reducedMotion]);

  const increaseFontSize = () => setFontSize((size) => Math.min(size + 2, 24));
  const decreaseFontSize = () => setFontSize((size) => Math.max(size - 2, 12));
  const toggleContrast = () => setContrast((c) => (c === 'normal' ? 'high' : 'normal'));
  const toggleDyslexicFont = () => setDyslexicFont((d) => !d);
  const toggleReducedMotion = () => setReducedMotion((m) => !m);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        contrast,
        dyslexicFont,
        reducedMotion,
        increaseFontSize,
        decreaseFontSize,
        toggleContrast,
        toggleDyslexicFont,
        toggleReducedMotion,
      }}
    >
      {children}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-24 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
        aria-label="Paramètres d'accessibilité"
      >
        <FaUniversalAccess size={24} />
      </button>

      {showControls && (
        <div className="fixed bottom-40 right-6 z-50 w-64 bg-white rounded-lg shadow-xl p-4 space-y-4">
          <h2 className="text-lg font-bold mb-4">Accessibilité</h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTextHeight />
                Taille du texte
              </span>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="p-2 rounded bg-gray-100 hover:bg-gray-200"
                  aria-label="Diminuer la taille du texte"
                >
                  A-
                </button>
                <button
                  onClick={increaseFontSize}
                  className="p-2 rounded bg-gray-100 hover:bg-gray-200"
                  aria-label="Augmenter la taille du texte"
                >
                  A+
                </button>
              </div>
            </div>

            <button
              onClick={toggleContrast}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FaAdjust />
                Contraste élevé
              </span>
              <span className={contrast === 'high' ? 'text-blue-600' : 'text-gray-400'}>
                {contrast === 'high' ? 'Activé' : 'Désactivé'}
              </span>
            </button>

            <button
              onClick={toggleDyslexicFont}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FaFont />
                Police dyslexique
              </span>
              <span className={dyslexicFont ? 'text-blue-600' : 'text-gray-400'}>
                {dyslexicFont ? 'Activée' : 'Désactivée'}
              </span>
            </button>

            <button
              onClick={toggleReducedMotion}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                <FaUniversalAccess />
                Réduire les animations
              </span>
              <span className={reducedMotion ? 'text-blue-600' : 'text-gray-400'}>
                {reducedMotion ? 'Activé' : 'Désactivé'}
              </span>
            </button>
          </div>
        </div>
      )}
    </AccessibilityContext.Provider>
  );
} 