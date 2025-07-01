import Link from 'next/link';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';

// Heroicons SVGs (outline style)
const AcademicCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-rayora-blue-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-rayora-teal-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
);

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-purple-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

const CodeBracketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-red-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

const ArrowsPointingInIcon = () => ( // For Digital Transformation
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-rayora-accent-amber">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
    </svg>
);

const LightBulbIcon = () => ( // For Knowledge Management
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-teal-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0M12 3v2.25m0 0c-1.47.011-2.882.283-4.22.75M12 5.25c1.47.011 2.882.283 4.22.75m0 0A6.01 6.01 0 0112 12a6.01 6.01 0 01-4.22-6m4.22 6a6.013 6.013 0 00-4.22-6M15 18a3 3 0 10-6 0c0 .794.257 1.524.699 2.146H14.3c.442-.622.699-1.352.699-2.146z" />
    </svg>
);


const ServiceCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col text-center">
    <div className="mb-5">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{children}</p>
    <Link href="/solutions" className="mt-4 text-sm text-rayora-blue-primary hover:text-rayora-blue-secondary font-semibold">
        Learn More &rarr;
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection animationType="fadeIn" className="bg-gradient-to-br from-rayora-blue-primary via-rayora-blue-secondary to-rayora-accent-indigo text-white text-center !py-20 md:!py-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"> {/* Overriding global h1 color */}
          Empowering Progress Through Intelligent Digital Solutions
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
          Rayora empowers people and organizations through intelligent digital solutions. We design, develop, and operate software that drives progress, from scalable e-learning platforms to innovative e-commerce solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href="/solutions" variant="primary" size="lg" className="bg-white text-rayora-blue-primary hover:bg-blue-50 shadow-xl w-full sm:w-auto">
            Discover Our Solutions
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-rayora-blue-primary shadow-xl w-full sm:w-auto">
            Get in Touch
          </Button>
        </div>
      </AnimatedSection>

      {/* Company Overview (Mission) */}
      <AnimatedSection animationType="slideInUp" className="bg-rayora-gray-light">
        <div className="text-center container-custom"> {/* Ensured container-custom */}
          <h2 className="mb-8">
            Our Mission: Your Success
          </h2>
          <p className="text-md md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Rayora empowers people and organizations through intelligent digital solutions. From scalable e-learning platforms and learning management systems to innovative e-commerce solutions, we design, develop, and operate software that drives progress. In addition, we offer expert consulting in digital transformation and knowledge management to help our clients succeed in an increasingly digital world.
          </p>
        </div>
      </AnimatedSection>

      {/* Key Service Areas section */}
      <AnimatedSection animationType="zoomIn" className="bg-white">
        <div className="text-center container-custom"> {/* Ensured container-custom */}
          <h2 className="mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={<AcademicCapIcon />} title="E-learning Platforms">
              Bespoke e-learning environments that are interactive, scalable, and user-friendly, designed to meet specific educational goals.
            </ServiceCard>
            <ServiceCard icon={<BookOpenIcon />} title="Learning Management Systems">
              Robust LMS solutions for creating, delivering, and tracking educational content with ease and efficiency.
            </ServiceCard>
            <ServiceCard icon={<ShoppingCartIcon />} title="E-commerce Solutions">
              Cutting-edge e-commerce platforms that enhance customer experience and drive online sales growth.
            </ServiceCard>
            <ServiceCard icon={<CodeBracketIcon />} title="Custom Software Development">
              Tailor-made software applications engineered to solve unique business challenges and optimize operations.
            </ServiceCard>
            <ServiceCard icon={<ArrowsPointingInIcon />} title="Digital Transformation Consulting">
              Strategic advisory services to help organizations navigate digital change and leverage technology for growth.
            </ServiceCard>
            <ServiceCard icon={<LightBulbIcon />} title="Knowledge Management Consulting">
              Expert guidance in developing strategies and systems to effectively manage and utilize organizational knowledge.
            </ServiceCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection animationType="fadeIn" className="bg-rayora-blue-primary text-white">
        <div className="text-center container-custom"> {/* Ensured container-custom */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white"> {/* Overriding global h2 color */}
            Ready to Transform Your Digital Landscape?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let Rayora be your partner in innovation and growth. Contact us today to discuss your unique needs and how our intelligent digital solutions can help you achieve your goals.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="bg-white text-rayora-blue-primary hover:bg-rayora-gray-light shadow-xl">
            Schedule a Consultation
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
};

export default HomePage;
