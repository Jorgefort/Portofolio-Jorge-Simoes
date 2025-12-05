
import React, { useEffect, useRef, useState } from 'react';
import Vara from 'vara';
import backgroundImg from './amazing.gif';
import CircularNav from './CircularNav';
import Cube3D from './Cube3D';

function IntroPage({ startAnimation }) {
  const varaRef = useRef(null);
  const varaInitialized = useRef(false);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');

  useEffect(() => {
    if (startAnimation && varaRef.current && !varaInitialized.current) {
      varaInitialized.current = true;
      
      const container = document.getElementById('vara-container');
      container.innerHTML = '';
      
      new Vara(
        '#vara-container',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
        [
          {
            text: 'Jorge Simoes',
            fontSize: 85,
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
  }, [startAnimation]);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (showHomeContent) {
      // Wait 2 seconds before starting to type
      timeoutId = setTimeout(() => {
        const text = "Welcome";
        let currentIndex = 0;
        
        intervalId = setInterval(() => {
          if (currentIndex <= text.length) {
            setWelcomeText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 200); // Typing speed
      }, 2000);
    } else {
      setWelcomeText('');
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [showHomeContent]);

  const handleLogoClick = () => {
    setHasAnimated(true);
    setFadeOut(true);
    
    // Wait for fade out (1s) then show home page
    setTimeout(() => {
      setShowHomePage(true);
      // Allow home page to render before fading in content
      setTimeout(() => {
        setShowHomeContent(true);
      }, 50);
    }, 1000);
  };

  const handleReset = () => {
    setShowHomeContent(false);
    
    // Wait for content to fade out
    setTimeout(() => {
      setShowHomePage(false);
      setFadeOut(false);
      setHasAnimated(false);
    }, 1000);
  };

  return (
    <section className="intro-page">
      <div className="intro-background">
        <img 
          src={backgroundImg} 
          alt="Background"
        />
      </div>
      <div className="intro-content">
        <div id="vara-container" ref={varaRef} className={fadeOut ? 'fade-out' : ''}></div>
        {showLogo && (
          <div 
            className={`intro-logo ${hasAnimated ? 'no-initial-animation' : ''} ${fadeOut ? 'fade-out' : ''}`}
            onClick={handleLogoClick}
          >
            JS
          </div>
        )}
      </div>
      <div className={`home-page ${showHomePage ? 'visible' : ''}`}>
        <div className={`home-content ${showHomeContent ? 'visible' : ''}`}>
          <Cube3D />
          <div className="welcome-text">{welcomeText}</div>
        </div>
        <div className={`close-button ${showHomeContent ? 'visible' : ''}`} onClick={handleReset}>
          ✕
        </div>
        <div style={{ opacity: showHomeContent ? 1 : 0, transition: 'opacity 1s ease', pointerEvents: showHomeContent ? 'auto' : 'none' }}>
          <CircularNav />
        </div>
      </div>
    </section>
  );
}

export default IntroPage;