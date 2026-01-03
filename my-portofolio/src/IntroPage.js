
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import Vara from 'vara';
import bgImage from './background.webp';
import kanLeft from './kanleft.png';
import kanRight from './kanright.png';

// Lazy load heavy components
const CircularNav = lazy(() => import('./CircularNav'));
const Cube3D = lazy(() => import('./Cube3D'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));

function IntroPage({ startAnimation }) {
  const varaRef = useRef(null);
  const varaInitialized = useRef(false);
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'projects', 'about', 'contact'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (startAnimation && varaRef.current && !varaInitialized.current) {
      varaInitialized.current = true;
      
      const container = document.getElementById('vara-container');
      container.innerHTML = '';
      
      // Trigger fade in
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
      
      const isMobile = window.innerWidth <= 768;
      
      new Vara(
        '#vara-container',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
        [
          {
            text: 'Jorge Simoes',
            fontSize: isMobile ? 50 : 85,
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
    const container = document.querySelector('.particles-container');
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('light-particle');
      
      // Random properties
      const size = Math.random() * 4 + 2; // 2px to 6px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 15 + 10; // 10s to 25s
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Create initial batch
    for(let i = 0; i < 20; i++) {
        setTimeout(createParticle, Math.random() * 3000);
    }

    const interval = setInterval(createParticle, 800); // Create a new particle every 800ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (showHomeContent && currentPage === 'home') {
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
  }, [showHomeContent, currentPage]);

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
      setCurrentPage('home'); // Reset to home
    }, 1000);
  };

  const handleNavigation = (page) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current content
    // We can use a simple timeout to switch the page state after fade out
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 500); // Match CSS transition duration
  };

  return (
    <section className="intro-page">
      <div 
        className="intro-background" 
        style={{ 
          opacity: contentVisible ? 1 : 0, 
          transition: 'opacity 1.5s ease' 
        }}
      >
        <picture>
          <source srcSet={bgImage} type="image/webp" />
          <img 
            src={bgImage} 
            alt="Background"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>
        <div className="particles-container"></div>
      </div>
      <div 
        className="intro-content"
        style={{ 
          opacity: contentVisible ? 1 : 0, 
          transition: 'opacity 1.5s ease' 
        }}
      >
        <div id="vara-container" ref={varaRef} className={fadeOut ? 'fade-out' : ''}></div>
        {showLogo && (
          <div className={`intro-logo-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <div 
              className={`intro-logo ${hasAnimated ? 'no-initial-animation' : ''}`}
              onClick={handleLogoClick}
            >
              JS
            </div>
            
            <div className="click-indicator left">
              <span className="click-text">Click!</span>
              <div className="curved-arrow-intro">
                <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10 30 Q 30 25, 45 30" />
                  <polygon className="arrow-head" points="45,25 50,30 45,35" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`home-page ${showHomePage ? 'visible' : ''}`}>
        
        {/* Kanji Background Layer - Hidden on Home (Cube) page */}
        <div className={`kanji-layer ${showHomePage && currentPage !== 'home' ? 'visible' : ''}`}>
          <img src={kanLeft} className="kanji-left" alt="" />
          <img src={kanRight} className="kanji-right" alt="" />
        </div>

        {/* Home Content */}
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <div className={`home-content ${showHomeContent && currentPage === 'home' && !isTransitioning ? 'visible' : ''}`}>
            <Cube3D />
            <div className="welcome-text">{welcomeText}</div>
          </div>

          {/* Projects Content */}
          <Projects isVisible={showHomeContent && currentPage === 'projects' && !isTransitioning} />

          {/* About Content */}
          <About isVisible={showHomeContent && currentPage === 'about' && !isTransitioning} />
        </Suspense>

        {/* Close Button (Only on Home) */}
        <div 
          className={`close-button ${showHomeContent && currentPage === 'home' ? 'visible' : ''}`} 
          onClick={handleReset}
        >
          ✕
        </div>

        {/* Navigation */}
        <Suspense fallback={<div />}>
          <div style={{ opacity: showHomeContent ? 1 : 0, transition: 'opacity 1s ease', pointerEvents: showHomeContent ? 'auto' : 'none' }}>
            <CircularNav onNavigate={handleNavigation} activePage={currentPage} />
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default IntroPage;