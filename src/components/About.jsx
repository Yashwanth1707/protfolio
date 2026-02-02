import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaLaptopCode, FaMobile } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const highlights = [
    {
      icon: <FaCode size={32} />,
      title: "Web Development",
      description: "Crafting responsive and performant web applications"
    },
    {
      icon: <FaMobile size={32} />,
      title: "Mobile Apps",
      description: "Building cross-platform mobile solutions"
    },
    {
      icon: <FaLaptopCode size={32} />,
      title: "Full Stack",
      description: "End-to-end development expertise"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Passionate Full Stack Developer
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    With over 3 years of hands-on experience in web and mobile development, 
                    I specialize in creating robust, scalable, and user-friendly applications. 
                    My journey in software development has equipped me with a diverse skill set 
                    spanning modern frontend frameworks, backend technologies, and mobile platforms.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    I&apos;m passionate about turning ideas into reality through clean code and 
                    innovative solutions. Whether it&apos;s building a responsive website, 
                    developing a mobile application, or architecting complex systems, 
                    I bring dedication and expertise to every project.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
                    whileHover={{ scale: 1.03, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 text-primary-600">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
