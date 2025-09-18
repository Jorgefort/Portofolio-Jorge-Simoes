import React from 'react';
import logoImg from './Logo.png';

function Navbar() {
  return (
    <>
      {/* Sticky Logo - always visible */}
      <div className="sticky-logo-fixed">
        <a href="#hero">
          <img src={logoImg} alt="Logo" />
        </a>
      </div>

      {/* Regular Navbar - only navigation links */}
      <header className="App-header">
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#favprojects">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;