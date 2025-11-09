import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          name: 'E-Commerce Website',
          link: 'https://example.com/ecommerce',
          description: 'A full-featured e-commerce website with payment integration and product management.'
        },
        {
          name: 'Restaurant Booking App',
          link: 'https://example.com/restaurant',
          description: 'An intuitive app for booking tables and ordering food online.'
        },
        {
          name: 'Portfolio Website',
          link: 'https://example.com/portfolio',
          description: 'A personal portfolio website to showcase skills, projects, and achievements.'
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section id="portfolio" className="content portfolio">
      <h2 data-aos="fade-right">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item"
              key={index}
              data-aos="zoom-in"
            >

              <div className="portfolio-overlay">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default Portfolio;
