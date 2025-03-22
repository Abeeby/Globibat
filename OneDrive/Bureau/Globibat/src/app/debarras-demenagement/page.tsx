import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaTruck, FaBoxOpen, FaTrash, FaHome, FaBuilding, FaWarehouse, FaCheck, FaRecycle, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Déménagement & Débarras | Globibat - Entreprise générale de construction',
  description: 'Services de déménagement et débarras en Suisse romande. Déménagement complet, transport de meubles, débarras d\'appartements et évacuation de déchets.',
  keywords: 'déménagement Suisse romande, débarras appartement, transport meubles, évacuation déchets, déménagement entreprise, garde-meubles',
};

export default function DemenagementDebarrasPage() {
  return (
    <main className="flex-grow">
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Accueil', href: '/' },
            { label: 'Déménagement & Débarras', href: '/debarras-demenagement', isCurrent: true },
          ]} />
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Déménagement & Débarras</h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">Des solutions complètes pour vos déménagements et débarras en Suisse romande</p>
            
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
              <Image
                src="/images/realisations/6.png"
                alt="Service de déménagement et débarras Globibat"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos services de déménagement et débarras"
            subtitle="Des solutions adaptées à tous vos besoins"
            alignment="center"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaTruck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Déménagement complet</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Prise en charge complète de votre déménagement, du démontage au remontage de vos meubles, en passant par l'emballage et le transport.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaBoxOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Emballage et protection</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Service d'emballage professionnel pour protéger vos biens pendant le transport, avec des matériaux adaptés à chaque type d'objet.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaTrash className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Débarras complet</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Débarras d'appartements, de maisons, de caves ou de greniers, avec évacuation des déchets et nettoyage des lieux.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaWarehouse className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Garde-meubles</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Solution de stockage sécurisé pour vos meubles et effets personnels, pour une durée adaptée à vos besoins.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Déménagement d'entreprise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Service spécialisé pour le déménagement de bureaux et d'entreprises, avec une planification minutieuse pour minimiser l'impact sur votre activité.</p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <FaRecycle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Recyclage et tri</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Prise en charge du tri et du recyclage des déchets lors de débarras, dans le respect des normes environnementales.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/calculateur-volume" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Utiliser notre calculateur de volume
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Pourquoi choisir Globibat pour votre déménagement ?"
              subtitle="Une équipe expérimentée à votre service"
              alignment="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <FaCheck className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Professionnalisme</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Notre équipe de déménageurs professionnels est formée pour manipuler vos biens avec soin et efficacité.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <FaCheck className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Équipement adapté</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Nous disposons de véhicules de différentes tailles et d'équipements spécialisés pour tous types de déménagements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <FaCheck className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Service sur mesure</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Nous adaptons nos services à vos besoins spécifiques, que ce soit pour un studio ou une grande maison.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                    <FaCheck className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Respect des délais</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">Nous nous engageons à respecter les délais convenus pour votre déménagement ou débarras.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Prêt à planifier votre déménagement ?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et sans engagement.</p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 