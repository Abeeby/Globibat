'use client';

import React, { useState, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaComments, FaCheck, FaExclamationTriangle, FaPhoneAlt } from 'react-icons/fa';
import { useTranslations, useLocale } from '@/lib/i18n';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

interface ContactFormProps {
  lang: string;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const { t } = useTranslations();
  const { currentLocale } = useLocale();
  const isEnglish = lang === 'en' || currentLocale === 'en';
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [apiMessage, setApiMessage] = useState<string>('');
  
  // Services en français et en anglais
  const services = isEnglish
    ? [
        { value: '', label: 'Select a service' },
        { value: 'electricite', label: 'Electricity & Electronic Repair' },
        { value: 'serrurerie', label: 'Locksmithing & Repair' },
        { value: 'nettoyage', label: 'Cleaning & Concierge' },
        { value: 'demenagement', label: 'Moving & Clearance' },
        { value: 'construction', label: 'Construction & Renovation' },
        { value: 'autre', label: 'Other service' },
      ]
    : [
        { value: '', label: 'Sélectionnez un service' },
        { value: 'electricite', label: 'Électricité & dépannage électronique' },
        { value: 'serrurerie', label: 'Serrurerie & dépannage' },
        { value: 'nettoyage', label: 'Nettoyage & conciergerie' },
        { value: 'demenagement', label: 'Débarras & déménagement' },
        { value: 'construction', label: 'Construction & rénovation' },
        { value: 'autre', label: 'Autre service' },
      ];
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = isEnglish ? 'Name is required' : 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = isEnglish ? 'Email is required' : 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isEnglish ? 'Invalid email format' : 'L\'email n\'est pas valide';
    }
    
    if (formData.phone && !/^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/.test(formData.phone)) {
      newErrors.phone = isEnglish ? 'Invalid phone number' : 'Le numéro de téléphone n\'est pas valide';
    }
    
    if (!formData.service) {
      newErrors.service = isEnglish ? 'Please select a service' : 'Veuillez sélectionner un service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur lorsque l'utilisateur commence à corriger
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setApiMessage('');
    
    try {
      // Appel à notre API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || (isEnglish ? 'Error sending the form' : 'Erreur lors de l\'envoi du formulaire'));
      }
      
      setSubmitStatus('success');
      setApiMessage(data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      setSubmitStatus('error');
      setApiMessage(error instanceof Error ? error.message : (isEnglish ? 'An error occurred when sending the form' : 'Une erreur est survenue lors de l\'envoi du formulaire'));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {/* Bouton d'appel direct */}
      <div className="mb-8 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0" id="devis">
          {isEnglish ? 'Request a Quote' : 'Demande de devis'}
        </h2>
        <a 
          href="tel:+41215050062" 
          className="inline-flex items-center justify-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
        >
          <FaPhoneAlt className="mr-2" />
          {isEnglish ? 'Call Now' : 'Appeler maintenant'}
        </a>
      </div>
      
      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <FaCheck size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {isEnglish ? 'Thank you for your message!' : 'Merci pour votre message !'}
          </h3>
          <p className="text-gray-600 mb-6">
            {apiMessage || (isEnglish 
              ? 'We have received your request and will contact you as soon as possible.' 
              : 'Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.')}
          </p>
          <button
            type="button"
            onClick={() => setSubmitStatus(null)}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {isEnglish ? 'Send another message' : 'Envoyer un autre message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-gray-600 mb-6">
            {isEnglish
              ? `Fill out the form below for a quote request or call us directly at `
              : `Remplissez le formulaire ci-dessous pour une demande de devis ou appelez-nous directement au `}
            <a href="tel:+41215050062" className="text-blue-600 font-medium">+41 21 505 00 62</a>.
          </p>
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaExclamationTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">
                    {apiMessage || (isEnglish
                      ? 'An error occurred while sending the form. Please try again later.'
                      : 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.')}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {isEnglish ? 'Full Name' : 'Nom complet'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder={isEnglish ? 'Your name' : 'Votre nom'}
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder={isEnglish ? 'Your email' : 'Votre email'}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {isEnglish ? 'Phone' : 'Téléphone'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                  placeholder={isEnglish ? 'Your phone number' : 'Votre numéro de téléphone'}
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                {isEnglish ? 'Address' : 'Adresse'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaHome className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder={isEnglish ? 'Your address' : 'Votre adresse'}
                />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              {isEnglish ? 'Service Requested' : 'Service souhaité'} <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`block w-full py-2 px-3 border ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <FaComments className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={isEnglish ? 'Describe your project or request...' : 'Décrivez votre projet ou votre demande...'}
              ></textarea>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting 
                ? (isEnglish ? 'Sending...' : 'Envoi en cours...') 
                : (isEnglish ? 'Send Request' : 'Envoyer la demande')}
            </button>
            
            <a 
              href="tel:+41215050062" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaPhone className="mr-2" />
              +41 21 505 00 62
            </a>
          </div>
        </form>
      )}
    </div>
  );
} 