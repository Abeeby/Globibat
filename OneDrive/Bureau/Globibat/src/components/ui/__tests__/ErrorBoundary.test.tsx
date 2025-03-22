import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';
import * as Sentry from '@sentry/nextjs';

// Composant qui génère une erreur
const ErrorComponent = () => {
  throw new Error('Test error');
};

// Mock de Sentry
jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    jest.clearAllMocks();
    // Supprimer les erreurs de console pour les tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should render error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Une erreur inattendue s\'est produite')).toBeInTheDocument();
    expect(screen.getByText('Rafraîchir la page')).toBeInTheDocument();
    expect(screen.getByText('Retour à l\'accueil')).toBeInTheDocument();
  });

  it('should capture error in Sentry', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(Sentry.captureException).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Object)
    );
  });

  it('should reload page when refresh button is clicked', () => {
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    fireEvent.click(screen.getByText('Rafraîchir la page'));
    expect(reloadMock).toHaveBeenCalled();
  });

  it('should show technical details in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Détails techniques (mode développement uniquement)')).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('should not show technical details in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Détails techniques (mode développement uniquement)')).not.toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });
}); 