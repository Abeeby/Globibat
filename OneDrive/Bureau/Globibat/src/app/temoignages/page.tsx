import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaStar, FaQuoteLeft, FaSearch, FaFilter, FaBuilding, FaHome, FaTools, FaBolt, FaLock, FaBroom } from 'react-icons/fa';

export const metadata = {
  title: 'Témoignages clients | Globibat - Avis sur nos services de construction et rénovation',
  description: 'Découvrez les témoignages de nos clients satisfaits sur nos services de construction, rénovation, électricité, serrurerie et nettoyage en Suisse romande.',
  keywords: 'témoignages Globibat, avis clients construction, avis rénovation Genève, témoignages électricité, satisfaction client, retours client Suisse romande',
};

// Interface pour les témoignages
interface Testimonial {
  id: string;
  name: string;
  position?: string;
  company?: string;
  location: string;
  service: string;
  serviceIcon: React.ReactNode;
  rating: number;
  date: string;
  content: string;
  image?: string;
  project?: string;
  projectLink?: string;
  verified: boolean;
}

export default function TestimonialsPage() {
  // Liste des témoignages
  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      name: 'Jean Dupont',
      position: 'Propriétaire',
      location: 'Genève',
      service: 'Construction & Rénovation',
      serviceIcon: <FaHome className="h-5 w-5 text-blue-600" />,
      rating: 5,
      date: '15 mai 2023',
      content: 'L\'équipe de Globibat a réalisé la rénovation complète de notre appartement. Leur professionnalisme, leur réactivité et la qualité de leur travail ont dépassé nos attentes. Ils ont respecté les délais et le budget convenus. Nous sommes ravis du résultat et recommandons vivement leurs services à tous ceux qui cherchent une entreprise fiable pour leurs projets de rénovation.',
      image: '/images/realisations/1.png',
      project: 'Rénovation complète d\'un appartement',
      projectLink: '/projets-realises/renovation-appartement-plainpalais',
      verified: true,
    },
    {
      id: 'testimonial-2',
      name: 'Sophie Martin',
      position: 'Directrice',
      company: 'Cabinet d\'architecture SMD',
      location: 'Carouge',
      service: 'Électricité & Dépannage',
      serviceIcon: <FaBolt className="h-5 w-5 text-blue-600" />,
      rating: 5,
      date: '3 juin 2023',
      content: 'Nous avons fait appel à Globibat pour l\'installation électrique complète d\'un immeuble de bureaux. L\'équipe a su s\'adapter à nos contraintes et proposer des solutions innovantes pour optimiser la consommation électrique du bâtiment. La coordination avec les autres corps de métier a été parfaite, et le résultat est à la hauteur de nos attentes. Un grand merci pour votre expertise et votre professionnalisme.',
      image: '/images/realisations/4.png',
      project: 'Installation électrique pour bureaux',
      projectLink: '/projets-realises/installation-electrique-bureau',
      verified: true,
    },
    {
      id: 'testimonial-3',
      name: 'Laurent Blanc',
      position: 'Gérant',
      company: 'Régie immobilière Genève',
      location: 'Genève',
      service: 'Serrurerie & Dépannage',
      serviceIcon: <FaLock className="h-5 w-5 text-blue-600" />,
      rating: 4,
      date: '22 avril 2023',
      content: 'Excellent travail de l\'équipe de Globibat pour la sécurisation de notre immeuble. L\'installation du système de contrôle d\'accès et des serrures électroniques s\'est déroulée sans encombre, et les résidents sont très satisfaits du résultat. La qualité du service et le suivi après-installation sont particulièrement appréciables.',
      image: '/images/realisations/7.png',
      project: 'Sécurisation d\'un immeuble résidentiel',
      projectLink: '/projets-realises/securisation-immeuble',
      verified: true,
    },
    {
      id: 'testimonial-4',
      name: 'Marie Dubois',
      position: 'Responsable administrative',
      company: 'Société financière',
      location: 'Genève',
      service: 'Nettoyage & Conciergerie',
      serviceIcon: <FaBroom className="h-5 w-5 text-blue-600" />,
      rating: 5,
      date: '10 juillet 2023',
      content: 'Nous collaborons avec Globibat depuis maintenant 2 ans pour l\'entretien régulier de nos bureaux, et nous sommes pleinement satisfaits. L\'équipe est ponctuelle, efficace et discrète. Les locaux sont toujours impeccables après leur passage, et leur flexibilité est un véritable atout pour s\'adapter à nos horaires. Une collaboration que nous espérons poursuivre encore longtemps.',
      image: '/images/realisations/8.png',
      project: 'Nettoyage de bureaux d\'entreprise',
      projectLink: '/projets-realises/nettoyage-bureaux',
      verified: true,
    },
    {
      id: 'testimonial-5',
      name: 'Thomas Lefèvre',
      position: 'CEO',
      company: 'Startup technologique',
      location: 'Plan-les-Ouates',
      service: 'Déménagement & Débarras',
      serviceIcon: <FaBuilding className="h-5 w-5 text-blue-600" />,
      rating: 5,
      date: '5 août 2023',
      content: 'Je tiens à remercier l\'équipe de Globibat pour leur professionnalisme lors du déménagement de notre entreprise. La logistique était complexe, avec du matériel informatique sensible et de nombreux documents confidentiels, mais tout s\'est déroulé parfaitement. L\'équipe a été efficace, soigneuse et très bien organisée. Un service de qualité que je recommande sans hésitation.',
      image: '/images/realisations/10.png',
      project: 'Déménagement d\'une entreprise',
      projectLink: '/projets-realises/demenagement-entreprise',
      verified: true,
    },
    {
      id: 'testimonial-6',
      name: 'Pierre Moreau',
      position: 'Chef cuisinier',
      company: 'Restaurant gastronomique',
      location: 'Eaux-Vives',
      service: 'Construction & Rénovation',
      serviceIcon: <FaTools className="h-5 w-5 text-blue-600" />,
      rating: 5,
      date: '20 septembre 2023',
      content: 'La rénovation de notre cuisine professionnelle était un défi majeur pour notre établissement. Globibat a su le relever avec brio, en respectant nos contraintes techniques et notre calendrier serré. La coordination des différents corps de métier a été parfaite, et la qualité des finitions est irréprochable. Nous pouvons désormais travailler dans un espace fonctionnel, moderne et parfaitement adapté à nos besoins.',
      image: '/images/realisations/12.png',
      project: 'Rénovation d\'une cuisine professionnelle',
      projectLink: '/projets-realises/renovation-cuisine',
      verified: true,
    },
  ];

  // Liste des services
  const services = [
    'Tous',
    'Construction & Rénovation',
    'Électricité & Dépannage',
    'Serrurerie & Dépannage',
    'Nettoyage & Conciergerie',
    'Déménagement & Débarras',
  ];

  // Statistiques globales
  const stats = {
    averageRating: 4.8,
    totalReviews: testimonials.length,
    percentageFiveStars: 83,
    percentageFourStars: 17,
    percentageThreeStars: 0,
    percentageTwoStars: 0,
    percentageOneStars: 0,
  };

  return (
    <main className="flex-grow">
      <section className="bg-gray-50 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Témoignages', href: '/temoignages', isCurrent: true },
            ]}
          />
          
          <SectionHeading
            title="Témoignages de nos clients"
            subtitle="Découvrez ce que nos clients disent de nos services"
            alignment="left"
            className="mt-8 mb-12"
          />
          
          {/* Statistiques des avis */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Satisfaction client</h3>
                <div className="flex items-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 dark:text-gray-100 mr-4">{stats.averageRating}</div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`h-6 w-6 ${i < Math.round(stats.averageRating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Basé sur {stats.totalReviews} avis</p>
                  </div>
                </div>
                
                {/* Distribution des étoiles */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center">
                      <div className="flex items-center w-20">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">{stars}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`h-3 w-3 ${i < stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600"
                          style={{ width: `${
                            stars === 5 ? stats.percentageFiveStars :
                            stars === 4 ? stats.percentageFourStars :
                            stars === 3 ? stats.percentageThreeStars :
                            stars === 2 ? stats.percentageTwoStars :
                            stats.percentageOneStars
                          }%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-10 text-right">
                        {
                          stars === 5 ? stats.percentageFiveStars :
                          stars === 4 ? stats.percentageFourStars :
                          stars === 3 ? stats.percentageThreeStars :
                          stars === 2 ? stats.percentageTwoStars :
                          stats.percentageOneStars
                        }%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Filtrer les témoignages</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service</label>
                    <div className="relative">
                      <select 
                        className="block w-full rounded-md border-gray-300 dark:border-slate-600 py-2 pl-3 pr-10 text-base dark:bg-slate-800 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Évaluation</label>
                    <div className="flex space-x-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button 
                          key={stars}
                          className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                        >
                          {stars}
                          <FaStar className="ml-1 h-3 w-3 text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recherche</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Rechercher dans les témoignages..." 
                        className="block w-full rounded-md border-gray-300 dark:border-slate-600 py-2 pl-10 pr-3 text-base dark:bg-slate-800 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Liste des témoignages */}
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-gray-100 dark:border-slate-700"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {testimonial.image && (
                    <div className="w-full md:w-1/3">
                      <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={`Projet pour ${testimonial.name}`}
                          fill
                          className="object-cover"
                        />
                        {testimonial.project && testimonial.projectLink && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                            <p className="text-sm font-medium">{testimonial.project}</p>
                            <Link 
                              href={testimonial.projectLink} 
                              className="text-xs text-blue-300 hover:underline"
                            >
                              Voir le projet
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-full ${testimonial.image ? 'md:w-2/3' : ''}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium mr-3">
                            {testimonial.serviceIcon}
                            <span className="ml-1">{testimonial.service}</span>
                          </div>
                          {testimonial.verified && (
                            <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                              <svg className="h-3 w-3 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                              Vérifié
                            </div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                        {(testimonial.position || testimonial.company) && (
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.position}
                            {testimonial.position && testimonial.company && ', '}
                            {testimonial.company}
                          </p>
                        )}
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                          {testimonial.location} | {testimonial.date}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative pl-8 mt-6">
                      <FaQuoteLeft className="absolute top-0 left-0 h-5 w-5 text-blue-600 opacity-50" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{testimonial.content}</p>
                    </div>
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
              title="Pourquoi nos clients nous font confiance"
              subtitle="Les valeurs qui font notre réputation"
              alignment="center"
              className="mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Qualité</h3>
                <p className="text-gray-700 dark:text-gray-300">Nous mettons un point d'honneur à fournir des prestations de haute qualité, avec une attention particulière portée aux détails et aux finitions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Communication</h3>
                <p className="text-gray-700 dark:text-gray-300">Nous maintenons une communication transparente et régulière avec nos clients tout au long du projet, pour assurer leur satisfaction.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Ponctualité</h3>
                <p className="text-gray-700 dark:text-gray-300">Nous respectons les délais convenus et nous organisons efficacement pour livrer votre projet dans les temps, sans compromis sur la qualité.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Partagez votre expérience</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Vous avez fait appel à nos services et souhaitez partager votre expérience ? 
                Nous serions ravis de recueillir votre témoignage et de connaître votre niveau de satisfaction.
              </p>
              <Link 
                href="/contact?subject=Témoignage" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Laisser un témoignage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 