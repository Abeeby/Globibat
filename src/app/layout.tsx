import './globals.css';
import './styles/accessibility.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LiveChat from '@/components/ui/LiveChat';
import FloatingContact from '@/components/ui/FloatingContact';
import AccessibilityProvider from '@/components/ui/AccessibilityProvider';
import { ThemeProvider } from '@/lib/providers/ThemeProvider';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Améliore le CLS (Cumulative Layout Shift)
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Globibat - Entreprise générale de construction et rénovation en Suisse romande',
  description: 'Globibat, votre partenaire de confiance pour tous vos projets de construction, rénovation, électricité, serrurerie et déménagement en Suisse romande. Devis gratuit et service de qualité.',
  keywords: 'construction, rénovation, électricité, serrurerie, déménagement, Suisse romande, Nyon, Genève, Lausanne',
  authors: [{ name: 'Globibat' }],
  creator: 'Globibat',
  publisher: 'Globibat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://globibat.ch'),
  alternates: {
    canonical: 'https://globibat.ch',
    languages: {
      'fr-CH': '/',
    },
  },
  openGraph: {
    title: 'Globibat - Entreprise générale de construction et rénovation en Suisse romande',
    description: 'Votre partenaire de confiance pour tous vos projets de construction, rénovation, électricité, serrurerie et déménagement en Suisse romande.',
    url: 'https://globibat.ch',
    siteName: 'Globibat',
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globibat - Construction et rénovation en Suisse romande',
    description: 'Votre partenaire de confiance pour tous vos projets en Suisse romande.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN || '', // Variable d'environnement pour Google Search Console
  },
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5',
  themeColor: '#1E40AF',
  icons: {
    icon: '/images/logo/Logo Globibat.png',
    apple: '/images/logo/Logo Globibat.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ErrorBoundary>
          <ThemeProvider>
            <AccessibilityProvider>
              <a href="#main-content" className="skip-to-main">
                Aller au contenu principal
              </a>
              <Navbar />
              <main id="main-content" className="min-h-screen">{children}</main>
              <Footer />
              <LiveChat />
              <FloatingContact />
            </AccessibilityProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
} 