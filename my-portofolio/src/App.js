import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

// Lazy load components to reduce initial bundle size
const Loading = lazy(() => import('./Loading'));
const IntroPage = lazy(() => import('./IntroPage'));
const CustomCursor = lazy(() => import('./CustomCursor'));

function App() {
  // Check session storage to see if we've already shown the loading screen
  const [isLoading, setIsLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem('portfolioLoaded');
    return !hasLoaded;
  });

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isContentVisible, setIsContentVisible] = useState(!isLoading);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay to ensure strict sequence: Loading Gone -> Then Content Fade In
    setTimeout(() => {
      setIsContentVisible(true);
      sessionStorage.setItem('portfolioLoaded', 'true');
    }, 100); 
  };

  const toggleTheme = () => {
    if (!isContentVisible) return;
    
    // 1. Fade OUT content (accelerated)
    setIsContentVisible(false);

    // 2. Wait for fade out (300ms), then switch theme
    setTimeout(() => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
        
        // 3. Fade IN content
        setTimeout(() => {
            setIsContentVisible(true); 
        }, 50);
    }, 300);
  };

  return (
    <div className="App">
      <div className={`main-content ${isContentVisible ? 'visible' : ''}`}>
        <Suspense fallback={<div />}>
          <CustomCursor />
          {/* Pass theme to IntroPage so it can pass it to Cube3D, and toggleTheme for controls */}
          <IntroPage startAnimation={isContentVisible} theme={theme} toggleTheme={toggleTheme} />
        </Suspense>
      </div>
      
      {isLoading && (
        <Suspense fallback={null}>
            <Loading onLoadingComplete={handleLoadingComplete} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
