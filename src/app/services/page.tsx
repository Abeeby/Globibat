import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaHardHat, FaPlug, FaKey, FaBroom, FaTruck, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Nos Services | Globibat',
  description: 'Découvrez nos services de construction, rénovation, électricité, serrurerie, nettoyage et déménagement à Genève. Des solutions complètes pour tous vos projets.',
  keywords: 'services Genève, construction, rénovation, électricité, serrurerie, nettoyage, déménagement, entreprise générale',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'construction-renovation',
      title: 'Construction & Rénovation',
      description: 'Transformation, rénovation complète, extension, aménagement intérieur et extérieur par des professionnels qualifiés.',
      icon: <FaHardHat className="h-8 w-8 text-blue-600" />,
      href: '/services/construction-renovation',
    },
    {
      id: 'electricite-depannage',
      title: 'Électricité & Dépannage',
      description: 'Installation, rénovation et dépannage électrique pour particuliers et professionnels. Service d\'urgence 24h/24.',
      icon: <FaPlug className="h-8 w-8 text-blue-600" />,
      href: '/services/electricite-depannage',
    },
    {
      id: 'serrurerie-depannage',
      title: 'Serrurerie & Dépannage',
      description: 'Installation, remplacement et dépannage de serrures, portes et systèmes de sécurité. Service d\'urgence 24h/24.',
      icon: <FaKey className="h-8 w-8 text-blue-600" />,
      href: '/services/serrurerie-depannage',
    },
    {
      id: 'nettoyage-conciergerie',
      title: 'Nettoyage & Conciergerie',
      description: 'Services de nettoyage professionnel pour particuliers et entreprises. Entretien régulier et nettoyages spécifiques.',
      icon: <FaBroom className="h-8 w-8 text-blue-600" />,
      href: '/services/nettoyage-conciergerie',
    },
    {
      id: 'demenagement-debarras',
      title: 'Déménagement & Débarras',
      description: 'Services de déménagement et débarras complets. Transport, emballage, montage et démontage de meubles.',
      icon: <FaTruck className="h-8 w-8 text-blue-600" />,
      href: '/services/demenagement-debarras',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services', isCurrent: true },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Nos Services"
          subtitle="Des solutions complètes pour tous vos projets"
          centered
        />
        
        <div className="mt-12">
          <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-16">
            Chez Globibat, nous proposons une gamme complète de services pour répondre à tous vos besoins en matière de construction, rénovation, dépannage et entretien. Notre équipe de professionnels qualifiés est à votre disposition pour vous accompagner dans tous vos projets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Image du service</span>
                  </div>
                  {/* Remplacer par une vraie image */}
                  {/* <Image 
                    src={`/images/services/${service.id}.jpg`} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    En savoir plus <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'un service sur mesure ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques. Notre équipe se fera un plaisir de vous proposer une solution adaptée à votre situation.
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