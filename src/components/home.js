import React from 'react';
import 'boxicons/css/boxicons.min.css'; 

export const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-container">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Hasan Sinaga</h1>
                    <h3></h3>
                    <p>
                    And I'm a <span>Programmer</span>
                    </p>
                    <div className="social-media">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                        <a href="#"><i className="bx bxl-github"></i></a>
                    </div>
                    <a href="#" className="btn">Download CV</a>
                </div>
                
                <div className="hasan-photo">
                    <img src="/images/hasans.png" alt="Hasan Sinaga" />
                </div>
            </div>
        </section>
    );
};
