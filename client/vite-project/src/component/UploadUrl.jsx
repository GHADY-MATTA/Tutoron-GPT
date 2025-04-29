import { useState } from 'react';
import axios from 'axios';

function UploadUrl() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:8000/api/youtube-transcript', { url }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      console.log('✅ Upload Success:', response.data);
      setSuccessMessage('Video uploaded and transcript fetched successfully!');
      setUrl(''); // Clear the input after successful upload
    } catch (err) {
      console.error('⛔ Upload Error:', err.response?.data || err.message);
      setErrorMessage('Failed to upload or fetch transcript.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
            Upload YouTube Video
          </h2>
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

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mt-4 text-green-600 font-medium">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mt-4 text-red-600 font-medium">{errorMessage}</div>
        )}
      </div>

      {/* Content Display Area */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 min-h-[400px]">
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Your Video Content</h3>
          <p className="text-gray-500 max-w-md">
            Upload a YouTube video to generate summarized notes, transcripts, and key insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadUrl;
