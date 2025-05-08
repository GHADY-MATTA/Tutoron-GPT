import { useState } from 'react';
import axios from 'axios';

function SummarizeViewer() {
  const [videoId, setVideoId] = useState('');
  const [title, setTitle] = useState('');
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary(null);

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/summarize-transcript', {
        video_id: videoId,
        title,
        transcript
      });
      setSummary(res.data.summary);
    } catch (err) {
      setError('❌ Failed to get summary');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">Summarize Transcript</h2>

      <form onSubmit={handleSummarize} className="space-y-4">
        <input
          type="text"
          placeholder="Video ID"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Transcript..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          className="w-full p-2 border rounded h-40"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>
      </form>

      {error && <div className="text-red-600">{error}</div>}

      {summary && (
        <div className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold">{summary.title}</h3>
          <p className="text-gray-700">{summary.summary}</p>
          <div>
            <h4 className="font-bold mt-4">Key Points:</h4>
            <ul className="list-disc list-inside text-gray-700">
              {summary.keyPoints?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SummarizeViewer;
