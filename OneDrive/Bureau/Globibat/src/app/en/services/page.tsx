import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaBroom, FaTruck, FaBolt, FaLock, FaWrench } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Globibat - General Construction Company',
  description: 'Discover our comprehensive range of construction, renovation, cleaning, and moving services in Geneva. Professional solutions for all your needs.',
  keywords: 'construction services geneva, renovation services, cleaning services, moving services, electrical services, locksmith services',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: 'Construction & Renovation',
      description: 'Complete renovation and construction services for residential and commercial properties.',
      features: [
        'Interior renovations',
        'Exterior renovations',
        'Kitchen and bathroom remodeling',
        'Office space renovation',
        'Building extensions'
      ],
      link: '/en/services/construction-renovation'
    },
    {
      icon: <FaBolt className="text-4xl text-blue-500" />,
      title: 'Electrical Services',
      description: 'Professional electrical installation and repair services for all your needs.',
      features: [
        'Electrical installations',
        'Emergency repairs',
        'Lighting systems',
        'Security systems',
        'Maintenance services'
      ],
      link: '/en/services/electrical'
    },
    {
      icon: <FaLock className="text-4xl text-blue-500" />,
      title: 'Locksmith Services',
      description: 'Reliable locksmith services for residential and commercial properties.',
      features: [
        'Lock installation',
        'Emergency lockout service',
        'Security system installation',
        'Key duplication',
        'Lock repair and maintenance'
      ],
      link: '/en/services/locksmith'
    },
    {
      icon: <FaBroom className="text-4xl text-blue-500" />,
      title: 'Cleaning Services',
      description: 'Professional cleaning services for all types of properties.',
      features: [
        'Regular cleaning',
        'Deep cleaning',
        'End of tenancy cleaning',
        'Office cleaning',
        'Post-construction cleaning'
      ],
      link: '/en/services/cleaning'
    },
    {
      icon: <FaTruck className="text-4xl text-blue-500" />,
      title: 'Moving & Clearance',
      description: 'Complete moving and clearance services for a stress-free experience.',
      features: [
        'Residential moving',
        'Office relocation',
        'Furniture assembly',
        'Storage solutions',
        'Waste disposal'
      ],
      link: '/en/services/moving-clearance'
    },
    {
      icon: <FaWrench className="text-4xl text-blue-500" />,
      title: 'Maintenance',
      description: 'Regular maintenance services to keep your property in perfect condition.',
      features: [
        'Property maintenance',
        'Preventive maintenance',
        'Emergency repairs',
        'Equipment maintenance',
        'Facility management'
      ],
      link: '/en/services/maintenance'
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Our Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Comprehensive solutions for all your construction and property needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Link href={service.link}>
                  <div className="p-6">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-center mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
          <Link 
            href="/en/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 