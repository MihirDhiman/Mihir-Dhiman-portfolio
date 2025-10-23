// src/components/AnimatedBackground.jsx
const AnimatedBackground = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Scan line animation */}
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0, 255, 255, 0.1) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)",
          backgroundSize: "200% 100%",
          animation: "scanLine 4s linear infinite"
        }}></div>
        
        {/* Grid pattern */}
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-20">
          {Array(144).fill().map((_, i) => (
            <div key={i} className="border-[0.5px] border-teal-900/30"></div>
          ))}
        </div>
  
        {/* CSS Animation */}
        <style jsx>{`
          @keyframes scanLine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    );
  };
  
  export default AnimatedBackground;