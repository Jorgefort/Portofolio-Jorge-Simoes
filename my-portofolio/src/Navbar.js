import logoImg from './Logo.png';

function Navbar() {
  return (
    <header className="App-header">
      <nav>
        <a href='#'><img src={logoImg} alt="Logo" className="nav-logo" /></a>
        <ul className='nav-links'>
          <li><a href="#hero">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#favprojects">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;