import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkAccessibility, checkKeyboardNavigation, checkARIALabels, checkColorContrast, checkFocusManagement } from '@/lib/test-utils/accessibility';

describe('FloatingContact Accessibility', () => {
  it('should have no accessibility violations', async () => {
    await checkAccessibility(FloatingContact);
  });

  it('should be keyboard navigable', () => {
    checkKeyboardNavigation(FloatingContact);
  });

  it('should have proper ARIA labels', () => {
    checkARIALabels(FloatingContact);
  });

  it('should have sufficient color contrast', () => {
    checkColorContrast(FloatingContact);
  });

  it('should manage focus correctly', () => {
    checkFocusManagement(FloatingContact);
  });

  it('should have proper button roles and labels', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveAttribute('aria-expanded');
    expect(button).toHaveAttribute('aria-controls');
  });

  it('should handle keyboard interactions correctly', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button');
    
    // Test avec la touche Espace
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
    
    // Test avec la touche Échap
    fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should trap focus within the menu when open', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button');
    
    // Ouvrir le menu
    fireEvent.click(button);
    
    // Vérifier que le focus est piégé dans le menu
    const menu = container.querySelector('[role="dialog"]');
    expect(menu).toHaveAttribute('aria-modal', 'true');
    
    // Vérifier que le focus peut être déplacé entre les éléments du menu
    const menuItems = container.querySelectorAll('a');
    menuItems[0].focus();
    expect(document.activeElement).toBe(menuItems[0]);
  });

  it('should announce state changes to screen readers', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button');
    
    // Vérifier que le bouton annonce son état
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
}); 