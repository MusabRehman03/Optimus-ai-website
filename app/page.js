'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaRobot, 
  FaComments, 
  FaCode, 
  FaCog,
  FaChartLine,
  FaLightbulb,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      icon: <FaRobot size={40} />,
      title: 'Voice Agents',
      description: 'Intelligent voice AI that handles customer calls, schedules appointments, and qualifies leads 24/7.',
    },
    {
      icon: <FaComments size={40} />,
      title: 'Chat Agents',
      description: 'Smart chatbots that engage customers, answer questions, and drive conversions automatically.',
    },
    {
      icon: <FaCode size={40} />,
      title: 'AI Website Development',
      description: 'Custom, AI-powered websites that adapt to user behavior and maximize engagement.',
    },
    {
      icon: <FaCog size={40} />,
      title: 'Workflow Automation',
      description: 'Seamless n8n and Make.com integrations that automate your business processes end-to-end.',
    },
  ];

  const features = [
    {
      icon: <FaChartLine size={32} />,
      title: 'Boost Efficiency',
      description: 'Automate repetitive tasks and increase productivity by up to 400%',
    },
    {
      icon: <FaLightbulb size={32} />,
      title: 'Smart Solutions',
      description: 'AI-powered insights that help you make data-driven decisions',
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Enterprise Security',
      description: 'Bank-level security ensuring your data is always protected',
    },
    {
      icon: <FaRocket size={32} />,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-sky-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-sky-600/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-slate-800">With AI Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
            >
              Harness the power of AI to automate workflows, enhance customer experiences, 
              and scale your business effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-sky-300 rounded-full text-sky-500 font-bold text-lg hover:bg-sky-500/10 transition-all duration-300"
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
            <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-sky-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-sky-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

  {/* Services Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="p-8 rounded-2xl bg-white border border-sky-100 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-sky-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
  <section
    className="relative py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-scroll md:bg-fixed bg-cover bg-center min-h-[80vh] overflow-hidden"
    style={{ backgroundImage: `url('/bg-image.png')` }}
  >
    {/* translucent sky overlay to keep text readable (image slightly less visible) */}
    <div className="absolute inset-0 bg-sky-900/75 pointer-events-none" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400 ">
              Why Choose Optimus AI?
            </h2>
            <p className="text-xl text-slate-100 max-w-2xl mx-auto">
              Experience the future of business automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-white/6 via-white/4 to-white/3 backdrop-blur-sm rounded-2xl border border-white/20 shadow-md hover:scale-105 hover:shadow-2xl hover:shadow-sky-700/20 transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block text-cyan-400 mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* CTA Section */}
  <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-sky-100/50 to-sky-200/30 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join hundreds of companies already using AI to automate and scale
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
