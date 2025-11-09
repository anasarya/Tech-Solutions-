import React from 'react';
import Slider from 'react-slick';
import './Services.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  { title: 'Web Design', desc: 'Eye-catching designs that look great on all devices.' },
  { title: 'Animations', desc: 'Smooth animations to improve UX and engagement.' },
  { title: 'Development', desc: 'Optimized, fast, and responsive websites.' },
  { title: 'SEO', desc: 'Improve search ranking and traffic.' },
  { title: 'E-Commerce', desc: 'Custom online store solutions.' },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="services" className="content services" data-aos="fade-up">
      <h2>Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
