function InputWithButton({ value, onChange, onClick, loading, disabled }) {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter YouTube Video ID (e.g. TdWEu0Ohoy8W)"
          value={value}
          onChange={onChange}
          className="flex-1 px-5 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
        />
        <button
          onClick={onClick}
          disabled={loading || disabled}
          className={`px-6 py-3 rounded-lg font-medium transition-all ${
            loading ? 'bg-gray-300 cursor-not-allowed' :
            'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-md'
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
      </div>
    );
  }
  
  export default InputWithButton;
  