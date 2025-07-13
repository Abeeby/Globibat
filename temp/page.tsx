import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBuilding, FaHome, FaTools, FaBolt, FaLock, FaBroom } from 'react-icons/fa';

export const metadata = {
  title: 'Projets réalisés | Globibat',
  description: 'Découvrez les projets de construction, rénovation, électricité, serrurerie et nettoyage réalisés par Globibat en Suisse romande. Galerie de nos réalisations et témoignages clients.',
  keywords: 'projets construction Suisse romande, réalisations Globibat, rénovation appartement, installation électrique, références clients, portfolio construction',
};

// Définition des types pour les projets
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: number;
  images: string[];
  icon: React.ReactNode;
}

export default function ProjectsPage() {
  // Données des projets (à remplacer par des données réelles)
  const projects: Project[] = [
    {
      id: 'renovation-appartement-plainpalais',
      title: 'Rénovation complète d\'un appartement',
      category: 'Construction & Rénovation',
      description: 'Rénovation complète d\'un appartement de 120m² comprenant la réfection des sols, murs et plafonds, le remplacement de la cuisine et des salles de bains, ainsi que la mise aux normes de l\'installation électrique.',
      location: 'Plainpalais, Genève',
      year: 2023,
      images: ['/images/projects/renovation-appartement-1.jpg', '/images/projects/renovation-appartement-2.jpg', '/images/projects/renovation-appartement-3.jpg'],
      icon: <FaHome className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'installation-electrique-bureau',
      title: 'Installation électrique pour bureaux',
      category: 'Électricité & Dépannage',
      description: 'Installation électrique complète pour des bureaux de 250m², comprenant l\'éclairage, les prises de courant, le réseau informatique et la mise en place d\'un système domotique.',
      location: 'Quartier des Banques, Genève',
      year: 2023,
      images: ['/images/projects/installation-electrique-1.jpg', '/images/projects/installation-electrique-2.jpg'],
      icon: <FaBolt className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'securisation-immeuble',
      title: 'Sécurisation d\'un immeuble résidentiel',
      category: 'Serrurerie & Dépannage',
      description: 'Installation d\'un système de contrôle d\'accès et de vidéosurveillance pour un immeuble de 20 appartements, comprenant des serrures électroniques, un interphone vidéo et des caméras de sécurité.',
      location: 'Carouge, Genève',
      year: 2022,
      images: ['/images/projects/securisation-immeuble-1.jpg', '/images/projects/securisation-immeuble-2.jpg'],
      icon: <FaLock className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'nettoyage-bureaux',
      title: 'Nettoyage de bureaux d\'entreprise',
      category: 'Nettoyage & Conciergerie',
      description: 'Service de nettoyage régulier pour des bureaux d\'entreprise de 500m², comprenant le nettoyage des sols, des sanitaires, des cuisines et des espaces communs.',
      location: 'Centre-ville, Genève',
      year: 2023,
      images: ['/images/projects/nettoyage-bureaux-1.jpg', '/images/projects/nettoyage-bureaux-2.jpg'],
      icon: <FaBroom className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'demenagement-entreprise',
      title: 'Déménagement d\'une entreprise',
      category: 'Déménagement & Débarras',
      description: 'Déménagement complet d\'une entreprise de 30 employés, comprenant le démontage et remontage du mobilier, l\'emballage du matériel informatique et le transport de l\'ensemble des biens.',
      location: 'Plan-les-Ouates, Genève',
      year: 2022,
      images: ['/images/projects/demenagement-entreprise-1.jpg', '/images/projects/demenagement-entreprise-2.jpg'],
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'renovation-cuisine',
      title: 'Rénovation d\'une cuisine professionnelle',
      category: 'Construction & Rénovation',
      description: 'Rénovation complète d\'une cuisine professionnelle pour un restaurant, comprenant la plomberie, l\'électricité, la ventilation et l\'installation des équipements.',
      location: 'Eaux-Vives, Genève',
      year: 2022,
      images: ['/images/projects/renovation-cuisine-1.jpg', '/images/projects/renovation-cuisine-2.jpg'],
      icon: <FaTools className="h-6 w-6 text-blue-600" />,
    },
  ];

  // Filtres pour les catégories de projets
  const categories = [
    'Tous',
    'Construction & Rénovation',
    'Électricité & Dépannage',
    'Serrurerie & Dépannage',
    'Nettoyage & Conciergerie',
    'Déménagement & Débarras',
  ];

  return (
    <main className="flex-grow">
      <section className="bg-gray-50 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Projets réalisés', href: '/projets-realises', isCurrent: true },
            ]}
          />
          
          <SectionHeading
            title="Nos projets réalisés"
            subtitle="Découvrez nos réalisations récentes dans différents domaines"
            alignment="left"
            className="mt-8 mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={project.images[0] || '/images/placeholder-project.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    {project.icon}
                    <span className="ml-2">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Discuter d'un projet similaire
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Vous avez un projet en tête ?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Que vous souhaitiez rénover votre appartement, installer un système électrique, sécuriser votre immeuble 
              ou tout autre projet, notre équipe de professionnels est prête à vous accompagner.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 