import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section" id='contact'>
      <h2 className="Contact_title">Contact me</h2>
      
      <div className="contact-content">
        <div className="contact-info-slider">
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Beside Barshal Water Tank,<br />Manpur, Barhanti,<br />West Bengal 723156</p>
            <p><i className="fas fa-envelope"></i> Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
            <p><i className="fas fa-phone-alt"></i> Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required />
              </div>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Mobile Number" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
