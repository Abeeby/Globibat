// Configuration SEO centralisée
export const seoConfig = {
  siteUrl: 'https://globibat.ch',
  titleTemplate: '%s | Globibat',
  defaultTitle: 'Globibat',
  description: 'Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande. Service professionnel de qualité, devis gratuit et intervention rapide.',
  keywords: ['construction', 'rénovation', 'électricité', 'serrurerie', 'nettoyage', 'déménagement', 'Suisse romande', 'Genève', 'Lausanne', 'Nyon', 'entreprise construction', 'devis gratuit'],
  author: 'Globibat',
  
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    title: 'Globibat',
    description: 'Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande.',
    siteName: 'Globibat',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Globibat',
      }
    ]
  },
  
  twitter: {
    cardType: 'summary_large_image',
    handle: '@globibat',
    site: '@globibat',
  },
  
  // Données structurées de base
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Globibat',
    description: 'Entreprise générale de construction et rénovation en Suisse romande',
    telephone: '+41215050062',
    email: 'info@globibat.ch',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rte des Tattes d\'Oie 93',
      addressLocality: 'Nyon',
      postalCode: '1260',
      addressCountry: 'CH'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.383333,
      longitude: 6.233333
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '19:00'
      }
    ],
    priceRange: '$$',
    url: 'https://globibat.ch',
    image: 'https://globibat.ch/images/logo/Logo Globibat.png',
    sameAs: [
      'https://www.facebook.com/globibat',
      'https://www.linkedin.com/company/globibat',
      'https://www.instagram.com/globibat'
    ]
  }
}; 