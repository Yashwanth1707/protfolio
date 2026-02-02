import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPhp, 
  FaDatabase, FaAws, FaGitAlt, FaGithub 
} from 'react-icons/fa'
import { SiFlutter, SiMysql, SiSpringboot, SiExpo } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
        { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
        { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
        { name: "React Native", icon: <FaReact />, color: "text-cyan-500" },
        { name: "Expo", icon: <SiExpo />, color: "text-gray-800" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava />, color: "text-red-600" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
        { name: "PHP", icon: <FaPhp />, color: "text-indigo-600" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
        { name: "SQL", icon: <FaDatabase />, color: "text-gray-700" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws />, color: "text-orange-500" },
        { name: "CI/CD", icon: <FaGitAlt />, color: "text-red-500" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`text-4xl mb-2 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
