import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import FavoriteProject from './FavoriteProject';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
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
