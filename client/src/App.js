import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`portfolio-container ${darkMode ? "dark-mode" : ""}`}>
      <header className="navbar">
        <div className="profile-pic">
          <img src="TgPhoto.png" alt="profile" />
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/" className="nav-item"><FaHome /><span className="tooltip">Home</span></Link></li>
            <li><Link to="/about" className="nav-item"><FaUser /><span className="tooltip">About</span></Link></li>
            <li><Link to="/projects" className="nav-item"><FaProjectDiagram /><span className="tooltip">Projects</span></Link></li>
            <li><Link to="/skills" className="nav-item"><FaTools /><span className="tooltip">Skills</span></Link></li>
            <li><Link to="/contact" className="nav-item"><FaEnvelope /><span className="tooltip">Contact</span></Link></li>
            <li><Link to="/login" className="nav-item login">LOGIN</Link></li>
            <li><Link to="/register" className="nav-item login">REGISTER</Link></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} /> 
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
