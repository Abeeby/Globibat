import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaTruck, FaBoxOpen, FaTrash, FaHome, FaBuilding, FaWarehouse, FaCheck, FaRecycle } from 'react-icons/fa';

export const metadata = {
  title: 'Déménagement & Débarras | Globibat',
  description: 'Services de déménagement et débarras à Genève. Déménagement complet, transport de meubles, débarras d\'appartements et évacuation de déchets par des professionnels.',
  keywords: 'déménagement Genève, débarras appartement, transport meubles, évacuation déchets, vide-grenier, déménageurs professionnels',
};

export default function DemenagementPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Déménagement & Débarras', href: '/services/demenagement-debarras' },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Déménagement & Débarras"
          subtitle="Des solutions complètes pour vos déplacements et évacuations"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Des professionnels du déménagement à votre service</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Déménager peut être une expérience stressante, mais avec Globibat, vous pouvez compter sur une 
              équipe de professionnels expérimentés pour rendre cette transition aussi fluide que possible. 
              Nous prenons en charge tous les aspects de votre déménagement, de l'emballage au transport, 
              jusqu'à l'installation dans votre nouveau domicile.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Notre service de débarras vous permet également de vous débarrasser efficacement et écologiquement 
              des objets dont vous n'avez plus besoin. Que vous vidiez un appartement, une maison, un bureau ou 
              un local commercial, nous nous occupons de tout, du tri à l'évacuation, en privilégiant le recyclage 
              et la valorisation des déchets.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Nous intervenons rapidement sur l'ensemble du canton de Genève et ses environs, offrant des 
              services adaptés à tous les types de déménagements et de débarras.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Image de déménagement</span>
            {/* <Image 
              src="/images/services/demenagement.jpg" 
              alt="Service de déménagement professionnel"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
        
        {/* Services proposés */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Nos services de déménagement et débarras</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaTruck className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Déménagement complet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Service de déménagement clé en main incluant l'emballage, le transport et le déballage de vos biens.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Emballage professionnel</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Protection des meubles</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Transport sécurisé</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaBoxOpen className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Transport de meubles</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Transport sécurisé de meubles individuels pour vos besoins ponctuels ou livraisons.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Manutention soignée</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Véhicules adaptés</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Assurance transport</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaTrash className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Débarras complet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Vidage complet d'appartements, maisons, caves, greniers et locaux commerciaux.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Tri et évacuation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Nettoyage final</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">État des lieux</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaHome className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Déménagement privé</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Solutions adaptées pour les particuliers, du studio à la villa familiale.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Devis personnalisé</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Matériel d'emballage</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Service week-end</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaBuilding className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Déménagement entreprise</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Déménagement de bureaux et locaux commerciaux avec minimum d'interruption d'activité.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Planning optimisé</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Matériel informatique</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Service nuit/week-end</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <FaRecycle className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Recyclage écologique</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tri sélectif et recyclage responsable de vos déchets et objets encombrants.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Tri des matériaux</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Centres agréés</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Certificat recyclage</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Pourquoi nous choisir */}
        <section className="mt-16 bg-gray-50 dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Pourquoi choisir Globibat pour votre déménagement ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Expérience et professionnalisme
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fort de nombreuses années d'expérience dans le déménagement et le débarras, notre équipe maîtrise 
                parfaitement toutes les techniques pour garantir un service efficace et sûr.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Matériel adapté
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nous disposons de véhicules de différentes tailles et de tout le matériel nécessaire pour protéger 
                et transporter vos biens en toute sécurité.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Tarifs transparents
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Nos devis sont détaillés et sans surprises. Nous vous proposons le meilleur rapport qualité-prix 
                pour vos déménagements et débarras.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <FaCheck className="text-green-500 mr-3" />
                Service complet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                De l'emballage au déballage, en passant par le transport et l'installation, nous prenons en charge 
                l'intégralité de votre déménagement pour vous simplifier la vie.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Prêt à déménager sereinement ?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé. Notre équipe est à votre 
            disposition pour répondre à toutes vos questions et organiser votre déménagement ou débarras.
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