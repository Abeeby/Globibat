'use client';

import React, { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/nextjs';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Envoyer l'erreur à Sentry
    Sentry.captureException(error, {
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });

    this.setState({
      error,
      errorInfo,
    });

    // Envoyer l'erreur à Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'error', {
        error_name: error.name,
        error_message: error.message,
        error_stack: error.stack,
        component_stack: errorInfo.componentStack,
      });
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
          <div className="max-w-xl w-full text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Une erreur inattendue s'est produite
            </h1>
            <p className="text-gray-600 mb-8">
              Nous nous excusons pour ce désagrément. Notre équipe technique a été informée et travaille à résoudre le problème.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Rafraîchir la page
              </button>
              <div>
                <a
                  href="/"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Retour à l'accueil
                </a>
              </div>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <details className="text-left">
                  <summary className="text-red-800 font-medium cursor-pointer">
                    Détails techniques (mode développement uniquement)
                  </summary>
                  <pre className="mt-2 text-sm text-red-700 overflow-auto">
                    {this.state.error.stack}
                  </pre>
                  <pre className="mt-2 text-sm text-red-700 overflow-auto">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 