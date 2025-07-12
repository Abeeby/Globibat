import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { translations } from './translations';
import { I18nProvider, Locale } from './provider';

// Exporter le provider et le type Locale
export { I18nProvider };
export type { Locale };

// Définitions des locales
export const defaultLocale: Locale = 'fr';
export const locales: Locale[] = ['fr', 'en'];

interface LocaleConfig {
  name: string;
  flag: string;
  label: string;
}

export const localeConfigs: Record<Locale, LocaleConfig> = {
  fr: {
    name: 'Français',
    flag: '🇨🇭',
    label: 'Changer la langue en Français',
  },
  en: {
    name: 'English',
    flag: '🇬🇧',
    label: 'Switch language to English',
  },
};

export function useLocale() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = locales.find((locale) =>
    pathname?.startsWith(`/${locale}/`)
  ) || defaultLocale;

  const switchLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === currentLocale) return;

      const newPath = pathname?.replace(
        new RegExp(`^/(${locales.join('|')})?`),
        `/${newLocale}`
      ) || `/${newLocale}`;

      router.push(newPath);
      router.refresh();

      // Mettre à jour les métadonnées pour le SEO
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
        document
          .querySelector('meta[property="og:locale"]')
          ?.setAttribute('content', newLocale === 'fr' ? 'fr_CH' : 'en_GB');
      }
    },
    [pathname, currentLocale, router]
  );

  return {
    currentLocale,
    switchLocale,
    localeConfig: localeConfigs[currentLocale],
  };
}

// Fonction utilitaire pour obtenir l'URL localisée
export function getLocalizedUrl(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(?:fr|en)?/, '');
  return `/${locale}${cleanPath}`;
}

// Hook pour obtenir les traductions
export function useTranslations() {
  const { currentLocale } = useLocale();

  return {
    t: (key: string, params?: Record<string, string>) => {
      let translation = translations[currentLocale]?.[key] || key;

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          translation = translation.replace(`{{${key}}}`, value);
        });
      }

      return translation;
    },
  };
} 