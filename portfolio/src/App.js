import React from "react";
import './App.css';


import Navigation from "./components/Navbar";
import About from "./components/About";
import Activity from "./components/Activity";
import Project from "./components/Project";
import pdf from "../src/assets/Web Developer Resume.pdf";


function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">

        <h1>Hello, I'm Susan Su</h1>
        <p>I'm a full-stack developer</p>
        <a href="#about" id="btn">View my work</a>
      </header>
      <Navigation />
      <About />
      <Activity />
      <Project />
      <footer id="contact">
        <nav>
          <ul>
            <li><a href={"mailto:suchangau@hotmail.com"} target="_blank" rel="noreferrer"> Email Me </a></li>
            <li><a href={"https://www.linkedin.com/in/susan-su-420313210/"} target="_blank" rel="noreferrer"> LinkedIn</a></li>
            <li><a href={"https://github.com/SusanSu123"} target="_blank" rel="noreferrer"> Git Hub </a></li>
            <li><a href={pdf} target="_blank" rel="noreferrer"> Resume </a></li>
          </ul>
        </nav>
      </footer>

    </div>
  );
}

export default App;
