import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './QuickContct.css';

const QuickContact = () => {
  return (
    <div className="quick-contact">
      <a
        href="https://wa.me/919007062180" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default QuickContact;
