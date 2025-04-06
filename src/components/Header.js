
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create a CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">Vuniq</a>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <a href="/cart">
          <img src="cart-icon.png" alt="Cart" /> {/* Replace with actual cart icon */}
        </a>
      </div>
    </header>
  );
};

export default Header;
