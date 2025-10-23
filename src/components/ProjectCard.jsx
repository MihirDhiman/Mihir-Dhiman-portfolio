import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies, github }) => {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 shadow-xl border border-gray-800 group"
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)",
        borderColor: "rgba(45, 212, 191, 0.5)",
      }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-500/10 blur-3xl"
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-teal-500/50 to-transparent"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />

      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
        <motion.span
          className="inline-block mr-2 w-2 h-2 rounded-full bg-teal-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {title}
      </h3>

      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            className="text-sm px-3 py-1 bg-gray-800 text-teal-400 rounded-full border border-teal-400/20"
            whileHover={{
              backgroundColor: "rgba(45, 212, 191, 0.2)",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        View on GitHub
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      </motion.a>

      {/* Futuristic hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
