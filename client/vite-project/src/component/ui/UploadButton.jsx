function UploadButton({ loading }) {
    return (
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-gradient-to-r from-[#1f7a8c] to-[#3a9fb3] text-white rounded-lg hover:from-[#3a9fb3] hover:to-[#1f7a8c] transition-all transform hover:-translate-y-0.5 shadow-md font-medium flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    );
  }
  
  export default UploadButton;
  