import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBolt, FaLightbulb, FaShieldAlt, FaTools, FaHome, FaBuilding, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Électricité & Dépannage | Globibat',
  description: 'Services d\'électricité et dépannage à Genève. Installation électrique, mise aux normes, domotique et interventions d\'urgence 24h/24 par des électriciens qualifiés.',
  keywords: 'électricien Genève, dépannage électrique, installation électrique, mise aux normes, domotique, urgence électricité',
};

export default function ElectricitePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Électricité & Dépannage', href: '/services/electricite-depannage' },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Électricité & Dépannage"
          subtitle="Des solutions électriques sûres et efficaces"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Des électriciens qualifiés à votre service</h2>
            <p className="text-gray-600 mb-4">
              Que vous ayez besoin d'une installation électrique complète pour votre nouvelle construction, d'une mise aux normes de votre installation existante ou d'un dépannage urgent, notre équipe d'électriciens qualifiés est à votre disposition pour répondre à tous vos besoins.
            </p>
            <p className="text-gray-600 mb-4">
              Chez Globibat, nous accordons une importance particulière à la sécurité et à la qualité de nos installations électriques. Tous nos électriciens sont certifiés et formés aux dernières normes en vigueur, garantissant ainsi des installations sûres et conformes.
            </p>
            <p className="text-gray-600">
              Nous intervenons rapidement sur l'ensemble du canton de Genève et ses environs, avec un service d'urgence disponible 24h/24 et 7j/7 pour tous vos dépannages électriques.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image d'électricien</span>
            </div>
            {/* Remplacer par une vraie image */}
            {/* <Image 
              src="/images/services/electricite.jpg" 
              alt="Électricien Globibat en intervention" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Nos services d'électricité"
            subtitle="Des prestations complètes pour tous vos besoins électriques"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation électrique résidentielle</h3>
              <p className="text-gray-600 mb-4">
                Installation électrique complète pour maisons et appartements, du tableau électrique aux prises et luminaires.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation de tableaux électriques</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Câblage et prises de courant</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation d'éclairage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation électrique commerciale</h3>
              <p className="text-gray-600 mb-4">
                Solutions électriques adaptées aux besoins spécifiques des commerces, bureaux et locaux professionnels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Éclairage commercial</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Systèmes de sécurité</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réseaux informatiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mise aux normes électriques</h3>
              <p className="text-gray-600 mb-4">
                Mise en conformité de vos installations électriques selon les normes en vigueur pour garantir votre sécurité.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Diagnostic électrique</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Remplacement de tableaux obsolètes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation de disjoncteurs différentiels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaLightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Éclairage et luminaires</h3>
              <p className="text-gray-600 mb-4">
                Installation et conseil en éclairage pour créer l'ambiance parfaite dans votre intérieur ou votre espace professionnel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Éclairage LED économique</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Éclairage décoratif</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Éclairage extérieur</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBolt className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dépannage électrique</h3>
              <p className="text-gray-600 mb-4">
                Service de dépannage rapide pour tous vos problèmes électriques, disponible 24h/24 et 7j/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Recherche de pannes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réparation de courts-circuits</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Remplacement de composants défectueux</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaTools className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Domotique et automatisation</h3>
              <p className="text-gray-600 mb-4">
                Solutions domotiques pour rendre votre maison ou votre bureau plus intelligent, confortable et économe en énergie.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation de systèmes domotiques</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Contrôle d'éclairage intelligent</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Gestion de chauffage et climatisation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Pourquoi choisir nos services d'électricité ?"
            subtitle="L'expertise et la qualité au service de votre sécurité"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">
                Nos installations respectent scrupuleusement les normes de sécurité en vigueur pour vous protéger des risques électriques.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaTools className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Nos électriciens sont certifiés et régulièrement formés aux dernières technologies et normes électriques.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaBolt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Notre service de dépannage intervient rapidement pour résoudre vos problèmes électriques, 24h/24 et 7j/7.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous proposons des solutions électriques modernes et innovantes pour améliorer votre confort et réduire votre consommation d'énergie.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un électricien qualifié ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en électricité ou pour une intervention d'urgence. Notre équipe se fera un plaisir de vous accompagner dans tous vos projets électriques.
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
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Urgence 24/7
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 