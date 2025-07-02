"use client"; // Required for potential future use of hooks like useState, useEffect for animations

import React, { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideInUp' | 'zoomIn'; // Example animation types
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeIn', // Default animation
}) => {
  // Placeholder for animation logic.
  // In a real scenario, this would use a library like Framer Motion
  // or custom CSS animations triggered by viewport visibility.

  let animationClass = '';
  switch (animationType) {
    case 'fadeIn':
      animationClass = 'animate-fadeIn'; // Ensure this class is defined in globals.css or Tailwind config
      break;
    case 'slideInUp':
      animationClass = 'animate-slideInUp'; // Define this animation
      break;
    case 'zoomIn':
      animationClass = 'animate-zoomIn'; // Define this animation
      break;
    default:
      animationClass = 'animate-fadeIn';
  }

  // For now, we'll just apply a generic class that might be styled with basic CSS animations.
  // The `fade-in` class was added to globals.css earlier.
  // More complex animations would require `framer-motion` or Intersection Observer API.

  return (
    <section className={`py-16 md:py-24 ${animationClass} ${className}`}>
      <div className="container-xl">
        {children}
      </div>
    </section>
  );
};

// Helper function to create simple animation classes in globals.css if not using a library
// For example, in globals.css:
/*
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideInUp {
  animation: slideInUp 0.7s ease-out forwards;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-zoomIn {
  animation: zoomIn 0.6s ease-out forwards;
}
*/

export default AnimatedSection;
