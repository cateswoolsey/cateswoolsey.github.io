import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <nav>
    <ul>
    <li><Link to="/" className="main-font">Home</Link></li>
    <li><Link to="/digitalart" className="main-font">Generative Art</Link></li>
    <li><Link to="/studioart" className="main-font">Studio Art</Link></li>
    <li><Link to="/contact" className="main-font">Contact</Link></li>
    </ul>
  </nav>
  );
}

export default Navbar;
