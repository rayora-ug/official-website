"use client"; // Add this directive

import Link from 'next/link';
import { useState } from 'react'; // For mobile menu toggle

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses = "text-gray-700 hover:text-rayora-blue-primary px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const mobileNavLinkClasses = "block text-gray-700 hover:text-rayora-blue-primary px-3 py-2 rounded-md text-base font-medium transition-colors";


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold text-rayora-blue-primary hover:text-rayora-blue-secondary transition-colors">
              Rayora
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={navLinkClasses}>Home</Link>
              <Link href="/solutions" className={navLinkClasses}>Solutions</Link>
              <Link href="/consulting" className={navLinkClasses}>Consulting</Link>
              <Link href="/about" className={navLinkClasses}>About Us</Link>
              <Link href="/contact" className={`${navLinkClasses} bg-rayora-blue-primary text-white hover:bg-rayora-blue-secondary hover:text-white`}>Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-rayora-blue-primary hover:text-white hover:bg-rayora-blue-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/solutions" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
          <Link href="/consulting" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Consulting</Link>
          <Link href="/about" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className={`${mobileNavLinkClasses} bg-rayora-blue-primary text-white hover:bg-rayora-blue-secondary hover:text-white`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
