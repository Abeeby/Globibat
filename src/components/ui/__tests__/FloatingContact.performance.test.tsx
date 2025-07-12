import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkComponentPerformance, checkLazyLoading, checkAnimations } from '@/lib/test-utils/performance';

describe('FloatingContact Performance', () => {
  it('should render within performance budget', async () => {
    await checkComponentPerformance(FloatingContact, {}, 50);
  });

  it('should handle animations efficiently', () => {
    checkAnimations(FloatingContact);
  });

  it('should use lazy loading for images', () => {
    checkLazyLoading(FloatingContact);
  });

  it('should maintain smooth animations during state changes', async () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    // Mesurer le temps de transition
    const startTime = performance.now();
    fireEvent.click(button);
    const endTime = performance.now();
    
    // La transition devrait être rapide (moins de 100ms)
    expect(endTime - startTime).toBeLessThan(100);
  });

  it('should not cause layout shifts', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    // Vérifier que le bouton a une taille fixe
    const buttonStyle = window.getComputedStyle(button);
    expect(buttonStyle.width).toBeDefined();
    expect(buttonStyle.height).toBeDefined();
    
    // Vérifier que le menu a une position fixe
    fireEvent.click(button);
    const menu = container.querySelector('[role="dialog"]');
    const menuStyle = window.getComputedStyle(menu!);
    expect(menuStyle.position).toBe('fixed');
  });

  it('should handle rapid state changes without performance issues', async () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button', { name: /ouvrir le menu de contact/i });
    
    // Simuler des clics rapides
    const startTime = performance.now();
    for (let i = 0; i < 10; i++) {
      fireEvent.click(button);
    }
    const endTime = performance.now();
    
    // Les changements d'état devraient être rapides
    expect(endTime - startTime).toBeLessThan(500);
  });
}); 