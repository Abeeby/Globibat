import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { checkAccessibility, checkKeyboardNavigation, checkARIALabels, checkColorContrast, checkFocusManagement } from '@/lib/test-utils/accessibility';

describe('LiveChat Accessibility', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should have no accessibility violations', async () => {
    await checkAccessibility(LiveChat);
  });

  it('should be keyboard navigable', () => {
    checkKeyboardNavigation(LiveChat);
  });

  it('should have proper ARIA labels', () => {
    checkARIALabels(LiveChat);
  });

  it('should have sufficient color contrast', () => {
    checkColorContrast(LiveChat);
  });

  it('should manage focus correctly', () => {
    checkFocusManagement(LiveChat);
  });

  it('should have proper button roles and labels', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-label', 'Ouvrir le chat');
    expect(button).toHaveAttribute('role', 'button');
  });

  it('should handle keyboard interactions correctly', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    // Test avec la touche Espace
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(screen.getByText('Chat en direct')).toBeInTheDocument();
    
    // Test avec la touche Échap
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByText('Chat en direct')).not.toBeInTheDocument();
  });

  it('should trap focus within the chat window when open', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    // Ouvrir le chat
    fireEvent.click(button);
    
    // Vérifier que le focus est piégé dans la fenêtre de chat
    const chatWindow = container.querySelector('[role="dialog"]');
    expect(chatWindow).toHaveAttribute('aria-modal', 'true');
    
    // Vérifier que le focus peut être déplacé entre les éléments
    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');
    
    input.focus();
    expect(document.activeElement).toBe(input);
    
    sendButton.focus();
    expect(document.activeElement).toBe(sendButton);
  });

  it('should announce state changes to screen readers', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    // Vérifier que le bouton annonce son état
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should have proper heading structure', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
    expect(headings[0].textContent).toBe('Chat en direct');
  });
}); 