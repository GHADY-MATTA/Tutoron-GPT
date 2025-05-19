function VideoIdDisplay({ id }) {
    if (!id) return null;
  
    return (
      <div className="mt-4 text-sm text-blue-600">
        📺 Video ID: <code className="font-mono bg-gray-100 px-2 py-1 rounded">{id}</code>
      </div>
    );
  }
  
  export default VideoIdDisplay;
  