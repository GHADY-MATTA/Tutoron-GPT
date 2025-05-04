import axios from 'axios';

const API = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
  baseURL: "http://backend:80/api" 
  ,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If you’re using cookies (e.g., Laravel Sanctum)
});

export default API;

