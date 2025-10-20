import React, { useState, useEffect } from 'react';

function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Progress animation from 0% to 100%
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Faster increment between 2-4 for quicker loading
        return prev + Math.floor(Math.random() * 3) + 2;
      });
    }, 40); // Update every 40ms (faster)

    // Start fade out when progress reaches 100%
    const checkProgress = setInterval(() => {
      if (progress >= 100) {
        setTimeout(() => setFadeOut(true), 1000); // Wait 1s after 100%
        setTimeout(() => onLoadingComplete(), 1500); // Complete after fade
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