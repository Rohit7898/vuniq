// src/pages/Products.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig'; // Import the Axios instance
import './Product.css'; // We'll style the product listing in the CSS file.

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from backend
    axiosInstance
      .get('/api/products') // Make sure this matches your backend endpoint
      .then((response) => {
        setProducts(response.data); // Assuming your response contains an array of products
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    
<div className="product-list-container">
<h1>Our Products</h1>
<div className="product-grid">
  {products.map((product) => (
    <div key={product.id} className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  ))}
</div>
</div>


  );
};

export default Products;
