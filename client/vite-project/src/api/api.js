import axios from 'axios';

const API = axios.create({
  baseURL: "http://backend:80/api", //  Hardcoded for testing
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
