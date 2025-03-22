import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaHardHat, FaHome, FaBuilding, FaPaintRoller, FaTools, FaWrench, FaCheck } from 'react-icons/fa';

export const metadata = {
  title: 'Construction & Rénovation | Globibat - Entreprise générale de construction',
  description: 'Services de construction et rénovation à Genève. Transformation, rénovation complète, extension, aménagement intérieur et extérieur par des professionnels qualifiés.',
  keywords: 'construction Genève, rénovation appartement, transformation maison, extension bâtiment, aménagement intérieur, rénovation salle de bain, rénovation cuisine',
};

export default function ConstructionRenovationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Construction & Rénovation', href: '/services/construction-renovation', isCurrent: true },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Construction & Rénovation"
          subtitle="Des solutions complètes pour tous vos projets"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Transformez votre espace avec Globibat</h2>
            <p className="text-gray-600 mb-4">
              Que vous souhaitiez rénover votre appartement, transformer votre maison, agrandir votre espace de vie ou simplement rafraîchir votre intérieur, notre équipe de professionnels qualifiés est à votre disposition pour réaliser vos projets de construction et de rénovation.
            </p>
            <p className="text-gray-600 mb-4">
              Chez Globibat, nous prenons en charge l'intégralité de votre projet, de la conception à la réalisation, en passant par les démarches administratives et les autorisations nécessaires. Notre approche personnalisée nous permet de répondre précisément à vos besoins et de respecter votre budget.
            </p>
            <p className="text-gray-600">
              Forts de notre expérience et de notre savoir-faire, nous vous garantissons un travail de qualité, réalisé dans les règles de l'art et dans le respect des délais convenus.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image de rénovation</span>
            </div>
            {/* Remplacer par une vraie image */}
            {/* <Image 
              src="/images/services/renovation.jpg" 
              alt="Projet de rénovation Globibat" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Nos services de construction et rénovation"
            subtitle="Des prestations complètes pour tous vos projets"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rénovation complète</h3>
              <p className="text-gray-600 mb-4">
                Transformation totale de votre logement, mise aux normes, modernisation des installations et optimisation des espaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Rénovation d'appartements et maisons</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réhabilitation de bâtiments anciens</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Mise aux normes énergétiques</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Extension & Surélévation</h3>
              <p className="text-gray-600 mb-4">
                Agrandissement de votre espace de vie par l'ajout d'une extension ou la surélévation de votre bâtiment existant.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Extensions de maisons</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Surélévations de bâtiments</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Création de vérandas et jardins d'hiver</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaPaintRoller className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aménagement intérieur</h3>
              <p className="text-gray-600 mb-4">
                Transformation et optimisation de vos espaces intérieurs pour un confort et une fonctionnalité maximale.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Rénovation de cuisines et salles de bain</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Création de dressings et placards sur mesure</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Aménagement de combles et sous-sols</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHardHat className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction neuve</h3>
              <p className="text-gray-600 mb-4">
                Réalisation de votre projet de construction, de la conception des plans à la livraison clé en main.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Construction de villas individuelles</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réalisation de petits immeubles</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Construction de locaux commerciaux</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaTools className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Travaux spécifiques</h3>
              <p className="text-gray-600 mb-4">
                Réalisation de travaux spécifiques par nos équipes spécialisées dans différents corps de métier.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Maçonnerie et gros œuvre</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Plâtrerie et peinture</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Carrelage et revêtements de sol</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaWrench className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance & Dépannage</h3>
              <p className="text-gray-600 mb-4">
                Services de maintenance et dépannage pour l'entretien régulier ou les interventions d'urgence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Contrats de maintenance</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Interventions d'urgence</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Réparations diverses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Notre processus"
            subtitle="Une approche méthodique pour des résultats optimaux"
            centered
          />
          
          <div className="mt-12 relative">
            {/* Ligne de connexion */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-blue-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 md:mb-20 mx-auto z-10">
                  1
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center md:mt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-gray-600">
                    Nous discutons de votre projet, vos besoins, vos idées et votre budget pour établir un cahier des charges précis.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 md:mb-20 mx-auto z-10">
                  2
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center md:mt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conception</h3>
                  <p className="text-gray-600">
                    Nous élaborons des plans détaillés et vous proposons des solutions adaptées à vos besoins et à votre budget.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 md:mb-20 mx-auto z-10">
                  3
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center md:mt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Réalisation</h3>
                  <p className="text-gray-600">
                    Nos équipes qualifiées réalisent les travaux dans le respect des délais et des normes en vigueur.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 md:mb-20 mx-auto z-10">
                  4
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center md:mt-16">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison</h3>
                  <p className="text-gray-600">
                    Nous effectuons une visite finale avec vous pour nous assurer que tout est conforme à vos attentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Nos réalisations"
            subtitle="Découvrez quelques-uns de nos projets récents"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Remplacer par de vraies images et descriptions */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Photo du projet {index}</span>
                  </div>
                  {/* <Image 
                    src={`/images/projects/project-${index}.jpg`} 
                    alt={`Projet de rénovation ${index}`} 
                    fill 
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Rénovation complète d'un appartement</h3>
                  <p className="text-gray-500 mb-2">Genève, Suisse</p>
                  <p className="text-gray-600">
                    Rénovation complète d'un appartement de 120m² comprenant la refonte totale de la cuisine et des salles de bain.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/realisations" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à concrétiser votre projet ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet de construction ou de rénovation. Notre équipe se fera un plaisir de vous accompagner dans la réalisation de vos rêves.
            </p>
            <Link 
              href="/contact#devis" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 