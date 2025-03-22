'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale';
  onClick?: () => void;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fadeIn',
  onClick
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    slideIn: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const { initial, animate } = animations[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
} 