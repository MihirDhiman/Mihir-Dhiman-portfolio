import { motion } from "framer-motion";
import timeline from "../data/timeline";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 md:px-20 relative">
      {/* Tech pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array(200).fill().map((_, i) => (
            <div key={i} className="absolute" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 5}px`,
              height: `1px`,
              backgroundColor: 'teal',
              opacity: Math.random() * 0.5 + 0.5,
              transform: `rotate(${Math.random() * 360}deg)`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">About Me</h2>
          
          <motion.div 
            className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-xl mb-10 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Mihir Dhiman, a passionate MERN stack developer and blockchain enthusiast based in Indore.
              With hands-on experience in building decentralized apps, managing esports events, and leading tech initiatives, 
              I love turning innovative ideas into real-world solutions.
              Whether it's creating a secure voting system or hosting cricket tournaments — I bring creativity, calmness, and leadership everywhere.
            </p>
          </motion.div>

          <motion.h3 
            className="text-2xl font-semibold text-white mb-4 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-teal-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
            Journey Timeline
          </motion.h3>
          
          <div className="border-l-2 border-teal-500/50 pl-6 space-y-8 ml-4">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-teal-400">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-gray-800 hover:border-teal-500/50 transition duration-300">
                  <p className="text-teal-400 text-sm font-medium mb-1">{item.year}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;