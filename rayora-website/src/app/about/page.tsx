// FILE: src/app/about/page.tsx
// This file defines the About Us page.
// To make this page CMS-driven:
// 1. Content for "Mission", "Vision", "Story" could come from a global settings area or a specific "About Page" content type in the CMS.
//    Fields might include: missionStatement (rich text), visionStatement (rich text), companyStory (rich text), coreValues (repeatable: valueTitle, valueDescription).
// 2. "Team Members" could be a separate repeatable content type linked to the About Page or fetched independently.
//    Fields for Team Member: name, title, bio (optional), avatar (media).
// 3. Fetching logic would be similar to other pages, using async functions for Server Components.
//    Example for global About content:
//    async function getAboutPageContent() {
//      const res = await fetch('YOUR_CMS_API_ENDPOINT/about-page-content', { next: { revalidate: 3600 } });
//      if (!res.ok) throw new Error('Failed to fetch about page content');
//      return res.json();
//    }
//    And in the AboutPage component:
//    const aboutContent = await getAboutPageContent(); // e.g., aboutContent.mission, aboutContent.coreValues
//    const teamMembers = await getTeamMembers(); // Separate fetch if needed
//    This page currently uses hardcoded text for these sections and placeholder team members.

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

// Heroicons for About Page
const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const CheckBadgeIcon = () => ( // For Values
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const TeamMemberCard = ({ name, title, avatar }: { name: string, title: string, avatar?: React.ReactNode }) => (
  <div className="bg-rayora-gray-light p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
    <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
      {avatar || <UserCircleIcon />}
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-rayora-blue-primary">{title}</p>
  </div>
);


const AboutPage = () => {
  return (
    <div className="bg-white">
      <AnimatedSection animationType="fadeIn" className="!py-16 md:!py-20 bg-rayora-gray-dark text-white">
        <div className="text-center container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Rayora</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-300">
            Driving progress through intelligent digital solutions, rooted in a clear vision and strong values.
          </p>
        </div>
      </AnimatedSection>

      {/* Our Mission */}
      <AnimatedSection animationType="slideInUp" className="py-12 md:py-16 bg-rayora-gray-light">
        <div className="container-custom">
          <div className="md:flex md:items-center md:gap-12 lg:gap-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="mb-6">Our Guiding Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Rayora empowers people and organizations through intelligent digital solutions. From scalable e-learning platforms and learning management systems to innovative e-commerce solutions, we design, develop, and operate software that drives progress.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                In addition, we offer expert consulting in digital transformation and knowledge management to help our clients succeed in an increasingly digital world.
                </p>
            </div>
            <div className="md:w-1/2">
                <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 rounded-xl shadow-lg flex items-center justify-center text-gray-500">
                    Illustrative Graphic: Mission & Vision
                </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision and Values */}
      <AnimatedSection animationType="fadeIn" className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="mb-10 text-center">Our Vision & Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="bg-rayora-blue-primary bg-opacity-5 p-8 rounded-xl shadow-lg border border-rayora-blue-primary border-opacity-20">
              <h3 className="text-rayora-blue-primary mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading force in digital innovation, fostering growth and enabling knowledge sharing globally. We strive to create a future where technology empowers every individual and organization to reach their full potential.
              </p>
            </div>
            <div className="bg-rayora-teal-primary bg-opacity-5 p-8 rounded-xl shadow-lg border border-rayora-teal-primary border-opacity-20">
              <h3 className="text-rayora-teal-primary mb-3">Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                {['Innovation', 'Integrity', 'Collaboration', 'Client Success', 'Excellence'].map(value => (
                    <li key={value} className="flex items-center">
                        <CheckBadgeIcon />
                        <span className="font-semibold">{value}:</span>
                        <span className="ml-1">
                            {
                                {
                                'Innovation': 'Continuously seeking creative and effective solutions.',
                                'Integrity': 'Upholding the highest ethical standards in all our actions.',
                                'Collaboration': 'Working together with clients and partners for shared success.',
                                'Client Success': 'Dedicating ourselves to achieving our clients\' goals.',
                                'Excellence': 'Striving for the highest quality in everything we do.'
                                }[value]
                            }
                        </span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* The Story Behind Rayora */}
      <AnimatedSection animationType="slideInUp" className="py-12 md:py-16 bg-rayora-gray-light">
         <div className="container-custom">
            <div className="md:flex md:items-center md:gap-12 lg:gap-16 md:flex-row-reverse">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="mb-6">The Story of Rayora</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    Rayora was founded on the belief that technology, when thoughtfully applied, can be a powerful catalyst for positive change and sustainable growth. Our journey began with a small team of passionate technologists and educators who saw a gap between the potential of digital tools and their practical application in various sectors.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                    We envisioned a company that not only builds exceptional software but also partners with organizations to navigate the complexities of the digital age. The name "Rayora" is inspired by the concepts of a "ray" of light, symbolizing clarity and guidance, and "ora," evoking an era of new possibilities.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    Today, Rayora stands as a testament to that vision, committed to delivering intelligent solutions and expert consultancy that empower our clients to thrive.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 rounded-xl shadow-lg flex items-center justify-center text-gray-500">
                        Illustrative Graphic: Rayora's Journey
                    </div>
                </div>
            </div>
        </div>
      </AnimatedSection>

      {/* Team or Founder Section (Optional) */}
      <AnimatedSection animationType="zoomIn" className="py-12 md:py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-10">Meet Our Leadership (Optional)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Rayora is driven by a passionate team of experts dedicated to innovation and client success. While we grow, we are proud of the core leadership guiding our mission.
            <br /><em className="text-sm">(This section can be expanded with actual team member profiles.)</em>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard name="[Founder Name]" title="Founder & CEO" />
            <TeamMemberCard name="[Tech Lead Name]" title="Lead Technologist" />
            <TeamMemberCard name="[Client Lead Name]" title="Client Success Lead" />
          </div>
        </div>
      </AnimatedSection>

       {/* Join Us / Careers CTA (Optional) */}
      <AnimatedSection animationType="fadeIn" className="py-16 md:py-20 bg-rayora-blue-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Interested in Joining Our Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            While we are not actively hiring for specific roles at this moment, we are always open to connecting with talented individuals passionate about making a difference with technology.
          </p>
          <Button href="/contact?subject=CareerInquiry" variant="primary" size="lg" className="bg-white text-rayora-blue-primary hover:bg-rayora-gray-light shadow-xl">
            Connect With Us
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
