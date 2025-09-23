import React, { useState, useEffect } from 'react';
import logoImg from './Logo.png';

function Loading({ onLoadingComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2500);

    const hideLogoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 5000);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 8000);

    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 7000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(hideLogoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="black-hole">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="ring ring-4"></div>
        <div className="black-hole-center"></div>
      </div>

      <div className={`logo-popup ${showLogo ? 'show' : ''}`}>
        <img src={logoImg} alt="Logo" />
      </div>
    </div>
  );
}

export default Loading;