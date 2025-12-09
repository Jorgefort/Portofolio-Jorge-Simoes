import React, { useState } from 'react';
import bgImage from './background.png.png';

const projectsData = [
  {
    id: '01',
    name: 'Aurea monsieur',
    tech: 'ReactJS',
    year: '2025',
    link: '#'
  },
  {
    id: '02',
    name: 'Quizze',
    tech: 'TailwindCss',
    year: '2025',
    link: '#'
  },
  {
    id: '03',
    name: 'Mission to mars',
    tech: 'Java',
    year: '2025',
    link: '#'
  },
  {
    id: '04',
    name: 'Artmus',
    tech: 'Ruby',
    year: '2024',
    link: '#'
  },
  {
    id: '05',
    name: 'Muscplay',
    tech: 'Python',
    year: '2024',
    link: '#'
  }
];

const Projects = ({ isVisible }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className={`projects-page ${isVisible ? 'visible' : ''}`}>
      {/* Background Image Layer */}
      <div className="project-bg-layer">
        <div 
          className={`project-bg-image ${hoveredProject ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <div className="projects-container">
        <div className="projects-list">
          {projectsData.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className="project-row"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-col id">#{project.id}</div>
              <div className="project-col name">{project.name}</div>
              <div className="project-col tech">{project.tech}</div>
              <div className="project-col year">{project.year}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
