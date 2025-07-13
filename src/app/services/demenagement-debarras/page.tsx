import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaTruck, FaBoxOpen, FaTrash, FaHome, FaBuilding, FaWarehouse, FaCheck, FaRecycle } from 'react-icons/fa';

export const metadata = {
  title: 'Déménagement & Débarras | Globibat - Entreprise générale de construction',
  description: 'Services de déménagement et débarras à Genève. Déménagement complet, transport de meubles, débarras d\'appartements et évacuation de déchets par des professionnels.',
  keywords: 'déménagement Genève, débarras appartement, transport meubles, évacuation déchets, vide-grenier, déménageurs professionnels',
};

export default function DemenagementPage() {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
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
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Des professionnels du déménagement à votre service</h2>
                <div className="prose prose-blue max-w-none">
                  <p>
                    Déménager peut être une expérience stressante, mais avec Globibat, vous pouvez compter sur une 
                    équipe de professionnels expérimentés pour rendre cette transition aussi fluide que possible. 
                    Nous prenons en charge tous les aspects de votre déménagement, de l'emballage au transport, 
                    jusqu'à l'installation dans votre nouveau domicile.
                  </p>
                  <p>
                    Notre service de débarras vous permet également de vous débarrasser efficacement et écologiquement 
                    des objets dont vous n'avez plus besoin. Que vous vidiez un appartement, une maison, un bureau ou 
                    un local commercial, nous nous occupons de tout, du tri à l'évacuation, en privilégiant le recyclage 
                    et la valorisation des déchets.
                  </p>
                  <p>
                    Avec Globibat, vous bénéficiez d'un service personnalisé, adapté à vos besoins spécifiques et 
                    à votre budget, avec une attention particulière portée à la sécurité de vos biens et à la 
                    protection de l'environnement.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/demenagement.jpg"
                  alt="Service de déménagement professionnel Globibat"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos services de déménagement</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaHome className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Déménagement résidentiel</h3>
                  <p className="text-gray-600 mb-4">
                    Services de déménagement complets pour appartements et maisons, adaptés à vos besoins spécifiques.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Emballage et déballage</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Transport sécurisé</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Montage et démontage de meubles</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaBuilding className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Déménagement commercial</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions de déménagement professionnelles pour bureaux, commerces et entreprises.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Planification logistique</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Déménagement de matériel informatique</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Transfert de mobilier de bureau</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaBoxOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emballage et protection</h3>
                  <p className="text-gray-600 mb-4">
                    Service d'emballage professionnel pour protéger vos biens pendant le transport.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Fourniture de matériel d'emballage</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Protection des meubles</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Emballage d'objets fragiles</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaTruck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transport de meubles</h3>
                  <p className="text-gray-600 mb-4">
                    Service de transport pour meubles individuels ou ensembles de mobilier.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Transport de piano</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Livraison de meubles neufs</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Déplacement de mobilier lourd</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaWarehouse className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Garde-meubles</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions de stockage temporaire ou à long terme pour vos meubles et effets personnels.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Espaces de stockage sécurisés</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Accès flexible</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Conditions de stockage optimales</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaTrash className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Débarras et évacuation</h3>
                  <p className="text-gray-600 mb-4">
                    Service complet de débarras d'appartements, maisons, bureaux et locaux commerciaux.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Tri et évacuation des déchets</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Recyclage et valorisation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600">Nettoyage après débarras</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pourquoi choisir nos services de déménagement ?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaTruck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expérience</h3>
                  <p className="text-gray-600">
                    Notre équipe possède une solide expérience dans le domaine du déménagement et du débarras, garantissant un service de qualité.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaBoxOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
                  <p className="text-gray-600">
                    Nous manipulons vos biens avec le plus grand soin, en utilisant des techniques et du matériel adaptés pour éviter tout dommage.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaRecycle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Écologie</h3>
                  <p className="text-gray-600">
                    Nous nous engageons à minimiser l'impact environnemental de nos activités en privilégiant le recyclage et la valorisation des déchets.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <FaHome className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Service complet</h3>
                  <p className="text-gray-600">
                    De l'emballage au déballage, du transport au montage, nous prenons en charge toutes les étapes de votre déménagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre calculateur de volume</h2>
                  <p className="text-gray-600 mb-6">
                    Pour vous aider à planifier votre déménagement, nous mettons à votre disposition un calculateur 
                    de volume en ligne. Cet outil vous permet d'estimer le volume total de vos biens et de déterminer 
                    la taille du véhicule nécessaire pour votre déménagement.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Le calculateur prend en compte tous les types de meubles et d'objets courants, vous permettant 
                    d'obtenir une estimation précise du volume à déménager. Cette information est essentielle pour 
                    établir un devis adapté à vos besoins et organiser efficacement votre déménagement.
                  </p>
                  <div className="mt-8">
                    <Link 
                      href="/calculateur-volume" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Utiliser le calculateur de volume
                    </Link>
                  </div>
                </div>
                
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/services/calculateur-volume.jpg"
                    alt="Calculateur de volume pour déménagement"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Témoignages clients</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Pierre Dubois',
                    role: 'Déménagement d\'appartement',
                    quote: 'Un grand merci à l\'équipe de Globibat pour leur professionnalisme et leur efficacité. Mon déménagement s\'est déroulé sans accroc, et tous mes meubles sont arrivés en parfait état.'
                  },
                  {
                    name: 'Entreprise XYZ',
                    role: 'Déménagement de bureaux',
                    quote: 'Nous avons fait appel à Globibat pour le déménagement de nos bureaux. Leur organisation et leur réactivité nous ont permis de reprendre notre activité rapidement dans nos nouveaux locaux.'
                  },
                  {
                    name: 'Famille Martin',
                    role: 'Débarras de maison',
                    quote: 'Suite au décès de notre grand-mère, nous avons dû vider sa maison. Globibat a pris en charge cette tâche difficile avec beaucoup de respect et d\'efficacité. Nous les recommandons vivement.'
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un service de déménagement ou de débarras ?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de déménagement ou de débarras. 
                Notre équipe se fera un plaisir de vous proposer une solution adaptée à vos exigences et à votre budget.
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