import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine clsx et tailwind-merge pour une gestion optimale des classes
 * - clsx: gère les conditions et fusionne les classes
 * - tailwind-merge: résout les conflits de classes Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}