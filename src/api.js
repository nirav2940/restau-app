import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://205.134.254.135/~mobile/interview/public/api',
});

export default api;
