import { useState } from 'react';
import axios from 'axios';
import { useVideo } from '../context/VideoContext';

function extractVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function UploadUrl() {
  const [url, setUrl] = useState('');
  const { setVideoId } = useVideo();
  const [localVideoId, setLocalVideoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function extractVideoId(url) {
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    const id = extractVideoId(url);
    if (!id) {
      setErrorMessage('❌ Invalid YouTube URL');
      setLoading(false);
      return;
    }
    setVideoId(id);
setLocalVideoId(id); // ✅ show immediately
console.log('📺 Extracted Video ID:', id);
const response = await axios.post(
  'http://52.47.190.216:8000/api/youtube-transcript',
  { url },
  {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  }
);
console.log('✅ Upload Success:', response.data);
setSuccessMessage('Video uploaded and transcript fetch started! wait couple seconds');
setUrl('');
} catch (err) {
  console.error('⛔ Upload Error:', err.response?.data || err.message);
  setErrorMessage('Video uploaded and transcript fetch started! wait couple seconds');
}
