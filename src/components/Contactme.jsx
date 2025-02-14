import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section className="w-full overflow-hidden min-h-screen flex flex-col items-start max-w-screen-xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-20">
      {/* Contact Heading on Top */}
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold text-[#F7F197] font-[Poppins] leading-[1.2] sm:leading-[116px] drop-shadow-glow text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h1>

      {/* Bottom Section - Side by Side Layout */}
      <div className="flex w-full max-w-6xl flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Side - Contact Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="../../src/assets/project_ss_dk/contact.png"
            alt="Contact Illustration"
            className="w-[280px] sm:w-[360px] md:w-[440px] h-[200px] sm:h-[260px] md:h-[314px] object-cover"
          />
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          className="text-[#03045E] font-[Poppins] mr-[100px] text-lg sm:text-xl md:text-2xl font-normal leading-[1.6] sm:leading-[44px] mt-8 sm:mt-12 md:mt-4 md:ml-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>Email: darshankakadiya3251@gmail.com</p>
          <p>Phone: +91 91040 44608</p>
          <p>Location: Ahmedabad Gujarat, India</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;