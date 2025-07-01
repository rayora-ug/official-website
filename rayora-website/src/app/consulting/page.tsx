// FILE: src/app/consulting/page.tsx
// This file defines the Consulting page.
// To make this page CMS-driven:
// 1. Define a "Consulting Service" content type in your headless CMS.
//    Fields could include: id (slug), icon (media/text), title, description, points (repeatable text/rich text), imagePlaceholder (media).
// 2. Define a "Success Story" or "Case Study" content type.
//    Fields could include: title, summary, linkToFullStory (optional).
// 3. Fetch this data similarly to the Solutions page, using async functions within the Server Component
//    or a child Server Component for App Router.
//    Example for consulting services:
//    async function getConsultingServices() {
//      const res = await fetch('YOUR_CMS_API_ENDPOINT/consulting-services', { next: { revalidate: 3600 } });
//      if (!res.ok) throw new Error('Failed to fetch consulting services');
//      return res.json();
//    }
//    And then in the ConsultingPage component:
//    const consultingServices = await getConsultingServices();
//    The page currently uses hardcoded `consultingServices` and placeholder success stories.
//    These are structured for easy replacement with CMS data.

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

// Heroicons for Consulting Page
const ArrowsPointingInIconConsulting = () => ( // For Digital Transformation
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-rayora-accent-amber">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
    </svg>
);

const LightBulbIconConsulting = () => ( // For Knowledge Management
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-rayora-teal-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0M12 3v2.25m0 0c-1.47.011-2.882.283-4.22.75M12 5.25c1.47.011 2.882.283 4.22.75m0 0A6.01 6.01 0 0112 12a6.01 6.01 0 01-4.22-6m4.22 6a6.013 6.013 0 00-4.22-6M15 18a3 3 0 10-6 0c0 .794.257 1.524.699 2.146H14.3c.442-.622.699-1.352.699-2.146z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const consultingServices = [
  {
    id: 'digital-transformation',
    icon: <ArrowsPointingInIconConsulting />,
    title: 'Digital Transformation Advisory',
    description: 'In today\'s fast-paced digital landscape, staying competitive requires continuous evolution. Our Digital Transformation Advisory services help you navigate complexity, identify opportunities, and implement strategies that leverage technology to fundamentally change how your business operates and delivers value.',
    points: [
      'Comprehensive digital maturity assessment & gap analysis.',
      'Strategic roadmap development for phased digital initiatives.',
      'Expert guidance on technology stack selection and integration.',
      'Effective change management and organizational alignment strategies.',
      'KPI definition, impact measurement, and continuous optimization cycles.',
    ],
    imagePlaceholder: '/assets/illustrations/digital-transformation-placeholder.svg',
  },
  {
    id: 'knowledge-management',
    icon: <LightBulbIconConsulting />,
    title: 'Knowledge Management Strategies',
    description: 'Your organization\'s knowledge is one of its most valuable assets. We help you implement effective Knowledge Management Strategies to capture, store, share, and utilize this knowledge. Our goal is to foster a culture of learning and collaboration, improving efficiency and driving innovation.',
    points: [
      'Thorough knowledge audit, flow analysis, and mapping.',
      'Design and implementation of centralized knowledge bases and intranets.',
      'Development of communities of practice and expert locator systems.',
      'Selection and deployment of tools for knowledge capture and dissemination.',
      'Frameworks for measuring the ROI of knowledge management initiatives.',
    ],
    imagePlaceholder: '/assets/illustrations/knowledge-management-placeholder.svg',
  }
];

const ConsultingPage = () => {
  return (
    <div className="bg-rayora-gray-light">
      <AnimatedSection animationType="fadeIn" className="!py-16 md:!py-20 bg-rayora-accent-indigo text-white">
        <div className="text-center container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Expert Consulting Services</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-indigo-100">
            Leverage Rayora's deep expertise to navigate your digital journey and unlock new levels of organizational intelligence and efficiency.
          </p>
        </div>
      </AnimatedSection>

      {consultingServices.map((service, index) => (
        <AnimatedSection
          key={service.id}
          animationType="slideInUp"
          className={`py-12 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-rayora-gray-light'}`}
        >
          <div className={`container-custom flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-16`}>
            <div className="md:w-1/2">
              {/* Placeholder for illustration */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-500 mb-8 md:mb-0">
                Illustrative Graphic for {service.title}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="mb-6 inline-block p-3 bg-gray-100 rounded-lg shadow-sm">
                {service.icon}
              </div>
              <h2 className="mb-5">{service.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map(point => (
                  <li key={point} className="flex items-start">
                    <CheckCircleIcon />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection animationType="fadeIn" className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Use Cases & Success Stories</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            We are proud of the impact we've made. Discover how our consulting services have helped organizations like yours achieve remarkable results.
            <br />
            <em className="text-sm">(Detailed case studies and success stories will be featured here soon.)</em>
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rayora-gray-light p-6 rounded-xl shadow-lg text-left hover:shadow-xl transition-shadow">
              <h3 className="text-rayora-blue-primary mb-2">Case Study: Transforming Retail Operations</h3>
              <p className="text-gray-600 text-sm">Learn how we guided a major retailer through a successful digital transformation, improving efficiency by 30% and enhancing customer engagement through integrated digital touchpoints.</p>
            </div>
            <div className="bg-rayora-gray-light p-6 rounded-xl shadow-lg text-left hover:shadow-xl transition-shadow">
              <h3 className="text-rayora-teal-primary mb-2">Success Story: Enhancing Knowledge Sharing</h3>
              <p className="text-gray-600 text-sm">Discover how a financial institution leveraged our KMS expertise to boost internal collaboration, reduce onboarding time for new employees, and foster a culture of continuous learning.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fadeIn" className="py-16 md:py-20 bg-rayora-blue-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Elevate Your Strategy?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Our expert consultants are ready to help you define and achieve your strategic objectives.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="bg-white text-rayora-blue-primary hover:bg-rayora-gray-light shadow-xl">
            Request a Consultation
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ConsultingPage;
