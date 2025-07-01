"use client";

import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

// Heroicons for Contact Page
const EnvelopeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const ContactInfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="text-rayora-teal-primary mr-4 flex-shrink-0 w-6 h-6 mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            {children}
        </div>
    </div>
);


const ContactPage = () => {
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

    // Simulate API call
    console.log("Form data submitted:", formData);
    setTimeout(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-rayora-gray-light">
      <AnimatedSection animationType="fadeIn" className="!py-16 md:!py-20 bg-rayora-teal-primary text-white">
        <div className="text-center container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-teal-100">
            We're here to answer your questions and explore how Rayora can help you achieve your goals. Reach out today!
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="slideInUp" className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
            {/* Contact Form - takes more space */}
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-2xl">
              <h2 className="mb-6">Send Us a Message</h2>
              {isSubmitted && (
                <div className="mb-4 p-4 bg-green-50 text-green-700 border border-green-300 rounded-md">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="mb-4 p-4 bg-red-50 text-red-700 border border-red-300 rounded-md">
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                         className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rayora-blue-primary focus:border-rayora-blue-primary sm:text-sm transition-colors"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                         className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rayora-blue-primary focus:border-rayora-blue-primary sm:text-sm transition-colors"/>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                         className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rayora-blue-primary focus:border-rayora-blue-primary sm:text-sm transition-colors"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-rayora-blue-primary focus:border-rayora-blue-primary sm:text-sm transition-colors"></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information - takes less space */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl space-y-8">
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-6">
                    <ContactInfoItem icon={<EnvelopeIcon />} title="Email">
                        <a href="mailto:info@rayora.com" className="text-gray-600 hover:text-rayora-blue-primary">info@rayora.com</a>
                        <p className="text-xs text-gray-500 mt-1">(Preferred for general inquiries)</p>
                    </ContactInfoItem>
                    <ContactInfoItem icon={<PhoneIcon />} title="Phone">
                        <a href="tel:+491234567890" className="text-gray-600 hover:text-rayora-blue-primary">+49 123 4567890</a>
                        <p className="text-xs text-gray-500 mt-1">(For urgent matters)</p>
                    </ContactInfoItem>
                    <ContactInfoItem icon={<MapPinIcon />} title="Headquarters">
                        <p className="text-gray-600">Rayora is proudly headquartered in Germany.</p>
                        <p className="mt-2 text-sm text-gray-500">
                            Please note: We operate as a fully digital company and do not maintain a physical office for visits. All collaborations and meetings are conducted remotely or at client locations by arrangement.
                        </p>
                    </ContactInfoItem>
                </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Digital Presence</h3>
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-center p-4">
                  <p className="text-sm">Abstract map or illustrative graphic representing global digital reach from Germany.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
