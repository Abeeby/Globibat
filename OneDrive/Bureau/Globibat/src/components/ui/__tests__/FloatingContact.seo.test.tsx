import { render, screen } from '@testing-library/react';
import FloatingContact from '../FloatingContact';
import { checkSeoMetadata, checkImageAltTags, checkInternalLinks } from '@/lib/test-utils/seo';

describe('FloatingContact SEO', () => {
  it('should have proper meta tags', () => {
    checkSeoMetadata(FloatingContact);
  });

  it('should have proper alt tags for images', () => {
    checkImageAltTags(FloatingContact);
  });

  it('should have proper internal links with aria labels', () => {
    checkInternalLinks(FloatingContact);
  });

  it('should have proper contact information in structured data', () => {
    const { container } = render(<FloatingContact />);
    
    // Vérifier que les informations de contact sont présentes dans le HTML
    expect(screen.getByText('+41 21 505 00 62')).toBeInTheDocument();
    expect(screen.getByText('info@globibat.com')).toBeInTheDocument();
    
    // Vérifier que les liens ont des attributs aria appropriés
    const phoneLink = screen.getByRole('link', { name: /appeler globibat/i });
    expect(phoneLink).toHaveAttribute('aria-label', 'Appeler Globibat au +41 21 505 00 62');
    
    const emailLink = screen.getByRole('link', { name: /envoyer un email/i });
    expect(emailLink).toHaveAttribute('aria-label', 'Envoyer un email à info@globibat.com');
  });

  it('should have proper heading structure', () => {
    const { container } = render(<FloatingContact />);
    
    // Vérifier que le composant n'interfère pas avec la structure des headings
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBe(0); // Le composant ne devrait pas contenir de headings
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = render(<FloatingContact />);
    
    // Vérifier que le composant utilise des éléments sémantiques appropriés
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.querySelector('a')).toBeInTheDocument();
    
    // Vérifier que les rôles ARIA sont correctement définis
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button')).toHaveAttribute('aria-controls');
  });
}); 