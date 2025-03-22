'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaLock, FaKey, FaShieldAlt, FaDoorOpen, FaHome, FaBuilding, FaCheck, FaTools, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from '@/lib/i18n';

export default function LocksmithPage() {
  const { t } = useTranslation();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: t('common.navigation.home'), href: '/en' },
          { label: t('common.navigation.services'), href: '/en/services' },
          { label: 'Locksmithing & Repair', href: '/en/services/serrurerie-depannage' },
        ]}
      />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Locksmithing & Repair"
          subtitle="Security solutions for your peace of mind"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional locksmiths at your service</h2>
            <p className="text-gray-600 mb-4">
              Whether you're dealing with a locked door, a broken key in the lock, or simply want to enhance the security of your home or business premises, our team of qualified locksmiths is available to meet all your needs.
            </p>
            <p className="text-gray-600 mb-4">
              At Globibat, we place particular importance on the quality of our interventions and customer satisfaction. All our locksmiths are trained in the latest techniques and use cutting-edge equipment to ensure fast and efficient work.
            </p>
            <p className="text-gray-600">
              We respond quickly throughout French-speaking Switzerland and surrounding areas, with an emergency service available 24/7 for all your locksmithing needs.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Locksmith image</span>
            </div>
            {/* Replace with a real image */}
            {/* <Image 
              src="/images/services/serrurerie.jpg" 
              alt="Globibat locksmith at work" 
              fill 
              className="object-cover"
            /> */}
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Our locksmithing services"
            subtitle="Complete services for all your security needs"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaDoorOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Door opening</h3>
              <p className="text-gray-600 mb-4">
                Fast and damage-free door opening service in case of lost keys, locked door, or blocked lock.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Locked door opening</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Broken key extraction</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Lock unblocking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaLock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lock installation and replacement</h3>
              <p className="text-gray-600 mb-4">
                Installation and replacement of all types of locks to enhance the security of your home or business premises.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Multi-point locks</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Anti-burglary locks</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Electronic locks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaKey className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Key duplication</h3>
              <p className="text-gray-600 mb-4">
                Duplication service for all types of keys, including security keys, dot keys, and car keys.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Security keys</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Dot keys</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Car keys</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaHome className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home security</h3>
              <p className="text-gray-600 mb-4">
                Complete solutions to enhance your home security against intrusions and burglaries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Door reinforcement</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Deadbolt installation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Window security</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaBuilding className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial premises security</h3>
              <p className="text-gray-600 mb-4">
                Security solutions tailored to the specific needs of businesses, retail stores, and offices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Access control</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Master key systems</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Security doors</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <FaTools className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repair and troubleshooting</h3>
              <p className="text-gray-600 mb-4">
                Fast repair service for all your locksmithing problems, available 24/7.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Lock repair</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Cylinder replacement</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">Door adjustment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionHeading
            title="Why choose our locksmithing services?"
            subtitle="Expertise and quality for your security"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaShieldAlt className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                We use quality products and proven techniques to ensure the security of your property and loved ones.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaTools className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our locksmiths are qualified and regularly trained in the latest techniques and technologies in locksmithing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaKey className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Responsiveness</h3>
              <p className="text-gray-600">
                Our repair service responds quickly to resolve your locksmithing problems, 24/7.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <FaLock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only quality materials and follow strict work procedures to ensure optimal performance and durability.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Need a locksmith urgently?</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Our team is available 24/7 for all your locksmithing emergencies. Don't stay locked out!
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