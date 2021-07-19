import React from "react";

const Project = () => {
    return (
        <section className="homework">
            <h1>Student work</h1>
            <div className="container" id="portfolio">
                <div className="card" id="dashboard">
                    <a href={"https://github.com/SusanSu123/Homework-week-6"} ></a>
                    <img src={require("../Images/Weather.png")} />
                </div>
            </div>
        </section>
    )
};

export default Project;

