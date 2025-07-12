import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaLock, FaKey, FaShieldAlt, FaDoorOpen, FaHome, FaBuilding, FaCheck, FaTools } from 'react-icons/fa';

export const metadata = {
  title: 'Serrurerie & Dépannage | Globibat - Entreprise générale de construction',
  description: 'Services de serrurerie et dépannage à Genève. Installation et réparation de serrures, ouverture de portes et interventions d\'urgence 24h/24 par des serruriers qualifiés.',
  keywords: 'serrurier Genève, dépannage serrurerie, ouverture de porte, installation serrure, urgence serrurerie, clés perdues',
};

export default function SerrureriePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Serrurerie & Dépannage', href: '/services/serrurerie-depannage' },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Serrurerie & Dépannage"
          subtitle="Des solutions de sécurité pour votre tranquillité"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Des serruriers professionnels à votre service</h2>
            <p className="text-gray-600 mb-4">
              Que vous soyez confronté à une porte claquée, une clé cassée dans la serrure, ou que vous souhaitiez simplement renforcer la sécurité de votre domicile ou de vos locaux professionnels, notre équipe de serruriers qualifiés est à votre disposition pour répondre à tous vos besoins.
            </p>
            <p className="text-gray-600 mb-4">
              Chez Globibat, nous accordons une importance particulière à la qualité de nos interventions et à la satisfaction de nos clients. Tous nos serruriers sont formés aux techniques les plus récentes et utilisent des équipements de pointe pour garantir un travail rapide et efficace.
            </p>
            <p className="text-gray-600">
              Nous intervenons rapidement sur l'ensemble du canton de Genève et ses environs, avec un service d'urgence disponible 24h/24 et 7j/7 pour tous vos dépannages en serrurerie.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image de serrurier</span>
            </div>
            {/* Remplacer par une vraie image */}
            {/* <Image 
              src="/images/services/serrurerie.jpg" 
              alt="Serrurier Globibat en intervention" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Nos services de serrurerie"
            subtitle="Des prestations complètes pour tous vos besoins en sécurité"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaDoorOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ouverture de porte</h3>
              <p className="text-gray-600 mb-4">
                Service d'ouverture de porte rapide et sans dommage en cas de perte de clés, de porte claquée ou de serrure bloquée.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Ouverture de porte claquée</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Extraction de clé cassée</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Déblocage de serrure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaLock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installation et remplacement de serrures</h3>
              <p className="text-gray-600 mb-4">
                Installation et remplacement de tous types de serrures pour renforcer la sécurité de votre domicile ou de vos locaux professionnels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Serrures multipoints</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Serrures anti-effraction</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Serrures électroniques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaKey className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reproduction de clés</h3>
              <p className="text-gray-600 mb-4">
                Service de reproduction de tous types de clés, y compris les clés de sécurité, les clés à points et les clés de voiture.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Clés de sécurité</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Clés à points</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Clés de voiture</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurisation de domicile</h3>
              <p className="text-gray-600 mb-4">
                Solutions complètes pour renforcer la sécurité de votre domicile contre les intrusions et les cambriolages.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Blindage de porte</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation de verrous</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Sécurisation de fenêtres</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurisation de locaux professionnels</h3>
              <p className="text-gray-600 mb-4">
                Solutions de sécurité adaptées aux besoins spécifiques des entreprises, commerces et bureaux.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Contrôle d'accès</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Organigramme de clés</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Portes de sécurité</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaTools className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dépannage et réparation</h3>
              <p className="text-gray-600 mb-4">
                Service de dépannage rapide pour tous vos problèmes de serrurerie, disponible 24h/24 et 7j/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réparation de serrures</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Remplacement de cylindres</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Ajustement de portes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Pourquoi choisir nos services de serrurerie ?"
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
                Nous utilisons des produits de qualité et des techniques éprouvées pour garantir la sécurité de vos biens et de vos proches.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaTools className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Nos serruriers sont qualifiés et régulièrement formés aux dernières techniques et technologies en matière de serrurerie.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaKey className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-gray-600">
                Notre service de dépannage intervient rapidement pour résoudre vos problèmes de serrurerie, 24h/24 et 7j/7.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaLock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparence</h3>
              <p className="text-gray-600">
                Nous vous proposons des devis clairs et détaillés, sans frais cachés, pour tous vos travaux de serrurerie.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un serrurier qualifié ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en serrurerie ou pour une intervention d'urgence. Notre équipe se fera un plaisir de vous accompagner dans tous vos projets de sécurisation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact#devis" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Demander un devis gratuit
              </Link>
              <Link 
                href="tel:+41223000000" 
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