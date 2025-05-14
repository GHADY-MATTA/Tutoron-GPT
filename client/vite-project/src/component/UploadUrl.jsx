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
finally {
  setLoading(false);
}
<form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 relative">
    <input
      type="url"
      placeholder="Enter YouTube video URL..."
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      required
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] focus:border-[#1f7a8c] transition-all"
    />
    <span className="absolute right-3 top-3 text-gray-400 text-sm">⌘V</span>
  </div>
  <button
  type="submit"
  disabled={loading}
  className="px-6 py-3 bg-gradient-to-r from-[#1f7a8c] to-[#3a9fb3] text-white rounded-lg hover:from-[#3a9fb3] hover:to-[#1f7a8c] transition-all transform hover:-translate-y-0.5 shadow-md font-medium flex items-center justify-center"
>
  {loading ? (
    <span className="flex items-center justify-center">
      <span className="animate-spin mr-2">🌀</span> Loading...
    </span>
  ) : (
    'Upload'
  )}
</button>
