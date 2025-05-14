import axios from 'axios';

const API = axios.create({
  baseURL: "http://52.47.190.216:8000/api", //  for now only to use
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
//  Inject token from localStorage (for Sanctum)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default API;

// 127.0.0.1   52.47.190.216
//52.47.190.216