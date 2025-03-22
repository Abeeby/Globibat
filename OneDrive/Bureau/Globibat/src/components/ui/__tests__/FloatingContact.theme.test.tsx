import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkThemeStyles, checkThemeTransition, checkColorContrast, checkThemePersistence, checkThemeIcons } from '@/lib/test-utils/theme';
import { useTheme } from '@/lib/providers/ThemeProvider';

describe('FloatingContact Theme', () => {
  it('should apply theme styles correctly', () => {
    checkThemeStyles(FloatingContact);
  });

  it('should have smooth theme transitions', () => {
    checkThemeTransition(FloatingContact);
  });

  it('should maintain proper color contrast', () => {
    checkColorContrast(FloatingContact);
  });

  it('should persist theme preference', () => {
    checkThemePersistence(FloatingContact);
  });

  it('should adapt icons to theme', () => {
    checkThemeIcons(FloatingContact);
  });

  it('should handle theme changes correctly', () => {
    const { theme, toggleTheme } = useTheme();
    const { container } = render(<FloatingContact />);
    
    // Vérifier les styles initiaux
    const button = screen.getByRole('button');
    const initialButtonStyle = window.getComputedStyle(button);
    
    // Changer le thème
    toggleTheme();
    
    // Vérifier que les styles ont changé
    const newButtonStyle = window.getComputedStyle(button);
    expect(newButtonStyle.backgroundColor).not.toBe(initialButtonStyle.backgroundColor);
    expect(newButtonStyle.color).not.toBe(initialButtonStyle.color);
  });

  it('should maintain proper contrast in both themes', () => {
    const { theme, toggleTheme } = useTheme();
    const { container } = render(<FloatingContact />);
    
    // Vérifier le contraste en mode clair
    const lightThemeStyles = {
      button: window.getComputedStyle(screen.getByRole('button')),
      text: window.getComputedStyle(container.querySelector('span')!),
    };
    
    // Passer en mode sombre
    toggleTheme();
    
    // Vérifier le contraste en mode sombre
    const darkThemeStyles = {
      button: window.getComputedStyle(screen.getByRole('button')),
      text: window.getComputedStyle(container.querySelector('span')!),
    };
    
    // Vérifier que les contrastes sont différents mais lisibles
    expect(darkThemeStyles.button.backgroundColor).not.toBe(lightThemeStyles.button.backgroundColor);
    expect(darkThemeStyles.text.color).not.toBe(lightThemeStyles.text.color);
  });

  it('should handle system theme preference', () => {
    // Mock matchMedia pour simuler la préférence système
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
      })),
    });
    
    const { container } = render(<FloatingContact />);
    const { theme } = useTheme();
    
    // Vérifier que le thème correspond à la préférence système
    expect(theme).toBe('dark');
  });
}); 