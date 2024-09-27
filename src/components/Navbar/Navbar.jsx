import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';



const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
          />
          <h1 className="logo-text">BRNRD</h1>
        </div>
        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#more" className="nav-link">More</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
