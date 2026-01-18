import React, { useState, useRef } from 'react';
import bgImage from './assets/background.png.png';
import clickSound from './assets/computer-mouse-click-351398.mp3';

const projectsData = [
  {
    id: '01',
    name: 'Ultrakill',
    tech: 'ReactJS',
    year: '2025',
    link: '#'
  },
  {
    id: '02',
    name: 'Aurea monsieur',
    tech: 'ReactJS',
    year: '2025',
    link: '#'
  },
  {
    id: '03',
    name: 'Quizze',
    tech: 'TailwindCss',
    year: '2025',
    link: '#'
  },
  {
    id: '04',
    name: 'Mission to mars',
    tech: 'Java',
    year: '2025',
    link: '#'
  },
  {
    id: '05',
    name: 'Artmus',
    tech: 'Ruby',
    year: '2025',
    link: '#'
  },
  {
    id: '06',
    name: 'Muscplay',
    tech: 'Python',
    year: '2025',
    link: '#'
  },
  {
    id: '07',
    name: 'mudslike',
    tech: 'Python',
    year: '2025',
    link: '#'
  },
  {
    id: '08',
    name: 'Gav2',
    tech: 'Ruby',
    year: '2025',
    link: '#'
  },
  {
    id: '09',
    name: 'youcopy',
    tech: 'node',
    year: '2025',
    link: '#'
  },
  {
    id: '10',
    name: 'supabase',
    tech: 'SQL',
    year: '2025',
    link: '#'
  }
  
];

const Archive = ({ isVisible }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  // Derive unique categories from projectsData for the filter list
  const categories = ['ALL', ...new Set(projectsData.map(p => p.tech))];

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play().catch(error => console.error("Audio playback failed:", error));
  };

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

      <div className="archive-sidebar">
        <h1 className="archive-title">
          ARCHIVE <span className="archive-count">({projectsData.length})</span>
        </h1>
        <ul className="archive-filters">
           {categories.slice(0, 6).map((cat, index) => (
             <li key={index} className="archive-filter-item" onClick={playClickSound}>{cat}</li>
           ))}
           {/* Limit categories display or allow scroll if needed, matching reference style */}
        </ul>
      </div>

      <div className="projects-content-wrapper">
        <div className="projects-container" ref={containerRef}>
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
    </div>
  );
};

export default Archive;
