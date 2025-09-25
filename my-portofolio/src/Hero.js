import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heromImg from './herom.jpg';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
const heroImageRef = useRef(null);
const heroSectionRef = useRef(null);

useEffect (() => {
  const heroImage = heroImageRef.current;
  const heroSection = heroSectionRef.current;

  if (heroImage && heroSection) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top", // Changed from "+=100%" to "bottom top"
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Helps with responsive issues
        onComplete: () => {
          // Force unpinning and allow scroll to continue
          ScrollTrigger.refresh();
        },
        onLeave: () => {
          // Ensure scroll continues when leaving the section
          ScrollTrigger.refresh();
        }
      }
    });
    
    tl.to(heroImage, {
      borderRadius: "60px",
      scale: 0.8,
      ease: "power2.out",
      duration: 1
    });
  }
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero-section" ref={heroSectionRef}>
      <div className="hero-nav-links">
        <ul className='nav-links'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#favprojects">Contact</a></li>
        </ul>
      </div>
      
      <img ref={heroImageRef} src={heromImg} alt='blackhole' />
      
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="scroll-circle">
          <div className="scroll-arrow">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;