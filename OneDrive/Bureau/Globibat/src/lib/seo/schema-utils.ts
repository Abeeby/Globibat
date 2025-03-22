import { LocalBusiness, WithContext, Organization, WebSite, BreadcrumbList } from 'schema-dts';

// Schéma pour l'entreprise (LocalBusiness)
export const getLocalBusinessSchema = (): WithContext<LocalBusiness> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Globibat',
    description: 'Entreprise générale de construction et rénovation en Suisse romande',
    url: 'https://www.globibat.com',
    telephone: '+41.21.505.00.62',
    email: 'info@globibat.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'À compléter',
      addressLocality: 'Suisse romande',
      postalCode: '',
      addressCountry: 'CH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '46.5197',
      longitude: '6.6323',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/globibat',
      'https://www.instagram.com/globibat',
      'https://www.linkedin.com/company/globibat',
    ],
    priceRange: '$$',
    image: 'https://www.globibat.com/images/logo.png',
    areaServed: ['Lausanne', 'Genève', 'Vaud', 'Suisse Romande'],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '46.5197',
        longitude: '6.6323',
      },
      geoRadius: '50000',
    },
  };
};

// Schéma pour l'organisation
export const getOrganizationSchema = (): WithContext<Organization> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Globibat',
    url: 'https://www.globibat.com',
    logo: 'https://www.globibat.com/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+41.21.505.00.62',
      contactType: 'customer service',
      email: 'info@globibat.com',
      availableLanguage: ['French', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/globibat',
      'https://www.instagram.com/globibat',
      'https://www.linkedin.com/company/globibat',
    ],
  };
};

// Schéma pour le site web
export const getWebsiteSchema = (): WithContext<WebSite> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Globibat',
    url: 'https://www.globibat.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.globibat.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
};

// Schéma pour le fil d'Ariane (Breadcrumb)
export const getBreadcrumbSchema = (items: { name: string; url: string }[]): WithContext<BreadcrumbList> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}; 