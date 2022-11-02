import React from 'react';
import './About.css';


class About extends React.Component {    

    render(){
        return(
            <section id="About">
                <div className="About">
                    <p className="text-block">
                    I am a computer geek, gamer, and lifelong learner who recently graduated from Oregon State University with a Bachelor of Science in Computer Science. I also have a Bachelor of Science in Forest Science from Penn State (2012) and I have worked as a professional Forester and Wildland Firefighter for the past 9 Years. I also recently transitioned into a Geospatial Analyst role where I have been able to apply my technical skills in a professional setting managing spatial data. However, that is a story for another time!
                    <br/><br/>I have a wealth of experience in software development, and I have worked on a number of projects using different technologies and programming languages. These projects range from low-level programming in Assembly Language to containerizing legacy software as a RESTful API for a company and deploying it to the cloud in order to make their product highly available and scalable. I am always excited to learn new technologies and to collaborate on new projects.
                    <br/><br/>I love to work in Python and C/C++, but I also have experience with JavaScript, C#, Rust and x86 Assembly Language. I have a wide range of interests in computer science; however, I recently have become more interested in containerization and cloud technologies after working with them in a project. In addition to this, I have always been super interested in computer vision and more recently augmented reality. I plan to work on some projects in this area soon.
                    <br/><br/>If you have similar interests and would like to collaborate on a project or just talk, please reach out. I would love to hear from you!
                    </p>     
                </div>
            </section>           
        );
    }
}

export default About;