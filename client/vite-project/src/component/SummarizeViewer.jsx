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
