import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStack = [
    {
      name: "React.js",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      color: "#339933",
    },
    {
      name: "MongoDB",
      color: "#47A248",
    },
    {
      name: "Express.js",
      color: "#000000",
    },
    {
      name: "GitHub",
      color: "#181717",
    },
    {
      name: "Firebase",
      color: "#FFCA28",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
    },
  ];
  
  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left Side - About Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title with enhanced glow effect */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#F7F197] font-poppins leading-tight"
              style={{
                textShadow: "0 0 20px rgba(247, 241, 151, 0.3)",
              }}
            >
              About
            </motion.h1>

            {/* Description with improved typography */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#03045E] font-poppins leading-relaxed">
  I'm a passionate <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded">Web Developer</span> based in Ahmedabad, specializing in 
  building interactive, scalable, and high-performance web applications. I focus on crafting 
  seamless user experiences with a strong emphasis on <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded">design, functionality, and optimization</span>.
</p>

<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#03045E] font-poppins leading-relaxed">
  I've worked on a diverse range of projects, from 
  <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded mx-1">crypto analysis tools</span> to 
  <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded mx-1">e-commerce platforms</span> and 
  <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded">video-sharing apps</span>. I thrive on 
  <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded">solving complex problems</span> and continuously learning 
  <span className="font-semibold bg-[#F7F197] bg-opacity-30 px-2 rounded">new technologies</span> to stay ahead in the ever-evolving web development landscape.
</p>

            </motion.div>
          </motion.div>

          {/* Right Side - Tech Stack */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] font-poppins"
            >
              Tech Stack
            </motion.h2>

            {/* Tech Stack Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span className="text-base sm:text-lg text-[#03045E] font-poppins font-medium">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;