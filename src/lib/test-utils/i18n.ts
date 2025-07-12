import { render } from '@testing-library/react';
import { useLocale, useTranslations } from '@/lib/i18n';

// Fonction utilitaire pour vérifier les traductions
export function checkTranslations(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que tous les textes sont traduits
  const textNodes = container.querySelectorAll('*');
  textNodes.forEach(node => {
    if (node.textContent && node.textContent.trim()) {
      expect(node.textContent.trim()).not.toBe('');
    }
  });
}

// Fonction utilitaire pour vérifier le changement de langue
export function checkLanguageSwitch(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que le composant réagit au changement de langue
  const { currentLocale, switchLocale } = useLocale();
  const initialLocale = currentLocale;
  
  switchLocale(initialLocale === 'fr' ? 'en' : 'fr');
  expect(currentLocale).not.toBe(initialLocale);
}

// Fonction utilitaire pour vérifier les clés de traduction manquantes
export function checkMissingTranslations(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  const { t } = useTranslations();
  
  // Vérifier que toutes les clés de traduction sont définies
  const translationKeys = container.querySelectorAll('[data-translation-key]');
  translationKeys.forEach(element => {
    const key = element.getAttribute('data-translation-key');
    if (key) {
      const translation = t(key);
      expect(translation).not.toBe(key); // La traduction ne devrait pas être la clé elle-même
    }
  });
}

// Fonction utilitaire pour vérifier le format des dates et des nombres
export function checkLocalization(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  const { currentLocale } = useLocale();
  
  // Vérifier que les dates sont formatées correctement
  const dateElements = container.querySelectorAll('[data-date]');
  dateElements.forEach(element => {
    const date = new Date(element.getAttribute('data-date') || '');
    const formattedDate = date.toLocaleDateString(currentLocale === 'fr' ? 'fr-CH' : 'en-GB');
    expect(element.textContent).toBe(formattedDate);
  });
  
  // Vérifier que les nombres sont formatés correctement
  const numberElements = container.querySelectorAll('[data-number]');
  numberElements.forEach(element => {
    const number = parseFloat(element.getAttribute('data-number') || '0');
    const formattedNumber = number.toLocaleString(currentLocale === 'fr' ? 'fr-CH' : 'en-GB');
    expect(element.textContent).toBe(formattedNumber);
  });
}

// Fonction utilitaire pour vérifier la direction du texte (RTL/LTR)
export function checkTextDirection(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que la direction du texte est correcte
  const textElements = container.querySelectorAll('*');
  textElements.forEach(element => {
    const style = window.getComputedStyle(element);
    expect(style.direction).toBe('ltr'); // Par défaut, le texte devrait être LTR
  });
} 