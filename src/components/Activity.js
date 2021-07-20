import React from "react";
// import image1 from "../assets/Images/image-1.jpg";
// import image2 from "../assets/Images/image-2.jpeg";
// import image3 from "../assets/Images/image-3.jpeg";
// import image4 from "../assets/Images/image-4.jpg";
// import image5 from "../assets/Images/image-5.jpeg";
// import image6 from "../assets/Images/image-6.jpg";
// import codequiz from "../assets/Images/Code quiz.png";
// import background from "../assets/Images/background.jpg";
import notetaker from "../assets/Images/notetaker.png";
import Weather from "../assets/Images/Weather.png";
import techblog from "../assets/Images/techblog.png";
import scheduler from "../assets/Images/Scheduler.png";




const Activity = () => {
    return (
        <section className="homework">
            <h1>Student work</h1>

            <div className="container" id="portfolio">

                <div className="card" id="dashboard">
                    <a href={"https://github.com/SusanSu123/Homework-week-6"}><img src={Weather} alt="weather dashboard repo"></img></a>
                    <a href={"https://susansu123.github.io/Homework-week-6/"} className="title" target="_blank" rel="noreferrer"> Weather Dashboard </a>
                </div>


                <div className="card" id="day-scheduler">
                    <a href={"https://github.com/SusanSu123/Homework-week-5"}><img src={scheduler} alt="day scheduler repo"></img></a>
                    <a href={"https://susansu123.github.io/Homework-week-5/"} className="title" target="_blank" rel="noreferrer">Day Schedule</a>
                </div>

                <div className="card" id="note-taker">
                    <a href={"https://github.com/SusanSu123/Homework-week-11"}><img src={notetaker} alt="note taker repo"></img></a>
                    <a href={"https://nore-taker123.herokuapp.com/"} classname="title" target="_blank" rel="noreferrer">Note Taker</a>
                </div>

                <div className="card" id="tech-blog">
                    <a href={"https://github.com/SusanSu123/Homework-week-14"}><img src={techblog} alt="tech blog repo"></img></a>
                    <a href={"https://susan-tech-blog.herokuapp.com/"} className="title" target="_blank" rel="noreferrer">Tech Blog</a>
                </div>

            </div>

        </section >
    )
};

export default Activity;



