import { DefaultSeoProps } from 'next-seo';

// Configuration SEO par défaut pour tout le site
const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | Globibat - Entreprise générale de construction en Suisse',
  defaultTitle: 'Globibat - Entreprise générale de construction et rénovation en Suisse',
  description: 'Globibat, votre partenaire de confiance pour tous vos projets de construction, rénovation, électricité, serrurerie et déménagement en Suisse. Devis gratuit et service de qualité.',
  canonical: 'https://www.globibat.com',
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://www.globibat.com',
    siteName: 'Globibat',
    title: 'Globibat - Entreprise générale de construction et rénovation en Suisse',
    description: 'Globibat, votre partenaire de confiance pour tous vos projets de construction, rénovation, électricité, serrurerie et déménagement en Suisse. Devis gratuit et service de qualité.',
    images: [
      {
        url: 'https://www.globibat.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Globibat - Entreprise générale de construction',
      },
    ],
  },
  twitter: {
    handle: '@globibat',
    site: '@globibat',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'construction, rénovation, entreprise générale, électricité, serrurerie, déménagement, débarras, Suisse, Lausanne, Genève, travaux, dépannage, conciergerie',
    },
    {
      name: 'author',
      content: 'Globibat',
    },
    {
      name: 'geo.region',
      content: 'CH-VD',
    },
    {
      name: 'geo.placename',
      content: 'Lausanne',
    },
  ],
};

export default SEO_CONFIG; 