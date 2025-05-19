function ErrorAlert({ message }) {
    if (!message) return null;
  
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
        <span className="mr-2">⚠️</span>
        {message}
      </div>
    );
  }
  
  export default ErrorAlert;
  