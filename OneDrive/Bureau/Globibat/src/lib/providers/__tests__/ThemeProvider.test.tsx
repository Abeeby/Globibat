import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

// Composant de test pour accéder au contexte
const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Réinitialiser localStorage avant chaque test
    localStorage.clear();
  });

  it('should render with default light theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('should toggle theme when button is clicked', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    fireEvent.click(button);
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    fireEvent.click(button);
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });

  it('should persist theme in localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    fireEvent.click(button);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should use system preference when no theme is saved', () => {
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
      })),
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('should throw error when useTheme is used outside provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow('useTheme must be used within a ThemeProvider');
    consoleError.mockRestore();
  });
}); 