'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTimes, FaComments } from 'react-icons/fa';
import { useTheme } from '@/lib/providers/ThemeProvider';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Appelez-nous',
      value: '+41 21 505 00 62',
      href: 'tel:+41215050062',
      ariaLabel: 'Appeler Globibat au +41 21 505 00 62',
    },
    {
      icon: FaEnvelope,
      label: 'Écrivez-nous',
      value: 'info@globibat.com',
      href: 'mailto:info@globibat.com',
      ariaLabel: 'Envoyer un email à info@globibat.com',
    },
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className={`rounded-lg p-4 shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className={`flex items-center space-x-3 rounded-lg p-3 transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700 text-white'
                        : 'hover:bg-gray-100 text-gray-900'
                    }`}
                    aria-label={contact.ariaLabel}
                  >
                    <contact.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{contact.label}</span>
                      <span className="text-sm text-blue-600">{contact.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-4 shadow-lg transition-colors ${
            isOpen
              ? theme === 'dark'
                ? 'bg-gray-700 text-white'
                : 'bg-gray-100 text-gray-900'
              : 'bg-blue-600 text-white'
          }`}
          aria-label={isOpen ? 'Fermer le menu de contact' : 'Ouvrir le menu de contact'}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" aria-hidden="true" />
          ) : (
            <FaComments className="h-6 w-6" aria-hidden="true" />
          )}
        </motion.button>
      </div>
    </>
  );
} 