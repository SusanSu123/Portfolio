import React from "react";
import './App.css';


import Navigation from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">

        <h1>Hello, I'm Susan Su</h1>
        <p>I'm a full-stack developer</p>
        <a href="/about" id="btn">View my work</a>
      </header>
      <Navigation />
      <About />
      <Skill />
      <Project />
      <footer id="contact">
        <nav>
          <ul>
            <li> Email Me </li>
            <li>LinkedIn</li>
            <li>Git Hub </li>
            <li><a href="./Web Developer Resume.pdf" target="_blank"> Resume </a></li>
            {/* <li><a href="mailto:suchangau@hotmail.com" target="_blank"> Email Me </a></li>
            <li><a href="https://www.linkedin.com/in/susan-su-420313210/" target="_blank"> LinkedIn</a></li>
            <li><a href="https://github.com/SusanSu123" target="_blank"> Git Hub </a></li>
            <li><a href="./Web Developer Resume.pdf" target="_blank"> Resume </a></li> */}
          </ul>
        </nav>
      </footer>

    </div>
  );
}

export default App;
