"use client";

import React, { useState } from 'react';
import Link from "next/link";

// Icon components
const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setSubmitError(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setSubmitError("Please enter a valid email address.");
        setIsLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(result.error || 'There was an error sending your message.');
      }
    } catch (error) {
      setSubmitError('Sorry, there was an error sending your message. Please try again or contact us directly at contact@rayora.de');
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      title: "Email Us",
      description: "Get in touch for project inquiries and collaborations",
      icon: <EnvelopeIcon />,
      contact: "contact@rayora.de",
      href: "mailto:contact@rayora.de"
    },
    {
      title: "Call Us",
      description: "Speak directly with our team for urgent matters",
      icon: <PhoneIcon />,
      contact: "+49 123 4567890",
      href: "tel:+491234567890"
    },
    {
      title: "Our Location",
      description: "Digital-first company based in Hamburg, Germany",
      icon: <MapPinIcon />,
      contact: "Hamburg, Germany",
      href: "#"
    },
    {
      title: "Response Time",
      description: "We typically respond within 24 hours",
      icon: <ClockIcon />,
      contact: "24 hours",
      href: "#"
    }
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to answer your questions and explore how Rayora can help you achieve your goals. Reach out today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@rayora.de" className="inline-block px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium">
              Send Email Directly
            </a>
            <Link href="/solutions" className="inline-block px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition font-medium">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                {info.href !== "#" ? (
                  <a href={info.href} className="text-blue-500 font-medium hover:text-blue-600 transition">
                    {info.contact}
                  </a>
                ) : (
                  <span className="text-blue-500 font-medium">{info.contact}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-300 rounded-xl">
                  ✅ Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-300 rounded-xl">
                  ❌ {submitError}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="What can we help you with?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Location</h3>
                <p className="text-gray-600 mb-6">
                  Based in the vibrant city of Hamburg, Germany, we serve clients worldwide through digital innovation.
                </p>
                
                <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150646.1990525028!2d9.735078700000001!3d53.55073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sde!4v1672575600000!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hamburg, Germany - Rayora Location"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Working Hours</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM CET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your ideas and turn them into reality. We&apos;re just a message away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@rayora.de" className="inline-block px-8 py-4 bg-white text-blue-500 rounded-xl hover:bg-gray-100 transition font-medium text-lg">
              Email Us Now
            </a>
            <Link href="/consulting" className="inline-block px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-500 transition font-medium text-lg">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
