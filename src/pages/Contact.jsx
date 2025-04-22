import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      // Replace this with EmailJS / Formspree call
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Input field animation variants
  const inputVariants = {
    focus: {
      borderColor: "rgba(94, 234, 212, 0.8)",
      boxShadow: "0 0 0 2px rgba(94, 234, 212, 0.2)",
      transition: { duration: 0.2 }
    },
    blur: {
      borderColor: "rgba(31, 41, 55, 0.5)",
      boxShadow: "none",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6 md:px-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(94, 234, 212, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
          </defs>
          <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
          {Array(10).fill().map((_, i) => (
            <circle 
              key={i} 
              cx={Math.random() * 1000} 
              cy={Math.random() * 1000} 
              r={Math.random() * 100 + 50} 
              fill="none" 
              stroke="rgba(94, 234, 212, 0.2)" 
              strokeWidth="1"
            />
          ))}
          {Array(5).fill().map((_, i) => (
            <path
              key={i}
              d={`M${Math.random() * 500},${Math.random() * 500} Q${Math.random() * 1000},${Math.random() * 1000} ${Math.random() * 1000},${Math.random() * 1000}`}
              fill="none"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className="opacity-0 transform translate-y-5"
          style={{
            animation: "fadeInUp 0.8s forwards",
            willChange: "opacity, transform"
          }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">Contact Me</h2>
          <p 
            className="text-gray-300 mb-10 max-w-2xl"
            style={{
              animation: "fadeIn 0.8s 0.2s forwards",
              opacity: 0
            }}
          >
            Have a project in mind or want to explore collaboration opportunities? Let's connect and bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div 
              className="md:col-span-2"
              style={{
                animation: "fadeInLeft 0.8s 0.3s forwards",
                opacity: 0,
                transform: "translateX(-20px)"
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 backdrop-blur-sm bg-gray-900/50 p-8 rounded-xl shadow-lg border border-gray-800"
              >
                {isSubmitted ? (
                  <div
                    className="bg-teal-500/20 border border-teal-500/50 text-teal-400 p-4 rounded-lg flex items-center"
                    style={{
                      animation: "scaleIn 0.3s forwards"
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <label 
                        className="block text-gray-300 mb-1 font-medium"
                        style={{
                          animation: "fadeIn 0.3s forwards"
                        }}
                      >
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white p-3 rounded-lg outline-none border border-gray-700 transition-all duration-300 focus:border-teal-400 focus:shadow-[0_0_0_2px_rgba(94,234,212,0.2)]"
                        style={{
                          animation: "fadeIn 0.3s 0.1s forwards",
                          opacity: 0
                        }}
                      />
                    </div>
                    <div className="relative">
                      <label 
                        className="block text-gray-300 mb-1 font-medium"
                        style={{
                          animation: "fadeIn 0.3s 0.15s forwards",
                          opacity: 0
                        }}
                      >
                        Your Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white p-3 rounded-lg outline-none border border-gray-700 transition-all duration-300 focus:border-teal-400 focus:shadow-[0_0_0_2px_rgba(94,234,212,0.2)]"
                        style={{
                          animation: "fadeIn 0.3s 0.2s forwards",
                          opacity: 0
                        }}
                      />
                    </div>
                    <div className="relative">
                      <label 
                        className="block text-gray-300 mb-1 font-medium"
                        style={{
                          animation: "fadeIn 0.3s 0.25s forwards",
                          opacity: 0
                        }}
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white p-3 rounded-lg outline-none border border-gray-700 transition-all duration-300 h-32 resize-none focus:border-teal-400 focus:shadow-[0_0_0_2px_rgba(94,234,212,0.2)]"
                        style={{
                          animation: "fadeIn 0.3s 0.3s forwards",
                          opacity: 0
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3 rounded-lg text-white transition duration-300 flex items-center justify-center w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98]'}`}
                      style={{
                        animation: "fadeIn 0.3s 0.4s forwards",
                        opacity: 0
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div
              style={{
                animation: "fadeInRight 0.8s 0.5s forwards",
                opacity: 0,
                transform: "translateX(20px)"
              }}
              className="space-y-6"
            >
              <div className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-500/50 transition duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">Connect Directly</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:mihirdhiman@gmail.com"
                    className="flex items-center text-gray-300 hover:text-teal-400 transition duration-300 hover:translate-x-1"
                  >
                    <div className="bg-teal-500/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    mihirdhiman@gmail.com
                  </a>
                  <a 
                    href="https://linkedin.com/in/mihirdhiman"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-300 hover:text-teal-400 transition duration-300 hover:translate-x-1"
                  >
                    <div className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    linkedin.com/in/mihirdhiman
                  </a>
                </div>
              </div>
              
              {/* Additional contact section */}
              <div className="backdrop-blur-sm bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-gray-400 text-sm mb-4">I typically respond within 24-48 hours</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://twitter.com/MihirDhiman"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;