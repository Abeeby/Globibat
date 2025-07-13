import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaCheck, FaShieldAlt, FaCertificate, FaMedal, FaHandshake } from 'react-icons/fa';

export const metadata = {
  title: 'Certifications & Accréditations | Globibat',
  description: 'Découvrez les certifications et accréditations de Globibat, garantissant la qualité et le professionnalisme de nos services de construction, rénovation, électricité, serrurerie, déménagement et nettoyage en Suisse romande.',
  keywords: 'certifications Globibat, accréditations construction Suisse romande, entreprise certifiée, normes qualité, ISO 9001, certifications électricité, accréditations professionnelles',
};

// Définition des types pour les certifications
interface Certification {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  year: number;
  link?: string;
}

// Définition des types pour les catégories
interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function CertificationsPage() {
  // Données des catégories
  const categories: Category[] = [
    {
      id: 'qualite',
      name: 'Qualité & Management',
      description: 'Certifications attestant de notre engagement envers la qualité de nos services et l\'efficacité de notre système de management.',
      icon: <FaShieldAlt className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'construction',
      name: 'Construction & Rénovation',
      description: 'Accréditations spécifiques au domaine de la construction et de la rénovation, garantissant notre expertise technique et notre respect des normes du bâtiment.',
      icon: <FaCertificate className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'electricite',
      name: 'Électricité',
      description: 'Autorisations et certifications obligatoires pour exercer dans le domaine de l\'électricité, assurant la sécurité et la conformité de nos installations.',
      icon: <FaMedal className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'partenariats',
      name: 'Partenariats & Affiliations',
      description: 'Nos affiliations à des associations professionnelles et nos partenariats avec des marques reconnues dans le secteur.',
      icon: <FaHandshake className="h-6 w-6 text-blue-600" />,
    },
  ];

  // Données des certifications (à remplacer par des données réelles)
  const certifications: Certification[] = [
    // Qualité & Management
    {
      id: 'iso-9001',
      name: 'ISO 9001:2015',
      description: 'Certification internationale attestant de la mise en place d\'un système de management de la qualité efficace. Cette norme garantit notre engagement à améliorer continuellement nos processus pour satisfaire nos clients et respecter les exigences réglementaires.',
      image: '/images/certifications/iso-9001.jpg',
      category: 'Qualité & Management',
      year: 2020,
      link: 'https://www.iso.org/fr/iso-9001-quality-management.html',
    },
    {
      id: 'iso-14001',
      name: 'ISO 14001:2015',
      description: 'Certification environnementale démontrant notre engagement à réduire notre impact sur l\'environnement. Elle atteste de notre politique de gestion des déchets, d\'économie d\'énergie et d\'utilisation de matériaux respectueux de l\'environnement.',
      image: '/images/certifications/iso-14001.jpg',
      category: 'Qualité & Management',
      year: 2021,
      link: 'https://www.iso.org/fr/iso-14001-environmental-management.html',
    },
    {
      id: 'label-eco-entreprise',
      name: 'Label Éco-Entreprise',
      description: 'Ce label suisse reconnaît notre démarche de développement durable et notre engagement à réduire notre empreinte écologique dans toutes nos activités. Il valorise nos efforts en matière d\'économie d\'énergie, de gestion des déchets et d\'utilisation de produits écologiques.',
      image: '/images/certifications/eco-entreprise.jpg',
      category: 'Qualité & Management',
      year: 2022,
    },

    // Construction & Rénovation
    {
      id: 'sia',
      name: 'Membre SIA',
      description: 'Affiliation à la Société suisse des ingénieurs et des architectes (SIA), garantissant notre respect des normes techniques et éthiques dans le domaine de la construction. Cette affiliation témoigne de notre professionnalisme et de notre engagement envers l\'excellence technique.',
      image: '/images/certifications/sia.jpg',
      category: 'Construction & Rénovation',
      year: 2015,
      link: 'https://www.sia.ch/fr/',
    },
    {
      id: 'minergie',
      name: 'Partenaire Minergie',
      description: 'En tant que partenaire Minergie, nous sommes qualifiés pour réaliser des constructions et rénovations selon ce standard suisse de haute efficacité énergétique. Cette certification atteste de notre expertise dans la construction durable et économe en énergie.',
      image: '/images/certifications/minergie.jpg',
      category: 'Construction & Rénovation',
      year: 2018,
      link: 'https://www.minergie.ch/fr/',
    },
    {
      id: 'fmb',
      name: 'Membre FMB',
      description: 'Affiliation à la Fédération genevoise des métiers du bâtiment (FMB), regroupant les entreprises du secteur de la construction à Genève. Cette appartenance confirme notre ancrage local et notre respect des conventions collectives de travail.',
      image: '/images/certifications/fmb.jpg',
      category: 'Construction & Rénovation',
      year: 2012,
      link: 'https://www.fmb-ge.ch/',
    },

    // Électricité
    {
      id: 'esti',
      name: 'Autorisation générale d\'installer ESTI',
      description: 'Autorisation délivrée par l\'Inspection fédérale des installations à courant fort (ESTI), obligatoire pour exercer des activités dans le domaine des installations électriques en Suisse. Cette autorisation atteste de nos compétences techniques et de notre respect des normes de sécurité.',
      image: '/images/certifications/esti.jpg',
      category: 'Électricité',
      year: 2010,
      link: 'https://www.esti.admin.ch/fr/themes/autorisations-dinstaller',
    },
    {
      id: 'asce',
      name: 'Membre ASCE',
      description: 'Affiliation à l\'Association Suisse des Contrôles d\'Installations Électriques (ASCE), garantissant notre expertise dans le contrôle et la vérification des installations électriques selon les normes en vigueur.',
      image: '/images/certifications/asce.jpg',
      category: 'Électricité',
      year: 2016,
      link: 'https://www.vsek.ch/fr/',
    },
    {
      id: 'kbob',
      name: 'Certification KBOB',
      description: 'Cette certification atteste de notre respect des recommandations de la Coordination des services fédéraux de la construction et de l\'immobilier (KBOB) en matière d\'installations électriques durables et économes en énergie.',
      image: '/images/certifications/kbob.jpg',
      category: 'Électricité',
      year: 2019,
      link: 'https://www.kbob.admin.ch/kbob/fr/home.html',
    },

    // Partenariats & Affiliations
    {
      id: 'suissetec',
      name: 'Membre suissetec',
      description: 'Affiliation à l\'Association suisse et liechtensteinoise de la technique du bâtiment (suissetec), regroupant les professionnels des installations sanitaires, chauffage, ventilation et ferblanterie. Cette appartenance confirme notre expertise technique et notre engagement envers la formation professionnelle.',
      image: '/images/certifications/suissetec.jpg',
      category: 'Partenariats & Affiliations',
      year: 2014,
      link: 'https://suissetec.ch/fr/',
    },
    {
      id: 'asepp',
      name: 'Membre ASEPP',
      description: 'Affiliation à l\'Association Suisse des Entrepreneurs Plâtriers-Peintres (ASEPP), garantissant notre professionnalisme et notre respect des normes dans les travaux de plâtrerie et peinture.',
      image: '/images/certifications/asepp.jpg',
      category: 'Partenariats & Affiliations',
      year: 2013,
      link: 'https://www.smgv.ch/fr/',
    },
    {
      id: 'usm',
      name: 'Membre USM',
      description: 'Affiliation à l\'Union Suisse du Métal (USM), attestant de notre expertise dans les travaux de serrurerie et de construction métallique. Cette appartenance garantit notre respect des normes techniques et des conventions collectives de travail dans ce domaine.',
      image: '/images/certifications/usm.jpg',
      category: 'Partenariats & Affiliations',
      year: 2015,
      link: 'https://www.usm.ch/fr/',
    },
  ];

  // Regrouper les certifications par catégorie
  const certificationsByCategory: { [key: string]: Certification[] } = {};
  
  certifications.forEach(certification => {
    if (!certificationsByCategory[certification.category]) {
      certificationsByCategory[certification.category] = [];
    }
    certificationsByCategory[certification.category].push(certification);
  });

  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Certifications', href: '/certifications' },
            ]}
          />
          
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Nos certifications et accréditations"
              subtitle="Garanties de qualité et de professionnalisme"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none mb-12">
                <p className="text-lg text-gray-700">
                  Chez Globibat, nous nous engageons à offrir des services de la plus haute qualité, 
                  dans le respect des normes et réglementations en vigueur. Nos certifications et 
                  accréditations témoignent de notre professionnalisme et de notre expertise dans 
                  tous nos domaines d'activité.
                </p>
                <p className="text-gray-600">
                  Ces reconnaissances officielles sont le fruit de notre engagement constant envers 
                  l'excellence, la sécurité et la satisfaction client. Elles vous garantissent que 
                  vos projets sont confiés à des professionnels qualifiés et reconnus dans leur domaine.
                </p>
              </div>
              
              {/* Certifications par catégorie */}
              <div className="space-y-16">
                {categories.map((category) => (
                  certificationsByCategory[category.name] && certificationsByCategory[category.name].length > 0 && (
                    <div key={category.id} id={category.id} className="scroll-mt-24">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          {category.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                          <p className="text-gray-600 mt-1">{category.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificationsByCategory[category.name].map((certification) => (
                          <div key={certification.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                              <Image
                                src={certification.image}
                                alt={certification.name}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="p-4"
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{certification.name}</h3>
                                <span className="text-sm text-gray-500">Depuis {certification.year}</span>
                              </div>
                              <p className="text-gray-600 mb-4">{certification.description}</p>
                              {certification.link && (
                                <a 
                                  href={certification.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                                >
                                  En savoir plus
                                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
            
            {/* Nos engagements */}
            <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nos engagements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité</h3>
                  <p className="text-gray-600">
                    Nous nous engageons à fournir des services et des réalisations de la plus haute qualité, 
                    en utilisant des matériaux et des équipements de premier choix, et en appliquant des 
                    méthodes de travail rigoureuses.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
                  <p className="text-gray-600">
                    La sécurité est notre priorité absolue, tant pour nos collaborateurs que pour nos clients. 
                    Nous respectons scrupuleusement les normes de sécurité en vigueur et formons régulièrement 
                    notre personnel aux bonnes pratiques.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Environnement</h3>
                  <p className="text-gray-600">
                    Nous nous engageons à minimiser l'impact environnemental de nos activités, en privilégiant 
                    les matériaux écologiques, en réduisant nos déchets et notre consommation d'énergie, et en 
                    favorisant les pratiques durables.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparence</h3>
                  <p className="text-gray-600">
                    Nous privilégions une communication claire et honnête avec nos clients, en fournissant des 
                    devis détaillés, en expliquant clairement les travaux à réaliser, et en tenant nos clients 
                    informés de l'avancement de leur projet.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Respect des délais</h3>
                  <p className="text-gray-600">
                    Nous nous engageons à respecter les délais convenus avec nos clients, en planifiant 
                    rigoureusement nos interventions et en mobilisant les ressources nécessaires pour 
                    mener à bien chaque projet dans les temps impartis.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <FaCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formation continue</h3>
                  <p className="text-gray-600">
                    Nous investissons dans la formation continue de nos collaborateurs, afin de maintenir 
                    et d'améliorer leurs compétences techniques, de les tenir informés des dernières 
                    innovations et de garantir un service toujours à la pointe.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confiez vos projets à des professionnels certifiés</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Que vous ayez besoin de services de construction, rénovation, électricité, serrurerie, 
                  déménagement ou nettoyage, Globibat vous garantit des prestations de qualité, réalisées 
                  par des professionnels qualifiés et certifiés.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 