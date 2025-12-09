import React, { useState, useEffect } from 'react';
import catImg from './catpaint.png';

function Loading({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    const interval = 40;
    let timer;

    // Delay start to match animation delay (0.3s)
    const startDelay = setTimeout(() => {
      timer = setInterval(() => {
        setProgress(prev => {
          const next = prev + 1; // Linear progress
          
          if (next >= 100) {
            clearInterval(timer);
            setProgress(100);
            setTimeout(() => setStartTransition(true), 500);
            setTimeout(() => onLoadingComplete(), 1500);
            return 100;
          }
          return next;
        });
      }, interval);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      if (timer) clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className={`loading-curtain ${startTransition ? 'active' : ''}`} />
      <div className={`loading-content ${startTransition ? 'fade-content' : ''}`}>
        <div className="cat-spinner-container">
          <img src={catImg} alt="Loading Cat" className="cat-spinner" />
        </div>
        <div className="loading-percentage">
          {Math.floor(progress).toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
}

export default Loading;