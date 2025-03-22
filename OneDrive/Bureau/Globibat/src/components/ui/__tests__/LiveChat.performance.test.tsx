import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { measureRenderTime, checkComponentPerformance, checkLazyLoading, checkAnimations } from '@/lib/test-utils/performance';

describe('LiveChat Performance', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should render within performance budget', async () => {
    const renderTime = await measureRenderTime(LiveChat);
    expect(renderTime).toBeLessThan(50); // 50ms budget
  });

  it('should handle rapid state changes without performance degradation', async () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    
    const startTime = performance.now();
    
    // Simuler des clics rapides
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
    }
    
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    
    expect(totalTime).toBeLessThan(500); // 500ms budget pour 10 clics
  });

  it('should have smooth animations', () => {
    checkAnimations(LiveChat);
  });

  it('should handle multiple messages without performance issues', async () => {
    const { container } = renderWithProviders(<LiveChat />);
    
    // Ouvrir le chat
    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);
    
    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');
    
    const startTime = performance.now();
    
    // Envoyer 10 messages
    for (let i = 0; i < 10; i++) {
      fireEvent.change(input, { target: { value: `Message ${i}` } });
      fireEvent.click(sendButton);
    }
    
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    
    expect(totalTime).toBeLessThan(1000); // 1s budget pour 10 messages
  });

  it('should maintain smooth scrolling with many messages', async () => {
    const { container } = renderWithProviders(<LiveChat />);
    
    // Ouvrir le chat
    const openButton = screen.getByRole('button');
    fireEvent.click(openButton);
    
    const input = screen.getByPlaceholderText('Tapez votre message...');
    const sendButton = screen.getByLabelText('Envoyer le message');
    const messagesContainer = container.querySelector('.overflow-y-auto');
    
    // Envoyer 20 messages
    for (let i = 0; i < 20; i++) {
      fireEvent.change(input, { target: { value: `Message ${i}` } });
      fireEvent.click(sendButton);
    }
    
    // Vérifier que le scroll est fluide
    const scrollStartTime = performance.now();
    messagesContainer?.scrollTo(0, messagesContainer.scrollHeight);
    const scrollEndTime = performance.now();
    
    expect(scrollEndTime - scrollStartTime).toBeLessThan(100); // 100ms budget pour le scroll
  });
}); 