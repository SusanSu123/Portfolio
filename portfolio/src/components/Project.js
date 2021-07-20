import React from "react";
import project1 from "../assets/Images/Project1.png";
import warehouse from "../assets/Images/warehouse.png";


const Project = () => {
    return (
        <section className="project">
            <h1>Project</h1>
            <div className="container" id="project">

                <div className="card" id="project1">
                    <a href={"https://github.com/tommylu780/bandTSB"}><img src={project1} alt="first projectc repo"></img></a>
                    <a href={"https://tommylu780.github.io/bandTSB/"} className="title" target="_blank" rel="noreferrer">Project 1</a>
                </div>

                <div className="card" id="project2">
                    <a href={"https://github.com/GreenTeamm/WareHouse"}><img src={warehouse} alt="project warehouse repo"></img></a>
                    <a href={"https://greenteamm-warehouse.herokuapp.com/"} className="title" target="_blank" rel="noreferrer">Project 2</a>
                </div>
            </div>

        </section>


    )
}

export default Project;