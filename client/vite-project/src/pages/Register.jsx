import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Important: useNavigate
// import axios from 'axios';
import API from '../api/api';

import logoIcon from '../assets/tutoron-gpt-logo.png'; // correct path

function Register() {
  const navigate = useNavigate(); // ✅ Hook to navigate in React

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // ✅ success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // const response = await axios.post('http://localhost:8000/api/register', form, {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // });
      const response = await API.post('/register', form);


      console.log('✅ Registration Success Response:', response.data);

      setSuccess('Account created successfully! Redirecting to login...'); // ✅ Show message
      setTimeout(() => {
        navigate('/login'); // ✅ Smooth navigation after 2s
      }, 2000);
    } catch (err) {
      console.error('⛔ Registration Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] p-4">
      <div className="w-full max-w-md bg-[var(--color-primary)] rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-14 w-14" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-8">
          Create Your Account
        </h2>

        {/* Error or Success Messages */}
        {error && (
          <div className="mb-4 text-center text-red-600 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-center text-green-600 text-sm bg-green-100 p-2 rounded-md">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-secondary)] mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-secondary)] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-secondary)] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-md font-semibold transition-all duration-300 
              bg-[var(--color-accent)] text-[var(--color-primary)] 
              hover:bg-[var(--color-accent-light)] 
              hover:shadow-md hover:-translate-y-1 
              active:scale-95 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Register'}
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-[var(--color-accent)] hover:underline font-semibold">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
