import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import logoIcon from '../assets/tutoron-gpt-logo.png';
const [form, setForm] = useState({ email: '', password: '' });
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);
const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);
  try {
    const response = await API.post('/login', form);
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('username', response.data.data.user.name);
    setSuccess('Login successful! Redirecting...');
  } catch (err) {
    console.error('⛔ Login Error:', err.response?.data || err.message);
    setError(err.response?.data?.message || 'Something went wrong.');
  }
