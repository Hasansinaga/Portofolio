import React from 'react';
import './App.css';
import { NavBar } from './components/Navbar'; // Impor komponen NavBar
import { Home } from './components/home'; // Impor komponen NavBar
import { AboutMe } from './components/About';
import { Projects } from './components/Project';
import { Experience } from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar /> {NavBar}
      <Home/> {Home}
      <AboutMe/>{AboutMe}
      <Experience/>{Experience}
      <Projects/>{Projects}
      <Footer/>{Footer}
    </div>
  );
}

export default App;
