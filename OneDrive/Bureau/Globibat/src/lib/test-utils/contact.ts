import { render } from '@testing-library/react';

// Fonction utilitaire pour vérifier les informations de contact
export function checkContactInfo(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que les informations de contact sont présentes
  const phoneNumber = container.querySelector('a[href^="tel:"]');
  const emailAddress = container.querySelector('a[href^="mailto:"]');
  
  expect(phoneNumber).toBeInTheDocument();
  expect(emailAddress).toBeInTheDocument();
  
  // Vérifier que les numéros sont correctement formatés
  expect(phoneNumber?.getAttribute('href')).toMatch(/^tel:\+\d{2}\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/);
  expect(emailAddress?.getAttribute('href')).toMatch(/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}

// Fonction utilitaire pour vérifier l'accessibilité des liens de contact
export function checkContactAccessibility(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que les liens ont des labels ARIA appropriés
  const contactLinks = container.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]');
  contactLinks.forEach(link => {
    expect(link).toHaveAttribute('aria-label');
    expect(link.getAttribute('aria-label')).not.toBe('');
  });
}

// Fonction utilitaire pour vérifier la visibilité du composant de contact
export function checkContactVisibility(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que le composant est visible
  const contactComponent = container.firstChild;
  expect(contactComponent).toBeInTheDocument();
  
  // Vérifier que le composant est positionné correctement
  const style = window.getComputedStyle(contactComponent as Element);
  expect(style.position).toBe('fixed');
  expect(style.zIndex).toBe('50');
}

// Fonction utilitaire pour vérifier l'interaction avec le composant de contact
export function checkContactInteraction(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que le bouton de contact est cliquable
  const contactButton = container.querySelector('button');
  expect(contactButton).toBeInTheDocument();
  expect(contactButton).not.toBeDisabled();
  
  // Vérifier que le menu de contact s'ouvre et se ferme
  const menu = container.querySelector('[role="dialog"]');
  expect(menu).not.toBeVisible();
  
  fireEvent.click(contactButton!);
  expect(menu).toBeVisible();
  
  fireEvent.click(contactButton!);
  expect(menu).not.toBeVisible();
}

// Fonction utilitaire pour vérifier la réactivité du composant de contact
export function checkContactResponsiveness(Component: React.ComponentType<any>, props: any = {}) {
  const { container } = render(<Component {...props} />);
  
  // Vérifier que le composant s'adapte à différentes tailles d'écran
  const contactComponent = container.firstChild;
  const style = window.getComputedStyle(contactComponent as Element);
  
  // Vérifier que le composant est responsive
  expect(style.position).toBe('fixed');
  expect(style.bottom).toBe('1.5rem');
  expect(style.right).toBe('1.5rem');
  
  // Vérifier que le menu est responsive
  const menu = container.querySelector('[role="dialog"]');
  const menuStyle = window.getComputedStyle(menu as Element);
  expect(menuStyle.maxWidth).toBe('100%');
  expect(menuStyle.width).toBe('auto');
} 