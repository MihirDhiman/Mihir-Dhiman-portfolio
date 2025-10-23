import { motion } from "framer-motion";
import projects from "../data/projects";
import AnimatedBackground from "../components/AnimatedBackground";

// Enhanced Project Card Component
const ProjectCard = ({ title, description, technologies, image, demoLink, codeLink }) => {
  return (
    <motion.div 
      className="group backdrop-blur-sm bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-300 mb-4 text-sm h-20 overflow-hidden">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xs bg-gray-800 text-teal-400 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {demoLink && (
            <motion.a 
              href={demoLink} 
              target="_blank"
              className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 px-4 py-2 rounded-lg text-sm flex items-center transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Live Demo
            </motion.a>
          )}
          
          {codeLink && (
            <motion.a 
              href={codeLink} 
              target="_blank"
              className="bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm flex items-center transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-20 relative">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tech circuit background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1000">
          <path d="M0,0 L2000,0 L2000,1000 L0,1000 Z" fill="none" stroke="rgba(0, 255, 255, 0.5)" strokeWidth="1"></path>
          {Array(20).fill().map((_, i) => (
            <path key={i} d={`M${Math.random() * 2000},${Math.random() * 1000} Q${Math.random() * 2000},${Math.random() * 1000} ${Math.random() * 2000},${Math.random() * 1000}`} fill="none" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="1"></path>
          ))}
          {Array(30).fill().map((_, i) => (
            <circle key={i} cx={Math.random() * 2000} cy={Math.random() * 1000} r={Math.random() * 5 + 1} fill="rgba(0, 255, 255, 0.3)"></circle>
          ))}
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-2">Projects</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A collection of my latest work, showcasing a blend of technical skill and creative problem-solving.</p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Projects;