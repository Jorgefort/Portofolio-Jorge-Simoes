import React, { useState, useEffect } from 'react';

function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // const duration = 3500; // Slower loading (3.5s)
    const interval = 50;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const diff = 100 - prev;
        const add = Math.max(0.2, diff * 0.05); // Slower non-linear progress
        const next = prev + add;
        
        if (next >= 99.5) {
          clearInterval(timer);
          setProgress(100);
          setTimeout(() => setFadeOut(true), 800);
          setTimeout(() => onLoadingComplete(), 1800);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-text-wrapper">
          PORTFOLIO
          <div 
            className="loading-text-filled" 
            style={{ width: `${progress}%` }}
          >
            PORTFOLIO
          </div>
        </div>
        <div className="loading-percentage">
          {Math.floor(progress).toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}

export default Loading;