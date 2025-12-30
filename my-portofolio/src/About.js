import React from 'react';

const About = ({ isVisible }) => {
  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-content">
        <h1 className="about-name">Jorge Simoes</h1>
        <h2 className="about-subtitle">student software development / grafisch lyceum rotterdam</h2>
        
        <div className="about-details">
          <p>student software development</p>
          <p>born in 2007</p>
          <p className="about-bio">
            I have worked mostly with css html js due to my current school but on my own find mself focusing on new languages like: tailwind css reactjs and python.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
