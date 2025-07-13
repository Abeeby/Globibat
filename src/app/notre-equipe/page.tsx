import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaLinkedin, FaEnvelope, FaPhone, FaTools, FaBolt, FaLock, FaBuilding, FaBroom } from 'react-icons/fa';

export const metadata = {
  title: 'Notre équipe | Globibat - Entreprise générale de construction',
  description: 'Découvrez l\'équipe de professionnels de Globibat à Genève. Nos experts en construction, rénovation, électricité, serrurerie, déménagement et nettoyage.',
  keywords: 'équipe Globibat, professionnels construction Genève, experts rénovation, électriciens Genève, serruriers, déménageurs, équipe nettoyage',
};

// Définition des types pour les membres de l'équipe
interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

// Définition des types pour les départements
interface Department {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export default function TeamPage() {
  // Données des départements
  const departments: Department[] = [
    {
      id: 'construction',
      name: 'Construction & Rénovation',
      description: 'Notre équipe de construction et rénovation est composée de professionnels expérimentés dans tous les corps de métier du bâtiment.',
      icon: <FaTools className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'electricite',
      name: 'Électricité & Dépannage',
      description: 'Nos électriciens qualifiés assurent tous types d\'installations électriques et interviennent rapidement en cas de panne.',
      icon: <FaBolt className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'serrurerie',
      name: 'Serrurerie & Dépannage',
      description: 'Notre équipe de serruriers professionnels est disponible 24h/24 pour toutes vos urgences et installations de sécurité.',
      icon: <FaLock className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'demenagement',
      name: 'Déménagement & Débarras',
      description: 'Nos déménageurs expérimentés assurent un service de qualité pour vos déménagements résidentiels et professionnels.',
      icon: <FaBuilding className="h-6 w-6 text-blue-600" />,
    },
    {
      id: 'nettoyage',
      name: 'Nettoyage & Conciergerie',
      description: 'Notre équipe de nettoyage professionnelle intervient pour tous types de nettoyages, de l\'entretien régulier au nettoyage de fin de chantier.',
      icon: <FaBroom className="h-6 w-6 text-blue-600" />,
    },
  ];
  
  // Données des membres de l'équipe (à remplacer par des données réelles)
  const teamMembers: TeamMember[] = [
    {
      id: 'jean-dupont',
      name: 'Jean Dupont',
      role: 'Directeur Général',
      department: 'Direction',
      bio: 'Fort de plus de 20 ans d\'expérience dans le secteur de la construction, Jean a fondé Globibat en 2010 avec la vision de créer une entreprise générale capable de répondre à tous les besoins des clients. Il supervise l\'ensemble des opérations et veille à maintenir les standards de qualité élevés qui font la réputation de Globibat.',
      image: '/images/team/jean-dupont.jpg',
      email: 'jean.dupont@globibat.com',
      phone: '+41 21 505 00 62',
      linkedin: 'https://www.linkedin.com/in/jean-dupont',
    },
    {
      id: 'marie-martin',
      name: 'Marie Martin',
      role: 'Responsable Administrative',
      department: 'Administration',
      bio: 'Marie gère l\'ensemble des aspects administratifs et financiers de Globibat. Elle assure le suivi des devis, des factures et des contrats, et veille au bon fonctionnement de l\'entreprise au quotidien. Sa rigueur et son organisation sont des atouts précieux pour l\'entreprise.',
      image: '/images/team/marie-martin.jpg',
      email: 'marie.martin@globibat.com',
      phone: '+41 21 505 00 62',
    },
    {
      id: 'pierre-bernard',
      name: 'Pierre Bernard',
      role: 'Chef de Chantier',
      department: 'Construction & Rénovation',
      bio: 'Pierre supervise les chantiers de construction et de rénovation. Avec plus de 15 ans d\'expérience dans le bâtiment, il coordonne les différents corps de métier et veille au respect des délais et des budgets. Sa connaissance approfondie des techniques de construction garantit des réalisations de qualité.',
      image: '/images/team/pierre-bernard.jpg',
      email: 'pierre.bernard@globibat.com',
      phone: '+41 21 505 00 62',
    },
    {
      id: 'sophie-durand',
      name: 'Sophie Durand',
      role: 'Architecte d\'intérieur',
      department: 'Construction & Rénovation',
      bio: 'Sophie apporte son expertise en design d\'intérieur pour les projets de rénovation et d\'aménagement. Elle conseille les clients sur les choix de matériaux, les couleurs et l\'agencement des espaces pour créer des intérieurs à la fois esthétiques et fonctionnels.',
      image: '/images/team/sophie-durand.jpg',
      email: 'sophie.durand@globibat.com',
      linkedin: 'https://www.linkedin.com/in/sophie-durand',
    },
    {
      id: 'thomas-petit',
      name: 'Thomas Petit',
      role: 'Électricien Chef',
      department: 'Électricité & Dépannage',
      bio: 'Thomas dirige l\'équipe d\'électriciens de Globibat. Titulaire d\'un brevet fédéral, il supervise les installations électriques, les mises aux normes et les dépannages. Sa connaissance approfondie des normes de sécurité et des nouvelles technologies en fait un expert reconnu dans son domaine.',
      image: '/images/team/thomas-petit.jpg',
      phone: '+41 21 505 00 62',
    },
    {
      id: 'lucas-moreau',
      name: 'Lucas Moreau',
      role: 'Serrurier',
      department: 'Serrurerie & Dépannage',
      bio: 'Lucas est spécialisé dans l\'installation et le dépannage de serrures et systèmes de sécurité. Disponible pour les interventions d\'urgence, il assure également la pose de portes blindées et de systèmes de contrôle d\'accès pour les particuliers et les entreprises.',
      image: '/images/team/lucas-moreau.jpg',
      phone: '+41 21 505 00 62',
    },
    {
      id: 'emma-blanc',
      name: 'Emma Blanc',
      role: 'Responsable Déménagement',
      department: 'Déménagement & Débarras',
      bio: 'Emma coordonne les opérations de déménagement et de débarras. Elle organise les équipes et les moyens logistiques pour assurer des déménagements efficaces et sans stress pour les clients. Son sens de l\'organisation et sa capacité à anticiper les besoins font d\'elle une responsable appréciée.',
      image: '/images/team/emma-blanc.jpg',
      email: 'emma.blanc@globibat.com',
    },
    {
      id: 'david-noir',
      name: 'David Noir',
      role: 'Responsable Nettoyage',
      department: 'Nettoyage & Conciergerie',
      bio: 'David supervise les équipes de nettoyage et de conciergerie. Il veille à la qualité des prestations et à la satisfaction des clients. Son expertise dans les techniques et produits de nettoyage écologiques permet à Globibat de proposer des services respectueux de l\'environnement.',
      image: '/images/team/david-noir.jpg',
      email: 'david.noir@globibat.com',
      phone: '+41 21 505 00 62',
    },
  ];
  
  // Regrouper les membres par département
  const membersByDepartment: { [key: string]: TeamMember[] } = {};
  
  teamMembers.forEach(member => {
    if (!membersByDepartment[member.department]) {
      membersByDepartment[member.department] = [];
    }
    membersByDepartment[member.department].push(member);
  });
  
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Notre équipe', href: '/notre-equipe' },
            ]}
          />
          
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              title="Notre équipe"
              subtitle="Des professionnels à votre service"
              alignment="left"
              className="mt-8 mb-12"
            />
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <div className="prose prose-blue max-w-none mb-8">
                <p className="text-lg text-gray-700">
                  Chez Globibat, nous sommes fiers de notre équipe de professionnels qualifiés et expérimentés. 
                  Chaque membre apporte son expertise et son savoir-faire pour garantir des services de qualité 
                  dans tous nos domaines d'intervention.
                </p>
                <p className="text-gray-600">
                  Notre équipe est composée d'experts en construction, rénovation, électricité, serrurerie, 
                  déménagement et nettoyage. Tous partagent les mêmes valeurs : professionnalisme, rigueur, 
                  respect des engagements et satisfaction du client.
                </p>
              </div>
              
              {/* Direction et Administration */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Direction et Administration</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {membersByDepartment['Direction']?.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-80">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-600 mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-blue-600">
                              <FaEnvelope className="h-5 w-5" />
                            </a>
                          )}
                          {member.phone && (
                            <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-500 hover:text-blue-600">
                              <FaPhone className="h-5 w-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                              <FaLinkedin className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {membersByDepartment['Administration']?.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-80">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                        <p className="text-gray-600 mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-blue-600">
                              <FaEnvelope className="h-5 w-5" />
                            </a>
                          )}
                          {member.phone && (
                            <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-500 hover:text-blue-600">
                              <FaPhone className="h-5 w-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                              <FaLinkedin className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Départements */}
              {departments.map((department) => (
                membersByDepartment[department.name] && membersByDepartment[department.name].length > 0 && (
                  <div key={department.id} className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        {department.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{department.name}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-8">{department.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {membersByDepartment[department.name]?.map((member) => (
                        <div key={member.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-80">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                            <p className="text-gray-600 mb-4">{member.bio}</p>
                            <div className="flex space-x-3">
                              {member.email && (
                                <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-blue-600">
                                  <FaEnvelope className="h-5 w-5" />
                                </a>
                              )}
                              {member.phone && (
                                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-gray-500 hover:text-blue-600">
                                  <FaPhone className="h-5 w-5" />
                                </a>
                              )}
                              {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                                  <FaLinkedin className="h-5 w-5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
            
            {/* Rejoignez notre équipe */}
            <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Rejoignez notre équipe</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Globibat est toujours à la recherche de talents pour renforcer ses équipes. 
                  Si vous êtes passionné par votre métier et que vous partagez nos valeurs, 
                  n'hésitez pas à nous envoyer votre candidature.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/contact?subject=Candidature" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Postuler chez Globibat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 