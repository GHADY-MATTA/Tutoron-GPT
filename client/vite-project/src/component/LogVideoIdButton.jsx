function LogVideoIdButton({ videoId }) {
  const handleClick = () => {
    console.log('🎬 Stored Video ID:', videoId);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Log Video ID
    </button>
  );
}

export default LogVideoIdButton;
