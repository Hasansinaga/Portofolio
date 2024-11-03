import React, { useState } from 'react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <a href="#" className="logo">Portofolio</a>
            <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};
