import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center md:ml-[97px] px-4 md:px-15 py-4 space-y-4 md:space-y-0">
      {/* Left Side - Name */}
      <motion.h1 
  className="text-4xl font-bold font-poppins inline-flex items-center gap-0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <motion.span 
    className="bg-gradient-to-r from-[#0575E6] via-[#021B79] to-[#0575E6] text-transparent bg-clip-text"
    initial={{ y: 20 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.2, type: "spring" }}
    whileHover={{ scale: 1.1 }}
  >
    D
  </motion.span>
  <motion.span 
    className="text-[#03045E] relative"
    initial={{ letterSpacing: "0.2em", opacity: 0 }}
    animate={{ letterSpacing: "normal", opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    arshan
    <motion.div 
      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#0575E6] to-[#021B79]"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1, height: "0.5rem" }}
      transition={{ duration: 0.3 }}
    />
  </motion.span>
</motion.h1>
      {/* Center - Navigation Links */}
      <div className="w-full md:w-auto">
        <Navbar />
      </div>

      {/* Right Side - Social Media Links */}
      <div className="flex space-x-4">
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/darshan-kakadiya-ab6a10234/" },
          { icon: <SiVercel />, link: "https://vercel.com/darshan3251s-projects" },
          { icon: <FaGithub />, link: "https://github.com/Darshan3251?tab=repositories" },
        ].map(({ icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5, opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-[26px] h-[16px] text-[#03045E]"
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;