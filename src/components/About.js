import React from 'react';
import 'boxicons/css/boxicons.min.css'; 

export const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-photo">
                <img src="/images/abouts.png" alt="Hasan Sinaga" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hello! I’m Hasan Sinaga, a passionate programmer with a keen interest in web development and systems analysis.
                        I love creating innovative solutions that enhance user experience and solve real-world problems.
                    </p>
                    <p>
                        I have a background in information technology and have honed my skills in various programming languages and frameworks.
                        In my spare time, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with others.
                    </p>
                    <p>
                        My goal is to become a skilled Software Developer and contribute to meaningful projects that make a difference in people's lives.
                    </p>
                </div>
            </div>
        </section>
    );
};
