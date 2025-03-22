'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaEye } from 'react-icons/fa';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  imageSrc: string;
  slug: string;
}

interface ProjectGridProps {
  projects: Project[];
  categories?: string[];
  showFilters?: boolean;
  limit?: number;
}

export default function ProjectGrid({ 
  projects, 
  categories = [], 
  showFilters = true,
  limit
}: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Si aucune catégorie n'est fournie, extraire les catégories uniques des projets
  const allCategories = categories.length > 0 
    ? categories 
    : ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  useEffect(() => {
    let result = projects;
    
    // Filtrer par catégorie
    if (activeCategory !== 'all') {
      result = result.filter(project => project.category === activeCategory);
    }
    
    // Filtrer par terme de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(term) || 
          project.description.toLowerCase().includes(term) ||
          project.location.toLowerCase().includes(term)
      );
    }
    
    // Limiter le nombre de projets si nécessaire
    if (limit && result.length > limit) {
      result = result.slice(0, limit);
    }
    
    setFilteredProjects(result);
  }, [activeCategory, searchTerm, projects, limit]);
  
  return (
    <div>
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Tous les projets' : category}
                </button>
              ))}
            </div>
            
            {/* Recherche */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
              />
            </div>
          </div>
        </div>
      )}
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun projet ne correspond à vos critères de recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link 
                    href={`/realisations/${project.slug}`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white"
                  >
                    <FaEye className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{project.location}</p>
                <p className="text-gray-600 line-clamp-2">{project.description}</p>
                <Link 
                  href={`/realisations/${project.slug}`}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 