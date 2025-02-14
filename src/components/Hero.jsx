import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mt-4 md:mt-7 mx-4 md:ml-[97px] flex flex-col md:flex-row items-center md:justify-between md:px-15 py-4">
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
        {/* Small Text - Hello, I'm Darshan */}
        <motion.h2
          className="text-[22px] md:text-[28px] font-medium text-[#03045E] font-poppins"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm Darshan,
        </motion.h2>

        {/* Large Text - Web Developer */}
        <motion.h1
          className="text-[50px] md:text-[100px] font-extrabold text-[#03045E] font-poppins leading-[60px] md:leading-[116px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Web <br /> Developer
        </motion.h1>

        {/* Location - Based in Ahmedabad */}
        <motion.p
          className="text-[22px] md:text-[28px] font-medium text-[#03045E] font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Based in Ahmedabad
        </motion.p>

        {/* Resume Button */}
          <motion.button
            className="w-[140px] md:w-[158px] h-[50px] md:h-[61px] rounded-[6px] bg-[#F5EE84] text-[#474306] text-[18px] md:text-[20px] font-normal font-poppins border border-[#474306] shadow-[4px_4px_0px_#474306] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/darshan_resume.pdf" download>Resume</a>
          </motion.button>  
      </div>

      {/* Right Side - Image & SVG Decorations */}
      <motion.div
  className="relative w-[250px] md:w-[350px] h-[300px] md:h-[400px] mt-8 md:mt-[100px] md:mr-[200px] flex-shrink-0"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Background Image */}
  <div
    className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-cover bg-no-repeat bg-center mx-auto"
    style={{ backgroundImage: "url('/Image.png')" }}
  />

  {/* First SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="56"
    viewBox="0 0 50 56"
    fill="none"
    className="absolute top-[19px] left-[34px] w-[505px] h-[35px] flex-shrink-0"
  >
    <rect x="9" y="16" width="6" height="24" rx="3" fill="#474306" />
    <rect y="31" width="6" height="24" rx="3" transform="rotate(-90 0 31)" fill="#474306" />
    <rect x="35" y="32" width="6" height="24" rx="3" fill="#474306" />
    <rect x="26" y="47" width="6" height="24" rx="3" transform="rotate(-90 26 47)" fill="#474306" />
    <rect x="35" width="6" height="24" rx="3" fill="#474306" />
    <rect x="26" y="15" width="6" height="24" rx="3" transform="rotate(-90 26 15)" fill="#474306" />
  </svg>

  {/* Second SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="104"
    height="30"
    viewBox="0 0 104 30"
    fill="none"
    className="absolute bottom-[107px] right-[250px] w-[70px] h-[29.44px] flex-shrink-0"
  >
    <rect x="12.2021" width="5" height="30" transform="rotate(24 12.2021 0)" fill="#474306" />
    <rect x="33.9719" width="5" height="30" transform="rotate(24 33.9719 0)" fill="#474306" />
    <rect x="55.7418" width="5" height="30" transform="rotate(24 55.7418 0)" fill="#474306" />
    <rect x="77.5116" width="5" height="30" transform="rotate(24 77.5116 0)" fill="#474306" />
    <rect x="99.2813" width="5" height="30" transform="rotate(24 99.2813 0)" fill="#474306" />
  </svg>
</motion.div>

    </section>
  );
};

export default Hero;