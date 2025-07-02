// src/app/solutions/page.tsx
import Link from "next/link";

// Icon components
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.119-1.243l1.263-12C4.466 8.475 5.016 8 5.674 8h12.652c.658 0 1.208.475 1.28 1.007z" />
  </svg>
);

const CpuChipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const BuildingOfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l-.75 18H5.25L4.5 3zM9 9h1.5m-1.5 3h1.5m-1.5 3h1.5M13.5 9H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const GlobeAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm8.716-6.747c-1.255 3.031-3.95 5.429-7.187 6.462M3.284 14.253c1.255 3.031 3.95 5.429 7.187 6.462M12 3c-2.485 0-4.5 4.03-4.5 9s2.015 9 4.5 9m0-18c2.485 0 4.5 4.03 4.5 9s-2.015 9-4.5 9" />
  </svg>
);

const ChatBubbleLeftRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

export default function SolutionsPage() {
  const solutions = [
    {
      title: "E-Learning Platforms",
      description: "Custom-built learning management systems that scale with your audience, improve retention, and foster interactive learning experiences.",
      icon: <BookOpenIcon />,
      features: ["Interactive Courseware", "Progress Tracking", "Assessment Tools", "Mobile Learning"],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "E-Commerce Applications",
      description: "Full-featured, responsive online stores optimized for performance, product discoverability, and high conversion rates.",
      icon: <ShoppingBagIcon />,
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "SEO Optimization"],
      technologies: ["Next.js", "Stripe API", "MongoDB", "Vercel"]
    },
    {
      title: "AI-Powered Language Tools",
      description: "Intelligent apps that adapt to the learner's level, enhancing language learning through smart vocab builders and interactive practice.",
      icon: <CpuChipIcon />,
      features: ["Adaptive Learning", "Speech Recognition", "Progress Analytics", "Gamification"],
      technologies: ["Python", "TensorFlow", "React Native", "Firebase"]
    },
    {
      title: "Enterprise Web Applications",
      description: "Robust business applications tailored to streamline operations, enhance productivity, and support digital transformation initiatives.",
      icon: <BuildingOfficeIcon />,
      features: ["Workflow Automation", "Real-time Collaboration", "Data Visualization", "API Integration"],
      technologies: ["TypeScript", "Docker", "Kubernetes", "GraphQL"]
    },
    {
      title: "Custom Web Platforms",
      description: "From MVPs to enterprise platforms, we build fast, secure, and user-focused digital solutions for business transformation.",
      icon: <GlobeAltIcon />,
      features: ["Responsive Design", "Performance Optimization", "Security Hardening", "Scalable Architecture"],
      technologies: ["Vue.js", "Laravel", "Redis", "CloudFlare"]
    },
    {
      title: "AI Chat & Communication",
      description: "Intelligent conversational interfaces and communication platforms that enhance user engagement and support automation.",
      icon: <ChatBubbleLeftRightIcon />,
      features: ["Natural Language Processing", "Multi-channel Support", "Knowledge Base Integration", "Analytics & Insights"],
      technologies: ["OpenAI API", "WebSocket", "Express.js", "Elasticsearch"]
    }
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Digital Solutions That Drive Growth
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We build intelligent digital solutions that drive efficiency, engagement, and growth across education, commerce, and enterprise platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium">
              Discuss Your Project
            </Link>
            <Link href="/consulting" className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition font-medium">
              Get Consulting
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to deployment, we deliver comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures quality, efficiency, and successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", desc: "Requirements analysis, system design, and project roadmap development" },
              { step: "02", title: "Development", desc: "Agile development with regular updates and milestone reviews" },
              { step: "03", title: "Testing", desc: "Comprehensive testing including security, performance, and usability" },
              { step: "04", title: "Deployment", desc: "Smooth launch with ongoing support and maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and modern digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Frontend Technologies */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "React", desc: "Modern UI library" },
                  { name: "Next.js", desc: "Full-stack framework" },
                  { name: "Vue.js", desc: "Progressive framework" },
                  { name: "TypeScript", desc: "Type-safe development" },
                  { name: "Tailwind CSS", desc: "Utility-first styling" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-gray-500">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-16.5 0a3 3 0 013 3v6a3 3 0 013 3h13.5a3 3 0 013-3v-6a3 3 0 01-3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "Node.js", desc: "JavaScript runtime" },
                  { name: "Python", desc: "Versatile language" },
                  { name: "Express.js", desc: "Web framework" },
                  { name: "Laravel", desc: "PHP framework" },
                  { name: "GraphQL", desc: "Query language" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-gray-500">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Data & Cloud</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "PostgreSQL", desc: "Relational database" },
                  { name: "MongoDB", desc: "NoSQL database" },
                  { name: "Redis", desc: "In-memory store" },
                  { name: "AWS", desc: "Cloud platform" },
                  { name: "Firebase", desc: "Backend service" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-gray-500">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">DevOps & Tools</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "Docker", desc: "Containerization" },
                  { name: "Kubernetes", desc: "Orchestration" },
                  { name: "Git", desc: "Version control" },
                  { name: "CI/CD", desc: "Automation" },
                  { name: "Monitoring", desc: "Performance tracking" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-gray-500">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI & Emerging Technologies */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Emerging Technologies</h3>
              <p className="text-gray-600">Cutting-edge technologies we integrate to build intelligent solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "OpenAI API", color: "bg-green-100 text-green-800" },
                { name: "TensorFlow", color: "bg-orange-100 text-orange-800" },
                { name: "Machine Learning", color: "bg-purple-100 text-purple-800" },
                { name: "Natural Language Processing", color: "bg-blue-100 text-blue-800" },
                { name: "Computer Vision", color: "bg-indigo-100 text-indigo-800" },
                { name: "WebRTC", color: "bg-cyan-100 text-cyan-800" },
                { name: "WebSockets", color: "bg-teal-100 text-teal-800" },
                { name: "Progressive Web Apps", color: "bg-pink-100 text-pink-800" }
              ].map((tech, index) => (
                <div key={index} className={`px-4 py-3 rounded-xl text-center text-sm font-medium ${tech.color} hover:scale-105 transition-transform duration-200`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Need a tailored solution or want to collaborate? Let&apos;s discuss your project requirements.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-500 rounded-xl hover:bg-gray-100 transition font-medium text-lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
