import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
  <nav>
    <ul>
    <li><Link to="/" className="glow-text">HOME</Link></li>
    <li><Link to="/studioart" className="glow-text">STUDIO ART</Link></li>
    <li><Link to="/digitalart" className="glow-text">DIGITAL ART</Link></li>
    <li><Link to="/resume" className="glow-text">RESUME</Link></li>
    <li><Link to="/contact" className="glow-text">CONTACT</Link></li>
    </ul>
  </nav>
  );
}

export default Navbar;
