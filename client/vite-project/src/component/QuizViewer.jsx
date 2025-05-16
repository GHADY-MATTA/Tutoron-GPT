import { useState } from 'react';

function QuizViewer({ quiz }) {
  if (!quiz || quiz.length === 0) return null;

  return (
    <div className="mt-10 w-full max-w-3xl mx-auto p-6 rounded-xl bg-white border border-gray-200 shadow-lg space-y-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🧠 Quick Knowledge Check</h2>
        <p className="text-gray-500">Select the best answer for each question below.</p>
      </div>

      {quiz.map((q, index) => (
        <QuizQuestion key={index} data={q} index={index} />
      ))}
    </div>
  );
}

function QuizQuestion({ data, index }) {
  const [selected, setSelected] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleSelect = (key) => {
    if (!selected) {
      setSelected(key);
      setShowCorrect(true);
    }
  };

  const getButtonStyle = (key) => {
    if (!showCorrect) {
      return selected === key
        ? 'bg-blue-50 border-blue-300 shadow'
        : 'hover:bg-gray-50';
    }

    if (key === data.correct) return 'bg-green-50 border-green-300 shadow';
    if (key === selected) return 'bg-red-50 border-red-300 shadow';
    return 'opacity-50';
  };

  const getBadgeColor = (key) => {
    if (!showCorrect) {
      return selected === key ? 'bg-blue-600 text-white' : 'bg-gray-200';
    }

    if (key === data.correct) return 'bg-green-600 text-white';
    if (key === selected) return 'bg-red-600 text-white';
    return 'bg-gray-200';
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 mb-1">Question {index + 1}</div>
      <h3 className="text-lg font-semibold text-gray-800">{data.question}</h3>

      <div className="grid gap-3">
        {Object.entries(data.options).map(([key, val]) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={`w-full text-left p-4 border rounded-lg transition-all duration-200 ${getButtonStyle(key)}`}
            disabled={!!selected}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${getBadgeColor(key)}`}>
                {key.toUpperCase()}
              </div>
              <div className="text-gray-700">{val}</div>
            </div>

            {/* Feedback text */}
            {showCorrect && data.correct === key && (
              <div className="mt-2 ml-10 text-sm text-green-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Correct Answer
              </div>
            )}
            {showCorrect && selected === key && selected !== data.correct && (
              <div className="mt-2 ml-10 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Incorrect Answer
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizViewer;
