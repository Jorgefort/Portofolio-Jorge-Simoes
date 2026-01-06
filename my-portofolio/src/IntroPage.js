
import React, { useEffect, useState, lazy, Suspense } from 'react';
import kanLeft from './kanleft.png';
import kanRight from './kanright.png';

// Lazy load heavy components
const CircularNav = lazy(() => import('./CircularNav'));
const Cube3D = lazy(() => import('./Cube3D'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));

function IntroPage() {
  const [welcomeText, setWelcomeText] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'projects', 'about', 'contact'
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (currentPage === 'home') {
      // Wait 1 second before starting to type
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
      }, 1000);
    } else {
      setWelcomeText('');
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [currentPage]);

  const handleNavigation = (page) => {
    if (page === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current content
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 500); // Match CSS transition duration
  };

  return (
    <section className="intro-page">
      <div className="home-page visible">
        
        {/* Kanji Background Layer - Hidden on Home (Cube) page */}
        <div className={`kanji-layer ${currentPage !== 'home' ? 'visible' : ''}`}>
          <img src={kanLeft} className="kanji-left" alt="" />
          <img src={kanRight} className="kanji-right" alt="" />
        </div>

        {/* Home Content */}
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <div className={`home-content ${currentPage === 'home' && !isTransitioning ? 'visible' : ''}`}>
            <Cube3D />
            <div className="welcome-text">{welcomeText}</div>
          </div>

          {/* Projects Content */}
          <Projects isVisible={currentPage === 'projects' && !isTransitioning} />

          {/* About Content */}
          <About isVisible={currentPage === 'about' && !isTransitioning} />
        </Suspense>

        {/* Navigation */}
        <Suspense fallback={<div />}>
          <div style={{ opacity: 1, transition: 'opacity 1s ease', pointerEvents: 'auto' }}>
            <CircularNav onNavigate={handleNavigation} activePage={currentPage} />
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default IntroPage;