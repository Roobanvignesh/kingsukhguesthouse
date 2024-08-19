import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { MenuItems } from './menuitem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Kingsukh Guest House</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.url.substring(1)} // Remove the leading #
              spy={true}
              smooth={true}
              offset={-70} // Adjusts for any fixed header
              duration={500}
              onClick={() => setIsOpen(false)} // Close the menu after click
            >
              <FontAwesomeIcon icon={item.icon} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
