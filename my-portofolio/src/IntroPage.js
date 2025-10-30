
import React, { useEffect, useRef, useState } from 'react';
import Vara from 'vara';
import backgroundImg from './background.png.png';

function IntroPage() {
  const varaRef = useRef(null);
  const varaInitialized = useRef(false);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [moveToCorner, setMoveToCorner] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const [fadeOutHome, setFadeOutHome] = useState(false);
  const [moveToCenter, setMoveToCenter] = useState(false);

  useEffect(() => {
    if (varaRef.current && !varaInitialized.current) {
      varaInitialized.current = true;
      
      const container = document.getElementById('vara-container');
      container.innerHTML = '';
      
      new Vara(
        '#vara-container',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
        [
          {
            text: 'Jorge Simoes',
            fontSize: 95,
            strokeWidth: 1.2,
            color: '#B4AC97',
            duration: 3000,
            textAlign: 'center',
          }
        ]
      );
      
      setTimeout(() => {
        setShowLogo(true);
      }, 3500);
    }
  }, []);

  const handleLogoClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setMoveToCorner(true);
    }, 1000);
    setTimeout(() => {
      setShowHomePage(true);
    }, 2200);
  };

  const handleReset = () => {
    setShowHomePage(false);
    setMoveToCenter(true);
    setMoveToCorner(false);
    setTimeout(() => {
      setFadeOut(false);
    }, 1000);
    setTimeout(() => {
      setMoveToCenter(false);
    }, 1200);
  };

  return (
    <section className="intro-page">
      <div className={`intro-background ${fadeOut ? 'fade-out' : ''}`}>
        <img 
          src={backgroundImg} 
          alt="Background"
        />
      </div>
      <div className="intro-content">
        <div id="vara-container" ref={varaRef} className={fadeOut ? 'fade-out' : ''}></div>
        {showLogo && (
          <div 
            className={`intro-logo ${moveToCorner ? 'move-to-corner' : ''} ${moveToCenter ? 'move-to-center' : ''}`}
            onClick={!moveToCorner ? handleLogoClick : undefined}
          >
            JS
          </div>
        )}
      </div>
      {showHomePage && (
        <div className="home-page">
          <div className="home-content">
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page content</p>
          </div>
          <div className="close-button" onClick={handleReset}>
            ✕
          </div>
        </div>
      )}
    </section>
  );
}

export default IntroPage;