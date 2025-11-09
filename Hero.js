import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" data-aos="fade-up">
      <h1>Welcome to Tech Solutions</h1>
      <p>"Building Smarter Solutions for a Digital World"</p>
      <a href="#contact" className="cta-btn">Get Started</a>
    </section>
  );
};

export default Hero;
