
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Change this to your backend URL
});

export const getProducts = () => {
  return api.get('/products');
};

export const getProductById = (id) => {
  return api.get(`/products/${id}`);
};
