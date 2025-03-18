import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50', padding: '1rem 2rem' }}>
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ecf0f1' }}>
          Medlytics
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: '1.5rem' }}>
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}>
                Home
              </Link>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}>
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#2c3e50' }}>
                <li>
                  <Link className="dropdown-item" to="/lab-test" style={{ color: '#ecf0f1' }}>
                    Sleep Disorder
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health-check" style={{ color: '#ecf0f1' }}>
                    Aniexty prediction
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/heart-health" style={{ color: '#ecf0f1' }}>
                    Depression prediction
                  </Link>
                  <Link className="dropdown-item" to="/heart-health" style={{ color: '#ecf0f1' }}>
                    Nutritional prediction
                  </Link>
                </li>
              </ul>
            </li>

            {/* Doctors */}
            <li className="nav-item">
              <Link className="nav-link" to="/doctors" style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}>
                Doctors
              </Link>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link className="nav-link" to="/blog" style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}>
                Blog
              </Link>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={{ color: '#ecf0f1', fontSize: '1.1rem', fontWeight: '500' }}>
                <button type="button" className="btn btn-outline-info">Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;