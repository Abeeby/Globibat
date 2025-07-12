import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaHome, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaBuilding, FaCheck, FaPhoneAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Rénovation complète d\'un appartement à Plainpalais | Globibat',
  description: 'Découvrez notre projet de rénovation complète d\'un appartement de 120m² à Plainpalais, Genève. Réfection des sols, murs, plafonds, cuisine et salles de bains.',
  keywords: 'rénovation appartement Genève, rénovation Plainpalais, rénovation cuisine salle de bains, réfection appartement, projet rénovation Globibat',
};

export default function ProjectDetailPage() {
  // Données du projet (à remplacer par des données réelles)
  const project = {
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
    duration: '3 mois',
    challenge: 'Le principal défi de ce projet était de moderniser un appartement ancien tout en préservant son charme d\'origine. Nous avons dû travailler dans un espace restreint pour la cuisine et les salles de bains, ce qui a nécessité une planification minutieuse et des solutions sur mesure.',
    solutions: [
      'Développement d\'un plan d\'aménagement optimisé pour maximiser l\'espace',
      'Utilisation de matériaux de qualité supérieure pour assurer la durabilité',
      'Installation d\'un système d\'éclairage moderne et économe en énergie',
      'Création de rangements sur mesure pour optimiser l\'espace',
      'Rénovation complète de l\'installation électrique pour respecter les normes de sécurité',
    ],
    results: 'L\'appartement a été entièrement transformé, offrant un espace de vie moderne, lumineux et fonctionnel. La cuisine et les salles de bains ont été entièrement repensées pour maximiser l\'espace disponible. Les finitions de haute qualité garantissent la durabilité et l\'élégance de la rénovation.',
    testimonial: {
      content: 'L\'équipe de Globibat a fait un travail exceptionnel pour la rénovation de notre appartement. Ils ont été à l\'écoute de nos besoins et ont su apporter des solutions créatives à chaque problème rencontré. Le résultat dépasse nos attentes, nous recommandons vivement leurs services.',
      author: 'M. et Mme Dubois',
    },
    beforeAfter: [
      {
        title: 'Cuisine',
        before: '/images/realisations/1.png',
        after: '/images/realisations/2.png',
      },
      {
        title: 'Salle de bain',
        before: '/images/realisations/3.png',
        after: '/images/realisations/1.png',
      },
    ],
  };

  // Liste des services connexes
  const relatedServices = [
    {
      title: 'Construction & Rénovation',
      description: 'Transformez votre espace avec nos services de rénovation sur mesure',
      href: '/services/construction-renovation',
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Électricité & Dépannage',
      description: 'Installations électriques conformes aux normes de sécurité',
      href: '/services/electricite-depannage',
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <main className="flex-grow">
      <section className="bg-gray-50 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Projets réalisés', href: '/projets-realises' },
              { label: project.title, href: `/projets-realises/${project.id}`, isCurrent: true },
            ]}
          />
          
          <div className="mt-8 mb-12">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.icon}
              <span className="ml-2">{project.category}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">{project.title}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">{project.description}</p>
            
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-blue-600" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaCalendarAlt className="h-5 w-5 mr-2 text-blue-600" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaClock className="h-5 w-5 mr-2 text-blue-600" />
                <span>Durée: {project.duration}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaBuilding className="h-5 w-5 mr-2 text-blue-600" />
                <span>Client: {project.client}</span>
              </div>
            </div>
          </div>
          
          {/* Galerie d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-slate-700">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Le défi</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.challenge}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Notre approche</h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Le résultat</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.results}</p>
              </div>
            </div>
            
            {/* Avant / Après */}
            <SectionHeading
              title="Avant / Après"
              subtitle="Voyez la transformation"
              alignment="center"
              className="mb-12"
            />
            
            <div className="space-y-16 mb-16">
              {project.beforeAfter.map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">{item.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-sm font-bold px-3 py-1 rounded">Avant</div>
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={item.before}
                          alt={`${item.title} avant`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">Après</div>
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={item.after}
                          alt={`${item.title} après`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Témoignage */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-16">
              <div className="text-center mb-6">
                <svg className="w-12 h-12 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic text-center mb-6">{project.testimonial.content}</p>
              <p className="text-center font-bold text-gray-900 dark:text-gray-100">{project.testimonial.author}</p>
            </div>
            
            {/* Services connexes */}
            <SectionHeading
              title="Services connexes"
              subtitle="Découvrez nos autres services pour votre projet"
              alignment="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {relatedServices.map((service, index) => (
                <Link 
                  key={index} 
                  href={service.href}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-gray-100">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                  <div className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center">
                    En savoir plus
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Vous avez un projet similaire ?</h3>
                <p className="text-lg text-blue-100">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet de rénovation. 
                  Notre équipe se fera un plaisir de vous conseiller et de vous accompagner 
                  tout au long de votre projet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 shadow-md"
                >
                  Demander un devis
                </Link>
                <Link 
                  href="tel:+41223456789" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  <FaPhoneAlt className="mr-2" />
                  Nous appeler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Explorez nos autres projets"
              subtitle="Découvrez notre expertise à travers nos réalisations"
              alignment="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Afficher d'autres projets ici */}
              {[1, 2, 3].map((_, index) => (
                <Link 
                  key={index} 
                  href="/projets-realises"
                  className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/images/realisations/${index + 4}.png`}
                      alt={`Projet ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Projet {index + 1}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Voir plus de projets</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 