import { useEffect, useState } from 'react';
import axios from 'axios';

function SummarizeViewerManual() {
    // Component logic will be added here
}
const [videoId, setVideoId] = useState('');
const [summary, setSummary] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const [availableSummaries, setAvailableSummaries] = useState([]);
useEffect(() => {
  axios.get('http://localhost:8000/api/summaries')
      .then((res) => setAvailableSummaries(res.data))
      .catch(() => setAvailableSummaries([]));
}, []);
const handleFetch = async () => {
  if (!videoId) return;
  setLoading(true);
  setSummary(null);
  setError('');
  
  try {
      const res = await axios.get(`http://localhost:8000/api/summary/${videoId}`);
      if (res.data.status && res.data.summary) {
          setSummary(res.data.summary);
      } else {
          setError('❌ Summary not found.');
      }
  } catch (err) {
      console.error(err);
      setError('❌ Failed to fetch summary.');
  } finally {
      setLoading(false);
  }
};
const SectionCard = ({ title, content, colorClass = 'bg-blue-50 border-blue-200' }) => (
  <div className={`p-6 rounded-xl border-l-4 ${colorClass} shadow-sm transition-all hover:shadow-md`}>
      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3">
              {/* Emoji based on title */}
          </span>
          {title}
      </h4>
      {/* Display content based on its type */}
  </div>
);
return (
  <div className="w-full p-6 space-y-6">
      {/* Main UI for the SummarizeViewerManual */}
  </div>
);
<input
    type="text"
    placeholder="Enter YouTube Video ID (e.g. TdWEu0Ohoy8W)"
    value={videoId}
    onChange={(e) => setVideoId(e.target.value)}
    className="flex-1 px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
/>
<button
    onClick={handleFetch}
    disabled={loading || !videoId}
    className="px-6 py-3 rounded-lg font-medium transition-all"
>
    {loading ? 'Loading...' : 'Generate Summary'}
</button>
<select
    onChange={(e) => setVideoId(e.target.value)}
    value={videoId}
    className="w-full px-5 py-3 border border-gray-200 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
>
    <option value="">Browse top summaries...</option>
    {availableSummaries.map(({ id, title }) => (
        <option key={id} value={id}>
            {title} ({id})
        </option>
    ))}
</select>
