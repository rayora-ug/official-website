// FILE: src/app/solutions/page.tsx
// This file defines the Solutions page.

// SEO Metadata: Specific metadata for this page can be defined here.
// It will be merged with the root layout's metadata.
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Solutions by Rayora | E-learning, LMS, E-commerce, Custom Dev',
  description: 'Explore Rayora\'s suite of digital solutions including advanced e-learning platforms, comprehensive Learning Management Systems (LMS), innovative e-commerce software, and bespoke custom software development services tailored to your needs.',
  keywords: 'e-learning platforms, learning management systems, LMS, e-commerce solutions, custom software development, digital products, Rayora solutions',
};

// To make this page CMS-driven:
// 1. Define a "Solution" content type in your headless CMS (e.g., Strapi, Contentful, Sanity).
//    Fields might include: id (slug), icon (media/text), title, description, features (repeatable text/rich text), illustration (media).
// 2. In a Next.js project using Pages Router, you would use `getStaticProps` to fetch this data at build time.
//    Example:
//    export async function getStaticProps() {
//      const res = await fetch('YOUR_CMS_API_ENDPOINT/solutions');
//      const solutionsData = await res.json();
//      return { props: { solutionsData } };
//    }
// 3. In Next.js App Router (which this project uses), data fetching for static generation is typically done
//    directly within the Server Component or by fetching in a child Server Component.
//    For example, you might have:
//    async function getSolutionsData() {
//      const res = await fetch('YOUR_CMS_API_ENDPOINT/solutions', { next: { revalidate: 3600 } }); // ISR example
//      if (!res.ok) throw new Error('Failed to fetch solutions');
//      return res.json();
//    }
//    And then in the SolutionsPage component:
//    const solutions = await getSolutionsData();
//    This page currently uses a hardcoded `solutions` array. The structure of this array
//    is designed to be easily replaceable with data fetched from a CMS.

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

// Heroicons for Solutions Page
const AcademicCapIconSolution = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-rayora-blue-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const BookOpenIconSolution = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-rayora-teal-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ShoppingCartIconSolution = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-purple-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

const CodeBracketIconSolution = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-red-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


const solutions = [
  {
    id: 'elearning',
    icon: <AcademicCapIconSolution />,
    title: 'E-learning Platforms',
    description: 'We design and develop interactive and scalable e-learning platforms tailored to your organization\'s educational needs. Our platforms focus on user engagement, accessibility, and seamless content delivery, supporting various learning methodologies and multimedia content.',
    features: [
      'Customizable course structures & learning paths',
      'Interactive modules with gamification elements',
      'Advanced progress tracking and analytics',
      'Fully mobile-responsive and accessible design (WCAG)',
      'SCORM/xAPI compatibility and LRS integration',
    ],
    illustrationPlaceholder: '/assets/illustrations/elearning-illustration.svg' // Placeholder path
  },
  {
    id: 'lms',
    icon: <BookOpenIconSolution />,
    title: 'Learning Management Systems (LMS)',
    description: 'Our comprehensive LMS solutions empower you to manage, deliver, and track educational content efficiently. From user enrollment and course administration to assessment and certification, we provide robust systems that streamline the learning process.',
    features: [
      'Intuitive user and course management interfaces',
      'Automated grading, feedback, and certification',
      'Powerful reporting and analytics dashboards',
      'Seamless integration with third-party tools & HRIS',
      'Secure, scalable, and cloud-native infrastructure',
    ],
    illustrationPlaceholder: '/assets/illustrations/lms-illustration.svg' // Placeholder path
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCartIconSolution />,
    title: 'E-commerce Software Solutions',
    description: 'Drive your online business growth with our innovative e-commerce solutions. We build secure, scalable, and feature-rich online stores that provide exceptional user experiences, from product discovery to checkout and beyond.',
    features: [
      'Bespoke online store design and UX optimization',
      'Secure payment gateway and multi-currency support',
      'Advanced inventory and order management systems',
      'Integrated customer relationship management (CRM)',
      'SEO-friendly architecture with marketing automation tools',
    ],
    illustrationPlaceholder: '/assets/illustrations/ecommerce-illustration.svg' // Placeholder path
  },
  {
    id: 'custom-dev',
    icon: <CodeBracketIconSolution />,
    title: 'Custom Software Development',
    description: 'When off-the-shelf software doesn\'t fit, our custom development services provide solutions precisely engineered for your unique business challenges. We work closely with you from concept to deployment to deliver software that optimizes your processes and drives innovation.',
    features: [
      'In-depth requirement analysis and strategic consultation',
      'Agile development with transparent project management',
      'Highly scalable, maintainable, and well-documented code',
      'Robust API development and third-party system integration',
      'Comprehensive ongoing support and maintenance plans',
    ],
    illustrationPlaceholder: '/assets/illustrations/custom-dev-illustration.svg' // Placeholder path
  },
];

const SolutionsPage = () => {
  return (
    <div className="bg-rayora-gray-light">
      <AnimatedSection animationType="fadeIn" className="!py-16 md:!py-20 bg-rayora-blue-primary text-white">
        <div className="text-center container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Digital Solutions</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-blue-100">
            Discover how Rayora's intelligent and tailor-made digital solutions can empower your organization to achieve its strategic goals.
          </p>
        </div>
      </AnimatedSection>

      {solutions.map((solution, index) => (
        <AnimatedSection
          key={solution.id}
          animationType="slideInUp" // Consistent animation for these sections
          className={`py-12 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-rayora-gray-light'}`}
        >
          <div className={`container-custom flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}>
            <div className="md:w-2/5 text-center md:text-left">
              <div className="mb-6 inline-block p-4 bg-gray-100 rounded-xl shadow-md">
                {solution.icon}
              </div>
              <h2 className="mb-4">{solution.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{solution.description}</p>
            </div>
            <div className="md:w-3/5">
              {/* Illustration Placeholder */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-500 mb-8 md:mb-0">
                Illustrative Graphic for {solution.title}
              </div>
            </div>
          </div>
          <div className="container-custom mt-10 md:mt-12">
             <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-5 text-center md:text-left">Key Features & Benefits:</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-600">
                    <CheckCircleIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection animationType="fadeIn" className="py-16 md:py-20 bg-rayora-gray-medium">
        <div className="container-custom text-center">
          <h2 className="text-white">Ready to Build Your Solution?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Let's discuss how our expertise can bring your vision to life.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="bg-white text-rayora-blue-primary hover:bg-rayora-gray-light">
            Contact Us for a Consultation
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SolutionsPage;
