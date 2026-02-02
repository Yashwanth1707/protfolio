import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGlobe, FaMobile } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      type: "website",
      icon: <FaGlobe size={32} />,
      title: "BSAAirTravels.com",
      description: "A comprehensive travel website featuring responsive UI, intuitive enquiry flow, and seamless booking experience. Built to handle high traffic and provide excellent user experience.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      link: null,
      highlights: ["Responsive Design", "Enquiry Management", "Real-time Availability"]
    },
    {
      type: "website",
      icon: <FaGlobe size={32} />,
      title: "Bhairava Enterprises",
      description: "Product showcase website for a retail trading business. Features elegant design, product galleries, and contact integration for business inquiries.",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://enterprize-project.vercel.app/",
      highlights: ["Product Showcase", "Business Profile", "Contact Integration"]
    },
    {
      type: "mobile",
      icon: <FaMobile size={32} />,
      title: "Satyam Admissions Application",
      description: "Comprehensive admission registration mobile app with robust backend integration. Streamlines the admission process with real-time data synchronization.",
      technologies: ["Flutter", "Java", "SQL", "AWS"],
      link: null,
      highlights: ["Student Registration", "Document Upload", "Real-time Sync", "Cloud Storage"]
    },
    {
      type: "mobile",
      icon: <FaMobile size={32} />,
      title: "Namma CRC",
      description: "Order management application designed for the farming sector. Features inventory tracking, order processing, and real-time updates for efficient farm operations.",
      technologies: ["React Native (Expo)", "PHP", "MySQL"],
      link: null,
      highlights: ["Order Management", "Inventory Tracking", "Real-time Updates", "Multi-user Support"]
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
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A showcase of my recent work in web and mobile development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <motion.div
                    className="relative z-10 text-white"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      project.type === 'website' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {project.type === 'website' ? 'Website' : 'Mobile App'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 text-primary-600 hover:text-primary-700 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
