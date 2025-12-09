import React, { useState } from 'react';
import logo from './logoo.png.png';

const CircularNav = ({ onNavigate }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div 
      className="circular-nav-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="circular-text-wrapper"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        <svg viewBox="0 0 200 200" className="rotating-svg">
          <defs>
            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" transform="rotate(-90 100 100)" />
          </defs>
          
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>
            <text fill="#B4AC97" fontSize="30" fontWeight="400" letterSpacing="2px" fontFamily="'Zen Old Mincho', serif" textAnchor="middle">
              <textPath href="#circlePath" startOffset="17%">
                projects |
              </textPath>
            </text>
          </a>

          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            <text fill="#B4AC97" fontSize="30" fontWeight="400" letterSpacing="2px" fontFamily="'Zen Old Mincho', serif" textAnchor="middle">
              <textPath href="#circlePath" startOffset="50%">
                about |
              </textPath>
            </text>
          </a>

          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            <text fill="#B4AC97" fontSize="30" fontWeight="400" letterSpacing="2px" fontFamily="'Zen Old Mincho', serif" textAnchor="middle">
              <textPath href="#circlePath" startOffset="83%">
                contact |
              </textPath>
            </text>
          </a>
        </svg>
      </div>
      <a href="#home" className="center-logo-link" onClick={(e) => handleNavClick(e, 'home')}>
        <img src={logo} alt="JS Logo" className="center-logo" />
      </a>
    </div>
  );
};

export default CircularNav;
