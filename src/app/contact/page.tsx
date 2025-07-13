import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact | Globibat',
  description: 'Contactez Globibat pour tous vos projets de construction, rénovation, électricité, serrurerie, nettoyage ou déménagement. Devis gratuit et sans engagement.',
  keywords: 'contact Globibat, devis construction, entreprise construction Suisse romande, contact rénovation, devis électricité, devis serrurerie, devis déménagement',
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Contact', href: '/contact', isCurrent: true },
            ]}
          />
          
          <SectionHeading
            title="Contactez-nous"
            subtitle="Nous sommes à votre écoute pour tous vos projets"
            alignment="left"
            className="mt-8 mb-12"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm lang="fr" />
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <FaPhone className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Téléphone</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      <Link href="tel:+41215050062" className="hover:text-blue-600 dark:hover:text-blue-400">
                        +41 21 505 00 62
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <FaEnvelope className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      <Link href="mailto:info@globibat.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        info@globibat.com
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <FaMapMarkerAlt className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Adresse</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Rte des Tattes d'Oie 93<br />
                      1260 Nyon<br />
                      Suisse
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <FaClock className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Horaires d'ouverture</h4>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      <p className="flex justify-between">
                        <span>Lundi - Vendredi:</span>
                        <span>8h00 - 19h00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Samedi:</span>
                        <span>8h00 - 19h00</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Dimanche:</span>
                        <span>Fermé</span>
                      </p>
                      <p className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                        Service d'urgence disponible 24h/24, 7j/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Trouvez-nous</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.8802012085336!2d6.1392!3d46.2043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE0JzE1LjUiTiA2wrAwOCcyMS4xIkU!5e0!3m2!1sfr!2sch!4v1620000000000!5m2!1sfr!2sch" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Carte Google Maps de Globibat"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Questions fréquentes</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Comment obtenir un devis gratuit ?</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Vous pouvez obtenir un devis gratuit en remplissant notre formulaire de contact, en nous appelant directement ou en nous envoyant un email. Nous vous répondrons dans les 24 heures ouvrables.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Quelles zones géographiques couvrez-vous ?</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Nous intervenons principalement en Suisse romande. Pour des projets plus éloignés, n'hésitez pas à nous contacter pour discuter de votre situation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Quels sont vos délais d'intervention ?</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Pour les urgences (serrurerie, électricité), nous intervenons généralement dans l'heure. Pour les projets de construction ou rénovation, les délais dépendent de l'ampleur des travaux et sont définis lors de l'établissement du devis.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Respectez-vous les normes et certifications suisses ?</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Oui, tous nos travaux sont réalisés dans le strict respect des normes suisses en vigueur. Notre équipe est formée et certifiée pour intervenir dans tous les domaines que nous proposons, garantissant ainsi un travail de qualité conforme aux exigences légales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 