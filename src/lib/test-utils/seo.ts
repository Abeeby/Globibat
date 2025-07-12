import { render } from '@testing-library/react';
import { NextSeo } from 'next-seo';

// Fonction utilitaire pour vérifier les métadonnées SEO
export function checkSeoMetadata(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier les balises meta essentielles
  const metaTags = container.querySelectorAll('meta');
  const requiredMetaTags = [
    'description',
    'keywords',
    'og:title',
    'og:description',
    'og:image',
    'twitter:card',
    'twitter:title',
    'twitter:description',
  ];
  
  requiredMetaTags.forEach(tag => {
    const metaTag = Array.from(metaTags).find(
      meta => meta.getAttribute('name') === tag || meta.getAttribute('property') === tag
    );
    expect(metaTag).toBeTruthy();
    expect(metaTag?.getAttribute('content')).toBeTruthy();
  });
}

// Fonction utilitaire pour vérifier les balises de titre
export function checkTitleTags(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que le titre est présent et unique
  const titles = container.querySelectorAll('title');
  expect(titles.length).toBe(1);
  expect(titles[0].textContent).toBeTruthy();
}

// Fonction utilitaire pour vérifier les images alt
export function checkImageAltTags(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  const images = container.querySelectorAll('img');
  images.forEach(image => {
    expect(image).toHaveAttribute('alt');
    expect(image.getAttribute('alt')).not.toBe('');
  });
}

// Fonction utilitaire pour vérifier la structure des headings
export function checkHeadingStructure(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]);
    // Vérifier que la hiérarchie est respectée
    expect(level - previousLevel).toBeLessThanOrEqual(1);
    previousLevel = level;
  });
}

// Fonction utilitaire pour vérifier les liens internes
export function checkInternalLinks(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  const links = container.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http')) {
      expect(link).toHaveAttribute('aria-label');
      expect(link.getAttribute('aria-label')).not.toBe('');
    }
  });
}

// Fonction utilitaire pour vérifier la structure des données structurées
export function checkStructuredData(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  const scripts = container.querySelectorAll('script[type="application/ld+json"]');
  expect(scripts.length).toBeGreaterThan(0);
  
  scripts.forEach(script => {
    const data = JSON.parse(script.textContent || '{}');
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBeDefined();
  });
} 