import React from 'react';
import './Service.css'; // Import the CSS file for styling

const Service = () => {
  return (
    <div className="services-container" id='services'>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <i className="service-icon fa fa-bed"></i>
          <h3 className="service-title">Comfortable Accommodation</h3>
          <p className="service-description">Cozy and well-furnished rooms with a choice of single, double, or family suites. Equipped with modern amenities like air conditioning, flat-screen TVs, and comfortable bedding.</p>
        </div>
        <div className="service-card">
          <i className="service-icon fa fa-wifi"></i>
          <h3 className="service-title">Free WiFi</h3>
          <p className="service-description">High-speed internet access available throughout the guest house, allowing guests to stay connected for work or leisure without additional charges.</p>
        </div>
        <div className="service-card">
          <i className="service-icon fa fa-coffee"></i>
          <h3 className="service-title">Food </h3>
          <p className="service-description">Enjoy a hearty breakfast each morning with options ranging from fresh fruits and pastries to traditional local dishes. Choices available for both vegetarian and non-vegetarian preferences.</p>
        </div>
        <div className="service-card">
          <i className="service-icon fa fa-swimming-pool"></i>
          <h3 className="service-title">Swimming Pool</h3>
          <p className="service-description">Take a refreshing dip in our well-maintained swimming pool, complete with lounge chairs, poolside service, and towels provided for your convenience.</p>
        </div>
        <div className="service-card">
          <i className="service-icon fa fa-shuttle-van"></i>
          <h3 className="service-title">Airport Transfers</h3>
          <p className="service-description">Convenient transportation services including pickup and drop-off at the nearest airport. We offer both private and shared transfer options to suit your needs.</p>
        </div>
        <div className="service-card">
          <i className="service-icon fa fa-clock"></i>
          <h3 className="service-title">24/7 Reception</h3>
          <p className="service-description">Our friendly and knowledgeable staff are available around the clock to assist with check-ins, check-outs, and any guest requests or inquiries you may have.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
