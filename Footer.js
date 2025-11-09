import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer data-aos="fade-up">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>Tech Solutions Software House</h3>
          <p>Building Smarter Solutions for a Digital World.</p>
        </div>

        {/* Members */}
        <div className="footer-section members">
          <h4>Team Members</h4>
          <ul>
            <li>Muhammad Anas Ali</li>
            <li>Jane Smith</li>
            <li>Ali Khan</li>
            <li>Fatima Noor</li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-section policies">
          <h4>Policies</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            📞 +92 300 7359924 <br />
            ✉️ info@techsolutions.com <br />
            📍 123 Tech Street, Lahore, Pakistan
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TechSolutions. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg></a>
          <a href="#"><svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M12 2.163c-5.403 0-9.837 4.434-9.837 9.837 0 4.354 2.827 8.047 6.764 9.413.495.091.678-.215.678-.477 0-.236-.009-.868-.013-1.703-2.754.599-3.338-1.328-3.338-1.328-.451-1.15-1.101-1.457-1.101-1.457-.9-.615.068-.602.068-.602 1.002.07 1.531 1.03 1.531 1.03.885 1.515 2.322 1.078 2.89.825.09-.641.347-1.078.631-1.326-2.197-.25-4.506-1.098-4.506-4.891 0-1.081.386-1.963 1.021-2.656-.102-.25-.443-1.258.097-2.624 0 0 .832-.266 2.73 1.019a9.473 9.473 0 012.487-.335c.844.004 1.694.114 2.487.335 1.897-1.285 2.728-1.019 2.728-1.019.541 1.366.2 2.374.098 2.624.636.693 1.02 1.575 1.02 2.656 0 3.803-2.312 4.637-4.515 4.883.356.306.674.913.674 1.841 0 1.33-.012 2.404-.012 2.732 0 .264.18.573.682.475C19.012 20.043 22 16.35 22 12c0-5.403-4.434-9.837-9.837-9.837z"/></svg></a>
          <a href="#"><svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M20.947 8.305c-.072-.15-.302-.25-.5-.25h-2.14l.296-2.69a.484.484 0 00-.483-.547h-2.743v3.09H11.47v2.69h3.407v6.75h2.79v-6.75h2.33c.196 0 .425-.101.5-.25l1.047-1.5a.468.468 0 000-.542l-1.197-1.348z"/></svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
