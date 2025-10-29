import React, { useState, useEffect } from 'react';

function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 2;
      });
    }, 80);

    const checkProgress = setInterval(() => {
      if (progress >= 100) {
        setTimeout(() => setFadeOut(true), 1000);
        setTimeout(() => onLoadingComplete(), 1500);
        clearInterval(checkProgress);
      }
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkProgress);
    };
  }, [progress, onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-progress">
        <div className="progress-line">
          <div className="progress-dots">
            {Array.from({ length: 80 }, (_, i) => (
              <span 
                key={i} 
                className={`dot ${i < (progress * 0.8) ? 'filled' : ''}`}
              >
                •
              </span>
            ))}
          </div>
          <div className="progress-percentage">{progress}%</div>
        </div>
      </div>
    </div>
  );
}

export default Loading;