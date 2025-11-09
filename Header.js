import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './logo.png';

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? '' : 'hidden'}`}>
      {/* Left Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Center Neon Text */}
      <div className="logo-center-text">Tech Solutions</div>

      {/* Navigation */}
      <nav className="nav">
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul></nav> 
    </header>
  );
};

export default Header;
