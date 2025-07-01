import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rayora - Empowering Progress Through Intelligent Digital Solutions',
  description: 'Rayora empowers people and organizations through intelligent digital solutions. From scalable e-learning platforms and learning management systems to innovative e-commerce solutions, we design, develop, and operate software that drives progress.',
  keywords: 'digital solutions, e-learning, lms, e-commerce, software development, digital transformation, knowledge management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={`bg-rayora-gray-light text-rayora-gray-dark flex flex-col min-h-screen antialiased`}>
        <Navbar />
        <main className="flex-grow container-custom mx-auto px-4 py-8"> {/* Updated to container-custom */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
