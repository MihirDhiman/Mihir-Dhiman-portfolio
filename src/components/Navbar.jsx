"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "RESUME", href: "#resume" },
    { name: "CONTACT", href: "#contact" },
  ]

  const handleNavigationClick = (index) => {
    setActiveItem(index)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Digital noise overlay - adds texture */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      <motion.nav
        className={`fixed w-full z-50 ${
          scrolled ? "py-2" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Cyber neon border */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-500"
          initial={{ opacity: 0.3, scaleX: 0 }}
          animate={{ opacity: scrolled ? 1 : 0.3, scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Glassmorphic background with hexagon pattern */}
        <div className={`absolute inset-0 -z-10 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-black/60" : "bg-transparent"
        }`}>
          {/* Hexagon pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSI0OCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii41IiBkPSJtNDIgMTcuOTItMTEuNDUtNi42MkwxOS4xIDYuNyA3LjY0IDEzLjMgNy42NCAyNi41M2wtLjAxIDEzLjIzIDExLjQ2IDYuNjIgMTEuNDYgNi42MiAxMS40NS02LjYyIDExLjQ2LTYuNjItLjAxLTEzLjIzTDU0LjQ3IDE2LjNsLTEuMDEtLjU5LTExLjQ2LTYuNjItMTEuNDYgNi42Mkg5LjY3TTc0LjMzIDE3LjkybC0xMS40NS02LjYyLTExLjQ2LTYuNjItMTEuNDYgNi42Mi0xMS40NSA2LjYyLS4wMSAxMy4yMy0uMDEgMTMuMjMgMTEuNDYgNi42MiAxMS40NiA2LjYyIDExLjQ1LTYuNjIgMTEuNDYtNi42Mi0uMDEtMTMuMjMuMDEtMTMuMjMtMTEuNDYtNi42Miw0MS4xMy0yMy44NSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo Container */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#home" className="relative z-10 font-mono text-2xl font-bold tracking-wider">
                <span className="text-cyan-400">MIHIR</span>
                <span className="text-white px-1">|</span>
                <span className="text-magenta-400">DHIMAN</span>
              </a>
              
              {/* Glitch effect */}
              <motion.div
                className="absolute top-0 left-0 text-2xl font-bold text-red-500 font-mono tracking-wider opacity-0"
                animate={{
                  opacity: [0, 0.8, 0],
                  x: [0, -2, 0],
                  transition: { duration: 0.2, repeat: Infinity, repeatDelay: 5 }
                }}
              >
                <span className="text-cyan-400">MIHIR</span>
                <span className="text-white px-1">|</span>
                <span className="text-magenta-400">DHIMAN</span>
              </motion.div>
              
              {/* Cyberpunk bracket decorations */}
              <motion.span 
                className="absolute -left-4 top-0 text-2xl text-cyan-500 opacity-70"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                [
              </motion.span>
              <motion.span 
                className="absolute -right-4 top-0 text-2xl text-magenta-500 opacity-70"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                ]
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className={`
                      relative px-4 py-2 font-mono text-sm tracking-wider
                      ${activeItem === index ? 'text-cyan-400' : 'text-gray-300'}
                    `}
                    onClick={() => handleNavigationClick(index)}
                    whileHover={{ color: '#22d3ee' }}
                  >
                    {item.name}
                    
                    {/* Active indicator */}
                    {activeItem === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover state elements */}
                    <motion.div
                      className="absolute -bottom-1 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      className="absolute -top-1 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-cyan-500/50 rounded-sm" />
                <div className="absolute inset-0 border border-cyan-500/30 rounded-sm scale-110 rotate-3" />
                
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotateR: 45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <span className="text-cyan-400 text-xl">×</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex flex-col items-center justify-center gap-1"
                    >
                      <span className="h-0.5 w-4 bg-cyan-400" />
                      <span className="h-0.5 w-4 bg-cyan-400" />
                      <span className="h-0.5 w-4 bg-cyan-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border-t border-cyan-500/20 mt-2">
                <div className="py-2 bg-black/80 backdrop-blur-lg">
                  <div className="space-y-1 px-3">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        className={`block py-2 px-4 text-sm font-mono border-l-2 transition-colors ${
                          activeItem === index 
                            ? "border-cyan-400 text-cyan-400 bg-cyan-900/20" 
                            : "border-transparent text-gray-300"
                        }`}
                        onClick={() => handleNavigationClick(index)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ 
                          backgroundColor: "rgba(8, 145, 178, 0.1)",
                          color: "#22d3ee"
                        }}
                      >
                        <div className="flex items-center">
                          <span className="text-cyan-500 opacity-70 mr-2">{index + 1}.</span>
                          {item.name}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Decorative scanline effect */}
                  <motion.div 
                    className="absolute left-0 right-0 h-px bg-cyan-400/20"
                    animate={{ 
                      top: ["0%", "100%"],
                      opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar