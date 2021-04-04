import axios from 'axios';
import API from '../services/API';

const http = {
  getProducts: async () => {
    const response = await axios.get(API.product);
    return response;
  },
  getCart: async () => {
    const response = await axios.get(API.cart);
    return response;
  },
  putCart: async updatedCart => {
    const response = await axios.put(API.cart, updatedCart);
    return response;
  },
};

export default http;
