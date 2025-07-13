import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBroom, FaSprayCan, FaBuilding, FaHome, FaLeaf, FaRecycle, FaCheck, FaTools, FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa';

export const metadata = {
  title: 'Nettoyage & Conciergerie | Globibat',
  description: 'Services de nettoyage et conciergerie à Genève. Nettoyage de bureaux, appartements, fin de chantier et entretien régulier par des professionnels qualifiés.',
  keywords: 'nettoyage Genève, conciergerie, nettoyage bureaux, nettoyage appartements, nettoyage fin de chantier, entretien immeuble',
};

export default function NettoyagePage() {
  return (
    <main className="container mx-auto px-4 py-8">
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
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Des professionnels du nettoyage à votre service</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chez Globibat, nous comprenons l'importance d'un environnement propre et sain, que ce soit pour 
              votre domicile ou votre lieu de travail. Notre équipe de professionnels du nettoyage est formée 
              aux techniques les plus efficaces et utilise des produits de qualité pour garantir des résultats 
              impeccables.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nous proposons une gamme complète de services de nettoyage et de conciergerie adaptés à vos besoins 
              spécifiques, avec des solutions sur mesure pour les particuliers et les entreprises. Notre flexibilité 
              nous permet d'intervenir ponctuellement ou régulièrement, selon vos exigences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Soucieux de l'environnement, nous privilégions l'utilisation de produits écologiques et de techniques 
              de nettoyage respectueuses de la santé et de la planète.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Image de nettoyage</span>
            {/* <Image 
              src="/images/services/nettoyage.jpg" 
              alt="Service de nettoyage professionnel"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
        
        {/* Services proposés */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Nos services de nettoyage et conciergerie</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaHome className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nettoyage résidentiel</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nettoyage complet d'appartements et maisons, régulier ou ponctuel, adapté à vos besoins.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Nettoyage approfondi</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Entretien régulier</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Produits écologiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaBuilding className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nettoyage bureaux</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Services de nettoyage professionnel pour bureaux et espaces commerciaux.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Nettoyage quotidien</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Sanitaires et cuisines</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Gestion des déchets</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaTools className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nettoyage fin de chantier</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nettoyage complet après travaux pour une remise des lieux impeccable.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Évacuation des gravats</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Nettoyage des surfaces</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Finition parfaite</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaBroom className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Conciergerie d'immeuble</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Service de conciergerie complet pour immeubles résidentiels et commerciaux.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Entretien parties communes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Gestion des espaces verts</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Services aux locataires</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaSprayCan className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nettoyage spécialisé</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Services spécialisés pour besoins spécifiques: vitres, moquettes, parkings.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Nettoyage haute pression</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Traitement des sols</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Désinfection approfondie</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaLeaf className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Nettoyage écologique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Solutions de nettoyage respectueuses de l'environnement et de votre santé.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Produits certifiés bio</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Techniques éco-responsables</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Économie d'eau et d'énergie</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Notre approche */}
        <section className="mt-16 bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Notre approche du nettoyage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Écologique</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilisation de produits respectueux de l'environnement et de techniques durables.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Professionnel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Équipe formée et équipée du matériel professionnel le plus performant.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRecycle className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Responsable</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gestion responsable des déchets avec tri sélectif et recyclage systématique.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pourquoi nous choisir */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Pourquoi choisir Globibat pour votre nettoyage ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Personnel qualifié et formé
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Notre équipe est composée de professionnels du nettoyage, formés aux dernières techniques et 
                respectueux de votre environnement de vie ou de travail.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Flexibilité des horaires
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous nous adaptons à vos contraintes horaires et intervenons aux moments qui vous conviennent, 
                y compris en soirée ou le week-end.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Produits et matériel de qualité
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous utilisons exclusivement des produits professionnels efficaces et respectueux de la santé, 
                ainsi que du matériel moderne et performant.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Tarifs compétitifs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nos tarifs sont transparents et compétitifs, avec des forfaits adaptés à tous les budgets et 
                sans surprise sur la facture finale.
              </p>
            </div>
          </div>
        </section>
        
        {/* Témoignages */}
        <section className="mt-16 bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaGoogle className="text-blue-600 dark:text-blue-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 h-4 w-4" />
                  ))}
                </div>
              </div>
              <FaQuoteLeft className="text-blue-600 dark:text-blue-400 mb-2" />
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "Service de nettoyage impeccable ! L'équipe est ponctuelle, efficace et très professionnelle. 
                Je recommande vivement."
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Marie L.</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Nettoyage bureaux</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaGoogle className="text-blue-600 dark:text-blue-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 h-4 w-4" />
                  ))}
                </div>
              </div>
              <FaQuoteLeft className="text-blue-600 dark:text-blue-400 mb-2" />
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "Globibat s'occupe de la conciergerie de notre immeuble depuis 2 ans. Toujours un travail 
                soigné et un excellent relationnel avec les locataires."
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Régie Immobilière XYZ</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Conciergerie</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaGoogle className="text-blue-600 dark:text-blue-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 h-4 w-4" />
                  ))}
                </div>
              </div>
              <FaQuoteLeft className="text-blue-600 dark:text-blue-400 mb-2" />
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                "Nettoyage de fin de chantier parfait. Ils ont tout laissé impeccable, prêt pour la remise 
                des clés. Un grand merci !"
              </p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Jean-Marc P.</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Fin de chantier</p>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Besoin d'un service de nettoyage professionnel ?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé. Notre équipe est à votre 
            disposition pour étudier vos besoins et vous proposer la solution de nettoyage la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="tel:+41215050062" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"
            >
              Nous appeler
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 