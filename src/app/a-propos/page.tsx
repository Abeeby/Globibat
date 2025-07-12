import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaUsers, FaTools, FaHandshake, FaLeaf, FaAward, FaStar, FaGoogle, FaQuoteLeft, FaEye, FaGem, FaClock, FaLightbulb, FaSmile } from 'react-icons/fa';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'À propos | Globibat - Entreprise générale de construction',
  description: 'Découvrez Globibat, entreprise de construction et rénovation en Suisse romande. Notre histoire, nos valeurs et notre équipe d\'experts au service de vos projets.',
  keywords: 'Globibat, entreprise construction Suisse romande, histoire Globibat, équipe construction, valeurs entreprise bâtiment, artisans qualifiés Suisse romande',
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'À propos', href: '/a-propos', isCurrent: true },
          ]} />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">À propos de Globibat</h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">Votre partenaire de confiance pour tous vos projets</p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-12 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">5.0/5 - 17 avis sur Google</p>
              </div>
              <div className="flex-grow"></div>
              <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <FaEye className="mr-2" />
                Voir tous nos avis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Notre histoire</h2>
              <div className="prose dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300">
                  Fondée le 28 janvier 2023 à Nyon, Globibat est née de la vision de deux artisans passionnés qui souhaitaient créer une entreprise capable de répondre à tous les besoins en matière de construction et de services associés.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Au départ spécialisés dans la rénovation d'appartements, notre entreprise s'est rapidement développée pour offrir une gamme complète de services, de l'électricité à la serrurerie, en passant par le déménagement et le nettoyage.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Aujourd'hui, avec 2 collaborateurs passionnés et une vision ambitieuse pour l'avenir, Globibat s'est imposée comme un acteur fiable et réactif du secteur de la construction et des services à Nyon et dans ses environs.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
              <div className="text-gray-700 dark:text-gray-300 text-center p-4">
                <p>Image du siège de Globibat</p>
                <p className="text-sm">(Placez votre image dans /public/images/about/company-building.jpg)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-4 text-blue-600 dark:text-blue-400">
              <FaQuoteLeft size={36} />
            </div>
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 h-5 w-5" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl italic font-medium mb-6 text-gray-900 dark:text-gray-100">
              "Une entreprise jeune mais déjà très professionnelle. Travail soigné et respect des délais."
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400">— Client satisfait, Google Reviews</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Nos valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaTools className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nos artisans sont qualifiés et formés aux dernières techniques et technologies du bâtiment.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaAward className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Qualité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous ne faisons aucun compromis sur la qualité. Attention particulière aux détails et aux finitions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaHandshake className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Fiabilité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Respect des délais, transparence et communication constante sont les piliers de notre relation avec nos clients.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaLeaf className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Durabilité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous nous engageons à minimiser notre impact sur l'environnement.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nous recherchons constamment les meilleures solutions à proposer à nos clients.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                <FaSmile className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Satisfaction client</h3>
              <p className="text-gray-600 dark:text-gray-400">
                La satisfaction de nos clients est notre priorité absolue et notre meilleure publicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Pourquoi choisir Globibat ?</h2>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  Nous nous distinguons par notre approche personnalisée et notre engagement envers l'excellence.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-gray-100">Service complet :</span> Tous vos besoins en construction et services associés sous un même toit.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-gray-100">Équipe qualifiée :</span> Des artisans expérimentés et formés aux dernières techniques.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-gray-100">Garantie qualité :</span> Nous nous engageons à vous offrir un travail impeccable.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                <div className="text-gray-700 dark:text-gray-300 text-center p-4">
                  <p>Image de nos travaux</p>
                  <p className="text-sm">(Placez votre image dans /public/images/about/team.jpg)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Contactez-nous pour discuter de votre projet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 