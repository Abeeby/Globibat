import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
      ],
    },
    sitemap: 'https://globibat.com/sitemap.xml',
    host: 'https://globibat.com',
  };
} 