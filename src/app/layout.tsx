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



const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Améliore le CLS (Cumulative Layout Shift)
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://globibat.ch'),
  title: 'Globibat',
  description: 'Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande. Devis gratuit et intervention rapide.',
  keywords: ['construction', 'rénovation', 'électricité', 'serrurerie', 'nettoyage', 'déménagement', 'Suisse romande', 'Genève', 'Lausanne', 'Nyon'],
  authors: [{ name: 'Globibat' }],
  creator: 'Globibat',
  publisher: 'Globibat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://globibat.ch',
    siteName: 'Globibat',
    title: 'Globibat',
    description: 'Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande. Devis gratuit et intervention rapide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Globibat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globibat',
    description: 'Construction, rénovation, électricité, serrurerie, nettoyage et déménagement en Suisse romande.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN || '', // Variable d'environnement pour Google Search Console
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  themeColor: '#1E40AF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider>
          <AccessibilityProvider>
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:text-lg focus:font-semibold focus:no-underline focus:shadow-lg"
            >
              Aller au contenu principal
            </a>
            <Navbar />
            <main id="main-content" className="min-h-screen">{children}</main>
            <Footer />
            <LiveChat />
            <FloatingContact />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 