import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBuilding, FaHome, FaTools, FaBolt, FaLock, FaBroom, FaFilter, FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Projets réalisés | Globibat - Entreprise générale de construction',
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
  tags?: string[];
  client?: string;
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
      images: ['/images/realisations/1.png', '/images/realisations/2.png', '/images/realisations/3.png'],
      icon: <FaHome className="h-6 w-6 text-blue-600" />,
      tags: ['Rénovation', 'Appartement', 'Cuisine', 'Salle de bain'],
      client: 'Particulier',
    },
    {
      id: 'installation-electrique-bureau',
      title: 'Installation électrique pour bureaux',
      category: 'Électricité & Dépannage',
      description: 'Installation électrique complète pour des bureaux de 250m², comprenant l\'éclairage, les prises de courant, le réseau informatique et la mise en place d\'un système domotique.',
      location: 'Quartier des Banques, Genève',
      year: 2023,
      images: ['/images/realisations/4.png', '/images/realisations/5.png'],
      icon: <FaBolt className="h-6 w-6 text-blue-600" />,
      tags: ['Électricité', 'Bureaux', 'Domotique', 'Informatique'],
      client: 'Entreprise de conseil',
    },
    {
      id: 'securisation-immeuble',
      title: 'Sécurisation d\'un immeuble résidentiel',
      category: 'Serrurerie & Dépannage',
      description: 'Installation d\'un système de contrôle d\'accès et de vidéosurveillance pour un immeuble de 20 appartements, comprenant des serrures électroniques, un interphone vidéo et des caméras de sécurité.',
      location: 'Carouge, Genève',
      year: 2022,
      images: ['/images/realisations/6.png', '/images/realisations/7.png'],
      icon: <FaLock className="h-6 w-6 text-blue-600" />,
      tags: ['Sécurité', 'Contrôle d\'accès', 'Immeuble', 'Vidéosurveillance'],
      client: 'Régie immobilière',
    },
    {
      id: 'nettoyage-bureaux',
      title: 'Nettoyage de bureaux d\'entreprise',
      category: 'Nettoyage & Conciergerie',
      description: 'Service de nettoyage régulier pour des bureaux d\'entreprise de 500m², comprenant le nettoyage des sols, des sanitaires, des cuisines et des espaces communs.',
      location: 'Centre-ville, Genève',
      year: 2023,
      images: ['/images/realisations/8.png', '/images/realisations/9.png'],
      icon: <FaBroom className="h-6 w-6 text-blue-600" />,
      tags: ['Nettoyage', 'Bureaux', 'Entretien régulier'],
      client: 'Entreprise financière',
    },
    {
      id: 'demenagement-entreprise',
      title: 'Déménagement d\'une entreprise',
      category: 'Déménagement & Débarras',
      description: 'Déménagement complet d\'une entreprise de 30 employés, comprenant le démontage et remontage du mobilier, l\'emballage du matériel informatique et le transport de l\'ensemble des biens.',
      location: 'Plan-les-Ouates, Genève',
      year: 2022,
      images: ['/images/realisations/10.png', '/images/realisations/11.png'],
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
      tags: ['Déménagement', 'Entreprise', 'Transport', 'Informatique'],
      client: 'Startup technologique',
    },
    {
      id: 'renovation-cuisine',
      title: 'Rénovation d\'une cuisine professionnelle',
      category: 'Construction & Rénovation',
      description: 'Rénovation complète d\'une cuisine professionnelle pour un restaurant, comprenant la plomberie, l\'électricité, la ventilation et l\'installation des équipements.',
      location: 'Eaux-Vives, Genève',
      year: 2022,
      images: ['/images/realisations/12.png', '/images/realisations/1.png'],
      icon: <FaTools className="h-6 w-6 text-blue-600" />,
      tags: ['Rénovation', 'Cuisine', 'Restaurant', 'Professionnel'],
      client: 'Restaurant gastronomique',
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

  // Tous les tags uniques
  const allTags = [...new Set(projects.flatMap(project => project.tags || []))];

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
          
          {/* Filtres */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaFilter className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filtrer les projets</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Catégorie</label>
                <div className="relative">
                  <select 
                    className="block w-full rounded-md border-gray-300 dark:border-slate-600 py-2 pl-3 pr-10 text-base dark:bg-slate-800 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Année</label>
                <div className="relative">
                  <select 
                    className="block w-full rounded-md border-gray-300 dark:border-slate-600 py-2 pl-3 pr-10 text-base dark:bg-slate-800 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">Toutes les années</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recherche</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Rechercher un projet..." 
                    className="block w-full rounded-md border-gray-300 dark:border-slate-600 py-2 pl-10 pr-3 text-base dark:bg-slate-800 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSearch className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
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
                  
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="h-4 w-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="h-4 w-4 mr-1" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <Link 
                      href={`/projets-realises/${project.id}`} 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Voir les détails
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
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Notre processus de travail"
              subtitle="Comment nous réalisons vos projets de A à Z"
              alignment="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Consultation</h3>
                <p className="text-gray-700 dark:text-gray-300">Nous discutons de votre projet, vos besoins et votre budget pour établir un plan d'action personnalisé.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Réalisation</h3>
                <p className="text-gray-700 dark:text-gray-300">Notre équipe d'experts met en œuvre votre projet avec précision, en respectant les délais et le budget convenus.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Suivi</h3>
                <p className="text-gray-700 dark:text-gray-300">Nous assurons un suivi après la réalisation de votre projet pour garantir votre entière satisfaction.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Vous avez un projet en tête ?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
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
        </div>
      </section>
    </main>
  );
} 