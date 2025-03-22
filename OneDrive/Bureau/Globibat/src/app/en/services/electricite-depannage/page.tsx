'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaBolt, FaLightbulb, FaShieldAlt, FaTools, FaHome, FaBuilding, FaCheck, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from '@/lib/i18n';

export default function ElectricityPage() {
  const { t } = useTranslation();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: t('common.navigation.home'), href: '/en' },
          { label: t('common.navigation.services'), href: '/en/services' },
          { label: 'Electricity & Repair', href: '/en/services/electricite-depannage', active: true },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Electricity & Repair"
          subtitle="Safe and efficient electrical solutions"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualified electricians at your service</h2>
            <p className="text-gray-600 mb-4">
              Whether you need a complete electrical installation for your new construction, an upgrade of your existing installation to meet current standards, or emergency repairs, our team of qualified electricians is available to meet all your needs.
            </p>
            <p className="text-gray-600 mb-4">
              At Globibat, we place particular importance on the safety and quality of our electrical installations. All our electricians are certified and trained to the latest standards, ensuring safe and compliant installations.
            </p>
            <p className="text-gray-600">
              We respond quickly throughout French-speaking Switzerland and surrounding areas, with an emergency service available 24/7 for all your electrical repair needs.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Electrician image</span>
            </div>
            {/* Replace with a real image */}
            {/* <Image 
              src="/images/services/electricite.jpg" 
              alt="Globibat electrician at work" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Our electrical services"
            subtitle="Complete services for all your electrical needs"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential electrical installation</h3>
              <p className="text-gray-600 mb-4">
                Complete electrical installation for homes and apartments, from electrical panels to outlets and lighting fixtures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Electrical panel installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Wiring and power outlets</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Lighting installation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial electrical installation</h3>
              <p className="text-gray-600 mb-4">
                Electrical solutions tailored to the specific needs of retail stores, offices, and professional premises.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Commercial lighting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Security systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Computer networks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaShieldAlt className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical standards compliance</h3>
              <p className="text-gray-600 mb-4">
                Bringing your electrical installations up to current standards to ensure your safety.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Electrical diagnosis</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Replacement of obsolete panels</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Installation of differential circuit breakers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaLightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lighting and fixtures</h3>
              <p className="text-gray-600 mb-4">
                Installation and lighting consultation to create the perfect ambiance in your home or professional space.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Energy-efficient LED lighting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Decorative lighting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Outdoor lighting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBolt className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical repairs</h3>
              <p className="text-gray-600 mb-4">
                Fast repair service for all your electrical problems, available 24/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Short circuit repair</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Replacement of defective components</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaTools className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home automation and smart systems</h3>
              <p className="text-gray-600 mb-4">
                Home automation solutions to make your home or office smarter, more comfortable, and more energy efficient.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Home automation system installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Smart lighting control</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Heating and air conditioning management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Why choose our electrical services?"
            subtitle="Expertise and quality for your safety"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">
                Our installations strictly comply with current safety standards to protect you from electrical hazards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaTools className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our electricians are certified and regularly trained in the latest electrical technologies and standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaBolt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Responsiveness</h3>
              <p className="text-gray-600">
                Our repair service responds quickly to resolve your electrical problems, 24/7.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaLightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only quality materials and follow strict work procedures to ensure optimal performance and longevity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Need an electrician urgently?</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Our team is available 24/7 for all your electrical emergencies. Don't take risks with your electrical installation!
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a 
                href="tel:+41215050062" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md"
              >
                <FaPhoneAlt className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Request a free quote"
            subtitle="Tell us about your project and we will get back to you shortly"
            centered
          />
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/en/contact#devis" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md"
            >
              Contact us for a quote
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating call button */}
      <a 
        href="tel:+41215050062" 
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Call us now"
      >
        <FaPhoneAlt size={24} />
      </a>
    </main>
  );
} 