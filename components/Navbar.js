'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-xl:max-w-7xl px-4 xl:mx-32">
  <div className="bg-gradient-to-r from-sky-50 to-sky-100 border border-sky-100 shadow-lg rounded-full py-4 px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.02 }} className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent  ">
              Optimus AI
            </motion.div>
          </Link>

          {/* Centered nav - use hidden on small screens */}
          <nav className="hidden md:flex items-center gap-6 mx-auto">
            <Link href="/" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">About</Link>
            <Link href="/services" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">Services</Link>
            <Link href="/contact" className="text-slate-700 hover:text-sky-600 transition-colors font-medium">Contact</Link>
          </nav>

          {/* Right side: Contact button + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.03 }} className="hidden md:inline-block bg-gradient-to-r from-sky-500 to-sky-600 cursor-pointer text-white px-4 py-2 rounded-full font-semibold">Contact Us</motion.button>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-slate-800">
                {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="mt-3 bg-gradient-to-r from-sky-50 to-sky-100 rounded-lg shadow-md py-2 px-3 md:hidden">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-800">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-800">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-slate-800">Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-2">
              <button className="w-full px-4 py-2 bg-sky-500 text-white rounded-full">Contact Us</button>
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
}
