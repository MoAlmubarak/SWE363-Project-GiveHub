import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cart.png';
import { Link as RouterLink } from 'react-router-dom'; // Alias for react-router's Link
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Continue using ScrollLink for in-page links

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="container">
      {/* Updated to use RouterLink to ensure it navigates to the root "/" */}
      <RouterLink to="/">
        <img src={logo} alt="Logo" className="logo" onClick={scrollToTop} />
      </RouterLink>
      <ul className="nav-links">
        {/* Change this Home link to use RouterLink if it should always lead to the "/" route */}
        <li>
          <RouterLink to="/" className="home-link">
            Home
          </RouterLink>
        </li>
        {/* Continue using ScrollLink for other links if they are meant for in-page navigation */}
        <li><ScrollLink activeClass="active" to="mission" spy={true} smooth={true} offset={-70} duration={500}>Mission</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="donate" spy={true} smooth={true} offset={-70} duration={500}>Donate</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="products" spy={true} smooth={true} offset={-70} duration={500}>Products</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="joinus" spy={true} smooth={true} offset={-70} duration={500}>Join Us</ScrollLink></li>
        <li><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</ScrollLink></li>
        <li>
          <button className="cart-button" aria-label="View shopping cart">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
