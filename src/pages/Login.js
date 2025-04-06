// src/pages/Login.js
import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post('/login', { email, password }) // Backend login endpoint
      .then((response) => {
        console.log('Login successful', response.data);
        // Handle login success (e.g., save token in localStorage or state)
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
