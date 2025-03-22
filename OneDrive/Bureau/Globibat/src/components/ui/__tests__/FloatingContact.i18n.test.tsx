import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkTranslations, checkLanguageSwitch, checkMissingTranslations } from '@/lib/test-utils/i18n';
import { useLocale } from '@/lib/i18n';

describe('FloatingContact i18n', () => {
  it('should have all text translated', () => {
    checkTranslations(FloatingContact);
  });

  it('should switch language correctly', () => {
    checkLanguageSwitch(FloatingContact);
  });

  it('should not have missing translations', () => {
    checkMissingTranslations(FloatingContact);
  });

  it('should display contact information in correct language', () => {
    const { currentLocale } = useLocale();
    const { container } = render(<FloatingContact />);
    
    // Vérifier que les textes sont dans la bonne langue
    if (currentLocale === 'fr') {
      expect(screen.getByText('Appelez-nous')).toBeInTheDocument();
      expect(screen.getByText('Écrivez-nous')).toBeInTheDocument();
    } else {
      expect(screen.getByText('Call us')).toBeInTheDocument();
      expect(screen.getByText('Email us')).toBeInTheDocument();
    }
  });

  it('should update aria labels when language changes', () => {
    const { currentLocale, switchLocale } = useLocale();
    const { container } = render(<FloatingContact />);
    
    const button = screen.getByRole('button');
    const initialAriaLabel = button.getAttribute('aria-label');
    
    switchLocale(currentLocale === 'fr' ? 'en' : 'fr');
    const newAriaLabel = button.getAttribute('aria-label');
    
    expect(newAriaLabel).not.toBe(initialAriaLabel);
  });

  it('should maintain proper text direction', () => {
    const { container } = render(<FloatingContact />);
    
    // Vérifier que la direction du texte est correcte
    const textElements = container.querySelectorAll('*');
    textElements.forEach(element => {
      const style = window.getComputedStyle(element);
      expect(style.direction).toBe('ltr');
    });
  });

  it('should handle phone number format correctly', () => {
    const { currentLocale } = useLocale();
    const { container } = render(<FloatingContact />);
    
    const phoneNumber = screen.getByText('+41 21 505 00 62');
    expect(phoneNumber).toBeInTheDocument();
    
    // Vérifier que le format du numéro de téléphone est correct
    expect(phoneNumber.textContent).toMatch(/^\+41\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/);
  });
}); 