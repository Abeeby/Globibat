import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  subtitle?: string;
  centered?: boolean;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeading({
  title,
  description,
  subtitle,
  centered = false,
  alignment,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  // Utiliser subtitle comme fallback pour description
  const finalDescription = description || subtitle;
  
  // Déterminer l'alignement
  const isTextCentered = centered || alignment === 'center';
  const textAlign = alignment === 'right' ? 'text-right' : (isTextCentered ? 'text-center' : 'text-left');
  
  return (
    <div className={cn(
      'mb-10',
      textAlign,
      className
    )}>
      <h2 className={cn(
        'text-3xl font-bold text-gray-900 mb-4',
        titleClassName
      )}>
        {title}
      </h2>
      {finalDescription && (
        <p className={cn(
          'text-lg text-gray-600 max-w-3xl',
          isTextCentered && 'mx-auto',
          descriptionClassName
        )}>
          {finalDescription}
        </p>
      )}
    </div>
  );
} 