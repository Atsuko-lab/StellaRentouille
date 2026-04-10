import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">🌌 StellaRentouille</Link>
      <nav className="site-nav">
        <Link to="/">Accueil</Link>
        <Link to="/marche">Marché</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
