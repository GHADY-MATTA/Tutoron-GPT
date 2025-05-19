function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-red-800 font-medium">{message}</span>
        </div>
      </div>
    );
  }
  
  export default ErrorMessage;
  