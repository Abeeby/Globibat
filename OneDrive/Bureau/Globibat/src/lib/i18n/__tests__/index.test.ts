import { useLocale, useTranslations, getLocalizedUrl } from '../index';

// Mock de next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/fr/accueil',
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}));

describe('i18n', () => {
  describe('useLocale', () => {
    it('should return current locale from pathname', () => {
      const { currentLocale } = useLocale();
      expect(currentLocale).toBe('fr');
    });

    it('should return default locale when no locale in pathname', () => {
      jest.spyOn(require('next/navigation'), 'usePathname').mockReturnValue('/accueil');
      const { currentLocale } = useLocale();
      expect(currentLocale).toBe('fr');
    });

    it('should switch locale correctly', () => {
      const { switchLocale } = useLocale();
      const router = require('next/navigation').useRouter();
      
      switchLocale('en');
      expect(router.push).toHaveBeenCalledWith('/en/accueil');
      expect(router.refresh).toHaveBeenCalled();
    });
  });

  describe('useTranslations', () => {
    it('should return correct translation for key', () => {
      const { t } = useTranslations();
      expect(t('common.contact')).toBe('Contact');
    });

    it('should handle missing translations', () => {
      const { t } = useTranslations();
      expect(t('missing.key')).toBe('missing.key');
    });

    it('should replace parameters in translations', () => {
      const { t } = useTranslations();
      expect(t('common.welcome', { name: 'John' })).toBe('Bienvenue John');
    });
  });

  describe('getLocalizedUrl', () => {
    it('should generate correct localized URL', () => {
      expect(getLocalizedUrl('/accueil', 'en')).toBe('/en/accueil');
      expect(getLocalizedUrl('/fr/accueil', 'en')).toBe('/en/accueil');
    });

    it('should handle root path', () => {
      expect(getLocalizedUrl('/', 'en')).toBe('/en');
    });
  });
}); 