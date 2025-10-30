
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

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
    setHasAnimated(true);
    setFadeIn(false);
    setFadeOut(true);
    setTimeout(() => {
      setMoveToCorner(true);
    }, 1000);
    setTimeout(() => {
      setShowHomePage(true);
    }, 2200);
  };

  const handleReset = () => {
    setFadeOutHome(true);
    setTimeout(() => {
      setMoveToCenter(true);
      setMoveToCorner(false);
    }, 1000);
    setTimeout(() => {
      setShowHomePage(false);
      setFadeOutHome(false);
    }, 1200);
    setTimeout(() => {
      setMoveToCenter(false);
      setFadeOut(false);
      setFadeIn(true);
    }, 2200);
  };

  return (
    <section className="intro-page">
      <div className={`intro-background ${fadeOut ? 'fade-out' : ''} ${fadeIn ? 'fade-in' : ''}`}>
        <img 
          src={backgroundImg} 
          alt="Background"
        />
      </div>
      <div className="intro-content">
        <div id="vara-container" ref={varaRef} className={`${fadeOut ? 'fade-out' : ''} ${fadeIn ? 'fade-in' : ''}`}></div>
        {showLogo && (
          <div 
            className={`intro-logo ${moveToCorner ? 'move-to-corner' : ''} ${moveToCenter ? 'move-to-center' : ''} ${hasAnimated ? 'no-initial-animation' : ''}`}
            onClick={!moveToCorner ? handleLogoClick : undefined}
          >
            JS
          </div>
        )}
      </div>
      {showHomePage && (
        <div className={`home-page ${fadeOutHome ? 'fade-out-home' : ''}`}>
          <div className="menu-js-logo">JS</div>
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