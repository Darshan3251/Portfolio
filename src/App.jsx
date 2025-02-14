import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import './App.css'

function App() {
  return (
    <>
      <Header /> {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <ContactMe /> {/* Always visible after the route content */}
      <Footer /> {/* Footer remains at the bottom */}
    </>
  );
}

export default App;
