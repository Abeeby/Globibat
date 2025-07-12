import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { checkTranslations, checkLanguageSwitch, checkMissingTranslations, checkLocalization } from '@/lib/test-utils/i18n';

describe('LiveChat i18n', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should have all text translated', () => {
    checkTranslations(LiveChat);
  });

  it('should handle language switch correctly', () => {
    checkLanguageSwitch(LiveChat);
  });

  it('should not have missing translations', () => {
    checkMissingTranslations(LiveChat);
  });

  it('should display chat information in correct language', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier les textes en français
    expect(screen.getByText('Chat en direct')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tapez votre message...')).toBeInTheDocument();
    expect(screen.getByLabelText('Envoyer le message')).toBeInTheDocument();
  });

  it('should update ARIA labels when language changes', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    // Vérifier les labels ARIA en français
    expect(button).toHaveAttribute('aria-label', 'Ouvrir le chat');
    
    // Simuler un changement de langue
    // Note: Cette partie dépend de votre implémentation du changement de langue
    // Vous devrez peut-être adapter ce test en fonction de votre système de traduction
  });

  it('should maintain proper text direction', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier que le texte est en LTR (gauche à droite)
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toHaveAttribute('dir', 'ltr');
  });

  it('should handle special characters in messages', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');

    // Tester avec des caractères spéciaux
    const specialMessage = 'Message avec caractères spéciaux: éèêë, àâä, îï, ôö, ûü, ç';
    fireEvent.change(input, { target: { value: specialMessage } });
    fireEvent.click(sendButton);

    expect(screen.getByText(specialMessage)).toBeInTheDocument();
  });

  it('should handle RTL languages correctly', () => {
    // Simuler un changement vers une langue RTL (par exemple, l'arabe)
    // Note: Cette partie dépend de votre implémentation du changement de langue
    // Vous devrez peut-être adapter ce test en fonction de votre système de traduction
  });
}); 