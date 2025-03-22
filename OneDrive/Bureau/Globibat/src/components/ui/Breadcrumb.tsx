import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={cn('mb-6', className)}>
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
            aria-label="Accueil"
          >
            <FaHome className="h-4 w-4" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <FaChevronRight className="h-3 w-3 mx-2 text-gray-400 dark:text-gray-500" aria-hidden="true" />
            
            {item.isCurrent ? (
              <span 
                className="font-medium text-gray-900 dark:text-gray-100" 
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 