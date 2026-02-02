import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaChartLine } from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: <FaLaptopCode size={48} />,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications, I create solutions tailored to your needs.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <FaShoppingCart size={48} />,
      title: "Product Showcase Websites",
      description: "Stunning product showcase websites that highlight your products or services. Perfect for retail businesses, portfolios, and e-commerce solutions.",
      features: ["Eye-catching Design", "Product Gallery", "Contact Forms", "CMS Integration"]
    },
    {
      icon: <FaMobileAlt size={48} />,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps for iOS and Android. Built with Flutter and React Native for optimal performance and user experience.",
      features: ["Cross-platform", "Native Performance", "Intuitive UI/UX", "API Integration"]
    },
    {
      icon: <FaChartLine size={48} />,
      title: "Admin Panels & Dashboards",
      description: "Powerful admin panels and dashboards for managing your business operations. Data visualization, user management, and analytics at your fingertips.",
      features: ["Data Visualization", "User Management", "Real-time Updates", "Secure Access"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-4 bg-gradient-primary rounded-2xl text-white mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
