import React, { useState, useEffect, useRef } from 'react';
import bgImage from './background.png.png';

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
  },
  {
    id: '11',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '12',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '13',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '14',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '15',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '17',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  },
  {
    id: '18',
    name: 'Ultrakill',
    tech: 'React.js',
    year: '2025',
    link: '#'
  }
];

const Projects = ({ isVisible }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Hide indicator when user scrolls
      const scrolledToBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 50;
      setShowScrollIndicator(!scrolledToBottom && container.scrollTop < 50);
    };

    // Check if content is scrollable
    const isScrollable = container.scrollHeight > container.clientHeight;
    setShowScrollIndicator(isScrollable);

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

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

      {/* Scroll Indicator - Fun Curved Arrow */}
      <div className={`scroll-indicator ${!showScrollIndicator ? 'hidden' : ''}`}>
        <div className="curved-arrow">
          <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 30 Q 30 25, 15 30" />
            <polygon className="arrow-head" points="15,25 10,30 15,35" />
          </svg>
        </div>
        <span className="scroll-text">Scroll me!</span>
      </div>
    </div>
  );
};

export default Projects;
