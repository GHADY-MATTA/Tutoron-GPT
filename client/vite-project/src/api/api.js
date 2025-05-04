import axios from 'axios';

const API = axios.create({
  baseURL: "http://35.180.110.219/api", // 🔥 Hardcoded for testing
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
