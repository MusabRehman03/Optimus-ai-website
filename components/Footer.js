'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-sky-200 mt-20 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent mb-4">
              Optimus AI
            </h3>
            <p className="text-gray-800 mb-4">
              Transforming businesses with intelligent automation solutions.
              Empowering the future with AI-driven technology.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, color: '#38bdf8' }}
                href="#"
                className="text-gray-500 hover:text-sky-500 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#00d9ff' }}
                href="#"
                className="text-gray-500 hover:text-sky-500 transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#00d9ff' }}
                href="#"
                className="text-gray-500 hover:text-sky-500 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#00d9ff' }}
                href="#"
                className="text-gray-500 hover:text-sky-500 transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
            {/* Copyright: placed below the links and aligned with page padding */}
            <div className="pt-4 text-gray-800">
              <p>&copy; {currentYear} Optimus AI. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sky-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sky-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-sky-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-sky-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-800">Voice Agents</li>
              <li className="text-gray-800">Chat Agents</li>
              <li className="text-gray-800">AI Website Development</li>
              <li className="text-gray-800">Workflow Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
