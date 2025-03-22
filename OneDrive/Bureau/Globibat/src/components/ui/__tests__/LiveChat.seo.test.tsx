import { render, screen, fireEvent } from '@testing-library/react';
import LiveChat from '../LiveChat';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { checkSeoMetadata, checkTitleTags, checkImageAltTags, checkHeadingStructure, checkInternalLinks, checkStructuredData } from '@/lib/test-utils/seo';

describe('LiveChat SEO', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="light">
        <I18nProvider>
          {component}
        </I18nProvider>
      </ThemeProvider>
    );
  };

  it('should have proper meta tags', () => {
    checkSeoMetadata(LiveChat);
  });

  it('should have proper title tags', () => {
    checkTitleTags(LiveChat);
  });

  it('should have proper image alt tags', () => {
    checkImageAltTags(LiveChat);
  });

  it('should have proper heading structure', () => {
    checkHeadingStructure(LiveChat);
  });

  it('should have proper internal links', () => {
    checkInternalLinks(LiveChat);
  });

  it('should have proper structured data', () => {
    checkStructuredData(LiveChat);
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier la structure sémantique
    expect(container.querySelector('[role="dialog"]')).toBeInTheDocument();
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.querySelector('form')).toBeInTheDocument();
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should have proper ARIA roles', () => {
    const { container } = renderWithProviders(<LiveChat />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Vérifier les rôles ARIA
    expect(container.querySelector('[role="dialog"]')).toBeInTheDocument();
    expect(container.querySelector('[role="button"]')).toBeInTheDocument();
    expect(container.querySelector('[role="form"]')).toBeInTheDocument();
  });

  it('should have proper meta descriptions', () => {
    const { container } = renderWithProviders(<LiveChat />);
    
    // Vérifier les descriptions meta
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeInTheDocument();
    expect(metaDescription).toHaveAttribute('content');
  });

  it('should have proper Open Graph tags', () => {
    const { container } = renderWithProviders(<LiveChat />);
    
    // Vérifier les balises Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    expect(ogTitle).toBeInTheDocument();
    expect(ogDescription).toBeInTheDocument();
  });
}); 