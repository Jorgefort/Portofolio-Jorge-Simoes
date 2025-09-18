import logoImg from './Logo.png';

function Navbar() {
  return (
    <div className="sticky-logo-fixed">
      <a href="#hero">
        <img src={logoImg} alt="Logo" />
      </a>
    </div>
  );
}

export default Navbar;