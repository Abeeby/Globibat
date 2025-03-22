import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { checkContactInfo, checkContactAccessibility, checkContactVisibility, checkContactInteraction, checkContactResponsiveness } from '@/lib/test-utils/contact';

describe('LiveChat contact', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should display contact information correctly', () => {
    checkContactInfo(LiveChat);
  });

  it('should be accessible', () => {
    checkContactAccessibility(LiveChat);
  });

  it('should be visible on all pages', () => {
    checkContactVisibility(LiveChat);
  });

  it('should handle user interactions properly', () => {
    checkContactInteraction(LiveChat);
  });

  it('should be responsive', () => {
    checkContactResponsiveness(LiveChat);
  });

  it('should handle message submission correctly', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');

    // Envoyer un message
    fireEvent.change(input, { target: { value: 'Test message' } });
    fireEvent.click(sendButton);

    // Vérifier que le message est affiché
    expect(screen.getByText('Test message')).toBeInTheDocument();
    // Vérifier que l'input est vidé
    expect(input).toHaveValue('');
  });

  it('should maintain proper z-index across pages', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');

    // Vérifier que le bouton est fixé et au-dessus des autres éléments
    expect(button).toHaveStyle({
      position: 'fixed',
      zIndex: '9999'
    });
  });

  it('should handle window resize events', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Simuler un redimensionnement de la fenêtre
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    // Vérifier que le composant reste visible et correctement positionné
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toBeVisible();
    expect(chatWindow).toHaveStyle({
      position: 'fixed',
      bottom: '20px',
      right: '20px'
    });
  });

  it('should handle rapid user interactions', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');

    // Simuler des clics rapides
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
    }

    // Vérifier que le composant reste fonctionnel
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toBeVisible();
    expect(chatWindow).toHaveAttribute('aria-expanded', 'true');
  });
}); 