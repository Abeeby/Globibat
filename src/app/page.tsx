import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaTools, FaLock, FaBroom, FaHome, FaBolt, FaTruck, FaStar, FaQuoteLeft, FaGoogle, FaCheckCircle, FaCalendarCheck, FaUserTie, FaPhoneAlt } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
// import { LocalBusinessJsonLd, FAQPageJsonLd } from 'next-seo';

export const metadata = {
  title: 'Globibat',
  description: 'Globibat, votre partenaire pour tous vos projets de construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande.',
  keywords: 'Globibat, entreprise construction Suisse romande, rénovation, électricité, serrurerie, nettoyage, déménagement, artisans Suisse romande',
};

// Services mis en avant
const featuredServices = [
  {
    id: 'construction',
    title: 'Construction & Rénovation',
    description: 'Transformez votre espace avec nos services complets de construction et rénovation.',
    icon: FaHome,
    href: '/services/construction-renovation',
  },
  {
    id: 'electricite',
    title: 'Électricité & dépannage',
    description: 'Installations électriques, dépannages, mises aux normes et conseils pour tous vos projets.',
    icon: FaBolt,
    href: '/services/electricite-depannage',
  },
  {
    id: 'serrurerie',
    title: 'Serrurerie & dépannage',
    description: 'Installation et réparation de serrures, ouverture de portes, pose de systèmes de sécurité.',
    icon: FaLock,
    href: '/services/serrurerie-depannage',
  },
];

// Projets récents
const recentProjects = [
  {
    id: 'renovation-appartement',
    title: 'Rénovation complète d\'un appartement',
    description: 'Rénovation complète d\'un appartement de 100m² à Plainpalais, Genève.',
    imageSrc: '/images/projects/renovation-appartement-plainpalais.jpg',
    href: '/projets-realises/renovation-appartement-plainpalais',
    location: 'Plainpalais, Genève',
    year: 2023,
  },
  {
    id: 'installation-electrique',
    title: 'Installation électrique bureaux',
    description: 'Installation électrique complète pour des bureaux dans le quartier des banques.',
    imageSrc: '/images/projects/installation-electrique-bureaux.jpg',
    href: '/projets-realises/installation-electrique-bureaux',
    location: 'Quartier des Banques, Genève',
    year: 2023,
  },
  {
    id: 'securite-immeuble',
    title: 'Sécurisation d\'un immeuble résidentiel',
    description: 'Installation d\'un système de contrôle d\'accès pour un immeuble de 40 appartements.',
    imageSrc: '/images/projects/securisation-immeuble.jpg',
    href: '/projets-realises/securisation-immeuble',
    location: 'Carouge, Genève',
    year: 2022,
  },
];

export default function HomePage() {
  const services = [
    {
      icon: <FaHome className="h-8 w-8 text-blue-600" />,
      title: 'Construction & Rénovation',
      description: 'Transformation, rénovation complète, extension et aménagement intérieur par des professionnels qualifiés.',
      link: '/services/construction-renovation',
    },
    {
      icon: <FaBolt className="h-8 w-8 text-blue-600" />,
      title: 'Électricité & Dépannage',
      description: 'Installation électrique, mise aux normes, domotique et interventions d\'urgence 24h/24.',
      link: '/services/electricite-depannage',
    },
    {
      icon: <FaLock className="h-8 w-8 text-blue-600" />,
      title: 'Serrurerie & Dépannage',
      description: 'Installation et réparation de serrures, ouverture de portes et interventions d\'urgence.',
      link: '/services/serrurerie-depannage',
    },
    {
      icon: <FaBroom className="h-8 w-8 text-blue-600" />,
      title: 'Nettoyage & Conciergerie',
      description: 'Nettoyage de fin de chantier, entretien régulier, nettoyage de vitres et conciergerie.',
      link: '/services/nettoyage-conciergerie',
    },
    {
      icon: <FaTruck className="h-8 w-8 text-blue-600" />,
      title: 'Débarras & Déménagement',
      description: 'Débarras d\'appartements, évacuation de déchets, déménagement et garde-meubles.',
      link: '/services/debarras-demenagement',
    },
    {
      icon: <FaTools className="h-8 w-8 text-blue-600" />,
      title: 'Autres services',
      description: 'Plomberie, chauffage, climatisation, menuiserie et autres services sur demande.',
      link: '/services',
    },
  ];

  const testimonials = [
    {
      content: 'Globibat a réalisé la rénovation complète de notre appartement. Le résultat est à la hauteur de nos attentes. Professionnalisme, respect des délais et qualité du travail, je recommande vivement !',
      rating: 5,
      author: 'Marie Dubois',
      position: 'Propriétaire, Genève',
    },
    {
      content: 'Nous faisons appel à Globibat pour l\'entretien de nos immeubles depuis plusieurs années. Leur réactivité et la qualité de leurs prestations sont irréprochables.',
      rating: 5,
      author: 'Jean Martin',
      position: 'Gérant d\'immeubles, Lausanne',
    },
    {
      content: 'Suite à un dégât des eaux, j\'ai contacté Globibat en urgence. Leur intervention rapide et efficace m\'a permis de limiter les dégâts. Un grand merci à toute l\'équipe !',
      rating: 5,
      author: 'Thomas Laurent',
      position: 'Restaurateur, Carouge',
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaCheckCircle className="h-8 w-8 text-blue-600" />,
      title: 'Expertise',
      description: 'Une équipe de professionnels qualifiés dans tous les corps de métier pour répondre à tous vos besoins.',
    },
    {
      icon: <FaStar className="h-8 w-8 text-blue-600" />,
      title: 'Qualité',
      description: 'Un travail soigné et des matériaux de qualité pour des résultats durables et esthétiques.',
    },
    {
      icon: <FaCalendarCheck className="h-8 w-8 text-blue-600" />,
      title: 'Fiabilité',
      description: 'Respect des délais et des engagements, transparence et communication tout au long du projet.',
    },
    {
      icon: <FaUserTie className="h-8 w-8 text-blue-600" />,
      title: 'Service client',
      description: "Une approche personnalisée, à l'écoute de vos besoins pour une satisfaction totale.",
    },
  ];

  return (
    <>
      {/* JSON-LD pour le SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "@id": "https://globibat.ch/#globibat",
            "name": "Globibat SA",
            "description": "Entreprise générale de construction, rénovation, électricité, serrurerie et déménagement en Suisse romande",
            "url": "https://globibat.ch",
            "telephone": "+41221234567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rue du Stand 42",
              "addressLocality": "Genève",
              "addressRegion": "GE",
              "postalCode": "1204",
              "addressCountry": "CH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.2044",
              "longitude": "6.1432"
            },
            "image": [
              "https://globibat.ch/images/logo/Logo Globibat.png",
              "https://globibat.ch/images/hero.jpg"
            ],
            "sameAs": [
              "https://www.google.com/search?client=firefox-b-d&q=globibat+#mpd=~1653490024473585108"
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "16:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "17"
            },
            "priceRange": "$$"
          })
        }}
      />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quels sont vos délais d'intervention pour un dépannage urgent ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour les dépannages urgents en électricité et serrurerie, nous intervenons dans l'heure qui suit votre appel, 24h/24 et 7j/7 sur Genève et ses environs."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous des devis gratuits ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous proposons des devis gratuits et sans engagement pour tous vos projets de construction, rénovation et aménagement. Un expert se déplace pour évaluer vos besoins."
                }
              },
              {
                "@type": "Question",
                "name": "Quelles zones géographiques couvrez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous intervenons dans toute la Suisse romande, principalement sur Genève, Lausanne, Nyon et leurs alentours. Pour les projets importants, nous pouvons étendre notre zone d'intervention."
                }
              },
              {
                "@type": "Question",
                "name": "Êtes-vous agréés et assurés ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, Globibat SA est une entreprise agréée, disposant de toutes les assurances nécessaires (RC professionnelle, garantie décennale) pour garantir la qualité et la sécurité de nos prestations."
                }
              },
              {
                "@type": "Question",
                "name": "Quels moyens de paiement acceptez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous acceptons les virements bancaires, cartes de crédit (Visa, Mastercard), Twint et paiements en espèces. Pour les gros projets, un échelonnement des paiements est possible."
                }
              },
              {
                "@type": "Question",
                "name": "Faites-vous des travaux de rénovation énergétique ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, nous sommes spécialisés dans la rénovation énergétique : isolation thermique, changement de fenêtres, installation de pompes à chaleur. Nous vous conseillons sur les subventions disponibles en Suisse romande."
                }
              }
            ]
          })
        }}
      />
      
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/hero.jpg" 
            alt="Globibat" 
            fill 
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Votre partenaire de confiance pour tous vos projets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed">
              Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande avec une garantie de qualité.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact#devis" 
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Demander un devis gratuit
              </Link>
              <Link 
                href="/projets-realises" 
                className="inline-flex items-center justify-center px-6 py-4 border border-white text-base font-bold rounded-md text-white hover:bg-white/10 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                Voir nos réalisations
              </Link>
              <a 
                href="tel:+41215050062" 
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-md text-white bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaPhoneAlt className="mr-2" />
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos services"
            subtitle="Des solutions complètes pour tous vos projets"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  En savoir plus <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nos projets récents"
            subtitle="Découvrez nos dernières réalisations"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.imageSrc} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center text-white text-sm mb-2">
                      <span className="mr-4">{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <Link 
                      href={project.href}
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                    >
                      Voir le projet
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link 
                    href={project.href} 
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Découvrir <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/projets-realises" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 dark:border-blue-500 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Voir tous nos projets <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about/team.jpg" 
                alt="L'équipe Globibat" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                title="À propos de Globibat"
                subtitle="Votre partenaire de confiance en Suisse romande"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4 mt-6">
                Fondée en 2025 en Suisse romande, Globibat est une entreprise générale de construction créée par deux jeunes passionnés qui relient beaucoup de compétences dans les chantiers. Nous offrons une large gamme de services pour répondre à tous vos besoins en matière de construction, rénovation, électricité, serrurerie, nettoyage et déménagement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Notre équipe de professionnels qualifiés et expérimentés s'engage à vous fournir des prestations de qualité, dans le respect des délais et des budgets convenus.
              </p>
              <Link 
                href="/a-propos" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pourquoi nous choisir ?"
            subtitle="Ce qui fait notre différence"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-900 rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Avis clients Google"
            subtitle="Ce que nos clients disent de nous"
            centered
          />
          
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaStar className="text-yellow-400 h-8 w-8" />
                <FaStar className="text-yellow-400 h-8 w-8" />
                <FaStar className="text-yellow-400 h-8 w-8" />
                <FaStar className="text-yellow-400 h-8 w-8" />
                <FaStar className="text-yellow-400 h-8 w-8" />
              </div>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">Note moyenne de 5.0/5</p>
              <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center mt-2">
                <FaGoogle className="mr-2 text-blue-600" /> Basé sur 17 avis Google
              </p>
              
              <Link 
                href="https://www.google.com/search?client=firefox-b-d&q=globibat+#mpd=~1653490024473585108/customers/reviews"
                target="_blank"
                rel="noopener noreferrer" 
                className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Voir tous nos avis sur Google
              </Link>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="h-8 w-8 text-blue-200 mr-4" />
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className="h-5 w-5 text-yellow-400" 
                        />
                      ))}
                    </div>
                    <div className="flex items-center">
                      <FaGoogle className="text-blue-600 mr-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Avis Google vérifié</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.content}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="font-medium text-gray-900 dark:text-gray-100">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact#devis" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-blue-600 bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-bold rounded-md text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Promo Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Calculateur de volume"
                subtitle="Estimez facilement le volume de vos biens pour votre déménagement"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4 mt-6">
                Utilisez notre calculateur de volume en ligne pour estimer facilement la taille du camion nécessaire pour votre déménagement. Un outil simple et pratique pour planifier votre déménagement sans stress.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sélectionnez simplement les meubles et objets que vous souhaitez déménager, et notre calculateur vous donnera une estimation précise du volume total et vous recommandera la taille de camion adaptée.
              </p>
              <Link 
                href="/calculateur-volume" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Utiliser le calculateur
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/calculator.jpg" 
                alt="Calculateur de volume pour déménagement" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bouton d'appel flottant */}
      <a 
        href="tel:+41215050062" 
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Appelez-nous maintenant"
      >
        <FaPhoneAlt size={24} />
      </a>
    </main>
    </>
  );
} 