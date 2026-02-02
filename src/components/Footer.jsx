import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: "#", label: "GitHub" },
    { icon: <FaLinkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter size={24} />, href: "#", label: "Twitter" },
    { icon: <FaEnvelope size={24} />, href: "mailto:Yashwanthgunam@gmail.com", label: "Email" }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              className="text-2xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Yashwanth G
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:Yashwanthgunam@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  Yashwanthgunam@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917259274400"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91 7259274400
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Yashwanth G. All rights reserved.
            </p>
            <motion.p
              className="text-gray-400 text-sm flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Made with <motion.span
                className="text-red-500 mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="inline" />
              </motion.span> by Yashwanth
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
