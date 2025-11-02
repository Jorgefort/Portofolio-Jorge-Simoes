import React, { useState, useEffect } from 'react';

function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 2, 100);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setFadeOut(true), 1000);
          setTimeout(() => onLoadingComplete(), 2000);
        }
        
        return newProgress;
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

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