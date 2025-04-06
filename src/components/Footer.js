import React from 'react';
import './Footer.css'; // We'll create a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-icons">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
