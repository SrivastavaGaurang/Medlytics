import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">Medlytics</Link>

        {/* Navbar Links */}
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

                  {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/sleep-disorder" >
                    Sleep Disorder
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/anxiety-prediction" >
                    Aniexty prediction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/depression-prediction" >
                    Depression prediction
                  </Link>
                  <Link className="dropdown-item" to="/nutritional-prediction" >
                    Nutritional prediction
                  </Link>
                </li>
              </ul>
            </li>
          

          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact"><button className="btn-outline">Contact Us</button></Link></li>
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
