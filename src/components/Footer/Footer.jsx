import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1>Kingsukh Guest House</h1>
          <p>
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <a 
            href="https://wa.me/919007062180" 
            className="book-now-btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            BOOK NOW
          </a>
        </div>
        <div className="footer-section quick-links">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="#browse-destinations">Browse Destinations</a></li>
            <li><a href="#special-offers">Special Offers & Packages</a></li>
            <li><a href="#room-types">Room Types & Amenities</a></li>
            <li><a href="#customer-reviews">Customer Reviews & Ratings</a></li>
            <li><a href="#travel-tips">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer-section our-services">
          <h2>OUR SERVICES</h2>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h2>CONTACT US</h2>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
          <p>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
