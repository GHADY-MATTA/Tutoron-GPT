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
  finally {
    setLoading(false);
  }
};
return (
  <div className="min-h-screen bg-gradient-to-br from-[#006166] via-[#0C9DB1] to-[#54B5CD] flex flex-col items-center justify-center p-4 relative overflow-hidden font-inter">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_#054652aa]">
          Welcome to <span className="text-[#054652]">Tutoron-GPT</span>
        </h1>
        <p className="mt-2 text-lg text-white font-medium drop-shadow-sm">
          smart-learning-starts here
        </p>
      </div>
