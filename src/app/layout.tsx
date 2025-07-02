// src/app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayora – Empowering Digital Progress",
  description: "Rayora builds intelligent digital solutions for e-learning, e-commerce, and enterprise platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " text-gray-900 bg-white"}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
