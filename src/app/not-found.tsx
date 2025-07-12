import Link from 'next/link';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

export const metadata = {
  title: 'Page non trouvée | Globibat',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div
        className="max-w-xl w-full text-center space-y-8"
      >
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900">
          Page non trouvée
        </h2>
        <p className="text-gray-600 text-lg">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              <FaHome aria-hidden="true" />
              <span>Retour à l'accueil</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              <FaSearch aria-hidden="true" />
              <span>Nous contacter</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 text-gray-500 mx-auto">
            <FaArrowLeft aria-hidden="true" />
            <span>Utilisez le bouton retour de votre navigateur</span>
          </div>
        </div>

        <div className="mt-12 text-gray-500">
          <p>Suggestions :</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/services" className="text-blue-600 hover:underline">
                Découvrir nos services
              </Link>
            </li>
            <li>
              <Link href="/projets-realises" className="text-blue-600 hover:underline">
                Voir nos projets réalisés
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-600 hover:underline">
                Demander un devis gratuit
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 