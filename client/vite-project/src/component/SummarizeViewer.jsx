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
