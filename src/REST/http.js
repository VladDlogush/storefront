import axios from 'axios';
import API from '../services/API';

const http = {
  getProductsSelector: async () => {
    const response = await axios.get(API.getProductList);
    return response;
  },
};

export default http;
