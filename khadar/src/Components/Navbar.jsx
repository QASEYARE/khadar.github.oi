import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          {/* Add logo or site name here */}
        </a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Booking</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/info">INFO</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* Search bar */}
        <input type="text" className="search-bar" placeholder="Search..." />

        {/* Cart and User Icons */}
        <a href="/cart" className="cart-icon" aria-label="Shopping Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a>
        <a href="/account" className="user-icon" aria-label="User Account">
          <i className="fas fa-user"></i>
        </a>

        {/* Sign In and Sign Up Links */}
        <a href="/signin" className="signin-link">Sign In</a>
        <a href="/signup" className="signup-link">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
