'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaRedo, FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Enregistrer l'erreur dans Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'error', {
        error_message: error.message,
        error_stack: error.stack,
        error_digest: error.digest,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-6xl text-yellow-500" aria-hidden="true" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Une erreur est survenue
          </h1>
          <p className="text-gray-600">
            Nous nous excusons pour ce désagrément. Notre équipe technique a été informée du problème.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              <FaRedo aria-hidden="true" />
              <span>Réessayer</span>
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              <FaHome aria-hidden="true" />
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Code d'erreur : {error.digest}</p>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer hover:text-gray-700">
                Détails techniques (mode développement uniquement)
              </summary>
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-auto text-xs">
                {error.stack}
              </pre>
            </details>
          )}
        </div>

        <div className="mt-12">
          <p className="text-gray-600">Vous pouvez également :</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contacter notre support technique
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-blue-600 hover:underline">
                Consulter notre FAQ
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 