import React, { useState, useEffect } from 'react';
import logoImg from './Logo.png';

function Loading({ onLoadingComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 4 seconds, show the logo popup
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);

    // After 6 seconds (logo shows for 2 seconds), hide logo
    const hideLogoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 6000);

    // After 9 seconds total, start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 9000);

    // After 10 seconds, complete loading
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 10000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(hideLogoTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Black Hole Animation */}
      <div className="black-hole">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="ring ring-4"></div>
        <div className="black-hole-center"></div>
      </div>

      {/* Logo Popup */}
      <div className={`logo-popup ${showLogo ? 'show' : ''}`}>
        <img src={logoImg} alt="Logo" />
      </div>
    </div>
  );
}

export default Loading;