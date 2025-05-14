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
