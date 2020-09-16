import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ecom8-26530/us-central1/api',
});

export default instance;
