import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaTools, FaLock, FaBroom, FaHome, FaBolt, FaTruck, FaStar, FaQuoteLeft, FaGoogle, FaCheckCircle, FaCalendarCheck, FaUserTie, FaPhoneAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Globibat - General Construction Company in Geneva',
  description: 'Globibat, your trusted partner for construction, renovation, cleaning, and moving services in Geneva. Professional and reliable solutions for all your projects.',
  keywords: 'construction geneva, renovation geneva, cleaning services geneva, moving services geneva, construction company geneva, professional builders geneva',
};

// Services mis en avant (version anglaise)
const featuredServices = [
  {
    id: 'construction',
    title: 'Construction & Renovation',
    description: 'Transform your space with our comprehensive construction and renovation services.',
    icon: FaHome,
    href: '/en/services/construction-renovation',
  },
  {
    id: 'electricite',
    title: 'Electricity & Repair',
    description: 'Electrical installations, repairs, standards compliance and advice for all your projects.',
    icon: FaBolt,
    href: '/en/services/electricite-depannage',
  },
  {
    id: 'serrurerie',
    title: 'Locksmithing & Repair',
    description: 'Lock installation and repair, door opening, security system installation.',
    icon: FaLock,
    href: '/en/services/serrurerie-depannage',
  },
];

// Projets récents (version anglaise)
const recentProjects = [
  {
    id: 'renovation-appartement',
    title: 'Complete Apartment Renovation',
    description: 'Complete renovation of a 100m² apartment in Plainpalais, Geneva.',
    imageSrc: '/images/projects/renovation-appartement-plainpalais.jpg',
    href: '/en/projets-realises/renovation-appartement-plainpalais',
    location: 'Plainpalais, Geneva',
    year: 2023,
  },
  {
    id: 'installation-electrique',
    title: 'Electrical Installation for Offices',
    description: 'Complete electrical installation for offices in the banking district.',
    imageSrc: '/images/projects/installation-electrique-bureaux.jpg',
    href: '/en/projets-realises/installation-electrique-bureaux',
    location: 'Banking District, Geneva',
    year: 2023,
  },
  {
    id: 'securite-immeuble',
    title: 'Residential Building Security',
    description: 'Installation of an access control system for a 40-apartment building.',
    imageSrc: '/images/projects/securisation-immeuble.jpg',
    href: '/en/projets-realises/securisation-immeuble',
    location: 'Carouge, Geneva',
    year: 2022,
  },
];

export default function HomePage() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: 'Construction & Renovation',
      description: 'Complete renovation and construction services for your residential and commercial projects.',
      icon: <FaTools className="text-4xl text-blue-500" />,
      link: '/en/services/construction-renovation'
    },
    {
      title: 'Cleaning',
      description: 'Professional cleaning services for all types of spaces, from homes to offices.',
      icon: <FaBroom className="text-4xl text-blue-500" />,
      link: '/en/services/cleaning'
    },
    {
      title: 'Moving & Clearance',
      description: 'Complete moving services and space clearance for a stress-free experience.',
      icon: <FaTruck className="text-4xl text-blue-500" />,
      link: '/en/services/moving-clearance'
    }
  ];

  const testimonials = [
    {
      content: 'Globibat completed the full renovation of our apartment. The result is up to our expectations. Professionalism, respect for deadlines and quality work, I highly recommend!',
      rating: 5,
      author: 'Marie Dubois',
      position: 'Property Owner, Geneva',
    },
    {
      content: 'We have been working with Globibat for the maintenance of our buildings for several years. Their responsiveness and the quality of their services are impeccable.',
      rating: 5,
      author: 'Jean Martin',
      position: 'Building Manager, Lausanne',
    },
    {
      content: 'Following water damage, I contacted Globibat in an emergency. Their quick and efficient intervention allowed me to limit the damage. A big thank you to the whole team!',
      rating: 5,
      author: 'Thomas Laurent',
      position: 'Restaurant Owner, Carouge',
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaCheckCircle className="h-8 w-8 text-blue-600" />,
      title: t('home.whyChooseUs.expertise.title'),
      description: t('home.whyChooseUs.expertise.description'),
    },
    {
      icon: <FaStar className="h-8 w-8 text-blue-600" />,
      title: t('home.whyChooseUs.quality.title'),
      description: t('home.whyChooseUs.quality.description'),
    },
    {
      icon: <FaCalendarCheck className="h-8 w-8 text-blue-600" />,
      title: t('home.whyChooseUs.reliability.title'),
      description: t('home.whyChooseUs.reliability.description'),
    },
    {
      icon: <FaUserTie className="h-8 w-8 text-blue-600" />,
      title: t('home.whyChooseUs.customerService.title'),
      description: t('home.whyChooseUs.customerService.description'),
    },
  ];

  const features = [
    {
      title: 'Professional Expertise',
      description: 'Over 15 years of experience in construction and renovation.',
      icon: <FaShieldAlt className="text-3xl text-blue-500" />
    },
    {
      title: 'Quality Guarantee',
      description: 'Commitment to excellence and customer satisfaction.',
      icon: <FaShieldAlt className="text-3xl text-blue-500" />
    }
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Globibat Construction"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Trusted Partner in Construction</h1>
          <p className="text-xl md:text-2xl mb-8">Professional solutions for all your construction, renovation, and cleaning needs in Geneva</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/en/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Request a Quote
            </Link>
            <Link href="/en/services" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <FaPhone className="text-2xl mr-2" />
              <a href="tel:+41223000000" className="hover:underline">+41 22 300 00 00</a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-2" />
              <a href="mailto:info@globibat.ch" className="hover:underline">info@globibat.ch</a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-2" />
              <span>Geneva, Switzerland</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('common.buttons.learnMore')} <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('home.projects.title')}
            subtitle={t('home.projects.subtitle')}
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-slate-700">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.imageSrc} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center text-white text-sm mb-2">
                      <span className="mr-4">{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <Link 
                      href={project.href}
                      className="inline-block text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors"
                    >
                      {t('common.buttons.learnMore')}
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionHeading
                title={t('home.about.title')}
                subtitle={t('home.about.subtitle')}
                centered
              />
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                {t('home.about.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('home.whyChooseUs.title')}
            subtitle={t('home.whyChooseUs.subtitle')}
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={t('home.testimonials.title')}
            subtitle={t('home.testimonials.subtitle')}
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <div className="mb-6">
                  <FaQuoteLeft className="text-blue-600/20 dark:text-blue-400/20 text-4xl mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 italic">{testimonial.content}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('home.cta.subtitle')}</p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md bg-white text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {t('common.buttons.contactUs')}
          </Link>
        </div>
      </section>

      {/* Calculator Promo Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Moving Volume Calculator"
                subtitle="Plan your move with our free tool"
                alignment="left"
              />
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Use our free volume calculator to estimate the space needed for your move. Enter your items and get an instant estimate of the required volume.
              </p>
              <Link
                href="/en/calculateur-volume"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Try the Calculator
              </Link>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/calculator.jpg"
                alt="Moving Volume Calculator"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bouton d'appel flottant */}
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