import React from "react";
import photo from "../assets/Images/photo.jpg";


const About = () => {
    return (

        <section className="about-me">
            <div>
                <img src={photo} id="photo" alt="self" width="128px" height="auto"></img>
                <h3>About Me</h3>
                <p>Hello! I'm Susan and I'm a Web developer located in Melbourne.
                    I am interesting to learn new things and do excercise in leisure time.
                    If you would like to hire me please click "Email Me" link as below to get in touch with me.
                </p>
                <p>I am expert in Web development and good hands on experience with JavaScript, jQuery, Node.js, MySQL, Express and React.
                    I have designed and developed dynamic websites for business. Furthermore below are successful projects recently completed.
                </p>
            </div>


            <div className="skill">
                <h3> Skills</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Node.js</li>
                    <li>AWS</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Git</li>
                    <li>Jest</li>
                    <li>React</li>
                </ul>

            </div>

        </section>
    )
}

export default About;

