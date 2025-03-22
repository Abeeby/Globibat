import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGrid from '@/components/sections/ProjectGrid';
import type { Project } from '@/components/sections/ProjectGrid';

export const metadata = {
  title: 'Nos réalisations | Globibat - Entreprise générale de construction',
  description: 'Découvrez les projets de construction, rénovation, électricité et autres services réalisés par Globibat à Genève et environs.',
  keywords: 'réalisations Globibat, projets construction, rénovation Genève, références entreprise bâtiment, portfolio construction',
};

// Données de démonstration - à remplacer par des données réelles
const projects: Project[] = [
  {
    id: '1',
    title: 'Rénovation complète d\'un appartement',
    description: 'Rénovation complète d\'un appartement de 120m² comprenant la refonte totale de la cuisine et des salles de bain, le remplacement des revêtements de sol et la mise aux normes de l\'installation électrique.',
    category: 'Rénovation',
    location: 'Genève, Suisse',
    imageSrc: '/images/projects/project-1.jpg',
    slug: 'renovation-appartement-geneve',
  },
  {
    id: '2',
    title: 'Construction d\'une villa individuelle',
    description: 'Construction d\'une villa individuelle de 180m² sur deux niveaux, avec garage double, terrasse et jardin aménagé. Réalisation clé en main, de la conception des plans à la livraison.',
    category: 'Construction',
    location: 'Nyon, Suisse',
    imageSrc: '/images/projects/project-2.jpg',
    slug: 'construction-villa-nyon',
  },
  {
    id: '3',
    title: 'Aménagement de bureaux professionnels',
    description: 'Aménagement complet d\'espaces de bureaux de 250m² pour une entreprise de services. Création de cloisons, installation électrique, éclairage, climatisation et mobilier sur mesure.',
    category: 'Aménagement',
    location: 'Carouge, Suisse',
    imageSrc: '/images/projects/project-3.jpg',
    slug: 'amenagement-bureaux-carouge',
  },
  {
    id: '4',
    title: 'Rénovation d\'une salle de bain',
    description: 'Rénovation complète d\'une salle de bain avec installation d\'une douche à l\'italienne, d\'une baignoire, d\'un meuble vasque double et d\'un chauffage au sol.',
    category: 'Rénovation',
    location: 'Versoix, Suisse',
    imageSrc: '/images/projects/project-4.jpg',
    slug: 'renovation-salle-de-bain-versoix',
  },
  {
    id: '5',
    title: 'Installation électrique d\'un immeuble',
    description: 'Mise aux normes et modernisation de l\'installation électrique d\'un immeuble de 12 appartements, avec remplacement du tableau électrique principal et des tableaux divisionnaires.',
    category: 'Électricité',
    location: 'Meyrin, Suisse',
    imageSrc: '/images/projects/project-5.jpg',
    slug: 'installation-electrique-meyrin',
  },
  {
    id: '6',
    title: 'Rénovation d\'une cuisine',
    description: 'Rénovation complète d\'une cuisine avec installation de meubles sur mesure, d\'un plan de travail en granit, d\'électroménagers encastrés et d\'un îlot central.',
    category: 'Rénovation',
    location: 'Lancy, Suisse',
    imageSrc: '/images/projects/project-6.jpg',
    slug: 'renovation-cuisine-lancy',
  },
  {
    id: '7',
    title: 'Extension d\'une maison individuelle',
    description: 'Réalisation d\'une extension de 40m² pour une maison individuelle, comprenant un salon, une chambre et une salle d\'eau. Travaux de maçonnerie, charpente, isolation et finitions.',
    category: 'Construction',
    location: 'Cologny, Suisse',
    imageSrc: '/images/projects/project-7.jpg',
    slug: 'extension-maison-cologny',
  },
  {
    id: '8',
    title: 'Rénovation d\'un local commercial',
    description: 'Rénovation complète d\'un local commercial de 80m² pour une boutique de prêt-à-porter. Travaux de démolition, création de cloisons, électricité, plomberie, peinture et revêtements de sol.',
    category: 'Rénovation',
    location: 'Genève, Suisse',
    imageSrc: '/images/projects/project-8.jpg',
    slug: 'renovation-local-commercial-geneve',
  },
  {
    id: '9',
    title: 'Installation de serrures sécurisées',
    description: 'Installation de serrures haute sécurité et de systèmes de contrôle d\'accès pour un immeuble de bureaux. Mise en place d\'un organigramme de clés et formation du personnel.',
    category: 'Serrurerie',
    location: 'Genève, Suisse',
    imageSrc: '/images/projects/project-9.jpg',
    slug: 'installation-serrures-securisees-geneve',
  },
];

// Catégories pour le filtre
const categories = ['all', 'Construction', 'Rénovation', 'Aménagement', 'Électricité', 'Serrurerie'];

export default function RealisationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Réalisations', href: '/realisations', active: true },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Nos réalisations"
          subtitle="Découvrez nos projets récents et notre savoir-faire"
          centered
        />
        
        <div className="mt-12">
          <ProjectGrid 
            projects={projects} 
            categories={categories}
            showFilters={true}
          />
        </div>
      </div>
    </main>
  );
} 