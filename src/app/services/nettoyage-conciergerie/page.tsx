import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBroom, FaSprayCan, FaBuilding, FaHome, FaLeaf, FaRecycle, FaCheck, FaTools, FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa';

export const metadata = {
  title: 'Nettoyage & Conciergerie | Globibat - Entreprise générale de construction',
  description: 'Services de nettoyage et conciergerie à Genève. Nettoyage de bureaux, appartements, fin de chantier et entretien régulier par des professionnels qualifiés.',
  keywords: 'nettoyage Genève, conciergerie, nettoyage bureaux, nettoyage appartements, nettoyage fin de chantier, entretien immeuble',
};

export default function NettoyagePage() {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Nettoyage & Conciergerie', href: '/services/nettoyage-conciergerie' },
            ]}
          />
          
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Nettoyage & Conciergerie"
              subtitle="Des espaces impeccables pour votre confort"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Des professionnels du nettoyage à votre service</h2>
                <div className="prose prose-blue max-w-none">
                  <p>
                    Chez Globibat, nous comprenons l'importance d'un environnement propre et sain, que ce soit pour 
                    votre domicile ou votre lieu de travail. Notre équipe de professionnels du nettoyage est formée 
                    aux techniques les plus efficaces et utilise des produits de qualité pour garantir des résultats 
                    impeccables.
                  </p>
                  <p>
                    Nous proposons une gamme complète de services de nettoyage et de conciergerie adaptés à vos besoins 
                    spécifiques, avec des solutions sur mesure pour les particuliers et les entreprises. Notre flexibilité 
                    nous permet d'intervenir ponctuellement ou régulièrement, selon vos exigences.
                  </p>
                  <p>
                    Tous nos services sont réalisés dans le respect des normes d'hygiène les plus strictes et avec une 
                    attention particulière portée aux détails, pour vous garantir une satisfaction totale.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/nettoyage.jpg"
                  alt="Service de nettoyage professionnel Globibat"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos services de nettoyage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaHome className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage résidentiel</h3>
                  <p className="text-gray-600 mb-4">
                    Services de nettoyage complets pour appartements et maisons, adaptés à vos besoins spécifiques.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage régulier</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage en profondeur</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage de fin de bail</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaBuilding className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage commercial</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions de nettoyage professionnelles pour bureaux, commerces et locaux professionnels.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Entretien quotidien</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage des sanitaires</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage des vitres</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaTools className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage après chantier</h3>
                  <p className="text-gray-600 mb-4">
                    Nettoyage complet et minutieux après travaux de construction ou de rénovation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Élimination des débris</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage des surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage des vitres et sols</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaBroom className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Services de conciergerie</h3>
                  <p className="text-gray-600 mb-4">
                    Entretien régulier des parties communes d'immeubles résidentiels et commerciaux.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage des escaliers</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Entretien des halls</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Gestion des poubelles</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaSprayCan className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage spécialisé</h3>
                  <p className="text-gray-600 mb-4">
                    Services de nettoyage spécifiques pour des besoins particuliers ou des surfaces délicates.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage de moquettes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Traitement des sols</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Désinfection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaLeaf className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nettoyage écologique</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions de nettoyage respectueuses de l'environnement avec des produits écologiques.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Produits biodégradables</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Méthodes économes en eau</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Réduction des déchets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pourquoi choisir nos services de nettoyage ?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaTools className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Professionnalisme</h3>
                  <p className="text-gray-600">
                    Notre équipe est formée aux techniques de nettoyage les plus efficaces et utilise des équipements professionnels.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaSprayCan className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité</h3>
                  <p className="text-gray-600">
                    Nous accordons une attention particulière aux détails pour garantir un nettoyage impeccable à chaque intervention.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaLeaf className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Écologie</h3>
                  <p className="text-gray-600">
                    Nous privilégions des produits respectueux de l'environnement et des méthodes de nettoyage durables.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaRecycle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibilité</h3>
                  <p className="text-gray-600">
                    Nous adaptons nos services à vos besoins spécifiques et à vos horaires, pour un maximum de commodité.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre processus de nettoyage</h2>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Évaluation</h3>
                        <p className="text-gray-600">
                          Nous évaluons vos besoins spécifiques et l'état des lieux pour déterminer les meilleures méthodes de nettoyage.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Planification</h3>
                        <p className="text-gray-600">
                          Nous établissons un plan de nettoyage détaillé et adapté à vos exigences et à votre emploi du temps.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Exécution</h3>
                        <p className="text-gray-600">
                          Notre équipe réalise le nettoyage avec professionnalisme, en utilisant des produits et équipements adaptés.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Contrôle qualité</h3>
                        <p className="text-gray-600">
                          Nous vérifions que tous les aspects du nettoyage ont été réalisés selon nos standards de qualité.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Suivi</h3>
                        <p className="text-gray-600">
                          Nous assurons un suivi régulier pour garantir votre satisfaction et ajuster nos services si nécessaire.
                        </p>
                      </div>
                    </li>
                  </ol>
                  
                  <div className="mt-8">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Demander un devis gratuit
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/nettoyage-process.jpg"
                    alt="Processus de nettoyage professionnel Globibat"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Avis clients Google</h2>
              
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <FaStar className="text-yellow-400 h-8 w-8" />
                    <FaStar className="text-yellow-400 h-8 w-8" />
                    <FaStar className="text-yellow-400 h-8 w-8" />
                    <FaStar className="text-yellow-400 h-8 w-8" />
                    <FaStar className="text-yellow-400 h-8 w-8" />
                  </div>
                  <p className="text-xl font-bold text-gray-900">Note moyenne de 5.0/5</p>
                  <p className="text-gray-600 flex items-center justify-center mt-2">
                    <FaGoogle className="mr-2 text-blue-600" /> Basé sur 17 avis Google
                  </p>
                  
                  <Link 
                    href="https://www.google.com/search?client=firefox-b-d&q=globibat+#mpd=~1653490024473585108/customers/reviews"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Voir tous nos avis sur Google
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    quote: 'Je fais appel à Globibat pour le nettoyage de mon appartement depuis plus d\'un an et je suis toujours aussi satisfaite. Leur équipe est professionnelle, ponctuelle et très minutieuse.'
                  },
                  {
                    quote: 'Les services de conciergerie de Globibat ont considérablement amélioré la propreté et l\'entretien de notre immeuble. Les résidents sont ravis et moi aussi !'
                  },
                  {
                    quote: 'Nous faisons confiance à Globibat pour le nettoyage de nos bureaux. Leur flexibilité et leur professionnalisme nous permettent de travailler dans un environnement toujours impeccable.'
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <FaQuoteLeft className="h-8 w-8 text-blue-200 mr-4" />
                      <div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className="h-5 w-5 text-yellow-400" 
                            />
                          ))}
                        </div>
                        <div className="flex items-center">
                          <FaGoogle className="text-blue-600 mr-2" />
                          <span className="text-sm text-gray-500">Avis Google vérifié</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un service de nettoyage professionnel ?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de nettoyage et de conciergerie. 
                Notre équipe se fera un plaisir de vous proposer une solution adaptée à vos exigences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact#devis" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Demander un devis gratuit
                </Link>
                <Link 
                                        href="tel:+41215050062" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Nous appeler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 