'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaUsers size={40} />, number: '500+', label: 'Happy Clients' },
    { icon: <FaCheckCircle size={40} />, number: '1000+', label: 'Projects Completed' },
    { icon: <FaAward size={40} />, number: '50+', label: 'Industry Awards' },
    { icon: <FaGlobeAmericas size={40} />, number: '25+', label: 'Countries Served' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of AI technology, constantly exploring new ways to solve complex business challenges.',
    },
    {
      title: 'Excellence',
      description: 'Quality is non-negotiable. We deliver premium solutions that exceed expectations every time.',
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We work alongside you as a trusted partner in your growth journey.',
    },
    {
      title: 'Integrity',
      description: 'Transparency, honesty, and ethical practices are the foundation of everything we do.',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
                About Optimus AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of business automation through cutting-edge AI technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
              <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                Founded in 2020, Optimus AI emerged from a simple vision: to make enterprise-grade 
                AI automation accessible to businesses of all sizes. What started as a small team 
                of passionate AI enthusiasts has grown into a global leader in intelligent automation.
              </p>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                We&apos;ve helped hundreds of companies transform their operations, reduce costs, and 
                scale their businesses through the power of AI. From startups to Fortune 500 
                companies, our solutions have proven to deliver real, measurable results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we continue to push the boundaries of what&apos;s possible with AI, developing 
                innovative solutions that not only automate tasks but truly understand and adapt 
                to your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl border border-cyan-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 mx-auto mb-6 relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute inset-4 bg-sky-900 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🤖</span>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800">AI-Powered Innovation</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-slate-600">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-sky-800 to-sky-900 p-8 rounded-2xl border border-sky-700/20 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sky-50/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-800">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-sky-800 to-sky-900 p-8 rounded-2xl border border-sky-700/20 hover:border-sky-600/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-200 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower businesses worldwide with intelligent automation solutions that not only 
              save time and resources but fundamentally transform how they operate and serve their 
              customers. We believe that AI should be accessible, practical, and transformative for 
              every business, regardless of size or industry.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
