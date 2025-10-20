
import React, { useState, useEffect } from 'react';
import backgroundImg from './yess.jpg';

function IntroPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isContracting, setIsContracting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImg;
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleOpen = () => {
    setIsExpanding(true);
    // Wait for circle expansion animation to complete before showing content
    setTimeout(() => {
      setIsOpen(true);
      setIsExpanding(false);
    }, 600); // Match the animation duration (0.6s)
  };

  const handleClose = () => {
    setIsClosing(true);
    // Fade out content first
    setTimeout(() => {
      setIsContracting(true);
      setIsOpen(false);
    }, 200); // Wait for content to fade out
    
    // Complete close after circle contracts
    setTimeout(() => {
      setIsContracting(false);
      setIsClosing(false);
    }, 800); // 200ms fade + 600ms contract
  };

  return (
    <section className="intro-page">
      <div className="intro-background">
        <img 
          src={backgroundImg} 
          alt="Beach landscape"
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      </div>
      <div className="intro-content">
        <div className="intro-text">
          <h1>Jorge Simoes</h1>
        </div>
        
        {/* Expanding Circle Overlay */}
        <div className={`circle-overlay ${isExpanding ? 'expanding' : ''} ${isContracting ? 'contracting' : ''}`}></div>
        
        {/* Content Panel */}
        <div className={`content-panel ${isOpen ? 'open' : ''} ${isClosing ? 'closing' : ''}`}>
          <div className="panel-header">
            <button className="close-button" onClick={handleClose}>
              <div className="close-icon">×</div>
            </button>
          </div>
          <div className="panel-content">
            {/* Your content goes here */}
          </div>
        </div>

        {/* Hamburger menu centered at bottom */}
        <div 
          className={`hamburger-menu-container ${isOpen ? 'hidden' : ''}`}
          onClick={handleOpen}
        >
          <div className="hamburger-menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroPage;