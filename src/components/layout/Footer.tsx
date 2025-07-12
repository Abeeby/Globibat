'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaChevronRight } from 'react-icons/fa';

// Liens de navigation pour le footer en français
const frFooterLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Construction & rénovation', href: '/fr/services/construction-renovation' },
      { name: 'Nettoyage & conciergerie', href: '/fr/services/nettoyage-conciergerie' },
      { name: 'Débarras & déménagement', href: '/fr/services/debarras-demenagement' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { name: 'À propos', href: '/fr/a-propos' },
      { name: 'Projets', href: '/fr/projets-realises' },
      { name: 'Contact', href: '/fr/contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Mentions légales', href: '/fr/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/fr/politique-confidentialite' },
    ],
  },
];

// Liens de navigation pour le footer en anglais
const enFooterLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Construction & Renovation', href: '/en/services/construction-renovation' },
      { name: 'Cleaning Services', href: '/en/services/cleaning' },
      { name: 'Moving & Clearance', href: '/en/services/moving-clearance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/en/a-propos' },
      { name: 'Projects', href: '/en/projets-realises' },
      { name: 'Contact', href: '/en/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Legal Notice', href: '/en/mentions-legales' },
      { name: 'Privacy Policy', href: '/en/politique-confidentialite' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'fr';
  const footerLinks = currentLocale === 'en' ? enFooterLinks : frFooterLinks;
  
  const texts = {
    description: currentLocale === 'en'
      ? 'Your trusted partner for all your construction, renovation, and maintenance projects in the Geneva region.'
      : 'Votre partenaire de confiance pour tous vos projets de construction, rénovation et maintenance dans la région genevoise.',
    contact: currentLocale === 'en' ? 'Contact' : 'Contact',
    copyright: currentLocale === 'en'
      ? `© ${currentYear} Globibat. All rights reserved.`
      : `© ${currentYear} Globibat. Tous droits réservés.`,
    followUs: currentLocale === 'en' ? 'Follow us on' : 'Suivez-nous sur',
  };
  
  return (
    <footer className="bg-gray-900 pt-16 pb-8" role="contentinfo" aria-label={currentLocale === 'en' ? 'Footer' : 'Pied de page'}>
      <div className="container mx-auto px-4">
        {/* Logo et texte de présentation */}
        <div className="flex flex-col items-center mb-12">
          <Link href={`/${currentLocale}`} className="inline-block mb-4" aria-label={currentLocale === 'en' ? 'Globibat Home' : 'Accueil Globibat'}>
            <Image
              src="/images/logo/Logo Globibat.png"
              alt="Globibat Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </Link>
          <p className="text-white mb-6 text-center max-w-2xl">
            {texts.description}
          </p>
        </div>

        {/* Section principale du footer réorganisée */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Informations de contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">{texts.contact}</h3>
            <div className="space-y-4">
              <a 
                href="tel:+41223000000" 
                className="flex items-center text-white hover:text-blue-300 transition-colors p-2 rounded-md hover:bg-blue-900/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={currentLocale === 'en' ? 'Call us at +41 22 300 00 00' : 'Appelez-nous au +41 22 300 00 00'}
              >
                <FaPhone className="h-5 w-5 mr-3 text-blue-400" aria-hidden="true" />
                <span className="text-blue-200">+41 22 300 00 00</span>
              </a>
              <a 
                href="mailto:info@globibat.ch" 
                className="flex items-center text-white hover:text-blue-300 transition-colors p-2 rounded-md hover:bg-blue-900/30 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={currentLocale === 'en' ? 'Email us at info@globibat.ch' : 'Envoyez-nous un email à info@globibat.ch'}
              >
                <FaEnvelope className="h-5 w-5 mr-3 text-blue-400" aria-hidden="true" />
                <span className="text-blue-200">info@globibat.ch</span>
              </a>
              <div className="flex items-start text-white p-2 rounded-md text-base font-medium">
                <FaMapMarkerAlt className="h-5 w-5 mr-3 mt-0.5 text-blue-400" aria-hidden="true" />
                <span className="text-blue-200">Geneva, Switzerland</span>
              </div>
            </div>
          </div>
          
          {/* Services - maintenant au centre */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-white text-center">{footerLinks[0].title}</h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link) => (
                <li key={link.name} className="text-center">
                  <Link 
                    href={link.href}
                    className="text-blue-200 hover:text-blue-300 transition-colors hover:underline text-base inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1"
                  >
                    <FaChevronRight className="mr-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Liens supplémentaires */}
          <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Entreprise */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{footerLinks[1].title}</h3>
              <ul className="space-y-2">
                {footerLinks[1].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-blue-200 hover:text-blue-300 transition-colors hover:underline group inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1"
                    >
                      <FaChevronRight className="mr-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Légal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">{footerLinks[2].title}</h3>
              <ul className="space-y-2">
                {footerLinks[2].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-blue-200 hover:text-blue-300 transition-colors hover:underline group inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-2 py-1"
                    >
                      <FaChevronRight className="mr-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-white font-medium text-base mb-2">
                {texts.copyright}
              </p>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/globibat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors p-2 hover:bg-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`${texts.followUs} Facebook`}
              >
                <FaFacebook size={22} aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/globibat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors p-2 hover:bg-pink-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label={`${texts.followUs} Instagram`}
              >
                <FaInstagram size={22} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/company/globibat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors p-2 hover:bg-blue-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`${texts.followUs} LinkedIn`}
              >
                <FaLinkedin size={22} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 