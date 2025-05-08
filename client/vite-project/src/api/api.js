import axios from 'axios';

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api", //  Hardcoded for testing
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;

// 127.0.0.1   52.47.190.216