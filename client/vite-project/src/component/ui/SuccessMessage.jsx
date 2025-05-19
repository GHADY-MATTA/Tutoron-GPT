function SuccessMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800 font-medium">{message}</span>
        </div>
      </div>
    );
  }
  
  export default SuccessMessage;
  