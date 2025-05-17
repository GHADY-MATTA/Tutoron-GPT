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
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

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
    setLocalVideoId(id);
    console.log('📺 Extracted Video ID:', id);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/youtube-transcript',
        { url },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      console.log('✅ Upload Success:', response.data);
      setSuccessMessage('Video uploaded and transcript fetch started! wait couple seconds');
      setUrl('');

      // ✅ Additional request to log user + video info
      await axios.post('http://127.0.0.1:8000/api/log-user-video', {
        user_id: userId,
        video_url: url,
        youtube_video_id: id
      });

    } catch (err) {
      console.error('⛔ Upload Error:', err.response?.data || err.message);
      setErrorMessage('Video uploaded and transcript fetch started! wait couple seconds');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">Upload YouTube URL</h2>
          <span className="text-sm text-gray-500">Supports all YouTube URLs</span>
        </div>

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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
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
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800 font-medium">{successMessage}</span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-800 font-medium">{errorMessage}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default UploadUrl;
