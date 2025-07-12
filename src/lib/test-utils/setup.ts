import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Configuration de Testing Library
configure({
  testIdAttribute: 'data-testid',
});

// Configuration de l'environnement de test
beforeAll(() => {
  // Mock de matchMedia pour les tests de thème
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Mock de localStorage
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
    length: 0,
    key: jest.fn(),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  // Mock de window.location
  const locationMock = {
    reload: jest.fn(),
    assign: jest.fn(),
    replace: jest.fn(),
  };
  Object.defineProperty(window, 'location', {
    value: locationMock,
    writable: true,
  });
});

// Nettoyage après chaque test
afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
}); 