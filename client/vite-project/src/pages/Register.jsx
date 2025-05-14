import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import logoIcon from '../assets/tutoron-gpt-logo.png';
const [form, setForm] = useState({
  name: '',
  email: '',
  password: '',
});
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const [form, setForm] = useState({
  name: '',
  email: '',
  password: '',
});
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);
  try {
    const response = await API.post('/register', form);
    console.log('✅ Registration Success:', response.data);
    setSuccess('Account created! Redirecting to login...');
    setTimeout(() => navigate('/login'), 2000);
    setSuccess('Account created! Redirecting to login...');
    setTimeout(() => navigate('/login'), 2000);
  } catch (err) {
    console.error('⛔ Registration Error:', err.response?.data || err.message);
    setError(err.response?.data?.message || 'Something went wrong.');
  }
  finally {
    setLoading(false);
  }
};
<div className="text-center mb-8">
<h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_#054652aa]">
  Join <span className="text-[#054652]">Tutoron-GPT</span>
</h1>
<p className="mt-2 text-lg text-white font-medium drop-shadow-sm">
  smart-learning-starts here
</p>
</div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-[#054652] border border-[#0C9DB1] drop-shadow-[0_0_30px_#0C9DB155]">
        <div className="flex justify-center mb-6">
          <img src={logoIcon} alt="Tutoron-GPT Logo" className="h-16 w-16 drop-shadow-md" />
        </div>
        {success && (
          <div className="mb-4 text-center text-green-700 bg-green-100 rounded p-2 text-sm">
            {success}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-[#f0f9fb] text-[#054652] border border-[#0C9DB1] focus:outline-none focus:ring-2 focus:ring-[#0C9DB1]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-[#f0f9fb] text-[#054652] border border-[#0C9DB1] focus:outline-none focus:ring-2 focus:ring-[#0C9DB1]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-[#f0f9fb] text-[#054652] border border-[#0C9DB1] focus:outline-none focus:ring-2 focus:ring-[#0C9DB1]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white font-semibold rounded-lg transition-all
              bg-gradient-to-r from-[#006166] to-[#0C9DB1]
              hover:from-[#0C9DB1] hover:to-[#054652]
              hover:shadow-[0_0_20px_#0C9DB1]
              active:scale-95 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
          <p className="text-center text-sm mt-6 text-[#054652]">
          Already have an account?{' '}
          <a href="/login" className="underline text-[#0C9DB1] hover:text-[#006166] font-medium">
            Log In
          </a>
        </p>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#54B5CD]/30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#006166]/40 rounded-full blur-2xl animate-pulse -z-10" />
