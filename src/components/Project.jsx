import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ imgSrc, description, projectLink, aboutProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Card with Image and Hover Effect */}
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open(projectLink, "_blank")}
      >
        {/* Image */}
        <img
          src={imgSrc}
          alt="Project"
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Description Overlay */}
        <div className="absolute inset-0 bg-[#F7F197] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-95 transition-opacity duration-300">
          <p className="text-center text-base sm:text-lg font-poppins text-[#03045E] px-2 sm:px-4">
            {description}
          </p>
        </div>
      </motion.div>

      {/* About Project Section */}
      <div className="mt-3 sm:mt-4">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left text-sm sm:text-base text-[#03045E] font-poppins hover:text-opacity-80"
        >
          {isExpanded ? "Hide Details ↑" : "Show Details ↓"}
        </motion.button>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm sm:text-base text-[#03045E] font-poppins mt-2">
                {aboutProject}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      imgSrc: "project_ss_dk/easybuy.png",
      description: "EasyBuy",
      projectLink: "https://github.com/Darshan3251/easybuy1",
      aboutProject:
        "EasyBuy is a full-stack e-commerce web app built with the MERN stack, featuring user authentication, product management, cart functionality, and an admin panel for CRUD operations. It integrates Cloudinary for handling multiple product images, ensuring a seamless shopping experience.",
    },
    {
      imgSrc: " project_ss_dk/bherusplit.jpeg",
      description: "BheruSplit",
      projectLink: "https://bheru-split-darshan3251s-projects.vercel.app/",
      aboutProject:
        "Bheru Split is a workout suggestion app that tailors personalized workout plans based on the user's fitness level (Beginner, Intermediate, Advanced) and goal (Strength, Mobility, Cardiovascular). It dynamically generates routines with recommended exercises, sets, reps, and rest periods, providing a structured approach to fitness progress.",
    },
    {
      imgSrc: " project_ss_dk/coinintel.png",
      description: "CoinIntel",
      projectLink: "https://coinintel-jet.vercel.app/",
      aboutProject:
        "CoinIntel is a crypto analysis app that fetches real-time cryptocurrency data from an API, providing insights into market trends, prices, and exchange details. Built with React and SCSS, it delivers a clean and responsive UI for tracking cryptocurrencies across multiple exchanges.",
    },
    {
      imgSrc: " project_ss_dk/splitwise.png",
      description: "Expense Splitter",
      projectLink: "https://expense-splitter-rosy.vercel.app/",
      aboutProject:
        "Expense Splitter is a bill-splitting app similar to Splitwise, allowing users to add friends, record expenses, and track payments. It calculates and optimizes transactions to show who owes whom, minimizing the number of payments needed for settlement.",
    },
    {
      imgSrc: " project_ss_dk/paste.png",
      description: "Paste-App",
      projectLink: "https://paste-app-beta-ruby.vercel.app/",
      aboutProject:
        "Paste App is a simple and efficient text-sharing application that allows users to store and share text snippets easily. It provides a clean and minimal UI for quickly pasting and accessing text, making it useful for note-taking and temporary storage.",
    },
    {
      imgSrc: " project_ss_dk/food cal.png",
      description: "Calorie-Detector",
      projectLink: "https://calorie-detector.vercel.app/",
      aboutProject:
        "Calorie Detector is an AI-powered food analysis app that uses image recognition to detect food items and estimate their calorie content. Built with machine learning models, it helps users track their dietary intake by analyzing food images in real-time.",
    },
    {
      imgSrc: " project_ss_dk/budget.png",
      description: "Budget-Tracker",
      projectLink: "https://budget-tracker-six-plum.vercel.app/",
      aboutProject:
        "Budget Tracker is a personal finance management app that helps users track income, expenses, and savings efficiently. With intuitive analytics and budgeting tools, it provides insights into spending habits, enabling better financial planning.",
    },
    {
      imgSrc: " project_ss_dk/responsive.png",
      description: "Responsive web",
      projectLink: "https://reactfirst-theta.vercel.app/",
      aboutProject:"Marketing Agency Website is a responsive single-page application built with React and Tailwind CSS. It features essential sections like Home, About, Services, Brands, and Contact, providing a sleek and modern interface for showcasing agency offerings.",
    },
    {
      imgSrc: " project_ss_dk/wordatlas.png",
      description: "world Atlas",
      projectLink: "https://world-atlas-phi.vercel.app/",
      aboutProject:
        "WorldAtlas is an interactive world exploration app that provides detailed country information, including population, currency, language, and geography. Built with React, it offers a seamless UI for users to explore global data efficiently.",
    },
    {
      imgSrc: " project_ss_dk/todo.png",
      description: "Todo App",
      projectLink: "https://to-do-app-ruddy-ten.vercel.app/",
      aboutProject:
        "To-Do App is a task management application built with React, featuring local storage integration to save tasks persistently. It allows users to add, edit, and delete tasks, ensuring an efficient and seamless productivity experience",
    },  
    {
      imgSrc: " project_ss_dk/video-tube.png",
      description: "Video Tube",
      projectLink: "https://react-videotube-ebon.vercel.app/",
      aboutProject:
        "VideoTube is a video-sharing platform built with React, featuring light and dark mode for a customizable user experience. It allows users to upload and play videos, providing a seamless and responsive UI for content consumption.",
    }, 
    {
      imgSrc: " project_ss_dk/text-to-voice.png",
      description: "Text to Voice",
      projectLink: "https://text-to-voice-smoky-nine.vercel.app/",
      aboutProject:
        "Text-to-Voice is a text-to-speech application built with React, allowing users to convert text into natural-sounding speech. It provides a simple and intuitive interface for enhancing accessibility and productivity.",
    }
  ];

  return (
    <section className="mb-12 sm:mb-[200px] mx-4 sm:mx-[90px] flex flex-col items-start px-4 sm:px-15 py-4">
      {/* Title - Projects */}
      <motion.h1
        className="text-5xl sm:text-[100px] font-extrabold text-[#F7F197] font-poppins leading-tight sm:leading-[116px]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg sm:text-[24px] font-normal text-[#03045E] font-poppins leading-relaxed sm:leading-[44px] mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Here are some of the projects I've worked on, ranging from web applications to tools for analysis.
        Each project showcases my skills in building scalable and interactive solutions using modern technologies.
      </motion.p>

      {/* Project Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-[#03045E] font-poppins gap-4 sm:gap-8 mt-6 sm:mt-8 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            description={project.description}
            projectLink={project.projectLink}
            aboutProject={project.aboutProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;