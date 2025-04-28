import { useState } from 'react';
import axios from 'axios';
import logoIcon from '../assets/Tutoron-gpt-logo.png'; // Correct logo path

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
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
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/login', form, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.data.token);
      window.location.href = '/'; // redirect after login
    } catch (err) {
      console.error('Login Error:', err.response?.data || err.message);
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
          Welcome Back
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-center text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-[var(--color-accent)] hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
