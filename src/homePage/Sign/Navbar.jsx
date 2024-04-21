import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/cart.png'; // Assuming you have a cart icon image

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>Mission</li>
        <li>Donate</li>
        <li>Product</li>
        <li>Join us</li>
        <li>Contact us</li>
        <li>
          <button className="cart-button">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
