import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/sections/ContactForm';
import { useTranslation } from '@/lib/i18n';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Globibat - General Construction Company',
  description: 'Get in touch with Globibat for all your construction, renovation, cleaning, and moving needs in Geneva. Request a quote or schedule a consultation.',
  keywords: 'contact globibat, construction quote geneva, renovation estimate, cleaning services contact, moving services contact',
};

export default function ContactPage() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl text-blue-500" />,
      title: 'Phone',
      details: [
        { label: 'Main Office', value: '+41 22 300 00 00' },
        { label: 'Emergency', value: '+41 79 000 00 00' }
      ]
    },
    {
      icon: <FaEnvelope className="text-3xl text-blue-500" />,
      title: 'Email',
      details: [
        { label: 'General Inquiries', value: 'info@globibat.ch' },
        { label: 'Support', value: 'support@globibat.ch' }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
      title: 'Address',
      details: [
        { label: 'Office', value: '123 Rue Example, 1200 Geneva' }
      ]
    },
    {
      icon: <FaClock className="text-3xl text-blue-500" />,
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '8:00 - 18:00' },
        { label: 'Saturday', value: '9:00 - 14:00' }
      ]
    }
  ];

  return (
    <main className="flex-1">
      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-gray-600">{detail.label}</p>
                      <p className="font-medium">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Send Us a Message</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm lang="en" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.8802012085266!2d6.1442!3d46.2043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEyJzE1LjUiTiA2wrAwOCc0MC44IkU!5e0!3m2!1sen!2sch!4v1635959562834!5m2!1sen!2sch"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">24/7 Emergency Service</h2>
          <p className="text-lg mb-4">For urgent assistance, please call our emergency hotline</p>
          <a 
            href="tel:+41790000000" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            +41 79 000 00 00
          </a>
        </div>
      </section>
    </main>
  );
} 