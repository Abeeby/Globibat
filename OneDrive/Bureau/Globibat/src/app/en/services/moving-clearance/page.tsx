import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTruck, FaBoxOpen, FaWarehouse, FaRecycle, FaCheck, FaShieldAlt } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moving & Clearance Services | Globibat',
  description: 'Professional moving and clearance services in Geneva. Complete solutions for residential and commercial moves, storage, and waste disposal.',
  keywords: 'moving services geneva, clearance services, storage solutions, waste disposal, furniture removal, professional movers',
};

export default function MovingClearancePage() {
  const services = [
    {
      icon: <FaTruck className="text-4xl text-blue-500" />,
      title: 'Moving Services',
      description: 'Professional moving services for homes and offices.'
    },
    {
      icon: <FaBoxOpen className="text-4xl text-blue-500" />,
      title: 'Clearance Services',
      description: 'Complete clearance and disposal solutions.'
    },
    {
      icon: <FaWarehouse className="text-4xl text-blue-500" />,
      title: 'Storage Solutions',
      description: 'Secure storage options for your belongings.'
    },
    {
      icon: <FaRecycle className="text-4xl text-blue-500" />,
      title: 'Waste Management',
      description: 'Responsible disposal and recycling services.'
    }
  ];

  const features = [
    'Professional and experienced team',
    'Fully equipped moving vehicles',
    'Careful handling of your belongings',
    'Flexible scheduling options',
    'Insurance coverage',
    'Eco-friendly disposal methods'
  ];

  const movingServices = [
    {
      title: 'Residential Moving',
      items: [
        'Apartment and house moves',
        'Furniture disassembly and assembly',
        'Packing and unpacking services',
        'Special item handling',
        'Local and regional moves',
        'End of tenancy cleaning'
      ]
    },
    {
      title: 'Commercial Moving',
      items: [
        'Office relocations',
        'Equipment moving',
        'Minimal business disruption',
        'Weekend moving options',
        'IT equipment handling',
        'Furniture installation'
      ]
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services/moving-hero.jpg"
            alt="Moving and Clearance Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Moving & Clearance Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Professional solutions for all your moving and clearance needs</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FaCheck className="flex-shrink-0 text-blue-500 mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Moving Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {movingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheck className="flex-shrink-0 text-blue-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaShieldAlt className="text-5xl text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fully Insured Service</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your belongings are protected during the entire moving process. 
              We provide comprehensive insurance coverage for peace of mind.
            </p>
            <Link 
              href="/en/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/en/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
            <a 
              href="tel:+41223000000" 
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 