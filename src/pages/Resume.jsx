import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";

const Resume = () => {
  return (
    <section id="resume" className="bg-black text-white py-20 px-6 md:px-20 relative">
      <AnimatedBackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
          {/* Tech pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          {Array(20).fill().map((_, i) => (
            <div key={i} className="absolute" style={{
              top: 0,
              right: `${i * 5}%`,
              width: '1px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.7), transparent)',
              opacity: 0.3
            }}></div>
          ))}
          {Array(20).fill().map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${i * 5}%`,
              left: 0,
              width: '100%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(0, 255, 255, 0.7), transparent)',
              opacity: 0.3
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-10">Resume</h2>
          
          {/* Download Resume Button */}
          <motion.div 
            className="mb-12 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
          </motion.div>
          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-xl border border-gray-800 mb-10"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-teal-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </span>
              Experience
            </h3>
            
            <motion.div 
              className="space-y-6 text-gray-300 ml-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-teal-500"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold text-white">MERN Stack Developer </h4>
                <p className="text-sm italic text-teal-400 mb-4">Nov 2024 – Feb 2025</p>
                {/* <ul className="space-y-2 mt-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Developed hotel & hostel systems using MERN stack</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Collaborated with teams to deliver production-ready solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Streamlined room booking, inventory & student data workflows</span>
                  </li>
                </ul> */}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-teal-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </span>
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Solidity", "Hardhat", "Truffle", "Metamask"].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/70 px-4 py-3 rounded-lg border border-gray-700 hover:border-teal-500 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 20px -10px rgba(0, 255, 255, 0.3)"
                  }}
                >
                  <motion.span 
                    className="text-gray-300 font-medium"
                    whileHover={{ color: "#5eead4" }}
                  >
                    {skill}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-xl border border-gray-800 mt-10"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-teal-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
              </span>
              Education
            </h3>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-blue-500 ml-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white">Bachelor of Technology in Information Technology</h4>
              <p className="text-sm italic text-blue-400 mb-2">2020 - 2024</p>
              <p className="text-gray-400">Swami Vivekanad College of Engineering</p>
            </motion.div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-gray-400">For a complete overview of my certifications and accomplishments, please download my resume.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 text-teal-400 border border-teal-400/50 px-6 py-2 rounded-full hover:bg-teal-400/10 transition duration-300"
              onClick={() => document.querySelector('a[download]').click()}
            >
              View Full Credentials
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Resume;