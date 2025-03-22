import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://globibat.com';
  
  // Pages principales
  const mainRoutes = [
    '',
    '/services',
    '/projets-realises',
    '/a-propos',
    '/contact',
    '/temoignages',
    '/faq',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Pages de services
  const serviceRoutes = [
    '/services/construction-renovation',
    '/services/electricite-depannage',
    '/services/serrurerie-depannage',
    '/services/demenagement-debarras',
    '/services/nettoyage-conciergerie',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Pages de projets
  const projectRoutes = [
    '/projets-realises/renovation-appartement-plainpalais',
    // Ajoutez d'autres projets ici au fur et à mesure
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Pages légales
  const legalRoutes = [
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/politique-de-cookies',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  // Pages blog
  const blogRoutes = [
    '/blog/preparer-efficacement-demenagement',
    // Ajoutez d'autres articles de blog ici
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Pages d'outils
  const toolRoutes = [
    '/calculateur-volume',
    // Ajoutez d'autres outils ici
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Combiner toutes les routes
  return [
    ...mainRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...legalRoutes,
    ...blogRoutes,
    ...toolRoutes,
  ];
} 