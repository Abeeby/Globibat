import React from 'react';
import Image from 'next/image';
import { FaUsers, FaHandshake, FaCertificate, FaTools } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Globibat - General Construction Company',
  description: 'Learn about Globibat, your trusted construction company in Geneva. Discover our values, expertise, and commitment to excellence in construction and renovation.',
  keywords: 'about globibat, construction company geneva, professional builders, company values, construction expertise',
};

export default function AboutPage() {
  const values = [
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: 'Trust',
      description: 'We build lasting relationships with our clients based on trust and transparency.'
    },
    {
      icon: <FaTools className="text-4xl text-blue-500" />,
      title: 'Expertise',
      description: 'Our team brings years of experience and technical knowledge to every project.'
    },
    {
      icon: <FaCertificate className="text-4xl text-blue-500" />,
      title: 'Quality',
      description: 'We maintain the highest standards of quality in all our work.'
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: 'Client Focus',
      description: 'Your satisfaction is our priority. We listen to your needs and deliver accordingly.'
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Globibat Team"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Globibat</h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner in construction and renovation since 2008</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2008, Globibat has established itself as a leading construction company in Geneva. 
              We specialize in construction, renovation, cleaning, and moving services, providing comprehensive 
              solutions for both residential and commercial projects.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experienced professionals is dedicated to delivering exceptional results while 
              maintaining the highest standards of quality and safety. We take pride in our ability to 
              understand and meet our clients' needs, turning their vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/director.jpg"
                  alt="Company Director"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600">Director</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/project-manager.jpg"
                  alt="Project Manager"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/technical-director.jpg"
                  alt="Technical Director"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
              <p className="text-gray-600">Technical Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Image
                src="/images/certifications/cert1.png"
                alt="Certification 1"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/certifications/cert2.png"
                alt="Certification 2"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/certifications/cert3.png"
                alt="Certification 3"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/certifications/cert4.png"
                alt="Certification 4"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 