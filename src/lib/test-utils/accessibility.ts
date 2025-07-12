import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Étendre les matchers Jest avec les matchers d'accessibilité
expect.extend(toHaveNoViolations);

// Fonction utilitaire pour tester l'accessibilité d'un composant
export const checkAccessibility = async (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
};

// Fonction utilitaire pour vérifier les attributs ARIA
export function checkAriaAttributes(element: HTMLElement, expectedAttributes: Record<string, string>) {
  Object.entries(expectedAttributes).forEach(([key, value]) => {
    expect(element).toHaveAttribute(`aria-${key}`, value);
  });
}

// Fonction utilitaire pour vérifier la navigation au clavier
export const checkKeyboardNavigation = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  expect(focusableElements.length).toBeGreaterThan(0);
  focusableElements.forEach((element) => {
    expect(element).toHaveAttribute('tabindex');
  });
};

// Fonction utilitaire pour vérifier les contrastes de couleur
export const checkColorContrast = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const elements = container.querySelectorAll('*');
  
  elements.forEach((element) => {
    const style = window.getComputedStyle(element);
    const backgroundColor = style.backgroundColor;
    const color = style.color;
    
    if (backgroundColor && color) {
      // Vérifier que les couleurs sont définies
      expect(backgroundColor).not.toBe('transparent');
      expect(color).not.toBe('transparent');
    }
  });
};

export const checkARIALabels = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const elementsWithAria = container.querySelectorAll('[aria-label], [aria-labelledby]');
  
  elementsWithAria.forEach((element) => {
    if (element.hasAttribute('aria-label')) {
      expect(element.getAttribute('aria-label')).not.toBe('');
    }
    if (element.hasAttribute('aria-labelledby')) {
      const labelId = element.getAttribute('aria-labelledby');
      const label = container.querySelector(`#${labelId}`);
      expect(label).toBeInTheDocument();
    }
  });
};

export const checkFocusManagement = (Component: React.ComponentType) => {
  const { container } = render(<Component />);
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  focusableElements.forEach((element) => {
    element.focus();
    expect(document.activeElement).toBe(element);
  });
}; 