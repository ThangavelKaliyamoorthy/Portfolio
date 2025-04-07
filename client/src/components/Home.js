import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"
const Home = () => {
  return (
    <>
    <header className="top-header">
          <h1>THANGAVEL K</h1>
    </header>
    <div className = "hm1">
      <p>"Hello! I'm Thangavel K 👋"</p>
      <p>"Aspiring Full-Stack Developer | IT Student | Problem Solver"</p>
      <h3>Introduction</h3>
      <ul>
        <li>"I am passionate about building web applications and solving real-world problems through technology."</li><br/>
        <li>"Currently exploring Full-Stack Development, Advanced Data Structures, Computer Organisation and Architecture and Operating Systems."</li>
      </ul>
      <h3>🔗 Quick Links</h3>
      <ul>
        <li><Link to = "/About" >Learn More About Me.</Link></li><br/>
        <li><Link to = "/Projects" >View My Projects.</Link></li><br/>
        <li><Link to = "/Contact" >Contact Me.</Link></li><br/>
      </ul>   
    </div>
    </>
  );
};

export default Home;