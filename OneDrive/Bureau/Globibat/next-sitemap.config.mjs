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
    // Priorités personnalisées selon les pages
    const priorities = {
      '/': 1.0,
      '/services': 0.9,
      '/services/construction-renovation': 0.8,
      '/services/electricite-depannage': 0.8,
      '/services/serrurerie-depannage': 0.8,
      '/contact': 0.9,
      '/projets-realises': 0.8,
      '/a-propos': 0.7,
      '/temoignages': 0.7,
      '/faq': 0.7,
      '/calculateur-volume': 0.6,
      '/blog': 0.6,
    };

    const changefreqs = {
      '/': 'daily',
      '/services': 'weekly',
      '/contact': 'monthly',
      '/projets-realises': 'weekly',
      '/blog': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};

export default config;