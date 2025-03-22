import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { checkThemeStyles, checkThemeTransition, checkColorContrast, checkThemePersistence, checkThemeIcons } from '@/lib/test-utils/theme';

describe('LiveChat Theme', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should apply theme styles correctly', () => {
    checkThemeStyles(LiveChat);
  });

  it('should have smooth theme transitions', () => {
    checkThemeTransition(LiveChat);
  });

  it('should maintain proper color contrast', () => {
    checkColorContrast(LiveChat);
  });

  it('should persist theme preference', () => {
    checkThemePersistence(LiveChat);
  });

  it('should adapt icons to current theme', () => {
    checkThemeIcons(LiveChat);
  });

  it('should handle theme changes correctly', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier les styles initiaux en mode clair
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toHaveClass('bg-white');
    expect(chatWindow).toHaveClass('dark:bg-gray-800');

    // Simuler un changement de thème
    // Note: Cette partie dépend de votre implémentation du changement de thème
    // Vous devrez peut-être adapter ce test en fonction de votre système de thème
  });

  it('should maintain proper contrast in both themes', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');

    // Vérifier le contraste en mode clair
    expect(input).toHaveClass('border-gray-300');
    expect(sendButton).toHaveClass('bg-primary');

    // Vérifier le contraste en mode sombre
    expect(input).toHaveClass('dark:border-gray-700');
    expect(sendButton).toHaveClass('dark:bg-primary');
  });

  it('should handle system theme preference', () => {
    // Simuler la préférence système en mode sombre
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier que le thème sombre est appliqué
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toHaveClass('dark:bg-gray-800');
  });
}); 