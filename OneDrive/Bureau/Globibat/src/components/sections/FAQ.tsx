'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  lang?: 'fr' | 'en';
}

export default function FAQ({ title, subtitle, items, lang = 'fr' }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index * 0.1}
              className="mb-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  aria-expanded={activeIndex === index}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-500"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 