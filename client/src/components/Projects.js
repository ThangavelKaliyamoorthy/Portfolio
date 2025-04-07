import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectsPage.css'; 

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p className="no-projects">No projects found.</p>
        ) : (
          projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <strong>Technologies:</strong> {project.tech.join(', ')}
              </p>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
