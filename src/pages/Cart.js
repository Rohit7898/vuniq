// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch the cart items from the backend when the component is mounted
  useEffect(() => {
    axiosInstance
      .get('/cart')
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    axiosInstance
      .post('/cart', { productId }) // Assuming the cart API expects a productId
      .then((response) => {
        setCartItems([...cartItems, response.data]);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
