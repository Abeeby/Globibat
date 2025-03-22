import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaHardHat, FaHome, FaPaintRoller, FaBuilding, FaCheck } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction & Renovation Services | Globibat',
  description: 'Professional construction and renovation services in Geneva. Complete solutions for residential and commercial properties.',
  keywords: 'construction geneva, renovation geneva, building services, home renovation, commercial renovation, construction company',
};

export default function ConstructionRenovationPage() {
  const services = [
    {
      icon: <FaHome className="text-4xl text-blue-500" />,
      title: 'Residential Renovation',
      description: 'Complete home renovation services, from individual rooms to entire properties.'
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-500" />,
      title: 'Commercial Construction',
      description: 'Professional construction and renovation services for commercial spaces.'
    },
    {
      icon: <FaPaintRoller className="text-4xl text-blue-500" />,
      title: 'Interior Finishing',
      description: 'High-quality interior finishing work, including painting, flooring, and custom installations.'
    },
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: 'Custom Projects',
      description: 'Tailored solutions for unique construction and renovation needs.'
    }
  ];

  const features = [
    'Professional team with extensive experience',
    'High-quality materials and workmanship',
    'Project management from start to finish',
    'Respect for deadlines and budgets',
    'Compliance with safety standards',
    'Regular communication and updates'
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services/construction-hero.jpg"
            alt="Construction and Renovation Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Construction & Renovation</h1>
          <p className="text-xl max-w-3xl mx-auto">Professional solutions for all your construction and renovation projects</p>
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

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We discuss your needs and vision for the project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Detailed project planning and cost estimation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">Professional implementation of the project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
              <p className="text-gray-600">Quality control and project completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/en/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
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