import React from 'react';
import profileImg from './assets/pictureme.jpg';

const About = ({ isVisible }) => {
  return (
    <div className={`about-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-content-new">
        <div className="about-text-column">
          <h1 className="about-title-new">Jorge Simoes</h1>
          
          <div className="about-subtitle-list">
            <p>STUDENT SOFTWARE DEVELOPMENT</p>
            <p>UI/UX ENTHUSIAST</p>
            <p>ASPIRING FRONT END ENGINEER</p>
          </div>
          
          <p className="about-bio-new">
            HI, IM JORGE SIMOES. I LOVE SWEETS AND BEING COMFORTABLE. I FIND MYSELF QUITE HAPPY THAT YOU HAVE DECIDED TO ENTER MY PROJECT WEBSITE, I PUT ALOT OF EFFORT INTO ITS CREATION.
          </p>
        </div>
        
        <div className="about-image-column">
          <div className="about-image-frame">
            <img src={profileImg} alt="Jorge Simoes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
