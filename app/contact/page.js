'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      content: 'hello@optimusai.com',
      link: 'mailto:hello@optimusai.com',
    },
    {
      icon: <FaPhone size={24} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Office',
      content: 'San Francisco, CA',
      link: '#',
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
                Get In Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let&apos;s start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
        className="lg:col-span-1"
        >
  <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-sky-200 hover:border-sky-300 transition-all duration-300"
                  >
                        <div className="text-sky-500 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-slate-800 font-semibold mb-1">{info.title}</h3>
                      <p className="text-slate-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-slate-800 font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#38bdf8' }}
                    href="#"
                    className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-500 hover:text-sky-500 border border-sky-200 hover:border-sky-300 transition-all"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, color: '#00d9ff' }}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-sky-800 to-sky-900 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 border border-sky-700/20 hover:border-sky-600/50 transition-all"
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-xl border border-cyan-500/30">
                <h3 className="text-slate-800 font-semibold mb-2">Office Hours</h3>
                <p className="text-slate-600 mb-1">Monday - Friday</p>
                <p className="text-slate-600">9:00 AM - 6:00 PM PST</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-sky-800 to-sky-900 p-8 rounded-2xl border border-sky-700/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-800">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                            className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                            className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-white mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="voice-agents">Voice Agents</option>
                        <option value="chat-agents">Chat Agents</option>
                        <option value="ai-website">AI Website Development</option>
                        <option value="workflow-automation">Workflow Automation</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                          className="w-full px-4 py-3 bg-white/5 border border-sky-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg text-white font-bold text-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
              className="aspect-video bg-white/5 rounded-2xl border border-sky-200 flex items-center justify-center"
          >
              <div className="text-center">
              <FaMapMarkerAlt size={60} className="text-sky-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Visit Our Office</h3>
              <p className="text-slate-600">San Francisco, California</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
