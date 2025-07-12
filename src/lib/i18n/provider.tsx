import React, { createContext, useContext, ReactNode, useState } from 'react';

// Définir le type Locale directement ici pour éviter les dépendances circulaires
export type Locale = 'fr' | 'en';
const LOCALE_DEFAULT: Locale = 'fr';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: LOCALE_DEFAULT,
  setLocale: () => {},
});

export const useI18n = () => useContext(I18nContext);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(LOCALE_DEFAULT);
  
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    console.log(`Changing locale to ${newLocale}`);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
} 