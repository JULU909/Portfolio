import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, onPageChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a
            href="#"
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => onPageChange('contact')}
          >
            Contact me
          </a>
          
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => onPageChange('about')}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => onPageChange('projects')}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
        <a
            href="#"
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onPageChange('home')}
          >
            Home
          </a>
          
        </li>
        {/* Add more navbar items as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
