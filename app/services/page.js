'use client';

import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaComments, 
  FaCode, 
  FaCog,
  FaPhone,
  FaStore,
  FaCalendar,
  FaChartLine,
  FaEnvelope,
  FaDatabase,
  FaShoppingCart,
  FaFileInvoiceDollar
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaRobot size={50} />,
      title: 'Voice Agents',
      description: 'Intelligent AI voice assistants that handle customer interactions with natural, human-like conversations.',
      features: [
        '24/7 Customer Support',
        'Appointment Scheduling',
        'Lead Qualification',
        'Call Routing & Transfer',
        'Multi-language Support',
      ],
      useCases: [
        {
          icon: <FaPhone />,
          title: 'Customer Service',
          description: 'Handle thousands of customer calls simultaneously, reducing wait times to zero.',
        },
        {
          icon: <FaCalendar />,
          title: 'Appointment Booking',
          description: 'Automatically schedule appointments, send reminders, and manage cancellations.',
        },
      ],
    },
    {
      icon: <FaComments size={50} />,
      title: 'Chat Agents',
      description: 'Smart chatbots that engage visitors, answer questions, and drive conversions on your website.',
      features: [
        'Real-time Responses',
        'Lead Capture & Qualification',
        'Product Recommendations',
        'FAQs & Support',
        'Sentiment Analysis',
      ],
      useCases: [
        {
          icon: <FaStore />,
          title: 'E-commerce Support',
          description: 'Guide customers through product selection, answer questions, and boost sales.',
        },
        {
          icon: <FaChartLine />,
          title: 'Lead Generation',
          description: 'Engage visitors, qualify leads, and seamlessly hand off to sales teams.',
        },
      ],
    },
    {
      icon: <FaCode size={50} />,
      title: 'AI-Powered Website Development',
      description: 'Custom websites that leverage AI to adapt to user behavior and maximize engagement.',
      features: [
        'Personalized User Experiences',
        'Dynamic Content Optimization',
        'A/B Testing Automation',
        'SEO Optimization',
        'Analytics & Insights',
      ],
      useCases: [
        {
          icon: <FaShoppingCart />,
          title: 'Smart E-commerce',
          description: 'AI-driven product recommendations and personalized shopping experiences.',
        },
        {
          icon: <FaDatabase />,
          title: 'Content Platforms',
          description: 'Dynamically serve relevant content based on user preferences and behavior.',
        },
      ],
    },
    {
      icon: <FaCog size={50} />,
      title: 'Workflow Automation (n8n/Make)',
      description: 'End-to-end business process automation connecting all your tools and systems.',
      features: [
        'No-Code Integration',
        'Custom Workflows',
        'API Connections',
        'Data Synchronization',
        'Error Handling & Monitoring',
      ],
      useCases: [
        {
          icon: <FaEnvelope />,
          title: 'Email Marketing Automation',
          description: 'Automatically segment contacts, send campaigns, and track engagement.',
        },
        {
          icon: <FaFileInvoiceDollar />,
          title: 'Invoice Processing',
          description: 'Extract data from invoices, update records, and trigger payments automatically.',
        },
      ],
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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions designed to transform your business operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Service Info */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block text-cyan-400 mb-6"
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{service.description}</p>

                <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-2xl font-bold text-white mb-6">Real Business Use Cases</h3>
                <div className="space-y-6">
                  {service.useCases.map((useCase, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-cyan-400 text-2xl mt-1">{useCase.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{useCase.title}</h4>
                          <p className="text-gray-400">{useCase.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-400">
              Simple, transparent, and effective
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and identify automation opportunities' },
              { step: '02', title: 'Strategy', description: 'Custom solution design tailored to your specific requirements' },
              { step: '03', title: 'Implementation', description: 'Rapid deployment with minimal disruption to your operations' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring and improvement for maximum ROI' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our AI solutions can transform your operations
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
