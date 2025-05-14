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
