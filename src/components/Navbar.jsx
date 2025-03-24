import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">Medlytics</Link>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>

          {/* Services Dropdown */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <ul className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`} aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/sleep-disorder" onClick={toggleMenu}>
                  Sleep Disorder
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/anxiety-prediction" onClick={toggleMenu}>
                  Anxiety Prediction
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/depression-prediction" onClick={toggleMenu}>
                  Depression Prediction
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/nutritional-prediction" onClick={toggleMenu}>
                  Nutritional Prediction
                </Link>
              </li>
            </ul>
          </li>

          <li><Link to="/doctors" onClick={toggleMenu}>Doctors</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}><button className="btn-outline">Contact Us</button></Link></li>
        </ul>

        {/* Login & Sign Up Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="btn login">Login</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;