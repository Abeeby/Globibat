import { render, screen, fireEvent } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkContactInfo, checkContactAccessibility, checkContactVisibility, checkContactInteraction, checkContactResponsiveness } from '@/lib/test-utils/contact';

describe('FloatingContact Contact', () => {
  it('should display correct contact information', () => {
    checkContactInfo(FloatingContact);
  });

  it('should be accessible', () => {
    checkContactAccessibility(FloatingContact);
  });

  it('should be visible on all pages', () => {
    checkContactVisibility(FloatingContact);
  });

  it('should handle interactions correctly', () => {
    checkContactInteraction(FloatingContact);
  });

  it('should be responsive', () => {
    checkContactResponsiveness(FloatingContact);
  });

  it('should have correct phone number format', () => {
    const { container } = render(<FloatingContact />);
    const phoneLink = container.querySelector('a[href^="tel:"]');
    
    expect(phoneLink?.getAttribute('href')).toBe('tel:+41215050062');
    expect(screen.getByText('+41 21 505 00 62')).toBeInTheDocument();
  });

  it('should have correct email format', () => {
    const { container } = render(<FloatingContact />);
    const emailLink = container.querySelector('a[href^="mailto:"]');
    
    expect(emailLink?.getAttribute('href')).toBe('mailto:info@globibat.com');
    expect(screen.getByText('info@globibat.com')).toBeInTheDocument();
  });

  it('should handle rapid interactions without issues', () => {
    const { container } = render(<FloatingContact />);
    const button = screen.getByRole('button');
    
    // Simuler des clics rapides
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }
    
    // Vérifier que le composant est toujours fonctionnel
    const menu = container.querySelector('[role="dialog"]');
    expect(menu).toBeInTheDocument();
  });

  it('should maintain proper z-index on all pages', () => {
    const { container } = render(<FloatingContact />);
    const contactComponent = container.firstChild;
    const style = window.getComputedStyle(contactComponent as Element);
    
    expect(style.zIndex).toBe('50');
    expect(style.position).toBe('fixed');
  });

  it('should handle window resize correctly', () => {
    const { container } = render(<FloatingContact />);
    
    // Simuler un redimensionnement de la fenêtre
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    
    // Vérifier que le composant reste visible et bien positionné
    const contactComponent = container.firstChild;
    const style = window.getComputedStyle(contactComponent as Element);
    expect(style.display).not.toBe('none');
    expect(style.position).toBe('fixed');
  });
}); 