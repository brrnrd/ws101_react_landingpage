import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="#">AZS</a>
        </div>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#what">What?</a></li>
          <li><a href="#importance">Importance</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
