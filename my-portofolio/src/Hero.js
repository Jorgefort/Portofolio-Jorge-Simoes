import whiteblackImg from './whiteblack.jpg';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <img src={whiteblackImg} alt='blackhole' />
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Developer</p>
      
    </section>
  );
}

export default Hero;