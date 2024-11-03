import React from 'react';
import 'boxicons/css/boxicons.min.css';

const projectsData = [
  {
    title: 'Website Desa Pangombusan',
    description: 'This is a brief description for Project 1, which showcases a bit more about the project.',
    image: "images/1.png",
    sourceLink: 'https://github.com/username/project1'
  },
  {
    title: 'Sistem Manajemen Hotel Purnama Balige',
    description: 'Description for Project 2 is slightly longer to see how it looks with more text content.',
    image: 'images/2.png',
    sourceLink: 'https://github.com/username/project2'
  },
];

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="source-button">
              Source
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
