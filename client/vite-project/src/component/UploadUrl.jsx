import { useState } from 'react';
import axios from 'axios';
import { useVideo } from '../context/VideoContext';

function UploadUrl() {
    // Component logic will be added here
}
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
};
const id = extractVideoId(url);
if (!id) {
  setErrorMessage('❌ Invalid YouTube URL');
  setLoading(false);
  return;
}
setVideoId(id);
setLocalVideoId(id); // ✅ show immediately
console.log('📺 Extracted Video ID:', id);
try {
  const response = await axios.post(
    'http://52.47.190.216:8000/api/youtube-transcript',
    { url },
    { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
  );
  setSuccessMessage('Video uploaded and transcript fetch started! wait couple seconds');
  setUrl('');
} catch (err) {
  console.error('⛔ Upload Error:', err.response?.data || err.message);
  setErrorMessage('❌ Failed to upload video or fetch transcript');
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
  </div>
  <button
    type="submit"
    disabled={loading}
    className="px-6 py-3 bg-gradient-to-r from-[#1f7a8c] to-[#3a9fb3] text-white rounded-lg"
  >
    {loading ? 'Uploading...' : 'Upload'}
  </button>
</form>
{localVideoId && (
  <div className="mt-4 text-sm text-blue-600">
    📺 Video ID: <code className="font-mono bg-gray-100 px-2 py-1 rounded">{localVideoId}</code>
  </div>
)}
{successMessage && (
  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
    <div className="flex items-center">
      <span className="text-green-800 font-medium">{successMessage}</span>
    </div>
  </div>
)}
{errorMessage && (
  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
    <div className="flex items-center">
      <span className="text-red-800 font-medium">{errorMessage}</span>
    </div>
  </div>
)}
const isValidUrl = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/)+|youtu\.be\/)[a-zA-Z0-9_-]{11}/);
if (!isValidUrl) {
  setErrorMessage('❌ Invalid YouTube URL');
  setLoading(false);
  return;
}
className={`px-6 py-3 bg-gradient-to-r from-[#1f7a8c] to-[#3a9fb3] text-white rounded-lg ${loading ? 'cursor-not-allowed' : 'hover:from-[#3a9fb3] hover:to-[#1f7a8c]'} transition-all`}
{loading ? (
  <span className="flex items-center justify-center">
    <span className="animate-spin mr-2">🌀</span> Loading...
  </span>
) : (
  'Upload'
)}
