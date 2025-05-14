import { useEffect, useState } from 'react';
import axios from 'axios';

function SummarizeViewerManual() {
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
        { 
          Objective: '🎯',
          Summary: '📝',
          Highlights: '🌟',
          "Key Insights": '💡',
          "Key Points": '🔑',
          Concepts: '📚',
          Examples: '🌍',
          "Why It Matters": '❗',
          "What If Not Used": '⚠️',
          "Use Cases": '🏢',
          "Best Practices": '🏆',
          "Steps to Apply": '👣',
          Reflection: '🤔',
          Quiz: '🧠',
          "Explore More": '🔍',
          "Final Insight": '✨'
        }[title] || '📌'}
      {Array.isArray(content) ? (
        <ul className="space-y-3 pl-2">
          {content.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-500 mr-2">▹</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      ) : typeof content === 'object' ? (
        <div className="grid gap-3 md:grid-cols-2">
          {Object.entries(content).map(([key, val]) => (
            <div key={key} className="bg-white p-3 rounded-lg shadow-xs">
              <span className="text-sm font-medium text-blue-600">{key}:</span>
              <p className="text-gray-700 text-sm mt-1">{val}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 leading-relaxed text-sm">{content}</p>
      )}
  return (
    <div className="w-full p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          YouTube Summary Explorer
        </h1>
        <p className="text-gray-600">Transform Video content into structured knowledge</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
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
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-md'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2">🌀</span> Loading...
            </span>
          ) : (
            'Generate Summary'
          )}
        </button>
        {loading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2">🌀</span> Loading...
            </span>
          ) : (
            'Generate Summary'
          )}
        <div className="relative space-y-2">
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
