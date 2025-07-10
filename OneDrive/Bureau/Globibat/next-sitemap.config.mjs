/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://globibat.ch',
  generateRobotsTxt: true, // Génère aussi robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  generateIndexSitemap: false, // Site pas assez gros pour un index
  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/admin/*',
    '/private/*',
    '/drafts/*',
    '/en/*', // Pages en anglais non traduites
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      // Si vous avez d'autres sitemaps spécifiques
    ],
  },
  transform: async (config, path) => {
    // Priorité basée sur la profondeur et l'importance
    let priority = 0.7; // Priorité par défaut
    
    // Page d'accueil = priorité maximale
    if (path === '/') {
      priority = 1.0;
    }
    // Pages principales = haute priorité
    else if (path.match(/^\/(services|contact|projets-realises)$/)) {
      priority = 0.9;
    }
    // Sous-pages de services = priorité élevée
    else if (path.match(/^\/services\/[^\/]+$/)) {
      priority = 0.8;
    }
    // Pages secondaires
    else if (path.match(/^\/(a-propos|temoignages|faq|calculateur-volume)$/)) {
      priority = 0.7;
    }
    // Blog et pages profondes = priorité moyenne
    else if (path.startsWith('/blog') || path.split('/').length > 3) {
      priority = 0.6;
    }
    // Pages légales = faible priorité
    else if (path.match(/\/(mentions-legales|politique-|cookies)/)) {
      priority = 0.3;
    }

    // Fréquence de changement basée sur le type de page
    let changefreq = 'weekly';
    if (path === '/') changefreq = 'daily';
    else if (path.match(/\/(contact|mentions-legales|politique-)/)) changefreq = 'monthly';
    else if (path.startsWith('/blog')) changefreq = 'weekly';
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

export default config;