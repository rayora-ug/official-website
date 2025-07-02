// src/app/about/page.tsx
import Link from "next/link";

// Icon components
const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0M12 3v2.25m0 0c-1.47.011-2.882.283-4.22.75M12 5.25c1.47.011 2.882.283 4.22.75m0 0A6.01 6.01 0 0112 12a6.01 6.01 0 01-4.22-6m4.22 6a6.013 6.013 0 00-4.22-6M15 18a3 3 0 10-6 0c0 .794.257 1.524.699 2.146H14.3c.442-.622.699-1.352.699-2.146z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const RocketLaunchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

export default function AboutPage() {
  const companyValues = [
    {
      title: "User-Centric Design",
      description: "We believe great software should simplify complex problems. Every project we build starts with the user and scales with the system.",
      icon: <UserGroupIcon />
    },
    {
      title: "Innovation Focus", 
      description: "From e-learning platforms and e-commerce tools to custom business apps—we help bring bold ideas to life using cutting-edge, cloud-native technologies.",
      icon: <LightBulbIcon />
    },
    {
      title: "Quality & Reliability",
      description: "We're committed to delivering robust, secure, and maintainable solutions that stand the test of time and grow with your business.",
      icon: <HeartIcon />
    },
    {
      title: "Growth Mindset",
      description: "Though Rayora is new, our team brings years of experience from software development, product design, and digital education.",
      icon: <RocketLaunchIcon />
    }
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Rayora
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Rayora is a software company based in Germany, focused on building intelligent and scalable digital solutions. Our mission is to help individuals and organizations succeed in today&apos;s connected world—through technology that&apos;s accessible, elegant, and effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium">
              Let&apos;s Connect
            </Link>
            <Link href="/solutions" className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition font-medium">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Rayora
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            We&apos;re Just Getting Started
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Though Rayora is new, our team brings years of experience from software development, product design, and digital education. We&apos;re committed to growing with our clients and contributing to a smarter digital future.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                5+
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Years Experience</h3>
              <p className="text-gray-600 text-sm">Combined team expertise in software development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Core Focus Areas</h3>
              <p className="text-gray-600 text-sm">E-learning, E-commerce, and Enterprise solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                ∞
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Growth Potential</h3>
              <p className="text-gray-600 text-sm">Unlimited possibilities for digital innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Based in Germany, Serving Globally
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            From our base in Germany, we work with clients worldwide to deliver innovative digital solutions that make a real impact on their business and users.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900">Hamburg, Germany</h3>
            </div>
            <p className="text-gray-600">
              Strategically located in one of Europe&apos;s major tech hubs, enabling us to serve clients across different time zones with European quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Want to collaborate with us or have an idea in mind? Let&apos;s explore how we can help bring your vision to life.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-500 rounded-xl hover:bg-gray-100 transition font-medium text-lg">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
