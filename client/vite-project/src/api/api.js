import axios from 'axios';

const API = axios.create({
  baseURL: "http://51.44.18.191:8000/api", //  Hardcoded for testing
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default API;
