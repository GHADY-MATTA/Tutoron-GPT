import { useState } from 'react';

function QuizViewer({ quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowExplanation(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const question = quiz[currentQuestion];
  const isCorrect = selectedOption === question.correct;

  if (quizCompleted) {
    const correctAnswers = quiz.filter((q, i) => q.correct === selectedOption).length;
    const score = Math.round((correctAnswers / quiz.length) * 100);
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center mb-6">
            <span className="text-4xl font-bold">{score}%</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {score >= 70 ? "Great Job!" : "Keep Practicing!"}
          </h2>
          <p className="text-gray-600 mb-8">
            You completed the quiz with a score of {score}%
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500">Time Taken</p>
              <p className="text-xl font-bold text-gray-800">12:45</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500">Correct Answers</p>
              <p className="text-xl font-bold text-gray-800">{correctAnswers}/{quiz.length}</p>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
              Review Answers
            </button>
            <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium">
              Find Similar Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quick Knowledge Check</h2>
          <p className="text-gray-500">
            Question {currentQuestion + 1} of {quiz.length}
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-3">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${((currentQuestion + 1) / quiz.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-700 font-medium">
            {Math.round(((currentQuestion + 1) / quiz.length) * 100)}%
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>
        <div className="space-y-3">
          {Object.entries(question.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleOptionSelect(key)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedOption === key
                  ? isCorrect
                    ? "bg-green-50 border-green-300"
                    : "bg-red-50 border-red-300"
                  : selectedOption !== null && key === question.correct
                  ? "bg-green-50 border-green-300"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              } ${selectedOption !== null && "cursor-default"}`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  selectedOption === key
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : selectedOption !== null && key === question.correct
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {key.toUpperCase()}
                </div>
                <span>{value}</span>
              </div>
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="mt-6">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg 
                className={`w-5 h-5 mr-1 transition-transform ${showExplanation ? "rotate-180" : ""}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              {showExplanation ? "Hide explanation" : "Show explanation"}
            </button>
            {showExplanation && (
              <div className="mt-3 p-4 bg-blue-50 rounded-lg text-blue-800">
                <p>{question.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentQuestion === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={!selectedOption}
          className={`px-6 py-2 rounded-lg font-medium ${
            !selectedOption
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {currentQuestion === quiz.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default QuizViewer;
