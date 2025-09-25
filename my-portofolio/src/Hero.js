import heromImg from './herom.jpg';

function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-nav-links">
        <ul className='nav-links'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#favprojects">Contact</a></li>
        </ul>
      </div>
      
      <img src={heromImg} alt='blackhole' />
    </section>
  );
}

export default Hero;