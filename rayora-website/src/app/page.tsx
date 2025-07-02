// src/app/page.tsx
import Button from "../components/Button";
import Link from "next/link";

// Service icons as SVG components
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500 mx-auto mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0M12 3v2.25m0 0c-1.47.011-2.882.283-4.22.75M12 5.25c1.47.011 2.882.283 4.22.75m0 0A6.01 6.01 0 0112 12a6.01 6.01 0 01-4.22-6m4.22 6a6.013 6.013 0 00-4.22-6M15 18a3 3 0 10-6 0c0 .794.257 1.524.699 2.146H14.3c.442-.622.699-1.352.699-2.146z" />
  </svg>
);



export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Empowering Digital Progress
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At Rayora, we design and build intelligent digital solutions—from scalable e-learning platforms to ecommerce and enterprise systems.
          </p>
          <Link href="/solutions">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
              Explore Our Solutions
            </Button>
          </Link>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
            Trusted by Innovators and educators worldwide
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Partner Names */}
            <div className="text-2xl font-semibold text-gray-600">
              AWS
            </div>
            <div className="text-2xl font-semibold text-gray-600">
              Google Cloud
            </div>
            <div className="text-2xl font-semibold text-gray-600">
              Moodle
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* E-Learning */}
            <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <GraduationCapIcon />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">E-Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                We design scalable LMS for educators and institutions.
              </p>
            </div>

            {/* E-Commerce */}
            <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <ShoppingCartIcon />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">E-Commerce</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart online storefronts built for growth.
              </p>
            </div>

            {/* Custom Software */}
            <div className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <LightBulbIcon />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Custom Software</h3>
              <p className="text-gray-600 leading-relaxed">
                From MVP to enterprise apps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed">
            &ldquo;Rayora helped us transform our e-learning vision into reality—the results exceeded our expectations.&rdquo;
          </blockquote>
          <cite className="text-gray-600 font-medium">
            — Dr. Rahman, Director of EDUNext
          </cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-500 py-16 text-center px-6 text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to build the future?</h2>
        <p className="text-blue-100 mb-6 text-lg">Let&apos;s create something amazing together.</p>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="bg-white text-blue-500 hover:bg-gray-100 border-white">
            Get in Touch
          </Button>
        </Link>
      </section>
    </main>
  );
}
