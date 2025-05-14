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
