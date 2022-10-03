import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:2247'
});

export default api;