import { useState } from 'react';

function QuizViewer({ quiz }) {
  if (!quiz || quiz.length === 0) return null;

  return (
    <div className="mt-8 p-6 rounded-xl bg-white border border-gray-200 shadow-md space-y-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Quick Quiz</h3>
      {quiz.map((q, index) => (
        <QuizQuestion key={index} data={q} index={index} />
      ))}
    </div>
  );
}

function QuizQuestion({ data, index }) {
  const [selected, setSelected] = useState(null);

  const getClass = (key) => {
    if (!selected) return 'hover:bg-gray-100';
    if (key === data.correct) return 'bg-green-100 border-green-500';
    if (key === selected) return 'bg-red-100 border-red-500';
    return 'opacity-50';
  };

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-700">{index + 1}. {data.question}</p>
      <div className="grid gap-2">
        {Object.entries(data.options).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`text-left px-4 py-2 border rounded-lg transition-all ${getClass(key)}`}
            disabled={!!selected}
          >
            <span className="font-bold uppercase">{key})</span> {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizViewer;
