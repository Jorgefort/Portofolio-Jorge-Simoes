
import React, { useEffect, useState, lazy, Suspense } from 'react';
import kanLeft from './kanleft.png';
import kanRight from './kanright.png';
import moonb from './moonb.png';
import whitesunb from './whitesunb.png';
import blackglobe from './blackglobe.png';
import whiteglobeb from './whiteglobeb.png';

// Lazy load heavy components
const CircularNav = lazy(() => import('./CircularNav'));
const Cube3D = lazy(() => import('./Cube3D'));
const Projects = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));

function IntroPage({ theme, toggleTheme }) { // Accept theme & toggleTheme prop
  const [welcomeText, setWelcomeText] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'projects', 'about', 'contact'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

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

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  const handleLangSelect = (lang) => {
    window.location.reload(); 
  };

  return (
    <section className="intro-page">
      <div className="home-page visible">
        
        {/* Kanji Background Layer - Hidden on Home (Cube) page */}
        <div className={`kanji-layer ${currentPage !== 'home' ? 'visible' : ''}`}>
          <img src={kanLeft} className="kanji-left" alt="" />
          <img src={kanRight} className="kanji-right" alt="" />
        </div>

        {/* Dark Overlay - Visible when not on home page */}
        <div className={`dark-overlay ${currentPage !== 'home' ? 'visible' : ''}`}></div>

        {/* TOP CONTROLS - ONLY VISIBLE ON HOME */}
        <div className={`top-controls ${currentPage === 'home' && !isTransitioning ? 'visible' : ''}`}>
            <div className="lang-wrapper" style={{ position: 'relative' }}>
                <button className="lang-toggle" onClick={toggleLangDropdown} aria-label="Select Language">
                        <img 
                            src={theme === 'dark' ? whiteglobeb : blackglobe} 
                            alt="Language Selector" 
                            className="control-icon"
                        />
                </button>
                {langDropdownOpen && (
                    <div className="lang-dropdown">
                        <a href="?lang=en" onClick={() => handleLangSelect('en')}>English</a>
                        <a href="?lang=pt" onClick={() => handleLangSelect('pt')}>Português</a>
                        <a href="?lang=es" onClick={() => handleLangSelect('es')}>Español</a>
                    </div>
                )}
            </div>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    <img 
                        src={theme === 'dark' ? whitesunb : moonb} 
                        alt="Theme Toggle" 
                        className="control-icon"
                    />
            </button>
        </div>

        {/* Home Content */}
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <div className={`home-content ${currentPage === 'home' && !isTransitioning ? 'visible' : ''}`}>
            <Cube3D theme={theme} /> 
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
            <CircularNav onNavigate={handleNavigation} activePage={currentPage} theme={theme} />
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default IntroPage;