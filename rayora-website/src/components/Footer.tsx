import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-rayora-gray-dark text-rayora-gray-light py-12 mt-auto">
      <div className="container-custom mx-auto px-4 text-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-rayora-blue-secondary transition-colors mb-4 inline-block">
          Rayora
        </Link>
        <p className="text-sm text-rayora-gray-medium mb-2">
          Empowering Progress Through Intelligent Digital Solutions.
        </p>
        <p className="text-sm text-rayora-gray-medium mb-4">
          &copy; {new Date().getFullYear()} Rayora. All rights reserved. Headquarters in Germany.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/solutions" className="text-xs text-rayora-gray-light hover:text-rayora-blue-secondary">Solutions</Link>
          <Link href="/consulting" className="text-xs text-rayora-gray-light hover:text-rayora-blue-secondary">Consulting</Link>
          <Link href="/about" className="text-xs text-rayora-gray-light hover:text-rayora-blue-secondary">About</Link>
          <Link href="/contact" className="text-xs text-rayora-gray-light hover:text-rayora-blue-secondary">Contact</Link>
          {/* <Link href="/privacy" className="text-xs text-rayora-gray-light hover:text-rayora-blue-secondary">Privacy Policy</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
