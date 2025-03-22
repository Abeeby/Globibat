import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Fonction utilitaire pour mesurer le temps de rendu d'un composant
export const measureRenderTime = async (Component: React.ComponentType) => {
  const startTime = performance.now();
  
  await act(async () => {
    render(<Component />);
  });
  
  const endTime = performance.now();
  return endTime - startTime;
};

// Fonction utilitaire pour vérifier les performances d'un composant
export const checkComponentPerformance = async (Component: React.ComponentType, threshold: number = 50) => {
  const renderTime = await measureRenderTime(Component);
  expect(renderTime).toBeLessThan(threshold);
};

// Fonction utilitaire pour vérifier la taille du bundle
export const checkBundleSize = async (bundlePath: string, maxSize: number = 500000) => {
  const response = await fetch(bundlePath);
  const blob = await response.blob();
  expect(blob.size).toBeLessThan(maxSize);
};

// Fonction utilitaire pour vérifier les images optimisées
export const checkImageOptimization = async (imageUrl: string, maxSize: number = 200000) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  
  expect(blob.size).toBeLessThan(maxSize);
  expect(blob.type).toBe('image/webp');
};

// Fonction utilitaire pour vérifier le lazy loading
export const checkLazyLoading = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const images = container.querySelectorAll('img');
  
  images.forEach((img) => {
    expect(img).toHaveAttribute('loading', 'lazy');
  });
};

// Fonction utilitaire pour vérifier les animations
export const checkAnimations = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const animatedElements = container.querySelectorAll('[data-animate]');
  
  animatedElements.forEach((element) => {
    expect(element).toHaveAttribute('data-animate');
    expect(element).toHaveAttribute('data-duration');
  });
}; 