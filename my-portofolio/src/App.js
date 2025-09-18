import React, { useState } from 'react';
import './App.css';
import Loading from './Loading';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import FavoriteProject from './FavoriteProject';
import Footer from './Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App app-fade-in">
      <Navbar />
      
      <main className="App-main">
        <Hero />
        <About />
        <Projects />
        <FavoriteProject />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
