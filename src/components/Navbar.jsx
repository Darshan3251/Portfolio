import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa"; // Example icons

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> }
];

function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-6 text-[18px] font-normal text-[#03045E] font-poppins">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <NavLink 
              to={item.path}
              className={({ isActive }) => 
                `flex items-center space-x-2 p-2 rounded-md ${isActive ? "text-blue-600 font-bold" : "text-[#03045E]"}`
              }
            >
              {item.icon} 
              <span>{item.name}</span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
