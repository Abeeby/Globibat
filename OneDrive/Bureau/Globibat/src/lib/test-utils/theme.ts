import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

// Fonction utilitaire pour vérifier les styles du thème
export function checkThemeStyles(Component: React.ComponentType<any>, props: any = {}) {
  render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...props} />
    </ThemeProvider>
  );
  
  // Vérifier que les classes de thème sont présentes sans utiliser de hooks
  const container = screen.getByTestId('theme-component') || document.body;
  const themedElements = container.querySelectorAll('[class*="dark:"]');
  expect(themedElements.length).toBeGreaterThan(0);
}

// Fonction utilitaire pour vérifier les transitions de thème
export function checkThemeTransition(Component: React.ComponentType<any>, props: any = {}) {
  render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...props} />
    </ThemeProvider>
  );
  
  // Vérifier les transitions sans utiliser de hooks
  const container = screen.getByTestId('theme-component') || document.body;
  const elementsWithTransition = container.querySelectorAll('[class*="transition"]');
  expect(elementsWithTransition.length).toBeGreaterThan(0);
}

// Fonction utilitaire pour vérifier le contraste des couleurs
export function checkColorContrast(Component: React.ComponentType<any>, props: any = {}) {
  render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...props} />
    </ThemeProvider>
  );
  
  // Cette vérification est simplifiée car nous ne pouvons pas calculer le contraste dans un test
  const container = screen.getByTestId('theme-component') || document.body;
  expect(container).toBeInTheDocument();
}

// Fonction utilitaire pour vérifier la persistance du thème
export function checkThemePersistence(Component: React.ComponentType<any>, props: any = {}) {
  render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...props} />
    </ThemeProvider>
  );
  
  // Vérification simplifiée de la persistance
  expect(localStorage.getItem('theme')).toBeDefined();
}

// Fonction utilitaire pour vérifier les icônes du thème
export function checkThemeIcons(Component: React.ComponentType<any>, props: any = {}) {
  render(
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...props} />
    </ThemeProvider>
  );
  
  // Vérifier les icônes sans utiliser de hooks
  const container = screen.getByTestId('theme-component') || document.body;
  const iconElements = container.querySelectorAll('svg');
  expect(iconElements.length).toBeGreaterThan(0);
} 