import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: <FaEnvelope size={32} />,
      title: "Email",
      value: "Yashwanthgunam@gmail.com",
      link: "mailto:Yashwanthgunam@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaPhone size={32} />,
      title: "Phone",
      value: "+91 7259274400",
      link: "tel:+917259274400",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaWhatsapp size={32} />,
      title: "WhatsApp",
      value: "+91 7259274400",
      link: "https://wa.me/917259274400",
      color: "from-green-400 to-green-600"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to bring your ideas to life!
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="group block"
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 h-full">
                    <motion.div
                      className={`inline-block p-4 bg-gradient-to-br ${info.color} rounded-2xl text-white mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {info.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 break-all">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-12 text-center text-white shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:Yashwanthgunam@gmail.com"
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send an Email
                </motion.a>
                <motion.a
                  href="https://wa.me/917259274400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={20} />
                  WhatsApp Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
