import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Don't initialize custom cursor on touch devices or small screens
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768) {
      return;
    }

    const updatePosition = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth animation loop
    const animate = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.current.x - prevPosition.x;
        const dy = targetPosition.current.y - prevPosition.y;
        
        // Lerp (linear interpolation) for smooth following - higher value = less delay
        return {
          x: prevPosition.x + dx * 0.35,
          y: prevPosition.y + dy * 0.35
        };
      });
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    animate();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="custom-cursor"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }} 
    />
  );
};

export default CustomCursor;
