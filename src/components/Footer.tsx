import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors mb-4 inline-block">
          Rayora
        </Link>
        <p className="text-sm text-gray-400 mb-2">
          Empowering Progress Through Intelligent Digital Solutions.
        </p>
        <p className="text-sm text-gray-400 mb-4">
          &copy; {new Date().getFullYear()} Rayora UG. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/solutions" className="text-xs text-gray-300 hover:text-blue-400 transition-colors">Solutions</Link>
          <Link href="/consulting" className="text-xs text-gray-300 hover:text-blue-400 transition-colors">Consulting</Link>
          <Link href="/about" className="text-xs text-gray-300 hover:text-blue-400 transition-colors">About</Link>
          <Link href="/contact" className="text-xs text-gray-300 hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
